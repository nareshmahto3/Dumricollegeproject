import { useState } from 'react';
import { motion } from 'motion/react';
import {
  MessageSquare,
  Search,
  Send,
  Paperclip,
  MoreVertical,
  Phone,
  Video,
  Circle,
  Check,
  CheckCheck,
  Image as ImageIcon,
  File,
  Smile,
} from 'lucide-react';
import { Card } from './ui/card';
import { PortalLayout } from './PortalLayout';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Input } from './ui/input';

interface Message {
  id: number;
  text: string;
  timestamp: string;
  sender: 'me' | 'other';
  read: boolean;
  type: 'text' | 'image' | 'file';
}

interface Contact {
  id: number;
  name: string;
  role: string;
  avatar: string;
  lastMessage: string;
  timestamp: string;
  unreadCount: number;
  online: boolean;
  class?: string;
}

const contactsData: Contact[] = [
  {
    id: 1,
    name: 'Principal Dr. Rajesh Kumar',
    role: 'Principal',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100',
    lastMessage: 'Please submit the progress report by Friday.',
    timestamp: '10:30 AM',
    unreadCount: 2,
    online: true,
  },
  {
    id: 2,
    name: 'Rohan Kumar',
    role: 'Student',
    class: 'Grade 10-A',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100',
    lastMessage: 'Thank you for the clarification, Ma\'am!',
    timestamp: 'Yesterday',
    unreadCount: 0,
    online: false,
  },
  {
    id: 3,
    name: 'Mrs. Sharma (Parent)',
    role: 'Parent',
    class: 'Rohan Kumar - 10-A',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100',
    lastMessage: 'Can we schedule a meeting to discuss?',
    timestamp: '2 days ago',
    unreadCount: 1,
    online: false,
  },
  {
    id: 4,
    name: 'Mr. Anil Gupta',
    role: 'Physics Teacher',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100',
    lastMessage: 'Sure, let\'s coordinate for the science fair.',
    timestamp: '3 days ago',
    unreadCount: 0,
    online: true,
  },
  {
    id: 5,
    name: 'Priya Verma',
    role: 'Student',
    class: 'Grade 11-B',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100',
    lastMessage: 'I have a doubt about the assignment.',
    timestamp: '4 days ago',
    unreadCount: 3,
    online: true,
  },
];

const messagesData: Message[] = [
  {
    id: 1,
    text: 'Good morning, Ma\'am! I hope you\'re doing well.',
    timestamp: '09:15 AM',
    sender: 'other',
    read: true,
    type: 'text',
  },
  {
    id: 2,
    text: 'Good morning! Yes, I\'m doing great. How can I help you?',
    timestamp: '09:17 AM',
    sender: 'me',
    read: true,
    type: 'text',
  },
  {
    id: 3,
    text: 'I wanted to discuss the upcoming mid-term examination schedule.',
    timestamp: '09:18 AM',
    sender: 'other',
    read: true,
    type: 'text',
  },
  {
    id: 4,
    text: 'Sure! The schedule has been finalized and will be shared with all students by tomorrow.',
    timestamp: '09:20 AM',
    sender: 'me',
    read: true,
    type: 'text',
  },
  {
    id: 5,
    text: 'Please submit the progress report by Friday.',
    timestamp: '10:30 AM',
    sender: 'other',
    read: false,
    type: 'text',
  },
];

export function TeacherMessages() {
  const [contacts, setContacts] = useState<Contact[]>(contactsData);
  const [selectedContact, setSelectedContact] = useState<Contact | null>(contacts[0]);
  const [messages, setMessages] = useState<Message[]>(messagesData);
  const [newMessage, setNewMessage] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredContacts = searchQuery
    ? contacts.filter(contact =>
        contact.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : contacts;

  const totalUnread = contacts.reduce((sum, contact) => sum + contact.unreadCount, 0);

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const message: Message = {
        id: messages.length + 1,
        text: newMessage,
        timestamp: new Date().toLocaleTimeString('en-IN', {
          hour: '2-digit',
          minute: '2-digit',
        }),
        sender: 'me',
        read: true,
        type: 'text',
      };
      setMessages([...messages, message]);
      setNewMessage('');
    }
  };

  const handleContactSelect = (contact: Contact) => {
    setSelectedContact(contact);
    if (contact.unreadCount > 0) {
      setContacts(contacts.map(c =>
        c.id === contact.id ? { ...c, unreadCount: 0 } : c
      ));
    }
  };

  return (
    <PortalLayout
      role="teacher"
      userName="Dr. Priya Sharma"
      userRole="Mathematics Teacher"
      pageTitle="Messages"
      breadcrumbs={["Home", "Teacher", "Messages"]}
    >
      <div className="space-y-6">
        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <Card className="bg-gradient-to-br from-amber-500 to-amber-600 text-white border-0 shadow-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <MessageSquare className="w-8 h-8 text-white/80" />
                <Badge className="bg-white/20 text-white border-white/30 text-xs">Total</Badge>
              </div>
              <p className="text-xs text-amber-100 mb-1">All Chats</p>
              <h3 className="text-2xl font-bold text-white">{contacts.length}</h3>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <Card className="bg-gradient-to-br from-red-500 to-red-600 text-white border-0 shadow-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <Circle className="w-8 h-8 text-white/80 fill-white" />
                <Badge className="bg-white/20 text-white border-white/30 text-xs">New</Badge>
              </div>
              <p className="text-xs text-red-100 mb-1">Unread</p>
              <h3 className="text-2xl font-bold text-white">{totalUnread}</h3>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
          >
            <Card className="bg-gradient-to-br from-emerald-500 to-emerald-600 text-white border-0 shadow-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <Circle className="w-8 h-8 text-white/80 fill-emerald-400" />
                <Badge className="bg-white/20 text-white border-white/30 text-xs">Active</Badge>
              </div>
              <p className="text-xs text-emerald-100 mb-1">Online</p>
              <h3 className="text-2xl font-bold text-white">
                {contacts.filter(c => c.online).length}
              </h3>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
          >
            <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white border-0 shadow-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <CheckCheck className="w-8 h-8 text-white/80" />
                <Badge className="bg-white/20 text-white border-white/30 text-xs">Done</Badge>
              </div>
              <p className="text-xs text-blue-100 mb-1">Responded</p>
              <h3 className="text-2xl font-bold text-white">
                {contacts.filter(c => c.unreadCount === 0).length}
              </h3>
            </Card>
          </motion.div>
        </div>

        {/* Messaging Interface */}
        <Card className="bg-white border-amber-200 shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-3 h-[600px]">
            {/* Contacts Sidebar */}
            <div className="lg:col-span-1 border-r border-amber-200 flex flex-col">
              {/* Search */}
              <div className="p-4 border-b border-amber-200 bg-amber-50">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <Input
                    type="text"
                    placeholder="Search conversations..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 border-2 border-amber-300 focus:border-amber-500"
                  />
                </div>
              </div>

              {/* Contacts List */}
              <div className="flex-1 overflow-y-auto">
                {filteredContacts.map((contact, index) => (
                  <motion.div
                    key={contact.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => handleContactSelect(contact)}
                    className={`p-4 border-b border-amber-100 cursor-pointer transition-all hover:bg-amber-50 ${
                      selectedContact?.id === contact.id ? 'bg-amber-100 border-l-4 border-l-amber-500' : ''
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="relative flex-shrink-0">
                        <img
                          src={contact.avatar}
                          alt={contact.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        {contact.online && (
                          <div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-white rounded-full"></div>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between mb-1">
                          <h4 className="text-sm font-semibold text-slate-900 truncate">{contact.name}</h4>
                          <span className="text-xs text-slate-500 flex-shrink-0 ml-2">{contact.timestamp}</span>
                        </div>
                        <p className="text-xs text-slate-600 mb-1">{contact.role}{contact.class ? ` - ${contact.class}` : ''}</p>
                        <p className="text-xs text-slate-500 truncate">{contact.lastMessage}</p>
                      </div>
                      {contact.unreadCount > 0 && (
                        <Badge className="bg-red-500 text-white text-xs h-5 w-5 flex items-center justify-center rounded-full p-0">
                          {contact.unreadCount}
                        </Badge>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Chat Area */}
            <div className="lg:col-span-2 flex flex-col">
              {selectedContact ? (
                <>
                  {/* Chat Header */}
                  <div className="p-4 border-b border-amber-200 bg-gradient-to-r from-amber-50 to-yellow-50">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="relative">
                          <img
                            src={selectedContact.avatar}
                            alt={selectedContact.name}
                            className="w-10 h-10 rounded-full object-cover"
                          />
                          {selectedContact.online && (
                            <div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-white rounded-full"></div>
                          )}
                        </div>
                        <div>
                          <h3 className="font-semibold text-slate-900">{selectedContact.name}</h3>
                          <p className="text-xs text-slate-600">
                            {selectedContact.online ? 'Online' : `Last seen ${selectedContact.timestamp}`}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="sm" className="text-amber-600 hover:bg-amber-100">
                          <Phone className="w-5 h-5" />
                        </Button>
                        <Button variant="ghost" size="sm" className="text-amber-600 hover:bg-amber-100">
                          <Video className="w-5 h-5" />
                        </Button>
                        <Button variant="ghost" size="sm" className="text-amber-600 hover:bg-amber-100">
                          <MoreVertical className="w-5 h-5" />
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Messages */}
                  <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-amber-50/30">
                    {messages.map((message, index) => (
                      <motion.div
                        key={message.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className={`flex ${message.sender === 'me' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div
                          className={`max-w-[70%] ${
                            message.sender === 'me'
                              ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-2xl rounded-tr-sm'
                              : 'bg-white border border-amber-200 text-slate-900 rounded-2xl rounded-tl-sm'
                          } px-4 py-2 shadow-md`}
                        >
                          <p className="text-sm">{message.text}</p>
                          <div className="flex items-center justify-end gap-1 mt-1">
                            <span className={`text-xs ${message.sender === 'me' ? 'text-amber-100' : 'text-slate-400'}`}>
                              {message.timestamp}
                            </span>
                            {message.sender === 'me' && (
                              message.read ? (
                                <CheckCheck className="w-3 h-3 text-blue-200" />
                              ) : (
                                <Check className="w-3 h-3 text-amber-200" />
                              )
                            )}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Message Input */}
                  <div className="p-4 border-t border-amber-200 bg-white">
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="sm" className="text-amber-600 hover:bg-amber-100">
                        <Smile className="w-5 h-5" />
                      </Button>
                      <Button variant="ghost" size="sm" className="text-amber-600 hover:bg-amber-100">
                        <Paperclip className="w-5 h-5" />
                      </Button>
                      <Input
                        type="text"
                        placeholder="Type a message..."
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                        className="flex-1 border-amber-300 focus:border-amber-500"
                      />
                      <Button
                        onClick={handleSendMessage}
                        className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white"
                      >
                        <Send className="w-5 h-5" />
                      </Button>
                    </div>
                  </div>
                </>
              ) : (
                <div className="flex-1 flex items-center justify-center bg-amber-50/30">
                  <div className="text-center">
                    <MessageSquare className="w-16 h-16 text-amber-300 mx-auto mb-4" />
                    <p className="text-slate-500">Select a conversation to start messaging</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </Card>
      </div>
    </PortalLayout>
  );
}