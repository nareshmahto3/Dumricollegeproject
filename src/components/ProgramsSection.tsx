import { motion } from "motion/react";
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
            {/* Card 1 - Intermediate in Commerce (I.Com) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
            >
              <div className="relative h-56">
                <img
                  src="https://images.unsplash.com/photo-1543269865-cbf427effbad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHN0dWRlbnRzJTIwY2xhc3Nyb29tJTIwZGlzY3Vzc2lvbiUyMGdyb3VwfGVufDF8fHx8MTc3MzgyNTE1N3ww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Intermediate in Commerce"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Intermediate in Commerce (I.Com)
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Build a strong foundation in commerce and business studies.
                  </p>
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-amber-600 mt-0.5">✓</span>
                    <span>Accounting & Finance</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-amber-600 mt-0.5">✓</span>
                    <span>Business Studies</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-amber-600 mt-0.5">✓</span>
                    <span>Economics & Statistics</span>
                  </li>
                </ul>
                <div className="flex gap-3">
                  <motion.button
                    onClick={() => navigate('/programs/icom')}
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

            {/* Card 2 - Intermediate in Science (I.Sc) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
            >
              <div className="relative h-56">
                <img
                  src="https://images.unsplash.com/photo-1758685733987-54952cd1c8c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2llbmNlJTIwbGFib3JhdG9yeSUyMHN0dWRlbnRzJTIwc3R1ZHlpbmclMjBjaGVtaXN0cnl8ZW58MXx8fHwxNzczODI1MTUzfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Intermediate in Science"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Intermediate in Science (I.Sc)
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Explore the world of science with comprehensive laboratory experience.
                  </p>
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-amber-600 mt-0.5">✓</span>
                    <span>Physics & Chemistry</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-amber-600 mt-0.5">✓</span>
                    <span>Mathematics & Biology</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-amber-600 mt-0.5">✓</span>
                    <span>Computer Science</span>
                  </li>
                </ul>
                <div className="flex gap-3">
                  <motion.button
                    onClick={() => navigate('/programs/isc')}
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
                    <span className="text-base">→</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>

            {/* Card 3 - Intermediate in Arts (I.A) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
            >
              <div className="relative h-56">
                <img
                  src="https://images.unsplash.com/photo-1681696533492-4a94d93482ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRzJTIwaHVtYW5pdGllcyUyMHN0dWRlbnRzJTIwcmVhZGluZyUyMGJvb2tzJTIwbGlicmFyeXxlbnwxfHx8fDE3NzM4MjUxNTN8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Intermediate in Arts"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Intermediate in Arts (I.A)
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Discover humanities, languages, and social sciences.
                  </p>
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-amber-600 mt-0.5">✓</span>
                    <span>History & Political Science</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-amber-600 mt-0.5">✓</span>
                    <span>Languages & Literature</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-amber-600 mt-0.5">✓</span>
                    <span>Psychology & Sociology</span>
                  </li>
                </ul>
                <div className="flex gap-3">
                  <motion.button
                    onClick={() => navigate('/programs/ia')}
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
                    <span className="text-base">→</span>
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
              onClick={() => navigate('/apply')}
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