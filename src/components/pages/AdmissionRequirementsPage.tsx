import { useNavigate } from 'react-router';
import { ChevronRight } from 'lucide-react';
import { CarouselHeader } from '../CarouselHeader';
import { Footer } from '../Footer';
import imgDivElementorElement from "figma:asset/1984a55cef37a722e6e3c4f9648e5453dfb17fde.png";
import imgBnrArrow11 from "figma:asset/13bec648740b03b5c9d2c72567cc9f3e05c47165.png";
import imgBlueInnerImg12Min from "figma:asset/6f80bfba6db1beafc8dd029dc489318e273a6781.png";
import imgBlueInnerImg11Min from "figma:asset/99f316eb7a0340d02e25db78d33cfef89f9a904a.png";
import imgCyanMLogo1Png from "figma:asset/4390c9dc27ebf2ffe56e2958dabd7064dd04c77a.png";
import imgInnerCatImg1Min from "figma:asset/e1886cb1a3038b5a3e557c24ffe13af7ce6ba265.png";
import imgInnerCatImg2Min from "figma:asset/9f26c0743f65c6213fe7564c446e3fc378c07c31.png";
import imgInnerCatImg3Min from "figma:asset/a21bf85983e046d11ab824973aea9471a85af035.png";
import svgPaths from "../../imports/svg-61vxak0o4a";

export function AdmissionRequirementsPage() {
  const navigate = useNavigate();

  const requirements = {
    academic: [
      'Completed secondary education (HSC/A-Level/Equivalent).',
      'Minimum GPA/grade requirements as set by the university.',
      'For graduate programs: a recognized bachelor\'s degree with required CGPA.'
    ],
    language: [
      'TOEFL, IELTS, PTE, or equivalent test score.',
      'University-approved English placement test (if applicable).'
    ],
    additional: [
      'Portfolio (Art/Music/Design), Fine Arts',
      'Scholarship Assessment (Computer Science, IT)',
      'Interview (Business Administration Programs)',
      'Research proposal (Master\'s/PhD'
    ],
    essential: [
      'Completed application form',
      'Academic transcript & certificates',
      'Proof of identity (passport / government-issued ID)',
      'Recent passport-sized photographs',
      'Letter of recommendation (if required)',
      'Statement of Purpose/Personal Essay (selected programs)'
    ],
    applicationProcess: [
      'Some programs require an entrance exam or aptitude test',
      'Application must may be invited for an admission interview'
    ],
    financialAdmin: [
      'Valid passport',
      'Other letter from the university',
      'Financial sponsorship documents',
      'Medical clearance (if applicable)'
    ],
    submissionDetails: [
      'Payment of application fee',
      'Proof of ability to cover tuition fees during study (for international students)'
    ]
  };

  const deadlineData = [
    { program: 'Undergraduate', springIntake: 'Spring Intake', october: 'October 1', december: 'December 15', january: 'January 15' },
    { program: 'Undergraduate', springIntake: 'Fall Intake', october: 'April 1', december: 'July 30', january: 'September 1' },
    { program: 'Postgraduate', springIntake: 'Spring Intake', october: 'October 1', december: 'December 30', january: 'January 15' },
    { program: 'Postgraduate', springIntake: 'Fall Intake', october: 'April', december: 'August 15', january: 'September 5' },
    { program: 'International Students', springIntake: 'All Intakes', october: 'As before', december: '3 Months Before', january: 'As Scheduled' }
  ];

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
            alt="Graduation"
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
            <span className="text-white text-sm">Admission Requirements</span>
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-6xl font-light text-white mb-6 font-serif">
            Admission Requirements
          </h1>
        </div>
      </section>

      {/* Requirements and Deadlines Header Section */}
      <section className="py-16 bg-[#f6f4ee]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1300px]">
          {/* Hero Images with Center Logo */}
          <div className="relative flex justify-between gap-4 items-start mb-8">
            {/* Left Image */}
            <div className="flex-1 max-w-[632.5px]">
              <img
                src={imgBlueInnerImg12Min}
                alt="Students"
                className="w-full aspect-[632.5/383.54] rounded-2xl object-cover"
              />
            </div>

            {/* Right Image */}
            <div className="flex-1 max-w-[632.5px]">
              <img
                src={imgBlueInnerImg11Min}
                alt="Campus"
                className="w-full aspect-[632.5/383.54] rounded-2xl object-cover"
              />
            </div>

            {/* Center Logo */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0c5776] p-5 rounded-full">
              <img
                src={imgCyanMLogo1Png}
                alt="Logo"
                className="w-[90px] h-[88.5px]"
              />
            </div>
          </div>

          {/* Section Title */}
          <h2 className="font-['Bitter',serif]  text-[36px] leading-[46px] text-[#030303] mb-6">
            Requirements and Deadlines
          </h2>

          {/* Description */}
          <p className="font-['Inter',sans-serif] font-normal text-base leading-7 text-[#4c4c4c] mb-12">
            Our program costs are designed to remain transparent competitive and accessible for students from diverse backgrounds. Each academic program includes tuition fees
            registration charges and essential learning resources ensuring students receive high-quality education and comprehensive academic support Costs may vary based o
            program type, course load, and mode of study (on-campus, hybrid, or online) We aim to provide exceptional value through modern facilities, expert faculty, and industr
            aligned curriculum making your investment in education both meaningful and future-focused.
          </p>

          {/* Admissions Requirements */}
          <h2 className="font-['Bitter',serif]  text-[36px] leading-[46px] text-[#030303] mb-8 pt-4">
            Admissions Requirements
          </h2>

          {/* Requirements Grid */}
          <div className="grid grid-cols-1 bg-white p-2 rounded-xl lg:grid-cols-2 gap-8 mb-12">
            {/* Left Column */}
            <div className="flex  flex-col gap-6">
              {/* 1. Academic Qualifications */}
              <div>
                <h3 className="font-['Bitter',serif]  text-base leading-[26px] text-[#0c5776] mb-3">
                  1. Academic Qualifications
                </h3>
                <ul className="space-y-1">
                  {requirements.academic.map((item, index) => (
                    <li key={index} className="flex items-center">
                      <div className="mr-[5px]">
                        <svg className="w-[5px] h-[5px]" fill="none" viewBox="0 0 4.84375 4.84375">
                          <path d={svgPaths.p1f525e80} fill="#4C4C4C" />
                        </svg>
                      </div>
                      <span className="font-['Inter',sans-serif] font-normal text-base leading-7 text-[#4c4c4c]">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 3. Language Proficiency Test */}
              <div>
                <h3 className="font-['Bitter',serif]  text-base leading-[26px] text-[#0c5776] mb-3">
                  3. Language Proficiency Test
                </h3>
                <ul className="space-y-1">
                  {requirements.language.map((item, index) => (
                    <li key={index} className="flex items-center">
                      <div className="mr-[5px]">
                        <svg className="w-[5px] h-[5px]" fill="none" viewBox="0 0 4.84375 4.84375">
                          <path d={svgPaths.p1f525e80} fill="#4C4C4C" />
                        </svg>
                      </div>
                      <span className="font-['Inter',sans-serif] font-normal text-base leading-7 text-[#4c4c4c]">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 5. Additional Criteria for Special Programs */}
              <div>
                <h3 className="font-['Bitter',serif]  text-base leading-[26px] text-[#0c5776] mb-3">
                  5. Additional Criteria for Special Programs
                </h3>
                <ul className="space-y-1">
                  {requirements.additional.map((item, index) => (
                    <li key={index} className="flex items-center">
                      <div className="mr-[5px]">
                        <svg className="w-[5px] h-[5px]" fill="none" viewBox="0 0 4.84375 4.84375">
                          <path d={svgPaths.p1f525e80} fill="#4C4C4C" />
                        </svg>
                      </div>
                      <span className="font-['Inter',sans-serif] font-normal text-base leading-7 text-[#4c4c4c]">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 7. Visa Requirements (International Students) */}
              <div>
                <h3 className="font-['Bitter',serif]  text-base leading-[26px] text-[#0c5776] mb-3">
                  7. Visa Requirements (International Students
                </h3>
                <ul className="space-y-1">
                  {requirements.financialAdmin.map((item, index) => (
                    <li key={index} className="flex items-center">
                      <div className="mr-[5px]">
                        <svg className="w-[5px] h-[5px]" fill="none" viewBox="0 0 4.84375 4.84375">
                          <path d={svgPaths.p1f525e80} fill="#4C4C4C" />
                        </svg>
                      </div>
                      <span className="font-['Inter',sans-serif] font-normal text-base leading-7 text-[#4c4c4c]">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-6">
              {/* 2. Essential Qualifications */}
              <div>
                <h3 className="font-['Bitter',serif]  text-base leading-[26px] text-[#0c5776] mb-3">
                  2. Academic Qualifications
                </h3>
                <ul className="space-y-1">
                  {requirements.essential.map((item, index) => (
                    <li key={index} className="flex items-center">
                      <div className="mr-[5px]">
                        <svg className="w-[5px] h-[5px]" fill="none" viewBox="0 0 4.84375 4.84375">
                          <path d={svgPaths.p1f525e80} fill="#4C4C4C" />
                        </svg>
                      </div>
                      <span className="font-['Inter',sans-serif] font-normal text-base leading-7 text-[#4c4c4c]">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 4. Application Process */}
              <div>
                <h3 className="font-['Bitter',serif]  text-base leading-[26px] text-[#0c5776] mb-3">
                  4. Application Process
                </h3>
                <ul className="space-y-1">
                  {requirements.applicationProcess.map((item, index) => (
                    <li key={index} className="flex items-center">
                      <div className="mr-[5px]">
                        <svg className="w-[5px] h-[5px]" fill="none" viewBox="0 0 4.84375 4.84375">
                          <path d={svgPaths.p1f525e80} fill="#4C4C4C" />
                        </svg>
                      </div>
                      <span className="font-['Inter',sans-serif] font-normal text-base leading-7 text-[#4c4c4c]">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 6. Submission Details */}
              <div>
                <h3 className="font-['Bitter',serif]  text-base leading-[26px] text-[#0c5776] mb-3">
                  6. Submission Details
                </h3>
                <ul className="space-y-1">
                  {requirements.submissionDetails.map((item, index) => (
                    <li key={index} className="flex items-center">
                      <div className="mr-[5px]">
                        <svg className="w-[5px] h-[5px]" fill="none" viewBox="0 0 4.84375 4.84375">
                          <path d={svgPaths.p1f525e80} fill="#4C4C4C" />
                        </svg>
                      </div>
                      <span className="font-['Inter',sans-serif] font-normal text-base leading-7 text-[#4c4c4c]">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Apply Deadlines */}
          <h2 className="font-['Bitter',serif]  text-[36px] leading-[46px] text-[#030303] mb-8 pt-8">
            Apply Deadlines
          </h2>

          {/* Deadlines Table */}
          <div className="bg-white rounded-xl overflow-hidden mb-12">
            <table className="w-full">
              <thead>
                <tr className="bg-[#0c5776]">
                  <th className="px-6 py-4 text-left font-['Inter',sans-serif] font-normal text-base leading-7 text-white">
                    University
                  </th>
                  <th className="px-6 py-4 text-left font-['Inter',sans-serif] font-normal text-base leading-7 text-white">
                    Spring Intake
                  </th>
                  <th className="px-6 py-4 text-left font-['Inter',sans-serif] font-normal text-base leading-7 text-white">
                    October 1
                  </th>
                  <th className="px-6 py-4 text-left font-['Inter',sans-serif] font-normal text-base leading-7 text-white">
                    December 15
                  </th>
                  <th className="px-6 py-4 text-left font-['Inter',sans-serif] font-normal text-base leading-7 text-white">
                    January 15
                  </th>
                </tr>
              </thead>
              <tbody>
                {deadlineData.map((row, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? 'bg-white' : 'bg-slate-50'}
                  >
                    <td className="px-6 py-4 font-['Inter',sans-serif] font-normal text-base leading-7 text-[#4c4c4c]">
                      {row.program}
                    </td>
                    <td className="px-6 py-4 font-['Inter',sans-serif] font-normal text-base leading-7 text-[#4c4c4c]">
                      {row.springIntake}
                    </td>
                    <td className="px-6 py-4 font-['Inter',sans-serif] font-normal text-base leading-7 text-[#4c4c4c]">
                      {row.october}
                    </td>
                    <td className="px-6 py-4 font-['Inter',sans-serif] font-normal text-base leading-7 text-[#4c4c4c]">
                      {row.december}
                    </td>
                    <td className="px-6 py-4 font-['Inter',sans-serif] font-normal text-base leading-7 text-[#4c4c4c]">
                      {row.january}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Apply Now Section */}
          <h2 className="font-['Bitter',serif]  text-[36px] leading-[46px] text-[#030303] mb-6 pt-8">
            Apply Now
          </h2>

          <p className="font-['Inter',sans-serif] font-normal text-base leading-7 text-[#4c4c4c] mb-12">
            Our program costs are designed to remain transparent competitive and accessible for students from diverse backgrounds. Each academic program includes tuition fees
            registration charges and essential learning resources ensuring students receive high-quality education and comprehensive academic support Costs may vary based o
            program type, course load, and mode of study (on-campus, hybrid, or online) We aim to provide exceptional value through modern facilities, expert faculty, and industr
            aligned curriculum making your investment in education both meaningful and future-focused.
          </p>

          {/* Apply Now Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Undergraduate Card */}
            <div className="flex bg-white rounded-2xl pb-3 flex-col items-center text-center">
              <div className="w-full aspect-[1/1] rounded-2xl overflow-hidden mb-6">
                <img
                  src={imgInnerCatImg1Min}
                  alt="Undergraduate"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-['Bitter',serif] font-thin text-2xl leading-[34px] text-[#030303] mb-3">
                Undergraduate
              </h3>
              <p className="font-['Inter',sans-serif] font-normal text-base leading-7 text-[#4c4c4c] mb-6">
                Begin your academic journey into flexible entry requirements with supportive faculty.
              </p>
              <button
                onClick={() => navigate('/apply')}
                className="bg-[#0c5776] text-white px-8 py-3 rounded-full font-['Inter',sans-serif] font-medium text-base hover:bg-[#094561] transition-colors inline-flex items-center gap-2"
              >
                Apply Now
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Graduate Card */}
            <div className="flex bg-white rounded-2xl pb-3 flex-col items-center text-center">
              <div className="w-full aspect-[1/1] rounded-2xl overflow-hidden mb-6">
                <img
                  src={imgInnerCatImg2Min}
                  alt="Graduate"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-['Bitter',serif] font-thin text-2xl leading-[34px] text-[#030303] mb-3">
                Graduate
              </h3>
              <p className="font-['Inter',sans-serif] font-normal text-base leading-7 text-[#4c4c4c] mb-6">
                Advance your career with streamlined graduate program admissions.
              </p>
              <button
                onClick={() => navigate('/apply')}
                className="bg-[#0c5776] text-white px-8 py-3 rounded-full font-['Inter',sans-serif] font-medium text-base hover:bg-[#094561] transition-colors inline-flex items-center gap-2"
              >
                Apply Now
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* International Students Card */}
            <div className="flex flex-col bg-white rounded-2xl pb-3 items-center text-center">
              <div className="w-full  aspect-[1/1] rounded-2xl overflow-hidden mb-6">
                <img
                  src={imgInnerCatImg3Min}
                  alt="International Students"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-['Bitter',serif] font-thin text-2xl leading-[34px] text-[#030303] mb-3">
                International Students
              </h3>
              <p className="font-['Inter',sans-serif] font-normal text-base leading-7 text-[#4c4c4c] mb-6">
                Join a diverse campus community through a global world-class admissions.
              </p>
              <button
                onClick={() => navigate('/apply')}
                className="bg-[#0c5776] text-white px-8 py-3 rounded-full font-['Inter',sans-serif] font-medium text-base hover:bg-[#094561] transition-colors inline-flex items-center gap-2"
              >
                Apply Now
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}