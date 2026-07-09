// components/Reviews.jsx
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Star, 
  ThumbsUp, 
  ThumbsDown, 
  Calendar, 
  User, 
  MessageCircle,
  X,
  Send,
  Award,
  TrendingUp,
  Users,
  Camera
} from 'lucide-react';

import './Reviews.css';

// Generate avatar URL from name (always works)
const getAvatarUrl = (name) => {
  return `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=4F46E5&color=fff&size=100&bold=true&font-size=0.5`;
};

// Mock reviews data with working images
const MOCK_REVIEWS = [
  {
    id: 1,
    name: "Varinder Chauhan",
    rating: 5,
    date: "2026-01-09",
    review: "I had a wonderful experience at this institute. The trainers are experienced, the classes are well-structured, and the staff is very cooperative. The institute focuses on both theoretical and practical learning, which really helped me understand the concepts clearly. Definitely one of the best places to learn",
    image: "/varinder.png",
    likes: 12,
    dislikes: 0,
    verified: true,
   
  },
  {
    id: 2,
    name: "Ishan Badshah",
    rating: 4,
    date: "2026-02-09",
    review: "I have completed Auto Cad 3d and 2d designing training from Vprotech digital company. My sir (RAJAT)was very kind and supportive and He guides us through every task with patience and clearly . All the staff members treat every student with great care. I feel very good and happy being a part of this place.MY expirence is very good please visit and take down your honest reviews😊",
    image: "/ishan.png",
    likes: 8,
    dislikes: 0,
    verified: true,
  
  },
  {
    id: 3,
    name: "Gurleen Kaur",
    rating: 5,
    date: "2026-06-25",
    review: "Recently, I have completed my Industrial Training in the field of AI ML and my experience here was so good. My guide taught everything in a very easy manner. All of my doubts were cleared and resolved timely. Positive Behaviour from the whole staff members. My overall experience was really nice.",
    image: "https://ui-avatars.com/api/?name=Gurleen+Kaur&background=8B5CF6&color=fff&size=100&bold=true",
    likes: 15,
    dislikes: 0,
    verified: true,
  
  },
  
  {
    id: 5,
    name: "Gurkirat Singh",
    rating: 5,
    date: "2026-04-05",
    review: "had a very positive and valuable experience with [vprotech digital], especially from a learning and academic point of view. This company provides a well-structured, student-friendly, and knowledge-focused environment that helps learners build both theoretical understanding and practical skills.The training and guidance offered were highly educational and clearly explained, making even complex topics easy to understand. The mentors and instructors were very supportive, patient, and always ready to clear doubts. They focused not only on completing the syllabus but also on making sure that concepts were understood deeply, which is very helpful for students and beginners.One of the best things about this company is its practical learning approach. Along with theory, we were encouraged to apply concepts through real-world examples, assignments, and hands-on activities. This helped me improve my problem-solving skills, confidence, and overall understanding of the subject.The study material provided was well-organized, updated, and relevant to current industry standards. The learning environment was professional, positive, and motivating, which made studying more interesting and effective. Time management, discipline, and professional behavior were also emphasized, which is very important for students’ overall development.Overall, [vprotech digital] is an excellent platform for students who want to gain quality education, practical exposure, and career-oriented skills. I would highly recommend this company to students looking for a strong learning foundation, academic growth, and skill development. It is truly a great place to learn, grow, and prepare for future opportunities.",
    image: "/gurkirat.png",
    likes: 20,
    dislikes: 0,
    verified: true,
  
  }
];

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [showWriteReview, setShowWriteReview] = useState(false);
  const [selectedRating, setSelectedRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [sortBy, setSortBy] = useState('latest');
  const [filterRating, setFilterRating] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [submitLoading, setSubmitLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);
  const fileInputRef = useRef(null);

  const [newReview, setNewReview] = useState({
    name: '',
    review: '',
    rating: 0,
    image: '',
    imageFile: null
  });

  //Load reviews from localStorage or use mock data
  useEffect(() => {
    const savedReviews = localStorage.getItem('vprotech_reviews');
    if (savedReviews) {
      setReviews(JSON.parse(savedReviews));
    } else {
      setReviews(MOCK_REVIEWS);
      localStorage.setItem('vprotech_reviews', JSON.stringify(MOCK_REVIEWS));
    }
  }, []);

  // Save reviews to localStorage when updated
  useEffect(() => {
    if (reviews.length > 0) {
      localStorage.setItem('vprotech_reviews', JSON.stringify(reviews));
    }
  }, [reviews]);

  // Get statistics
  const totalReviews = reviews.length;
  const averageRating = totalReviews > 0 
    ? (reviews.reduce((sum, r) => sum + r.rating, 0) / totalReviews).toFixed(1)
    : 0;
  const ratingDistribution = [5, 4, 3, 2, 1].map(rating => ({
    stars: rating,
    count: reviews.filter(r => Math.floor(r.rating) === rating).length,
    percentage: totalReviews > 0 
      ? (reviews.filter(r => Math.floor(r.rating) === rating).length / totalReviews) * 100 
      : 0
  }));

  // Filter and sort reviews
  const getFilteredReviews = () => {
    let filtered = [...reviews];

    if (filterRating > 0) {
      filtered = filtered.filter(r => Math.floor(r.rating) === filterRating);
    }

    if (searchTerm.trim()) {
      const term = searchTerm.toLowerCase().trim();
      filtered = filtered.filter(r => 
        r.name.toLowerCase().includes(term) ||
        r.review.toLowerCase().includes(term)
      );
    }

    switch (sortBy) {
      case 'latest':
        filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
        break;
      case 'oldest':
        filtered.sort((a, b) => new Date(a.date) - new Date(b.date));
        break;
      case 'highest':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'lowest':
        filtered.sort((a, b) => a.rating - b.rating);
        break;
      case 'likes':
        filtered.sort((a, b) => b.likes - a.likes);
        break;
      default:
        break;
    }

    return filtered;
  };

  const filteredReviews = getFilteredReviews();

  const handleLike = (id, type) => {
    setReviews(prev => prev.map(review => {
      if (review.id === id) {
        return {
          ...review,
          likes: type === 'like' ? review.likes + 1 : review.likes,
          dislikes: type === 'dislike' ? review.dislikes + 1 : review.dislikes
        };
      }
      return review;
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert('Image size should be less than 5MB');
        return;
      }

      if (!file.type.startsWith('image/')) {
        alert('Please upload an image file');
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        setNewReview(prev => ({
          ...prev,
          image: reader.result,
          imageFile: file
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setImagePreview(null);
    setNewReview(prev => ({
      ...prev,
      image: '',
      imageFile: null
    }));
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  // Handle image error - fallback to initials
  const handleImageError = (e, name) => {
    // Instead of trying to fix the image, replace it with a generated avatar
    const imgElement = e.target;
    const parent = imgElement.parentElement;
    
    // Create a canvas to draw initials
    const canvas = document.createElement('canvas');
    canvas.width = 100;
    canvas.height = 100;
    const ctx = canvas.getContext('2d');
    
    // Draw background
    const colors = ['#4F46E5', '#6366F1', '#8B5CF6', '#EC4899', '#14B8A6', '#F59E0B', '#EF4444'];
    const colorIndex = name.length % colors.length;
    ctx.fillStyle = colors[colorIndex];
    ctx.beginPath();
    ctx.arc(50, 50, 50, 0, Math.PI * 2);
    ctx.fill();
    
    // Draw text
    ctx.fillStyle = '#FFFFFF';
    ctx.font = 'bold 40px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(name.charAt(0).toUpperCase(), 50, 50);
    
    // Replace image with canvas
    imgElement.style.display = 'none';
    const canvasElement = document.createElement('img');
    canvasElement.src = canvas.toDataURL('image/png');
    canvasElement.alt = name;
    canvasElement.className = 'avatar-image';
    parent.appendChild(canvasElement);
  };

  const handleSubmitReview = (e) => {
    e.preventDefault();
    
    if (!newReview.name.trim() || !newReview.review.trim() || selectedRating === 0) {
      alert('Please fill all required fields and select a rating');
      return;
    }

    setSubmitLoading(true);

    setTimeout(() => {
      const review = {
        id: Date.now(),
        name: newReview.name.trim(),
        rating: selectedRating,
        date: new Date().toISOString().split('T')[0],
        review: newReview.review.trim(),
        image: newReview.image || getAvatarUrl(newReview.name.trim()),
        likes: 0,
        dislikes: 0,
        verified: true,
        location: 'India'
      };

      setReviews(prev => [review, ...prev]);
      setNewReview({ name: '', review: '', rating: 0, image: '', imageFile: null });
      setSelectedRating(0);
      setImagePreview(null);
      setShowWriteReview(false);
      setSubmitLoading(false);
      
      alert('✅ Review submitted successfully! Thank you for your feedback.');
    }, 1000);
  };

  const renderStars = (rating, interactive = false, size = 20) => {
    return Array.from({ length: 5 }, (_, i) => {
      const starValue = i + 1;
      const filled = interactive 
        ? starValue <= (hoverRating || selectedRating)
        : starValue <= rating;

      return (
        <Star
          key={i}
          size={size}
          className={`star ${filled ? 'filled' : 'empty'} ${interactive ? 'interactive' : ''}`}
          fill={filled ? '#FFD700' : 'none'}
          color={filled ? '#FFD700' : '#CBD5E1'}
          onMouseEnter={() => interactive && setHoverRating(starValue)}
          onMouseLeave={() => interactive && setHoverRating(0)}
          onClick={() => interactive && setSelectedRating(starValue)}
        />
      );
    });
  };

  return (
    <div className="reviews-container">
      {/* Header */}
      <div className="reviews-header">
        <div className="reviews-header-left">
          <h2>Client Reviews</h2>
          <p>Real feedback from our students and clients</p>
        </div>
        <button 
          className="write-review-btn"
          onClick={() => setShowWriteReview(true)}
        >
          <MessageCircle size={18} />
          Write a Review
        </button>
      </div>

      {/* Stats */}
      <div className="reviews-stats">
        <div className="stats-card">
          <div className="stats-rating">
            <span className="rating-number">{averageRating}</span>
            <div className="rating-stars-big">
              {renderStars(parseFloat(averageRating), false, 24)}
            </div>
            <span className="rating-total">{totalReviews} reviews</span>
          </div>
        </div>

        <div className="stats-bars">
          {ratingDistribution.map((item) => (
            <div key={item.stars} className="rating-bar">
              <span className="bar-label">{item.stars} ★</span>
              <div className="bar-track">
                <div 
                  className="bar-fill" 
                  style={{ width: `${item.percentage}%` }}
                />
              </div>
              <span className="bar-count">{item.count}</span>
            </div>
          ))}
        </div>

        <div className="stats-highlights">
          <div className="highlight-item">
            <Award size={20} color="#4F46E5" />
            <div>
              <span className="highlight-number">{averageRating}</span>
              <span className="highlight-label">Average Rating</span>
            </div>
          </div>
          <div className="highlight-item">
            <Users size={20} color="#4F46E5" />
            <div>
              <span className="highlight-number">{totalReviews}</span>
              <span className="highlight-label">Total Reviews</span>
            </div>
          </div>
          <div className="highlight-item">
            <TrendingUp size={20} color="#4F46E5" />
            <div>
              <span className="highlight-number">95%</span>
              <span className="highlight-label">Recommend</span>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="reviews-filters">
        <div className="filter-left">
          <div className="search-box">
            <input
              type="text"
              placeholder="Search reviews..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="filter-buttons">
            <button 
              className={`filter-btn ${filterRating === 0 ? 'active' : ''}`}
              onClick={() => setFilterRating(0)}
            >
              All
            </button>
            {[5, 4, 3, 2, 1].map(rating => (
              <button 
                key={rating}
                className={`filter-btn ${filterRating === rating ? 'active' : ''}`}
                onClick={() => setFilterRating(rating)}
              >
                {rating} ★
              </button>
            ))}
          </div>
        </div>
        <div className="sort-select">
          <label>Sort by:</label>
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="latest">Latest</option>
            <option value="oldest">Oldest</option>
            <option value="highest">Highest Rating</option>
            <option value="lowest">Lowest Rating</option>
            <option value="likes">Most Liked</option>
          </select>
        </div>
      </div>

      {/* Reviews List */}
      <div className="reviews-list">
        {filteredReviews.length === 0 ? (
          <div className="no-reviews">
            <p>No reviews found matching your criteria.</p>
          </div>
        ) : (
          filteredReviews.map((review, index) => (
            <motion.div
              key={review.id}
              className="review-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <div className="review-header">
                <div className="reviewer-info">
                  <div className="reviewer-avatar">
                    <img 
                      src={review.image || getAvatarUrl(review.name)} 
                      alt={review.name}
                      className="avatar-image"
                      onError={(e) => {
                        console.error('Image failed to load:', review.image);
                        e.target.style.display = 'none';
                        const fallback = document.createElement('div');
                        fallback.className = 'avatar-placeholder';
                        const colors = ['#4F46E5', '#6366F1', '#8B5CF6', '#EC4899', '#14B8A6', '#F59E0B', '#EF4444'];
                        const colorIndex = review.name.length % colors.length;
                        fallback.style.background = colors[colorIndex];
                        fallback.textContent = review.name.charAt(0).toUpperCase();
                        e.target.parentElement.appendChild(fallback);
                      }}
                    />
                  </div>
                  <div>
                    <h4 className="reviewer-name">
                      {review.name}
                      {review.verified && (
                        <span className="verified-badge">✓ Verified</span>
                      )}
                    </h4>
                    <div className="review-meta">
                      <div className="review-stars">
                        {renderStars(review.rating, false, 16)}
                      </div>
                      <span className="review-date">
                        <Calendar size={14} />
                        {new Date(review.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric'
                        })}
                      </span>
                      {review.location && (
                        <span className="review-location">
                          <User size={14} />
                          {review.location}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <p className="review-text">{review.review}</p>

              <div className="review-actions">
                <button 
                  className="like-btn"
                  onClick={() => handleLike(review.id, 'like')}
                >
                  <ThumbsUp size={16} />
                  <span>{review.likes}</span>
                </button>
                <button 
                  className="dislike-btn"
                  onClick={() => handleLike(review.id, 'dislike')}
                >
                  <ThumbsDown size={16} />
                  <span>{review.dislikes}</span>
                </button>
              </div>
            </motion.div>
          ))
        )}
      </div>

      {/* Write Review Modal */}
      <AnimatePresence>
        {showWriteReview && (
          <motion.div
            className="write-review-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowWriteReview(false)}
          >
            <motion.div
              className="write-review-modal"
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 50 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-header">
                <h3>Write a Review</h3>
                <button 
                  className="modal-close"
                  onClick={() => setShowWriteReview(false)}
                >
                  <X size={24} />
                </button>
              </div>

              <form onSubmit={handleSubmitReview} className="write-review-form">
                <div className="form-group">
                  <label>Your Name *</label>
                  <input
                    type="text"
                    value={newReview.name}
                    onChange={(e) => setNewReview({...newReview, name: e.target.value})}
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Rating *</label>
                  <div className="rating-select">
                    {renderStars(0, true, 32)}
                    <span className="rating-text">
                      {selectedRating > 0 ? `${selectedRating} stars` : 'Select rating'}
                    </span>
                  </div>
                </div>

                <div className="form-group">
                  <label>Your Review *</label>
                  <textarea
                    value={newReview.review}
                    onChange={(e) => setNewReview({...newReview, review: e.target.value})}
                    placeholder="Share your experience with VproTech Digital..."
                    rows="4"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Upload Photo</label>
                  <div className="image-upload-container">
                    {imagePreview ? (
                      <div className="image-preview-wrapper">
                        <img src={imagePreview} alt="Preview" className="image-preview" />
                        <button 
                          type="button"
                          className="remove-image-btn"
                          onClick={removeImage}
                        >
                          <X size={16} />
                        </button>
                      </div>
                    ) : (
                      <div 
                        className="image-upload-area"
                        onClick={() => fileInputRef.current?.click()}
                      >
                        <Camera size={32} />
                        <p>Click to upload photo</p>
                        <span>PNG, JPG, JPEG (Max 5MB)</span>
                      </div>
                    )}
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleImageUpload}
                      accept="image/*"
                      style={{ display: 'none' }}
                    />
                  </div>
                </div>

                <div className="form-actions">
                  <button 
                    type="button" 
                    className="cancel-btn"
                    onClick={() => setShowWriteReview(false)}
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit" 
                    className="submit-btn"
                    disabled={submitLoading}
                  >
                    <Send size={18} />
                    {submitLoading ? 'Submitting...' : 'Submit Review'}
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}