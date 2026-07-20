// components/TeamSection.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { User, Briefcase } from 'lucide-react';
import { teamService } from '../services/api';
import './TeamSection.css';

export default function TeamSection() {
  const [teamData, setTeamData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  const departments = [
    'all',
    'Leadership',
    'Development',
    'Marketing & Design',
    'Mechanical Team',
    'HR',
    'Management'
  ];

  useEffect(() => {
    fetchTeamMembers();
  }, []);

  const fetchTeamMembers = async () => {
    try {
      setLoading(true);
      const response = await teamService.getTeamMembers();
      setTeamData(response);
    } catch (error) {
      console.error('Error fetching team:', error);
    } finally {
      setLoading(false);
    }
  };

  const getFilteredMembers = () => {
    if (!teamData || !teamData.grouped) return [];
    
    if (selectedDepartment === 'all') {
      return teamData.members || [];
    }
    
    return teamData.grouped[selectedDepartment] || [];
  };

  const filteredMembers = getFilteredMembers();

  if (loading) {
    return (
      <div className="team-loading">
        <div className="spinner"></div>
        <p>Loading our team...</p>
      </div>
    );
  }

  return (
    <section className="team-section">
      <div className="team-container">
        <motion.div
          className="team-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="team-tag">OUR TEAM</span>
          <h2>The People <span className="gradient-text">Powering</span> VProTech Digital</h2>
          <p>Meet the talented individuals behind our success</p>
        </motion.div>

        {/* Department Filters */}
        <div className="department-filters">
          {departments.map((dept) => (
            <button
              key={dept}
              className={`filter-btn ${selectedDepartment === dept ? 'active' : ''}`}
              onClick={() => setSelectedDepartment(dept)}
            >
              {dept === 'all' ? 'All Teams' : dept}
            </button>
          ))}
        </div>

        {/* Team Grid */}
        {filteredMembers.length === 0 ? (
          <div className="no-members">
            <p>No team members found in this department.</p>
          </div>
        ) : (
          <div className="team-grid">
            {filteredMembers.map((member, index) => (
              <motion.div
                key={member._id}
                className="team-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
              >
                <div className="team-card-image">
                  <img
                    src={member.image || 'https://ui-avatars.com/api/?name=' + encodeURIComponent(member.name) + '&background=4F46E5&color=fff&size=200'}
                    alt={member.name}
                    onError={(e) => {
                      e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=4F46E5&color=fff&size=200`;
                    }}
                  />
                  {member.featured && (
                    <span className="featured-badge">⭐ Featured</span>
                  )}
                </div>

                <div className="team-card-content">
                  <h3>{member.name}</h3>
                  <p className="designation">{member.designation}</p>
                  <span className="department-tag">{member.department}</span>
                  
                  {member.bio && (
                    <p className="bio">{member.bio.substring(0, 80)}...</p>
                  )}

                  {member.skills && member.skills.length > 0 && (
                    <div className="skills">
                      {member.skills.slice(0, 3).map((skill, i) => (
                        <span key={i} className="skill-tag">{skill}</span>
                      ))}
                      {member.skills.length > 3 && (
                        <span className="skill-tag more">+{member.skills.length - 3}</span>
                      )}
                    </div>
                  )}

                  <div className="social-links">
                    {member.socialLinks?.linkedin && (
                      <a href={member.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                        <Linkedin size={16} />
                      </a>
                    )}
                    {member.socialLinks?.github && (
                      <a href={member.socialLinks.github} target="_blank" rel="noopener noreferrer">
                        <Github size={16} />
                      </a>
                    )}
                    {member.socialLinks?.twitter && (
                      <a href={member.socialLinks.twitter} target="_blank" rel="noopener noreferrer">
                        <Twitter size={16} />
                      </a>
                    )}
                    {member.socialLinks?.portfolio && (
                      <a href={member.socialLinks.portfolio} target="_blank" rel="noopener noreferrer">
                        <Globe size={16} />
                      </a>
                    )}
                    <a href={`mailto:${member.email}`}>
                      <Mail size={16} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}