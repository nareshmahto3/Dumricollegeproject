import { useNavigate } from 'react-router';
import { motion } from 'motion/react';
import {
  GraduationCap,
  BookOpen,
  Users,
  Award,
  Microscope,
  Calculator,
  Palette,
  Briefcase,
  Globe,
  ArrowRight,
} from 'lucide-react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { CarouselHeader } from '../CarouselHeader';
import { Footer } from '../Footer';

const programs = [
  {
    icon: Calculator,
    category: 'Engineering',
    title: 'Computer Science & Engineering',
    duration: '4 Years',
    description: 'Advanced computing, AI, and software development',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&q=80',
  },
  {
    icon: Briefcase,
    category: 'Business',
    title: 'Master of Business Administration',
    duration: '2 Years',
    description: 'Leadership, strategy, and business management',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80',
  },
  {
    icon: Microscope,
    category: 'Science',
    title: 'Biotechnology',
    duration: '4 Years',
    description: 'Cutting-edge research in life sciences',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&q=80',
  },
  {
    icon: Palette,
    category: 'Arts',
    title: 'Mass Communication',
    duration: '3 Years',
    description: 'Media, journalism, and digital content',
    image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=600&q=80',
  },
  {
    icon: Globe,
    category: 'Commerce',
    title: 'Commerce & Economics',
    duration: '3 Years',
    description: 'Finance, accounting, and economic analysis',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
  },
  {
    icon: BookOpen,
    category: 'Humanities',
    title: 'Psychology',
    duration: '3 Years',
    description: 'Understanding human behavior and mental processes',
    image: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=600&q=80',
  },
];

const features = [
  {
    icon: Award,
    title: 'Accredited Programs',
    description: 'All programs are accredited by national and international bodies',
  },
  {
    icon: Users,
    title: 'Expert Faculty',
    description: 'Learn from industry professionals and renowned academics',
  },
  {
    icon: Globe,
    title: 'Global Perspective',
    description: 'International collaborations and exchange opportunities',
  },
  {
    icon: Briefcase,
    title: 'Career Support',
    description: 'Dedicated placement cell with strong industry connections',
  },
];

export function AcademicsPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <CarouselHeader />

      {/* Hero Section */}
      <section
        className="relative py-36 overflow-hidden"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1591218214141-45545921d2d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFkdWF0aW9uJTIwY2VyZW1vbnklMjBjZWxlYnJhdGlvbiUyMHN0dWRlbnRzfGVufDF8fHx8MTc3MjI3MTgyMHww&ixlib=rb-4.1.0&q=80&w=1080)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/93 via-cyan-500/88 to-teal-500/90"></div>
        
        {/* Animated Shapes */}
        <div className="absolute top-20 right-20 w-80 h-80 bg-yellow-400/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-pink-400/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/3 left-1/2 w-64 h-64 bg-white/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block mb-8"
            >
              <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center mx-auto border-2 border-white/30 shadow-2xl">
                <GraduationCap className="w-12 h-12 text-white" />
              </div>
            </motion.div>
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Academic Programs
            </h1>
            <p className="text-2xl text-white/95 leading-relaxed">
              Discover world-class programs designed to shape future leaders and innovators
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-[#2563EB]" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-slate-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Our Programs
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Choose from a wide range of undergraduate and postgraduate programs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden hover:shadow-xl transition-all bg-white border-slate-200 group h-full flex flex-col">
                  <div className="aspect-[16/9] overflow-hidden">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <program.icon className="w-5 h-5 text-[#2563EB]" />
                      </div>
                      <div>
                        <p className="text-xs text-slate-500">{program.category}</p>
                        <p className="text-xs text-slate-500">{program.duration}</p>
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">
                      {program.title}
                    </h3>
                    <p className="text-slate-600 mb-4 flex-1">{program.description}</p>
                    <Button
                      variant="outline"
                      className="w-full border-slate-300 text-slate-700 hover:bg-slate-50"
                      onClick={() => navigate('/apply')}
                    >
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                Comprehensive Curriculum
              </h2>
              <p className="text-lg text-slate-600">
                Our curriculum is designed to provide a balanced blend of theoretical knowledge and
                practical skills
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8 bg-white border-slate-200">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <BookOpen className="w-6 h-6 text-[#2563EB]" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  Theory & Concepts
                </h3>
                <ul className="space-y-2 text-slate-600">
                  <li>• Fundamental principles and theories</li>
                  <li>• Industry-relevant coursework</li>
                  <li>• Research methodology</li>
                  <li>• Critical thinking development</li>
                </ul>
              </Card>

              <Card className="p-8 bg-white border-slate-200">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <Microscope className="w-6 h-6 text-[#2563EB]" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  Practical Experience
                </h3>
                <ul className="space-y-2 text-slate-600">
                  <li>• Hands-on laboratory work</li>
                  <li>• Industry internships</li>
                  <li>• Real-world projects</li>
                  <li>• Skill development workshops</li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&q=80"
                alt="Research"
                className="rounded-lg shadow-lg w-full"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
                Research & Innovation
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                Our institution is committed to advancing knowledge through cutting-edge research
                and fostering a culture of innovation.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-[#2563EB] text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">State-of-the-art Labs</p>
                    <p className="text-slate-600">
                      Access to modern research facilities and equipment
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-[#2563EB] text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Faculty Guidance</p>
                    <p className="text-slate-600">
                      Mentorship from experienced researchers and professors
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-[#2563EB] text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Funding Opportunities</p>
                    <p className="text-slate-600">
                      Grants and scholarships for promising research projects
                    </p>
                  </div>
                </li>
              </ul>
              <Button
                onClick={() => navigate('/apply')}
                className="bg-[#2563EB] hover:bg-[#1d4ed8] text-white"
              >
                Explore Research Programs
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#2563EB]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <GraduationCap className="w-16 h-16 text-white mx-auto mb-6" />
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Start Your Academic Journey?
            </h2>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              Apply now and join thousands of students pursuing excellence in education
            </p>
            <Button
              size="lg"
              onClick={() => navigate('/apply')}
              className="bg-white text-[#2563EB] hover:bg-slate-100"
            >
              Apply for Admission
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}