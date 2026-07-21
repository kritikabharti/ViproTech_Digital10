// middleware/parseFormData.js
export const parseFormData = (req, res, next) => {
  // Only run for POST and PUT requests
  if (req.method === 'POST' || req.method === 'PUT') {
    // Check if the request has form data with skills or socialLinks
    if (req.body && typeof req.body === 'object') {
      // Parse skills if it's a string
      if (req.body.skills && typeof req.body.skills === 'string') {
        try {
          req.body.skills = JSON.parse(req.body.skills);
        } catch (e) {
          req.body.skills = [];
        }
      }
      
      // Parse socialLinks if it's a string
      if (req.body.socialLinks && typeof req.body.socialLinks === 'string') {
        try {
          req.body.socialLinks = JSON.parse(req.body.socialLinks);
          console.log('✅ socialLinks parsed in middleware:', req.body.socialLinks);
        } catch (e) {
          console.log('❌ socialLinks parse error in middleware:', e.message);
          req.body.socialLinks = {
            linkedin: '',
            github: '',
            twitter: '',
            portfolio: ''
          };
        }
      }
      
      // Ensure socialLinks is an object with proper fields
      if (req.body.socialLinks && typeof req.body.socialLinks === 'object') {
        req.body.socialLinks = {
          linkedin: req.body.socialLinks.linkedin || '',
          github: req.body.socialLinks.github || '',
          twitter: req.body.socialLinks.twitter || '',
          portfolio: req.body.socialLinks.portfolio || '',
        };
        console.log('✅ socialLinks after middleware:', req.body.socialLinks);
      }
    }
  }
  next();
};