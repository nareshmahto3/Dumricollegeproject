import { useState } from 'react';
import {
  FileText,
  Plus,
  Calendar,
  Users,
  CheckCircle2,
  Clock,
  Edit,
  Trash2,
  Download,
} from 'lucide-react';
import { Card } from './ui/card';
import { PortalLayout } from './PortalLayout';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Progress } from './ui/progress';

const assignments = [
  {
    id: 1,
    title: 'Algebra Test - Chapter 5',
    class: 'Grade 10-A',
    subject: 'Mathematics',
    dueDate: 'Feb 18, 2026',
    assignedDate: 'Feb 10, 2026',
    totalStudents: 35,
    submitted: 28,
    graded: 20,
    status: 'active',
    description: 'Solve all problems from Chapter 5: Algebraic Expressions and Equations',
  },
  {
    id: 2,
    title: 'Trigonometry Homework',
    class: 'Grade 11-B',
    subject: 'Mathematics',
    dueDate: 'Feb 16, 2026',
    assignedDate: 'Feb 8, 2026',
    totalStudents: 38,
    submitted: 32,
    graded: 32,
    status: 'grading',
    description: 'Complete exercises 1-20 from Trigonometry workbook',
  },
  {
    id: 3,
    title: 'Calculus Assignment',
    class: 'Grade 12-C',
    subject: 'Mathematics',
    dueDate: 'Feb 20, 2026',
    assignedDate: 'Feb 12, 2026',
    totalStudents: 30,
    submitted: 25,
    graded: 15,
    status: 'active',
    description: 'Differentiation and Integration problems - Advanced level',
  },
  {
    id: 4,
    title: 'Geometry Quiz',
    class: 'Grade 9-A',
    subject: 'Mathematics',
    dueDate: 'Feb 15, 2026',
    assignedDate: 'Feb 5, 2026',
    totalStudents: 42,
    submitted: 42,
    graded: 42,
    status: 'completed',
    description: 'Multiple choice quiz on Geometric shapes and properties',
  },
  {
    id: 5,
    title: 'Linear Equations Practice',
    class: 'Grade 10-B',
    subject: 'Mathematics',
    dueDate: 'Feb 22, 2026',
    assignedDate: 'Feb 14, 2026',
    totalStudents: 36,
    submitted: 10,
    graded: 0,
    status: 'active',
    description: 'Solve systems of linear equations using various methods',
  },
];

export function TeacherAssignments() {
  const [filter, setFilter] = useState<'all' | 'active' | 'grading' | 'completed'>('all');

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return <Badge className="bg-blue-100 text-blue-700 border-blue-200">Active</Badge>;
      case 'grading':
        return <Badge className="bg-orange-100 text-orange-700 border-orange-200">Grading</Badge>;
      case 'completed':
        return <Badge className="bg-green-100 text-green-700 border-green-200">Completed</Badge>;
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };

  const filteredAssignments = filter === 'all'
    ? assignments
    : assignments.filter((a) => a.status === filter);

  const totalAssignments = assignments.length;
  const activeAssignments = assignments.filter((a) => a.status === 'active').length;
  const gradingAssignments = assignments.filter((a) => a.status === 'grading').length;
  const completedAssignments = assignments.filter((a) => a.status === 'completed').length;

  return (
    <PortalLayout
      role="teacher"
      userName="Dr. Priya Sharma"
      userRole="Mathematics Teacher"
      pageTitle="Assignments"
      breadcrumbs={["Home", "Teacher", "Assignments"]}
    >
      <div className="space-y-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="p-6 bg-gradient-to-br from-blue-500 to-blue-600 text-white border-0 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                <FileText className="w-6 h-6 text-white" />
              </div>
            </div>
            <h3 className="text-3xl font-bold mb-1">{totalAssignments}</h3>
            <p className="text-blue-100 text-sm">Total Assignments</p>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-emerald-500 to-emerald-600 text-white border-0 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                <Clock className="w-6 h-6 text-white" />
              </div>
            </div>
            <h3 className="text-3xl font-bold mb-1">{activeAssignments}</h3>
            <p className="text-emerald-100 text-sm">Active</p>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-orange-500 to-orange-600 text-white border-0 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                <Edit className="w-6 h-6 text-white" />
              </div>
            </div>
            <h3 className="text-3xl font-bold mb-1">{gradingAssignments}</h3>
            <p className="text-orange-100 text-sm">Needs Grading</p>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-green-500 to-green-600 text-white border-0 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-white" />
              </div>
            </div>
            <h3 className="text-3xl font-bold mb-1">{completedAssignments}</h3>
            <p className="text-green-100 text-sm">Completed</p>
          </Card>
        </div>

        {/* Filter Tabs */}
        <Card className="p-2 mb-6">
          <div className="flex gap-2">
            {(['all', 'active', 'grading', 'completed'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`px-4 py-2 rounded-lg font-medium text-sm capitalize transition-colors ${
                  filter === tab
                    ? 'bg-emerald-600 text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </Card>

        {/* Assignments List */}
        <div className="space-y-4">
          {filteredAssignments.map((assignment) => (
            <Card key={assignment.id} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg">{assignment.title}</h3>
                    {getStatusBadge(assignment.status)}
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{assignment.description}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {assignment.class}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      Due: {assignment.dueDate}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm">
                    <Edit className="w-4 h-4 mr-1" />
                    Edit
                  </Button>
                  <Button variant="outline" size="sm" className="text-red-600 hover:bg-red-50">
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Submission Progress */}
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Submissions</span>
                    <span className="text-sm font-medium">
                      {assignment.submitted}/{assignment.totalStudents}
                    </span>
                  </div>
                  <Progress
                    value={(assignment.submitted / assignment.totalStudents) * 100}
                    className="h-2 mb-1"
                  />
                  <p className="text-xs text-muted-foreground">
                    {Math.round((assignment.submitted / assignment.totalStudents) * 100)}% submitted
                  </p>
                </div>

                {/* Grading Progress */}
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Graded</span>
                    <span className="text-sm font-medium">
                      {assignment.graded}/{assignment.submitted}
                    </span>
                  </div>
                  <Progress
                    value={assignment.submitted > 0 ? (assignment.graded / assignment.submitted) * 100 : 0}
                    className="h-2 mb-1"
                  />
                  <p className="text-xs text-muted-foreground">
                    {assignment.submitted > 0
                      ? Math.round((assignment.graded / assignment.submitted) * 100)
                      : 0}% graded
                  </p>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2">
                  {assignment.submitted > assignment.graded && (
                    <Button className="flex-1 bg-emerald-600 hover:bg-emerald-700">
                      <Edit className="w-4 h-4 mr-1" />
                      Grade ({assignment.submitted - assignment.graded})
                    </Button>
                  )}
                  {assignment.status === 'completed' && (
                    <Button variant="outline" className="flex-1">
                      <Download className="w-4 h-4 mr-1" />
                      Export Results
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {filteredAssignments.length === 0 && (
          <Card className="p-12 text-center">
            <FileText className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg mb-2">No assignments found</h3>
            <p className="text-muted-foreground mb-4">
              {filter === 'all'
                ? 'Create your first assignment to get started'
                : `No ${filter} assignments at the moment`}
            </p>
            <Button className="bg-emerald-600 hover:bg-emerald-700">
              <Plus className="w-4 h-4 mr-2" />
              Create Assignment
            </Button>
          </Card>
        )}
      </div>
    </PortalLayout>
  );
}