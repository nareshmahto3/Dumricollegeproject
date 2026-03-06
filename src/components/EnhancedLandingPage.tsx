import { useNavigate } from 'react-router';
import {
  GraduationCap,
  BookOpen,
  Shield,
  Zap,
  CheckCircle2,
  FileText,
  CreditCard,
  Award,
  Users,
  BarChart3,
  Lock,
  Clock,
  ArrowRight,
  ChevronRight,
  Smartphone,
  Cloud,
  TrendingDown,
  TrendingUp,
} from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';

const features = [
  {
    icon: FileText,
    title: 'Digital Admissions',
    description: 'Paperless admission process from application to enrollment with auto-generated IDs',
    color: 'text-lime-700',
    bgColor: 'bg-gradient-to-br from-lime-100 to-lime-200',
  },
  {
    icon: Shield,
    title: 'Document Verification',
    description: 'Secure upload, OCR extraction, and admin verification with complete audit trail',
    color: 'text-emerald-700',
    bgColor: 'bg-gradient-to-br from-emerald-100 to-emerald-200',
  },
  {
    icon: CreditCard,
    title: 'Smart Fee Management',
    description: 'Online payments, auto-receipts, installments, and payment alerts',
    color: 'text-green-700',
    bgColor: 'bg-gradient-to-br from-green-100 to-green-200',
  },
  {
    icon: Award,
    title: 'Digital Certificates',
    description: 'QR-verified certificates with approval workflow and secure downloads',
    color: 'text-yellow-700',
    bgColor: 'bg-gradient-to-br from-yellow-100 to-yellow-200',
  },
  {
    icon: Users,
    title: 'Role-Based Access',
    description: 'Secure login for students, teachers, admin, and management with permissions',
    color: 'text-amber-700',
    bgColor: 'bg-gradient-to-br from-amber-100 to-amber-200',
  },
  {
    icon: BarChart3,
    title: 'Analytics & Reports',
    description: 'Real-time dashboards, compliance reports, and exportable data',
    color: 'text-teal-700',
    bgColor: 'bg-gradient-to-br from-teal-100 to-teal-200',
  },
];

const benefits = [
  {
    icon: TrendingDown,
    title: '90% Less Paperwork',
    description: 'Completely digital admission and certificate process',
    metric: '↓ 90%',
    color: 'text-green-600',
  },
  {
    icon: Clock,
    title: '5x Faster Processing',
    description: 'Automated workflows reduce admission time from weeks to hours',
    metric: '5x',
    color: 'text-blue-600',
  },
  {
    icon: TrendingUp,
    title: '99.9% Accuracy',
    description: 'Eliminate manual errors in fee tracking and data entry',
    metric: '99.9%',
    color: 'text-purple-600',
  },
  {
    icon: Shield,
    title: '100% Audit Ready',
    description: 'Complete logs of approvals, verifications, and transactions',
    metric: '100%',
    color: 'text-orange-600',
  },
];

const modules = [
  {
    title: 'Admission Management',
    features: [
      'Online application with auto-generated ID',
      'Document upload & OCR verification',
      'Selection workflow with approval chain',
      'Email/SMS notifications on status updates',
      'Waitlist management',
    ],
  },
  {
    title: 'Fee Management',
    features: [
      'Configurable fee structure per class',
      'UPI/Card payment gateway integration',
      'Installment & partial payment support',
      'Auto-generated receipts with PDF',
      'Due date alerts & reminders',
    ],
  },
  {
    title: 'Certificate System',
    features: [
      'Digital certificate request workflow',
      'Admin review & approval system',
      'QR-verified certificate generation',
      'Watermarked PDFs with digital signature',
      'Download tracking & audit logs',
    ],
  },
  {
    title: 'Identity Management',
    features: [
      'Role-based authentication (Student/Teacher/Admin)',
      'Digital ID card with QR code',
      'Secure password reset with OTP',
      'Single sign-on capability',
      'Activity tracking & session management',
    ],
  },
];

const userRoles = [
  {
    role: 'Student / Parent',
    icon: Users,
    capabilities: ['Apply for admission', 'Upload documents', 'Track application', 'Pay fees online', 'Download certificates', 'View ID card'],
    color: 'bg-blue-50 border-blue-200',
  },
  {
    role: 'Teacher',
    icon: BookOpen,
    capabilities: ['View class lists', 'Access student details', 'Download reports', 'Mark attendance', 'View schedules'],
    color: 'bg-purple-50 border-purple-200',
  },
  {
    role: 'School Admin',
    icon: Shield,
    capabilities: ['Verify documents', 'Manage admissions', 'Process fees', 'Issue certificates', 'Generate ID cards', 'Manage users'],
    color: 'bg-green-50 border-green-200',
  },
  {
    role: 'Management',
    icon: BarChart3,
    capabilities: ['Approve/reject applications', 'View analytics dashboards', 'Access compliance reports', 'Monitor system activity'],
    color: 'bg-orange-50 border-orange-200',
  },
];

const workflow = [
  { step: 1, title: 'Student Applies', desc: 'Fill online form, get Application ID' },
  { step: 2, title: 'Upload Documents', desc: 'Birth cert, marksheet, TC, address proof' },
  { step: 3, title: 'Admin Verifies', desc: 'Document check, eligibility validation' },
  { step: 4, title: 'Selection Decision', desc: 'Approved/Rejected/Waitlisted' },
  { step: 5, title: 'Fee Payment', desc: 'Online payment via UPI/Cards' },
  { step: 6, title: 'Enrollment', desc: 'Digital ID card & portal access' },
];

export function EnhancedLandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-lime-50 via-yellow-50 to-green-100">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-gradient-to-r from-lime-100 to-yellow-100 backdrop-blur-sm border-b-2 border-lime-300 shadow-md">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-lime-700 rounded-xl flex items-center justify-center shadow-lg">
                <GraduationCap className="w-7 h-7 text-yellow-100" />
              </div>
              <div>
                <h3 className="leading-none text-green-900">EduManage Pro</h3>
                <p className="text-xs text-green-700">Complete School Management System</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Button variant="ghost" onClick={() => navigate('/login')} className="text-green-800 hover:bg-lime-200">
                Sign In
              </Button>
              <Button onClick={() => navigate('/login')} className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-yellow-50 shadow-lg">
                Get Started
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-lime-100 via-yellow-100 to-green-100 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(34 197 94) 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <Badge className="bg-gradient-to-r from-yellow-200 to-lime-200 text-green-800 border-2 border-lime-400 mb-6 shadow-md">
              <Zap className="w-3 h-3 mr-1" />
              Zero Paperwork • 100% Digital • Audit Ready
            </Badge>
            <h1 className="mb-6 text-5xl md:text-6xl text-green-900">
              Complete School Management<br />
              <span className="text-lime-700">End-to-End Digitization</span>
            </h1>
            <p className="text-xl text-green-800 mb-8 leading-relaxed">
              Digitize the entire student lifecycle from admission to exit. Reduce manual work by 90%, 
              improve transparency, and create an audit-ready system with complete traceability.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                onClick={() => navigate('/apply')}
                size="lg"
                className="bg-gradient-to-r from-lime-500 to-green-600 text-yellow-50 hover:from-lime-600 hover:to-green-700 shadow-xl"
              >
                Apply Now
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button
                onClick={() => navigate('/login')}
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 shadow-xl"
              >
                Portal Login
              </Button>
            </div>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-xl transition-all bg-gradient-to-br from-lime-50 to-yellow-50 border-2 border-lime-300 hover:scale-105">
                <div className={`text-3xl mb-2 ${benefit.color} font-bold`}>{benefit.metric}</div>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <benefit.icon className={`w-4 h-4 ${benefit.color}`} />
                  <h4 className="text-sm text-green-900 font-semibold">{benefit.title}</h4>
                </div>
                <p className="text-xs text-green-700">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Primary Outcomes */}
      <section className="py-20 bg-gradient-to-br from-yellow-50 to-lime-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="bg-gradient-to-r from-green-200 to-lime-200 text-green-800 border-2 border-green-400 mb-4 shadow-md">Primary Outcomes</Badge>
            <h2 className="mb-4 text-green-900">Transform Your School Operations</h2>
            <p className="text-green-800 text-lg max-w-3xl mx-auto">
              Achieve measurable improvements across all administrative processes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: FileText, title: 'Zero Paper-Based Admission', desc: 'Completely digital application and certificate issuance' },
              { icon: Zap, title: 'Faster Admission Decisions', desc: 'Automated workflows reduce processing time by 80%' },
              { icon: CreditCard, title: 'Accurate Fee Tracking', desc: 'Real-time payment status with automated alerts' },
              { icon: Users, title: 'Single Digital Identity', desc: 'Unified profile for students and staff across modules' },
              { icon: Shield, title: 'Audit-Ready System', desc: 'Complete logs, approvals, and verification trails' },
              { icon: BarChart3, title: 'Compliance & Reports', desc: 'Export-ready reports for regulatory compliance' },
            ].map((outcome, index) => (
              <Card key={index} className="p-6 hover:border-green-400 transition-all bg-gradient-to-br from-lime-100 to-yellow-100 border-2 border-lime-300 hover:shadow-xl">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-200 to-lime-300 flex items-center justify-center mb-4 shadow-md">
                  <outcome.icon className="w-6 h-6 text-green-800" />
                </div>
                <h3 className="mb-2 text-green-900">{outcome.title}</h3>
                <p className="text-sm text-green-700">{outcome.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Complete Workflow */}
      <section className="py-20 bg-gradient-to-br from-lime-100 via-yellow-100 to-green-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="bg-gradient-to-r from-yellow-200 to-amber-200 text-green-800 border-2 border-yellow-400 mb-4 shadow-md">Student Lifecycle</Badge>
            <h2 className="mb-4 text-green-900">End-to-End Workflow</h2>
            <p className="text-green-800 text-lg max-w-3xl mx-auto">
              From admission to graduation, manage every step digitally
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-6 gap-4 mb-12">
            {workflow.map((item, index) => (
              <div key={index} className="relative">
                <Card className="p-4 h-full bg-gradient-to-br from-yellow-50 to-lime-100 border-2 border-lime-300 shadow-lg">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-600 to-lime-700 text-yellow-50 flex items-center justify-center mb-3 text-sm shadow-md">
                    {item.step}
                  </div>
                  <h4 className="mb-2 text-sm text-green-900 font-semibold">{item.title}</h4>
                  <p className="text-xs text-green-700">{item.desc}</p>
                </Card>
                {index < workflow.length - 1 && (
                  <div className="hidden md:block absolute top-8 -right-2 z-10">
                    <ChevronRight className="w-5 h-5 text-green-700" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20 bg-gradient-to-br from-green-50 via-lime-50 to-yellow-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="bg-gradient-to-r from-lime-200 to-yellow-200 text-green-800 border-2 border-lime-400 mb-4 shadow-md">Core Features</Badge>
            <h2 className="mb-4 text-green-900">Comprehensive Feature Set</h2>
            <p className="text-green-800 text-lg max-w-3xl mx-auto">
              Everything you need to run a modern, efficient school administration
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 hover:shadow-xl transition-all border-2 border-lime-300">
                <div className={`w-14 h-14 rounded-xl ${feature.bgColor} flex items-center justify-center mb-4 shadow-md border-2 border-lime-200`}>
                  <feature.icon className={`w-7 h-7 ${feature.color}`} />
                </div>
                <h3 className="mb-3 text-green-900">{feature.title}</h3>
                <p className="text-sm text-green-700">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Modules Breakdown */}
      <section className="py-20 bg-gradient-to-br from-yellow-100 via-amber-50 to-lime-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="bg-gradient-to-r from-yellow-200 to-amber-200 text-green-800 border-2 border-yellow-400 mb-4 shadow-md">System Modules</Badge>
            <h2 className="mb-4 text-green-900">Feature-Rich Modules</h2>
            <p className="text-green-800 text-lg max-w-3xl mx-auto">
              Detailed breakdown of each module's capabilities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {modules.map((module, index) => (
              <Card key={index} className="p-8 bg-gradient-to-br from-lime-50 to-yellow-50 border-2 border-lime-300 shadow-lg">
                <h3 className="mb-6 pb-4 border-b-2 border-lime-300 text-green-900">{module.title}</h3>
                <ul className="space-y-3">
                  {module.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-green-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* User Roles */}
      <section className="py-20 bg-gradient-to-br from-lime-100 via-green-50 to-yellow-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="bg-gradient-to-r from-green-200 to-lime-200 text-green-800 border-2 border-green-400 mb-4 shadow-md">User Management</Badge>
            <h2 className="mb-4 text-green-900">Role-Based Access Control</h2>
            <p className="text-green-800 text-lg max-w-3xl mx-auto">
              Secure, permission-based access for all stakeholders
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {userRoles.map((user, index) => (
              <Card key={index} className={`p-6 border-2 ${
                index === 0 ? 'bg-gradient-to-br from-lime-100 to-lime-200 border-lime-400' :
                index === 1 ? 'bg-gradient-to-br from-yellow-100 to-yellow-200 border-yellow-400' :
                index === 2 ? 'bg-gradient-to-br from-green-100 to-green-200 border-green-400' :
                'bg-gradient-to-br from-amber-100 to-amber-200 border-amber-400'
              } shadow-lg`}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-200 to-lime-300 border-2 border-lime-400 flex items-center justify-center shadow-md">
                    <user.icon className="w-6 h-6 text-green-800" />
                  </div>
                  <h3 className="text-green-900">{user.role}</h3>
                </div>
                <ul className="space-y-2">
                  {user.capabilities.map((capability, cIndex) => (
                    <li key={cIndex} className="flex items-center gap-2 text-sm text-green-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-600"></div>
                      {capability}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Compliance */}
      <section className="py-20 bg-gradient-to-br from-green-800 to-green-900 text-yellow-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="bg-lime-500/20 text-lime-200 border-2 border-lime-400/30 mb-4 shadow-md">
              <Lock className="w-3 h-3 mr-1" />
              Security & Compliance
            </Badge>
            <h2 className="text-yellow-50 mb-4">Enterprise-Grade Security</h2>
            <p className="text-lime-200 text-lg max-w-3xl mx-auto">
              Built with security, privacy, and compliance as top priorities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Lock, title: 'Data Encryption', desc: 'End-to-end encryption for all sensitive data' },
              { icon: Shield, title: 'RBAC Security', desc: 'Role-based permissions and access control' },
              { icon: FileText, title: 'Audit Logs', desc: 'Complete activity tracking and compliance logs' },
              { icon: Cloud, title: 'Secure Storage', desc: 'Cloud-based document storage with backup' },
              { icon: Smartphone, title: '2FA Support', desc: 'Two-factor authentication for admin users' },
              { icon: BarChart3, title: 'Compliance Reports', desc: 'Export-ready audit and compliance reports' },
            ].map((item, index) => (
              <Card key={index} className="p-6 bg-lime-500/10 border-2 border-lime-500/20 hover:bg-lime-500/20 transition-colors shadow-lg">
                <div className="w-12 h-12 rounded-xl bg-lime-500/20 flex items-center justify-center mb-4 border-2 border-lime-400/30">
                  <item.icon className="w-6 h-6 text-lime-200" />
                </div>
                <h4 className="text-yellow-50 mb-2">{item.title}</h4>
                <p className="text-sm text-lime-200">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-lime-600 to-green-700 text-yellow-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-yellow-50 mb-4">Ready to Go Paperless?</h2>
          <p className="text-lime-100 text-lg mb-8">
            Join hundreds of schools that have digitized their operations with EduManage Pro
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" onClick={() => navigate('/login')} className="bg-gradient-to-r from-yellow-400 to-amber-500 text-green-900 hover:from-yellow-500 hover:to-amber-600 shadow-xl">
              Start Free Trial
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button size="lg" className="bg-lime-500/20 border-2 border-lime-300 text-yellow-50 hover:bg-lime-500/30 shadow-xl">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-green-900 to-green-950 text-lime-100 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-lime-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                  <GraduationCap className="w-6 h-6 text-yellow-50" />
                </div>
                <h3 className="text-yellow-50">EduManage Pro</h3>
              </div>
              <p className="text-lime-200 text-sm">
                Complete school management system for the digital age.
              </p>
            </div>

            <div>
              <h4 className="mb-4 text-yellow-50">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-lime-200 hover:text-yellow-200">Features</a></li>
                <li><a href="#" className="text-lime-200 hover:text-yellow-200">Pricing</a></li>
                <li><a href="#" className="text-lime-200 hover:text-yellow-200">Security</a></li>
                <li><a href="#" className="text-lime-200 hover:text-yellow-200">Updates</a></li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 text-yellow-50">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-lime-200 hover:text-yellow-200">Documentation</a></li>
                <li><a href="#" className="text-lime-200 hover:text-yellow-200">API Reference</a></li>
                <li><a href="#" className="text-lime-200 hover:text-yellow-200">Support</a></li>
                <li><a href="#" className="text-lime-200 hover:text-yellow-200">Blog</a></li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 text-yellow-50">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-lime-200 hover:text-yellow-200">About</a></li>
                <li><a href="#" className="text-lime-200 hover:text-yellow-200">Contact</a></li>
                <li><a href="#" className="text-lime-200 hover:text-yellow-200">Privacy</a></li>
                <li><a href="#" className="text-lime-200 hover:text-yellow-200">Terms</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t-2 border-lime-700 pt-8 text-center">
            <p className="text-sm text-lime-300">
              © 2026 EduManage Pro. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}