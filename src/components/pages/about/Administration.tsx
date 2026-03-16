import { motion } from 'motion/react';
import { UserCog, Mail, Phone, Building } from 'lucide-react';

export function Administration() {
  const administrators = [
    {
      name: 'Dr. Rajesh Kumar',
      role: 'Principal',
      qualification: 'Ph.D. in Education',
      email: 'principal@dumricollege.edu',
      phone: '+91 98765 43210',
      image: 'https://images.unsplash.com/photo-1754531976838-436a70636c96?w=400&q=80',
      bio: 'Dr. Kumar has been leading the institution for over 15 years, bringing extensive experience in educational administration and policy development.'
    },
    {
      name: 'Dr. Priya Sharma',
      role: 'Vice Principal (Academics)',
      qualification: 'Ph.D. in Computer Science',
      email: 'vp.academics@dumricollege.edu',
      phone: '+91 98765 43211',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
      bio: 'Dr. Sharma oversees academic programs and curriculum development, ensuring high-quality education across all departments.'
    },
    {
      name: 'Prof. Amit Singh',
      role: 'Dean of Research',
      qualification: 'Ph.D. in Engineering',
      email: 'dean.research@dumricollege.edu',
      phone: '+91 98765 43212',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80',
      bio: 'Prof. Singh leads research initiatives and promotes innovation, guiding students and faculty in cutting-edge projects.'
    },
    {
      name: 'Dr. Meera Patel',
      role: 'Dean of Students',
      qualification: 'Ph.D. in Psychology',
      email: 'dean.students@dumricollege.edu',
      phone: '+91 98765 43213',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&q=80',
      bio: 'Dr. Patel focuses on student welfare, counseling services, and creating a supportive campus environment.'
    },
  ];

  return (
    <>
      <div className="mb-8">
        <h2 className="text-3xl font-light text-gray-900 mb-5 font-serif leading-tight">
          Administration
        </h2>
        <p className="text-gray-600 text-base leading-7">
          Meet our dedicated leadership team committed to excellence in education and student development.
          <br className="hidden lg:block" />
          Our administrators bring decades of combined experience in education, research, and institutional management.
        </p>
      </div>

      {/* Administrative Team */}
      <div className="space-y-8">
        {administrators.map((admin, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100 hover:border-[#2F584F] transition-all"
          >
            <div className="flex flex-col md:flex-row gap-6">
              {/* Profile Image */}
              <div className="flex-shrink-0">
                <div className="relative w-32 h-32 rounded-2xl overflow-hidden">
                  <img
                    src={admin.image}
                    alt={admin.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2F584F]/60 to-transparent"></div>
                </div>
              </div>

              {/* Details */}
              <div className="flex-1">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">{admin.name}</h3>
                    <div className="flex items-center gap-2 mb-2">
                      <UserCog className="w-5 h-5 text-[#2F584F]" />
                      <p className="text-[#2F584F] font-semibold text-lg">{admin.role}</p>
                    </div>
                    <p className="text-gray-600 text-sm">{admin.qualification}</p>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed mb-4">{admin.bio}</p>

                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Mail className="w-4 h-4 text-[#FDC72F]" />
                    <a href={`mailto:${admin.email}`} className="text-sm hover:text-[#2F584F] transition-colors">
                      {admin.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Phone className="w-4 h-4 text-[#FDC72F]" />
                    <a href={`tel:${admin.phone}`} className="text-sm hover:text-[#2F584F] transition-colors">
                      {admin.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Office Information */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mt-8 bg-gradient-to-br from-[#2F584F] to-[#1a3329] rounded-2xl p-8 text-white"
      >
        <div className="flex items-start gap-4 mb-6">
          <Building className="w-8 h-8 text-[#FDC72F]" />
          <div>
            <h3 className="text-2xl font-bold mb-2">Administrative Office</h3>
            <p className="text-white/90">
              For general inquiries and administrative matters, please visit our main office or contact us during working hours.
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-4 mt-6">
          <div>
            <p className="text-[#FDC72F] font-semibold mb-1">Office Hours</p>
            <p className="text-white/90">Monday - Friday: 9:00 AM - 5:00 PM</p>
            <p className="text-white/90">Saturday: 9:00 AM - 1:00 PM</p>
          </div>
          <div>
            <p className="text-[#FDC72F] font-semibold mb-1">Contact</p>
            <p className="text-white/90">Phone: +91 98765 43200</p>
            <p className="text-white/90">Email: admin@dumricollege.edu</p>
          </div>
        </div>
      </motion.div>
    </>
  );
}
