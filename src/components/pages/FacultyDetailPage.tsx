import { useParams, useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';
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
import svgPaths from "../../imports/svg-ncfhf8do3f";

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
    email: 'leslie@univerisity.edu',
    phone: '+1 (201) 895-3801',
    education: 'M.Com, B.Ed',
    bio: 'Kathryn Murphy is a highly experienced professor in the Department of Computer Science, recognized for his expertise in artificial intelligence and data science. He blends academic research with practical industry insights, guiding students through hands-on learning and innovative problem-solving. Dr. Doe actively publishes in top-tier journals and mentors students at both undergraduate and graduate levels',
    specialization: ['Ph.D. in Mathematics, University of Cambridge', 'M.SC. in Mathematics. University of California', 'B.Sc. in mathematics, University of Helsinki'],
    experience: 'Conventions and discover their potential through meaningful Our faculty experiences Our distinguished faculty members are leaders their respective fields dedicated to delivering world-class education that integrates theory with practical support application With',
    courses: ['MPhil & PhD Programs', 'Advanced Research Labs', 'Research Funding & Grants', 'Master of Laws (LLM)'],
    researchInterests: ['Algebraic Geometry', 'Number Theory', 'Discrete Geometry']
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
    courses: ['Quantum Mechanics', 'Thermodynamics', 'Classical Mechanics', 'Advanced Physics Lab'],
    researchInterests: ['Quantum Computing', 'Particle Physics', 'Condensed Matter Physics']
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
    courses: ['English Literature', 'Creative Writing', 'Poetry Analysis', 'Modern Drama'],
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
    courses: ['Business Management', 'Marketing Strategy', 'Corporate Finance', 'Entrepreneurship'],
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
    courses: ['Organic Chemistry', 'Biochemistry', 'Analytical Techniques', 'Environmental Chemistry'],
    researchInterests: ['Sustainable Chemistry', 'Drug Discovery', 'Nanomaterials']
  },
  '6': {
    id: '6',
    name: 'Leslie Alexander',
    position: 'Teaching Assistant (TA)',
    department: 'Arts',
    image: imgEBlTeam6MinJpg,
    email: 'leslie@univerisity.edu',
    phone: '+1 (201) 895-3801',
    education: 'M.A (History)',
    bio: 'Leslie Alexander is an enthusiastic teaching assistant with a passion for history and cultural studies. She specializes in modern Indian history and helps students develop critical thinking skills through historical analysis and research methodologies.',
    specialization: ['Ph.D. in Mathematics, University of Cambridge', 'M.SC. in Mathematics. University of California', 'B.Sc. in mathematics, University of Helsinki'],
    experience: 'Conventions and discover their potential through meaningful Our faculty experiences Our distinguished faculty members are leaders their respective fields dedicated to delivering world-class education that integrates theory with practical support application With',
    courses: ['MPhil & PhD Programs', 'Advanced Research Labs', 'Research Funding & Grants', 'Master of Laws (LLM)'],
    researchInterests: ['Algebraic Geometry', 'Number Theory', 'Discrete Geometry']
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

      {/* Faculty Profile Content - Responsive Design */}
      <section className="bg-[#f6f4ee]">
        <div className="w-full  sm:px-6   py-12 md:py-16 lg:py-[110px] flex justify-center">
          <div className="w-full max-w-[1260px] flex flex-col gap-5 md:gap-8 lg:gap-5">
            {/* Main Profile Section */}
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-[50px] lg:h-[532.74px] lg:items-end shrink-0 w-full">
              {/* Left Column - Profile Card */}
              <div className="flex items-start self-stretch shrink-0 justify-center lg:justify-start">
                <div className="bg-white rounded-2xl shadow-[0px_4px_30px_0px_rgba(0,0,0,0.06)] p-3 flex flex-col gap-5 w-full max-w-[390.6px] lg:w-[390.6px]">
                  {/* Profile Image */}
                  <div className="relative rounded-2xl overflow-hidden">
                    <img
                      src={faculty.image}
                      alt={faculty.name}
                      className="w-full h-auto aspect-[366.6/405.74] object-cover"
                    />
                  </div>

                  {/* Profile Info */}
                  <div className="text-center pb-3 pt-1.5">
                    <h4 className="font-['Bitter',serif] text-2xl leading-[34px] text-[#030303] mb-0.5">
                      {faculty.name}
                    </h4>
                    <p className="font-['Inter',sans-serif] font-normal text-base leading-7 text-[#4c4c4c]">
                      {faculty.position}
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column - Content */}
              <div className="flex-1 flex flex-col gap-5 lg:h-[533.34px]">
                {/* About: Introduction Section */}
                <div className="flex flex-col gap-[15px] w-full lg:min-w-[700.4px] h-full">
                  {/* About Heading */}
                  <div className="pb-[0.6px]">
                    <h3 className="font-['Bitter',serif] text-3xl md:text-[36px] leading-[46px] text-[#030303]">
                      About: Introduction
                    </h3>
                  </div>

                  {/* Bio Text with bottom border */}
                  <div className="pb-[30px] border-b-[0.8px] border-[#e4e4e4]">
                    <p className="font-['Inter',sans-serif] font-normal text-base leading-7 text-[#4c4c4c]">
                      {faculty.bio}
                    </p>
                  </div>
                </div>

                {/* Academic Qualifications & Research Interests - Two Columns */}
                <div className="pt-3 flex flex-col gap-5">
                  <div className="flex flex-col md:flex-row gap-8 md:gap-5 items-start justify-center shrink-0 w-full">
                    {/* Academic Qualifications */}
                    <div className="flex-1 flex flex-col gap-5 w-full">
                      <div className="h-[29px]">
                        <h4 className="font-['Bitter',serif] text-2xl leading-[34px] text-[#030303]">
                          Academic Qualifications
                        </h4>
                      </div>
                      <div className="flex flex-col gap-[0.5px]">
                        {faculty.specialization?.map((item, index) => (
                          <div key={index} className="flex items-center pb-[0.5px]">
                            <div className="flex items-start pr-[3.5px] shrink-0">
                              <div className="overflow-clip relative shrink-0 size-[6px]">
                                <div className="absolute inset-[1.56%]">
                                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.8125 5.8125">
                                    <path d={svgPaths.p2194aa80} fill="#4C4C4C" />
                                  </svg>
                                </div>
                              </div>
                            </div>
                            <div className="pl-[5px]">
                              <p className="font-['Inter',sans-serif] font-normal text-base leading-7 text-[#4c4c4c]">
                                {item}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Research Interests */}
                    <div className="flex-1 flex flex-col gap-5 w-full">
                      <div className="h-[29px]">
                        <h4 className="font-['Bitter',serif] text-2xl leading-[34px] text-[#030303]">
                          Research Interests
                        </h4>
                      </div>
                      <div className="flex flex-col gap-[0.5px]">
                        {faculty.researchInterests?.map((item, index) => (
                          <div key={index} className="flex items-center pb-[0.5px]">
                            <div className="flex items-start pr-[3.5px] shrink-0">
                              <div className="overflow-clip relative shrink-0 size-[6px]">
                                <div className="absolute inset-[1.56%]">
                                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.8125 5.8125">
                                    <path d={svgPaths.p2194aa80} fill="#4C4C4C" />
                                  </svg>
                                </div>
                              </div>
                            </div>
                            <div className="pl-[5px]">
                              <p className="font-['Inter',sans-serif] font-normal text-base leading-7 text-[#4c4c4c]">
                                {item}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div className="pt-[10px] border-t-[0.8px] border-[#e4e4e4] flex flex-col gap-5">
                    {/* Contact Title */}
                    <div className="pt-[26px] pb-[5px] w-full">
                      <h4 className="font-['Bitter',serif] text-2xl leading-[34px] text-[#030303]">
                        Contact Information's
                      </h4>
                    </div>

                    {/* Contact Pills */}
                    <div className="flex flex-col sm:flex-row flex-wrap gap-4 md:gap-[25px] items-start">
                      {/* Email */}
                      <div className="flex items-start shrink-0">
                        <a href={`mailto:${faculty.email}`} className="bg-white cursor-pointer flex gap-[10px] items-center overflow-clip px-[14px] py-2 rounded-[100px] shadow-[0px_4px_30px_0px_rgba(0,0,0,0.06)]">
                          <div className="flex items-center justify-center">
                            <div className="overflow-clip relative shrink-0 size-5">
                              <div className="absolute inset-[16.67%_0]">
                                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 13.3333">
                                  <path d={svgPaths.p2537ddf0} fill="#030303" />
                                </svg>
                              </div>
                            </div>
                          </div>
                          <p className="font-['Inter',sans-serif] font-normal text-sm sm:text-base leading-7 text-[#4c4c4c] whitespace-nowrap">
                            {faculty.email}
                          </p>
                        </a>
                      </div>

                      {/* Phone */}
                      <div className="flex items-start shrink-0">
                        <div className="bg-white flex gap-[10px] items-center overflow-clip px-[14px] py-2 rounded-[100px] shadow-[0px_4px_30px_0px_rgba(0,0,0,0.06)]">
                          <div className="flex items-center justify-center">
                            <div className="overflow-clip relative shrink-0 size-5">
                              <div className="absolute inset-[5.78%_6.2%_0_0]">
                                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.7592 18.8432">
                                  <path d={svgPaths.p232a0d00} fill="#030303" />
                                </svg>
                              </div>
                            </div>
                          </div>
                          <p className="font-['Inter',sans-serif] font-normal text-sm sm:text-base leading-7 text-[#4c4c4c] whitespace-nowrap">
                            {faculty.phone}
                          </p>
                        </div>
                      </div>

                      {/* Address */}
                      <div className="flex items-start shrink-0 w-full sm:w-auto">
                        <div className="bg-white flex gap-[10px] items-center overflow-clip px-[14px] py-2 rounded-[100px] shadow-[0px_4px_30px_0px_rgba(0,0,0,0.06)]">
                          <div className="flex items-center justify-center">
                            <div className="overflow-clip relative shrink-0 size-5">
                              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                                <path d="M10 0C6.67 0 4 2.67 4 6c0 5.25 6 14 6 14s6-8.75 6-14c0-3.33-2.67-6-6-6zm0 8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" fill="#030303" />
                              </svg>
                            </div>
                          </div>
                          <p className="font-['Inter',sans-serif] font-normal text-sm sm:text-base leading-7 text-[#4c4c4c]">
                            Preston Rd. Inglewood, Maine 1521
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Professional Experience & Courses Section */}
            <div className="pt-12 md:pt-16 lg:pt-[80px]">
              <div className="bg-white rounded-xl shadow-[0px_4px_30px_0px_rgba(0,0,0,0.06)] px-6 md:px-10 py-6 md:py-10">
                {/* Professional Experience & Courses Row */}
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-5 pb-5 items-start">
                  {/* Left Side - Professional Experience with Timeline */}
                  <div className="w-full lg:w-[590px] flex gap-[30px] items-start">
                    {/* Timeline Line */}
                    <div className="hidden lg:flex items-end self-stretch">
                      <div className="w-[0.53px] h-[145px] flex flex-col justify-center items-start">
                        <div className="self-stretch flex-1 relative bg-[#E4E4E4]">
                          <div className="w-4 h-4 left-[-7px] top-[-8px] absolute bg-[#0C5776] shadow-[0px_10px_30px_rgba(0,0,0,0.30)] rounded-lg border-2 border-[rgba(255,255,255,0.99)]" />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex items-start self-stretch flex-1">
                      <div className="w-full lg:min-w-[528.95px] lg:h-[146px]">
                        <div className="flex flex-col gap-[10px] items-start">
                          <h4 className="font-['Bitter',serif] text-2xl leading-[34px] text-[#030303]">
                            Professional Experience
                          </h4>
                          <p className="font-['Inter',sans-serif] font-normal text-base leading-7 text-[#4c4c4c]">
                            {faculty.experience || 'Conventions and discover their potential through meaningful Our faculty experiences Our distinguished faculty members are leaders their respective fields dedicated to delivering world-class education that integrates theory with practical support application With'}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Timeline Line (Right) */}
                    <div className="hidden lg:flex items-end self-stretch">
                      <div className="w-[0.53px] h-[145px] flex flex-col justify-center items-start">
                        <div className="self-stretch flex-1 relative bg-[#E4E4E4]">
                          <div className="w-4 h-4 left-[-7px] top-[-8px] absolute bg-[#0C5776] shadow-[0px_10px_30px_rgba(0,0,0,0.30)] rounded-lg border-2 border-[rgba(255,255,255,0.99)]" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Side - Courses */}
                  <div className="w-full lg:w-[570px] lg:pl-5 flex flex-col gap-5 items-start">
                    <div className="lg:pl-2">
                      <h4 className="font-['Bitter',serif] text-2xl leading-[34px] text-[#030303]">
                        Courses
                      </h4>
                    </div>

                    {/* Course Pills Grid */}
                    <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 lg:h-[113.60px] lg:relative">
                      {/* Row 1 */}
                      <div className="lg:absolute lg:left-0 lg:top-0 lg:w-[264px]">
                        <div className="px-7 py-3.5 bg-white shadow-[0px_4px_30px_rgba(0,0,0,0.06)] rounded-[30px] border-b-[0.8px] border-[#E4E4E4] flex justify-center items-center gap-2.5">
                          <span className="font-['Inter',sans-serif] font-medium text-[15px] leading-[18px] text-[#030303] text-center">
                            {faculty.courses?.[0] || 'MPhil & PhD Programs'}
                          </span>
                          <div className="w-[15px] h-[15px] flex-shrink-0">
                            <ChevronRight className="w-full h-full" />
                          </div>
                        </div>
                      </div>

                      <div className="lg:absolute lg:left-[286px] lg:top-0 lg:w-[264px]">
                        <div className="px-7 py-3.5 bg-white shadow-[0px_4px_30px_rgba(0,0,0,0.06)] rounded-[30px] border-b-[0.8px] border-[#E4E4E4] flex justify-center items-center gap-2.5">
                          <span className="font-['Inter',sans-serif] font-medium text-[15px] leading-[18px] text-[#030303] text-center">
                            {faculty.courses?.[1] || 'Advanced Research Labs'}
                          </span>
                          <div className="w-[15px] h-[15px] flex-shrink-0">
                            <ChevronRight className="w-full h-full" />
                          </div>
                        </div>
                      </div>

                      {/* Row 2 */}
                      <div className="lg:absolute lg:left-0 lg:top-[66.80px] lg:w-[264px]">
                        <div className="px-4 py-3.5 bg-white shadow-[0px_4px_30px_rgba(0,0,0,0.06)] rounded-[30px] border-b-[0.8px] border-[#E4E4E4] flex justify-center items-center gap-[15px]">
                          <span className="font-['Inter',sans-serif] font-medium text-[15px] leading-[18px] text-[#030303] text-center">
                            {faculty.courses?.[2] || 'Research Funding & Grants'}
                          </span>
                          <div className="w-[15px] h-[15px] flex-shrink-0">
                            <ChevronRight className="w-full h-full" />
                          </div>
                        </div>
                      </div>

                      <div className="lg:absolute lg:left-[286px] lg:top-[66.80px] lg:w-[264px]">
                        <div className="px-[26px] py-3.5 bg-white shadow-[0px_4px_30px_rgba(0,0,0,0.06)] rounded-[30px] border-b-[0.8px] border-[#E4E4E4] flex justify-center items-center gap-2.5">
                          <span className="font-['Inter',sans-serif] font-medium text-[15px] leading-[18px] text-[#030303] text-center">
                            {faculty.courses?.[3] || 'Master of Laws (LLM)'}
                          </span>
                          <div className="w-[15px] h-[15px] flex-shrink-0">
                            <ChevronRight className="w-full h-full" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Featured Image */}
                <div className="mt-5">
                  <img
                    src={imgCapManMin}
                    alt="Faculty"
                    className="w-full h-auto aspect-[1180/380.55] rounded-xl object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Research Excellence Awards Section */}
            <div className="pt-12 md:pt-16 lg:pt-[80px] min-h-[391.20px] relative">
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-5 lg:items-end">
                {/* Left Side - Tilted Badge */}
                <div className="w-full lg:w-[501.94px] flex flex-col items-start">
                  <div className="max-w-[496px] px-4 py-[5.90px] pb-[7.10px] bg-white shadow-[0px_4px_30px_rgba(0,0,0,0.06)] rounded-[100px] lg:rotate-[-45deg] lg:origin-top-left">
                    <h3 className="font-['Bitter',serif] text-xl leading-[30px] text-[#030303]">
                      Research Excellence Awards
                    </h3>
                  </div>
                </div>

                {/* Right Side - Awards List */}
                <div className="w-full lg:w-[744px] bg-white rounded-[10px] flex flex-col">
                  <div className="self-stretch relative flex flex-col">
                    <div className="self-stretch flex flex-col">
                      {/* Award 1 */}
                      <div className="self-stretch p-4 md:p-6 border-b-[0.8px] border-[rgba(2,1,1,0.06)] flex flex-col sm:flex-row justify-between gap-4 sm:items-center hover:bg-gray-50 transition-colors">
                        <div className="flex gap-4 sm:gap-5 items-center">
                          <div className="w-[80px] sm:w-[120px] md:w-[200px] h-[30px] flex items-center shrink-0">
                            <img
                              src={imgAwardWin1Min}
                              alt="Award"
                              className="w-[80px] sm:w-[100px] md:w-[70px] h-auto object-contain"
                            />
                          </div>
                          <div className="flex flex-col">
                            <h4 className="font-['Bitter',serif]  text-lg md:text-xl leading-[34px] text-[#030303]">
                              Research Excellence Award
                            </h4>
                          </div>
                        </div>
                        <div className="overflow-hidden flex flex-col shrink-0">
                          <span className="font-['Bitter',serif]  text-lg md:text-xl leading-[34px] text-[#030303]">
                            2025
                          </span>
                        </div>
                      </div>

                      {/* Award 2 */}
                      <div className="self-stretch p-4 md:p-6 border-b-[0.8px] border-[rgba(2,1,1,0.06)] flex flex-col sm:flex-row justify-between gap-4 sm:items-center hover:bg-gray-50 transition-colors">
                        <div className="flex gap-4 sm:gap-5 items-center">
                          <div className="w-[80px] sm:w-[120px] md:w-[200px] h-[30px] flex items-center shrink-0">
                            <img
                              src={imgAwardWin2Min}
                              alt="Award"
                              className="w-[80px] sm:w-[100px] md:w-[70px] h-auto object-contain"
                            />
                          </div>
                          <div className="flex flex-col">
                            <h4 className="font-['Bitter',serif]  text-lg md:text-xl leading-[34px] text-[#030303]">
                              Excellence in Teaching Award
                            </h4>
                          </div>
                        </div>
                        <div className="overflow-hidden flex flex-col shrink-0">
                          <span className="font-['Bitter',serif]  text-lg md:text-xl leading-[34px] text-[#030303]">
                            2024
                          </span>
                        </div>
                      </div>

                      {/* Award 3 */}
                      <div className="self-stretch p-4 md:p-6 border-b-[0.8px] border-[rgba(2,1,1,0.06)] flex flex-col sm:flex-row justify-between gap-4 sm:items-center hover:bg-gray-50 transition-colors">
                        <div className="flex gap-4 sm:gap-5 items-center">
                          <div className="w-[80px] sm:w-[120px] md:w-[200px] h-[30px] flex items-center shrink-0">
                            <img
                              src={imgAwardWin3Min}
                              alt="Award"
                              className="w-[40px] sm:w-[100px] md:w-[70px] h-auto object-contain"
                            />
                          </div>
                          <div className="flex flex-col">
                            <h4 className="font-['Bitter',serif] text-lg md:text-xl leading-[34px] text-[#030303]">
                              Young Researcher Award
                            </h4>
                          </div>
                        </div>
                        <div className="overflow-hidden flex flex-col shrink-0">
                          <span className="font-['Bitter',serif] text-lg md:text-xl leading-[34px] text-[#030303]">
                            2023
                          </span>
                        </div>
                      </div>

                      {/* Award 4 */}
                      <div className="self-stretch p-4 md:p-6 border-b-[0.8px] border-[rgba(2,1,1,0)] flex flex-col sm:flex-row justify-between gap-4 sm:items-center hover:bg-gray-50 transition-colors">
                        <div className="flex gap-4 sm:gap-5 items-center">
                          <div className="w-[80px] sm:w-[120px] md:w-[200px] h-[30px] flex items-center shrink-0">
                            <img
                              src={imgAwardWin4Min}
                              alt="Award"
                              className="w-[80px] sm:w-[100px] md:w-[70px] h-auto object-contain"
                            />
                          </div>
                          <div className="flex flex-col">
                            <h4 className="font-['Bitter',serif] text-lg md:text-xl leading-[34px] text-[#030303]">
                              Lifetime Achievement Award
                            </h4>
                          </div>
                        </div>
                        <div className="overflow-hidden flex flex-col shrink-0">
                          <span className="font-['Bitter',serif] text-lg md:text-xl leading-[34px] text-[#030303]">
                            2022
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
