import { useState } from 'react';
import { motion } from 'motion/react';
import {
  MessageSquare,
  Plus,
  Search,
  Send,
  Eye,
  Trash2,
  Users,
  User,
  Clock,
  CheckCircle2,
  Circle,
  Filter,
  Download,
  Inbox,
  SendHorizonal,
  Star,
  Archive,
} from 'lucide-react';
import { PortalLayout } from './PortalLayout';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

interface Message {
  id: string;
  from: string;
  to: string;
  subject: string;
  content: string;
  date: string;
  time: string;
  status: 'Read' | 'Unread';
  priority: 'Normal' | 'High' | 'Urgent';
  category: 'Inbox' | 'Sent' | 'Archived';
  isStarred: boolean;
}

const statsCards = [
  { title: 'Total Messages', value: '1,245', icon: MessageSquare, color: 'bg-blue-500', change: '+45' },
  { title: 'Unread Messages', value: '23', icon: Circle, color: 'bg-amber-500', change: '+5' },
  { title: 'Sent Messages', value: '542', icon: SendHorizonal, color: 'bg-emerald-500', change: '+12' },
  { title: 'Starred Messages', value: '67', icon: Star, color: 'bg-purple-500', change: '+3' },
];

const mockMessages: Message[] = [
  {
    id: 'MSG001',
    from: 'Dr. Sarah Johnson',
    to: 'Admin',
    subject: 'Request for Leave Approval',
    content: 'I would like to request leave for 3 days starting from March 1, 2024, due to personal reasons.',
    date: '2024-02-23',
    time: '10:30 AM',
    status: 'Unread',
    priority: 'High',
    category: 'Inbox',
    isStarred: true,
  },
  {
    id: 'MSG002',
    from: 'Prof. Michael Chen',
    to: 'Admin',
    subject: 'Class Schedule Conflict',
    content: 'There is a scheduling conflict for Physics class on Thursday. Please review and adjust.',
    date: '2024-02-23',
    time: '09:15 AM',
    status: 'Unread',
    priority: 'Urgent',
    category: 'Inbox',
    isStarred: false,
  },
  {
    id: 'MSG003',
    from: 'Admin',
    to: 'All Teachers',
    subject: 'Staff Meeting Reminder',
    content: 'This is a reminder for tomorrow\'s staff meeting at 2:00 PM in the conference room.',
    date: '2024-02-22',
    time: '04:45 PM',
    status: 'Read',
    priority: 'Normal',
    category: 'Sent',
    isStarred: false,
  },
  {
    id: 'MSG004',
    from: 'Ms. Emily Brown',
    to: 'Admin',
    subject: 'Student Performance Report',
    content: 'Please find attached the quarterly performance report for Class 9-A students.',
    date: '2024-02-22',
    time: '02:30 PM',
    status: 'Read',
    priority: 'Normal',
    category: 'Inbox',
    isStarred: true,
  },
  {
    id: 'MSG005',
    from: 'Mr. David Wilson',
    to: 'Admin',
    subject: 'Lab Equipment Request',
    content: 'We need to purchase new equipment for the computer lab. Budget estimate attached.',
    date: '2024-02-22',
    time: '11:20 AM',
    status: 'Read',
    priority: 'High',
    category: 'Inbox',
    isStarred: false,
  },
  {
    id: 'MSG006',
    from: 'Admin',
    to: 'All Students',
    subject: 'Exam Schedule Released',
    content: 'The mid-term examination schedule has been released. Please check the portal for details.',
    date: '2024-02-21',
    time: '03:00 PM',
    status: 'Read',
    priority: 'Normal',
    category: 'Sent',
    isStarred: false,
  },
];

export function MessageManagement() {
  const [activeTab, setActiveTab] = useState<'inbox' | 'sent' | 'starred'>('inbox');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPriority, setSelectedPriority] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');

  const priorities = ['All', 'Normal', 'High', 'Urgent'];

  const getStatusBadge = (status: string) => {
    const statusColors: Record<string, string> = {
      Read: 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20',
      Unread: 'bg-amber-500/10 text-amber-500 border-amber-500/20',
    };

    return (
      <Badge className={`${statusColors[status]} border flex items-center gap-1`}>
        {status === 'Unread' ? <Circle className="w-3 h-3" /> : <CheckCircle2 className="w-3 h-3" />}
        {status}
      </Badge>
    );
  };

  const getPriorityBadge = (priority: string) => {
    const priorityColors: Record<string, string> = {
      Normal: 'bg-blue-500/10 text-blue-500 border-blue-500/20',
      High: 'bg-amber-500/10 text-amber-500 border-amber-500/20',
      Urgent: 'bg-red-500/10 text-red-500 border-red-500/20',
    };

    return (
      <Badge className={`${priorityColors[priority]} border`}>
        {priority}
      </Badge>
    );
  };

  const filteredMessages = mockMessages.filter((message) => {
    if (activeTab === 'inbox') return message.category === 'Inbox';
    if (activeTab === 'sent') return message.category === 'Sent';
    if (activeTab === 'starred') return message.isStarred;
    return true;
  });

  return (
    <PortalLayout
      role="admin"
      userName="Stevie Zone"
      userRole="Admin"
      pageTitle="Message Management"
      breadcrumbs={["Home", "Admin", "Messages"]}
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
              <h1 className="text-3xl font-bold text-black mb-2">Message Management</h1>
              <p className="text-slate-600">Send and manage messages with teachers, students, and parents</p>
            </div>
            <Button className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white">
              <Plus className="w-4 h-4 mr-2" />
              Compose Message
            </Button>
          </div>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {statsCards.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="bg-white border-amber-200 p-6 hover:border-amber-500 transition-all shadow-md h-[140px]">
                <div className="flex items-center justify-between h-full">
                  <div>
                    <p className="text-amber-700 text-xs mb-1 font-medium">{stat.title}</p>
                    <h3 className="text-xl font-bold text-slate-900">{stat.value}</h3>
                    <p className="text-emerald-600 text-xs mt-1">
                      {stat.change} this week
                    </p>
                  </div>
                  <div className={`${stat.color} p-3 rounded-lg`}>
                    <stat.icon className="w-5 h-5 text-white" />
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Tabs */}
        <div className="mb-6">
          <div className="flex gap-4 border-b border-amber-200">
            <button
              onClick={() => setActiveTab('inbox')}
              className={`pb-4 px-4 font-medium transition-all ${
                activeTab === 'inbox'
                  ? 'text-amber-600 border-b-2 border-amber-500'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Inbox className="w-4 h-4 inline mr-2" />
              Inbox
              <Badge className="ml-2 bg-amber-500/10 text-amber-500 border border-amber-500/20">
                23
              </Badge>
            </button>
            <button
              onClick={() => setActiveTab('sent')}
              className={`pb-4 px-4 font-medium transition-all ${
                activeTab === 'sent'
                  ? 'text-amber-600 border-b-2 border-amber-500'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <SendHorizonal className="w-4 h-4 inline mr-2" />
              Sent
            </button>
            <button
              onClick={() => setActiveTab('starred')}
              className={`pb-4 px-4 font-medium transition-all ${
                activeTab === 'starred'
                  ? 'text-amber-600 border-b-2 border-amber-500'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Star className="w-4 h-4 inline mr-2" />
              Starred
            </button>
          </div>
        </div>

        {/* Filters and Search */}
        <Card className="bg-white border-amber-200 p-6 mb-6 shadow-md">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-amber-600" />
              <input
                type="text"
                placeholder="Search messages..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-amber-50 border-2 border-amber-300 rounded-lg pl-10 pr-4 py-2.5 text-slate-900 placeholder-slate-500 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
              />
            </div>
            <select
              value={selectedPriority}
              onChange={(e) => setSelectedPriority(e.target.value)}
              className="bg-amber-50 border border-amber-200 rounded-lg px-4 py-2.5 text-slate-900 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
            >
              {priorities.map((priority) => (
                <option key={priority} value={priority.toLowerCase()}>
                  {priority === 'All' ? 'All Priorities' : priority}
                </option>
              ))}
            </select>
            {activeTab === 'inbox' && (
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="bg-amber-50 border border-amber-200 rounded-lg px-4 py-2.5 text-slate-900 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
              >
                <option value="all">All Status</option>
                <option value="unread">Unread</option>
                <option value="read">Read</option>
              </select>
            )}
            <Button variant="outline" className="border-amber-300 bg-amber-50 text-slate-700 hover:bg-amber-100 hover:border-amber-400">
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
          </div>
        </Card>

        {/* Messages List */}
        <div className="space-y-4">
          {filteredMessages.map((message, index) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <Card className={`bg-white border-amber-200 hover:border-amber-500 transition-all shadow-md ${
                message.status === 'Unread' ? 'border-amber-300' : ''
              }`}>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        {message.isStarred && (
                          <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                        )}
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4 text-slate-600" />
                          <span className="text-slate-900 font-medium">
                            {activeTab === 'sent' ? `To: ${message.to}` : `From: ${message.from}`}
                          </span>
                        </div>
                        {getPriorityBadge(message.priority)}
                        {getStatusBadge(message.status)}
                      </div>
                      
                      <h3 className={`text-lg mb-2 ${
                        message.status === 'Unread' ? 'text-black font-semibold' : 'text-slate-700'
                      }`}>
                        {message.subject}
                      </h3>
                      
                      <p className="text-slate-500 mb-3 line-clamp-2">{message.content}</p>
                      
                      <div className="flex items-center gap-4 text-sm text-slate-400">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          {message.date} at {message.time}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button size="sm" variant="ghost" className="text-amber-600 hover:text-amber-700 hover:bg-amber-50">
                        <Star className={`w-4 h-4 ${message.isStarred ? 'fill-amber-600' : ''}`} />
                      </Button>
                      <Button size="sm" variant="ghost" className="text-blue-600 hover:text-blue-700 hover:bg-blue-50">
                        <Eye className="w-4 h-4" />
                      </Button>
                      {activeTab === 'inbox' && message.status === 'Unread' && (
                        <Button size="sm" variant="ghost" className="text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50">
                          <CheckCircle2 className="w-4 h-4" />
                        </Button>
                      )}
                      <Button size="sm" variant="ghost" className="text-red-600 hover:text-red-700 hover:bg-red-50">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-6 flex items-center justify-between">
          <p className="text-slate-600">Showing 1-{filteredMessages.length} of {filteredMessages.length} messages</p>
          <div className="flex gap-2">
            <Button variant="outline" className="border-amber-300 bg-amber-50 text-slate-700 hover:bg-amber-100" disabled>
              Previous
            </Button>
            <Button variant="outline" className="border-amber-300 bg-amber-50 text-slate-700 hover:bg-amber-100 hover:border-amber-400">
              Next
            </Button>
          </div>
        </div>
      </div>
    </PortalLayout>
  );
}