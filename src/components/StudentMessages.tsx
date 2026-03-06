import { useState } from 'react';
import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { PortalLayout } from './PortalLayout';
import { MessageSquare, Send, Search, User, Clock, MoreVertical } from 'lucide-react';

interface Message {
  id: string;
  sender: string;
  senderRole: 'Teacher' | 'Admin' | 'Student';
  subject: string;
  message: string;
  timestamp: string;
  isRead: boolean;
}

const mockMessages: Message[] = [
  {
    id: 'MSG001',
    sender: 'Dr. Sarah Johnson',
    senderRole: 'Teacher',
    subject: 'Assignment Submission Reminder',
    message: 'This is a reminder to submit your Mathematics assignment by tomorrow.',
    timestamp: '2026-02-24 10:30 AM',
    isRead: false,
  },
  {
    id: 'MSG002',
    sender: 'Admin Office',
    senderRole: 'Admin',
    subject: 'Fee Payment Notice',
    message: 'Your term fee payment is due by March 1st, 2026. Please clear the dues at the earliest.',
    timestamp: '2026-02-23 2:15 PM',
    isRead: false,
  },
  {
    id: 'MSG003',
    sender: 'Prof. Michael Chen',
    senderRole: 'Teacher',
    subject: 'Lab Report Feedback',
    message: 'Great work on your Physics lab report! I have some suggestions for improvement.',
    timestamp: '2026-02-22 11:00 AM',
    isRead: true,
  },
  {
    id: 'MSG004',
    sender: 'Ms. Emily Brown',
    senderRole: 'Teacher',
    subject: 'Parent-Teacher Meeting',
    message: 'Please inform your parents about the upcoming parent-teacher meeting on Feb 28.',
    timestamp: '2026-02-21 4:30 PM',
    isRead: true,
  },
  {
    id: 'MSG005',
    sender: 'Library Department',
    senderRole: 'Admin',
    subject: 'Book Return Reminder',
    message: 'Your borrowed book "Advanced Mathematics" is due for return on March 10, 2026.',
    timestamp: '2026-02-20 9:00 AM',
    isRead: true,
  },
];

const getRoleBadge = (role: string) => {
  const colors = {
    Teacher: 'bg-blue-100 text-blue-700 border-blue-300',
    Admin: 'bg-purple-100 text-purple-700 border-purple-300',
    Student: 'bg-emerald-100 text-emerald-700 border-emerald-300',
  };
  return <Badge className={`${colors[role as keyof typeof colors]} border text-xs`}>{role}</Badge>;
};

export function StudentMessages() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);

  const unreadCount = mockMessages.filter(m => !m.isRead).length;

  return (
    <PortalLayout
      role="student"
      userName="Rohan Kumar"
      userRole="Grade 10-A"
      pageTitle="Messages"
      breadcrumbs={["Home", "Student", "Messages"]}
    >
      <div className="space-y-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white border-0 shadow-lg p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                <MessageSquare className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-blue-100 text-sm">Total Messages</p>
                <h3 className="text-3xl font-bold">{mockMessages.length}</h3>
              </div>
            </div>
          </Card>

          <Card className="bg-gradient-to-br from-amber-500 to-amber-600 text-white border-0 shadow-lg p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                <MessageSquare className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-amber-100 text-sm">Unread</p>
                <h3 className="text-3xl font-bold">{unreadCount}</h3>
              </div>
            </div>
          </Card>

          <Card className="bg-gradient-to-br from-emerald-500 to-emerald-600 text-white border-0 shadow-lg p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                <Send className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-emerald-100 text-sm">Sent</p>
                <h3 className="text-3xl font-bold">12</h3>
              </div>
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Messages List */}
          <div className="lg:col-span-1">
            <Card className="bg-white border-amber-200 shadow-lg">
              <div className="p-4 border-b border-amber-200">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-amber-600" />
                  <Input
                    type="text"
                    placeholder="Search messages..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 bg-amber-50 border-amber-200 text-sm"
                  />
                </div>
              </div>
              <div className="divide-y divide-amber-100 max-h-[600px] overflow-y-auto">
                {mockMessages.map((message, index) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => setSelectedMessage(message)}
                    className={`p-4 cursor-pointer hover:bg-amber-50 transition-colors ${
                      !message.isRead ? 'bg-amber-50/50' : ''
                    } ${selectedMessage?.id === message.id ? 'bg-amber-100' : ''}`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-amber-200 rounded-full flex items-center justify-center flex-shrink-0">
                        <User className="w-5 h-5 text-amber-700" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <p className={`text-sm font-semibold text-slate-900 truncate ${!message.isRead ? 'font-bold' : ''}`}>
                            {message.sender}
                          </p>
                          {!message.isRead && (
                            <div className="w-2 h-2 bg-amber-500 rounded-full flex-shrink-0"></div>
                          )}
                        </div>
                        <p className="text-xs text-slate-600 truncate mb-1">{message.subject}</p>
                        <p className="text-xs text-slate-500">{message.timestamp}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Card>
          </div>

          {/* Message Detail */}
          <div className="lg:col-span-2">
            {selectedMessage ? (
              <Card className="bg-white border-amber-200 shadow-lg">
                <div className="p-6 border-b border-amber-200">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-amber-200 rounded-full flex items-center justify-center">
                        <User className="w-6 h-6 text-amber-700" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-slate-900">{selectedMessage.sender}</h3>
                        <div className="flex items-center gap-2 mt-1">
                          {getRoleBadge(selectedMessage.senderRole)}
                          <span className="text-xs text-slate-500 flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {selectedMessage.timestamp}
                          </span>
                        </div>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      <MoreVertical className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-slate-900 mb-4">{selectedMessage.subject}</h4>
                  <p className="text-slate-700 leading-relaxed">{selectedMessage.message}</p>
                </div>
                <div className="p-6 border-t border-amber-200 bg-amber-50">
                  <div className="flex gap-3">
                    <Input
                      type="text"
                      placeholder="Type your reply..."
                      className="flex-1 bg-white border-amber-200"
                    />
                    <Button className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white">
                      <Send className="w-4 h-4 mr-2" />
                      Reply
                    </Button>
                  </div>
                </div>
              </Card>
            ) : (
              <Card className="bg-white border-amber-200 shadow-lg h-full flex items-center justify-center p-12">
                <div className="text-center">
                  <MessageSquare className="w-16 h-16 text-amber-300 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-slate-900 mb-2">No Message Selected</h3>
                  <p className="text-slate-600">Select a message from the list to view its content</p>
                </div>
              </Card>
            )}
          </div>
        </div>

        {/* Compose New Message */}
        <Card className="bg-white border-amber-200 shadow-lg p-6">
          <h3 className="text-lg font-bold text-slate-900 mb-4">Compose New Message</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-amber-700 mb-2">To (Teacher/Admin)</label>
              <Input placeholder="Select recipient..." className="bg-amber-50 border-amber-200" />
            </div>
            <div>
              <label className="block text-sm font-medium text-amber-700 mb-2">Subject</label>
              <Input placeholder="Enter subject..." className="bg-amber-50 border-amber-200" />
            </div>
            <div>
              <label className="block text-sm font-medium text-amber-700 mb-2">Message</label>
              <textarea
                rows={4}
                placeholder="Type your message..."
                className="w-full px-4 py-2.5 bg-amber-50 border border-amber-200 rounded-lg text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500 resize-none"
              />
            </div>
            <Button className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white">
              <Send className="w-4 h-4 mr-2" />
              Send Message
            </Button>
          </div>
        </Card>
      </div>
    </PortalLayout>
  );
}
