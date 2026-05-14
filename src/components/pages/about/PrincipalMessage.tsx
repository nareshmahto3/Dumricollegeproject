import { motion } from 'motion/react';
import { Quote, GraduationCap, Target, Users } from 'lucide-react';

export function PrincipalMessage() {
  return (
    <>
      <div className="mb-8">
        <h2 className="text-3xl font-light text-gray-900 mb-5 font-serif leading-tight">
          Principal's Message
        </h2>
        <p className="text-gray-600 text-base leading-7">
          A message from our Principal, Ajay Mahto, to the Jharkhand Commerce Inter College community.
        </p>
      </div>

      {/* Principal Profile Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-2xl shadow-xl border-2 border-gray-100 overflow-hidden mb-8"
      >
        <div className="flex flex-col md:flex-row">
          {/* Image Section */}
          <div className="md:w-1/3 relative h-80 md:h-auto">
            <img
              src="https://images.unsplash.com/photo-1754531976838-436a70636c96?w=400&q=80"
              alt="Dr. Rajesh Kumar"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2F584F]/80 to-transparent md:bg-gradient-to-r"></div>
          </div>

          {/* Content Section */}
          <div className="md:w-2/3 p-8">
            <div className="mb-6">
              <h3 className="text-3xl font-bold text-gray-900 mb-2">Ajay Mahto</h3>
              <p className="text-[#2F584F] font-semibold text-xl mb-1">Principal</p>
              <p className="text-gray-600">Ph.D. in Education | 15+ Years in Educational Leadership</p>
            </div>

            <div className="flex items-center gap-4 flex-wrap">
              <div className="flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-lg">
                <GraduationCap className="w-5 h-5 text-blue-600" />
                <span className="text-sm font-semibold text-gray-700">Educational Expert</span>
              </div>
              <div className="flex items-center gap-2 bg-green-50 px-4 py-2 rounded-lg">
                <Target className="w-5 h-5 text-green-600" />
                <span className="text-sm font-semibold text-gray-700">Visionary Leader</span>
              </div>
              <div className="flex items-center gap-2 bg-purple-50 px-4 py-2 rounded-lg">
                <Users className="w-5 h-5 text-purple-600" />
                <span className="text-sm font-semibold text-gray-700">Student Advocate</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Message Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="space-y-6"
      >
        {/* Opening Quote */}
        <div className="bg-[#F6F4EE] rounded-lg p-8">
          <Quote className="w-12 h-12 text-[#FDC72F] fill-[#FDC72F] mb-4" />
          <p className="text-gray-900 text-xl italic leading-9">
            "Welcome to Jharkhand Commerce Inter College, where we don't just educate minds; we shape futures, build character, 
            and nurture the leaders of tomorrow."
          </p>
        </div>

        {/* Message Paragraphs */}
        <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-gray-100">
          <div className="space-y-5 text-gray-700 text-base leading-7">
            <p className="text-lg font-semibold text-gray-900">Dear Students, Parents, and Well-wishers,</p>
            
            <p>
              It gives me immense pleasure to welcome you to Jharkhand Commerce Inter College (Dumri College), 
              an institution that has been a beacon of educational excellence for over five decades. Since our 
              establishment in 1976, we have been committed to providing quality education that goes beyond 
              textbooks and examinations.
            </p>

            <p>
              At Jharkhand Commerce Inter College, we believe that education is not merely about acquiring knowledge but about 
              developing well-rounded individuals who possess strong values, critical thinking abilities, and 
              a sense of social responsibility. Our dedicated faculty members work tirelessly to create an 
              environment where students can explore their potential, discover their passions, and prepare 
              themselves for the challenges of the modern world.
            </p>

            <p>
              We are proud of our state-of-the-art infrastructure, modern laboratories, comprehensive library, 
              and vibrant campus life that provides numerous opportunities for holistic development. Our 
              commitment to academic excellence is reflected in our consistently outstanding results and the 
              success of our alumni who are making significant contributions in various fields across the globe.
            </p>

            <p>
              In today's rapidly changing world, we focus not only on academic achievements but also on 
              developing skills such as creativity, innovation, teamwork, and leadership. We encourage our 
              students to participate in co-curricular activities, sports, cultural events, and community 
              service programs that help them grow into responsible citizens.
            </p>

            <p>
              To the parents, I assure you that your children are in safe and capable hands. We treat every 
              student as a unique individual with distinctive talents and aspirations. Our counseling services, 
              mentorship programs, and supportive learning environment ensure that each student receives 
              personalized attention and guidance.
            </p>

            <p>
              I invite you to join us on this exciting journey of learning, growth, and transformation. 
              Together, we will continue to uphold the legacy of our founder and work towards creating a 
              brighter future for our students and society.
            </p>

            <p className="text-lg font-semibold text-gray-900 mt-6">
              With warm regards and best wishes,
            </p>
            <div className="mt-4">
              <p className="font-bold text-gray-900 text-lg">Ajay Mahto</p>
              <p className="text-[#2F584F] font-semibold">Principal</p>
              <p className="text-gray-600 text-sm">Jharkhand Commerce Inter College (Dumri)</p>
            </div>
          </div>
        </div>

        {/* Closing Highlights */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-6 text-white">
            <h4 className="text-2xl font-bold mb-2">Our Commitment</h4>
            <p className="text-blue-100">
              Excellence in education, holistic development, and preparing global citizens.
            </p>
          </div>
          <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-xl p-6 text-white">
            <h4 className="text-2xl font-bold mb-2">Our Promise</h4>
            <p className="text-green-100">
              Safe learning environment, personalized attention, and unwavering support.
            </p>
          </div>
          <div className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-xl p-6 text-white">
            <h4 className="text-2xl font-bold mb-2">Our Vision</h4>
            <p className="text-purple-100">
              Shaping futures, building leaders, and transforming lives through education.
            </p>
          </div>
        </div>
      </motion.div>
    </>
  );
}
