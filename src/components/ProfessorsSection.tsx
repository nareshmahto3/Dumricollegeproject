import { motion } from "motion/react";
import { ChevronLeft, ChevronRight, GraduationCap, Linkedin, Instagram, Share2, Facebook } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router";

interface Professor {
  name: string;
  position: string;
  image: string;
}

const professors: Professor[] = [
  {
    name: "Dr. Rajesh Kumar",
    position: "Head of Computer Science",
    image: "https://images.unsplash.com/photo-1758685734511-4f49ce9a382b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwcm9mZXNzb3IlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzI0ODk2MDd8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    name: "Dr. Priya Sharma",
    position: "Professor of Mathematics",
    image: "https://images.unsplash.com/photo-1758270704587-43339a801396?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBwcm9mZXNzb3IlMjBhY2FkZW1pY3xlbnwxfHx8fDE3NzI0ODk2MDh8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    name: "Dr. Amit Patel",
    position: "Associate Professor of Physics",
    image: "https://images.unsplash.com/photo-1758270704925-fa59d93119c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwcHJvZmVzc29yJTIwdGVhY2hpbmd8ZW58MXx8fHwxNzcyNDI2NDU0fDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    name: "Dr. Sunita Verma",
    position: "Dean of Arts & Humanities",
    image: "https://images.unsplash.com/photo-1758270704587-43339a801396?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBwcm9mZXNzb3IlMjBhY2FkZW1pY3xlbnwxfHx8fDE3NzI0ODk2MDh8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    name: "Dr. Anil Singh",
    position: "Professor of Chemistry",
    image: "https://images.unsplash.com/photo-1758685734511-4f49ce9a382b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZW5pb3IlMjBhY2FkZW1pYyUyMHByb2Zlc3NvcnxlbnwxfHx8fDE3NzI0ODk2MDh8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    name: "Dr. Meera Reddy",
    position: "Assistant Professor of Biology",
    image: "https://images.unsplash.com/photo-1758270704587-43339a801396?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBwcm9mZXNzb3IlMjBhY2FkZW1pY3xlbnwxfHx8fDE3NzI0ODk2MDh8MA&ixlib=rb-4.1.0&q=80&w=1080"
  }
];

export function ProfessorsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const navigate = useNavigate();

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % professors.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + professors.length) % professors.length);
  };

  const getVisibleProfessors = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % professors.length;
      visible.push({ ...professors[index], originalIndex: index });
    }
    return visible;
  };

  const visibleProfessors = getVisibleProfessors();
  const centerIndex = 1;

  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Decorative graduation cap on the right */}
      <motion.div
        className="absolute right-12 top-1/3 hidden xl:block"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-20 h-20 bg-[#FDB71A] rounded-full flex items-center justify-center shadow-lg">
          <GraduationCap className="w-10 h-10 text-white" />
        </div>
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Section label */}
            <div className="flex items-center gap-2 mb-3">
              <GraduationCap className="w-5 h-5 text-[#00ADE2]" />
              <span className="text-xs font-semibold text-gray-700 uppercase tracking-wider">
                OUR PROFESSORS
              </span>
            </div>
            
            {/* Title */}
            <h2 className="text-4xl lg:text-5xl font-serif text-gray-900">
              Dumri College Professors
            </h2>
          </motion.div>

          {/* View All Button */}
          <motion.button
            onClick={() => navigate("/all-faculty")}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-2"
          >
            <span className="text-sm font-medium text-gray-900">View All Professors</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>
        </div>

        {/* Professors Carousel */}
        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 z-20 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-all duration-300"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 z-20 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-all duration-300"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>

          {/* Cards Container */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center py-8">
            {visibleProfessors.map((professor, idx) => {
              const isCenterCard = idx === centerIndex;
              const isHovered = hoveredCard === idx;
              
              return (
                <motion.div
                  key={`${professor.originalIndex}-${idx}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ 
                    opacity: 1, 
                    scale: isCenterCard ? 1.05 : 1,
                    y: isCenterCard ? -8 : 0
                  }}
                  transition={{ duration: 0.5 }}
                  className={`relative group ${isCenterCard ? 'md:col-span-1' : ''}`}
                  onMouseEnter={() => setHoveredCard(idx)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div
                    className={`rounded-xl overflow-hidden shadow-lg transition-all duration-500 ${
                      isHovered
                        ? 'bg-[#1a7a8f]'
                        : 'bg-white'
                    }`}
                  >
                    {/* Image Container */}
                    <div className="relative">
                      <div className="relative overflow-hidden aspect-[4/3.5]">
                        <motion.img
                          src={professor.image}
                          alt={professor.name}
                          className="w-full h-full object-cover"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.5 }}
                        />
                        
                        {/* Dark overlay on hover */}
                        <div 
                          className={`absolute inset-0 bg-black/40 transition-opacity duration-500 ${
                            isHovered ? 'opacity-100' : 'opacity-0'
                          }`}
                        />
                      </div>

                      {/* Social Icons - Only visible on hover */}
                      {isHovered && (
                        <motion.div
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 20 }}
                          transition={{ duration: 0.3 }}
                          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-2 z-10"
                        >
                          <motion.a
                            href="#"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.1 }}
                            whileHover={{ scale: 1.15 }}
                            className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#0077B5] hover:text-white transition-colors"
                          >
                            <Linkedin className="w-3.5 h-3.5" />
                          </motion.a>
                          <motion.a
                            href="#"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.15 }}
                            whileHover={{ scale: 1.15 }}
                            className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#E4405F] hover:text-white transition-colors"
                          >
                            <Instagram className="w-3.5 h-3.5" />
                          </motion.a>
                          <motion.a
                            href="#"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.2 }}
                            whileHover={{ scale: 1.15 }}
                            className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#000000] hover:text-white transition-colors"
                          >
                            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                            </svg>
                          </motion.a>
                          <motion.a
                            href="#"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.25 }}
                            whileHover={{ scale: 1.15 }}
                            className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#1877F2] hover:text-white transition-colors"
                          >
                            <Facebook className="w-3.5 h-3.5" />
                          </motion.a>
                        </motion.div>
                      )}

                      {/* Share Icon */}
                      <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 z-10">
                        <motion.button
                          whileHover={{ scale: 1.1, rotate: 15 }}
                          className="w-7 h-7 bg-[#00ADE2] rounded-full flex items-center justify-center shadow-lg"
                        >
                          <Share2 className="w-3.5 h-3.5 text-white" />
                        </motion.button>
                      </div>
                    </div>

                    {/* Professor Info */}
                    <div className={`p-3 pt-6 h-30 text-center transition-colors duration-500 ${
                      isHovered ? 'text-white' : 'text-gray-900'
                    }`}>
                      <h3 className="text-base font-serif mb-0.5">
                        {professor.name}
                      </h3>
                      <p className={`text-xs transition-colors duration-500 ${
                        isHovered ? 'text-white/80' : 'text-gray-600'
                      }`}>
                        {professor.position}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {professors.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  idx === currentIndex
                    ? "bg-[#00ADE2] w-8"
                    : "bg-gray-300 w-2.5 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}