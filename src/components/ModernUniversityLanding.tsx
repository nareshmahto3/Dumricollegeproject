import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import {
  GraduationCap,
  BookOpen,
  Users,
  Award,
  ArrowRight,
  MapPin,
  Calendar,
  Globe,
  Building2,
  TrendingUp,
  Sparkles,
  Lightbulb,
  Home,
  Briefcase,
  Play,
  ChevronRight,
  ChevronLeft,
  Phone,
  Mail,
  Clock,
  Trophy,
  Heart,
  Star,
  Target,
  Rocket,
  Shield,
  Zap,
  CheckCircle,
  ArrowUpRight,
  ExternalLink,
  Laptop,
  X,
  Maximize2,
  ZoomIn,
  Share2,
} from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Card } from './ui/card';
import { SharedNavigation } from './shared/SharedNavigation';
import { SharedFooter } from './shared/SharedFooter';
import { Preloader } from './shared/Preloader';
import logoImage from 'figma:asset/233f90283b695bb1a0a35b62804867616ecd9a87.png';

const heroSlides = [
  {
    image: 'https://images.unsplash.com/photo-1763890498955-13f109b2fbd7?w=1920&q=80',
    title: 'DUMRI COLLEGE',
    subtitle: 'Where Excellence Meets Opportunity',
    description: 'Join 15,000+ students in pursuing world-class education',
    cta: 'Explore Programs',
  },
  {
    image: 'https://images.unsplash.com/photo-1664273891579-22f28332f3c4?w=1920&q=80',
    title: 'ACADEMIC EXCELLENCE',
    subtitle: 'NAAC A++ Accredited • Top 10 Nationally',
    description: '50+ programs across Engineering, Sciences, Arts & Business',
    cta: 'View Academics',
  },
  {
    image: 'https://images.unsplash.com/photo-1766297248027-864589dbd336?w=1920&q=80',
    title: 'RESEARCH & INNOVATION',
    subtitle: 'Pioneering Tomorrow\'s Solutions',
    description: 'State-of-the-art labs and cutting-edge research facilities',
    cta: 'Discover Research',
  },
];

export function ModernUniversityLanding() {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

  // Gallery images for Panoramic Galleria
  const galleryImages = [
    { url: 'https://images.unsplash.com/photo-1680060731105-325991d05343?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwYnVpbGRpbmclMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzcyNTI1NjA1fDA&ixlib=rb-4.1.0&q=80&w=1080', title: 'Campus Building', filename: 'gallery-img-1' },
    { url: 'https://images.unsplash.com/photo-1637455587265-2a3c2cbbcc84?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwbGlicmFyeSUyMGludGVyaW9yfGVufDF8fHx8MTc3MjQzNTkwMXww&ixlib=rb-4.1.0&q=80&w=1080', title: 'Library Interior', filename: 'gallery-img-2' },
    { url: 'https://images.unsplash.com/photo-1757192420329-39acf20a12b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbXB0eSUyMGNsYXNzcm9vbSUyMGRlc2tzfGVufDF8fHx8MTc3MjQ3MDA3N3ww&ixlib=rb-4.1.0&q=80&w=1080', title: 'Classroom', filename: 'gallery-img-3' },
    { url: 'https://images.unsplash.com/photo-1672912995257-0c8255289523?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW1wdXMlMjBhZXJpYWwlMjB2aWV3fGVufDF8fHx8MTc3MjUyNTYwMXww&ixlib=rb-4.1.0&q=80&w=1080', title: 'Aerial View', filename: 'gallery-img-4' },
    { url: 'https://images.unsplash.com/photo-1608128152811-369b95a01c02?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwYXVkaXRvcml1bSUyMGludGVyaW9yfGVufDF8fHx8MTc3MjUxNDg2OHww&ixlib=rb-4.1.0&q=80&w=1080', title: 'Auditorium', filename: 'gallery-img-5' },
    { url: 'https://images.unsplash.com/photo-1733426509854-10931d84009a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwbGFib3JhdG9yeSUyMGV4cGVyaW1lbnR8ZW58MXx8fHwxNzcyNTI1NjEwfDA&ixlib=rb-4.1.0&q=80&w=1080', title: 'Laboratory', filename: 'gallery-img-6' },
    { url: 'https://images.unsplash.com/photo-1663889408852-0b97eb9e7d6e?w=800&q=80', title: 'Dining Hall', filename: 'gallery-img-7' },
  ];

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const goToNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const goToPrev = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <>
      <Preloader />
      <div className="min-h-screen bg-white">
        <SharedNavigation />

        {/* Hero Carousel Section */}
        <section className="relative h-[600px] md:h-[700px] lg:h-screen overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 1.2 }}
              className="absolute inset-0"
            >
              {/* Background Image with Parallax Effect */}
              <motion.div
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 7 }}
                className="absolute inset-0"
              >
                <img
                  src={heroSlides[currentSlide].image}
                  alt={heroSlides[currentSlide].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-950/95 via-blue-900/80 to-indigo-900/70" />
              </motion.div>

              {/* Hero Content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="max-w-5xl mx-auto text-center">
                    {/* Badge */}
                    <motion.div
                      initial={{ y: 30, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2, duration: 0.6 }}
                    >
                      <Badge className="bg-blue-500/20 text-blue-200 border-blue-400/30 backdrop-blur-sm mb-6 md:mb-8 px-4 md:px-6 py-2 md:py-3 text-sm md:text-base">
                        <Award className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                        <span className="hidden sm:inline">Est. 1976 • 50 Years of Excellence</span>
                        <span className="sm:hidden">Est. 1976</span>
                      </Badge>
                    </motion.div>

                    {/* Title */}
                    <motion.h1
                      initial={{ y: 30, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.7 }}
                      className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white mb-4 md:mb-6 tracking-tight leading-tight px-4"
                    >
                      {heroSlides[currentSlide].title}
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                      initial={{ y: 30, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.4, duration: 0.7 }}
                      className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-blue-100 mb-3 md:mb-4 font-light px-4"
                    >
                      {heroSlides[currentSlide].subtitle}
                    </motion.p>

                    {/* Description */}
                    <motion.p
                      initial={{ y: 30, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.5, duration: 0.7 }}
                      className="text-base md:text-lg lg:text-xl text-slate-300 mb-8 md:mb-10 max-w-3xl mx-auto px-4"
                    >
                      {heroSlides[currentSlide].description}
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                      initial={{ y: 30, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.6, duration: 0.7 }}
                      className="flex flex-col sm:flex-row gap-4 justify-center px-4"
                    >
                      <Button
                        size="lg"
                        onClick={() => navigate('/apply')}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-8 md:px-10 py-6 md:py-7 text-base md:text-lg font-bold shadow-2xl hover:shadow-blue-500/50 transition-all group"
                      >
                        <span className="hidden sm:inline">{heroSlides[currentSlide].cta}</span>
                        <span className="sm:hidden">Apply Now</span>
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                      <Button
                        size="lg"
                        variant="outline"
                        onClick={() => navigate('/about')}
                        className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 md:px-10 py-6 md:py-7 text-base md:text-lg font-semibold"
                      >
                        <Play className="mr-2 w-5 h-5" />
                        Campus Tour
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Animated Gradient Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 1 }}
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: 'radial-gradient(circle at 50% 50%, rgba(37, 99, 235, 0.1) 0%, transparent 70%)',
                }}
              />
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <button
            onClick={prevSlide}
            className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-20 w-14 h-14 lg:w-16 lg:h-16 bg-white/10 backdrop-blur-md hover:bg-white/20 rounded-full flex items-center justify-center transition-all border border-white/20 group"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-7 h-7 text-white group-hover:scale-110 transition-transform" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-20 w-14 h-14 lg:w-16 lg:h-16 bg-white/10 backdrop-blur-md hover:bg-white/20 rounded-full flex items-center justify-center transition-all border border-white/20 group"
            aria-label="Next slide"
          >
            <ChevronRight className="w-7 h-7 text-white group-hover:scale-110 transition-transform" />
          </button>

          {/* Slide Indicators */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex gap-3">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentSlide 
                    ? 'w-12 bg-blue-500' 
                    : 'w-2 bg-white/40 hover:bg-white/70'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Stats Overlay at Bottom */}
          <div className="absolute bottom-0 left-0 right-0 z-10">
            <div className="bg-gradient-to-t from-slate-900 to-transparent pt-20 md:pt-32 pb-6 md:pb-8">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                  {[
                    { value: '15,000+', label: 'Students', icon: Users },
                    { value: '800+', label: 'Faculty Members', icon: GraduationCap },
                    { value: '50+', label: 'Years Legacy', icon: Award },
                    { value: '98%', label: 'Placement Rate', icon: Trophy },
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                      className="text-center group cursor-pointer"
                    >
                      <div className="flex items-center justify-center mb-1 md:mb-2">
                        <stat.icon className="w-5 h-5 md:w-6 md:h-6 text-blue-400 mr-2" />
                      </div>
                      <div className="text-2xl md:text-4xl lg:text-5xl font-black text-white mb-1 group-hover:text-blue-400 transition-colors">
                        {stat.value}
                      </div>
                      <div className="text-xs md:text-sm lg:text-base text-slate-300 font-medium">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Logo Banner Section */}
        <section className="bg-slate-50 border-y border-slate-200 py-6 md:py-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
              <div className="flex items-center gap-4 md:gap-6">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-2xl shadow-lg p-3 md:p-4 border border-slate-200">
                  <img src={logoImage} alt="Dumri College" className="w-full h-full object-contain" />
                </div>
                <div className="text-center md:text-left">
                  <h2 className="text-2xl md:text-3xl font-black text-slate-900">Dumri College</h2>
                  <p className="text-sm md:text-base text-slate-600 font-medium">Excellence in Education Since 1976</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full md:w-auto">
                <Button 
                  onClick={() => navigate('/apply')} 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 md:px-8 py-5 md:py-6 font-bold shadow-lg hover:shadow-xl transition-all text-sm md:text-base"
                >
                  Apply Now 2026-27
                  <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
                </Button>
                <Button 
                  onClick={() => navigate('/contact')} 
                  variant="outline" 
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-6 md:px-8 py-5 md:py-6 font-bold text-sm md:text-base"
                >
                  Schedule Visit
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Highlights Section - 3 Cards */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10 md:mb-12"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-3 md:mb-4 px-4">
                Why Choose Dumri College?
              </h2>
              <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto px-4">
                Excellence in every aspect of education
              </p>
              <div className="w-20 md:w-24 h-2 bg-blue-600 mx-auto mt-4 md:mt-6" />
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              {[
                {
                  icon: Rocket,
                  title: 'NAAC A++ Accredited',
                  description: 'Highest grade of academic excellence with top-tier infrastructure and faculty',
                  color: 'blue',
                  image: 'https://images.unsplash.com/photo-1664273891579-22f28332f3c4?w=600&q=80',
                },
                {
                  icon: Target,
                  title: '98% Placement Success',
                  description: 'Industry partnerships with Fortune 500 companies and leading startups',
                  color: 'indigo',
                  image: 'https://images.unsplash.com/photo-1686213011371-2aff28a08f16?w=600&q=80',
                },
                {
                  icon: Globe,
                  title: 'Global Exposure',
                  description: 'Exchange programs with 50+ universities across 20 countries',
                  color: 'cyan',
                  image: 'https://images.unsplash.com/photo-1670111482157-c5ecbba142a7?w=600&q=80',
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="group cursor-pointer"
                >
                  <Card className="overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all">
                    <div className="relative h-48 md:h-64 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t from-${item.color}-900/90 to-transparent`} />
                      <div className={`absolute top-4 right-4 md:top-6 md:right-6 w-12 h-12 md:w-16 md:h-16 bg-${item.color}-600 rounded-2xl flex items-center justify-center shadow-lg`}>
                        <item.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                      </div>
                    </div>
                    <div className="p-6 md:p-8">
                      <h3 className={`text-xl md:text-2xl font-black text-${item.color}-600 mb-2 md:mb-3 uppercase`}>
                        {item.title}
                      </h3>
                      <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Links - 4 Cards */}
        <section className="py-16 md:py-20 bg-slate-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {[
                { 
                  icon: MapPin, 
                  title: 'Visit Campus', 
                  description: 'Schedule your personalized tour',
                  gradient: 'from-blue-600 to-blue-700',
                  link: '/contact',
                },
                { 
                  icon: Users, 
                  title: 'Student Life', 
                  description: '100+ clubs and organizations',
                  gradient: 'from-indigo-600 to-indigo-700',
                  link: '/about',
                },
                { 
                  icon: Trophy, 
                  title: 'Athletics', 
                  description: 'Championship sports programs',
                  gradient: 'from-cyan-600 to-cyan-700',
                  link: '/gallery',
                },
                { 
                  icon: Building2, 
                  title: 'Campus Housing', 
                  description: 'Modern residential facilities',
                  gradient: 'from-purple-600 to-purple-700',
                  link: '/about',
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => navigate(item.link)}
                  whileHover={{ y: -5 }}
                  className="group cursor-pointer"
                >
                  <div className={`relative h-64 md:h-80 rounded-2xl overflow-hidden bg-gradient-to-br ${item.gradient} shadow-xl hover:shadow-2xl transition-all`}>
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0id2hpdGUiIGZpbGwtb3BhY2l0eT0iMC4xIi8+PC9zdmc+')] opacity-50" />
                    
                    <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between">
                      <div className="flex justify-between items-start">
                        <div className="w-12 h-12 md:w-16 md:h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                          <item.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                        </div>
                        <div className="w-8 h-8 md:w-10 md:h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:translate-x-1 transition-transform">
                          <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 text-white" />
                        </div>
                      </div>
                      
                      <div>
                        <div className="w-12 md:w-16 h-1 bg-white mb-3 md:mb-4" />
                        <h3 className="text-2xl md:text-3xl font-black text-white mb-2 uppercase">
                          {item.title}
                        </h3>
                        <p className="text-base md:text-lg text-white/90 font-medium">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Academic Programs Preview */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10 md:mb-12"
            >
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-3 md:mb-4 px-4">
                Academic Programs
              </h2>
              <p className="text-base md:text-xl text-slate-600 max-w-3xl mx-auto px-4">
                50+ undergraduate and graduate programs designed for tomorrow's leaders
              </p>
              <div className="w-20 md:w-24 h-2 bg-blue-600 mx-auto mt-4 md:mt-6" />
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {[
                { name: 'Engineering', icon: Zap, count: '12 Programs', color: 'blue' },
                { name: 'Sciences', icon: Sparkles, count: '10 Programs', color: 'indigo' },
                { name: 'Business', icon: Briefcase, count: '8 Programs', color: 'cyan' },
                { name: 'Arts & Humanities', icon: BookOpen, count: '15 Programs', color: 'purple' },
              ].map((program, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="group cursor-pointer"
                  onClick={() => navigate('/academics')}
                >
                  <Card className={`p-6 md:p-8 border-t-4 border-t-${program.color}-600 hover:shadow-xl transition-all`}>
                    <div className={`w-12 h-12 md:w-16 md:h-16 bg-${program.color}-100 rounded-2xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform`}>
                      <program.icon className={`w-6 h-6 md:w-8 md:h-8 text-${program.color}-600`} />
                    </div>
                    <h3 className="text-lg md:text-2xl font-bold text-slate-900 mb-2">{program.name}</h3>
                    <p className="text-sm md:text-base text-slate-600 font-medium">{program.count}</p>
                    <div className="mt-3 md:mt-4 flex items-center text-blue-600 text-sm md:text-base font-semibold group-hover:translate-x-2 transition-transform">
                      Explore <ArrowRight className="ml-2 w-3 h-3 md:w-4 md:h-4" />
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-10 md:mt-12">
              <Button
                size="lg"
                onClick={() => navigate('/academics')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 md:px-10 py-5 md:py-6 text-base md:text-lg font-bold shadow-lg"
              >
                View All Programs
                <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* Our Curriculum Section */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: 'linear-gradient(45deg, #fff 25%, transparent 25%), linear-gradient(-45deg, #fff 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #fff 75%), linear-gradient(-45deg, transparent 75%, #fff 75%)',
              backgroundSize: '40px 40px',
              backgroundPosition: '0 0, 0 20px, 20px -20px, -20px 0px',
            }} />
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12 md:mb-16"
            >
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase mb-3 md:mb-4 px-4">
                Our Curriculum
              </h2>
              <p className="text-base md:text-xl text-blue-100 max-w-3xl mx-auto px-4">
                Industry-aligned curriculum designed to prepare you for the challenges of tomorrow
              </p>
              <div className="w-20 md:w-24 h-2 bg-blue-500 mx-auto mt-4 md:mt-6" />
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
              {[
                {
                  icon: BookOpen,
                  title: 'Outcome-Based Education',
                  description: 'Curriculum designed around measurable learning outcomes aligned with industry needs',
                  stats: 'NEP 2020 Compliant',
                },
                {
                  icon: Laptop,
                  title: 'Hands-On Learning',
                  description: 'Project-based learning with real-world applications and industry partnerships',
                  stats: '1000+ Hours of Labs',
                },
                {
                  icon: Globe,
                  title: 'Global Standards',
                  description: 'International curriculum benchmarks with credit transfer opportunities',
                  stats: 'ABET Aligned',
                },
                {
                  icon: Briefcase,
                  title: 'Industry Integration',
                  description: 'Guest lectures, internships, and live projects with leading companies',
                  stats: '200+ Industry Partners',
                },
                {
                  icon: Lightbulb,
                  title: 'Innovation Focus',
                  description: 'Entrepreneurship development and innovation labs for startup incubation',
                  stats: '50+ Startups Launched',
                },
                {
                  icon: Shield,
                  title: 'Flexible Pathways',
                  description: 'Multiple entry-exit options, interdisciplinary programs, and skill-based electives',
                  stats: '100+ Elective Courses',
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="group"
                >
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 h-full hover:bg-white/15 transition-all">
                    <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <item.icon className="w-8 h-8 text-blue-300" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                    <p className="text-blue-100 mb-4 leading-relaxed">{item.description}</p>
                    <div className="inline-block bg-blue-500/20 px-4 py-2 rounded-full">
                      <span className="text-sm font-bold text-blue-200">{item.stats}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Facilities Section */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12 md:mb-16"
            >
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-3 md:mb-4 px-4">
                World-Class Facilities
              </h2>
              <p className="text-base md:text-xl text-slate-600 max-w-3xl mx-auto px-4">
                State-of-the-art infrastructure designed to enhance your learning experience
              </p>
              <div className="w-20 md:w-24 h-2 bg-blue-600 mx-auto mt-4 md:mt-6" />
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {[
                {
                  title: 'Modern Computer Labs',
                  description: '500+ high-end workstations with latest software',
                  image: 'https://images.unsplash.com/photo-1766297247924-6638d54e7c89?w=600&q=80',
                  icon: Laptop,
                  color: 'blue',
                },
                {
                  title: 'Central Library',
                  description: '1 lakh+ books and digital resources',
                  image: 'https://images.unsplash.com/photo-1664273891579-22f28332f3c4?w=600&q=80',
                  icon: BookOpen,
                  color: 'indigo',
                },
                {
                  title: 'Research Laboratories',
                  description: 'Cutting-edge equipment for advanced research',
                  image: 'https://images.unsplash.com/photo-1766297248027-864589dbd336?w=600&q=80',
                  icon: Sparkles,
                  color: 'cyan',
                },
                {
                  title: 'Smart Classrooms',
                  description: 'AI-enabled interactive learning spaces',
                  image: 'https://images.unsplash.com/photo-1759456629213-3db5a7bb53ae?w=600&q=80',
                  icon: GraduationCap,
                  color: 'purple',
                },
                {
                  title: 'Residential Halls',
                  description: 'Comfortable hostel accommodation for 5000+ students',
                  image: 'https://images.unsplash.com/photo-1767884162402-683fdd430046?w=600&q=80',
                  icon: Home,
                  color: 'blue',
                },
                {
                  title: 'Sports Complex',
                  description: 'Olympic-sized pool, gym, and multiple sports facilities',
                  image: 'https://images.unsplash.com/photo-1747567003821-422438e6fdcc?w=600&q=80',
                  icon: Trophy,
                  color: 'indigo',
                },
              ].map((facility, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="group cursor-pointer"
                >
                  <Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all h-full">
                    <div className="relative h-56 md:h-64 overflow-hidden">
                      <img
                        src={facility.image}
                        alt={facility.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t from-${facility.color}-900/90 via-${facility.color}-900/50 to-transparent`} />
                      <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 right-4 md:right-6">
                        <div className={`inline-block w-10 h-10 md:w-14 md:h-14 bg-${facility.color}-600 rounded-xl flex items-center justify-center mb-2 md:mb-3 shadow-lg`}>
                          <facility.icon className="w-5 h-5 md:w-7 md:h-7 text-white" />
                        </div>
                        <h3 className="text-lg md:text-2xl font-black text-white mb-1 md:mb-2">{facility.title}</h3>
                        <p className="text-sm md:text-base text-white/90 font-medium">{facility.description}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-10 md:mt-12">
              <Button
                size="lg"
                onClick={() => navigate('/about')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 md:px-10 py-5 md:py-6 text-base md:text-lg font-bold shadow-lg"
              >
                Take a Virtual Tour
                <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* Leadership Team Section */}
        <section className="py-16 md:py-20 bg-slate-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12 md:mb-16"
            >
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-3 md:mb-4 px-4">
                Our Leadership Team
              </h2>
              <p className="text-base md:text-xl text-slate-600 max-w-3xl mx-auto px-4">
                Visionary leaders dedicated to academic excellence and student success
              </p>
              <div className="w-20 md:w-24 h-2 bg-blue-600 mx-auto mt-4 md:mt-6" />
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 max-w-6xl mx-auto">
              {[
                {
                  name: 'Dr. Rajesh Kumar',
                  position: 'Principal',
                  qualification: 'Ph.D. in Computer Science',
                  image: 'https://images.unsplash.com/photo-1748288166888-f1bd5d6ef9ed?w=400&q=80',
                  description: '25+ years of academic leadership',
                },
                {
                  name: 'Dr. Priya Sharma',
                  position: 'Vice Principal (Academics)',
                  qualification: 'Ph.D. in Education',
                  image: 'https://images.unsplash.com/photo-1758685845906-6f705cde4fb7?w=400&q=80',
                  description: 'Curriculum innovation expert',
                },
                {
                  name: 'Prof. Anil Verma',
                  position: 'Dean of Engineering',
                  qualification: 'Ph.D. in Mechanical Engineering',
                  image: 'https://images.unsplash.com/photo-1758685734503-58a8accc24e8?w=400&q=80',
                  description: 'Industry-academia collaboration',
                },
                {
                  name: 'Dr. Meera Patel',
                  position: 'Dean of Sciences',
                  qualification: 'Ph.D. in Physics',
                  image: 'https://images.unsplash.com/photo-1767647984475-3e14a89341ee?w=400&q=80',
                  description: 'Research and innovation leader',
                },
              ].map((leader, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="group"
                >
                  <Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all">
                    <div className="relative h-64 md:h-80 overflow-hidden">
                      <img
                        src={leader.image}
                        alt={leader.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white">
                        <div className="w-10 md:w-12 h-1 bg-blue-500 mb-2 md:mb-3" />
                        <h3 className="text-lg md:text-2xl font-bold mb-1">{leader.name}</h3>
                        <p className="text-sm md:text-base text-blue-300 font-semibold mb-1 md:mb-2">{leader.position}</p>
                        <p className="text-xs md:text-sm text-slate-300 mb-1 md:mb-2">{leader.qualification}</p>
                        <p className="text-xs md:text-sm text-slate-400 italic">{leader.description}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Recent Events Section */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12 md:mb-16"
            >
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-3 md:mb-4 px-4">
                Recent Events
              </h2>
              <p className="text-base md:text-xl text-slate-600 max-w-3xl px-4">
                Celebrating achievements and fostering community spirit
              </p>
              <div className="w-20 md:w-24 h-2 bg-blue-600 mt-4 md:mt-6" />
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              {/* Large Featured Event */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="md:row-span-2 group cursor-pointer"
              >
                <Card className="overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all h-full">
                  <div className="relative h-full min-h-[400px] md:min-h-[600px]">
                    <img
                      src="https://images.unsplash.com/photo-1643199032520-99230e970fb9?w=800&q=80"
                      alt="Annual Convocation 2026"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/50 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
                      <Badge className="bg-blue-600 text-white border-0 mb-3 md:mb-4 px-3 md:px-4 py-1 md:py-2 text-xs md:text-base">
                        <Calendar className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
                        February 25, 2026
                      </Badge>
                      <h3 className="text-2xl md:text-4xl font-black text-white mb-3 md:mb-4">
                        Annual Convocation Ceremony 2026
                      </h3>
                      <p className="text-sm md:text-lg text-slate-200 mb-4 md:mb-6 leading-relaxed">
                        Celebrated the success of 3,500+ graduating students with Hon'ble Governor as Chief Guest. 
                        Gold medals awarded to top performers across all disciplines.
                      </p>
                      <Button
                        variant="outline"
                        className="border-2 border-white text-white hover:bg-white hover:text-slate-900 text-sm md:text-base px-4 md:px-6 py-2 md:py-3"
                      >
                        View Gallery
                        <ArrowRight className="ml-2 w-3 h-3 md:w-4 md:h-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>

              {/* Other Events */}
              {[
                {
                  title: 'Tech Symposium 2026',
                  date: 'February 20, 2026',
                  description: 'Three-day technical fest with 50+ events, workshops, and competitions',
                  image: 'https://images.unsplash.com/photo-1759456629213-3db5a7bb53ae?w=600&q=80',
                  category: 'Technical',
                },
                {
                  title: 'Annual Sports Meet',
                  date: 'February 15, 2026',
                  description: 'Inter-college sports competition with 15 sporting events and 1000+ participants',
                  image: 'https://images.unsplash.com/photo-1766459710529-c9fdb8023ecb?w=600&q=80',
                  category: 'Sports',
                },
                {
                  title: 'Industry Connect Summit',
                  date: 'February 10, 2026',
                  description: 'Leading industry experts share insights on emerging technologies and career opportunities',
                  image: 'https://images.unsplash.com/photo-1686213011371-2aff28a08f16?w=600&q=80',
                  category: 'Placement',
                },
              ].map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="group cursor-pointer"
                >
                  <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all">
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-blue-600 text-white border-0">
                          {event.category}
                        </Badge>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 text-slate-500 text-sm mb-3">
                        <Calendar className="w-4 h-4" />
                        <span className="font-medium">{event.date}</span>
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                        {event.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button
                size="lg"
                variant="outline"
                onClick={() => navigate('/gallery')}
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-10 py-6 text-lg font-bold"
              >
                View All Events
                <Calendar className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* News & Updates */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-5xl lg:text-6xl font-black text-slate-900 mb-4">
                Latest News & Updates
              </h2>
              <div className="w-24 h-2 bg-blue-600" />
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Dumri College Expands AI Research Initiative',
                  date: 'Feb 28, 2026',
                  category: 'Research',
                  image: 'https://images.unsplash.com/photo-1766297248027-864589dbd336?w=600&q=80',
                  excerpt: 'New partnership with leading tech companies to advance artificial intelligence research.',
                },
                {
                  title: 'Record Placement Season: 98% Success Rate',
                  date: 'Feb 25, 2026',
                  category: 'Achievement',
                  image: 'https://images.unsplash.com/photo-1686213011371-2aff28a08f16?w=600&q=80',
                  excerpt: 'Top recruiters from Fortune 500 companies participate in campus recruitment drive.',
                },
                {
                  title: 'New Library Wing Opens to Students',
                  date: 'Feb 22, 2026',
                  category: 'Campus',
                  image: 'https://images.unsplash.com/photo-1664273891579-22f28332f3c4?w=600&q=80',
                  excerpt: 'State-of-the-art facility with 500+ seating capacity and digital resources.',
                },
              ].map((news, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={news.image}
                      alt={news.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-blue-600 text-white border-0 px-4 py-1 font-bold">
                        {news.category}
                      </Badge>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-slate-500 text-sm mb-3">
                      <Calendar className="w-4 h-4" />
                      <span className="font-medium">{news.date}</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {news.title}
                    </h3>
                    <p className="text-slate-600 mb-4 leading-relaxed">
                      {news.excerpt}
                    </p>
                    <div className="flex items-center text-blue-600 font-semibold">
                      Read More <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button
                size="lg"
                variant="outline"
                onClick={() => navigate('/gallery')}
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-10 py-6 text-lg font-bold"
              >
                View All News
                <ExternalLink className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* Video Tour Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="relative h-[500px] rounded-3xl overflow-hidden group cursor-pointer shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1557174963-364e92b8dbc0?w=1400&q=80"
                  alt="Campus Virtual Tour"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-blue-900/60 to-transparent" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-8">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-28 h-28 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mb-8 border-4 border-white/30 shadow-2xl cursor-pointer"
                  >
                    <Play className="w-14 h-14 text-white ml-2" />
                  </motion.div>
                  <h3 className="text-5xl lg:text-6xl font-black uppercase mb-4">
                    Experience Dumri College
                  </h3>
                  <p className="text-2xl font-light text-blue-100 max-w-2xl">
                    Take a virtual tour of our 200-acre campus and world-class facilities
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-br from-blue-950 via-indigo-900 to-blue-900 text-white relative overflow-hidden">
          {/* Animated Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
              backgroundSize: '48px 48px',
            }} />
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-5xl lg:text-7xl font-black uppercase mb-6 leading-tight">
                  Ready to Begin Your Journey?
                </h2>
                <p className="text-xl lg:text-2xl text-blue-100 mb-8 leading-relaxed">
                  Join 15,000+ students shaping the future. Higher education is an investment in yourself. 
                  We offer clear tuition information, scholarships, and dedicated financial aid counselors 
                  to guide you through every step.
                </p>
                <div className="flex flex-wrap gap-6">
                  {[
                    { icon: CheckCircle, text: 'Scholarships Available' },
                    { icon: CheckCircle, text: 'Easy Online Application' },
                    { icon: CheckCircle, text: 'Deadline: April 30, 2026' },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <item.icon className="w-6 h-6 text-blue-400" />
                      <span className="text-lg font-medium">{item.text}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Right Content - CTA Card */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/10 backdrop-blur-md border-2 border-white/20 p-10 shadow-2xl">
                  <h3 className="text-3xl font-black text-white mb-8 uppercase">
                    Admissions 2026-27 Open
                  </h3>
                  
                  <div className="space-y-6 mb-8">
                    {[
                      { icon: BookOpen, label: 'Undergraduate Programs', link: '/academics' },
                      { icon: GraduationCap, label: 'Graduate Programs', link: '/academics' },
                      { icon: Award, label: 'Scholarship Information', link: '/about' },
                      { icon: Phone, label: 'Contact Admissions', link: '/contact' },
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ x: 5 }}
                        className="flex items-center gap-4 text-white hover:text-blue-300 transition-colors cursor-pointer group"
                        onClick={() => navigate(item.link)}
                      >
                        <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center group-hover:bg-blue-500 transition-colors">
                          <item.icon className="w-6 h-6" />
                        </div>
                        <span className="text-lg font-semibold">{item.label}</span>
                        <ArrowRight className="w-5 h-5 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                      </motion.div>
                    ))}
                  </div>

                  <Button
                    size="lg"
                    onClick={() => navigate('/apply')}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-7 text-xl font-bold shadow-xl hover:shadow-2xl transition-all"
                  >
                    Apply Now
                    <ArrowRight className="ml-2 w-6 h-6" />
                  </Button>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Panoramic Galleria Section */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
          {/* Background Decorative Elements */}
          <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
            <div className="absolute top-10 left-10 w-40 h-40 bg-blue-500 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-20 w-60 h-60 bg-indigo-500 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12 md:mb-16"
            >
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-3">
                Panoramic <span className="text-blue-600">Galleria</span>
              </h2>
              <p className="text-base md:text-xl text-slate-600 max-w-3xl mx-auto">
                Explore our campus through captivating moments
              </p>
            </motion.div>

            {/* Masonry Grid Layout */}
            <div className="relative max-w-5xl mx-auto">
              {/* Grid Container */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                {/* Column 1 - Left */}
                <div className="space-y-4 md:space-y-6">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    whileHover={{ y: -5 }}
                    onClick={() => openLightbox(0)}
                    className="cursor-pointer group"
                  >
                    <div className="relative overflow-hidden rounded-2xl border-4 border-blue-400 shadow-lg">
                      <img
                        src={galleryImages[0].url}
                        alt={galleryImages[0].title}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                  </motion.div>
                </div>

                {/* Column 2 - Center */}
                <div className="space-y-4 md:space-y-6">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    whileHover={{ y: -5 }}
                    onClick={() => openLightbox(1)}
                    className="cursor-pointer group"
                  >
                    <div className="relative overflow-hidden rounded-2xl border-4 border-indigo-400 shadow-lg">
                      <img
                        src={galleryImages[1].url}
                        alt={galleryImages[1].title}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    whileHover={{ y: -5 }}
                    onClick={() => openLightbox(2)}
                    className="cursor-pointer group"
                  >
                    <div className="relative overflow-hidden rounded-2xl border-4 border-cyan-400 shadow-lg">
                      <img
                        src={galleryImages[2].url}
                        alt={galleryImages[2].title}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                  </motion.div>
                </div>

                {/* Column 3 - Right */}
                <div className="space-y-4 md:space-y-6">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    whileHover={{ y: -5 }}
                    onClick={() => openLightbox(3)}
                    className="cursor-pointer group md:mt-8"
                  >
                    <div className="relative overflow-hidden rounded-2xl border-4 border-purple-400 shadow-lg">
                      <img
                        src={galleryImages[3].url}
                        alt={galleryImages[3].title}
                        className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Additional Images Row */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-4 md:mt-6">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  whileHover={{ y: -5 }}
                  onClick={() => openLightbox(4)}
                  className="cursor-pointer group"
                >
                  <div className="relative overflow-hidden rounded-2xl border-4 border-green-400 shadow-lg">
                    <img
                      src={galleryImages[4].url}
                      alt={galleryImages[4].title}
                      className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                  whileHover={{ y: -5 }}
                  onClick={() => openLightbox(5)}
                  className="cursor-pointer group"
                >
                  <div className="relative overflow-hidden rounded-2xl border-4 border-orange-400 shadow-lg">
                    <img
                      src={galleryImages[5].url}
                      alt={galleryImages[5].title}
                      className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 }}
                  whileHover={{ y: -5 }}
                  onClick={() => openLightbox(6)}
                  className="cursor-pointer group"
                >
                  <div className="relative overflow-hidden rounded-2xl border-4 border-pink-400 shadow-lg">
                    <img
                      src={galleryImages[6].url}
                      alt={galleryImages[6].title}
                      className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                </motion.div>
              </div>
            </div>

            {/* View All Photos Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mt-10 md:mt-12"
            >
              <Button
                size="lg"
                onClick={() => navigate('/gallery')}
                className="bg-white text-slate-900 border-2 border-slate-200 hover:bg-slate-50 px-8 md:px-10 py-5 md:py-6 text-base md:text-lg font-bold shadow-lg hover:shadow-xl transition-all"
              >
                View All Photos
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <SharedFooter />
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center"
            onClick={closeLightbox}
          >
            {/* Counter - Top Left */}
            <div className="absolute top-6 left-6 text-white text-base font-medium z-10">
              {currentImageIndex + 1} / {galleryImages.length}
            </div>

            {/* Action Buttons - Top Right */}
            <div className="absolute top-6 right-6 flex items-center gap-4 z-10">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  // Fullscreen functionality
                }}
                className="p-2 bg-transparent hover:bg-white/10 rounded transition-colors"
              >
                <Maximize2 className="w-5 h-5 text-white" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  // Zoom functionality
                }}
                className="p-2 bg-transparent hover:bg-white/10 rounded transition-colors"
              >
                <ZoomIn className="w-5 h-5 text-white" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  // Share functionality
                }}
                className="p-2 bg-transparent hover:bg-white/10 rounded transition-colors"
              >
                <Share2 className="w-5 h-5 text-white" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  closeLightbox();
                }}
                className="p-2 bg-transparent hover:bg-white/10 rounded transition-colors"
              >
                <X className="w-6 h-6 text-white" />
              </button>
            </div>

            {/* Main Image Container */}
            <div className="relative max-w-5xl max-h-[80vh] mx-auto px-20" onClick={(e) => e.stopPropagation()}>
              <img
                src={galleryImages[currentImageIndex].url}
                alt={galleryImages[currentImageIndex].title}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />

              {/* Image Caption - Bottom Center */}
              <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 text-white text-sm whitespace-nowrap">
                {galleryImages[currentImageIndex].filename}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToPrev();
              }}
              className="absolute left-6 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
            >
              <ChevronLeft className="w-8 h-8 text-white" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              className="absolute right-6 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
            >
              <ChevronRight className="w-8 h-8 text-white" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}