import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { PortalLayout } from './PortalLayout';
import { Calendar, Clock, MapPin, User } from 'lucide-react';

interface ScheduleItem {
  time: string;
  monday?: { subject: string; teacher: string; room: string; type: string };
  tuesday?: { subject: string; teacher: string; room: string; type: string };
  wednesday?: { subject: string; teacher: string; room: string; type: string };
  thursday?: { subject: string; teacher: string; room: string; type: string };
  friday?: { subject: string; teacher: string; room: string; type: string };
  saturday?: { subject: string; teacher: string; room: string; type: string };
}

const schedule: ScheduleItem[] = [
  {
    time: '8:00 - 9:00 AM',
    monday: { subject: 'Mathematics', teacher: 'Dr. Sarah Johnson', room: '201', type: 'Theory' },
    tuesday: { subject: 'Physics', teacher: 'Prof. Michael Chen', room: 'Lab 102', type: 'Lab' },
    wednesday: { subject: 'Mathematics', teacher: 'Dr. Sarah Johnson', room: '201', type: 'Theory' },
    thursday: { subject: 'Chemistry', teacher: 'Dr. David Wilson', room: 'Lab 201', type: 'Lab' },
    friday: { subject: 'English', teacher: 'Ms. Emily Brown', room: '305', type: 'Theory' },
    saturday: { subject: 'Computer Science', teacher: 'Mr. Robert Taylor', room: 'Comp Lab', type: 'Tutorial' },
  },
  {
    time: '9:15 - 10:15 AM',
    monday: { subject: 'English Literature', teacher: 'Ms. Emily Brown', room: '305', type: 'Theory' },
    tuesday: { subject: 'Mathematics', teacher: 'Dr. Sarah Johnson', room: '201', type: 'Theory' },
    wednesday: { subject: 'Physics', teacher: 'Prof. Michael Chen', room: 'Lab 102', type: 'Lab' },
    thursday: { subject: 'English', teacher: 'Ms. Emily Brown', room: '305', type: 'Theory' },
    friday: { subject: 'Computer Science', teacher: 'Mr. Robert Taylor', room: 'Comp Lab', type: 'Tutorial' },
    saturday: { subject: 'Mathematics', teacher: 'Dr. Sarah Johnson', room: '201', type: 'Theory' },
  },
  {
    time: '10:30 - 11:30 AM',
    monday: { subject: 'Chemistry', teacher: 'Dr. David Wilson', room: 'Lab 201', type: 'Lab' },
    tuesday: { subject: 'English', teacher: 'Ms. Emily Brown', room: '305', type: 'Theory' },
    wednesday: { subject: 'History', teacher: 'Prof. James Miller', room: '402', type: 'Theory' },
    thursday: { subject: 'Mathematics', teacher: 'Dr. Sarah Johnson', room: '201', type: 'Theory' },
    friday: { subject: 'Physics', teacher: 'Prof. Michael Chen', room: 'Lab 102', type: 'Lab' },
    saturday: { subject: 'Geography', teacher: 'Ms. Anna White', room: '501', type: 'Theory' },
  },
  {
    time: '11:45 AM - 12:45 PM',
    monday: { subject: 'Computer Science', teacher: 'Mr. Robert Taylor', room: 'Comp Lab', type: 'Tutorial' },
    tuesday: { subject: 'History', teacher: 'Prof. James Miller', room: '402', type: 'Theory' },
    wednesday: { subject: 'Chemistry', teacher: 'Dr. David Wilson', room: 'Lab 201', type: 'Lab' },
    thursday: { subject: 'Physics', teacher: 'Prof. Michael Chen', room: 'Lab 102', type: 'Lab' },
    friday: { subject: 'Geography', teacher: 'Ms. Anna White', room: '501', type: 'Theory' },
  },
  {
    time: '1:00 - 2:00 PM',
    monday: { subject: 'Physical Education', teacher: 'Mr. John Davis', room: 'Sports Ground', type: 'Practical' },
    tuesday: { subject: 'Computer Science', teacher: 'Mr. Robert Taylor', room: 'Comp Lab', type: 'Tutorial' },
    wednesday: { subject: 'Physical Education', teacher: 'Mr. John Davis', room: 'Sports Ground', type: 'Practical' },
    thursday: { subject: 'History', teacher: 'Prof. James Miller', room: '402', type: 'Theory' },
    friday: { subject: 'Library Period', teacher: 'Librarian', room: 'Library', type: 'Activity' },
  },
];

const getTypeColor = (type: string) => {
  const colors = {
    Theory: 'bg-blue-50 text-blue-700 border-blue-200 font-medium',
    Lab: 'bg-purple-50 text-purple-700 border-purple-200 font-medium',
    Tutorial: 'bg-emerald-50 text-emerald-700 border-emerald-200 font-medium',
    Practical: 'bg-orange-50 text-orange-700 border-orange-200 font-medium',
    Activity: 'bg-pink-50 text-pink-700 border-pink-200 font-medium',
  };
  return colors[type as keyof typeof colors] || 'bg-gray-50 text-gray-700 font-medium';
};

const getCardBackground = (type: string) => {
  const backgrounds = {
    Theory: 'bg-gradient-to-br from-blue-50 to-blue-100/50',
    Lab: 'bg-gradient-to-br from-purple-50 to-purple-100/50',
    Tutorial: 'bg-gradient-to-br from-emerald-50 to-emerald-100/50',
    Practical: 'bg-gradient-to-br from-orange-50 to-orange-100/50',
    Activity: 'bg-gradient-to-br from-pink-50 to-pink-100/50',
  };
  return backgrounds[type as keyof typeof backgrounds] || 'bg-slate-50';
};

export function StudentSchedule() {
  return (
    <PortalLayout
      role="student"
      userName="Rohan Kumar"
      userRole="Grade 10-A"
      pageTitle="Class Routine"
      breadcrumbs={["Home", "Student", "Class Routine"]}
    >
      <motion.div 
        className="space-y-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* Header Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Card className="bg-white border border-slate-200 shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Weekly Schedule</h2>
                <p className="text-slate-600 font-medium">Grade 10-A • Academic Year 2026-2027</p>
              </div>
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                <Calendar className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Schedule Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="bg-white border border-slate-200 overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full min-w-max">
                <thead>
                  <tr className="bg-slate-100 border-b border-slate-200">
                    <th className="text-left py-4 px-4 text-xs font-bold text-slate-700 uppercase tracking-wide whitespace-nowrap sticky left-0 bg-slate-100">
                      Time
                    </th>
                    <th className="text-left py-4 px-4 text-xs font-bold text-slate-700 uppercase tracking-wide whitespace-nowrap">Monday</th>
                    <th className="text-left py-4 px-4 text-xs font-bold text-slate-700 uppercase tracking-wide whitespace-nowrap">Tuesday</th>
                    <th className="text-left py-4 px-4 text-xs font-bold text-slate-700 uppercase tracking-wide whitespace-nowrap">Wednesday</th>
                    <th className="text-left py-4 px-4 text-xs font-bold text-slate-700 uppercase tracking-wide whitespace-nowrap">Thursday</th>
                    <th className="text-left py-4 px-4 text-xs font-bold text-slate-700 uppercase tracking-wide whitespace-nowrap">Friday</th>
                    <th className="text-left py-4 px-4 text-xs font-bold text-slate-700 uppercase tracking-wide whitespace-nowrap">Saturday</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {schedule.map((slot, index) => (
                    <motion.tr
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 + index * 0.05 }}
                      className="border-b border-slate-200 hover:bg-blue-50 transition-colors duration-200"
                    >
                      <td className="py-4 px-4 font-bold text-slate-900 whitespace-nowrap sticky left-0 bg-white">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-blue-600" />
                          <span className="font-semibold">{slot.time}</span>
                        </div>
                      </td>
                      {['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'].map((day) => {
                        const classData = slot[day as keyof typeof slot];
                        return (
                          <td key={day} className="py-4 px-4 whitespace-nowrap">
                            {classData && typeof classData === 'object' ? (
                              <div className={`p-3 rounded-lg border border-opacity-50 ${getCardBackground(classData.type)} space-y-2`}>
                                <div className="font-bold text-slate-900">{classData.subject}</div>
                                <div className="flex items-center gap-1.5 text-xs text-slate-600">
                                  <User className="w-3 h-3 text-blue-600" />
                                  <span className="font-medium">{classData.teacher}</span>
                                </div>
                                <div className="flex items-center gap-1.5 text-xs text-slate-600">
                                  <MapPin className="w-3 h-3 text-blue-600" />
                                  <span className="font-medium">{classData.room}</span>
                                </div>
                                <Badge className={`text-xs ${getTypeColor(classData.type)} border`}>
                                  {classData.type}
                                </Badge>
                              </div>
                            ) : (
                              <span className="text-slate-400 font-medium">-</span>
                            )}
                          </td>
                        );
                      })}
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </motion.div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card className="bg-white border border-slate-200 p-6 shadow-sm">
            <h3 className="font-bold text-slate-900 mb-4">Class Types</h3>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <Badge className="bg-blue-50 text-blue-700 border-blue-200 border font-medium">Theory</Badge>
                <span className="text-sm text-slate-600 font-medium">Regular classroom lectures</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge className="bg-purple-50 text-purple-700 border-purple-200 border font-medium">Lab</Badge>
                <span className="text-sm text-slate-600 font-medium">Laboratory sessions</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge className="bg-emerald-50 text-emerald-700 border-emerald-200 border font-medium">Tutorial</Badge>
                <span className="text-sm text-slate-600 font-medium">Practical computer classes</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge className="bg-orange-50 text-orange-700 border-orange-200 border font-medium">Practical</Badge>
                <span className="text-sm text-slate-600 font-medium">Physical activities</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge className="bg-pink-50 text-pink-700 border-pink-200 border font-medium">Activity</Badge>
                <span className="text-sm text-slate-600 font-medium">Extracurricular sessions</span>
              </div>
            </div>
          </Card>
        </motion.div>
      </motion.div>
    </PortalLayout>
  );
}