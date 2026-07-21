// context/TeamContext.jsx
import React, { createContext, useContext, useReducer, useCallback } from 'react';
import teamService from '../services/teamService';

// Initial state
const initialState = {
  members: [],
  groupedMembers: {},
  selectedMember: null,
  stats: null,
  loading: false,
  error: null,
  totalCount: 0,
};

// Action types
const ACTION_TYPES = {
  SET_LOADING: 'SET_LOADING',
  SET_ERROR: 'SET_ERROR',
  SET_MEMBERS: 'SET_MEMBERS',
  SET_GROUPED_MEMBERS: 'SET_GROUPED_MEMBERS',
  SET_SELECTED_MEMBER: 'SET_SELECTED_MEMBER',
  SET_STATS: 'SET_STATS',
  ADD_MEMBER: 'ADD_MEMBER',
  UPDATE_MEMBER: 'UPDATE_MEMBER',
  DELETE_MEMBER: 'DELETE_MEMBER',
  TOGGLE_STATUS: 'TOGGLE_STATUS',
  CLEAR_ERROR: 'CLEAR_ERROR',
};

// Reducer
const teamReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.SET_LOADING:
      return { ...state, loading: action.payload };
    
    case ACTION_TYPES.SET_ERROR:
      return { ...state, error: action.payload, loading: false };
    
    case ACTION_TYPES.CLEAR_ERROR:
      return { ...state, error: null };
    
    case ACTION_TYPES.SET_MEMBERS:
      return { 
        ...state, 
        members: action.payload, 
        totalCount: action.payload.length,
        loading: false 
      };
    
    case ACTION_TYPES.SET_GROUPED_MEMBERS:
      return { ...state, groupedMembers: action.payload };
    
    case ACTION_TYPES.SET_SELECTED_MEMBER:
      return { ...state, selectedMember: action.payload, loading: false };
    
    case ACTION_TYPES.SET_STATS:
      return { ...state, stats: action.payload, loading: false };
    
    case ACTION_TYPES.ADD_MEMBER:
      return { 
        ...state, 
        members: [action.payload, ...state.members],
        totalCount: state.totalCount + 1,
        loading: false 
      };
    
    case ACTION_TYPES.UPDATE_MEMBER:
      return {
        ...state,
        members: state.members.map((member) =>
          member._id === action.payload._id ? action.payload : member
        ),
        selectedMember: state.selectedMember?._id === action.payload._id ? action.payload : state.selectedMember,
        loading: false
      };
    
    case ACTION_TYPES.DELETE_MEMBER:
      return {
        ...state,
        members: state.members.filter((member) => member._id !== action.payload),
        totalCount: state.totalCount - 1,
        loading: false
      };
    
    case ACTION_TYPES.TOGGLE_STATUS:
      return {
        ...state,
        members: state.members.map((member) =>
          member._id === action.payload._id ? action.payload : member
        ),
        loading: false
      };
    
    default:
      return state;
  }
};

// Create Context
const TeamContext = createContext();

// Provider Component
export const TeamProvider = ({ children }) => {
  const [state, dispatch] = useReducer(teamReducer, initialState);

  // Clear error
  const clearError = useCallback(() => {
    dispatch({ type: ACTION_TYPES.CLEAR_ERROR });
  }, []);

  // Fetch public team members
  const fetchTeamMembers = useCallback(async (params = {}) => {
    dispatch({ type: ACTION_TYPES.SET_LOADING, payload: true });
    dispatch({ type: ACTION_TYPES.CLEAR_ERROR });
    try {
      const data = await teamService.getTeamMembers(params);
      dispatch({ type: ACTION_TYPES.SET_MEMBERS, payload: data.members });
      dispatch({ type: ACTION_TYPES.SET_GROUPED_MEMBERS, payload: data.grouped });
      return data;
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Failed to fetch team members';
      dispatch({ type: ACTION_TYPES.SET_ERROR, payload: errorMessage });
      throw error;
    }
  }, []);

  // Fetch all team members (admin)
  const fetchAllTeamMembersAdmin = useCallback(async () => {
    dispatch({ type: ACTION_TYPES.SET_LOADING, payload: true });
    dispatch({ type: ACTION_TYPES.CLEAR_ERROR });
    try {
      const data = await teamService.getAllTeamMembersAdmin();
      dispatch({ type: ACTION_TYPES.SET_MEMBERS, payload: data.members });
      dispatch({ type: ACTION_TYPES.SET_GROUPED_MEMBERS, payload: data.grouped });
      return data;
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Failed to fetch team members';
      dispatch({ type: ACTION_TYPES.SET_ERROR, payload: errorMessage });
      throw error;
    }
  }, []);

  // Fetch single member
  const fetchTeamMemberById = useCallback(async (id) => {
    dispatch({ type: ACTION_TYPES.SET_LOADING, payload: true });
    dispatch({ type: ACTION_TYPES.CLEAR_ERROR });
    try {
      const data = await teamService.getTeamMemberById(id);
      dispatch({ type: ACTION_TYPES.SET_SELECTED_MEMBER, payload: data.member });
      return data;
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Failed to fetch team member';
      dispatch({ type: ACTION_TYPES.SET_ERROR, payload: errorMessage });
      throw error;
    }
  }, []);

  // Fetch stats
  const fetchTeamStats = useCallback(async () => {
    dispatch({ type: ACTION_TYPES.SET_LOADING, payload: true });
    dispatch({ type: ACTION_TYPES.CLEAR_ERROR });
    try {
      const data = await teamService.getTeamStats();
      dispatch({ type: ACTION_TYPES.SET_STATS, payload: data.stats });
      return data;
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Failed to fetch stats';
      dispatch({ type: ACTION_TYPES.SET_ERROR, payload: errorMessage });
      throw error;
    }
  }, []);

  // Create member
  const createTeamMember = useCallback(async (formData) => {
    dispatch({ type: ACTION_TYPES.SET_LOADING, payload: true });
    dispatch({ type: ACTION_TYPES.CLEAR_ERROR });
    try {
      const data = await teamService.createTeamMember(formData);
      dispatch({ type: ACTION_TYPES.ADD_MEMBER, payload: data.member });
      return data;
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Failed to create team member';
      dispatch({ type: ACTION_TYPES.SET_ERROR, payload: errorMessage });
      throw error;
    }
  }, []);

  // Update member
  const updateTeamMember = useCallback(async (id, formData) => {
    dispatch({ type: ACTION_TYPES.SET_LOADING, payload: true });
    dispatch({ type: ACTION_TYPES.CLEAR_ERROR });
    try {
      const data = await teamService.updateTeamMember(id, formData);
      dispatch({ type: ACTION_TYPES.UPDATE_MEMBER, payload: data.member });
      return data;
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Failed to update team member';
      dispatch({ type: ACTION_TYPES.SET_ERROR, payload: errorMessage });
      throw error;
    }
  }, []);

  // Delete member
  const deleteTeamMember = useCallback(async (id) => {
    dispatch({ type: ACTION_TYPES.SET_LOADING, payload: true });
    dispatch({ type: ACTION_TYPES.CLEAR_ERROR });
    try {
      await teamService.deleteTeamMember(id);
      dispatch({ type: ACTION_TYPES.DELETE_MEMBER, payload: id });
      return { success: true };
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Failed to delete team member';
      dispatch({ type: ACTION_TYPES.SET_ERROR, payload: errorMessage });
      throw error;
    }
  }, []);

  // Toggle status
  const toggleTeamMemberStatus = useCallback(async (id) => {
    dispatch({ type: ACTION_TYPES.SET_LOADING, payload: true });
    dispatch({ type: ACTION_TYPES.CLEAR_ERROR });
    try {
      const data = await teamService.toggleTeamMemberStatus(id);
      dispatch({ type: ACTION_TYPES.TOGGLE_STATUS, payload: data.member });
      return data;
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Failed to toggle status';
      dispatch({ type: ACTION_TYPES.SET_ERROR, payload: errorMessage });
      throw error;
    }
  }, []);

  const value = {
    ...state,
    fetchTeamMembers,
    fetchAllTeamMembersAdmin,
    fetchTeamMemberById,
    fetchTeamStats,
    createTeamMember,
    updateTeamMember,
    deleteTeamMember,
    toggleTeamMemberStatus,
    clearError,
  };

  return (
    <TeamContext.Provider value={value}>
      {children}
    </TeamContext.Provider>
  );
};

// Custom hook to use TeamContext
export const useTeam = () => {
  const context = useContext(TeamContext);
  if (!context) {
    throw new Error('useTeam must be used within a TeamProvider');
  }
  return context;
};

export default TeamContext;