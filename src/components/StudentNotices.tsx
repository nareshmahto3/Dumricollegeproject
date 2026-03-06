import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { PortalLayout } from './PortalLayout';
import { Bell, Calendar, Download, Pin, AlertCircle, Info, CheckCircle } from 'lucide-react';

interface Notice {
  id: string;
  title: string;
  description: string;
  date: string;
  category: 'Academic' | 'Event' | 'Holiday' | 'Important' | 'General';
  isPinned: boolean;
  hasAttachment: boolean;
}

const mockNotices: Notice[] = [
  {
    id: 'NOT001',
    title: 'Midterm Exam Schedule Released',
    description: 'The midterm examination schedule for all grades has been released. Students are requested to check the detailed timetable and prepare accordingly.',
    date: '2026-02-24',
    category: 'Academic',
    isPinned: true,
    hasAttachment: true,
  },
  {
    id: 'NOT002',
    title: 'Annual Sports Day - March 15, 2026',
    description: 'Annual Sports Day will be organized on March 15, 2026. All students are requested to participate enthusiastically in various sports events.',
    date: '2026-02-23',
    category: 'Event',
    isPinned: true,
    hasAttachment: false,
  },
  {
    id: 'NOT003',
    title: 'Holiday Notice - Holi Festival',
    description: 'School will remain closed on March 8-9, 2026 for Holi festival. School will reopen on March 10, 2026.',
    date: '2026-02-22',
    category: 'Holiday',
    isPinned: false,
    hasAttachment: false,
  },
  {
    id: 'NOT004',
    title: 'Parent-Teacher Meeting',
    description: 'Parent-Teacher meeting is scheduled for February 28, 2026. All parents are requested to attend and discuss their ward\'s progress.',
    date: '2026-02-20',
    category: 'Important',
    isPinned: false,
    hasAttachment: true,
  },
  {
    id: 'NOT005',
    title: 'Library Timing Change',
    description: 'School library timing has been changed. New timings: 8:00 AM to 5:00 PM on weekdays.',
    date: '2026-02-18',
    category: 'General',
    isPinned: false,
    hasAttachment: false,
  },
  {
    id: 'NOT006',
    title: 'Science Exhibition - Call for Projects',
    description: 'Students interested in participating in the Annual Science Exhibition should submit their project proposals by March 1, 2026.',
    date: '2026-02-15',
    category: 'Academic',
    isPinned: false,
    hasAttachment: true,
  },
];

const getCategoryBadge = (category: string) => {
  const colors = {
    Academic: 'bg-blue-50 text-blue-700 border-blue-200 font-medium',
    Event: 'bg-purple-50 text-purple-700 border-purple-200 font-medium',
    Holiday: 'bg-emerald-50 text-emerald-700 border-emerald-200 font-medium',
    Important: 'bg-red-50 text-red-700 border-red-200 font-medium',
    General: 'bg-amber-50 text-amber-700 border-amber-200 font-medium',
  };
  const icons = {
    Academic: CheckCircle,
    Event: Calendar,
    Holiday: Info,
    Important: AlertCircle,
    General: Bell,
  };
  const Icon = icons[category as keyof typeof icons];
  return (
    <Badge className={`${colors[category as keyof typeof colors]} border flex items-center gap-1`}>
      <Icon className="w-3 h-3" />
      {category}
    </Badge>
  );
};

export function StudentNotices() {
  const pinnedNotices = mockNotices.filter(n => n.isPinned);
  const regularNotices = mockNotices.filter(n => !n.isPinned);

  const allNotices = mockNotices;
  const urgentCount = mockNotices.filter(n => n.category === 'Important').length;
  const pinnedCount = pinnedNotices.length;
  const thisMonthCount = mockNotices.filter(n => new Date(n.date).getMonth() === new Date().getMonth()).length;

  return (
    <PortalLayout
      role="student"
      userName="Rohan Kumar"
      userRole="Grade 10-A"
      pageTitle="Notices & Announcements"
      breadcrumbs={["Home", "Student", "Notices"]}
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
            <Card className="bg-gradient-to-br from-blue-500 to-blue-600 border-0 shadow-lg p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                  <Bell className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white/90 mb-1">Total Notices</p>
                  <h3 className="text-3xl font-bold text-white">{allNotices.length}</h3>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="bg-gradient-to-br from-red-500 to-red-600 border-0 shadow-lg p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                  <AlertCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white/90 mb-1">Urgent Notices</p>
                  <h3 className="text-3xl font-bold text-white">{urgentCount}</h3>
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
                  <Pin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white/90 mb-1">Pinned</p>
                  <h3 className="text-3xl font-bold text-white">{pinnedCount}</h3>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card className="bg-gradient-to-br from-emerald-500 to-emerald-600 border-0 shadow-lg p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white/90 mb-1">This Month</p>
                  <h3 className="text-3xl font-bold text-white">{thisMonthCount}</h3>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Pinned Notices */}
        {pinnedNotices.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Pin className="w-5 h-5 text-blue-600" />
              Pinned Notices
            </h3>
            <div className="space-y-4">
              {pinnedNotices.map((notice, index) => (
                <motion.div
                  key={notice.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                >
                  <Card className="bg-blue-50 border-blue-300 border-l-4 shadow-sm hover:shadow-md transition-all duration-200">
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <Pin className="w-5 h-5 text-blue-600" />
                            <h4 className="font-bold text-slate-900">{notice.title}</h4>
                          </div>
                          <p className="text-slate-700 font-medium">{notice.description}</p>
                        </div>
                      </div>
                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-4 border-t border-blue-200">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-2 text-sm text-slate-600">
                            <Calendar className="w-4 h-4 text-blue-600" />
                            <span className="font-medium">{notice.date}</span>
                          </div>
                          {getCategoryBadge(notice.category)}
                        </div>
                        {notice.hasAttachment && (
                          <Button variant="outline" className="border-slate-300 text-slate-700 hover:bg-blue-50 hover:text-[#2F80ED] hover:border-blue-500 font-semibold transition-all duration-200">
                            <Download className="w-4 h-4 mr-2" />
                            Download
                          </Button>
                        )}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Regular Notices */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
            <Bell className="w-5 h-5 text-blue-600" />
            All Notices
          </h3>
          <div className="space-y-4">
            {regularNotices.map((notice, index) => (
              <motion.div
                key={notice.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
              >
                <Card className="bg-white border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all duration-200">
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h4 className="font-bold text-slate-900 mb-2">{notice.title}</h4>
                        <p className="text-slate-700 font-medium">{notice.description}</p>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-4 border-t border-slate-200">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2 text-sm text-slate-600">
                          <Calendar className="w-4 h-4 text-blue-600" />
                          <span className="font-medium">{notice.date}</span>
                        </div>
                        {getCategoryBadge(notice.category)}
                      </div>
                      {notice.hasAttachment && (
                        <Button variant="outline" className="border-slate-300 text-slate-700 hover:bg-blue-50 hover:text-[#2F80ED] hover:border-blue-500 font-semibold transition-all duration-200">
                          <Download className="w-4 h-4 mr-2" />
                          Download
                        </Button>
                      )}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </PortalLayout>
  );
}