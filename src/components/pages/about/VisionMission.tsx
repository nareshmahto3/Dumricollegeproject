import { motion } from 'motion/react';
import { Eye, Target, Heart, Sparkles } from 'lucide-react';

export function VisionMission() {
  return (
    <>
      <div className="mb-8">
        <h2 className="text-3xl font-light text-gray-900 mb-5 font-serif leading-tight">
          Vision and Mission
        </h2>
        <p className="text-gray-600 text-base leading-7">
          Our vision and mission statements guide everything we do at Dumri College. They reflect our commitment to
          <br className="hidden lg:block" />
          excellence, innovation, and holistic development of our students.
        </p>
      </div>

      {/* Vision Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 mb-8 border-2 border-blue-200"
      >
        <div className="flex items-start gap-4 mb-6">
          <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0">
            <Eye className="w-8 h-8 text-white" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-blue-900 mb-2">Our Vision</h3>
            <p className="text-blue-700 font-semibold">Where We Aspire to Be</p>
          </div>
        </div>
        <p className="text-gray-800 text-lg leading-relaxed mb-6">
          To be a globally recognized center of academic excellence, fostering innovation, research, and holistic 
          development of students who become responsible global citizens and leaders in their chosen fields.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {['Global Recognition', 'Innovation Hub', 'Holistic Development', 'Social Impact'].map((item, idx) => (
            <div key={idx} className="flex items-center gap-2 bg-white/60 rounded-lg px-4 py-2">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span className="text-gray-700 font-medium">{item}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Mission Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 mb-8 border-2 border-green-200"
      >
        <div className="flex items-start gap-4 mb-6">
          <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center flex-shrink-0">
            <Target className="w-8 h-8 text-white" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-green-900 mb-2">Our Mission</h3>
            <p className="text-green-700 font-semibold">What We Do</p>
          </div>
        </div>
        <p className="text-gray-800 text-lg leading-relaxed mb-6">
          To provide quality education that empowers students with knowledge, skills, values, and critical thinking 
          abilities to excel in their chosen fields and contribute meaningfully to society.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {['Quality Education', 'Skill Development', 'Value-Based Learning', 'Career Excellence'].map((item, idx) => (
            <div key={idx} className="flex items-center gap-2 bg-white/60 rounded-lg px-4 py-2">
              <Sparkles className="w-4 h-4 text-green-600" />
              <span className="text-gray-700 font-medium">{item}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Values Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border-2 border-purple-200"
      >
        <div className="flex items-start gap-4 mb-6">
          <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0">
            <Heart className="w-8 h-8 text-white" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-purple-900 mb-2">Our Core Values</h3>
            <p className="text-purple-700 font-semibold">What We Stand For</p>
          </div>
        </div>
        <p className="text-gray-800 text-lg leading-relaxed mb-6">
          Integrity, Excellence, Innovation, Inclusivity, and Social Responsibility form the ethical foundation 
          that guides our decisions, actions, and relationships.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {['Integrity First', 'Pursuit of Excellence', 'Inclusive Environment', 'Social Responsibility'].map((item, idx) => (
            <div key={idx} className="flex items-center gap-2 bg-white/60 rounded-lg px-4 py-2">
              <Sparkles className="w-4 h-4 text-purple-600" />
              <span className="text-gray-700 font-medium">{item}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </>
  );
}
