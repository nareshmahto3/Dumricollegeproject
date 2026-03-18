import { useState } from 'react';
import { useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { ChevronRight, Mail, Phone, GraduationCap } from 'lucide-react';
import { CarouselHeader } from '../CarouselHeader';
import { Footer } from '../Footer';
import imgDivElementorElement from "figma:asset/c967933b88d4d4c78469e452688858c361871614.png";
import imgBnrArrow11 from "figma:asset/13bec648740b03b5c9d2c72567cc9f3e05c47165.png";
import imgEBlTeam6MinJpg from "figma:asset/832a564969d97ad9368108a4bf17401f3a6a3dde.png";
import imgEBlTeam5MinJpg from "figma:asset/6a19a7b5276ff89a91342cda34f8b9bd14837b3c.png";
import imgEBlTeam4MinJpg from "figma:asset/b7ea4e98b4ed4e693ac9a4930e33a56bfa859a17.png";
import imgEBlTeam3MinJpg from "figma:asset/ea5e374afdef5a39657cdb7a5e8b48d51f87804b.png";
import imgEBlTeam2MinJpg from "figma:asset/fa187de29ccf07a8d4687dde792b50b1204cb82d.png";
import imgEBlTeam1MinJpg from "figma:asset/a1adb3e4cc61a600187de60fe0db91d01d53e7dc.png";

interface FacultyMember {
  id: string;
  name: string;
  position: string;
  department: string;
  image: string;
  email?: string;
  phone?: string;
  education?: string;
}

const facultyMembers: FacultyMember[] = [
  {
    id: '1',
    name: 'Kathryn Murphy',
    position: 'Support Teacher',
    department: 'Commerce',
    image: imgEBlTeam1MinJpg,
    email: 'kathryn.murphy@dumricollege.edu',
    education: 'M.Com, B.Ed'
  },
  {
    id: '2',
    name: 'Savannah Nguyen',
    position: 'Academic Advisor',
    department: 'Science',
    image: imgEBlTeam2MinJpg,
    email: 'savannah.nguyen@dumricollege.edu',
    education: 'M.Sc (Physics), Ph.D'
  },
  {
    id: '3',
    name: 'Brooklyn Simmons',
    position: 'Academic Assistant',
    department: 'Arts',
    image: imgEBlTeam3MinJpg,
    email: 'brooklyn.simmons@dumricollege.edu',
    education: 'M.A (English)'
  },
  {
    id: '4',
    name: 'Darlene Robertson',
    position: 'Academic Advisor',
    department: 'Commerce',
    image: imgEBlTeam4MinJpg,
    email: 'darlene.robertson@dumricollege.edu',
    education: 'M.Com, MBA'
  },
  {
    id: '5',
    name: 'Cameron Williamson',
    position: 'Research Assistant',
    department: 'Science',
    image: imgEBlTeam5MinJpg,
    email: 'cameron.williamson@dumricollege.edu',
    education: 'M.Sc (Chemistry)'
  },
  {
    id: '6',
    name: 'Leslie Alexander',
    position: 'Teaching Assistant (TA)',
    department: 'Arts',
    image: imgEBlTeam6MinJpg,
    email: 'leslie.alexander@dumricollege.edu',
    education: 'M.A (History)'
  },
  {
    id: '7',
    name: 'Dr. Rajesh Kumar',
    position: 'Professor & HOD',
    department: 'Commerce',
    image: 'https://images.unsplash.com/photo-1584554376766-ac0f2c65e949?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWFjaGVyJTIwcG9ydHJhaXQlMjBtYWxlfGVufDF8fHx8MTc3MzYwMTAzMXww&ixlib=rb-4.1.0&q=80&w=1080',
    email: 'rajesh.kumar@dumricollege.edu',
    education: 'M.Com, Ph.D (Commerce)'
  },
  {
    id: '8',
    name: 'Dr. Priya Sharma',
    position: 'Associate Professor',
    department: 'Science',
    image: 'https://images.unsplash.com/photo-1758685848001-0396a85ba84f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWFjaGVyJTIwcG9ydHJhaXQlMjBmZW1hbGV8ZW58MXx8fHwxNzczNjAxMDMxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    email: 'priya.sharma@dumricollege.edu',
    education: 'M.Sc, Ph.D (Biology)'
  },
  {
    id: '9',
    name: 'Prof. Amit Verma',
    position: 'Senior Lecturer',
    department: 'Arts',
    image: 'https://images.unsplash.com/photo-1755519024827-fd05075a7200?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzb3IlMjBhY2FkZW1pYyUyMHBvcnRyYWl0JTIwbWFsZXxlbnwxfHx8fDE3NzM2MDEwMzF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    email: 'amit.verma@dumricollege.edu',
    education: 'M.A (Political Science), Ph.D'
  },
  {
    id: '10',
    name: 'Dr. Meera Patel',
    position: 'Assistant Professor',
    department: 'Commerce',
    image: 'https://images.unsplash.com/photo-1758685845906-6f705cde4fb7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzb3IlMjBhY2FkZW1pYyUyMHBvcnRyYWl0JTIwZmVtYWxlfGVufDF8fHx8MTc3MzYwMTAzMnww&ixlib=rb-4.1.0&q=80&w=1080',
    email: 'meera.patel@dumricollege.edu',
    education: 'M.Com, CA, Ph.D'
  },
  {
    id: '11',
    name: 'Prof. Suresh Singh',
    position: 'Lecturer',
    department: 'Science',
    image: 'https://images.unsplash.com/photo-1758685734511-4f49ce9a382b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwbGVjdHVyZXIlMjBwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzM2MDEwMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    email: 'suresh.singh@dumricollege.edu',
    education: 'M.Sc (Mathematics), B.Ed'
  },
  {
    id: '12',
    name: 'Dr. Anjali Gupta',
    position: 'Associate Professor',
    department: 'Arts',
    image: 'https://images.unsplash.com/photo-1659080907111-7c726e435a28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY2FkZW1pYyUyMHN0YWZmJTIwcHJvZmVzc2lvbmFsJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzczNjAxMDMzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    email: 'anjali.gupta@dumricollege.edu',
    education: 'M.A (Sociology), Ph.D'
  }
];

export function AllFacultyPage() {
  const navigate = useNavigate();
  const [selectedDepartment, setSelectedDepartment] = useState<string>('all');

  const departments = ['all', 'Commerce', 'Science', 'Arts'];

  const filteredFaculty = selectedDepartment === 'all' 
    ? facultyMembers 
    : facultyMembers.filter(member => member.department === selectedDepartment);

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
            alt="Graduation ceremony"
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
            <span className="text-white text-sm">All Faculty Members</span>
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-6xl font-light text-white mb-6 font-serif">
            Faculty Members
          </h1>

          {/* Description */}
          <p className="text-white/90 text-base leading-7 max-w-3xl">
            Education goes beyond textbooks and classrooms. We believe in empowering students
            <br className="hidden sm:block" />
            to explore their passions, challenge conventions, and discover their potential.
          </p>
        </div>
      </section>

      {/* Department Filter */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setSelectedDepartment(dept)}
                className={`px-6 py-2.5 rounded-md font-medium text-sm transition-colors ${
                  selectedDepartment === dept
                    ? 'bg-[#0c5776] text-white'
                    : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                }`}
              >
                {dept === 'all' ? 'All Departments' : dept}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            key={selectedDepartment}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredFaculty.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                onClick={() => navigate(`/faculty/${member.id}`)}
                className="group bg-white rounded-xl shadow-md hover:shadow-2xl transition-all overflow-hidden cursor-pointer"
              >
                {/* Image */}
                <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Content */}
                <div className="p-6 text-center">
                  {/* Name */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {member.name}
                  </h3>

                  {/* Position */}
                  <p className="text-gray-600 text-sm mb-3">
                    {member.position}
                  </p>

                  {/* Department Badge */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium mb-4">
                    <GraduationCap className="w-3.5 h-3.5" />
                    {member.department}
                  </div>

                  {/* Education */}
                  {member.education && (
                    <p className="text-gray-500 text-xs mb-4">
                      {member.education}
                    </p>
                  )}

                  {/* Contact Info */}
                  <div className="space-y-2 border-t pt-4">
                    {member.email && (
                      <div className="flex items-center justify-center gap-2 text-xs text-gray-600">
                        <Mail className="w-3.5 h-3.5 text-blue-600" />
                        <a 
                          href={`mailto:${member.email}`}
                          className="hover:text-blue-600 transition-colors truncate"
                        >
                          {member.email}
                        </a>
                      </div>
                    )}
                    {member.phone && (
                      <div className="flex items-center justify-center gap-2 text-xs text-gray-600">
                        <Phone className="w-3.5 h-3.5 text-blue-600" />
                        <span>{member.phone}</span>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* No Results */}
          {filteredFaculty.length === 0 && (
            <div className="text-center py-16">
              <GraduationCap className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No Faculty Members Found</h3>
              <p className="text-gray-600 mb-6">
                No faculty members found in this department.
              </p>
              <button
                onClick={() => setSelectedDepartment('all')}
                className="text-blue-600 hover:underline font-medium"
              >
                View all faculty members
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-gradient-to-br from-[#0c5776] to-[#083d52] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="text-4xl md:text-5xl font-bold mb-2">{facultyMembers.length}+</div>
              <div className="text-white/80 text-sm">Faculty Members</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="text-4xl md:text-5xl font-bold mb-2">3</div>
              <div className="text-white/80 text-sm">Departments</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="text-4xl md:text-5xl font-bold mb-2">8+</div>
              <div className="text-white/80 text-sm">Ph.D Holders</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <div className="text-4xl md:text-5xl font-bold mb-2">15+</div>
              <div className="text-white/80 text-sm">Years Average Experience</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}