import { useState } from 'react';
import { useNavigate } from 'react-router';
import { CarouselHeader } from '../CarouselHeader';
import { Footer } from '../Footer';
import { motion } from 'motion/react';
import { Search, GraduationCap, BookOpen, FlaskConical, Palette, ChevronRight } from 'lucide-react';
import imgDivElementorElement from "figma:asset/5978f08e68df0c3b20a797ddcadc0f9253975076.png";
import imgBnrArrow11 from "figma:asset/13bec648740b03b5c9d2c72567cc9f3e05c47165.png";

const programs = [
  {
    id: 'icom',
    title: 'Intermediate in Commerce (I.Com)',
    level: 'Intermediate',
    department: 'Department of Commerce',
    description: 'The B.Ed. in Curriculum & Instruction program is designed to develop educators who excel in designing effective curriculum and instructional strategies.',
    fullDescription: 'Our Intermediate in Commerce program provides students with comprehensive knowledge of business, accounting, economics, and commercial practices. Students gain practical skills in financial management, taxation, business law, and entrepreneurship, preparing them for careers in commerce, banking, finance, and business administration.',
    image: 'https://images.unsplash.com/photo-1565688527174-775059ac429c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGFjY291bnRpbmclMjBzdHVkZW50cyUyMHN0dWR5aW5nfGVufDF8fHx8MTc3MzU5NTk0NHww&ixlib=rb-4.1.0&q=80&w=1080',
    icon: BookOpen,
    subjects: ['Accountancy', 'Business Studies', 'Economics', 'Mathematics/English'],
    color: 'blue'
  },
  {
    id: 'isc',
    title: 'Intermediate in Science (I.Sc)',
    level: 'Intermediate',
    department: 'Department of Sciences',
    description: 'The M.Ed. in Educational Leadership program is designed to empower educators to assume effective leadership roles in educational settings.',
    fullDescription: 'Our Intermediate in Science program offers rigorous training in Physics, Chemistry, Biology, and Mathematics. Students develop analytical and problem-solving skills essential for careers in medicine, engineering, research, and technology. The program emphasizes laboratory work, scientific methodology, and critical thinking.',
    image: 'https://images.unsplash.com/photo-1676313414325-2a877a95dd10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2llbmNlJTIwbGFib3JhdG9yeSUyMHN0dWRlbnRzJTIwY2hlbWlzdHJ5fGVufDF8fHx8MTc3MzU5NTk0Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    icon: FlaskConical,
    subjects: ['Physics', 'Chemistry', 'Biology/Mathematics', 'English'],
    color: 'green'
  },
  {
    id: 'ia',
    title: 'Intermediate in Arts (I.A)',
    level: 'Intermediate',
    department: 'Department of Arts & Humanities',
    description: 'The B.S. in Educational Leadership program prepares aspiring school leaders, equipping them with the skills to manage schools and engage their communities effectively.',
    fullDescription: 'Our Intermediate in Arts program provides a well-rounded education in humanities, social sciences, and languages. Students explore subjects like History, Political Science, Economics, Sociology, and Literature, developing critical thinking, communication skills, and cultural awareness essential for careers in civil services, law, journalism, and education.',
    image: 'https://images.unsplash.com/photo-1681696533492-4a94d93482ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRzJTIwaHVtYW5pdGllcyUyMHN0dWRlbnRzJTIwbGlicmFyeSUyMHJlYWRpbmd8ZW58MXx8fHwxNzczNTk1OTQ5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    icon: Palette,
    subjects: ['History', 'Political Science', 'Economics', 'Sociology/Psychology', 'English/Hindi'],
    color: 'purple'
  }
];

export function ProgramsPage() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLevel, setSelectedLevel] = useState<string>('all');
  const [selectedDepartment, setSelectedDepartment] = useState<string>('all');

  const filteredPrograms = programs.filter(program => {
    const matchesSearch = program.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         program.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesLevel = selectedLevel === 'all' || program.level === selectedLevel;
    const matchesDepartment = selectedDepartment === 'all' || program.department === selectedDepartment;
    
    return matchesSearch && matchesLevel && matchesDepartment;
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <CarouselHeader />

      {/* Hero Banner Section */}
      <section className="relative h-[385px] overflow-hidden">
        {/* Background with imported texture */}
        <div className="absolute inset-0">
          <div className="absolute bg-[#0c5776] inset-0" />
          <div className="absolute inset-0 overflow-hidden">
            <img 
              alt="" 
              className="absolute h-full left-0 max-w-none top-0 w-[115.51%] object-cover opacity-30" 
              src={imgDivElementorElement} 
            />
          </div>
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#00192C]/40 to-transparent"></div>

        {/* Decorative Arrow - Bottom Right */}
        <div className="absolute bottom-[60px] right-[140px] z-10 hidden lg:block">
          <img 
            alt="" 
            className="w-[139px] h-[139px]" 
            src={imgBnrArrow11} 
          />
        </div>

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
            <span className="text-white text-base">All Programs</span>
          </div>

          {/* Title */}
          <h1 className="text-5xl font-light text-white mb-5 font-serif">
            All Programs
          </h1>

          {/* Decorative Line */}
          <div className="relative w-full max-w-[480px] h-[1px] bg-white/15 mb-5">
            <div className="absolute left-0 top-0 w-[145px] h-[2px] bg-white"></div>
          </div>

          {/* Description */}
          <p className="text-white/90 text-base leading-7 max-w-3xl">
            Education goes beyond textbooks and classrooms. We believe in empowering students
            <br />
            to explore their passions, challenge conventions, and discover their potential.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="bg-[#F6F4EE] py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Left Sidebar - Filters */}
            <div className="lg:w-80 flex-shrink-0">
              <div className="bg-white rounded-xl p-8 shadow-sm sticky top-8">
                {/* Search */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Filter Programs
                  </h3>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search programs..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                {/* Level Filter */}
                <div className="mb-8">
                  <h4 className="text-base font-semibold text-gray-900 mb-3">
                    Level
                  </h4>
                  <div className="space-y-2">
                    {['all', 'Intermediate'].map(level => (
                      <label key={level} className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="radio"
                          name="level"
                          value={level}
                          checked={selectedLevel === level}
                          onChange={(e) => setSelectedLevel(e.target.value)}
                          className="w-4 h-4 text-blue-600"
                        />
                        <span className="text-gray-700">{level === 'all' ? 'All Levels' : level}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Department Filter */}
                <div className="mb-8">
                  <h4 className="text-base font-semibold text-gray-900 mb-3">
                    Department
                  </h4>
                  <div className="space-y-2">
                    {['all', 'Department of Commerce', 'Department of Sciences', 'Department of Arts & Humanities'].map(dept => (
                      <label key={dept} className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={selectedDepartment === dept || selectedDepartment === 'all'}
                          onChange={() => setSelectedDepartment(dept === selectedDepartment ? 'all' : dept)}
                          className="w-4 h-4 text-blue-600 rounded"
                        />
                        <span className="text-gray-700 text-sm">{dept === 'all' ? 'All Departments' : dept}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Show More */}
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedLevel('all');
                    setSelectedDepartment('all');
                  }}
                  className="text-blue-600 font-semibold text-sm hover:underline"
                >
                  Clear All Filters
                </button>
              </div>
            </div>

            {/* Right Content Area - Program Cards */}
            <div className="flex-1">
              {/* Results Count */}
              <div className="mb-8">
                <p className="text-gray-600">
                  Total <span className="font-bold text-gray-900">{filteredPrograms.length}</span> results found
                </p>
              </div>

              {/* Program Cards */}
              <div className="space-y-8">
                {filteredPrograms.map((program, index) => (
                  <motion.div
                    key={program.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all"
                  >
                    <div className="flex flex-col md:flex-row">
                      {/* Content */}
                      <div className="flex-1 p-8">
                        {/* Title */}
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                          {program.title}
                        </h3>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-3 mb-4">
                          <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                            {program.level}
                          </span>
                          <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                            {program.department}
                          </span>
                        </div>

                        {/* Description */}
                        <p className="text-gray-600 leading-relaxed mb-4">
                          {program.fullDescription}
                        </p>

                        {/* Subjects */}
                        <div className="mb-6">
                          <h4 className="text-sm font-semibold text-gray-900 mb-2">Core Subjects:</h4>
                          <div className="flex flex-wrap gap-2">
                            {program.subjects.map((subject, idx) => (
                              <span key={idx} className="bg-slate-100 text-slate-700 px-3 py-1 rounded-md text-xs">
                                {subject}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Read More Button */}
                        <button
                          onClick={() => navigate(`/programs/${program.id}`)}
                          className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                        >
                          Read More
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>

                      {/* Image */}
                      <div className="md:w-[320px] relative">
                        <img
                          src={program.image}
                          alt={program.title}
                          className="w-full h-full object-cover min-h-[300px]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
                        <div className="absolute bottom-6 left-6">
                          <program.icon className="w-12 h-12 text-white" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* No Results */}
              {filteredPrograms.length === 0 && (
                <div className="bg-white rounded-2xl p-12 text-center">
                  <GraduationCap className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">No Programs Found</h3>
                  <p className="text-gray-600">Try adjusting your filters to see more results.</p>
                </div>
              )}

              {/* Load More */}
              {/* {filteredPrograms.length > 0 && (
                <div className="mt-12 text-center">
                  <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                    Load More
                  </button>
                </div>
              )} */}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}