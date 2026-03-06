import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { PortalLayout } from './PortalLayout';
import { Trophy, TrendingUp, Award, Download, BookOpen } from 'lucide-react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';

interface SubjectResult {
  subject: string;
  obtainedMarks: number;
  totalMarks: number;
  grade: string;
  percentage: number;
}

const midtermResults: SubjectResult[] = [
  { subject: 'Mathematics', obtainedMarks: 92, totalMarks: 100, grade: 'A+', percentage: 92 },
  { subject: 'Physics', obtainedMarks: 88, totalMarks: 100, grade: 'A', percentage: 88 },
  { subject: 'Chemistry', obtainedMarks: 85, totalMarks: 100, grade: 'A', percentage: 85 },
  { subject: 'English', obtainedMarks: 90, totalMarks: 100, grade: 'A+', percentage: 90 },
  { subject: 'Computer Science', obtainedMarks: 95, totalMarks: 100, grade: 'A+', percentage: 95 },
  { subject: 'History', obtainedMarks: 82, totalMarks: 100, grade: 'A', percentage: 82 },
];

const termComparison = [
  { term: 'Term 1', average: 85 },
  { term: 'Midterm', average: 88.7 },
  { term: 'Term 2', average: 0 },
  { term: 'Final', average: 0 },
];

const radarData = midtermResults.map(r => ({
  subject: r.subject.substring(0, 10),
  score: r.percentage,
}));

const getGradeBadge = (grade: string) => {
  const colors = {
    'A+': 'bg-emerald-50 text-emerald-700 border-emerald-200',
    'A': 'bg-blue-50 text-blue-700 border-blue-200',
    'B': 'bg-amber-50 text-amber-700 border-amber-200',
    'C': 'bg-orange-50 text-orange-700 border-orange-200',
  };
  return <Badge className={`${colors[grade as keyof typeof colors] || 'bg-gray-50 text-gray-700'} border font-semibold`}>{grade}</Badge>;
};

export function StudentResults() {
  const totalObtained = midtermResults.reduce((sum, r) => sum + r.obtainedMarks, 0);
  const totalMarks = midtermResults.reduce((sum, r) => sum + r.totalMarks, 0);
  const overallPercentage = ((totalObtained / totalMarks) * 100).toFixed(2);
  const classRank = 3;
  const gradeRank = 8;

  return (
    <PortalLayout
      role="student"
      userName="Rohan Kumar"
      userRole="Grade 10-A"
      pageTitle="Exam Results"
      breadcrumbs={["Home", "Student", "Results"]}
    >
      <motion.div 
        className="space-y-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* Performance Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 sm:gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Card className="bg-gradient-to-br from-blue-500 to-blue-600 border-0 shadow-lg p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                  <Trophy className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white/90 mb-1">Overall Percentage</p>
                  <h3 className="text-3xl font-bold text-white">85.5%</h3>
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
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white/90 mb-1">Grade</p>
                  <h3 className="text-3xl font-bold text-white">A</h3>
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
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white/90 mb-1">Class Rank</p>
                  <h3 className="text-3xl font-bold text-white">3rd</h3>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card className="bg-gradient-to-br from-orange-500 to-orange-600 border-0 shadow-lg p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white/90 mb-1">Total Subjects</p>
                  <h3 className="text-3xl font-bold text-white">{midtermResults.length}</h3>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          {/* Subject-wise Performance */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Card className="bg-white border border-slate-200 shadow-sm p-6">
              <h3 className="font-bold text-slate-900 mb-6">Subject-wise Performance</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={midtermResults}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" opacity={0.5} />
                  <XAxis dataKey="subject" angle={-45} textAnchor="end" height={100} stroke="#64748b" />
                  <YAxis stroke="#64748b" />
                  <Tooltip />
                  <Bar dataKey="percentage" fill="#2563EB" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </Card>
          </motion.div>

          {/* Radar Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Card className="bg-white border border-slate-200 shadow-sm p-6">
              <h3 className="font-bold text-slate-900 mb-6">Performance Radar</h3>
              <ResponsiveContainer width="100%" height={300}>
                <RadarChart data={radarData}>
                  <PolarGrid stroke="#e2e8f0" opacity={0.5} />
                  <PolarAngleAxis dataKey="subject" stroke="#64748b" />
                  <PolarRadiusAxis angle={90} domain={[0, 100]} stroke="#64748b" />
                  <Radar name="Scores" dataKey="score" stroke="#2563EB" fill="#2563EB" fillOpacity={0.6} />
                  <Tooltip />
                </RadarChart>
              </ResponsiveContainer>
            </Card>
          </motion.div>
        </div>

        {/* Detailed Results Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <Card className="bg-white border border-slate-200 shadow-sm">
            <div className="p-6 border-b border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <h3 className="font-bold text-slate-900">Midterm Examination Results</h3>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-all duration-200">
                <Download className="w-4 h-4 mr-2" />
                Download Report Card
              </Button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-100">
                    <th className="text-left py-4 px-6 text-xs font-bold text-slate-700 uppercase tracking-wide">Subject</th>
                    <th className="text-left py-4 px-6 text-xs font-bold text-slate-700 uppercase tracking-wide">Obtained Marks</th>
                    <th className="text-left py-4 px-6 text-xs font-bold text-slate-700 uppercase tracking-wide">Total Marks</th>
                    <th className="text-left py-4 px-6 text-xs font-bold text-slate-700 uppercase tracking-wide">Percentage</th>
                    <th className="text-left py-4 px-6 text-xs font-bold text-slate-700 uppercase tracking-wide">Grade</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {midtermResults.map((result, index) => (
                    <motion.tr
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.8 + index * 0.05 }}
                      className="border-b border-slate-200 hover:bg-blue-50 transition-colors duration-200"
                    >
                      <td className="py-4 px-6 text-slate-900 font-semibold">{result.subject}</td>
                      <td className="py-4 px-6 text-slate-900 font-medium">{result.obtainedMarks}</td>
                      <td className="py-4 px-6 text-slate-600 font-medium">{result.totalMarks}</td>
                      <td className="py-4 px-6 text-slate-900 font-bold">{result.percentage}%</td>
                      <td className="py-4 px-6">{getGradeBadge(result.grade)}</td>
                    </motion.tr>
                  ))}
                  <tr className="bg-blue-50 border-t-2 border-blue-300">
                    <td className="py-4 px-6 text-slate-900 font-bold">Total</td>
                    <td className="py-4 px-6 text-slate-900 font-bold">{totalObtained}</td>
                    <td className="py-4 px-6 text-slate-900 font-bold">{totalMarks}</td>
                    <td className="py-4 px-6 text-slate-900 font-bold">{overallPercentage}%</td>
                    <td className="py-4 px-6">{getGradeBadge('A+')}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>
        </motion.div>

        {/* Teacher's Remarks */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          <Card className="bg-white border border-slate-200 shadow-sm p-6">
            <h3 className="font-bold text-slate-900 mb-4">Class Teacher's Remarks</h3>
            <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
              <p className="text-slate-700 font-medium italic">
                "Rohan has shown excellent performance in the midterm examinations. His consistency across all subjects is commendable. 
                Keep up the good work and continue to maintain this dedication towards studies."
              </p>
              <p className="text-sm text-slate-600 font-medium mt-2">- Ms. Emily Brown, Class Teacher</p>
            </div>
          </Card>
        </motion.div>
      </motion.div>
    </PortalLayout>
  );
}