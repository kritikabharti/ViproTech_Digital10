// src/pages/admin/AdminTeamManagement.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { teamService } from '../../services/api';
import { 
  Users, 
  UserCheck, 
  UserX, 
  Star, 
  Edit, 
  Trash2, 
  CheckCircle, 
  XCircle,
  UserPlus,
  Search,
  Filter,
  RefreshCw
} from 'lucide-react';
import toast from 'react-hot-toast';
import ConfirmDialog from '../../components/common/ConfirmDialog';
import './AdminTeamManagement.css';

const AdminTeamManagement = () => {
  const navigate = useNavigate();
  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterDepartment, setFilterDepartment] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');
  const [showDeleteDialog, setShowDeleteDialog] = useState({ open: false, id: null });
  const [showToggleDialog, setShowToggleDialog] = useState({ open: false, id: null });

  // Fetch team members
  const fetchTeamMembers = async () => {
    setLoading(true);
    try {
      const response = await teamService.getAdminTeamMembers();
      setTeamMembers(response.members || []);
    } catch (error) {
      console.error('Failed to fetch team members:', error);
      toast.error('Failed to load team members');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTeamMembers();
  }, []);

  // Delete Team Member
  const handleDeleteTeamMember = async () => {
    try {
      await teamService.deleteTeamMember(showDeleteDialog.id);
      toast.success('Team member deleted successfully');
      setShowDeleteDialog({ open: false, id: null });
      fetchTeamMembers();
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to delete team member');
    }
  };

  // Toggle Team Member Status
  const handleToggleTeamStatus = async () => {
    try {
      await teamService.toggleTeamMemberStatus(showToggleDialog.id);
      toast.success('Team member status updated successfully');
      setShowToggleDialog({ open: false, id: null });
      fetchTeamMembers();
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to update status');
    }
  };

  // Navigate to Edit
  const handleEditTeamMember = (id) => {
    navigate(`/admin/team/edit/${id}`);
  };

  // Navigate to Create
  const navigateToAddTeam = () => {
    navigate('/admin/team/create');
  };

  // Get filtered members
  const getFilteredTeamMembers = () => {
    let filtered = teamMembers || [];

    if (searchTerm) {
      filtered = filtered.filter(member =>
        member.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        member.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        member.designation?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (filterDepartment !== 'all') {
      filtered = filtered.filter(member => member.department === filterDepartment);
    }

    if (filterStatus !== 'all') {
      filtered = filtered.filter(member => 
        filterStatus === 'active' ? member.isActive : !member.isActive
      );
    }

    return filtered;
  };

  const filteredTeamMembers = getFilteredTeamMembers();
  const totalTeamMembers = teamMembers?.length || 0;
  const activeTeamMembers = teamMembers?.filter(m => m.isActive).length || 0;
  const inactiveTeamMembers = teamMembers?.filter(m => !m.isActive).length || 0;
  const featuredTeamMembers = teamMembers?.filter(m => m.featured).length || 0;

  // Get unique departments
  const departments = teamMembers ? [...new Set(teamMembers.map(m => m.department))] : [];

  if (loading) {
    return (
      <div className="admin-team-loading">
        <div className="spinner"></div>
        <p>Loading team members...</p>
      </div>
    );
  }

  return (
    <div className="admin-team-management">
      {/* Confirm Dialogs */}
      <ConfirmDialog
        isOpen={showDeleteDialog.open}
        onClose={() => setShowDeleteDialog({ open: false, id: null })}
        onConfirm={handleDeleteTeamMember}
        title="Delete Team Member"
        message="Are you sure you want to delete this team member? This action cannot be undone."
        confirmText="Delete"
        cancelText="Cancel"
        confirmColor="red"
      />

      <ConfirmDialog
        isOpen={showToggleDialog.open}
        onClose={() => setShowToggleDialog({ open: false, id: null })}
        onConfirm={handleToggleTeamStatus}
        title="Toggle Status"
        message={`Are you sure you want to ${
          teamMembers?.find(m => m._id === showToggleDialog.id)?.isActive ? 'deactivate' : 'activate'
        } this team member?`}
        confirmText="Confirm"
        cancelText="Cancel"
        confirmColor="yellow"
      />

      {/* Header */}
      <div className="team-header">
        <div>
          <h1>Team Management</h1>
          <p>Manage your team members</p>
        </div>
        <div className="header-actions">
          <button onClick={fetchTeamMembers} className="refresh-btn" title="Refresh">
            <RefreshCw size={18} />
          </button>
          <button className="add-btn" onClick={navigateToAddTeam}>
            <UserPlus size={18} />
            Add Team Member
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon total">
            <Users size={24} />
          </div>
          <div className="stat-info">
            <h3>{totalTeamMembers}</h3>
            <p>Total Members</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon active">
            <UserCheck size={24} />
          </div>
          <div className="stat-info">
            <h3>{activeTeamMembers}</h3>
            <p>Active</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon inactive">
            <UserX size={24} />
          </div>
          <div className="stat-info">
            <h3>{inactiveTeamMembers}</h3>
            <p>Inactive</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon featured">
            <Star size={24} />
          </div>
          <div className="stat-info">
            <h3>{featuredTeamMembers}</h3>
            <p>Featured</p>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="filters-section">
        <div className="search-wrapper">
          <Search size={18} className="search-icon" />
          <input
            type="text"
            placeholder="Search team members..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          {searchTerm && (
            <button onClick={() => setSearchTerm('')} className="clear-search">
              <XCircle size={16} />
            </button>
          )}
        </div>

        <div className="filter-group">
          <Filter size={18} className="filter-icon" />
          <select
            value={filterDepartment}
            onChange={(e) => setFilterDepartment(e.target.value)}
            className="filter-select"
          >
            <option value="all">All Departments</option>
            {departments.map(dept => (
              <option key={dept} value={dept}>{dept}</option>
            ))}
          </select>

          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="filter-select"
          >
            <option value="all">All Status</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
      </div>

      {/* Team Table */}
      <div className="table-wrapper">
        {filteredTeamMembers.length === 0 ? (
          <div className="empty-state">
            <Users size={64} />
            <h3>No team members found</h3>
            <p>Get started by adding your first team member</p>
            <button className="add-btn" onClick={navigateToAddTeam}>
              <UserPlus size={18} />
              Add Team Member
            </button>
          </div>
        ) : (
          <table className="team-table">
            <thead>
              <tr>
                <th>MEMBER</th>
                <th>DESIGNATION</th>
                <th>DEPARTMENT</th>
                <th>STATUS</th>
                <th>FEATURED</th>
                <th>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {filteredTeamMembers.map((member) => (
                <tr key={member._id}>
                  <td className="member-cell">
                    <img
                      src={member.image || `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=4F46E5&color=fff&size=40`}
                      alt={member.name}
                      className="member-avatar"
                      onError={(e) => {
                        e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=4F46E5&color=fff&size=40`;
                      }}
                    />
                    <div>
                      <div className="member-name">{member.name}</div>
                      <div className="member-email">{member.email}</div>
                    </div>
                  </td>
                  <td>{member.designation}</td>
                  <td>
                    <span className="department-tag">{member.department}</span>
                  </td>
                  <td>
                    <span className={`status-badge ${member.isActive ? 'active' : 'inactive'}`}>
                      {member.isActive ? 'Active' : 'Inactive'}
                    </span>
                  </td>
                  <td>
                    {member.featured && <Star size={16} className="featured-star" />}
                  </td>
                  <td>
                    <div className="action-buttons">
                      <button
                        onClick={() => handleEditTeamMember(member._id)}
                        className="action-btn edit"
                        title="Edit Member"
                      >
                        <Edit size={16} />
                      </button>
                      <button
                        onClick={() => setShowToggleDialog({ open: true, id: member._id })}
                        className={`action-btn toggle ${member.isActive ? 'active' : 'inactive'}`}
                        title={member.isActive ? 'Deactivate' : 'Activate'}
                      >
                        {member.isActive ? <CheckCircle size={16} /> : <XCircle size={16} />}
                      </button>
                      <button
                        onClick={() => setShowDeleteDialog({ open: true, id: member._id })}
                        className="action-btn delete"
                        title="Delete Member"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default AdminTeamManagement;