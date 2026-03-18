import { useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { CarouselHeader } from '../CarouselHeader';
import { Footer } from '../Footer';
import { motion } from 'motion/react';
import { ChevronRight, Users, Clock, TrendingUp, Globe, BookOpen, FileText, DollarSign, CheckCircle } from 'lucide-react';

const programsData = {
  'icom': {
    id: 'icom',
    title: 'Intermediate in Commerce (I.Com)',
    shortTitle: 'I.Com',
    level: 'Intermediate',
    department: 'Department of Commerce',
    tagline: 'Education goes beyond textbooks and classrooms. We believe in empowering students to explore their passions, challenge conventions, and discover their potential.',
    bannerImage: 'https://images.unsplash.com/photo-1565688527174-775059ac429c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGFjY291bnRpbmclMjBzdHVkZW50cyUyMHN0dWR5aW5nfGVufDF8fHx8MTc3MzU5NTk0NHww&ixlib=rb-4.1.0&q=80&w=1080',
    sideImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
    highlights: [
      { icon: Users, label: 'Faculty', value: 'Education' },
      { icon: Clock, label: 'Duration', value: '2 Years' },
      { icon: TrendingUp, label: 'Faculty to Student', value: '1:25' },
      { icon: Globe, label: 'Exchange Format', value: 'Yes' }
    ],
    overview: {
      intro: 'Our university offers a comprehensive range of academic programs designed to inspire learning, innovation and real-world impact. Each program is carefully crafted to blend theoretical knowledge with practical experience and emphasize equity. These programs also offer insights into today\'s competitive global environment from foundations undergraduate courses to advanced postgraduate and professional degrees. Our curriculum emphasizes critical thinking, hands-on learning, and industry relevance. We guidance from experienced faculty access to modern laboratories and opportunities for both research and internships students are empowered.',
      programName: 'Intermediate in Commerce (2 Years)',
      programDescription: 'A 2-year I.Com program provides students with comprehensive knowledge of business, accounting, economics, and commercial practices.',
      details: [
        { label: 'Duration', value: '2 Years (2 Semesters)' },
        { label: 'Total Credits', value: 'Marks for Admission (Min. 40–50 credits)' },
        { label: 'Structure', value: 'Primarily focused on taught modules (with) universities may require project or dissertation completion over two summer.' }
      ]
    },
    curriculum: {
      intro: 'The curriculum is structured to provide a comprehensive understanding of commerce, business, and economic principles.',
      subjects: [
        'Principles of Accounting',
        'Business Economics',
        'Business Law',
        'Mathematics for Commerce',
        'English Language & Communication'
      ],
      structure: [
        'Accountancy',
        'Business Studies',
        'Economics',
        'Mathematics/English',
        'Computer Applications'
      ],
      coreModules: [
        'Theory of Statistics Inference, Advanced Probability Theory, Foundations of Statistics',
        'Course Modules with Regression-based Linear Models, Machine Learning, Advanced Data Analysis',
        'Business Analytics, Time Series Analysis',
        'Additional Programming (e.g., R and Python), Statistical Computing, Data Science Methods',
        'Time Series Analysis, Design and Analysis of Econometric Sampling Times',
        'Statistical Machine Learning, Advanced Probability Theory, Data Science Methods'
      ]
    },
    professors: {
      intro: 'Our experienced faculty members bring decades of industry and academic expertise to guide students.',
      list: [
        { name: 'Dr. Rajesh Kumar', designation: 'Professor of Commerce', experience: '15 years' },
        { name: 'Prof. Anjali Sharma', designation: 'Associate Professor', experience: '12 years' },
        { name: 'Dr. Vikram Singh', designation: 'Assistant Professor', experience: '8 years' }
      ]
    },
    costAndAid: {
      tuitionFee: '₹15,000 - ₹25,000 per year',
      otherFees: '₹2,000 - ₹5,000 (Registration, Library, Sports)',
      totalEstimate: '₹17,000 - ₹30,000 per year',
      scholarships: [
        'Merit-based scholarships for top performers',
        'Need-based financial aid for economically disadvantaged students',
        'Government scholarships (SC/ST/OBC)',
        'Minority scholarships'
      ]
    },
    admissions: {
      eligibility: 'Students must have completed Class 10 (Matriculation) with minimum 50% marks',
      process: [
        'Submit online application form',
        'Upload required documents (10th marksheet, transfer certificate)',
        'Appear for entrance test (if applicable)',
        'Attend counseling session',
        'Complete admission formalities and pay fees'
      ],
      documents: [
        '10th Class Marksheet and Certificate',
        'Transfer Certificate',
        'Character Certificate',
        'Caste Certificate (if applicable)',
        'Income Certificate (for scholarships)',
        'Passport size photographs'
      ]
    }
  },
  'isc': {
    id: 'isc',
    title: 'Intermediate in Science (I.Sc)',
    shortTitle: 'I.Sc',
    level: 'Intermediate',
    department: 'Department of Sciences',
    tagline: 'Discover the world of science through rigorous academic training and hands-on laboratory experience.',
    bannerImage: 'https://images.unsplash.com/photo-1676313414325-2a877a95dd10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2llbmNlJTIwbGFib3JhdG9yeSUyMHN0dWRlbnRzJTIwY2hlbWlzdHJ5fGVufDF8fHx8MTc3MzU5NTk0Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    sideImage: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&q=80',
    highlights: [
      { icon: Users, label: 'Faculty', value: 'Sciences' },
      { icon: Clock, label: 'Duration', value: '2 Years' },
      { icon: TrendingUp, label: 'Faculty to Student', value: '1:20' },
      { icon: Globe, label: 'Lab Access', value: 'Full Time' }
    ],
    overview: {
      intro: 'Our Science program provides rigorous training in Physics, Chemistry, Biology, and Mathematics. Students develop analytical and problem-solving skills essential for careers in medicine, engineering, research, and technology. The program emphasizes laboratory work, scientific methodology, and critical thinking.',
      programName: 'Intermediate in Science (2 Years)',
      programDescription: 'A 2-year I.Sc program offering comprehensive scientific education with focus on Physics, Chemistry, Biology, and Mathematics.',
      details: [
        { label: 'Duration', value: '2 Years (2 Semesters)' },
        { label: 'Total Credits', value: 'Minimum 40-50 credits' },
        { label: 'Structure', value: 'Theory classes combined with extensive laboratory practical sessions and project work' }
      ]
    },
    curriculum: {
      intro: 'The curriculum balances theoretical knowledge with practical laboratory experience.',
      subjects: [
        'Physics',
        'Chemistry',
        'Biology/Mathematics',
        'English Language',
        'Computer Science (Optional)'
      ],
      structure: [
        'Physics - Mechanics, Thermodynamics, Optics',
        'Chemistry - Organic, Inorganic, Physical',
        'Biology - Botany, Zoology, Genetics',
        'Mathematics - Calculus, Algebra, Trigonometry',
        'Laboratory Practicals'
      ],
      coreModules: [
        'Advanced Physics - Quantum Mechanics, Electromagnetism',
        'Organic and Inorganic Chemistry',
        'Cell Biology and Genetics',
        'Analytical Mathematics and Statistics',
        'Laboratory Techniques and Scientific Method',
        'Research Methodology and Project Work'
      ]
    },
    professors: {
      intro: 'Learn from experienced scientists and educators dedicated to student success.',
      list: [
        { name: 'Dr. Sunita Verma', designation: 'Professor of Physics', experience: '18 years' },
        { name: 'Dr. Anil Jha', designation: 'Professor of Chemistry', experience: '15 years' },
        { name: 'Prof. Meera Devi', designation: 'Associate Professor of Biology', experience: '10 years' }
      ]
    },
    costAndAid: {
      tuitionFee: '₹18,000 - ₹30,000 per year',
      otherFees: '₹3,000 - ₹6,000 (Lab fees, Library, Registration)',
      totalEstimate: '₹21,000 - ₹36,000 per year',
      scholarships: [
        'Science talent scholarships',
        'Merit-based scholarships',
        'Government scholarships for SC/ST/OBC students',
        'Financial aid for economically weaker sections'
      ]
    },
    admissions: {
      eligibility: 'Students must have completed Class 10 with minimum 55% marks (with Science and Math)',
      process: [
        'Online application submission',
        'Document verification',
        'Entrance test (Mathematics and Science)',
        'Merit list publication',
        'Admission and fee payment'
      ],
      documents: [
        '10th Class Marksheet with Science subjects',
        'Transfer Certificate',
        'Character Certificate',
        'Medical Fitness Certificate',
        'Caste/Income Certificate (if applicable)',
        'Recent passport photographs'
      ]
    }
  },
  'ia': {
    id: 'ia',
    title: 'Intermediate in Arts (I.A)',
    shortTitle: 'I.A',
    level: 'Intermediate',
    department: 'Department of Arts & Humanities',
    tagline: 'Explore the rich world of humanities, social sciences, and develop critical thinking for diverse career paths.',
    bannerImage: 'https://images.unsplash.com/photo-1681696533492-4a94d93482ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRzJTIwaHVtYW5pdGllcyUyMHN0dWRlbnRzJTIwbGlicmFyeSUyMHJlYWRpbmd8ZW58MXx8fHwxNzczNTk1OTQ5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    sideImage: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&q=80',
    highlights: [
      { icon: Users, label: 'Faculty', value: 'Arts & Humanities' },
      { icon: Clock, label: 'Duration', value: '2 Years' },
      { icon: TrendingUp, label: 'Faculty to Student', value: '1:30' },
      { icon: Globe, label: 'Language Options', value: 'Multiple' }
    ],
    overview: {
      intro: 'Our Arts program provides a well-rounded education in humanities, social sciences, and languages. Students explore subjects like History, Political Science, Economics, Sociology, and Literature, developing critical thinking, communication skills, and cultural awareness essential for careers in civil services, law, journalism, and education.',
      programName: 'Intermediate in Arts (2 Years)',
      programDescription: 'A 2-year I.A program offering comprehensive education in humanities and social sciences.',
      details: [
        { label: 'Duration', value: '2 Years (2 Semesters)' },
        { label: 'Total Credits', value: 'Minimum 40-50 credits' },
        { label: 'Structure', value: 'Theory-based curriculum with emphasis on critical analysis, research, and communication' }
      ]
    },
    curriculum: {
      intro: 'The curriculum develops critical thinking and analytical skills across multiple disciplines.',
      subjects: [
        'History',
        'Political Science',
        'Economics',
        'Sociology/Psychology',
        'English/Hindi Literature'
      ],
      structure: [
        'History - Ancient, Medieval, Modern',
        'Political Science - Indian Polity, International Relations',
        'Economics - Micro and Macro Economics',
        'Sociology - Social Structures, Cultural Studies',
        'Languages - English and Hindi/Regional Language'
      ],
      coreModules: [
        'Indian History and Culture',
        'Political Theories and Governance',
        'Economic Development and Policy',
        'Sociological Perspectives',
        'Literature and Communication Skills',
        'Research Methods in Social Sciences'
      ]
    },
    professors: {
      intro: 'Our faculty comprises experienced educators passionate about humanities and social sciences.',
      list: [
        { name: 'Dr. Ramesh Yadav', designation: 'Professor of History', experience: '20 years' },
        { name: 'Prof. Kavita Singh', designation: 'Associate Professor of Political Science', experience: '14 years' },
        { name: 'Dr. Priya Kumari', designation: 'Assistant Professor of Economics', experience: '9 years' }
      ]
    },
    costAndAid: {
      tuitionFee: '₹12,000 - ₹20,000 per year',
      otherFees: '₹2,000 - ₹4,000 (Library, Registration, Examination)',
      totalEstimate: '₹14,000 - ₹24,000 per year',
      scholarships: [
        'Merit scholarships for high achievers',
        'Financial assistance for economically disadvantaged',
        'SC/ST/OBC government scholarships',
        'Minority welfare scholarships'
      ]
    },
    admissions: {
      eligibility: 'Students must have completed Class 10 with minimum 45% marks',
      process: [
        'Fill online/offline application form',
        'Submit required documents',
        'Attend counseling (if required)',
        'Pay admission fees',
        'Complete enrollment process'
      ],
      documents: [
        '10th Class Marksheet and Certificate',
        'Transfer Certificate from previous school',
        'Character Certificate',
        'Caste Certificate (if claiming reservation)',
        'Income Certificate (for fee concession)',
        'Passport size photographs'
      ]
    }
  }
};

export function ProgramDetailPage() {
  const navigate = useNavigate();
  const { programId } = useParams<{ programId: string }>();
  const [activeTab, setActiveTab] = useState<'overview' | 'curriculum' | 'professors' | 'cost' | 'admissions'>('overview');

  const program = programId ? programsData[programId as keyof typeof programsData] : null;

  if (!program) {
    return (
      <div className="min-h-screen bg-white">
        <CarouselHeader />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Program Not Found</h1>
          <button
            onClick={() => navigate('/programs')}
            className="text-blue-600 hover:underline"
          >
            Back to All Programs
          </button>
        </div>
        <Footer />
      </div>
    );
  }

  const tabs = [
    { id: 'overview', label: 'Overview', icon: BookOpen },
    { id: 'curriculum', label: 'Curriculum', icon: FileText },
    { id: 'professors', label: 'Program Professors', icon: Users },
    { id: 'cost', label: 'Cost & Financial Aid', icon: DollarSign },
    { id: 'admissions', label: 'Admissions', icon: CheckCircle }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <CarouselHeader />

      {/* Hero Banner */}
      <section
        className="relative h-[300px] bg-cover bg-center"
        style={{ backgroundImage: `url(${program.bannerImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/90 to-blue-900/80"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-full flex flex-col justify-center pt-20">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 mb-4 text-sm">
            <button onClick={() => navigate('/')} className="text-white hover:underline">
              Home
            </button>
            <ChevronRight className="w-4 h-4 text-white" />
            <button onClick={() => navigate('/programs')} className="text-white hover:underline">
              Programs
            </button>
            <ChevronRight className="w-4 h-4 text-white" />
            <span className="text-white">{program.level}</span>
            <ChevronRight className="w-4 h-4 text-white" />
            <span className="text-white">{program.shortTitle}</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-light text-white mb-4 font-serif">
            {program.title}
          </h1>

          {/* Tagline */}
          <p className="text-white/90 text-base max-w-3xl leading-relaxed">
            {program.tagline}
          </p>
        </div>
      </section>

      {/* Tabs Navigation */}
      <section className="bg-white border-b sticky top-0 z-40 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-6 py-4 text-sm font-medium whitespace-nowrap transition-colors border-b-2 ${
                  activeTab === tab.id
                    ? 'border-blue-600 text-blue-600 bg-blue-50'
                    : 'border-transparent text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tab Content */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="max-w-6xl">
                {/* Program Highlights */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
                  {program.highlights.map((highlight, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-xl shadow-sm text-center">
                      <highlight.icon className="w-10 h-10 text-blue-600 mx-auto mb-3" />
                      <h4 className="text-sm font-semibold text-gray-900 mb-1">{highlight.label}</h4>
                      <p className="text-sm text-gray-600">{highlight.value}</p>
                    </div>
                  ))}
                </div>

                {/* About Programs Section */}
                <div className="mb-12">
                  <h2 className="text-3xl font-light text-gray-900 mb-6">About Programs</h2>
                  <p className="text-gray-700 leading-relaxed mb-8">{program.overview.intro}</p>

                  <div className="flex flex-col lg:flex-row gap-8">
                    <div className="flex-1">
                      <div className="bg-white p-8 rounded-xl shadow-sm">
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">
                          {program.overview.programName}
                        </h3>
                        <p className="text-gray-700 mb-6">{program.overview.programDescription}</p>

                        <div className="space-y-3">
                          {program.overview.details.map((detail, idx) => (
                            <div key={idx}>
                              <span className="font-semibold text-gray-900">• {detail.label}:</span>{' '}
                              <span className="text-gray-700">{detail.value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="lg:w-96">
                      <img
                        src={program.sideImage}
                        alt={program.title}
                        className="w-full h-full object-cover rounded-xl shadow-lg min-h-[300px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Curriculum Tab */}
          {activeTab === 'curriculum' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl"
            >
              <h2 className="text-3xl font-light text-gray-900 mb-6">Curriculum</h2>
              <p className="text-gray-700 leading-relaxed mb-8">{program.curriculum.intro}</p>

              <div className="bg-white p-8 rounded-xl shadow-sm mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Core Subjects</h3>
                <ul className="space-y-2">
                  {program.curriculum.subjects.map((subject, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{subject}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Program Structure</h3>
                <ul className="space-y-2">
                  {program.curriculum.structure.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-blue-600 font-semibold">•</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-blue-50 p-8 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Core Curriculum</h3>
                <ul className="space-y-3">
                  {program.curriculum.coreModules.map((module, idx) => (
                    <li key={idx} className="text-gray-700">
                      {module}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}

          {/* Professors Tab */}
          {activeTab === 'professors' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl"
            >
              <h2 className="text-3xl font-light text-gray-900 mb-6">Program Professors</h2>
              <p className="text-gray-700 leading-relaxed mb-8">{program.professors.intro}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {program.professors.list.map((prof, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-xl shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{prof.name}</h3>
                    <p className="text-blue-600 font-medium mb-1">{prof.designation}</p>
                    <p className="text-gray-600 text-sm">Experience: {prof.experience}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Cost & Financial Aid Tab */}
          {activeTab === 'cost' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl"
            >
              <h2 className="text-3xl font-light text-gray-900 mb-6">Cost & Financial Aid</h2>

              <div className="bg-white p-8 rounded-xl shadow-sm mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Fee Structure</h3>
                <div className="space-y-3">
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-gray-700 font-medium">Tuition Fee</span>
                    <span className="text-gray-900 font-semibold">{program.costAndAid.tuitionFee}</span>
                  </div>
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-gray-700 font-medium">Other Fees</span>
                    <span className="text-gray-900 font-semibold">{program.costAndAid.otherFees}</span>
                  </div>
                  <div className="flex justify-between py-3 bg-blue-50 px-4 rounded-lg">
                    <span className="text-gray-900 font-bold">Total Estimated Cost</span>
                    <span className="text-blue-600 font-bold">{program.costAndAid.totalEstimate}</span>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-8 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Available Scholarships</h3>
                <ul className="space-y-3">
                  {program.costAndAid.scholarships.map((scholarship, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{scholarship}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}

          {/* Admissions Tab */}
          {activeTab === 'admissions' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl"
            >
              <h2 className="text-3xl font-light text-gray-900 mb-6">Admissions</h2>

              <div className="bg-white p-8 rounded-xl shadow-sm mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Eligibility Criteria</h3>
                <p className="text-gray-700">{program.admissions.eligibility}</p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Admission Process</h3>
                <ol className="space-y-3">
                  {program.admissions.process.map((step, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                        {idx + 1}
                      </span>
                      <span className="text-gray-700 pt-0.5">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="bg-blue-50 p-8 rounded-xl mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Required Documents</h3>
                <ul className="space-y-2">
                  {program.admissions.documents.map((doc, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="text-center">
                <button
                  onClick={() => navigate('/apply')}
                  className="bg-blue-600 text-white px-10 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center gap-2"
                >
                  Apply Now
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
