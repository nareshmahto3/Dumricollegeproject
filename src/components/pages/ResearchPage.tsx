import { useState } from 'react';
import { useNavigate } from 'react-router';
import { motion } from 'motion/react';
import {
  ChevronRight,
  FlaskConical,
  BookOpen,
  Award,
  Users,
} from 'lucide-react';
import { CarouselHeader } from '../CarouselHeader';
import { Footer } from '../Footer';

const researchAreas = [
  {
    title: 'Science & Technology',
    description: 'Research in physics, chemistry, biology, mathematics, and computer science with modern laboratories.',
    icon: FlaskConical,
  },
  {
    title: 'Social Sciences',
    description: 'Studies in sociology, economics, political science, and regional development.',
    icon: Users,
  },
  {
    title: 'Literature & Languages',
    description: 'Research in Hindi, English, and regional literature, linguistics, and cultural studies.',
    icon: BookOpen,
  },
  {
    title: 'Environmental Studies',
    description: 'Focus on sustainable development, climate change, and environmental conservation.',
    icon: Award,
  },
];

const achievements = [
  '15+ research papers published in national journals annually',
  'State-level recognition for innovation projects',
  'Collaborative research with universities across India',
  'Student participation in national conferences',
];

export function ResearchPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <CarouselHeader />

      {/* Hero Banner Section */}
      <section
        className="relative h-[385px] bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1562411053-c9ac630a5934?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwcmVzZWFyY2glMjBsYWJvcmF0b3J5JTIwc2NpZW5jZXxlbnwxfHx8fDE3NzI0MjE5ODF8MA&ixlib=rb-4.1.0&q=80&w=1080)',
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#00192C]"></div>

        {/* Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-full flex flex-col justify-center pt-20 pb-16">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 mb-5">
            <button
              onClick={() => navigate('/')}
              className="text-white text-base hover:underline"
            >
              Home
            </button>
            <ChevronRight className="w-4 h-4 text-white" />
            <span className="text-white text-base">Research</span>
          </div>

          {/* Title */}
          <h1 className="text-5xl font-light text-white mb-5 font-serif">
            Research at Dumri College
          </h1>

          {/* Decorative Line */}
          <div className="relative w-full max-w-[480px] h-[1px] bg-white/15 mb-5">
            <div className="absolute left-0 top-0 w-[145px] h-[2px] bg-white"></div>
          </div>

          {/* Description */}
          <p className="text-white/90 text-base leading-7 max-w-2xl">
            Advancing knowledge through innovative research and scholarly pursuits
            <br />
            across multiple disciplines.
          </p>
        </div>

        {/* Decorative Circle Element */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-[#FDC72F] opacity-20 blur-xl hidden lg:block"></div>
      </section>

      {/* Main Content Section */}
      <section className="bg-[#F6F4EE] py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-light text-gray-900 mb-5 font-serif leading-tight">
              Fostering Innovation & Discovery
            </h2>
            <p className="text-gray-600 text-base leading-7">
              Dumri College encourages research and innovation across all disciplines. Our faculty and students
              engage in meaningful research that contributes to knowledge, addresses regional challenges, and
              prepares students for advanced studies and professional careers.
            </p>
          </div>

          {/* Research Areas */}
          <div className="max-w-5xl mx-auto mb-16">
            <h2 className="text-3xl font-light text-gray-900 mb-8 font-serif text-center">
              Research Focus Areas
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {researchAreas.map((area, index) => (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#2F584F] rounded-full flex items-center justify-center">
                      <area.icon className="w-6 h-6 text-[#FDC72F]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {area.title}
                      </h3>
                      <p className="text-gray-600 leading-7">
                        {area.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-light text-gray-900 mb-8 font-serif text-center">
              Research Achievements
            </h2>
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="flex items-start gap-3 pb-4 border-b border-gray-100 last:border-0"
                  >
                    <div className="flex-shrink-0 w-6 h-6 bg-[#FDC72F] rounded-full flex items-center justify-center mt-0.5">
                      <Award className="w-3 h-3 text-[#2F584F]" />
                    </div>
                    <p className="text-gray-700 text-lg">{achievement}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Image Gallery */}
          <div className="max-w-5xl mx-auto mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="rounded-2xl overflow-hidden"
              >
                <img
                  src="https://images.unsplash.com/photo-1627560985113-ab67e8031f40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwY2xhc3Nyb29tJTIwbGVjdHVyZSUyMGhhbGx8ZW58MXx8fHwxNzcyNDk3NTUzfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Research Lab"
                  className="w-full h-72 object-cover"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="rounded-2xl overflow-hidden"
              >
                <img
                  src="https://images.unsplash.com/photo-1718327453695-4d32b94c90a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwc3R1ZGVudHMlMjBzdHVkeWluZyUyMGxpYnJhcnl8ZW58MXx8fHwxNzcyNDQ5ODcwfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Students Researching"
                  className="w-full h-72 object-cover"
                />
              </motion.div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-[#2F584F] rounded-2xl p-12 text-center text-white max-w-4xl mx-auto">
            <h3 className="text-3xl font-light font-serif mb-4">
              Join Our Research Community
            </h3>
            <p className="text-white/90 leading-7 mb-8">
              Interested in pursuing research? Connect with our faculty to explore opportunities
              in your field of interest.
            </p>
            <button
              onClick={() => navigate('/contact')}
              className="bg-[#FDC72F] hover:bg-[#e5b829] text-[#2F584F] font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}