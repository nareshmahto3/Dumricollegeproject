import { motion } from 'motion/react';

export function Administration() {
  const frequentlyContactedOffices = [
    { department: 'Administrative Center (International)', office: 'W18 218', phone: '+1 (201) 895-3801', email: 'info@univet.edu' },
    { department: 'Global Administration Hub', office: 'W18 210', phone: '+1 (202) 895-4801', email: 'info@univet.edu' },
    { department: 'International Services Office', office: 'W17 212', phone: '+1 (203) 895-3808', email: 'info@univet.edu' },
    { department: 'Worldwide Administration Unit', office: 'W17 232', phone: '+1 (204) 895-3809', email: 'info@univet.edu' },
  ];

  const universityAdministrativeDirectory = [
    { department: 'Administrative Center (International)', phone: '+1 (201) 895-3801', email: 'info@univet.edu' },
    { department: 'International Affairs Office', phone: '+1 (202) 895-3805', email: 'info@univet.edu' },
    { department: 'Global Administration Center', phone: '+1 (203) 895-3803', email: 'info@univet.edu' },
    { department: 'Global Services & Administration', phone: '+1 (201) 895-3806', email: 'info@univet.edu' },
    { department: 'International Programs Office', phone: '+1 (201) 895-3806', email: 'info@univet.edu' },
    { department: 'Office of Global Engagement', phone: '+1 (201) 895-3807', email: 'info@univet.edu' },
    { department: 'Worldwide Operations Unit', phone: '+1 (204) 895-3809', email: 'info@univet.edu' },
  ];

  const campusAdministrativeDirectory = [
    { department: 'Global Institutional Support Center', phone: '+1 (201) 895-3811', email: 'info@univet.edu' },
    { department: 'Administrative Unit (International)', phone: '+1 (202) 895-3812', email: 'info@univet.edu' },
    { department: 'Administrative Division (International)', phone: '+1 (203) 895-3813', email: 'info@univet.edu' },
    { department: 'Administrative Management Center', phone: '+1 (201) 895-3816', email: 'info@univet.edu' },
    { department: 'Administrative Resources Office', phone: '+1 (201) 895-3816', email: 'info@univet.edu' },
    { department: 'Administrative Services Unit', phone: '+1 (201) 895-3817', email: 'info@univet.edu' },
    { department: 'Administrative Support Office', phone: '+1 (204) 895-3819', email: 'info@univet.edu' },
  ];

  return (
    <div className="">
      {/* Header Section */}
      <div className="mb-10">
        <h2 className="font-['Bitter',serif] font-thin text-[48px] leading-[58px] text-[#030303] mb-4">
          Jharkhand Commerce Inter College Administration Director
        </h2>
        <p className="font-['Inter',sans-serif] font-normal text-base leading-7 text-[#4c4c4c]">
          At Jharkhand Commerce Inter College, education goes beyond textbooks and classrooms. We believe in empowering students to explore their passion challenge conventions and discover their potential through meaningful experiences. Our distinguished faculty members are leaders their respective fields, dedicated to delivering world-class education that integrates theory with practical application.
        </p>
      </div>

      {/* Frequently Contacted Offices */}
      <div className="mb-12">
        <h3 className="font-['Bitter',serif] font-thin text-[28px] leading-[38px] text-[#030303] mb-5">
          Frequently Contacted Offices
        </h3>
        
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-[#0c5776]">
                <th className="font-['Bitter',serif] font-thin text-[15px] leading-[25px] text-white text-left px-6 py-4 border border-white/[0.09]">
                  Department
                </th>
                <th className="font-['Bitter',serif] font-thin text-[15px] leading-[25px] text-white text-left px-6 py-4 border border-white/[0.09]">
                  Office
                </th>
                <th className="font-['Bitter',serif] font-thin text-[15px] leading-[25px] text-white text-left px-6 py-4 border border-white/[0.09]">
                  Phone
                </th>
                <th className="font-['Bitter',serif] font-thin text-[15px] leading-[25px] text-white text-left px-6 py-4 border border-white/[0.09]">
                  Email
                </th>
              </tr>
            </thead>
            <tbody>
              {frequentlyContactedOffices.map((office, index) => (
                <tr key={index} className="bg-white hover:bg-slate-50 transition-colors">
                  <td className="font-['Inter',sans-serif] font-normal text-[15px] leading-[25px] text-[#4c4c4c] px-6 py-4 border border-[#e4e4e4]">
                    {office.department}
                  </td>
                  <td className="font-['Inter',sans-serif] font-normal text-[15px] leading-[25px] text-[#4c4c4c] px-6 py-4 border border-[#e4e4e4]">
                    {office.office}
                  </td>
                  <td className="font-['Inter',sans-serif] font-normal text-[15px] leading-[25px] text-[#4c4c4c] px-6 py-4 border border-[#e4e4e4]">
                    {office.phone}
                  </td>
                  <td className="font-['Inter',sans-serif] font-normal text-[15px] leading-[25px] text-[#4c4c4c] px-6 py-4 border border-[#e4e4e4]">
                    <a href={`mailto:${office.email}`} className="text-[#4c4c4c] hover:text-[#0c5776] transition-colors">
                      {office.email}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

    
      </div>

      {/* University Administrative Directory */}
      <div className="mb-12">
        <h3 className="font-['Bitter',serif] font-thin text-[28px] leading-[38px] text-[#030303] mb-5">
          University Administrative Directory
        </h3>
        
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-[#0c5776]">
                <th className="font-['Bitter',serif] font-thin text-[15px] leading-[25px] text-white text-left px-6 py-4 border border-white/[0.09]">
                  Department
                </th>
                <th className="font-['Bitter',serif] font-thin text-[15px] leading-[25px] text-white text-left px-6 py-4 border border-white/[0.09]">
                  Phone
                </th>
                <th className="font-['Bitter',serif] font-thin text-[15px] leading-[25px] text-white text-left px-6 py-4 border border-white/[0.09]">
                  Email
                </th>
              </tr>
            </thead>
            <tbody>
              {universityAdministrativeDirectory.map((office, index) => (
                <tr key={index} className="bg-white hover:bg-slate-50 transition-colors">
                  <td className="font-['Inter',sans-serif] font-normal text-[15px] leading-[25px] text-[#4c4c4c] px-6 py-4 border border-[#e4e4e4]">
                    {office.department}
                  </td>
                  <td className="font-['Inter',sans-serif] font-normal text-[15px] leading-[25px] text-[#4c4c4c] px-6 py-4 border border-[#e4e4e4]">
                    {office.phone}
                  </td>
                  <td className="font-['Inter',sans-serif] font-normal text-[15px] leading-[25px] text-[#4c4c4c] px-6 py-4 border border-[#e4e4e4]">
                    <a href={`mailto:${office.email}`} className="text-[#4c4c4c] hover:text-[#0c5776] transition-colors">
                      {office.email}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Campus Administrative Directory */}
      <div className="mb-12">
        <h3 className="font-['Bitter',serif] font-thin text-[28px] leading-[38px] text-[#030303] mb-5">
          Campus Administrative Directory
        </h3>
        
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-[#0c5776]">
                <th className="font-['Bitter',serif] font-thin text-[15px] leading-[25px] text-white text-left px-6 py-4 border border-white/[0.09]">
                  Department
                </th>
                <th className="font-['Bitter',serif] font-thin text-[15px] leading-[25px] text-white text-left px-6 py-4 border border-white/[0.09]">
                  Phone
                </th>
                <th className="font-['Bitter',serif] font-thin text-[15px] leading-[25px] text-white text-left px-6 py-4 border border-white/[0.09]">
                  Email
                </th>
              </tr>
            </thead>
            <tbody>
              {campusAdministrativeDirectory.map((office, index) => (
                <tr key={index} className="bg-white hover:bg-slate-50 transition-colors">
                  <td className="font-['Inter',sans-serif] font-normal text-[15px] leading-[25px] text-[#4c4c4c] px-6 py-4 border border-[#e4e4e4]">
                    {office.department}
                  </td>
                  <td className="font-['Inter',sans-serif] font-normal text-[15px] leading-[25px] text-[#4c4c4c] px-6 py-4 border border-[#e4e4e4]">
                    {office.phone}
                  </td>
                  <td className="font-['Inter',sans-serif] font-normal text-[15px] leading-[25px] text-[#4c4c4c] px-6 py-4 border border-[#e4e4e4]">
                    <a href={`mailto:${office.email}`} className="text-[#4c4c4c] hover:text-[#0c5776] transition-colors">
                      {office.email}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}