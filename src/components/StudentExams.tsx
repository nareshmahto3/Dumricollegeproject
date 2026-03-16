import { useState } from 'react';
import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { PortalLayout } from './PortalLayout';
import { Calendar, Clock, MapPin, FileText, AlertCircle, CheckCircle, Download } from 'lucide-react';

interface Exam {
  id: string;
  subject: string;
  type: 'Midterm' | 'Final' | 'Quiz' | 'Unit Test';
  date: string;
  time: string;
  duration: string;
  room: string;
  totalMarks: number;
  status: 'Upcoming' | 'Completed' | 'In Progress';
  syllabus?: string;
}

const mockExams: Exam[] = [
  {
    id: 'EX001',
    subject: 'Mathematics',
    type: 'Midterm',
    date: '2026-03-05',
    time: '9:00 AM',
    duration: '3 hours',
    room: 'Exam Hall A',
    totalMarks: 100,
    status: 'Upcoming',
    syllabus: 'Chapters 1-5',
  },
  {
    id: 'EX002',
    subject: 'Physics',
    type: 'Midterm',
    date: '2026-03-07',
    time: '9:00 AM',
    duration: '3 hours',
    room: 'Exam Hall B',
    totalMarks: 100,
    status: 'Upcoming',
    syllabus: 'Units 1-3',
  },
  {
    id: 'EX003',
    subject: 'English Literature',
    type: 'Unit Test',
    date: '2026-02-28',
    time: '10:00 AM',
    duration: '2 hours',
    room: 'Room 305',
    totalMarks: 50,
    status: 'Upcoming',
    syllabus: 'Poetry Section',
  },
  {
    id: 'EX004',
    subject: 'Chemistry',
    type: 'Quiz',
    date: '2026-02-20',
    time: '11:00 AM',
    duration: '1 hour',
    room: 'Lab 201',
    totalMarks: 25,
    status: 'Completed',
  },
  {
    id: 'EX005',
    subject: 'Computer Science',
    type: 'Unit Test',
    date: '2026-02-18',
    time: '2:00 PM',
    duration: '2 hours',
    room: 'Computer Lab',
    totalMarks: 50,
    status: 'Completed',
  },
];

const getTypeBadge = (type: string) => {
  const colors = {
    Midterm: 'bg-red-50 text-red-700 border-red-200 font-medium',
    Final: 'bg-purple-50 text-purple-700 border-purple-200 font-medium',
    Quiz: 'bg-blue-50 text-blue-700 border-blue-200 font-medium',
    'Unit Test': 'bg-emerald-50 text-emerald-700 border-emerald-200 font-medium',
  };
  return <Badge className={`${colors[type as keyof typeof colors]} border`}>{type}</Badge>;
};

const getStatusBadge = (status: string) => {
  const colors = {
    Upcoming: 'bg-amber-50 text-amber-700 border-amber-200 font-medium',
    Completed: 'bg-emerald-50 text-emerald-700 border-emerald-200 font-medium',
    'In Progress': 'bg-blue-50 text-blue-700 border-blue-200 font-medium',
  };
  const icons = {
    Upcoming: AlertCircle,
    Completed: CheckCircle,
    'In Progress': Clock,
  };
  const Icon = icons[status as keyof typeof icons];
  return (
    <Badge className={`${colors[status as keyof typeof colors]} border flex items-center gap-1`}>
      <Icon className="w-3 h-3" />
      {status}
    </Badge>
  );
};

export function StudentExams() {
  const [filter, setFilter] = useState<'All' | 'Upcoming' | 'Completed'>('All');

  const filteredExams = mockExams.filter(exam => 
    filter === 'All' || exam.status === filter
  );

  const upcomingExamsCount = mockExams.filter(e => e.status === 'Upcoming').length;
  const completedExamsCount = mockExams.filter(e => e.status === 'Completed').length;
  const allExams = mockExams;

  return (
    <PortalLayout
      role="student"
      userName="Rohan Kumar"
      userRole="Grade 10-A"
      pageTitle="Examinations"
      breadcrumbs={["Home", "Student", "Exams"]}
    >
      <motion.div 
        className="space-y-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
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
                  <p className="text-sm font-semibold text-white/90 mb-1">Upcoming Exams</p>
                  <h3 className="text-3xl font-bold text-white">{upcomingExamsCount}</h3>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="bg-gradient-to-br from-emerald-500 to-emerald-600 border-0 shadow-lg p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white/90 mb-1">Completed Exams</p>
                  <h3 className="text-3xl font-bold text-white">{completedExamsCount}</h3>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="bg-gradient-to-br from-blue-500 to-blue-600 border-0 shadow-lg p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white/90 mb-1">Total Exams</p>
                  <h3 className="text-3xl font-bold text-white">{allExams.length}</h3>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card className="bg-white border border-slate-200 shadow-sm p-6">
            <div className="flex flex-wrap gap-3">
              <Button
                onClick={() => setFilter('All')}
                className={filter === 'All' ? 'bg-blue-600 hover:bg-blue-700 text-white font-semibold' : 'bg-white border-slate-300 text-slate-700 hover:bg-blue-50 hover:text-[#2F80ED] hover:border-blue-500 font-semibold transition-all duration-200'}
              >
                All Exams
              </Button>
              <Button
                onClick={() => setFilter('Upcoming')}
                className={filter === 'Upcoming' ? 'bg-blue-600 hover:bg-blue-700 text-white font-semibold' : 'bg-white border-slate-300 text-slate-700 hover:bg-blue-50 hover:text-[#2F80ED] hover:border-blue-500 font-semibold transition-all duration-200'}
              >
                Upcoming
              </Button>
              <Button
                onClick={() => setFilter('Completed')}
                className={filter === 'Completed' ? 'bg-blue-600 hover:bg-blue-700 text-white font-semibold' : 'bg-white border-slate-300 text-slate-700 hover:bg-blue-50 hover:text-[#2F80ED] hover:border-blue-500 font-semibold transition-all duration-200'}
              >
                Completed
              </Button>
            </div>
          </Card>
        </motion.div>

        {/* Exams Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          {filteredExams.map((exam, index) => (
            <motion.div
              key={exam.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
            >
              <Card className="bg-white border-2 border-blue-500 hover:border-blue-600 hover:shadow-md transition-all duration-200">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">{exam.subject}</h3>
                      <p className="text-slate-600 text-sm font-medium">{exam.id}</p>
                    </div>
                    <div className="flex flex-col gap-2 items-end">
                      {getTypeBadge(exam.type)}
                      {getStatusBadge(exam.status)}
                    </div>
                  </div>

                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-2 text-slate-700">
                      <Calendar className="w-4 h-4 text-blue-600" />
                      <span className="text-sm font-medium">{exam.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-700">
                      <Clock className="w-4 h-4 text-blue-600" />
                      <span className="text-sm font-medium">{exam.time} • {exam.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-700">
                      <MapPin className="w-4 h-4 text-blue-600" />
                      <span className="text-sm font-medium">{exam.room}</span>
                    </div>
                    {exam.syllabus && (
                      <div className="flex items-center gap-2 text-slate-700">
                        <FileText className="w-4 h-4 text-blue-600" />
                        <span className="text-sm font-medium">{exam.syllabus}</span>
                      </div>
                    )}
                  </div>

                  <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                    <div>
                      <p className="text-xs text-slate-600 font-medium">Total Marks</p>
                      <p className="text-lg font-bold text-slate-900">{exam.totalMarks}</p>
                    </div>
                    <Button variant="outline" className="border-slate-300 text-slate-700 hover:bg-blue-50 hover:text-[#2F80ED] hover:border-blue-500 font-semibold transition-all duration-200">
                      <Download className="w-4 h-4 mr-2" />
                      Syllabus
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