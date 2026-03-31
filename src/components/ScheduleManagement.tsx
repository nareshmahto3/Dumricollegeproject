import { useState } from 'react';
import { useNavigate } from 'react-router';
import {
  Calendar,
  Clock,
  Plus,
  Search,
  Filter,
  Edit,
  Trash2,
  Eye,
  BookOpen,
  Users,
  X,
  Save,
  Download,
  CalendarDays,
  User,
  ChevronUp,
  ChevronDown,
} from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Badge } from './ui/badge';
import { PortalLayout } from './PortalLayout';
import { motion, AnimatePresence } from 'motion/react';
import { toast } from 'sonner';

interface Schedule {
  id: string;
  teacherId: string;
  teacherName: string;
  subject: string;
  class: string;
  day: string;
  startTime: string;
  endTime: string;
  room: string;
}

export function ScheduleManagement() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterDay, setFilterDay] = useState('all');
  const [filterTeacher, setFilterTeacher] = useState('all');
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedSchedule, setSelectedSchedule] = useState<Schedule | null>(null);
  const [viewMode, setViewMode] = useState<'table' | 'timetable'>('timetable');

  const teachers = [
    { id: '1', name: 'Dr. Priya Sharma', subject: 'Mathematics' },
    { id: '2', name: 'Mr. Rahul Verma', subject: 'Physics' },
    { id: '3', name: 'Ms. Anjali Patel', subject: 'English' },
    { id: '4', name: 'Mr. Vikram Singh', subject: 'Chemistry' },
    { id: '5', name: 'Ms. Kavita Reddy', subject: 'Biology' },
    { id: '6', name: 'Mr. Arjun Kumar', subject: 'History' },
  ];

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const timeSlots = [
    '08:00 AM - 08:45 AM',
    '08:45 AM - 09:30 AM',
    '09:30 AM - 10:15 AM',
    '10:15 AM - 11:00 AM',
    '11:15 AM - 12:00 PM',
    '12:00 PM - 12:45 PM',
    '01:30 PM - 02:15 PM',
    '02:15 PM - 03:00 PM',
    '03:00 PM - 03:45 PM',
  ];

  const classes = [
    'Class 1A', 'Class 1B',
    'Class 2A', 'Class 2B',
    'Class 3A', 'Class 3B',
    'Class 4A', 'Class 4B',
    'Class 5A', 'Class 5B',
    'Class 6A', 'Class 6B',
    'Class 7A', 'Class 7B',
    'Class 8A', 'Class 8B',
    'Class 9A', 'Class 9B',
    'Class 10A', 'Class 10B',
    'Class 11A', 'Class 11B',
    'Class 12A', 'Class 12B',
  ];

  const [schedules, setSchedules] = useState<Schedule[]>([
    {
      id: '1',
      teacherId: '1',
      teacherName: 'Dr. Priya Sharma',
      subject: 'Mathematics',
      class: 'Class 10A',
      day: 'Monday',
      startTime: '08:00',
      endTime: '08:45',
      room: 'Room 101',
    },
    {
      id: '2',
      teacherId: '1',
      teacherName: 'Dr. Priya Sharma',
      subject: 'Mathematics',
      class: 'Class 10B',
      day: 'Monday',
      startTime: '09:30',
      endTime: '10:15',
      room: 'Room 101',
    },
    {
      id: '3',
      teacherId: '2',
      teacherName: 'Mr. Rahul Verma',
      subject: 'Physics',
      class: 'Class 11A',
      day: 'Monday',
      startTime: '08:00',
      endTime: '08:45',
      room: 'Lab 201',
    },
    {
      id: '4',
      teacherId: '3',
      teacherName: 'Ms. Anjali Patel',
      subject: 'English',
      class: 'Class 9A',
      day: 'Monday',
      startTime: '10:15',
      endTime: '11:00',
      room: 'Room 103',
    },
    {
      id: '5',
      teacherId: '1',
      teacherName: 'Dr. Priya Sharma',
      subject: 'Mathematics',
      class: 'Class 12A',
      day: 'Tuesday',
      startTime: '08:00',
      endTime: '08:45',
      room: 'Room 101',
    },
    {
      id: '6',
      teacherId: '4',
      teacherName: 'Mr. Vikram Singh',
      subject: 'Chemistry',
      class: 'Class 11B',
      day: 'Tuesday',
      startTime: '09:30',
      endTime: '10:15',
      room: 'Lab 202',
    },
    {
      id: '7',
      teacherId: '5',
      teacherName: 'Ms. Kavita Reddy',
      subject: 'Biology',
      class: 'Class 11A',
      day: 'Wednesday',
      startTime: '08:45',
      endTime: '09:30',
      room: 'Lab 203',
    },
    {
      id: '8',
      teacherId: '2',
      teacherName: 'Mr. Rahul Verma',
      subject: 'Physics',
      class: 'Class 12A',
      day: 'Wednesday',
      startTime: '11:15',
      endTime: '12:00',
      room: 'Lab 201',
    },
  ]);

  const [newSchedule, setNewSchedule] = useState({
    teacherId: '',
    subject: '',
    class: '',
    day: '',
    startTime: '',
    endTime: '',
    room: '',
  });

  const filteredSchedules = schedules.filter((schedule) => {
    const matchesSearch =
      schedule.teacherName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      schedule.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
      schedule.class.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDay = filterDay === 'all' || schedule.day === filterDay;
    const matchesTeacher = filterTeacher === 'all' || schedule.teacherId === filterTeacher;
    return matchesSearch && matchesDay && matchesTeacher;
  });

  const handleAddSchedule = () => {
    if (!newSchedule.teacherId || !newSchedule.class || !newSchedule.day || !newSchedule.startTime || !newSchedule.endTime) {
      toast.error('Please fill all required fields');
      return;
    }

    const teacher = teachers.find((t) => t.id === newSchedule.teacherId);
    if (!teacher) return;

    const schedule: Schedule = {
      id: Date.now().toString(),
      teacherId: newSchedule.teacherId,
      teacherName: teacher.name,
      subject: newSchedule.subject || teacher.subject,
      class: newSchedule.class,
      day: newSchedule.day,
      startTime: newSchedule.startTime,
      endTime: newSchedule.endTime,
      room: newSchedule.room,
    };

    console.log('Add schedule data:', schedule);
    setSchedules([...schedules, schedule]);
    setShowAddModal(false);
    setNewSchedule({
      teacherId: '',
      subject: '',
      class: '',
      day: '',
      startTime: '',
      endTime: '',
      room: '',
    });
    toast.success('Schedule added successfully!');
  };

  const handleEditSchedule = () => {
    if (!selectedSchedule) return;

    setSchedules(schedules.map((s) => (s.id === selectedSchedule.id ? selectedSchedule : s)));
    setShowEditModal(false);
    setSelectedSchedule(null);
    toast.success('Schedule updated successfully!');
  };

  const handleDeleteSchedule = (id: string) => {
    if (confirm('Are you sure you want to delete this schedule?')) {
      setSchedules(schedules.filter((s) => s.id !== id));
      toast.success('Schedule deleted successfully!');
    }
  };

  const getScheduleForSlot = (day: string, timeSlot: string) => {
    const [startTime] = timeSlot.split(' - ');
    return schedules.filter(
      (s) => s.day === day && `${s.startTime.split(':')[0]}:${s.startTime.split(':')[1]}` === startTime.replace(/\s?(AM|PM)/, '')
    );
  };

  const getDayColor = (index: number) => {
    const colors = [
      { bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-200' },
      { bg: 'bg-green-50', text: 'text-green-700', border: 'border-green-200' },
      { bg: 'bg-yellow-50', text: 'text-yellow-700', border: 'border-yellow-200' },
      { bg: 'bg-orange-50', text: 'text-orange-700', border: 'border-orange-200' },
      { bg: 'bg-purple-50', text: 'text-purple-700', border: 'border-purple-200' },
      { bg: 'bg-pink-50', text: 'text-pink-700', border: 'border-pink-200' },
    ];
    return colors[index % colors.length];
  };



  return (
    <PortalLayout
      role="admin"
      userName="Stevie Zone"
      userRole="Admin"
      pageTitle="Schedule Management"
      breadcrumbs={["Home", "Admin", "Schedule"]}
    >
      <div className="space-y-6">
        {/* Action Buttons */}
        <div className="flex gap-3 justify-end">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="outline"
              onClick={() => setViewMode(viewMode === 'table' ? 'timetable' : 'table')}
              className="border-slate-300 bg-white text-slate-700 hover:bg-blue-50 hover:text-blue-700 hover:border-blue-500 transition-all duration-200"
            >
              {viewMode === 'table' ? <CalendarDays className="w-4 h-4 mr-2" /> : <BookOpen className="w-4 h-4 mr-2" />}
              {viewMode === 'table' ? 'Timetable View' : 'List View'}
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              onClick={() => setShowAddModal(true)}
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg"
            >
              <Plus className="w-4 h-4 mr-2" />
              Add Schedule
            </Button>
          </motion.div>
        </div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card className="p-6 mb-8 shadow-lg border-2">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    type="text"
                    placeholder="Search teacher, subject, or class..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 h-12 border-2 border-slate-300 focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
                  />
                </div>
              </div>
              <div>
                <select
                  value={filterDay}
                  onChange={(e) => setFilterDay(e.target.value)}
                  className="w-full h-12 px-4 border-2 border-gray-200 rounded-lg bg-white focus:border-blue-400 focus:ring-4 focus:ring-blue-100 outline-none"
                >
                  <option value="all">All Days</option>
                  {days.map((day) => (
                    <option key={day} value={day}>
                      {day}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <select
                  value={filterTeacher}
                  onChange={(e) => setFilterTeacher(e.target.value)}
                  className="w-full h-12 px-4 border-2 border-gray-200 rounded-lg bg-white focus:border-blue-400 focus:ring-4 focus:ring-blue-100 outline-none"
                >
                  <option value="all">All Teachers</option>
                  {teachers.map((teacher) => (
                    <option key={teacher.id} value={teacher.id}>
                      {teacher.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Content */}
        <AnimatePresence mode="wait">
          {viewMode === 'timetable' ? (
            <motion.div
              key="timetable"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ delay: 0.4 }}
            >
              <Card className="bg-white border-slate-200 overflow-hidden shadow-lg">
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse min-w-max">
                    <thead>
                      <tr className="border-b-2 border-slate-200 bg-slate-100">
                        <th className="px-4 py-4 text-left text-sm font-bold text-slate-700 border-r border-slate-200 sticky left-0 bg-slate-100 z-10 uppercase tracking-wide">
                          Time
                        </th>
                        {days.map((day, index) => {
                          const colors = getDayColor(index);
                          return (
                            <th
                              key={day}
                              className="px-4 py-4 text-center text-sm font-bold text-slate-700 border-r border-slate-200 min-w-[200px] uppercase tracking-wide"
                            >
                              {day}
                            </th>
                          );
                        })}
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      {timeSlots.map((timeSlot, slotIndex) => (
                        <tr key={timeSlot} className="border-b border-slate-200 hover:bg-slate-50/50">
                          <td className="px-4 py-3 text-sm font-medium text-slate-700 border-r border-slate-200 sticky left-0 bg-white z-10">
                            <div className="flex items-center gap-2">
                              <Clock className="w-4 h-4 text-slate-600" />
                              {timeSlot}
                            </div>
                          </td>
                          {days.map((day, dayIndex) => {
                            const scheduleItems = getScheduleForSlot(day, timeSlot);
                            const colors = getDayColor(dayIndex);

                            return (
                              <td
                                key={day}
                                className="px-2 py-2 border-r border-slate-200 align-top"
                              >
                                <div className="space-y-2">
                                  {scheduleItems.length > 0 ? (
                                    scheduleItems.map((schedule) => (
                                      <motion.div
                                        key={schedule.id}
                                        initial={{ scale: 0.9, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        whileHover={{ scale: 1.02 }}
                                        className={`p-3 rounded-lg ${colors.bg} border-2 ${colors.border} cursor-pointer group`}
                                      >
                                        <div className="flex items-start justify-between gap-2">
                                          <div className="flex-1 min-w-0">
                                            <p className="font-semibold text-sm text-gray-900 truncate">
                                              {schedule.subject}
                                            </p>
                                            <p className="text-xs text-gray-600 mt-0.5 truncate">
                                              {schedule.class}
                                            </p>
                                            <p className="text-xs text-gray-500 mt-0.5 truncate">
                                              {schedule.teacherName}
                                            </p>
                                            <p className="text-xs text-gray-500 flex items-center gap-1 mt-1">
                                              <BookOpen className="w-3 h-3" />
                                              {schedule.room}
                                            </p>
                                          </div>
                                          <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <button
                                              onClick={() => {
                                                setSelectedSchedule(schedule);
                                                setShowEditModal(true);
                                              }}
                                              className="p-1 hover:bg-white/50 rounded"
                                            >
                                              <Edit className="w-3 h-3 text-gray-600" />
                                            </button>
                                            <button
                                              onClick={() => handleDeleteSchedule(schedule.id)}
                                              className="p-1 hover:bg-white/50 rounded"
                                            >
                                              <Trash2 className="w-3 h-3 text-red-600" />
                                            </button>
                                          </div>
                                        </div>
                                      </motion.div>
                                    ))
                                  ) : (
                                    <div className="p-3 text-center text-xs text-gray-400">-</div>
                                  )}
                                </div>
                              </td>
                            );
                          })}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>
            </motion.div>
          ) : (
            <motion.div
              key="table"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ delay: 0.4 }}
            >
              <Card className="overflow-hidden shadow-xl border-2">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gradient-to-r from-blue-600 to-blue-700">
                      <tr>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-white">Teacher</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-white">Subject</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-white">Class</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-white">Day</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-white">Time</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-white">Room</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-white">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {filteredSchedules.map((schedule, index) => (
                        <motion.tr
                          key={schedule.id}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.5 + index * 0.05 }}
                          className="hover:bg-gray-50 transition-colors"
                        >
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                                {schedule.teacherName.charAt(0)}
                              </div>
                              <div>
                                <p className="font-semibold text-gray-900">{schedule.teacherName}</p>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <Badge className="bg-purple-100 text-purple-700 border border-purple-200">
                              {schedule.subject}
                            </Badge>
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-600">{schedule.class}</td>
                          <td className="px-6 py-4">
                            <Badge className="bg-blue-100 text-blue-700 border border-blue-200">
                              {schedule.day}
                            </Badge>
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-600">
                            {schedule.startTime} - {schedule.endTime}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-600">{schedule.room}</td>
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-2">
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => {
                                  setSelectedSchedule(schedule);
                                  setShowEditModal(true);
                                }}
                                className="hover:bg-yellow-50 hover:text-yellow-600"
                              >
                                <Edit className="w-4 h-4" />
                              </Button>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => handleDeleteSchedule(schedule.id)}
                                className="hover:bg-red-50 hover:text-red-600"
                              >
                                <Trash2 className="w-4 h-4" />
                              </Button>
                            </div>
                          </td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {filteredSchedules.length === 0 && (
                  <div className="text-center py-12">
                    <Calendar className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-500 text-lg">No schedules found</p>
                  </div>
                )}
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Add Schedule Modal */}
      <AnimatePresence>
        {showAddModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowAddModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4 flex items-center justify-between rounded-t-2xl">
                <h3 className="text-xl font-bold text-white">Add New Schedule</h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowAddModal(false)}
                  className="text-white hover:bg-white/20"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>

              <div className="p-6 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="md:col-span-2">
                    <Label htmlFor="teacher" className="text-sm font-medium text-gray-700 mb-2 block">
                      Teacher <span className="text-red-500">*</span>
                    </Label>
                    <select
                      id="teacher"
                      value={newSchedule.teacherId}
                      onChange={(e) => {
                        const teacher = teachers.find((t) => t.id === e.target.value);
                        setNewSchedule({
                          ...newSchedule,
                          teacherId: e.target.value,
                          subject: teacher?.subject || '',
                        });
                      }}
                      className="w-full h-12 px-4 border-2 border-gray-200 rounded-lg bg-white outline-none"
                    >
                      <option value="">Select Teacher</option>
                      {teachers.map((teacher) => (
                        <option key={teacher.id} value={teacher.id}>
                          {teacher.name} - {teacher.subject}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="subject" className="text-sm font-medium text-gray-700 mb-2 block">
                      Subject
                    </Label>
                    <Input
                      id="subject"
                      value={newSchedule.subject}
                      onChange={(e) => setNewSchedule({ ...newSchedule, subject: e.target.value })}
                      placeholder="Subject name"
                      className="h-12 border-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="class" className="text-sm font-medium text-gray-700 mb-2 block">
                      Class <span className="text-red-500">*</span>
                    </Label>
                    <select
                      id="class"
                      value={newSchedule.class}
                      onChange={(e) => setNewSchedule({ ...newSchedule, class: e.target.value })}
                      className="w-full h-12 px-4 border-2 border-gray-200 rounded-lg bg-white outline-none"
                    >
                      <option value="">Select Class</option>
                      {classes.map((cls) => (
                        <option key={cls} value={cls}>
                          {cls}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="day" className="text-sm font-medium text-gray-700 mb-2 block">
                      Day <span className="text-red-500">*</span>
                    </Label>
                    <select
                      id="day"
                      value={newSchedule.day}
                      onChange={(e) => setNewSchedule({ ...newSchedule, day: e.target.value })}
                      className="w-full h-12 px-4 border-2 border-gray-200 rounded-lg bg-white outline-none"
                    >
                      <option value="">Select Day</option>
                      {days.map((day) => (
                        <option key={day} value={day}>
                          {day}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="startTime" className="text-sm font-medium text-gray-700 mb-2 block">
                      Start Time <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="startTime"
                      type="time"
                      value={newSchedule.startTime}
                      onChange={(e) => setNewSchedule({ ...newSchedule, startTime: e.target.value })}
                      className="h-12 border-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="endTime" className="text-sm font-medium text-gray-700 mb-2 block">
                      End Time <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="endTime"
                      type="time"
                      value={newSchedule.endTime}
                      onChange={(e) => setNewSchedule({ ...newSchedule, endTime: e.target.value })}
                      className="h-12 border-2"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <Label htmlFor="room" className="text-sm font-medium text-gray-700 mb-2 block">
                      Room
                    </Label>
                    <Input
                      id="room"
                      value={newSchedule.room}
                      onChange={(e) => setNewSchedule({ ...newSchedule, room: e.target.value })}
                      placeholder="e.g., Room 101 or Lab 201"
                      className="h-12 border-2"
                    />
                  </div>
                </div>

                <div className="flex justify-end gap-3 pt-4 border-t">
                  <Button variant="outline" onClick={() => setShowAddModal(false)}>
                    Cancel
                  </Button>
                  <Button
                    onClick={handleAddSchedule}
                    className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
                  >
                    <Save className="w-4 h-4 mr-2" />
                    Add Schedule
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Edit Schedule Modal */}
      <AnimatePresence>
        {showEditModal && selectedSchedule && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowEditModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="sticky top-0 bg-gradient-to-r from-yellow-600 to-yellow-700 px-6 py-4 flex items-center justify-between rounded-t-2xl">
                <h3 className="text-xl font-bold text-white">Edit Schedule</h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowEditModal(false)}
                  className="text-white hover:bg-white/20"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>

              <div className="p-6 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="md:col-span-2">
                    <Label className="text-sm font-medium text-gray-700 mb-2 block">Teacher</Label>
                    <Input
                      value={selectedSchedule.teacherName}
                      disabled
                      className="h-12 border-2 bg-gray-50"
                    />
                  </div>

                  <div>
                    <Label className="text-sm font-medium text-gray-700 mb-2 block">Subject</Label>
                    <Input
                      value={selectedSchedule.subject}
                      onChange={(e) =>
                        setSelectedSchedule({ ...selectedSchedule, subject: e.target.value })
                      }
                      className="h-12 border-2"
                    />
                  </div>

                  <div>
                    <Label className="text-sm font-medium text-gray-700 mb-2 block">
                      Class <span className="text-red-500">*</span>
                    </Label>
                    <select
                      value={selectedSchedule.class}
                      onChange={(e) =>
                        setSelectedSchedule({ ...selectedSchedule, class: e.target.value })
                      }
                      className="w-full h-12 px-4 border-2 border-gray-200 rounded-lg bg-white outline-none"
                    >
                      {classes.map((cls) => (
                        <option key={cls} value={cls}>
                          {cls}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <Label className="text-sm font-medium text-gray-700 mb-2 block">
                      Day <span className="text-red-500">*</span>
                    </Label>
                    <select
                      value={selectedSchedule.day}
                      onChange={(e) =>
                        setSelectedSchedule({ ...selectedSchedule, day: e.target.value })
                      }
                      className="w-full h-12 px-4 border-2 border-gray-200 rounded-lg bg-white outline-none"
                    >
                      {days.map((day) => (
                        <option key={day} value={day}>
                          {day}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <Label className="text-sm font-medium text-gray-700 mb-2 block">
                      Start Time <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      type="time"
                      value={selectedSchedule.startTime}
                      onChange={(e) =>
                        setSelectedSchedule({ ...selectedSchedule, startTime: e.target.value })
                      }
                      className="h-12 border-2"
                    />
                  </div>

                  <div>
                    <Label className="text-sm font-medium text-gray-700 mb-2 block">
                      End Time <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      type="time"
                      value={selectedSchedule.endTime}
                      onChange={(e) =>
                        setSelectedSchedule({ ...selectedSchedule, endTime: e.target.value })
                      }
                      className="h-12 border-2"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <Label className="text-sm font-medium text-gray-700 mb-2 block">Room</Label>
                    <Input
                      value={selectedSchedule.room}
                      onChange={(e) =>
                        setSelectedSchedule({ ...selectedSchedule, room: e.target.value })
                      }
                      className="h-12 border-2"
                    />
                  </div>
                </div>

                <div className="flex justify-end gap-3 pt-4 border-t">
                  <Button variant="outline" onClick={() => setShowEditModal(false)}>
                    Cancel
                  </Button>
                  <Button
                    onClick={handleEditSchedule}
                    className="bg-gradient-to-r from-yellow-600 to-yellow-700 hover:from-yellow-700 hover:to-yellow-800"
                  >
                    <Save className="w-4 h-4 mr-2" />
                    Update Schedule
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </PortalLayout>
  );
}