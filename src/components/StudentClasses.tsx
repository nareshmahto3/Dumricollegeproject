import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { PortalLayout } from './PortalLayout';
import { BookOpen, Users, Clock, MapPin, Calendar, Eye } from 'lucide-react';

interface ClassInfo {
  id: string;
  subject: string;
  teacher: string;
  room: string;
  time: string;
  day: string;
  students: number;
  type: 'Theory' | 'Lab' | 'Tutorial';
}

const mockClasses: ClassInfo[] = [
  {
    id: 'CLS001',
    subject: 'Mathematics',
    teacher: 'Dr. Sarah Johnson',
    room: 'Room 201',
    time: '8:00 AM - 9:00 AM',
    day: 'Monday, Wednesday, Friday',
    students: 35,
    type: 'Theory',
  },
  {
    id: 'CLS002',
    subject: 'Physics',
    teacher: 'Prof. Michael Chen',
    room: 'Lab 102',
    time: '9:15 AM - 10:15 AM',
    day: 'Tuesday, Thursday',
    students: 32,
    type: 'Lab',
  },
  {
    id: 'CLS003',
    subject: 'English Literature',
    teacher: 'Ms. Emily Brown',
    room: 'Room 305',
    time: '10:30 AM - 11:30 AM',
    day: 'Monday, Wednesday, Friday',
    students: 35,
    type: 'Theory',
  },
  {
    id: 'CLS004',
    subject: 'Chemistry',
    teacher: 'Dr. David Wilson',
    room: 'Lab 201',
    time: '11:45 AM - 12:45 PM',
    day: 'Tuesday, Thursday',
    students: 30,
    type: 'Lab',
  },
  {
    id: 'CLS005',
    subject: 'Computer Science',
    teacher: 'Mr. Robert Taylor',
    room: 'Computer Lab',
    time: '1:00 PM - 2:00 PM',
    day: 'Monday, Wednesday',
    students: 28,
    type: 'Tutorial',
  },
];

const getTypeBadge = (type: string) => {
  const colors = {
    Theory: 'bg-blue-50 text-blue-700 border-blue-200 font-medium',
    Lab: 'bg-purple-50 text-purple-700 border-purple-200 font-medium',
    Tutorial: 'bg-emerald-50 text-emerald-700 border-emerald-200 font-medium',
  };
  return (
    <Badge className={`${colors[type as keyof typeof colors]} border`}>
      {type}
    </Badge>
  );
};

export function StudentClasses() {
  return (
    <PortalLayout
      role="student"
      userName="Rohan Kumar"
      userRole="Grade 10-A"
      pageTitle="My Classes"
      breadcrumbs={["Home", "Student", "My Classes"]}
    >
      <motion.div 
        className="space-y-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* Header Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Card className="bg-gradient-to-br from-blue-500 to-blue-600 border-0 shadow-lg p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white/90 mb-1">Total Classes</p>
                  <h3 className="text-3xl font-bold text-white">{mockClasses.length}</h3>
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
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white/90 mb-1">Today's Classes</p>
                  <h3 className="text-3xl font-bold text-white">
                    {mockClasses.filter(c => c.day === getCurrentDay()).length}
                  </h3>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="bg-gradient-to-br from-purple-500 to-purple-600 border-0 shadow-lg p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white/90 mb-1">Total Hours/Week</p>
                  <h3 className="text-3xl font-bold text-white">{mockClasses.length * 1}</h3>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Classes Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          {mockClasses.map((classItem, index) => (
            <motion.div
              key={classItem.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
            >
              <Card className="bg-white border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all duration-200">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">{classItem.subject}</h3>
                      <p className="text-slate-600 text-sm font-medium">{classItem.id}</p>
                    </div>
                    {getTypeBadge(classItem.type)}
                  </div>

                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-2 text-slate-700">
                      <Users className="w-4 h-4 text-blue-600" />
                      <span className="text-sm font-medium">{classItem.teacher}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-700">
                      <MapPin className="w-4 h-4 text-blue-600" />
                      <span className="text-sm font-medium">{classItem.room}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-700">
                      <Clock className="w-4 h-4 text-blue-600" />
                      <span className="text-sm font-medium">{classItem.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-700">
                      <Calendar className="w-4 h-4 text-blue-600" />
                      <span className="text-sm font-medium">{classItem.day}</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-200 flex gap-2">
                    <Button variant="outline" className="w-full bg-blue-50 border-blue-500 text-blue-600 hover:bg-blue-100 hover:border-blue-600 font-semibold transition-all duration-200">
                      <Eye className="w-4 h-4 mr-2" />
                      View Details
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

function getCurrentDay() {
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const today = new Date();
  return daysOfWeek[today.getDay()];
}