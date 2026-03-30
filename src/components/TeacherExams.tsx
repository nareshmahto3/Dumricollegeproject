import { useState } from 'react';
import { motion } from 'motion/react';
import {
  FileCheck,
  Plus,
  Calendar,
  Clock,
  Users,
  Edit,
  Trash2,
  Eye,
  Download,
  Upload,
  CheckCircle2,
  AlertCircle,
  BookOpen,
} from 'lucide-react';
import { Card } from './ui/card';
import { PortalLayout } from './PortalLayout';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

interface Exam {
  id: number;
  title: string;
  subject: string;
  class: string;
  date: string;
  time: string;
  duration: string;
  totalMarks: number;
  status: 'upcoming' | 'ongoing' | 'completed';
  studentsAppeared: number;
  totalStudents: number;
}

const examsData: Exam[] = [
  {
    id: 1,
    title: 'Mid-Term Examination',
    subject: 'Mathematics',
    class: 'Grade 10-A',
    date: '2026-03-15',
    time: '09:00 AM',
    duration: '3 hours',
    totalMarks: 100,
    status: 'upcoming',
    studentsAppeared: 0,
    totalStudents: 45,
  },
  {
    id: 2,
    title: 'Unit Test 2',
    subject: 'Physics',
    class: 'Grade 11-B',
    date: '2026-02-28',
    time: '10:00 AM',
    duration: '2 hours',
    totalMarks: 50,
    status: 'completed',
    studentsAppeared: 42,
    totalStudents: 42,
  },
  {
    id: 3,
    title: 'Weekly Quiz',
    subject: 'Mathematics',
    class: 'Grade 10-A',
    date: '2026-02-24',
    time: '11:00 AM',
    duration: '1 hour',
    totalMarks: 25,
    status: 'ongoing',
    studentsAppeared: 38,
    totalStudents: 45,
  },
  {
    id: 4,
    title: 'Final Examination',
    subject: 'Physics',
    class: 'Grade 11-B',
    date: '2026-04-20',
    time: '09:00 AM',
    duration: '3 hours',
    totalMarks: 100,
    status: 'upcoming',
    studentsAppeared: 0,
    totalStudents: 42,
  },
];

export function TeacherExams() {
  const [exams, setExams] = useState<Exam[]>(examsData);
  const [filter, setFilter] = useState<'all' | 'upcoming' | 'ongoing' | 'completed'>('all');

  const filteredExams = filter === 'all'
    ? exams
    : exams.filter(exam => exam.status === filter);

  const upcomingCount = exams.filter(e => e.status === 'upcoming').length;
  const ongoingCount = exams.filter(e => e.status === 'ongoing').length;
  const completedCount = exams.filter(e => e.status === 'completed').length;

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'upcoming':
        return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'ongoing':
        return 'bg-amber-100 text-amber-700 border-amber-200';
      case 'completed':
        return 'bg-emerald-100 text-emerald-700 border-emerald-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'upcoming':
        return <Clock className="w-4 h-4" />;
      case 'ongoing':
        return <AlertCircle className="w-4 h-4" />;
      case 'completed':
        return <CheckCircle2 className="w-4 h-4" />;
      default:
        return null;
    }
  };

  return (
    <PortalLayout
      role="teacher"
      userName="Dr. Priya Sharma"
      userRole="Mathematics Teacher"
      pageTitle="Exams Management"
      breadcrumbs={["Home", "Teacher", "Exams"]}
    >
      <div className="space-y-6">
        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <Card className="bg-gradient-to-br from-red-500 to-red-600 border-0 shadow-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                  <FileCheck className="w-6 h-6 text-white" />
                </div>
                <Badge className="bg-white/20 text-white border-white/30 font-semibold backdrop-blur-sm">Total</Badge>
              </div>
              <p className="text-sm text-white/90 font-semibold mb-1">Total Exams</p>
              <h3 className="text-3xl font-bold text-white">{exams.length}</h3>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <Card className="bg-gradient-to-br from-blue-500 to-blue-600 border-0 shadow-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <Badge className="bg-white/20 text-white border-white/30 font-semibold backdrop-blur-sm">Scheduled</Badge>
              </div>
              <p className="text-sm text-white/90 font-semibold mb-1">Upcoming</p>
              <h3 className="text-3xl font-bold text-white">{upcomingCount}</h3>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <Card className="bg-gradient-to-br from-orange-500 to-orange-600 border-0 shadow-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                  <AlertCircle className="w-6 h-6 text-white" />
                </div>
                <Badge className="bg-white/20 text-white border-white/30 font-semibold backdrop-blur-sm">Active</Badge>
              </div>
              <p className="text-sm text-white/90 font-semibold mb-1">Ongoing</p>
              <h3 className="text-3xl font-bold text-white">{ongoingCount}</h3>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <Card className="bg-gradient-to-br from-emerald-500 to-emerald-600 border-0 shadow-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                  <CheckCircle2 className="w-6 h-6 text-white" />
                </div>
                <Badge className="bg-white/20 text-white border-white/30 font-semibold backdrop-blur-sm">Done</Badge>
              </div>
              <p className="text-sm text-white/90 font-semibold mb-1">Completed</p>
              <h3 className="text-3xl font-bold text-white">{completedCount}</h3>
            </Card>
          </motion.div>
        </div>

        {/* Actions Bar */}
        <Card className="p-4 bg-white border-amber-200 shadow-md">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              <Button
                variant={filter === 'all' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setFilter('all')}
                className={filter === 'all' ? 'bg-red-500 hover:bg-red-600' : 'border-red-300 text-red-600 hover:bg-red-50'}
              >
                All Exams
              </Button>
              <Button
                variant={filter === 'upcoming' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setFilter('upcoming')}
                className={filter === 'upcoming' ? ' hover:bg-blue-600' : 'border-blue-300 hover:text-blue-800 text-blue-600 hover:bg-blue-50'}
              >
                Upcoming
              </Button>
              <Button
                variant={filter === 'ongoing' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setFilter('ongoing')}
                className={filter === 'ongoing' ? 'bg-orange-500 hover:bg-orange-600' : 'border-orange-300 hover:text-orange-700 text-orange-600 hover:bg-orange-50'}
              >
                Ongoing
              </Button>
              <Button
                variant={filter === 'completed' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setFilter('completed')}
                className={filter === 'completed' ? 'bg-emerald-500 hover:bg-emerald-600' : 'border-emerald-300  hover:text-emerald-900 text-emerald-600 hover:bg-emerald-50'}
              >
                Completed
              </Button>
            </div>
            <Button className="bg-gradient-to-r from-violet-500 to-violet-600 hover:from-violet-600 hover:to-violet-700 text-white">
              <Plus className="w-4 h-4 mr-2" />
              Create New Exam
            </Button>
          </div>
        </Card>

        {/* Exams List */}
        <div className="grid grid-cols-1 gap-6">
          {filteredExams.map((exam, index) => (
            <motion.div
              key={exam.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -4 }}
            >
              <Card className="bg-white border-blue-200 shadow-lg p-6 hover:shadow-xl transition-all">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="flex items-start gap-4 flex-1">
                    <div className={`w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0 ${exam.status === 'upcoming' ? 'bg-blue-100' :
                      exam.status === 'ongoing' ? 'bg-orange-100' :
                        'bg-emerald-100'
                      }`}>
                      <FileCheck className={`w-8 h-8 ${exam.status === 'upcoming' ? 'text-blue-600' :
                        exam.status === 'ongoing' ? 'text-orange-600' :
                          'text-emerald-600'
                        }`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-slate-900 mb-1">{exam.title}</h3>
                          <div className="flex flex-wrap items-center gap-3 text-sm text-slate-600">
                            <span className="flex items-center gap-1">
                              <BookOpen className="w-4 h-4 text-amber-500" />
                              {exam.subject}
                            </span>
                            <span className="flex items-center gap-1">
                              <Users className="w-4 h-4 text-amber-500" />
                              {exam.class}
                            </span>
                          </div>
                        </div>
                        <Badge variant="outline" className={getStatusColor(exam.status)}>
                          {getStatusIcon(exam.status)}
                          <span className="ml-1 capitalize">{exam.status}</span>
                        </Badge>
                      </div>

                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                        <div>
                          <p className="text-xs text-slate-500 mb-1">Date</p>
                          <p className="text-sm font-semibold text-slate-900 flex items-center gap-1">
                            <Calendar className="w-3 h-3 text-amber-500" />
                            {new Date(exam.date).toLocaleDateString('en-IN', {
                              day: 'numeric',
                              month: 'short',
                              year: 'numeric'
                            })}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs text-slate-500 mb-1">Time</p>
                          <p className="text-sm font-semibold text-slate-900 flex items-center gap-1">
                            <Clock className="w-3 h-3 text-amber-500" />
                            {exam.time}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs text-slate-500 mb-1">Duration</p>
                          <p className="text-sm font-semibold text-slate-900">{exam.duration}</p>
                        </div>
                        <div>
                          <p className="text-xs text-slate-500 mb-1">Total Marks</p>
                          <p className="text-sm font-semibold text-slate-900">{exam.totalMarks}</p>
                        </div>
                      </div>

                      {exam.status === 'completed' && (
                        <div className="mt-3 flex items-center gap-2 text-sm text-emerald-600 bg-emerald-50 p-2 rounded">
                          <CheckCircle2 className="w-4 h-4" />
                          <span>
                            {exam.studentsAppeared}/{exam.totalStudents} students appeared
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex lg:flex-col gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-blue-300 text-blue-600 hover:bg-blue-50 hover:text-blue-800"
                    >
                      <Eye className="w-4 h-4 mr-1" />
                      View
                    </Button>
                    {exam.status !== 'completed' && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-amber-300 text-amber-600 hover:bg-amber-50 hover:text-amber-500"
                      >
                        <Edit className="w-4 h-4 mr-1" />
                        Edit
                      </Button>
                    )}
                    {exam.status === 'completed' && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-emerald-300 text-emerald-600 hover:bg-emerald-50 hover:text-emerald-500"
                      >
                        <Download className="w-4 h-4 mr-1" />
                        Results
                      </Button>
                    )}
                    {exam.status === 'upcoming' && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-red-300 text-red-600 hover:bg-red-50 hover:text-red-500"
                      >
                        <Trash2 className="w-4 h-4 mr-1" />
                        Delete
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </PortalLayout>
  );
}