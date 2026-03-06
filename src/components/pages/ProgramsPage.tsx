import { useNavigate } from 'react-router';
import { useState } from 'react';
import { motion } from 'motion/react';
import {
  GraduationCap,
  Building2,
  Briefcase,
  Microscope,
  BookOpen,
  CheckCircle2,
  Clock,
  Users,
  ArrowRight,
  ChevronRight,
} from 'lucide-react';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { CarouselHeader } from '../CarouselHeader';
import { Footer } from '../Footer';

const programs = [
  {
    category: 'Engineering & Technology',
    icon: Building2,
    color: 'blue',
    courses: [
      {
        name: 'B.Tech in Computer Science & Engineering',
        duration: '4 Years',
        seats: 120,
        eligibility: '10+2 with Physics, Chemistry, Mathematics',
        fee: '₹1.5L per year',
      },
      {
        name: 'B.Tech in Mechanical Engineering',
        duration: '4 Years',
        seats: 90,
        eligibility: '10+2 with PCM',
        fee: '₹1.2L per year',
      },
      {
        name: 'B.Tech in Civil Engineering',
        duration: '4 Years',
        seats: 60,
        eligibility: '10+2 with PCM',
        fee: '₹1.2L per year',
      },
      {
        name: 'B.Tech in Electronics & Communication',
        duration: '4 Years',
        seats: 90,
        eligibility: '10+2 with PCM',
        fee: '₹1.4L per year',
      },
    ],
  },
  {
    category: 'Management & Business',
    icon: Briefcase,
    color: 'blue',
    courses: [
      {
        name: 'MBA (Master of Business Administration)',
        duration: '2 Years',
        seats: 120,
        eligibility: 'Graduation with 50% marks',
        fee: '₹3L per year',
      },
      {
        name: 'BBA (Bachelor of Business Administration)',
        duration: '3 Years',
        seats: 60,
        eligibility: '10+2 in any stream',
        fee: '₹80K per year',
      },
    ],
  },
  {
    category: 'Sciences',
    icon: Microscope,
    color: 'blue',
    courses: [
      {
        name: 'B.Sc in Physics',
        duration: '3 Years',
        seats: 40,
        eligibility: '10+2 with Science',
        fee: '₹50K per year',
      },
      {
        name: 'B.Sc in Chemistry',
        duration: '3 Years',
        seats: 40,
        eligibility: '10+2 with Science',
        fee: '₹50K per year',
      },
      {
        name: 'B.Sc in Mathematics',
        duration: '3 Years',
        seats: 30,
        eligibility: '10+2 with Mathematics',
        fee: '₹45K per year',
      },
    ],
  },
  {
    category: 'Arts & Humanities',
    icon: BookOpen,
    color: 'blue',
    courses: [
      {
        name: 'BA in English Literature',
        duration: '3 Years',
        seats: 40,
        eligibility: '10+2 in any stream',
        fee: '₹40K per year',
      },
      {
        name: 'BA in Economics',
        duration: '3 Years',
        seats: 50,
        eligibility: '10+2 in any stream',
        fee: '₹45K per year',
      },
      {
        name: 'BA in Psychology',
        duration: '3 Years',
        seats: 35,
        eligibility: '10+2 in any stream',
        fee: '₹42K per year',
      },
    ],
  },
];

export function ProgramsPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <CarouselHeader />

      {/* Hero Banner Section */}
      <section
        className="relative h-[385px] bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1080&q=80)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#0C4D8B]/80 to-[#00192C]/90"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-full flex flex-col justify-center pt-20 pb-16">
          <div className="flex items-center gap-2 mb-5">
            <button onClick={() => navigate('/')} className="text-white text-base hover:underline">
              Home
            </button>
            <ChevronRight className="w-4 h-4 text-white" />
            <span className="text-white text-base">Academic Programs</span>
          </div>

          <h1 className="text-5xl font-light text-white mb-5 font-serif">
            Academic Programs
          </h1>

          <div className="relative w-full max-w-[480px] h-[1px] bg-white/15 mb-5">
            <div className="absolute left-0 top-0 h-full w-[145px] bg-[#FDC72F]"></div>
          </div>

          <p className="text-white/90 text-base leading-7 max-w-2xl">
            Choose from our wide range of undergraduate and postgraduate programs designed
            to prepare you for success in your chosen field.
          </p>
        </div>

        <div className="absolute right-8 top-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-[#FDC72F] opacity-20 blur-xl hidden lg:block"></div>
      </section>

      {/* Programs */}
      {programs.map((program, index) => (
        <section key={index} className={`py-20 ${index % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-12"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#2563EB] flex items-center justify-center">
                <program.icon className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-slate-900">{program.category}</h2>
                <p className="text-slate-500">{program.courses.length} programs available</p>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {program.courses.map((course, courseIndex) => (
                <motion.div
                  key={courseIndex}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: courseIndex * 0.1 }}
                >
                  <Card className="p-6 hover:shadow-xl transition-shadow border border-slate-200 hover:border-[#2563EB]/30">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-slate-900 mb-3">{course.name}</h3>
                        <div className="flex flex-wrap gap-2 mb-4">
                          <Badge className="bg-blue-50 text-[#2563EB] border-blue-200">
                            <Clock className="w-3 h-3 mr-1" />
                            {course.duration}
                          </Badge>
                          <Badge className="bg-blue-50 text-[#2563EB] border-blue-200">
                            <Users className="w-3 h-3 mr-1" />
                            {course.seats} Seats
                          </Badge>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#2563EB] flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-xs text-slate-500">Eligibility</p>
                          <p className="text-sm text-slate-700">{course.eligibility}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#2563EB] flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-xs text-slate-500">Annual Fee</p>
                          <p className="text-sm text-slate-700">{course.fee}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <Button
                        onClick={() => navigate('/apply')}
                        className="flex-1 bg-[#2563EB] hover:bg-[#1d4ed8] text-white"
                      >
                        Apply Now
                      </Button>
                      <Button variant="outline" className="flex-1 border-[#2563EB] text-[#2563EB] hover:bg-blue-50">
                        Download Syllabus
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#2563EB] to-[#1e40af] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Start Your Journey?</h2>
              <p className="text-blue-100 text-lg mb-8">
                Apply now for admission 2026-27 and take the first step towards your dream career
              </p>
              <Button
                size="lg"
                onClick={() => navigate('/apply')}
                className="bg-white text-[#2563EB] hover:bg-blue-50 px-8 py-6 text-lg"
              >
                Apply for Admission 2026-27
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
