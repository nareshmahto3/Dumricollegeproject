import { motion } from "motion/react";
import { GraduationCap } from "lucide-react";
import { useNavigate } from "react-router";

export function ProgramsSection() {
  const navigate = useNavigate();
  
  return (
    <section className="relative">
      {/* Top Half - Dark Teal/Green Header */}
      <div className="bg-[#2563EB] pb-48 relative overflow-hidden">
        {/* Decorative circles in background */}
        <div className="absolute right-32 bottom-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute left-32 top-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header Section */}
          <div className="pt-12 pb-16 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl lg:text-5xl font-serif font-light">
                <span className="text-white">Academics & </span>
                <span className="text-white">Programs</span>
              </h2>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Half - Beige Background with Cards */}
      <div className="bg-[#F5F1E8] py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Program Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 -mt-64">
            {/* Card 1 - Master of Laws */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
            >
              <div className="relative h-56">
                <img
                  src="https://images.unsplash.com/photo-1747836130045-f1900cd17686?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXclMjBzY2hvb2wlMjBncmFkdWF0aW9uJTIwc3R1ZGVudHMlMjBjZWxlYnJhdGluZ3xlbnwxfHx8fDE3NzI0ODE1MDF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Master of Laws"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Master of Laws (LLM)
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Advance your legal expertise with an internationally recognized.
                  </p>
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-amber-600 mt-0.5">✓</span>
                    <span>Comparative Legal Systems</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-amber-600 mt-0.5">✓</span>
                    <span>International Public Law</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-amber-600 mt-0.5">✓</span>
                    <span>Corporate Governance</span>
                  </li>
                </ul>
                <div className="flex gap-3">
                  <motion.button
                    onClick={() => navigate('/programs')}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 bg-white cursor-pointer hover:bg-gray-50 text-[#2563EB] border-2 border-[#2563EB] py-2.5 px-6 rounded-full font-medium transition-colors text-sm"
                  >
                    Read More
                  </motion.button>
                  <motion.button
                    onClick={() => navigate('/apply')}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 bg-[#2563EB] cursor-pointer hover:bg-[#1e40af] text-white py-2.5 px-6 rounded-full font-medium transition-colors text-sm flex items-center justify-center gap-1"
                  >
                    Apply Now
                    <span className="text-base">→</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>

            {/* Card 2 - B.Sc. in CSE */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
            >
              <div className="relative h-56">
                <img
                  src="https://images.unsplash.com/photo-1556560984-36a7ec2ba544?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBjb2xsZWdlJTIwc3R1ZGVudCUyMHBvcnRyYWl0JTIwY2FtcHVzfGVufDF8fHx8MTc3MjQ4MTUwNHww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="B.Sc. in CSE"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    B.Sc. in CSE
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Explore the world of coding data and innovation with a degree.
                  </p>
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-amber-600 mt-0.5">✓</span>
                    <span>Data Science & Analytic</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-amber-600 mt-0.5">✓</span>
                    <span>Operating Systems</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-amber-600 mt-0.5">✓</span>
                    <span>Computer Networks</span>
                  </li>
                </ul>
                <div className="flex gap-3">
                  <motion.button
                    onClick={() => navigate('/programs')}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 cursor-pointer bg-white hover:bg-gray-50 text-[#2563EB] border-2 border-[#2563EB] py-2.5 px-6 rounded-full font-medium transition-colors text-sm"
                  >
                    Read More
                  </motion.button>
                  <motion.button
                    onClick={() => navigate('/apply')}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 cursor-pointer bg-[#2563EB] hover:bg-[#1e40af] text-white py-2.5 px-6 rounded-full font-medium transition-colors text-sm flex items-center justify-center gap-1"
                  >
                    Apply Now
                  </motion.button>
                </div>
              </div>
            </motion.div>

            {/* Card 3 - M.Sc. in CSE */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
            >
              <div className="relative h-56">
                <img
                  src="https://images.unsplash.com/photo-1758270705172-07b53627dfcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMGxhcHRvcCUyMHN0dWR5aW5nJTIwdG9nZXRoZXIlMjBjYW1wdXN8ZW58MXx8fHwxNzcyNDgxNTA2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="M.Sc. in CSE"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    M.Sc. in CSE
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Explore advanced knowledge and discovery through guide research.
                  </p>
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-amber-600 mt-0.5">✓</span>
                    <span>MPhil & PhD Programs</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-amber-600 mt-0.5">✓</span>
                    <span>Research Funding & Grants</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-amber-600 mt-0.5">✓</span>
                    <span>Advanced Research Labs</span>
                  </li>
                </ul>
                <div className="flex gap-3">
                  <motion.button
                    onClick={() => navigate('/programs')}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 cursor-pointer bg-white hover:bg-gray-50 text-[#2563EB] border-2 border-[#2563EB] py-2.5 px-6 rounded-full font-medium transition-colors text-sm"
                  >
                    Read More
                  </motion.button>
                  <motion.button
                    onClick={() => navigate('/apply')}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 cursor-pointer bg-[#2563EB] hover:bg-[#1e40af] text-white py-2.5 px-6 rounded-full font-medium transition-colors text-sm flex items-center justify-center gap-1"
                  >
                    Apply Now
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Carousel Dots */}
          <div className="flex justify-center gap-2 mb-8">
            <div className="w-2.5 h-2.5 rounded-full bg-gray-400"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-amber-600"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-gray-400"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-gray-400"></div>
          </div>

          {/* Join Now CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex cursor-pointer items-center gap-2 text-gray-700 text-lg font-semibold hover:gap-4 transition-all"
              onClick={() => navigate('/join')}
            >
              Join Dumri College Now
              <span className="text-2xl">→</span>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}