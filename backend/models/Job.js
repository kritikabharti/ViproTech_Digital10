import mongoose from 'mongoose';

const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Job title is required'],
    trim: true,
    maxlength: [100, 'Title cannot exceed 100 characters']
  },
  department: {
    type: String,
    required: [true, 'Department is required'],
    enum: ['Engineering', 'Design', 'Marketing', 'HR', 'Management', 'Finance', 'Sales', 'Other']
  },
  location: {
    type: String,
    required: [true, 'Location is required'],
    trim: true
  },
  type: {
    type: String,
    required: [true, 'Job type is required'],
    enum: ['Full-Time', 'Part-Time', 'Internship', 'Contract', 'Remote']
  },
  experience: {
    type: String,
    required: [true, 'Experience is required'],
    trim: true
  },
  salary: {
    type: String,
    trim: true,
    default: 'Negotiable'
  },
  description: {
    type: String,
    required: [true, 'Job description is required'],
    minlength: [50, 'Description must be at least 50 characters']
  },
  requirements: {
    type: [String],
    required: [true, 'At least one requirement is required'],
    validate: {
      validator: function(v) {
        return v && v.length > 0;
      },
      message: 'Please add at least one requirement'
    }
  },
  benefits: {
    type: [String],
    default: []
  },
  isUrgent: {
    type: Boolean,
    default: false
  },
  status: {
    type: String,
    enum: ['Active', 'Closed', 'Draft'],
    default: 'Active'
  },
  deadline: {
    type: Date,
    required: [true, 'Application deadline is required']
  },
  postedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  applications: {
    type: Number,
    default: 0
  },
  views: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
});

// Index for search
jobSchema.index({ title: 'text', description: 'text', department: 'text', location: 'text' });

const Job = mongoose.model('Job', jobSchema);

export default Job;