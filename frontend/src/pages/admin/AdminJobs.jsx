import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Plus, 
  Edit, 
  Trash2, 
  Eye, 
  Search,
  Filter,
  X,
  ChevronRight,
  ChevronDown,
  Briefcase,
  MapPin,
  Clock,
  DollarSign,
  Calendar,
  Users,
  Eye as EyeIcon,
  ToggleLeft,
  ToggleRight,
  AlertCircle,
  CheckCircle,
  Loader
} from 'lucide-react';
import toast from 'react-hot-toast';
import { useAuth } from '../../context/AuthContext';
import './AdminJobs.css';

const API_URL = 'http://localhost:5000/api';

export default function AdminJobs() {
  const { token } = useAuth();
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('All');
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [editingJob, setEditingJob] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    department: '',
    location: '',
    type: '',
    experience: '',
    salary: '',
    description: '',
    requirements: [],
    benefits: [],
    isUrgent: false,
    status: 'Active',
    deadline: ''
  });
  const [requirementInput, setRequirementInput] = useState('');
  const [benefitInput, setBenefitInput] = useState('');

  // Fetch jobs
  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${API_URL}/jobs/admin/all`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      
      const data = await response.json();
      if (data.success) {
        setJobs(data.data);
      } else {
        toast.error(data.message || 'Failed to fetch jobs');
      }
    } catch (error) {
      toast.error('Network error');
    } finally {
      setLoading(false);
    }
  };

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  // Add requirement
  const addRequirement = () => {
    if (requirementInput.trim()) {
      setFormData(prev => ({
        ...prev,
        requirements: [...prev.requirements, requirementInput.trim()]
      }));
      setRequirementInput('');
    }
  };

  // Remove requirement
  const removeRequirement = (index) => {
    setFormData(prev => ({
      ...prev,
      requirements: prev.requirements.filter((_, i) => i !== index)
    }));
  };

  // Add benefit
  const addBenefit = () => {
    if (benefitInput.trim()) {
      setFormData(prev => ({
        ...prev,
        benefits: [...prev.benefits, benefitInput.trim()]
      }));
      setBenefitInput('');
    }
  };

  // Remove benefit
  const removeBenefit = (index) => {
    setFormData(prev => ({
      ...prev,
      benefits: prev.benefits.filter((_, i) => i !== index)
    }));
  };

  // Create/Update job
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const url = editingJob 
      ? `${API_URL}/jobs/${editingJob._id}`
      : `${API_URL}/jobs`;
    
    const method = editingJob ? 'PUT' : 'POST';
    
    try {
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(formData)
      });
      
      const data = await response.json();
      
      if (data.success) {
        toast.success(editingJob ? 'Job updated successfully' : 'Job created successfully');
        setShowCreateModal(false);
        setEditingJob(null);
        resetForm();
        fetchJobs();
      } else {
        toast.error(data.message || 'Operation failed');
      }
    } catch (error) {
      toast.error('Network error');
    }
  };

  // Delete job
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`${API_URL}/jobs/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      
      const data = await response.json();
      
      if (data.success) {
        toast.success('Job deleted successfully');
        setShowDeleteModal(null);
        fetchJobs();
      } else {
        toast.error(data.message || 'Failed to delete');
      }
    } catch (error) {
      toast.error('Network error');
    }
  };

  // Toggle job status
  const toggleStatus = async (id) => {
    try {
      const response = await fetch(`${API_URL}/jobs/${id}/toggle-status`, {
        method: 'PATCH',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      
      const data = await response.json();
      
      if (data.success) {
        toast.success(data.message);
        fetchJobs();
      } else {
        toast.error(data.message || 'Failed to toggle status');
      }
    } catch (error) {
      toast.error('Network error');
    }
  };

  // Reset form
  const resetForm = () => {
    setFormData({
      title: '',
      department: '',
      location: '',
      type: '',
      experience: '',
      salary: '',
      description: '',
      requirements: [],
      benefits: [],
      isUrgent: false,
      status: 'Active',
      deadline: ''
    });
    setRequirementInput('');
    setBenefitInput('');
  };

  // Edit job
  const handleEdit = (job) => {
    setEditingJob(job);
    setFormData({
      title: job.title,
      department: job.department,
      location: job.location,
      type: job.type,
      experience: job.experience,
      salary: job.salary || '',
      description: job.description,
      requirements: job.requirements || [],
      benefits: job.benefits || [],
      isUrgent: job.isUrgent || false,
      status: job.status || 'Active',
      deadline: job.deadline ? new Date(job.deadline).toISOString().split('T')[0] : ''
    });
    setShowCreateModal(true);
  };

  // Filter jobs
  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          job.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          job.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'All' || job.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  // Status badge
  const StatusBadge = ({ status }) => {
    const config = {
      Active: { color: '#16a34a', bg: '#dcfce7' },
      Closed: { color: '#64748b', bg: '#f1f5f9' },
      Draft: { color: '#f59e0b', bg: '#fef3c7' }
    };
    
    const style = config[status] || config.Draft;
    
    return (
      <span className="status-badge" style={{ color: style.color, background: style.bg }}>
        {status}
      </span>
    );
  };

  if (loading) {
    return (
      <div className="admin-jobs-loading">
        <Loader size={40} className="spinning" />
        <p>Loading jobs...</p>
      </div>
    );
  }

  return (
    <div className="admin-jobs-container">
      {/* Header */}
      <div className="admin-jobs-header">
        <div>
          <h1>Job Openings</h1>
          <p>Manage job listings for your career page</p>
        </div>
        <button 
          className="create-job-btn"
          onClick={() => {
            resetForm();
            setEditingJob(null);
            setShowCreateModal(true);
          }}
        >
          <Plus size={20} />
          Create New Job
        </button>
      </div>

      {/* Stats */}
      <div className="admin-jobs-stats">
        <div className="stat-card">
          <Briefcase size={24} />
          <div>
            <span className="stat-number">{jobs.length}</span>
            <span className="stat-label">Total Jobs</span>
          </div>
        </div>
        <div className="stat-card">
          <CheckCircle size={24} style={{ color: '#16a34a' }} />
          <div>
            <span className="stat-number">{jobs.filter(j => j.status === 'Active').length}</span>
            <span className="stat-label">Active</span>
          </div>
        </div>
        <div className="stat-card">
          <Users size={24} style={{ color: '#4F46E5' }} />
          <div>
            <span className="stat-number">{jobs.reduce((sum, j) => sum + (j.applications || 0), 0)}</span>
            <span className="stat-label">Total Applications</span>
          </div>
        </div>
        <div className="stat-card">
          <EyeIcon size={24} style={{ color: '#f59e0b' }} />
          <div>
            <span className="stat-number">{jobs.reduce((sum, j) => sum + (j.views || 0), 0)}</span>
            <span className="stat-label">Total Views</span>
          </div>
        </div>
      </div>

      {/* Search & Filter */}
      <div className="admin-jobs-toolbar">
        <div className="search-wrapper">
          <Search size={20} className="search-icon" />
          <input
            type="text"
            placeholder="Search jobs..."
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
        <select 
          value={filterStatus} 
          onChange={(e) => setFilterStatus(e.target.value)}
          className="filter-select"
        >
          <option value="All">All Status</option>
          <option value="Active">Active</option>
          <option value="Closed">Closed</option>
          <option value="Draft">Draft</option>
        </select>
      </div>

      {/* Job List */}
      <div className="admin-jobs-list">
        {filteredJobs.length === 0 ? (
          <div className="no-jobs">
            <Briefcase size={48} />
            <h3>No jobs found</h3>
            <p>Create your first job opening to get started</p>
          </div>
        ) : (
          filteredJobs.map((job) => (
            <div key={job._id} className="admin-job-card">
              <div className="admin-job-card-header">
                <div className="job-info">
                  <h3>{job.title}</h3>
                  <div className="job-meta">
                    <span><Briefcase size={16} /> {job.department}</span>
                    <span><MapPin size={16} /> {job.location}</span>
                    <span><Clock size={16} /> {job.type}</span>
                    <span><DollarSign size={16} /> {job.salary || 'Negotiable'}</span>
                  </div>
                </div>
                <div className="job-actions">
                  <StatusBadge status={job.status} />
                  {job.isUrgent && (
                    <span className="urgent-badge">Urgent</span>
                  )}
                  <button 
                    className="action-btn toggle"
                    onClick={() => toggleStatus(job._id)}
                    title="Toggle status"
                  >
                    {job.status === 'Active' ? <ToggleRight size={20} /> : <ToggleLeft size={20} />}
                  </button>
                  <button 
                    className="action-btn edit"
                    onClick={() => handleEdit(job)}
                    title="Edit job"
                  >
                    <Edit size={18} />
                  </button>
                  <button 
                    className="action-btn delete"
                    onClick={() => setShowDeleteModal(job)}
                    title="Delete job"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
              <div className="admin-job-card-footer">
                <span><Calendar size={16} /> Posted: {new Date(job.createdAt).toLocaleDateString()}</span>
                <span><EyeIcon size={16} /> {job.views || 0} views</span>
                {job.deadline && (
                  <span><AlertCircle size={16} /> Deadline: {new Date(job.deadline).toLocaleDateString()}</span>
                )}
              </div>
            </div>
          ))
        )}
      </div>

      {/* Create/Edit Modal */}
      <AnimatePresence>
        {showCreateModal && (
          <motion.div
            className="admin-job-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowCreateModal(false)}
          >
            <motion.div
              className="admin-job-modal"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-header">
                <h2>{editingJob ? 'Edit Job' : 'Create New Job'}</h2>
                <button className="modal-close" onClick={() => setShowCreateModal(false)}>
                  <X size={24} />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="modal-form">
                <div className="form-grid">
                  <div className="form-group">
                    <label>Job Title *</label>
                    <input
                      type="text"
                      name="title"
                      value={formData.title}
                      onChange={handleChange}
                      placeholder="e.g. Senior Full Stack Developer"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>Department *</label>
                    <select
                      name="department"
                      value={formData.department}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select Department</option>
                      <option value="Engineering">Engineering</option>
                      <option value="Design">Design</option>
                      <option value="Marketing">Marketing</option>
                      <option value="HR">HR</option>
                      <option value="Management">Management</option>
                      <option value="Finance">Finance</option>
                      <option value="Sales">Sales</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Location *</label>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      placeholder="e.g. Mohali, Punjab"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>Job Type *</label>
                    <select
                      name="type"
                      value={formData.type}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select Type</option>
                      <option value="Full-Time">Full-Time</option>
                      <option value="Part-Time">Part-Time</option>
                      <option value="Internship">Internship</option>
                      <option value="Contract">Contract</option>
                      <option value="Remote">Remote</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Experience *</label>
                    <input
                      type="text"
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      placeholder="e.g. 3-5 years"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>Salary</label>
                    <input
                      type="text"
                      name="salary"
                      value={formData.salary}
                      onChange={handleChange}
                      placeholder="e.g. ₹10L - ₹15L PA"
                    />
                  </div>

                  <div className="form-group full-width">
                    <label>Description *</label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      placeholder="Describe the job role and responsibilities..."
                      rows="4"
                      required
                    />
                  </div>

                  <div className="form-group full-width">
                    <label>Requirements *</label>
                    <div className="tags-input">
                      <div className="tags-list">
                        {formData.requirements.map((req, index) => (
                          <span key={index} className="tag">
                            {req}
                            <button type="button" onClick={() => removeRequirement(index)}>
                              <X size={14} />
                            </button>
                          </span>
                        ))}
                      </div>
                      <div className="tags-input-row">
                        <input
                          type="text"
                          value={requirementInput}
                          onChange={(e) => setRequirementInput(e.target.value)}
                          placeholder="Add a requirement..."
                          onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addRequirement())}
                        />
                        <button type="button" onClick={addRequirement} className="add-tag-btn">
                          Add
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="form-group full-width">
                    <label>Benefits</label>
                    <div className="tags-input">
                      <div className="tags-list">
                        {formData.benefits.map((benefit, index) => (
                          <span key={index} className="tag benefit">
                            {benefit}
                            <button type="button" onClick={() => removeBenefit(index)}>
                              <X size={14} />
                            </button>
                          </span>
                        ))}
                      </div>
                      <div className="tags-input-row">
                        <input
                          type="text"
                          value={benefitInput}
                          onChange={(e) => setBenefitInput(e.target.value)}
                          placeholder="Add a benefit..."
                          onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addBenefit())}
                        />
                        <button type="button" onClick={addBenefit} className="add-tag-btn">
                          Add
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Application Deadline *</label>
                    <input
                      type="date"
                      name="deadline"
                      value={formData.deadline}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>Status</label>
                    <select
                      name="status"
                      value={formData.status}
                      onChange={handleChange}
                    >
                      <option value="Active">Active</option>
                      <option value="Draft">Draft</option>
                      <option value="Closed">Closed</option>
                    </select>
                  </div>

                  <div className="form-group checkbox-group">
                    <label>
                      <input
                        type="checkbox"
                        name="isUrgent"
                        checked={formData.isUrgent}
                        onChange={handleChange}
                      />
                      Mark as Urgent
                    </label>
                  </div>
                </div>

                <div className="modal-actions">
                  <button type="button" className="cancel-btn" onClick={() => setShowCreateModal(false)}>
                    Cancel
                  </button>
                  <button type="submit" className="submit-btn">
                    {editingJob ? 'Update Job' : 'Create Job'}
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Delete Modal */}
      <AnimatePresence>
        {showDeleteModal && (
          <motion.div
            className="admin-job-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowDeleteModal(null)}
          >
            <motion.div
              className="admin-job-modal delete-modal"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-header">
                <h2>Delete Job</h2>
                <button className="modal-close" onClick={() => setShowDeleteModal(null)}>
                  <X size={24} />
                </button>
              </div>
              <div className="delete-content">
                <AlertCircle size={48} className="delete-icon" />
                <h3>Are you sure?</h3>
                <p>
                  This will permanently delete the job listing 
                  <strong> "{showDeleteModal?.title}"</strong>.
                  This action cannot be undone.
                </p>
              </div>
              <div className="modal-actions">
                <button className="cancel-btn" onClick={() => setShowDeleteModal(null)}>
                  Cancel
                </button>
                <button className="delete-btn" onClick={() => handleDelete(showDeleteModal._id)}>
                  <Trash2 size={18} />
                  Delete Job
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}