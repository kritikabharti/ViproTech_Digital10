import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { 
  LayoutDashboard, 
  FileText, 
  GraduationCap, 
  Search, 
  LogOut,
  Mail,
  CheckCircle2,
  Clock,
  XCircle,
  Download,
  Filter,
  Plus
} from 'lucide-react';


export default function AdminDashboard() {
  
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [statusFilter, setStatusFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  // Empty dataset - will be populated when users register
  const [applicants, setApplicants] = useState([]);

  // Action to change applicant status
  const handleUpdateStatus = (id, newStatus) => {
    setApplicants(prev => prev.map(item => item.id === id ? { ...item, status: newStatus } : item));
  };

  // Filtration logic
  const filteredApplicants = applicants.filter(user => {
    const matchesSearch = 
      user.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.id?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = statusFilter === 'All' || user.status === statusFilter;
    return matchesSearch && matchesFilter;
  });

  // Structural Statistics
  const totalCount = applicants.length;
  const approvedCount = applicants.filter(a => a.status === 'Approved').length;
  const pendingCount = applicants.filter(a => a.status === 'Pending').length;

  // CSV Exporter
  const handleExportCSV = () => {
    const headers = "ID,Name,Email,Status\n";
    const rows = filteredApplicants.map(u => `"${u.id}","${u.name || ''}","${u.email}","${u.status || 'Pending'}"`).join("\n");
    const blob = new Blob([headers + rows], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `VproTech_Applicants.csv`;
    a.click();
  };

  // Custom Inline Theme Variables
  const styles = {
    layout: { display: 'flex', height: '100vh', backgroundColor: '#f8fafc', fontFamily: 'system-ui, sans-serif', overflow: 'hidden' },
    sidebar: { width: '260px', backgroundColor: '#0f172a', color: '#fff', display: 'flex', flexDirection: 'column', transition: 'all 0.3s ease', zIndex: 100 },
    sidebarHeader: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 24px', backgroundColor: '#020617', borderBottom: '1px solid #1e293b' },
    logoBox: { width: '32px', height: '32px', borderRadius: '8px', backgroundColor: '#10b981', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#000', fontWeight: '900', fontSize: '18px', textAlign: 'center', lineHeight: '32px', marginRight: '10px' },
    brandTitle: { fontSize: '18px', fontWeight: '700', color: '#fff' },
    brandSub: { color: '#34d399', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginTop: '-2px' },
    navLinks: { flex: 1, padding: '24px 16px', display: 'flex', flexDirection: 'column', gap: '8px' },
    navBtnActive: { display: 'flex', alignItems: 'center', gap: '12px', width: '100%', border: 'none', padding: '12px 16px', borderRadius: '12px', fontSize: '14px', fontWeight: '600', cursor: 'pointer', backgroundColor: '#10b981', color: '#0f172a' },
    navBtnInactive: { display: 'flex', alignItems: 'center', gap: '12px', width: '100%', border: 'none', padding: '12px 16px', borderRadius: '12px', fontSize: '14px', fontWeight: '500', cursor: 'pointer', backgroundColor: 'transparent', color: '#94a3b8', transition: 'all 0.2s' },
    signOutBtn: { display: 'flex', alignItems: 'center', gap: '12px', width: '100%', border: 'none', padding: '12px 16px', borderRadius: '12px', fontSize: '14px', fontWeight: '500', cursor: 'pointer', backgroundColor: 'transparent', color: '#f87171', borderTop: '1px solid #1e293b', marginTop: 'auto' },
    mainArea: { flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' },
    header: { height: '64px', backgroundColor: '#fff', borderBottom: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 32px', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' },
    searchContainer: { position: 'relative', display: 'flex', alignItems: 'center' },
    searchBar: { width: '320px', padding: '10px 16px 10px 38px', borderRadius: '12px', border: '1px solid #e2e8f0', backgroundColor: '#f8fafc', fontSize: '14px', outline: 'none' },
    adminAvatar: { display: 'flex', alignItems: 'center', gap: '12px' },
    avatarCircle: { width: '36px', height: '36px', borderRadius: '12px', backgroundColor: '#0f172a', color: '#fff', fontWeight: '600', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px' },
    contentWorkspace: { flex: 1, overflowY: 'auto', padding: '32px' },
    metaRow: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' },
    btnPrimary: { display: 'flex', alignItems: 'center', gap: '8px', border: 'none', padding: '10px 18px', borderRadius: '12px', fontSize: '14px', fontWeight: '600', cursor: 'pointer', backgroundColor: '#10b981', color: '#0f172a', boxShadow: '0 4px 6px -1px rgba(16,185,129,0.2)' },
    btnSecondary: { display: 'flex', alignItems: 'center', gap: '8px', border: '1px solid #e2e8f0', padding: '10px 18px', borderRadius: '12px', fontSize: '14px', fontWeight: '600', cursor: 'pointer', backgroundColor: '#fff', color: '#334155' },
    statsRow: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px', marginBottom: '32px' },
    statCard: { backgroundColor: '#fff', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '24px', boxShadow: '0 1px 3px rgba(0,0,0,0.02)' },
    tableCard: { backgroundColor: '#fff', border: '1px solid #e2e8f0', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.01)' },
    filterBar: { padding: '16px 24px', backgroundColor: '#f8fafc', borderBottom: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
    filterBtn: (active) => ({ border: '1px solid #e2e8f0', padding: '6px 14px', borderRadius: '10px', fontSize: '12px', fontWeight: '600', cursor: 'pointer', marginRight: '6px', backgroundColor: active ? '#0f172a' : '#fff', color: active ? '#fff' : '#475569' }),
    dataTable: { width: '100%', borderCollapse: 'collapse', textAlign: 'left' },
    th: { padding: '14px 24px', backgroundColor: '#f8fafc', borderBottom: '1px solid #e2e8f0', color: '#64748b', fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px' },
    td: { padding: '16px 24px', borderBottom: '1px solid #e2e8f0', color: '#334155', fontSize: '14px' },
    badge: (status) => {
      let bg = '#f1f5f9', text = '#475569';
      if (status === 'Approved') { bg = '#d1fae5'; text = '#065f46'; }
      if (status === 'Pending') { bg = '#fef3c7'; text = '#92400e'; }
      if (status === 'Rejected') { bg = '#fee2e2'; text = '#991b1b'; }
      return { display: 'inline-flex', alignItems: 'center', padding: '4px 10px', borderRadius: '9999px', fontSize: '12px', fontWeight: '600', backgroundColor: bg, color: text };
    },
    actionBtn: (type, disabled) => ({
      border: '1px solid #e2e8f0', padding: '6px 12px', borderRadius: '8px', fontSize: '12px', fontWeight: '700', cursor: disabled ? 'not-allowed' : 'pointer', marginRight: '6px',
      backgroundColor: disabled ? '#f8fafc' : '#fff',
      color: disabled ? '#cbd5e1' : (type === 'approve' ? '#10b981' : '#ef4444'),
      borderColor: disabled ? '#e2e8f0' : (type === 'approve' ? '#a7f3d0' : '#fecaca')
    })
  };

  return (
    
    <div style={styles.layout}>
    
      {/* SIDEBAR COMPONENT */}
      <aside style={styles.sidebar}>
        <div style={styles.sidebarHeader}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={styles.logoBox}>V</div>
            <div>
              <span style={styles.brandTitle}>VproTech</span>
              <span style={styles.brandSub}>digital</span>
            </div>
          </div>
        </div>

        <nav style={styles.navLinks}>
          {/* <button style={styles.navBtnInactive}>
            <LayoutDashboard size={18} />
            <span>Dashboard Overview</span>
          </button>
          <button style={styles.navBtnInactive}>
            <FileText size={18} />
            <span>Manage Blogs</span>
          </button> */}
          <button style={styles.navBtnActive}>
            <GraduationCap size={18} />
            <span>Internship Applicants</span>
          </button>
          
          {/* <button style={styles.signOutBtn}>
            <LogOut size={18} />
            <span>Sign Out Session</span>
          </button> */}
        </nav>
      </aside>

      {/* CORE DISPLAY WORKSPACE */}
      <div style={styles.mainArea}>
        
        {/* TOP INTERACTIVE NAVBAR */}
        <header style={styles.header}>
          <div style={styles.searchContainer}>
            <Search size={16} style={{ position: 'absolute', left: '14px', color: '#94a3b8' }} />
            <input 
              type="text" 
              placeholder="Search by ID, name, email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={styles.searchBar}
            />
          </div>
          <div style={styles.adminAvatar}>
            <div style={styles.avatarCircle}>AD</div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: '14px', fontWeight: '700', color: '#1e293b' }}>Admin Console</span>
              <span style={{ fontSize: '11px', color: '#94a3b8', fontWeight: '500' }}>Superuser Mode</span>
            </div>
          </div>
        </header>

        {/* CONTAINER VIEWPORT WORKSPACE */}
        <div style={styles.contentWorkspace}>
          
          {/* HEADER META ACTIONS */}
          <div style={styles.metaRow}>
            <div>
              <h1 style={{ fontSize: '28px', fontWeight: '800', color: '#0f172a', margin: 0, letterSpacing: '-0.5px' }}>AdminDashboard</h1>
            </div>
            <div style={{ display: 'flex', gap: '12px' }}>
              <button style={styles.btnSecondary} onClick={handleExportCSV}>
                <Download size={16} />
                Export Dataset
              </button>
              <button style={styles.btnPrimary}>
                <Plus size={16} />
                Manual Add
              </button>
            </div>
          </div>

          {/* QUICK METRICS */}
          <div style={styles.statsRow}>
            <div style={styles.statCard}>
              <span style={{ fontSize: '12px', fontWeight: '700', color: '#94a3b8', textTransform: 'uppercase' }}>Total Candidates</span>
              <span style={{ display: 'block', fontSize: '32px', fontWeight: '800', color: '#0f172a', marginTop: '8px' }}>{totalCount}</span>
            </div>
            <div style={styles.statCard}>
              <span style={{ fontSize: '12px', fontWeight: '700', color: '#94a3b8', textTransform: 'uppercase' }}>Approved Placements</span>
              <span style={{ display: 'block', fontSize: '32px', fontWeight: '800', color: '#10b981', marginTop: '8px' }}>{approvedCount}</span>
            </div>
            <div style={styles.statCard}>
              <span style={{ fontSize: '12px', fontWeight: '700', color: '#94a3b8', textTransform: 'uppercase' }}>Awaiting Evaluation</span>
              <span style={{ display: 'block', fontSize: '32px', fontWeight: '800', color: '#f59e0b', marginTop: '8px' }}>{pendingCount}</span>
            </div>
          </div>

          {/* FILTERING CONTROLLER AND DATA CONTAINER */}
          <div style={styles.tableCard}>
            <div style={styles.filterBar}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', fontWeight: '600', color: '#334155' }}>
                <Filter size={15} style={{ color: '#94a3b8' }} />
                Filter Candidates:
                {['All', 'Pending', 'Approved', 'Rejected'].map(status => (
                  <button
                    key={status}
                    onClick={() => setStatusFilter(status)}
                    style={styles.filterBtn(statusFilter === status)}
                  >
                    {status}
                  </button>
                ))}
              </div>
              <span style={{ fontSize: '13px', color: '#94a3b8' }}>
                Showing {filteredApplicants.length} of {applicants.length}
              </span>
            </div>

            {/* TABULAR LAYOUT ENGINE */}
            <div style={{ overflowX: 'auto' }}>
              <table style={styles.dataTable}>
                <thead>
                  <tr>
                    <th style={styles.th}>ID</th>
                    <th style={styles.th}>Name</th>
                    <th style={styles.th}>Email</th>
                    <th style={styles.th}>Status</th>
                    <th style={styles.th}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredApplicants.map((applicant) => (
                    <tr key={applicant.id}>
                      <td style={styles.td}>
                        <span style={{ fontWeight: '600', color: '#0f172a' }}>{applicant.id}</span>
                      </td>
                      <td style={styles.td}>
                        <span style={{ fontWeight: '500' }}>{applicant.name || 'N/A'}</span>
                      </td>
                      <td style={styles.td}>
                        <span style={{ color: '#64748b' }}>{applicant.email}</span>
                      </td>
                      <td style={styles.td}>
                        <span style={styles.badge(applicant.status || 'Pending')}>
                          {applicant.status === 'Approved' && <CheckCircle2 size={12} style={{ marginRight: '4px' }} />}
                          {applicant.status === 'Pending' && <Clock size={12} style={{ marginRight: '4px' }} />}
                          {applicant.status === 'Rejected' && <XCircle size={12} style={{ marginRight: '4px' }} />}
                          {applicant.status || 'Pending'}
                        </span>
                      </td>
                      <td style={styles.td}>
                        <button 
                          style={styles.actionBtn('approve', applicant.status === 'Approved')}
                          onClick={() => handleUpdateStatus(applicant.id, 'Approved')}
                          disabled={applicant.status === 'Approved'}
                        >
                          Approve
                        </button>
                        <button 
                          style={styles.actionBtn('reject', applicant.status === 'Rejected')}
                          onClick={() => handleUpdateStatus(applicant.id, 'Rejected')}
                          disabled={applicant.status === 'Rejected'}
                        >
                          Reject
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {filteredApplicants.length === 0 && (
                <div style={{ padding: '40px', textAlign: 'center', color: '#94a3b8' }}>
                  <p style={{ fontSize: '16px', marginBottom: '8px' }}>No registered users yet</p>
                  <p style={{ fontSize: '14px' }}>When users register, their data will appear here</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}