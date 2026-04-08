import { useState } from 'react';
import { motion } from 'motion/react';
import {
  Bell,
  Plus,
  Search,
  Edit,
  Trash2,
  Eye,
  Calendar,
  Users,
  AlertCircle,
  CheckCircle2,
  Clock,
  Filter,
  Download,
  Pin,
  Send,
} from 'lucide-react';
import { FileDown, FileSpreadsheet, ChevronDown } from 'lucide-react';
import { toast } from 'sonner';
import { PortalLayout } from './PortalLayout';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { useNavigate } from 'react-router';

interface Notice {
  id: string;
  title: string;
  content: string;
  category: 'General' | 'Academic' | 'Event' | 'Holiday' | 'Urgent';
  postedBy: string;
  postedDate: string;
  expiryDate: string;
  targetAudience: 'All' | 'Students' | 'Teachers' | 'Parents';
  status: 'Active' | 'Expired' | 'Draft';
  isPinned: boolean;
  views: number;
}

const mockNotices: Notice[] = [
  {
    id: 'NOT001',
    title: 'Mid-term Examination Schedule Released',
    content: 'The mid-term examination schedule for all classes has been released. Students are requested to check the schedule on the portal.',
    category: 'Academic',
    postedBy: 'Admin',
    postedDate: '2024-02-20',
    expiryDate: '2024-03-15',
    targetAudience: 'All',
    status: 'Active',
    isPinned: true,
    views: 2456,
  },
  {
    id: 'NOT002',
    title: 'Annual Sports Day - March 10, 2024',
    content: 'Annual Sports Day will be held on March 10, 2024. All students are required to participate. Registration deadline: March 1, 2024.',
    category: 'Event',
    postedBy: 'Sports Department',
    postedDate: '2024-02-18',
    expiryDate: '2024-03-10',
    targetAudience: 'Students',
    status: 'Active',
    isPinned: true,
    views: 1823,
  },
  {
    id: 'NOT003',
    title: 'School Closed - Public Holiday',
    content: 'School will remain closed on February 26, 2024, due to public holiday. Classes will resume on February 27, 2024.',
    category: 'Holiday',
    postedBy: 'Admin',
    postedDate: '2024-02-15',
    expiryDate: '2024-02-26',
    targetAudience: 'All',
    status: 'Active',
    isPinned: false,
    views: 3421,
  },
  {
    id: 'NOT004',
    title: 'Parent-Teacher Meeting',
    content: 'Parent-Teacher meeting scheduled for March 5, 2024. All parents are requested to attend.',
    category: 'General',
    postedBy: 'Admin',
    postedDate: '2024-02-22',
    expiryDate: '2024-03-05',
    targetAudience: 'Parents',
    status: 'Active',
    isPinned: false,
    views: 1567,
  },
  {
    id: 'NOT005',
    title: 'Library Books Return Notice',
    content: 'All borrowed library books must be returned by February 28, 2024. Late returns will incur fines.',
    category: 'General',
    postedBy: 'Library',
    postedDate: '2024-02-10',
    expiryDate: '2024-02-28',
    targetAudience: 'Students',
    status: 'Active',
    isPinned: false,
    views: 987,
  },
  {
    id: 'NOT006',
    title: 'Fee Payment Reminder',
    content: 'This is a reminder for fee payment. Last date: February 25, 2024.',
    category: 'Urgent',
    postedBy: 'Accounts',
    postedDate: '2024-01-28',
    expiryDate: '2024-02-25',
    targetAudience: 'All',
    status: 'Expired',
    isPinned: false,
    views: 2134,
  },
];

export function NoticeManagement() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');

  const categories = ['All', 'General', 'Academic', 'Event', 'Holiday', 'Urgent'];
  const statuses = ['All', 'Active', 'Expired', 'Draft'];

  const [showExportDropdown, setShowExportDropdown] = useState(false);


  const handleDownload = (format: 'pdf' | 'csv' | 'excel') => {
    toast.success(`Downloading report as ${format.toUpperCase()}...`, {
      description: `Your  report will be downloaded shortly.`,
    });
  };

  const getStatusBadge = (status: string) => {
    const statusColors: Record<string, string> = {
      Active: 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20',
      Expired: 'bg-red-500/10 text-red-500 border-red-500/20',
      Draft: 'bg-slate-500/10 text-slate-500 border-slate-500/20',
    };

    return (
      <Badge className={`${statusColors[status]} border`}>
        {status}
      </Badge>
    );
  };

  const getCategoryBadge = (category: string) => {
    const categoryColors: Record<string, string> = {
      General: 'bg-blue-500/10 text-blue-500 border-blue-500/20',
      Academic: 'bg-purple-500/10 text-purple-500 border-purple-500/20',
      Event: 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20',
      Holiday: 'bg-amber-500/10 text-amber-500 border-amber-500/20',
      Urgent: 'bg-red-500/10 text-red-500 border-red-500/20',
    };

    return (
      <Badge className={`${categoryColors[category]} border`}>
        {category}
      </Badge>
    );
  };

  const getAudienceBadge = (audience: string) => {
    const audienceColors: Record<string, string> = {
      All: 'bg-slate-500/10 text-slate-500 border-slate-500/20',
      Students: 'bg-blue-500/10 text-blue-500 border-blue-500/20',
      Teachers: 'bg-purple-500/10 text-purple-500 border-purple-500/20',
      Parents: 'bg-amber-500/10 text-amber-500 border-amber-500/20',
    };

    return (
      <Badge className={`${audienceColors[audience]} border`}>
        {audience}
      </Badge>
    );
  };

  const navigate = useNavigate();

  return (
    <PortalLayout
      role="admin"
      userName="Stevie Zone"
      userRole="Admin"
      pageTitle="Notice Management"
      breadcrumbs={["Home", "Admin", "Notices"]}
    >
      <div className="min-h-screen p-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-black mb-2">Notice Management</h1>
              <p className="text-slate-600">Create and manage school notices and announcements</p>
            </div>
            <Button
              onClick={() => navigate('/admin/create-notice')}
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white"
            >
              <Plus className="w-4 h-4 mr-2" />
              Create Notice
            </Button>
          </div>
        </motion.div>

        {/* Filters and Search */}
        <Card className="bg-white border-slate-200 p-6 mb-6 shadow-md">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-600" />
              <input
                type="text"
                placeholder="Search notices..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border-2 border-slate-300 rounded-lg pl-10 pr-4 py-2.5 text-slate-900 placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
              />
            </div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="bg-white border border-slate-300 rounded-lg px-4 py-2.5 text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category === 'All' ? 'All Categories' : category}
                </option>
              ))}
            </select>
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="bg-white border border-slate-300 rounded-lg px-4 py-2.5 text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
            >
              {statuses.map((status) => (
                <option key={status} value={status}>
                  {status === 'All' ? 'All Status' : status}
                </option>
              ))}
            </select>
            <div className="relative">
              <Button
                onClick={() => setShowExportDropdown(!showExportDropdown)}
                className="bg-gradient-to-r h-[45px]  from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 hover:shadow-lg hover:scale-105 text-white transition-all duration-200"
              >
                <FileDown className="w-4 h-4 " />
                Export Result
                <ChevronDown className="w-4 h-4 ml-2" />
              </Button>
              {showExportDropdown && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute right-0 top-full mt-2 bg-white border border-slate-200 shadow-lg rounded-lg z-50 min-w-[140px]"
                >
                  <div className="py-1">
                    <button
                      onClick={() => {
                        handleDownload('pdf');
                        setShowExportDropdown(false);
                      }}
                      className="w-full flex items-center px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-100 transition-colors"
                    >
                      <FileDown className="w-4 h-4 mr-2 text-red-600" />
                      PDF
                    </button>
                    <button
                      onClick={() => {
                        handleDownload('csv');
                        setShowExportDropdown(false);
                      }}
                      className="w-full flex items-center px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-100 transition-colors"
                    >
                      <FileSpreadsheet className="w-4 h-4 mr-2 text-green-600" />
                      CSV
                    </button>
                    <button
                      onClick={() => {
                        handleDownload('excel');
                        setShowExportDropdown(false);
                      }}
                      className="w-full flex items-center px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-100 transition-colors"
                    >
                      <Download className="w-4 h-4 mr-2 text-blue-600" />
                      Excel
                    </button>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </Card>

        {/* Notices List */}
        <div className="space-y-4">
          {mockNotices.map((notice, index) => (
            <motion.div
              key={notice.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <Card className="bg-white border-slate-200 hover:border-slate-400 transition-all shadow-md">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        {notice.isPinned && (
                          <Pin className="w-4 h-4 text-amber-500" />
                        )}
                        <h3 className="text-xl font-bold text-black">{notice.title}</h3>
                        {getCategoryBadge(notice.category)}
                        {getAudienceBadge(notice.targetAudience)}
                      </div>
                      <p className="text-slate-500 mb-4">{notice.content}</p>

                      <div className="flex flex-wrap gap-4 text-sm text-slate-400">
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4" />
                          Posted by: {notice.postedBy}
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          Posted: {notice.postedDate}
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          Expires: {notice.expiryDate}
                        </div>
                        <div className="flex items-center gap-2">
                          <Eye className="w-4 h-4" />
                          {notice.views} views
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col items-end gap-3">
                      {getStatusBadge(notice.status)}
                      <div className="flex gap-2">
                        {!notice.isPinned && (
                          <Button size="sm" variant="ghost" className="text-amber-600 hover:text-amber-700 hover:bg-amber-50">
                            <Pin className="w-4 h-4" />
                          </Button>
                        )}
                        <Button size="sm" variant="ghost" className="text-blue-600 hover:text-blue-700 hover:bg-blue-50">
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="ghost" className="text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="ghost" className="text-red-600 hover:text-red-700 hover:bg-red-50">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-6 flex items-center justify-between">
          <p className="text-slate-600">Showing 1-6 of {mockNotices.length} notices</p>
          <div className="flex gap-2">
            <Button variant="outline" className="border-slate-300 bg-white text-slate-700 hover:bg-blue-50 hover:text-blue-700 hover:border-blue-500 transition-all duration-200" disabled>
              Previous
            </Button>
            <Button variant="outline" className="border-slate-300 bg-white text-slate-700 hover:bg-blue-50 hover:text-blue-700 hover:border-blue-500 transition-all duration-200">
              Next
            </Button>
          </div>
        </div>
      </div>
    </PortalLayout>
  );
}