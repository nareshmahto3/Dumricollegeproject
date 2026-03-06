import { useState } from 'react';
import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { PortalLayout } from './PortalLayout';
import { Calendar, Clock, FileText, Upload, CheckCircle, AlertCircle, Download, Eye } from 'lucide-react';

interface Assignment {
  id: string;
  subject: string;
  title: string;
  description: string;
  assignedDate: string;
  dueDate: string;
  totalMarks: number;
  status: 'Pending' | 'Submitted' | 'Graded' | 'Overdue';
  obtainedMarks?: number;
  teacherFeedback?: string;
}

const mockAssignments: Assignment[] = [
  {
    id: 'ASG001',
    subject: 'Mathematics',
    title: 'Calculus Problems Set 3',
    description: 'Solve all problems from chapter 3 on derivatives and limits',
    assignedDate: '2026-02-20',
    dueDate: '2026-02-27',
    totalMarks: 20,
    status: 'Pending',
  },
  {
    id: 'ASG002',
    subject: 'Physics',
    title: 'Lab Report: Motion Experiment',
    description: 'Complete lab report on projectile motion experiment conducted in class',
    assignedDate: '2026-02-18',
    dueDate: '2026-02-25',
    totalMarks: 25,
    status: 'Submitted',
  },
  {
    id: 'ASG003',
    subject: 'English',
    title: 'Essay: Environmental Conservation',
    description: 'Write a 1000-word essay on the importance of environmental conservation',
    assignedDate: '2026-02-15',
    dueDate: '2026-02-22',
    totalMarks: 30,
    status: 'Graded',
    obtainedMarks: 27,
    teacherFeedback: 'Excellent work! Well-structured arguments and good use of references.',
  },
  {
    id: 'ASG004',
    subject: 'Chemistry',
    title: 'Periodic Table Analysis',
    description: 'Create a detailed analysis of group 17 elements',
    assignedDate: '2026-02-10',
    dueDate: '2026-02-17',
    totalMarks: 15,
    status: 'Overdue',
  },
  {
    id: 'ASG005',
    subject: 'Computer Science',
    title: 'Python Programming Assignment',
    description: 'Develop a simple calculator application using Python',
    assignedDate: '2026-02-22',
    dueDate: '2026-03-01',
    totalMarks: 25,
    status: 'Pending',
  },
];

const getStatusBadge = (status: string) => {
  const colors = {
    Pending: 'bg-amber-50 text-amber-700 border-amber-200 font-medium',
    Submitted: 'bg-blue-50 text-blue-700 border-blue-200 font-medium',
    Graded: 'bg-emerald-50 text-emerald-700 border-emerald-200 font-medium',
    Overdue: 'bg-red-50 text-red-700 border-red-200 font-medium',
  };
  const icons = {
    Pending: AlertCircle,
    Submitted: Upload,
    Graded: CheckCircle,
    Overdue: AlertCircle,
  };
  const Icon = icons[status as keyof typeof icons];
  return (
    <Badge className={`${colors[status as keyof typeof colors]} border flex items-center gap-1`}>
      <Icon className="w-3 h-3" />
      {status}
    </Badge>
  );
};

export function StudentAssignments() {
  const [filter, setFilter] = useState<'All' | 'Pending' | 'Submitted' | 'Graded'>('All');

  const filteredAssignments = mockAssignments.filter(assignment =>
    filter === 'All' || assignment.status === filter
  );

  const pendingCount = mockAssignments.filter(a => a.status === 'Pending').length;
  const submittedCount = mockAssignments.filter(a => a.status === 'Submitted').length;
  const gradedCount = mockAssignments.filter(a => a.status === 'Graded').length;
  const allAssignments = mockAssignments.length;

  return (
    <PortalLayout
      role="student"
      userName="Rohan Kumar"
      userRole="Grade 10-A"
      pageTitle="Assignments"
      breadcrumbs={["Home", "Student", "Assignments"]}
    >
      <motion.div 
        className="space-y-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 sm:gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Card className="bg-gradient-to-br from-amber-500 to-amber-600 border-0 shadow-lg p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                  <AlertCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white/90 mb-1">Pending Assignments</p>
                  <h3 className="text-3xl font-bold text-white">{pendingCount}</h3>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="bg-gradient-to-br from-blue-500 to-blue-600 border-0 shadow-lg p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                  <Upload className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white/90 mb-1">Submitted</p>
                  <h3 className="text-3xl font-bold text-white">{submittedCount}</h3>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="bg-gradient-to-br from-emerald-500 to-emerald-600 border-0 shadow-lg p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white/90 mb-1">Graded</p>
                  <h3 className="text-3xl font-bold text-white">{gradedCount}</h3>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card className="bg-gradient-to-br from-purple-500 to-purple-600 border-0 shadow-lg p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white/90 mb-1">Total Assignments</p>
                  <h3 className="text-3xl font-bold text-white">{allAssignments}</h3>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Card className="bg-white border border-slate-200 shadow-sm p-6">
            <div className="flex flex-wrap gap-3">
              <Button
                onClick={() => setFilter('All')}
                className={filter === 'All' ? 'bg-blue-600 hover:bg-blue-700 text-white font-semibold' : 'bg-white border-slate-300 text-slate-700 hover:bg-blue-50 hover:text-[#2F80ED] hover:border-blue-500 font-semibold transition-all duration-200'}
              >
                All Assignments
              </Button>
              <Button
                onClick={() => setFilter('Pending')}
                className={filter === 'Pending' ? 'bg-blue-600 hover:bg-blue-700 text-white font-semibold' : 'bg-white border-slate-300 text-slate-700 hover:bg-blue-50 hover:text-[#2F80ED] hover:border-blue-500 font-semibold transition-all duration-200'}
              >
                Pending
              </Button>
              <Button
                onClick={() => setFilter('Submitted')}
                className={filter === 'Submitted' ? 'bg-blue-600 hover:bg-blue-700 text-white font-semibold' : 'bg-white border-slate-300 text-slate-700 hover:bg-blue-50 hover:text-[#2F80ED] hover:border-blue-500 font-semibold transition-all duration-200'}
              >
                Submitted
              </Button>
              <Button
                onClick={() => setFilter('Graded')}
                className={filter === 'Graded' ? 'bg-blue-600 hover:bg-blue-700 text-white font-semibold' : 'bg-white border-slate-300 text-slate-700 hover:bg-blue-50 hover:text-[#2F80ED] hover:border-blue-500 font-semibold transition-all duration-200'}
              >
                Graded
              </Button>
            </div>
          </Card>
        </motion.div>

        {/* Assignments List */}
        <div className="space-y-4">
          {filteredAssignments.map((assignment, index) => (
            <motion.div
              key={assignment.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.1 }}
            >
              <Card className="bg-white border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all duration-200">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-bold text-slate-900">{assignment.title}</h3>
                        {getStatusBadge(assignment.status)}
                      </div>
                      <p className="text-sm text-blue-600 font-semibold mb-2">{assignment.subject}</p>
                      <p className="text-slate-600 text-sm font-medium">{assignment.description}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div className="flex items-center gap-2 text-slate-700">
                      <Calendar className="w-4 h-4 text-blue-600" />
                      <div>
                        <p className="text-xs text-slate-500 font-medium">Assigned</p>
                        <p className="text-sm font-semibold text-slate-900">{assignment.assignedDate}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-slate-700">
                      <Clock className="w-4 h-4 text-blue-600" />
                      <div>
                        <p className="text-xs text-slate-500 font-medium">Due Date</p>
                        <p className="text-sm font-semibold text-slate-900">{assignment.dueDate}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-slate-700">
                      <FileText className="w-4 h-4 text-blue-600" />
                      <div>
                        <p className="text-xs text-slate-500 font-medium">Total Marks</p>
                        <p className="text-sm font-semibold text-slate-900">{assignment.totalMarks}</p>
                      </div>
                    </div>
                  </div>

                  {assignment.status === 'Graded' && assignment.obtainedMarks && (
                    <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <p className="text-sm font-bold text-emerald-700">Marks Obtained</p>
                        <p className="text-xl font-bold text-emerald-700">{assignment.obtainedMarks}/{assignment.totalMarks}</p>
                      </div>
                      {assignment.teacherFeedback && (
                        <p className="text-sm text-slate-600 font-medium italic">"{assignment.teacherFeedback}"</p>
                      )}
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-200">
                    {assignment.status === 'Pending' && (
                      <Button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-all duration-200">
                        <Upload className="w-4 h-4 mr-2" />
                        Submit Assignment
                      </Button>
                    )}
                    {assignment.status === 'Submitted' && (
                      <Button variant="outline" className="flex-1 border-slate-300 text-slate-700 hover:bg-blue-50 hover:text-[#2F80ED] hover:border-blue-500 font-semibold transition-all duration-200">
                        <Eye className="w-4 h-4 mr-2" />
                        View Submission
                      </Button>
                    )}
                    {assignment.status === 'Graded' && (
                      <Button variant="outline" className="flex-1 border-slate-300 text-slate-700 hover:bg-blue-50 hover:text-[#2F80ED] hover:border-blue-500 font-semibold transition-all duration-200">
                        <Download className="w-4 h-4 mr-2" />
                        Download Feedback
                      </Button>
                    )}
                    <Button variant="outline" className="border-slate-300 text-slate-700 hover:bg-blue-50 hover:text-[#2F80ED] hover:border-blue-500 font-semibold transition-all duration-200">
                      <Download className="w-4 h-4 mr-2" />
                      Instructions
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </PortalLayout>
  );
}