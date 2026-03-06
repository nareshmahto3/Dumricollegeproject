import { useNavigate } from 'react-router';
import { motion } from 'motion/react';
import {
  ChevronRight,
  Users,
  BookOpen,
  Award,
  Cpu,
  FlaskConical,
  Palette,
  BarChart3,
  GraduationCap,
  ArrowRight,
} from 'lucide-react';
import { CarouselHeader } from '../CarouselHeader';
import { Footer } from '../Footer';
import { Card } from '../ui/card';

const faculties = [
  {
    id: 'engineering',
    name: 'Faculty of Engineering',
    icon: Cpu,
    description: 'Cutting-edge engineering programs in CSE, EEE, Mechanical, and Civil disciplines. Building tomorrow\'s innovators through excellence in education and research.',
    departments: 4,
    faculty: 160,
    students: 2070,
    highlight: '95% Placement Rate',
    color: 'from-blue-600 to-cyan-600',
    bg: 'bg-blue-50',
    border: 'border-blue-200',
    href: '/faculty/engineering',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&q=80',
  },
  {
    id: 'sciences',
    name: 'Faculty of Sciences',
    icon: FlaskConical,
    description: 'Advancing scientific knowledge in Physics, Chemistry, Mathematics, and Biotechnology through rigorous research and innovative education.',
    departments: 4,
    faculty: 115,
    students: 1330,
    highlight: 'DST-FIST Funded',
    color: 'from-emerald-600 to-teal-600',
    bg: 'bg-emerald-50',
    border: 'border-emerald-200',
    href: '/faculty/sciences',
    image: 'https://images.unsplash.com/photo-1562411053-c9ac630a5934?w=600&q=80',
  },
  {
    id: 'arts',
    name: 'Faculty of Arts',
    icon: Palette,
    description: 'Nurturing creativity, critical thinking, and cultural awareness through humanities education in Literature, History, Fine Arts, and Languages.',
    departments: 4,
    faculty: 75,
    students: 920,
    highlight: 'UGC Recognized',
    color: 'from-purple-600 to-pink-600',
    bg: 'bg-purple-50',
    border: 'border-purple-200',
    href: '/faculty/arts',
    image: 'https://images.unsplash.com/photo-1452802447250-470a88ac82bc?w=600&q=80',
  },
  {
    id: 'commerce',
    name: 'Faculty of Commerce',
    icon: BarChart3,
    description: 'Shaping future business leaders and entrepreneurs through innovative commerce education in Accounting, Business Administration, Economics, and Banking.',
    departments: 4,
    faculty: 106,
    students: 1690,
    highlight: 'AACSB Accredited',
    color: 'from-amber-600 to-orange-600',
    bg: 'bg-amber-50',
    border: 'border-amber-200',
    href: '/faculty/commerce',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80',
  },
  {
    id: 'education',
    name: 'Faculty of Education',
    icon: GraduationCap,
    description: 'Empowering future educators through comprehensive teacher training programs aligned with NEP 2020 and modern educational practices.',
    departments: 4,
    faculty: 69,
    students: 940,
    highlight: 'NCTE Approved',
    color: 'from-rose-600 to-red-600',
    bg: 'bg-rose-50',
    border: 'border-rose-200',
    href: '/faculty/education',
    image: 'https://images.unsplash.com/photo-1503676382389-4809596d5290?w=600&q=80',
  },
];

const stats = [
  { label: 'Total Faculty Members', value: '525+', icon: Users },
  { label: 'Academic Departments', value: '20', icon: BookOpen },
  { label: 'Enrolled Students', value: '6,950+', icon: GraduationCap },
  { label: 'Awards & Accreditations', value: '15+', icon: Award },
];

export function FacultyOverviewPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <CarouselHeader />

      {/* Hero Banner */}
      <section
        className="relative h-[385px] bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&q=80)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#2F584F]/80 to-[#00192C]/90" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-full flex flex-col justify-center pt-20 pb-16">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-5">
            <button
              onClick={() => navigate('/')}
              className="text-white text-base hover:underline"
            >
              Home
            </button>
            <ChevronRight className="w-4 h-4 text-white" />
            <span className="text-white text-base">Faculties</span>
          </div>

          <h1 className="text-5xl font-light text-white mb-5 font-serif">
            Our Faculties
          </h1>

          <div className="relative w-full max-w-[480px] h-[1px] bg-white/15 mb-5">
            <div className="absolute left-0 top-0 h-full w-[120px] bg-[#FDC72F]" />
          </div>

          <p className="text-white/90 text-lg max-w-2xl leading-relaxed">
            Five distinguished faculties offering world-class education across
            engineering, sciences, arts, commerce, and education disciplines.
          </p>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="py-12 bg-[#2563EB]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center text-white"
              >
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-blue-100 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Faculties Grid */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Explore Our Faculties
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Each faculty offers specialized programs with dedicated faculty,
              modern facilities, and strong industry connections.
            </p>
            <div className="w-24 h-1 bg-[#2563EB] mx-auto mt-6" />
          </motion.div>

          <div className="space-y-8 max-w-6xl mx-auto">
            {faculties.map((fac, index) => (
              <motion.div
                key={fac.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card
                  className={`overflow-hidden hover:shadow-xl transition-all duration-300 border ${fac.border} cursor-pointer group`}
                  onClick={() => navigate(fac.href)}
                >
                  <div className="flex flex-col md:flex-row">
                    {/* Image */}
                    <div className="md:w-72 h-52 md:h-auto overflow-hidden flex-shrink-0">
                      <img
                        src={fac.image}
                        alt={fac.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-1 p-8">
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-12 h-12 rounded-xl bg-gradient-to-br ${fac.color} flex items-center justify-center flex-shrink-0`}
                          >
                            <fac.icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-slate-900">
                              {fac.name}
                            </h3>
                            <span
                              className={`inline-block mt-1 px-3 py-0.5 rounded-full text-xs font-semibold ${fac.bg} text-slate-700`}
                            >
                              {fac.highlight}
                            </span>
                          </div>
                        </div>
                      </div>

                      <p className="text-slate-600 mb-6 leading-relaxed">
                        {fac.description}
                      </p>

                      {/* Stats Row */}
                      <div className="flex flex-wrap gap-6 mb-6">
                        <div className="flex items-center gap-2 text-slate-600">
                          <BookOpen className="w-4 h-4 text-[#2563EB]" />
                          <span className="text-sm">
                            <strong className="text-slate-900">{fac.departments}</strong> Departments
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-slate-600">
                          <Users className="w-4 h-4 text-[#2563EB]" />
                          <span className="text-sm">
                            <strong className="text-slate-900">{fac.faculty}+</strong> Faculty
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-slate-600">
                          <GraduationCap className="w-4 h-4 text-[#2563EB]" />
                          <span className="text-sm">
                            <strong className="text-slate-900">{fac.students.toLocaleString()}+</strong> Students
                          </span>
                        </div>
                      </div>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          navigate(fac.href);
                        }}
                        className="inline-flex items-center gap-2 bg-[#2563EB] hover:bg-[#1d4ed8] text-white px-6 py-2.5 rounded-lg font-medium transition-colors"
                      >
                        Explore Faculty
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Award className="w-14 h-14 text-[#2563EB] mx-auto mb-6" />
              <h2 className="text-4xl font-bold text-slate-900 mb-4">
                Ready to Begin Your Academic Journey?
              </h2>
              <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                Join thousands of students at Dumri College who are shaping their futures
                through quality education, research, and professional development.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => navigate('/apply')}
                  className="bg-[#2563EB] hover:bg-[#1d4ed8] text-white font-semibold px-8 py-3 rounded-lg transition-colors"
                >
                  Apply for Admission
                </button>
                <button
                  onClick={() => navigate('/programs')}
                  className="bg-white hover:bg-slate-50 text-[#2563EB] font-semibold px-8 py-3 rounded-lg transition-colors border border-[#2563EB]"
                >
                  Browse Programs
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
