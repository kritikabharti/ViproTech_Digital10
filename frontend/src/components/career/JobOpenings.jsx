// components/career/JobOpenings.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  DollarSign, 
  ChevronRight, 
  ChevronDown,
  Search,
  Filter,
  X,
  Users,
  Award,
  TrendingUp,
  Zap,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import './JobOpenings.css';

// Sample job data - Replace with your actual data from backend
const jobData = [
  {
    id: 1,
    title: "Senior Full Stack Developer",
    department: "Engineering",
    location: "Mohali, Punjab",
    type: "Full-Time",
    experience: "5-8 years",
    salary: "₹12L - ₹18L PA",
    posted: "2 days ago",
    deadline: "2026-08-30",
    description: "We're looking for a Senior Full Stack Developer with expertise in React, Node.js, and MongoDB to lead our development team.",
    requirements: [
      "5+ years of experience in Full Stack Development",
      "Expertise in React, Node.js, and MongoDB",
      "Experience with cloud platforms (AWS/Azure)",
      "Leadership and mentoring skills"
    ],
    benefits: [
      "Competitive salary",
      "Health insurance",
      "Flexible working hours",
      "Professional development budget"
    ],
    status: "Active",
    isUrgent: true
  },
  {
    id: 2,
    title: "UI/UX Designer",
    department: "Design",
    location: "Mohali, Punjab",
    type: "Full-Time",
    experience: "2-4 years",
    salary: "₹6L - ₹10L PA",
    posted: "5 days ago",
    deadline: "2026-09-15",
    description: "Join our design team to create beautiful, intuitive user interfaces for web and mobile applications.",
    requirements: [
      "2+ years of UI/UX design experience",
      "Proficiency in Figma, Adobe XD, or Sketch",
      "Strong portfolio showcasing design work",
      "Understanding of user-centered design principles"
    ],
    benefits: [
      "Competitive salary",
      "Health insurance",
      "Creative work environment",
      "Learning and development opportunities"
    ],
    status: "Active",
    isUrgent: false
  },
  {
    id: 3,
    title: "Digital Marketing Specialist",
    department: "Marketing",
    location: "Mohali, Punjab",
    type: "Full-Time",
    experience: "3-5 years",
    salary: "₹6L - ₹12L PA",
    posted: "1 week ago",
    deadline: "2026-09-10",
    description: "Drive digital growth through SEO, social media, content marketing, and paid advertising strategies.",
    requirements: [
      "3+ years in digital marketing",
      "Expertise in SEO, SEM, and social media marketing",
      "Experience with Google Analytics and Ads",
      "Content strategy and creation skills"
    ],
    benefits: [
      "Competitive salary",
      "Performance bonuses",
      "Health insurance",
      "Work-life balance"
    ],
    status: "Active",
    isUrgent: false
  },
  {
    id: 4,
    title: "DevOps Engineer",
    department: "Engineering",
    location: "Mohali, Punjab",
    type: "Full-Time",
    experience: "3-6 years",
    salary: "₹10L - ₹16L PA",
    posted: "3 days ago",
    deadline: "2026-08-25",
    description: "Build and maintain our cloud infrastructure, CI/CD pipelines, and ensure system reliability and scalability.",
    requirements: [
      "3+ years in DevOps or Site Reliability Engineering",
      "Expertise in AWS, Docker, and Kubernetes",
      "Experience with CI/CD pipelines",
      "Strong scripting and automation skills"
    ],
    benefits: [
      "Competitive salary",
      "Health insurance",
      "Remote work options",
      "Professional development budget"
    ],
    status: "Active",
    isUrgent: true
  },
  {
    id: 5,
    title: "React Native Developer",
    department: "Engineering",
    location: "Mohali, Punjab",
    type: "Full-Time",
    experience: "2-4 years",
    salary: "₹7L - ₹12L PA",
    posted: "4 days ago",
    deadline: "2026-09-05",
    description: "Develop cross-platform mobile applications using React Native for iOS and Android.",
    requirements: [
      "2+ years in React Native development",
      "Experience with mobile app architecture",
      "Knowledge of native iOS/Android is a plus",
      "Strong problem-solving skills"
    ],
    benefits: [
      "Competitive salary",
      "Health insurance",
      "Flexible working hours",
      "Career growth opportunities"
    ],
    status: "Active",
    isUrgent: false
  }
];

export default function JobOpenings() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('All');
  const [selectedType, setSelectedType] = useState('All');
  const [expandedJob, setExpandedJob] = useState(null);
  const [showFilters, setShowFilters] = useState(false);

  const departments = ['All', 'Engineering', 'Design', 'Marketing', 'HR', 'Management'];
  const jobTypes = ['All', 'Full-Time', 'Part-Time', 'Internship', 'Contract'];

  // Filter jobs based on search and filters
  const filteredJobs = jobData.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          job.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          job.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = selectedDepartment === 'All' || job.department === selectedDepartment;
    const matchesType = selectedType === 'All' || job.type === selectedType;
    return matchesSearch && matchesDepartment && matchesType;
  });

  const toggleJobExpand = (id) => {
    setExpandedJob(expandedJob === id ? null : id);
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedDepartment('All');
    setSelectedType('All');
  };

  return (
    <section className="job-openings-section">
      <div className="job-openings-container">
        {/* Section Header */}
        <motion.div
          className="job-openings-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="section-tag">CAREER OPPORTUNITIES</span>
          <h2 className="section-title">
            Current <span className="highlight">Job Openings</span>
          </h2>
          <p className="section-description">
            Join our team and be part of something amazing. We're looking for talented 
            individuals who are passionate about technology and innovation.
          </p>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          className="job-stats-bar"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="stat-item">
            <Briefcase size={22} />
            <span className="stat-number">{jobData.length}</span>
            <span className="stat-label">Open Positions</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <Users size={22} />
            <span className="stat-number">12+</span>
            <span className="stat-label">Team Members</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <Award size={22} />
            <span className="stat-number">95%</span>
            <span className="stat-label">Employee Satisfaction</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <TrendingUp size={22} />
            <span className="stat-number">150+</span>
            <span className="stat-label">Projects Delivered</span>
          </div>
        </motion.div>

        {/* Search & Filters */}
        <motion.div
          className="job-filters"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="search-wrapper">
            <Search size={20} className="search-icon" />
            <input
              type="text"
              placeholder="Search jobs by title, department, or location..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            {searchTerm && (
              <button className="clear-search" onClick={() => setSearchTerm('')}>
                <X size={18} />
              </button>
            )}
          </div>

          <button 
            className="filter-toggle"
            onClick={() => setShowFilters(!showFilters)}
          >
            <Filter size={18} />
            Filters
            <ChevronDown size={16} className={showFilters ? 'rotate' : ''} />
          </button>
        </motion.div>

        {/* Filter Dropdowns */}
        <AnimatePresence>
          {showFilters && (
            <motion.div
              className="filter-dropdowns"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="filter-group">
                <label>Department</label>
                <div className="filter-options">
                  {departments.map((dept) => (
                    <button
                      key={dept}
                      className={`filter-option ${selectedDepartment === dept ? 'active' : ''}`}
                      onClick={() => setSelectedDepartment(dept)}
                    >
                      {dept}
                    </button>
                  ))}
                </div>
              </div>

              <div className="filter-group">
                <label>Job Type</label>
                <div className="filter-options">
                  {jobTypes.map((type) => (
                    <button
                      key={type}
                      className={`filter-option ${selectedType === type ? 'active' : ''}`}
                      onClick={() => setSelectedType(type)}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <button className="clear-filters-btn" onClick={clearFilters}>
                Clear All Filters
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Results Count */}
        <div className="results-count">
          <span>Showing {filteredJobs.length} of {jobData.length} positions</span>
        </div>

        {/* Job Cards */}
        <motion.div
          className="job-cards-container"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job, index) => (
              <motion.div
                key={job.id}
                className={`job-card ${expandedJob === job.id ? 'expanded' : ''}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="job-card-header" onClick={() => toggleJobExpand(job.id)}>
                  <div className="job-info">
                    <div className="job-title-wrapper">
                      <h3 className="job-title">{job.title}</h3>
                      {job.isUrgent && (
                        <span className="urgent-badge">
                          <Zap size={14} />
                          Urgent
                        </span>
                      )}
                      <span className={`status-badge ${job.status.toLowerCase()}`}>
                        {job.status}
                      </span>
                    </div>
                    <div className="job-meta">
                      <span className="meta-item">
                        <Briefcase size={16} />
                        {job.department}
                      </span>
                      <span className="meta-item">
                        <MapPin size={16} />
                        {job.location}
                      </span>
                      <span className="meta-item">
                        <Clock size={16} />
                        {job.type}
                      </span>
                      <span className="meta-item">
                        <DollarSign size={16} />
                        {job.salary}
                      </span>
                    </div>
                  </div>
                  <div className="job-expand-icon">
                    <ChevronRight size={24} className={expandedJob === job.id ? 'rotate' : ''} />
                  </div>
                </div>

                <AnimatePresence>
                  {expandedJob === job.id && (
                    <motion.div
                      className="job-card-body"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="job-description">
                        <p>{job.description}</p>
                      </div>

                      <div className="job-details-grid">
                        <div className="detail-section">
                          <h4>Requirements</h4>
                          <ul>
                            {job.requirements.map((req, idx) => (
                              <li key={idx}>{req}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="detail-section">
                          <h4>Benefits</h4>
                          <ul>
                            {job.benefits.map((benefit, idx) => (
                              <li key={idx}>{benefit}</li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="job-footer">
                        <div className="job-deadline">
                          <Clock size={16} />
                          <span>Apply by: {new Date(job.deadline).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                        </div>
                        <button className="apply-btn">
                          Apply Now
                          <ArrowRight size={18} />
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))
          ) : (
            <div className="no-jobs">
              <Briefcase size={48} />
              <h3>No positions found</h3>
              <p>Try adjusting your search or filters</p>
              <button className="clear-filters-btn" onClick={clearFilters}>
                Clear Filters
              </button>
            </div>
          )}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="job-openings-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <h3>Don't see the right role?</h3>
          <p>We're always looking for talented people. Send us your resume and we'll reach out!</p>
          <button className="cta-btn">
            <Sparkles size={18} />
            Submit Your Resume
          </button>
        </motion.div>
      </div>
    </section>
  );
}