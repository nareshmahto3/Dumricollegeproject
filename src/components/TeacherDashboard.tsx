import { useState } from "react";
import {
  Users,
  BookOpen,
  ClipboardCheck,
  Calendar,
  FileText,
  Award,
  TrendingUp,
  Clock,
  CheckCircle2,
  AlertCircle,
  Bell,
  MessageSquare,
  Download,
  Upload,
  PieChart as PieChartIcon,
  BarChart3,
} from "lucide-react";
import { Card } from "./ui/card";
import { PortalLayout } from "./PortalLayout";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { HolidayCalendar } from "./HolidayCalendar";

const teacherStats = [
  {
    title: "My Classes",
    value: "6",
    change: "Active",
    icon: BookOpen,
    color: "text-yellow-600",
    bgColor: "bg-yellow-50",
  },
  {
    title: "Total Students",
    value: "248",
    change: "Enrolled",
    icon: Users,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  // { title: 'Pending Tasks', value: '12', change: 'Due this week', icon: ClipboardCheck, color: 'text-orange-600', bgColor: 'bg-orange-50' },
  {
    title: "Avg. Attendance",
    value: "92.5%",
    change: "+3% this month",
    icon: TrendingUp,
    color: "text-green-600",
    bgColor: "bg-green-50",
  },
];

const todaySchedule = [
  {
    id: 1,
    time: "08:00 - 09:00",
    class: "Grade 10-A",
    subject: "Mathematics",
    room: "Room 205",
    status: "completed",
  },
  {
    id: 2,
    time: "09:15 - 10:15",
    class: "Grade 11-B",
    subject: "Mathematics",
    room: "Room 205",
    status: "completed",
  },
  {
    id: 3,
    time: "10:30 - 11:30",
    class: "Grade 12-C",
    subject: "Advanced Math",
    room: "Room 205",
    status: "current",
  },
  {
    id: 4,
    time: "12:00 - 01:00",
    class: "Grade 9-A",
    subject: "Mathematics",
    room: "Room 205",
    status: "upcoming",
  },
  {
    id: 5,
    time: "02:00 - 03:00",
    class: "Grade 10-B",
    subject: "Mathematics",
    room: "Room 205",
    status: "upcoming",
  },
];

const recentAssignments = [
  {
    id: 1,
    title: "Algebra Test - Chapter 5",
    class: "Grade 10-A",
    submitted: 28,
    total: 35,
    dueDate: "Feb 18, 2026",
    status: "pending",
  },
  {
    id: 2,
    title: "Trigonometry Homework",
    class: "Grade 11-B",
    submitted: 32,
    total: 38,
    dueDate: "Feb 16, 2026",
    status: "grading",
  },
  {
    id: 3,
    title: "Calculus Assignment",
    class: "Grade 12-C",
    submitted: 25,
    total: 30,
    dueDate: "Feb 20, 2026",
    status: "pending",
  },
  {
    id: 4,
    title: "Geometry Quiz",
    class: "Grade 9-A",
    submitted: 40,
    total: 42,
    dueDate: "Feb 15, 2026",
    status: "completed",
  },
];

const attendanceData = [
  { day: "Mon", present: 235, absent: 13 },
  { day: "Tue", present: 242, absent: 6 },
  { day: "Wed", present: 238, absent: 10 },
  { day: "Thu", present: 245, absent: 3 },
  { day: "Fri", present: 240, absent: 8 },
];

const performanceData = [
  { name: "Excellent", value: 68, color: "#10b981" },
  { name: "Good", value: 125, color: "#3b82f6" },
  { name: "Average", value: 42, color: "#f59e0b" },
  { name: "Below Average", value: 13, color: "#ef4444" },
];

const pendingTasks = [
  {
    id: 1,
    task: "Grade Algebra Test Papers",
    class: "Grade 10-A",
    count: "35 papers",
    due: "Due Today",
    priority: "high",
  },
  {
    id: 2,
    task: "Submit Monthly Report",
    class: "All Classes",
    count: "6 reports",
    due: "Due Tomorrow",
    priority: "high",
  },
  {
    id: 3,
    task: "Prepare Lesson Plan",
    class: "Grade 12-C",
    count: "Week 8",
    due: "Due in 2 days",
    priority: "medium",
  },
  {
    id: 4,
    task: "Parent-Teacher Meeting",
    class: "Grade 9-A",
    count: "12 parents",
    due: "Feb 20",
    priority: "medium",
  },
];

const recentAnnouncements = [
  {
    id: 1,
    title: "Staff Meeting Tomorrow",
    message:
      "Mandatory staff meeting at 4 PM in the auditorium",
    time: "2 hours ago",
    type: "meeting",
  },
  {
    id: 2,
    title: "Mid-term Exams Schedule",
    message: "Mid-term examination schedule has been published",
    time: "5 hours ago",
    type: "exam",
  },
  {
    id: 3,
    title: "Sports Day Event",
    message:
      "Annual sports day on February 25th. All teachers must attend",
    time: "1 day ago",
    type: "event",
  },
];

export function TeacherDashboard() {
  const [selectedView, setSelectedView] = useState<
    "today" | "week" | "month"
  >("today");

  const getScheduleStatus = (status: string) => {
    switch (status) {
      case "completed":
        return (
          <CheckCircle2 className="w-4 h-4 text-green-600" />
        );
      case "current":
        return <Clock className="w-4 h-4 text-blue-600" />;
      case "upcoming":
        return <Clock className="w-4 h-4 text-gray-400" />;
      default:
        return null;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-50 text-red-700 border-red-200";
      case "medium":
        return "bg-yellow-50 text-yellow-700 border-yellow-200";
      case "low":
        return "bg-green-50 text-green-700 border-green-200";
      default:
        return "bg-gray-50 text-gray-700 border-gray-200";
    }
  };

  return (
    <PortalLayout
      role="teacher"
      userName="Prof. Rajesh Kumar"
      userRole="Mathematics Teacher"
      pageTitle="Teacher Dashboard"
      breadcrumbs={["Home", "Teacher"]}
    >
      <div className="space-y-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-gradient-to-br from-blue-500 to-blue-600 border-0 shadow-lg p-6 hover:shadow-xl transition-all">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
            </div>
            <h3 className="text-3xl font-bold text-white mb-1">6</h3>
            <p className="text-sm font-semibold text-white/90">My Classes</p>
            <p className="text-xs text-white/80 mt-2">Active</p>
          </Card>

          <Card className="bg-gradient-to-br from-emerald-500 to-emerald-600 border-0 shadow-lg p-6 hover:shadow-xl transition-all">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                <Users className="w-6 h-6 text-white" />
              </div>
            </div>
            <h3 className="text-3xl font-bold text-white mb-1">248</h3>
            <p className="text-sm font-semibold text-white/90">Total Students</p>
            <p className="text-xs text-white/80 mt-2">Enrolled</p>
          </Card>

          <Card className="bg-gradient-to-br from-purple-500 to-purple-600 border-0 shadow-lg p-6 hover:shadow-xl transition-all">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
            </div>
            <h3 className="text-3xl font-bold text-white mb-1">92.5%</h3>
            <p className="text-sm font-semibold text-white/90">Avg. Attendance</p>
            <p className="text-xs text-white/80 mt-2">+3% this month</p>
          </Card>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Today's Schedule */}
          <Card className="p-6 lg:col-span-2 bg-white border border-slate-200">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-slate-700" />
                <h3 className="text-lg font-semibold text-slate-900">Today's Schedule</h3>
              </div>
              <Badge className="bg-blue-50 text-blue-700 border-blue-200">
                {todaySchedule.length} Classes
              </Badge>
            </div>
            <div className="space-y-3">
              {todaySchedule.map((schedule) => (
                <div
                  key={schedule.id}
                  className={`p-4 border rounded-lg transition-all ${
                    schedule.status === "current"
                      ? "border-blue-300 bg-blue-50 shadow-sm"
                      : schedule.status === "completed"
                        ? "border-slate-200 bg-slate-50 opacity-70"
                        : "border-slate-200 bg-white hover:border-blue-300 hover:shadow-sm"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold text-slate-900">
                        {schedule.time}
                      </span>
                      {getScheduleStatus(schedule.status)}
                      {schedule.status === "current" && (
                        <Badge className="bg-blue-100 text-blue-700 border-blue-200 text-xs">
                          In Progress
                        </Badge>
                      )}
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-blue-600 hover:bg-blue-50 font-medium"
                    >
                      {schedule.status === "upcoming"
                        ? "Prepare"
                        : "View"}
                    </Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold text-slate-900">
                        {schedule.subject}
                      </p>
                      <p className="text-xs text-slate-600">
                        {schedule.class} • {schedule.room}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Pending Tasks */}
          <Card className="p-6 bg-white border border-slate-200">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-slate-900">Pending Tasks</h3>
              <Badge className="bg-orange-50 text-orange-700 border-orange-200">
                {pendingTasks.length}
              </Badge>
            </div>
            <div className="space-y-3">
              {pendingTasks.map((task) => (
                <div
                  key={task.id}
                  className="p-3 border border-slate-200 bg-white rounded-lg hover:border-blue-300 transition-colors"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="text-sm font-semibold text-slate-900">
                      {task.task}
                    </h4>
                    <Badge
                      variant="outline"
                      className={`text-xs ${getPriorityColor(task.priority)}`}
                    >
                      {task.priority}
                    </Badge>
                  </div>
                  <p className="text-xs text-slate-600 mb-2">
                    {task.class} • {task.count}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-orange-600 font-medium">
                      {task.due}
                    </span>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-xs h-auto p-1 text-blue-600 hover:bg-blue-50"
                    >
                      Start →
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Assignments & Analytics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Assignments */}
          <Card className="p-6 bg-white border border-slate-200">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-slate-700" />
                <h3 className="text-lg font-semibold text-slate-900">Recent Assignments</h3>
              </div>
              <Button variant="outline" size="sm" className="bg-blue-600 text-white hover:bg-blue-700">
                Create New
              </Button>
            </div>
            <div className="space-y-4">
              {recentAssignments.map((assignment) => (
                <div
                  key={assignment.id}
                  className="p-4 border border-slate-200 rounded-lg hover:border-blue-300 transition-colors bg-white"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="text-sm font-semibold text-slate-900 mb-1">
                        {assignment.title}
                      </h4>
                      <p className="text-xs text-slate-600">
                        {assignment.class}
                      </p>
                    </div>
                    <Badge
                      variant="outline"
                      className={`text-xs ${
                        assignment.status === "completed"
                          ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                          : assignment.status === "grading"
                            ? "bg-blue-50 text-blue-700 border-blue-200"
                            : "bg-orange-50 text-orange-700 border-orange-200"
                      }`}
                    >
                      {assignment.status}
                    </Badge>
                  </div>
                  <div className="mb-2">
                    <div className="flex justify-between text-xs text-slate-600 mb-1">
                      <span>
                        Submissions: {assignment.submitted}/
                        {assignment.total}
                      </span>
                      <span className="font-medium">
                        {Math.round(
                          (assignment.submitted /
                            assignment.total) *
                            100,
                        )}
                        %
                      </span>
                    </div>
                    <Progress
                      value={
                        (assignment.submitted /
                          assignment.total) *
                        100
                      }
                      className="h-2"
                    />
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-600">
                      Due: {assignment.dueDate}
                    </span>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-xs h-auto p-1 text-blue-600 hover:bg-blue-50 font-medium"
                    >
                      {assignment.status === "grading"
                        ? "Continue Grading"
                        : "View Details"}{" "}
                      →
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Student Performance Overview */}
          <Card className="p-6 bg-white border border-slate-200">
            <h3 className="mb-6 text-lg font-semibold text-slate-900">
              Student Performance Overview
            </h3>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={performanceData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={90}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {performanceData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={entry.color}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="grid grid-cols-2 gap-3 mt-6">
              {performanceData.map((item) => (
                <div
                  key={item.name}
                  className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-200"
                >
                  <div className="flex items-center gap-2">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{
                        backgroundColor: item.color,
                      }}
                    ></div>
                    <span className="text-sm text-slate-700">
                      {item.name}
                    </span>
                  </div>
                  <span className="text-sm font-semibold text-slate-900">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Weekly Attendance & Announcements */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Weekly Attendance Trend */}
          <Card className="p-6 lg:col-span-2 bg-white border border-slate-200">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-slate-700" />
                <h3 className="text-lg font-semibold text-slate-900">Weekly Attendance Trend</h3>
              </div>
              <div className="flex items-center gap-2">
                <Badge className="bg-emerald-50 text-emerald-700 border-emerald-200">
                  92.5% Avg
                </Badge>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={attendanceData}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="#e2e8f0"
                  vertical={false}
                />
                <XAxis dataKey="day" stroke="#64748b" style={{ fontSize: '13px' }} />
                <YAxis stroke="#64748b" style={{ fontSize: '13px' }} />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'white',
                    border: '1px solid #e2e8f0',
                    borderRadius: '8px',
                    fontSize: '13px'
                  }}
                />
                <Bar
                  dataKey="present"
                  fill="#10b981"
                  radius={[6, 6, 0, 0]}
                  name="Present"
                />
                <Bar
                  dataKey="absent"
                  fill="#ef4444"
                  radius={[6, 6, 0, 0]}
                  name="Absent"
                />
              </BarChart>
            </ResponsiveContainer>
          </Card>

          {/* Announcements */}
          <Card className="p-6 bg-white border border-slate-200">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <Bell className="w-5 h-5 text-slate-700" />
                <h3 className="text-lg font-semibold text-slate-900">Announcements</h3>
              </div>
            </div>
            <div className="space-y-4">
              {recentAnnouncements.map((announcement) => (
                <div
                  key={announcement.id}
                  className="pb-4 border-b border-slate-200 last:border-0 last:pb-0"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                      <MessageSquare className="w-4 h-4 text-blue-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-semibold text-slate-900 mb-1">
                        {announcement.title}
                      </h4>
                      <p className="text-xs text-slate-600 mb-2">
                        {announcement.message}
                      </p>
                      <span className="text-xs text-slate-500">
                        {announcement.time}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <Button
              variant="outline"
              className="w-full mt-4 text-blue-600 hover:bg-blue-50 border-slate-300"
              size="sm"
            >
              View All Announcements
            </Button>
          </Card>
        </div>

        {/* Holiday Calendar */}
        <HolidayCalendar variant="teacher" />
      </div>
    </PortalLayout>
  );
}