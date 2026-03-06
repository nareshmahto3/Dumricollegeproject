import { useState } from 'react';
import { useNavigate } from 'react-router';
import { motion } from 'motion/react';
import {
  Search,
  Download,
  BookOpen,
  Award,
  Clock,
  Users,
  ChevronRight,
} from 'lucide-react';
import { CarouselHeader } from '../CarouselHeader';
import { Footer } from '../Footer';
import { Button } from '../ui/button';
import { Card } from '../ui/card';

export function CourseCatalogPage() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFaculty, setSelectedFaculty] = useState('All');

  const faculties = ['All', 'Engineering', 'Sciences', 'Arts', 'Commerce', 'Education'];

  const courses = [
    {
      code: 'CSE101',
      name: 'Introduction to Programming',
      faculty: 'Engineering',
      credits: 4,
      duration: '1 Semester',
      level: 'Undergraduate',
      description: 'Fundamentals of programming using Python and C++',
    },
    {
      code: 'PHY201',
      name: 'Quantum Mechanics',
      faculty: 'Sciences',
      credits: 4,
      duration: '1 Semester',
      level: 'Postgraduate',
      description: 'Advanced quantum theory and applications',
    },
    {
      code: 'ENG101',
      name: 'English Literature',
      faculty: 'Arts',
      credits: 3,
      duration: '1 Semester',
      level: 'Undergraduate',
      description: 'Classic and contemporary English literature',
    },
    {
      code: 'COM201',
      name: 'Financial Accounting',
      faculty: 'Commerce',
      credits: 4,
      duration: '1 Semester',
      level: 'Undergraduate',
      description: 'Principles and practices of accounting',
    },
    {
      code: 'EDU101',
      name: 'Educational Psychology',
      faculty: 'Education',
      credits: 3,
      duration: '1 Semester',
      level: 'Undergraduate',
      description: 'Psychological foundations of education',
    },
    {
      code: 'CSE301',
      name: 'Artificial Intelligence',
      faculty: 'Engineering',
      credits: 4,
      duration: '1 Semester',
      level: 'Postgraduate',
      description: 'Machine learning, neural networks, and AI applications',
    },
    {
      code: 'CHE101',
      name: 'Organic Chemistry',
      faculty: 'Sciences',
      credits: 4,
      duration: '1 Semester',
      level: 'Undergraduate',
      description: 'Structure, properties, and reactions of organic compounds',
    },
    {
      code: 'HIS201',
      name: 'Modern Indian History',
      faculty: 'Arts',
      credits: 3,
      duration: '1 Semester',
      level: 'Undergraduate',
      description: 'India from 1857 to independence and beyond',
    },
    {
      code: 'MBA501',
      name: 'Strategic Management',
      faculty: 'Commerce',
      credits: 4,
      duration: '1 Semester',
      level: 'Postgraduate',
      description: 'Business strategy formulation and implementation',
    },
    {
      code: 'EDU301',
      name: 'Curriculum Design',
      faculty: 'Education',
      credits: 3,
      duration: '1 Semester',
      level: 'Postgraduate',
      description: 'Principles and practices of curriculum development',
    },
  ];

  const filteredCourses = courses.filter((course) => {
    const matchesSearch =
      course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.code.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFaculty =
      selectedFaculty === 'All' || course.faculty === selectedFaculty;
    return matchesSearch && matchesFaculty;
  });

  return (
    <div className="min-h-screen bg-white">
      <CarouselHeader />

      <section
        className="relative h-[385px] bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=1920&q=80)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#2F584F]/80 to-[#00192C]/90"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-full flex flex-col justify-center pt-20 pb-16">
          <div className="flex items-center gap-2 mb-5">
            <button onClick={() => navigate('/')} className="text-white text-base hover:underline">
              Home
            </button>
            <ChevronRight className="w-4 h-4 text-white" />
            <button onClick={() => navigate('/academics')} className="text-white text-base hover:underline">
              Academics
            </button>
            <ChevronRight className="w-4 h-4 text-white" />
            <span className="text-white text-base">Course Catalog</span>
          </div>

          <h1 className="text-5xl font-light text-white mb-5 font-serif">
            Course Catalog
          </h1>

          <div className="relative w-full max-w-[480px] h-[1px] bg-white/15 mb-5">
            <div className="absolute left-0 top-0 h-full w-[120px] bg-[#FDC72F]"></div>
          </div>

          <p className="text-white/90 text-lg max-w-2xl leading-relaxed">
            Explore our comprehensive course offerings across all faculties
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              {/* Search */}
              <div className="md:col-span-2">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search courses by name or code..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 rounded-lg border-2 border-slate-200 focus:border-[#2563EB] focus:outline-none text-base"
                  />
                </div>
              </div>

              {/* Filter */}
              <div>
                <select
                  value={selectedFaculty}
                  onChange={(e) => setSelectedFaculty(e.target.value)}
                  className="w-full px-4 py-4 rounded-lg border-2 border-slate-200 focus:border-[#2563EB] focus:outline-none text-base appearance-none bg-white cursor-pointer"
                >
                  {faculties.map((faculty) => (
                    <option key={faculty} value={faculty}>
                      {faculty === 'All' ? 'All Faculties' : faculty}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between">
              <p className="text-slate-600">
                Showing <span className="font-semibold">{filteredCourses.length}</span> courses
              </p>
              <Button variant="outline" className="gap-2">
                <Download className="w-4 h-4" />
                Download Full Catalog
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Courses List */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto space-y-6">
            {filteredCourses.length > 0 ? (
              filteredCourses.map((course, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <Card className="p-6 hover:shadow-xl transition-all border-0 bg-gradient-to-br from-white to-slate-50">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="px-3 py-1 bg-[#2563EB] text-white text-sm font-semibold rounded">
                            {course.code}
                          </span>
                          <span className="px-3 py-1 bg-slate-200 text-slate-700 text-sm font-semibold rounded">
                            {course.faculty}
                          </span>
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-2">{course.name}</h3>
                        <p className="text-slate-600 mb-4">{course.description}</p>

                        <div className="flex flex-wrap items-center gap-6 text-sm text-slate-600">
                          <div className="flex items-center gap-2">
                            <Award className="w-4 h-4 text-[#2563EB]" />
                            <span>{course.credits} Credits</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-[#2563EB]" />
                            <span>{course.duration}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Users className="w-4 h-4 text-[#2563EB]" />
                            <span>{course.level}</span>
                          </div>
                        </div>
                      </div>

                      <Button
                        onClick={() => navigate('/apply')}
                        className="bg-[#2563EB] text-white hover:bg-blue-700"
                      >
                        View Details
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              ))
            ) : (
              <Card className="p-12 text-center">
                <BookOpen className="w-16 h-16 text-slate-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-slate-600 mb-2">No courses found</h3>
                <p className="text-slate-500">Try adjusting your search or filter criteria</p>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-[#2563EB] to-[#1e40af] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Enroll?</h2>
            <p className="text-lg text-blue-100 mb-8">
              Start your academic journey at Dumri College with our world-class programs.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                onClick={() => navigate('/apply')}
                className="bg-white text-[#2563EB] hover:bg-blue-50 px-8 py-6 text-lg"
              >
                Apply Now
              </Button>
              <Button
                onClick={() => navigate('/contact')}
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg"
              >
                Contact Admissions
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}