import { useNavigate } from 'react-router';
import { motion } from 'motion/react';
import {
  ChevronRight,
  Users,
  BookOpen,
  Award,
  TrendingUp,
  Cpu,
  Zap,
  Settings,
  Mail,
  Phone,
} from 'lucide-react';
import { CarouselHeader } from '../CarouselHeader';
import { Footer } from '../Footer';
import { Button } from '../ui/button';
import { Card } from '../ui/card';

export function FacultyEngineeringPage() {
  const navigate = useNavigate();

  const departments = [
    {
      name: 'Computer Science & Engineering',
      icon: Cpu,
      description: 'Cutting-edge research in AI, Machine Learning, and Software Development',
      programs: ['B.Tech CSE', 'M.Tech CSE', 'Ph.D. in Computer Science'],
      faculty: 45,
      students: 620,
    },
    {
      name: 'Electrical & Electronics Engineering',
      icon: Zap,
      description: 'Power systems, renewable energy, and electronics innovation',
      programs: ['B.Tech EEE', 'M.Tech Power Systems', 'Ph.D. in Electrical Engineering'],
      faculty: 38,
      students: 480,
    },
    {
      name: 'Mechanical Engineering',
      icon: Settings,
      description: 'Robotics, manufacturing, and thermal engineering excellence',
      programs: ['B.Tech ME', 'M.Tech Thermal Engineering', 'Ph.D. in Mechanical Engineering'],
      faculty: 42,
      students: 550,
    },
    {
      name: 'Civil Engineering',
      icon: Settings,
      description: 'Infrastructure development, structural engineering, and urban planning',
      programs: ['B.Tech CE', 'M.Tech Structural Engineering', 'Ph.D. in Civil Engineering'],
      faculty: 35,
      students: 420,
    },
  ];

  const highlights = [
    {
      icon: Award,
      title: 'NAAC A++ Accredited',
      description: 'Highest accreditation for engineering programs',
    },
    {
      icon: Users,
      title: '160+ Expert Faculty',
      description: 'PhDs and industry professionals',
    },
    {
      icon: BookOpen,
      title: '2,070+ Students',
      description: 'Across all engineering disciplines',
    },
    {
      icon: TrendingUp,
      title: '95% Placement Rate',
      description: 'Top recruiters from industry',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <CarouselHeader />

      {/* Hero Banner Section */}
      <section
        className="relative h-[385px] bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1766325693346-6279a63b1fba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdpbmVlcmluZyUyMGxhYm9yYXRvcnklMjBlcXVpcG1lbnR8ZW58MXx8fHwxNzcyNTQwMDY5fDA&ixlib=rb-4.1.0&q=80&w=1080)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#2F584F]/80 to-[#00192C]/90"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-full flex flex-col justify-center pt-20 pb-16">
          <div className="flex items-center gap-2 mb-5">
            <button
              onClick={() => navigate('/')}
              className="text-white text-base hover:underline"
            >
              Home
            </button>
            <ChevronRight className="w-4 h-4 text-white" />
            <button
              onClick={() => navigate('/academics')}
              className="text-white text-base hover:underline"
            >
              Academics
            </button>
            <ChevronRight className="w-4 h-4 text-white" />
            <span className="text-white text-base">Faculty of Engineering</span>
          </div>

          <h1 className="text-5xl font-light text-white mb-5 font-serif">
            Faculty of Engineering
          </h1>

          <div className="relative w-full max-w-[480px] h-[1px] bg-white/15 mb-5">
            <div className="absolute left-0 top-0 h-full w-[120px] bg-[#FDC72F]"></div>
          </div>

          <p className="text-white/90 text-lg max-w-2xl leading-relaxed">
            Building tomorrow's innovators through excellence in engineering education and research
          </p>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 text-center hover:shadow-lg transition-shadow border-t-4 border-t-[#2563EB]">
                  <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-7 h-7 text-[#2563EB]" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600">{item.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Departments Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Engineering Departments
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              State-of-the-art facilities and world-class faculty across multiple engineering disciplines
            </p>
            <div className="w-24 h-1 bg-[#2563EB] mx-auto mt-6"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {departments.map((dept, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-8 hover:shadow-xl transition-all border-0 bg-gradient-to-br from-white to-slate-50">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-[#2563EB] rounded-lg flex items-center justify-center flex-shrink-0">
                      <dept.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">{dept.name}</h3>
                      <p className="text-slate-600">{dept.description}</p>
                    </div>
                  </div>

                  <div className="border-t border-slate-200 pt-4 mt-4">
                    <h4 className="font-semibold text-slate-900 mb-2">Programs Offered:</h4>
                    <ul className="space-y-1 mb-4">
                      {dept.programs.map((program, idx) => (
                        <li key={idx} className="text-slate-600 flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-[#2563EB] rounded-full"></div>
                          {program}
                        </li>
                      ))}
                    </ul>

                    <div className="flex items-center gap-6 text-sm text-slate-600">
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-[#2563EB]" />
                        <span>{dept.faculty} Faculty</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <BookOpen className="w-4 h-4 text-[#2563EB]" />
                        <span>{dept.students} Students</span>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Research & Innovation Section */}
      <section className="py-20 bg-gradient-to-br from-[#2563EB] to-[#1e40af] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">Research & Innovation</h2>
              <p className="text-lg text-blue-100 mb-6 leading-relaxed">
                Our Faculty of Engineering is at the forefront of technological advancement, with cutting-edge research labs, innovation centers, and industry partnerships.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'State-of-the-art research laboratories',
                  'Industry-sponsored projects worth ₹50+ Crores',
                  '200+ research papers published annually',
                  'International collaborations with top universities',
                  'Innovation and startup incubation center',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 bg-[#FDC72F] rounded-full"></div>
                    </div>
                    <span className="text-blue-50">{item}</span>
                  </li>
                ))}
              </ul>
              <Button
                onClick={() => navigate('/research')}
                className="bg-white text-[#2563EB] hover:bg-blue-50 px-8 py-6 text-lg"
              >
                Explore Research Projects
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80"
                alt="Research Lab"
                className="rounded-lg shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Get in Touch</h2>
              <p className="text-slate-600">
                Have questions about our engineering programs? Contact us today.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-[#2563EB]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Email Us</h3>
                    <a href="mailto:engineering@dumri.edu" className="text-[#2563EB] hover:underline">
                      engineering@dumri.edu
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-[#2563EB]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Call Us</h3>
                    <a href="tel:+918112522552" className="text-[#2563EB] hover:underline">
                      +91 8112522552
                    </a>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
