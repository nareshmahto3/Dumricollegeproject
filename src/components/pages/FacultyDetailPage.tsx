import { useParams, useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { ChevronRight, Mail, Phone, GraduationCap, BookOpen, Award, Users, Building2, Calendar, Linkedin, Twitter, Globe } from 'lucide-react';
import { CarouselHeader } from '../CarouselHeader';
import { Footer } from '../Footer';
import imgDivElementorElement from "figma:asset/3d5000040b465c89cecd0e435b2d96dd8f3c2294.png";
import imgBnrArrow11 from "figma:asset/13bec648740b03b5c9d2c72567cc9f3e05c47165.png";
import imgEBlTeam1MinJpg from "figma:asset/a1adb3e4cc61a600187de60fe0db91d01d53e7dc.png";
import imgEBlTeam2MinJpg from "figma:asset/fa187de29ccf07a8d4687dde792b50b1204cb82d.png";
import imgEBlTeam3MinJpg from "figma:asset/ea5e374afdef5a39657cdb7a5e8b48d51f87804b.png";
import imgEBlTeam4MinJpg from "figma:asset/b7ea4e98b4ed4e693ac9a4930e33a56bfa859a17.png";
import imgEBlTeam5MinJpg from "figma:asset/6a19a7b5276ff89a91342cda34f8b9bd14837b3c.png";
import imgEBlTeam6MinJpg from "figma:asset/832a564969d97ad9368108a4bf17401f3a6a3dde.png";
import imgCapManMin from "figma:asset/9cb091869a92595f861d51ef738437bd7aafa65c.png";
import imgAwardWin1Min from "figma:asset/6c35012f40f1cec33e961cafd30da1aa4f6f338c.png";
import imgAwardWin2Min from "figma:asset/44d160b9127c1374c2c22e310fe22b15598e6417.png";
import imgAwardWin3Min from "figma:asset/28d031cb8ed7fad993a505b823122a14a9dc4e7e.png";
import imgAwardWin4Min from "figma:asset/1da4d1b3bdc122541806c2db61e0bfeeb9456aa7.png";

interface FacultyMember {
  id: string;
  name: string;
  position: string;
  department: string;
  image: string;
  email?: string;
  phone?: string;
  education?: string;
  bio?: string;
  specialization?: string[];
  experience?: string;
  achievements?: string[];
  publications?: string[];
  courses?: string[];
  officeHours?: string;
  researchInterests?: string[];
  linkedin?: string;
  twitter?: string;
  website?: string;
}

const facultyData: { [key: string]: FacultyMember } = {
  '1': {
    id: '1',
    name: 'Kathryn Murphy',
    position: 'Support Teacher',
    department: 'Commerce',
    image: imgEBlTeam1MinJpg,
    email: 'kathryn.murphy@dumricollege.edu',
    phone: '+91 9876543210',
    education: 'M.Com, B.Ed',
    bio: 'Kathryn Murphy is a dedicated support teacher with over 8 years of experience in commerce education. She specializes in financial accounting and business studies, helping students develop strong analytical and problem-solving skills. Her teaching philosophy emphasizes practical application and real-world business scenarios.',
    specialization: ['Financial Accounting', 'Business Studies', 'Economics', 'Taxation'],
    experience: '8+ years in Commerce Education',
    achievements: [
      'Best Support Teacher Award 2023',
      'Published 5+ research papers on commerce education',
      'Successfully mentored 200+ students',
      'Developed innovative teaching modules for accounting'
    ],
    publications: [
      'Modern Approaches to Financial Accounting Education (2023)',
      'Business Studies in Digital Age (2022)',
      'Taxation Simplified for Students (2021)'
    ],
    courses: ['Financial Accounting I & II', 'Business Studies', 'Economics', 'Corporate Taxation'],
    officeHours: 'Mon-Fri: 2:00 PM - 4:00 PM',
    researchInterests: ['Financial Literacy', 'Digital Commerce', 'Entrepreneurship Education'],
    linkedin: 'https://linkedin.com/in/kathryn-murphy',
    twitter: 'https://twitter.com/kathrynmurphy'
  },
  '2': {
    id: '2',
    name: 'Savannah Nguyen',
    position: 'Academic Advisor',
    department: 'Science',
    image: imgEBlTeam2MinJpg,
    email: 'savannah.nguyen@dumricollege.edu',
    phone: '+91 9876543211',
    education: 'M.Sc (Physics), Ph.D',
    bio: 'Dr. Savannah Nguyen is an accomplished academic advisor and physicist with extensive research experience in quantum mechanics and theoretical physics. She has been instrumental in guiding students toward academic excellence and research opportunities in the field of physics.',
    specialization: ['Quantum Mechanics', 'Theoretical Physics', 'Computational Physics', 'Astrophysics'],
    experience: '12+ years in Physics Research & Education',
    achievements: [
      'Ph.D in Quantum Mechanics from IIT Delhi',
      'Published 15+ research papers in international journals',
      'Received Excellence in Teaching Award 2022',
      'Principal Investigator of 3 research projects'
    ],
    publications: [
      'Quantum Entanglement in Multi-particle Systems (2023)',
      'Applications of Theoretical Physics in Modern Technology (2022)',
      'Computational Methods in Quantum Mechanics (2021)'
    ],
    courses: ['Quantum Mechanics', 'Thermodynamics', 'Classical Mechanics', 'Advanced Physics Lab'],
    officeHours: 'Tue-Thu: 3:00 PM - 5:00 PM',
    researchInterests: ['Quantum Computing', 'Particle Physics', 'Condensed Matter Physics'],
    website: 'https://savannahnguyen.edu'
  },
  '3': {
    id: '3',
    name: 'Brooklyn Simmons',
    position: 'Academic Assistant',
    department: 'Arts',
    image: imgEBlTeam3MinJpg,
    email: 'brooklyn.simmons@dumricollege.edu',
    phone: '+91 9876543212',
    education: 'M.A (English)',
    bio: 'Brooklyn Simmons is a passionate academic assistant specializing in English literature and creative writing. With a deep love for language and storytelling, she inspires students to explore the richness of literature and develop their own creative voices.',
    specialization: ['English Literature', 'Creative Writing', 'Linguistics', 'Contemporary Fiction'],
    experience: '6+ years in English Literature Education',
    achievements: [
      'Published award-winning short stories',
      'Conducted creative writing workshops for 500+ students',
      'Featured in literary journals and magazines',
      'Recipient of Young Educator Award 2022'
    ],
    publications: [
      'Narrative Techniques in Modern Fiction (2023)',
      'The Art of Creative Writing (2022)',
      'Literary Analysis: A Student\'s Guide (2021)'
    ],
    courses: ['English Literature', 'Creative Writing', 'Poetry Analysis', 'Modern Drama'],
    officeHours: 'Mon-Wed: 1:00 PM - 3:00 PM',
    researchInterests: ['Postmodern Literature', 'Creative Pedagogy', 'Digital Storytelling']
  },
  '4': {
    id: '4',
    name: 'Darlene Robertson',
    position: 'Academic Advisor',
    department: 'Commerce',
    image: imgEBlTeam4MinJpg,
    email: 'darlene.robertson@dumricollege.edu',
    phone: '+91 9876543213',
    education: 'M.Com, MBA',
    bio: 'Darlene Robertson brings a wealth of industry experience and academic knowledge to her role as an academic advisor. With an MBA and extensive corporate background, she bridges the gap between theoretical commerce education and practical business applications.',
    specialization: ['Business Management', 'Marketing', 'Strategic Planning', 'Corporate Finance'],
    experience: '10+ years in Commerce & Business Management',
    achievements: [
      'Former Marketing Manager at Fortune 500 company',
      'MBA with distinction from top business school',
      'Mentored 100+ students in career development',
      'Published case studies on business strategy'
    ],
    publications: [
      'Strategic Marketing in the Digital Era (2023)',
      'Corporate Finance: Theory and Practice (2022)',
      'Business Analytics for Decision Making (2021)'
    ],
    courses: ['Business Management', 'Marketing Strategy', 'Corporate Finance', 'Entrepreneurship'],
    officeHours: 'Mon-Fri: 10:00 AM - 12:00 PM',
    researchInterests: ['Digital Marketing', 'Business Analytics', 'Startup Ecosystems']
  },
  '5': {
    id: '5',
    name: 'Cameron Williamson',
    position: 'Research Assistant',
    department: 'Science',
    image: imgEBlTeam5MinJpg,
    email: 'cameron.williamson@dumricollege.edu',
    phone: '+91 9876543214',
    education: 'M.Sc (Chemistry)',
    bio: 'Cameron Williamson is a dedicated research assistant specializing in organic chemistry and biochemistry. His research focuses on sustainable chemistry and green synthesis methods, contributing to environmental protection through scientific innovation.',
    specialization: ['Organic Chemistry', 'Biochemistry', 'Green Chemistry', 'Analytical Chemistry'],
    experience: '5+ years in Chemistry Research',
    achievements: [
      'Published 8+ research papers in peer-reviewed journals',
      'Developed eco-friendly synthesis methods',
      'Winner of Young Scientist Award 2023',
      'Collaborated on international research projects'
    ],
    publications: [
      'Green Synthesis Methods in Organic Chemistry (2023)',
      'Biochemical Applications of Novel Compounds (2022)',
      'Sustainable Chemistry Practices (2021)'
    ],
    courses: ['Organic Chemistry', 'Biochemistry', 'Analytical Techniques', 'Environmental Chemistry'],
    officeHours: 'Wed-Fri: 2:00 PM - 4:00 PM',
    researchInterests: ['Sustainable Chemistry', 'Drug Discovery', 'Nanomaterials']
  },
  '6': {
    id: '6',
    name: 'Leslie Alexander',
    position: 'Teaching Assistant (TA)',
    department: 'Arts',
    image: imgEBlTeam6MinJpg,
    email: 'leslie.alexander@dumricollege.edu',
    phone: '+91 9876543215',
    education: 'M.A (History)',
    bio: 'Leslie Alexander is an enthusiastic teaching assistant with a passion for history and cultural studies. She specializes in modern Indian history and helps students develop critical thinking skills through historical analysis and research methodologies.',
    specialization: ['Modern Indian History', 'Cultural Studies', 'Historical Research', 'Archaeology'],
    experience: '4+ years in History Education',
    achievements: [
      'Completed dissertation on Indian Independence Movement',
      'Conducted heritage walks for students',
      'Published articles in history journals',
      'Active member of Historical Research Society'
    ],
    publications: [
      'Perspectives on Modern Indian History (2023)',
      'Cultural Heritage and Identity (2022)',
      'Historical Research Methodologies (2021)'
    ],
    courses: ['Modern History', 'Cultural Studies', 'Historical Research Methods', 'Indian Civilization'],
    officeHours: 'Tue-Thu: 11:00 AM - 1:00 PM',
    researchInterests: ['Postcolonial Studies', 'Cultural Heritage', 'Oral History']
  },
  '7': {
    id: '7',
    name: 'Dr. Rajesh Kumar',
    position: 'Professor & HOD',
    department: 'Commerce',
    image: 'https://images.unsplash.com/photo-1584554376766-ac0f2c65e949?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWFjaGVyJTIwcG9ydHJhaXQlMjBtYWxlfGVufDF8fHx8MTc3MzYwMTAzMXww&ixlib=rb-4.1.0&q=80&w=1080',
    email: 'rajesh.kumar@dumricollege.edu',
    phone: '+91 9876543216',
    education: 'M.Com, Ph.D (Commerce)',
    bio: 'Dr. Rajesh Kumar serves as the Head of Department for Commerce with over 20 years of experience in commerce education and research. His expertise in financial management and accounting has shaped the commerce curriculum at Dumri College.',
    specialization: ['Financial Management', 'Advanced Accounting', 'Corporate Governance', 'Auditing'],
    experience: '20+ years in Commerce Education & Administration',
    achievements: [
      'Ph.D in Financial Management',
      'Published 30+ research papers',
      'Received Lifetime Achievement Award in Education',
      'Developed modern commerce curriculum'
    ],
    publications: [
      'Advanced Financial Management Techniques (2023)',
      'Corporate Governance in Indian Context (2022)',
      'Auditing Practices and Standards (2021)'
    ],
    courses: ['Financial Management', 'Advanced Accounting', 'Corporate Governance', 'Auditing'],
    officeHours: 'Mon-Fri: 9:00 AM - 11:00 AM',
    researchInterests: ['Financial Markets', 'Corporate Finance', 'Accounting Standards']
  },
  '8': {
    id: '8',
    name: 'Dr. Priya Sharma',
    position: 'Associate Professor',
    department: 'Science',
    image: 'https://images.unsplash.com/photo-1758685848001-0396a85ba84f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWFjaGVyJTIwcG9ydHJhaXQlMjBmZW1hbGV8ZW58MXx8fHwxNzczNjAxMDMxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    email: 'priya.sharma@dumricollege.edu',
    phone: '+91 9876543217',
    education: 'M.Sc, Ph.D (Biology)',
    bio: 'Dr. Priya Sharma is an accomplished biologist specializing in molecular biology and genetics. Her groundbreaking research in genetic engineering has earned her recognition in the scientific community.',
    specialization: ['Molecular Biology', 'Genetics', 'Biotechnology', 'Cell Biology'],
    experience: '15+ years in Biology Research & Education',
    achievements: [
      'Ph.D in Molecular Biology',
      'Published 25+ research papers in top journals',
      'Received DST Young Scientist Award',
      'Led multiple research grants'
    ],
    publications: [
      'Advances in Genetic Engineering (2023)',
      'Molecular Mechanisms of Disease (2022)',
      'Biotechnology Applications in Medicine (2021)'
    ],
    courses: ['Molecular Biology', 'Genetics', 'Biotechnology', 'Cell Biology'],
    officeHours: 'Mon-Wed-Fri: 2:00 PM - 4:00 PM',
    researchInterests: ['Gene Therapy', 'Cancer Biology', 'Stem Cell Research']
  },
  '9': {
    id: '9',
    name: 'Prof. Amit Verma',
    position: 'Senior Lecturer',
    department: 'Arts',
    image: 'https://images.unsplash.com/photo-1755519024827-fd05075a7200?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzb3IlMjBhY2FkZW1pYyUyMHBvcnRyYWl0JTIwbWFsZXxlbnwxfHx8fDE3NzM2MDEwMzF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    email: 'amit.verma@dumricollege.edu',
    phone: '+91 9876543218',
    education: 'M.A (Political Science), Ph.D',
    bio: 'Prof. Amit Verma is a distinguished political scientist with expertise in Indian politics and international relations. His insightful analysis and teaching methods have made him a favorite among students.',
    specialization: ['Political Science', 'International Relations', 'Public Policy', 'Comparative Politics'],
    experience: '14+ years in Political Science Education',
    achievements: [
      'Ph.D in Political Science',
      'Published 20+ research papers',
      'Regular contributor to political analysis',
      'Invited speaker at national conferences'
    ],
    publications: [
      'Indian Democracy: Challenges and Opportunities (2023)',
      'International Relations in the 21st Century (2022)',
      'Public Policy and Governance (2021)'
    ],
    courses: ['Political Science', 'International Relations', 'Public Policy', 'Indian Politics'],
    officeHours: 'Tue-Thu: 10:00 AM - 12:00 PM',
    researchInterests: ['Electoral Politics', 'Foreign Policy', 'Governance']
  },
  '10': {
    id: '10',
    name: 'Dr. Meera Patel',
    position: 'Assistant Professor',
    department: 'Commerce',
    image: 'https://images.unsplash.com/photo-1758685845906-6f705cde4fb7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzb3IlMjBhY2FkZW1pYyUyMHBvcnRyYWl0JTIwZmVtYWxlfGVufDF8fHx8MTc3MzYwMTAzMnww&ixlib=rb-4.1.0&q=80&w=1080',
    email: 'meera.patel@dumricollege.edu',
    phone: '+91 9876543219',
    education: 'M.Com, CA, Ph.D',
    bio: 'Dr. Meera Patel is a chartered accountant turned academician who brings practical industry experience to the classroom. Her expertise in taxation and financial reporting is invaluable to commerce students.',
    specialization: ['Taxation', 'Financial Reporting', 'Cost Accounting', 'GST'],
    experience: '11+ years in Accounting & Taxation',
    achievements: [
      'Chartered Accountant',
      'Ph.D in Taxation',
      'Former Senior Auditor at Big 4 firm',
      'Published tax law commentaries'
    ],
    publications: [
      'GST: A Comprehensive Guide (2023)',
      'Financial Reporting Standards in India (2022)',
      'Cost Accounting for Modern Business (2021)'
    ],
    courses: ['Taxation', 'Financial Reporting', 'Cost Accounting', 'Auditing'],
    officeHours: 'Mon-Thu: 3:00 PM - 5:00 PM',
    researchInterests: ['Tax Policy', 'Financial Accounting', 'Compliance']
  },
  '11': {
    id: '11',
    name: 'Prof. Suresh Singh',
    position: 'Lecturer',
    department: 'Science',
    image: 'https://images.unsplash.com/photo-1758685734511-4f49ce9a382b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwbGVjdHVyZXIlMjBwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzM2MDEwMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    email: 'suresh.singh@dumricollege.edu',
    phone: '+91 9876543220',
    education: 'M.Sc (Mathematics), B.Ed',
    bio: 'Prof. Suresh Singh is a mathematics educator known for making complex mathematical concepts accessible to students. His innovative teaching methods have helped countless students overcome their fear of mathematics.',
    specialization: ['Calculus', 'Linear Algebra', 'Statistics', 'Applied Mathematics'],
    experience: '9+ years in Mathematics Education',
    achievements: [
      'Best Mathematics Teacher Award 2022',
      'Developed interactive math learning modules',
      'Published textbooks on calculus',
      'Conducted math olympiad training'
    ],
    publications: [
      'Calculus Made Easy: A Student\'s Guide (2023)',
      'Linear Algebra Applications (2022)',
      'Statistics for Science Students (2021)'
    ],
    courses: ['Calculus', 'Linear Algebra', 'Statistics', 'Differential Equations'],
    officeHours: 'Mon-Wed-Fri: 1:00 PM - 3:00 PM',
    researchInterests: ['Mathematical Modeling', 'Data Science', 'Computational Mathematics']
  },
  '12': {
    id: '12',
    name: 'Dr. Anjali Gupta',
    position: 'Associate Professor',
    department: 'Arts',
    image: 'https://images.unsplash.com/photo-1659080907111-7c726e435a28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY2FkZW1pYyUyMHN0YWZmJTIwcHJvZmVzc2lvbmFsJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzczNjAxMDMzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    email: 'anjali.gupta@dumricollege.edu',
    phone: '+91 9876543221',
    education: 'M.A (Sociology), Ph.D',
    bio: 'Dr. Anjali Gupta is a sociologist whose research focuses on social change and development in contemporary India. Her work on gender studies and social inequality has contributed significantly to the field.',
    specialization: ['Sociology', 'Gender Studies', 'Social Research', 'Development Studies'],
    experience: '13+ years in Sociology Research & Education',
    achievements: [
      'Ph.D in Sociology',
      'Published 18+ research papers',
      'Conducted field studies in rural India',
      'Gender equality advocate'
    ],
    publications: [
      'Gender and Society in Modern India (2023)',
      'Social Change and Development (2022)',
      'Research Methods in Sociology (2021)'
    ],
    courses: ['Sociology', 'Gender Studies', 'Social Research Methods', 'Development Studies'],
    officeHours: 'Tue-Thu: 2:00 PM - 4:00 PM',
    researchInterests: ['Gender Equality', 'Social Justice', 'Urban Sociology']
  }
};

export function FacultyDetailPage() {
  const { facultyId } = useParams<{ facultyId: string }>();
  const navigate = useNavigate();

  const faculty = facultyId ? facultyData[facultyId] : null;

  if (!faculty) {
    return (
      <div className="min-h-screen bg-white">
        <CarouselHeader />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Faculty Member Not Found</h1>
          <p className="text-gray-600 mb-8">The faculty member you're looking for doesn't exist.</p>
          <button
            onClick={() => navigate('/all-faculty')}
            className="bg-[#2563EB] text-white px-6 py-3 rounded-md hover:bg-[#1d4ed8] transition-colors"
          >
            Back to All Faculty
          </button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <CarouselHeader />

      {/* Hero Banner */}
      <section className="relative h-[320px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1920&q=80"
            alt="Faculty"
            className="w-full h-full object-cover"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#001a2e]/90 via-[#00324d]/85 to-[#004d73]/80"></div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <img 
            alt="" 
            className="absolute h-full left-0 max-w-none top-0 w-[115.51%] object-cover opacity-10" 
            src={imgDivElementorElement} 
          />
        </div>

        {/* Decorative Arrow */}
        <div className="absolute bottom-[40px] right-[100px] z-10 hidden lg:block opacity-50">
          <img 
            alt="" 
            className="w-[100px] h-[100px]" 
            src={imgBnrArrow11} 
          />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-full flex flex-col justify-center pt-20 pb-8">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 mb-4">
            <button
              onClick={() => navigate('/')}
              className="text-white text-sm hover:underline"
            >
              Home
            </button>
            <ChevronRight className="w-4 h-4 text-white" />
            <button
              onClick={() => navigate('/all-faculty')}
              className="text-white text-sm hover:underline"
            >
              All Faculty
            </button>
            <ChevronRight className="w-4 h-4 text-white" />
            <span className="text-white text-sm">{faculty.name}</span>
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-6xl font-light text-white mb-6 font-serif">
            Faculty Profile
          </h1>
        </div>
      </section>

      {/* Faculty Profile Content */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Profile Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-1"
            >
              <div className="bg-white rounded-xl shadow-lg overflow-hidden sticky top-24">
                {/* Profile Image */}
                <div className="relative aspect-[3/4] bg-gray-100">
                  <img
                    src={faculty.image}
                    alt={faculty.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Profile Info */}
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">{faculty.name}</h2>
                  <p className="text-[#0c5776] font-medium text-lg mb-1">{faculty.position}</p>
                  
                  {/* Department Badge */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium mb-4">
                    <GraduationCap className="w-4 h-4" />
                    {faculty.department}
                  </div>

                  {/* Education */}
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-[#0c5776]" />
                      Education
                    </h3>
                    <p className="text-gray-600 text-sm">{faculty.education}</p>
                  </div>

                  {/* Contact Info */}
                  <div className="space-y-3 border-t pt-4">
                    {faculty.email && (
                      <div className="flex items-start gap-3">
                        <Mail className="w-4 h-4 text-[#0c5776] mt-0.5 flex-shrink-0" />
                        <a 
                          href={`mailto:${faculty.email}`}
                          className="text-sm text-gray-600 hover:text-[#0c5776] transition-colors break-all"
                        >
                          {faculty.email}
                        </a>
                      </div>
                    )}
                    {faculty.phone && (
                      <div className="flex items-center gap-3">
                        <Phone className="w-4 h-4 text-[#0c5776] flex-shrink-0" />
                        <span className="text-sm text-gray-600">{faculty.phone}</span>
                      </div>
                    )}
                    {faculty.officeHours && (
                      <div className="flex items-start gap-3">
                        <Calendar className="w-4 h-4 text-[#0c5776] mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-xs font-semibold text-gray-700 mb-0.5">Office Hours</p>
                          <p className="text-sm text-gray-600">{faculty.officeHours}</p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Social Links */}
                  {(faculty.linkedin || faculty.twitter || faculty.website) && (
                    <div className="mt-6 flex gap-3 border-t pt-4">
                      {faculty.linkedin && (
                        <a
                          href={faculty.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center w-10 h-10 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                        >
                          <Linkedin className="w-5 h-5" />
                        </a>
                      )}
                      {faculty.twitter && (
                        <a
                          href={faculty.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center w-10 h-10 bg-sky-500 text-white rounded-full hover:bg-sky-600 transition-colors"
                        >
                          <Twitter className="w-5 h-5" />
                        </a>
                      )}
                      {faculty.website && (
                        <a
                          href={faculty.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center w-10 h-10 bg-gray-700 text-white rounded-full hover:bg-gray-800 transition-colors"
                        >
                          <Globe className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>

            {/* Right Column - Details */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-2 space-y-8"
            >
              {/* Biography */}
              {faculty.bio && (
                <div className="bg-white rounded-xl shadow-md p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Biography</h3>
                  <p className="text-gray-700 leading-relaxed">{faculty.bio}</p>
                </div>
              )}

              {/* Experience */}
              {faculty.experience && (
                <div className="bg-white rounded-xl shadow-md p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Building2 className="w-6 h-6 text-[#0c5776]" />
                    Experience
                  </h3>
                  <p className="text-gray-700 text-lg font-medium">{faculty.experience}</p>
                </div>
              )}

              {/* Specialization */}
              {faculty.specialization && faculty.specialization.length > 0 && (
                <div className="bg-white rounded-xl shadow-md p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Areas of Specialization</h3>
                  <div className="flex flex-wrap gap-2">
                    {faculty.specialization.map((spec, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Research Interests */}
              {faculty.researchInterests && faculty.researchInterests.length > 0 && (
                <div className="bg-white rounded-xl shadow-md p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Research Interests</h3>
                  <ul className="space-y-2">
                    {faculty.researchInterests.map((interest, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <ChevronRight className="w-5 h-5 text-[#0c5776] mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{interest}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Achievements */}
              {faculty.achievements && faculty.achievements.length > 0 && (
                <div className="bg-white rounded-xl shadow-md p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <Award className="w-6 h-6 text-[#0c5776]" />
                    Key Achievements
                  </h3>
                  <ul className="space-y-3">
                    {faculty.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-[#0c5776] rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Publications */}
              {faculty.publications && faculty.publications.length > 0 && (
                <div className="bg-white rounded-xl shadow-md p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Recent Publications</h3>
                  <ul className="space-y-4">
                    {faculty.publications.map((publication, index) => (
                      <li key={index} className="flex items-start gap-3 pb-4 border-b last:border-b-0">
                        <BookOpen className="w-5 h-5 text-[#0c5776] mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 italic">{publication}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Courses Taught */}
              {faculty.courses && faculty.courses.length > 0 && (
                <div className="bg-white rounded-xl shadow-md p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <Users className="w-6 h-6 text-[#0c5776]" />
                    Courses Taught
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {faculty.courses.map((course, index) => (
                      <div
                        key={index}
                        className="p-4 bg-gray-50 rounded-lg border border-gray-200"
                      >
                        <p className="text-gray-800 font-medium">{course}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Awards Gallery (Using Figma Images) */}
              <div className="bg-white rounded-xl shadow-md p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Awards & Recognition</h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                    <img
                      src={imgAwardWin1Min}
                      alt="Award 1"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                    <img
                      src={imgAwardWin2Min}
                      alt="Award 2"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                    <img
                      src={imgAwardWin3Min}
                      alt="Award 3"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                    <img
                      src={imgAwardWin4Min}
                      alt="Award 4"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
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
