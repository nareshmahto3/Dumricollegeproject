import { motion } from 'motion/react';
import { Quote, Sparkles, Award, Heart } from 'lucide-react';

export function Founder() {
  return (
    <>
      <div className="mb-8">
        <h2 className="text-3xl font-light text-gray-900 mb-5 font-serif leading-tight">
          Our Founder
        </h2>
        <p className="text-gray-600 text-base leading-7">
          The visionary behind Dumri College's establishment and continued legacy of excellence.
        </p>
      </div>

      {/* Founder Profile */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-2xl overflow-hidden shadow-xl border-2 border-gray-100 mb-8"
      >
        <div className="relative h-80 bg-gradient-to-br from-[#2F584F] to-[#1a3329]">
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"
            alt="Founder"
            className="w-full h-full object-cover opacity-90 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2F584F] via-[#2F584F]/50 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <h3 className="text-4xl font-bold mb-2">Late Shri Ram Prasad Sharma</h3>
            <p className="text-[#FDC72F] font-semibold text-xl">Founder & Visionary</p>
            <p className="text-white/90 mt-2">1930 - 2005</p>
          </div>
        </div>

        <div className="p-8">
          {/* Quote */}
          <div className="bg-[#F6F4EE] rounded-lg p-6 mb-6">
            <Quote className="w-10 h-10 text-[#FDC72F] fill-[#FDC72F] mb-4" />
            <p className="text-gray-900 text-lg italic leading-8">
              "Education is not just about acquiring knowledge; it is about building character, 
              fostering values, and empowering individuals to make a positive difference in society."
            </p>
            <p className="text-gray-700 font-semibold mt-4">- Late Shri Ram Prasad Sharma</p>
          </div>

          {/* Biography */}
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Late Shri Ram Prasad Sharma, a visionary educator and social reformer, established Jharkhand Commerce 
              Inter College (Dumri College) in 1976 with a dream to provide quality education to the youth of the region. 
              Born in a small village, he understood the transformative power of education firsthand.
            </p>
            <p>
              Despite facing numerous challenges, he persevered with unwavering determination to create an institution 
              that would not only impart academic knowledge but also instill strong moral values and social responsibility 
              in students. His vision was to create leaders who would contribute to nation-building while maintaining 
              their cultural roots.
            </p>
            <p>
              Under his guidance, the college grew from a modest beginning with just 200 students to become one of the 
              most respected educational institutions in the state. His emphasis on holistic education, combining academic 
              excellence with character development, continues to be the cornerstone of our institution's philosophy.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Legacy Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h3 className="text-2xl font-bold text-gray-900 mb-6">His Enduring Legacy</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border-2 border-blue-200">
            <Sparkles className="w-10 h-10 text-blue-600 mb-4" />
            <h4 className="text-lg font-bold text-gray-900 mb-2">Educational Vision</h4>
            <p className="text-gray-700">
              Pioneered accessible quality education in the region, opening doors for thousands of students.
            </p>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border-2 border-green-200">
            <Award className="w-10 h-10 text-green-600 mb-4" />
            <h4 className="text-lg font-bold text-gray-900 mb-2">Academic Excellence</h4>
            <p className="text-gray-700">
              Established rigorous academic standards that continue to define our institution today.
            </p>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border-2 border-purple-200">
            <Heart className="w-10 h-10 text-purple-600 mb-4" />
            <h4 className="text-lg font-bold text-gray-900 mb-2">Social Impact</h4>
            <p className="text-gray-700">
              Created a lasting impact on society through education, upliftment, and community service.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Memorial */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-8 bg-gradient-to-br from-[#2F584F] to-[#1a3329] rounded-2xl p-8 text-white text-center"
      >
        <p className="text-lg leading-relaxed">
          His legacy lives on through the thousands of students who have passed through these halls, 
          <br className="hidden lg:block" />
          each carrying forward his vision of creating a better, more educated society.
        </p>
        <p className="text-[#FDC72F] font-semibold text-xl mt-4">
          In Loving Memory of Our Founder
        </p>
      </motion.div>
    </>
  );
}
