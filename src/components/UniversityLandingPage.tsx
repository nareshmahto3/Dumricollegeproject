import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import {
  GraduationCap,
  Users,
  BookOpen,
  Award,
  TrendingUp,
  CheckCircle,
  ChevronRight,
  ChevronLeft,
  Star,
  MapPin,
  Calendar,
  Trophy,
  Building,
  Globe,
  Heart,
  Lightbulb,
  FileText,
  Download,
  ArrowRight,
  Play,
  Sparkles,
  Bell,
  Clock,
  Building2,
  PlayCircle,
  Briefcase,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  MessageCircle,
  School,
  Stethoscope,
  ClipboardCheck,
  Settings,
  Search,
  TrendingDown,
} from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { SharedNavbar } from './SharedNavbar';

const heroSlides = [
  {
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1920&q=80',
    title: 'Learning in harmony—where every student finds their voice',
    subtitle: 'NIRF India Ranking 2025',
    cta: 'Know More',
  },
  {
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1920&q=80',
    title: 'Excellence in Research and Innovation',
    subtitle: 'Top Ranked University',
    cta: 'Explore Programs',
  },
  {
    image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=1920&q=80',
    title: 'Empowering Future Leaders',
    subtitle: 'Global Excellence in Education',
    cta: 'Apply Now',
  },
];

const stats = [
  { value: '38+', label: 'Countries', icon: Globe },
  { value: '40+', label: 'Academic Departments', icon: Building2 },
  { value: '520+', label: 'International Students', icon: Users },
  { value: '339053+', label: 'Library Books', icon: BookOpen },
  { value: '90,000+', label: 'Alumni', icon: GraduationCap },
];

const campusLifeItems = [
  { icon: Briefcase, label: 'Placements', color: 'from-blue-500 to-blue-700' },
  { icon: Users, label: 'Christ Consulting', color: 'from-orange-500 to-orange-700' },
  { icon: GraduationCap, label: 'Admissions', color: 'from-blue-600 to-blue-800' },
  { icon: Stethoscope, label: 'Health Services', color: 'from-orange-600 to-orange-800' },
  { icon: ClipboardCheck, label: 'Examinations', color: 'from-blue-500 to-blue-700' },
  { icon: Users, label: 'Student Council', color: 'from-orange-500 to-orange-700' },
  { icon: Settings, label: 'Centres & Cells', color: 'from-blue-600 to-blue-800' },
];

const events = [
  {
    date: 'Feb 23 2026',
    title: 'Building Life Skills Through Human - Equine Interactions Workshop',
    dateRange: '23 Feb - 24 Feb',
    time: '09:00 AM - 04:00 PM',
    location: 'Bangalore Central Campus',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&q=80',
  },
  {
    date: 'Feb 23 2026',
    title: 'SPIRITS 2026',
    dateRange: '23 Feb - 28 Feb',
    time: '09:00 AM - 04:30 PM',
    location: 'Bangalore Central Campus',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=400&q=80',
  },
  {
    date: 'Feb 23 2026',
    title: '2nd Edition - Virtual International Professional Development Program',
    dateRange: '23 Feb - 27 Jan',
    time: '09:00 AM - 04:00 PM',
    location: 'Bangalore Central Campus',
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=400&q=80',
  },
  {
    date: 'Feb 23 2026',
    title: 'Expert Session on Busting the Myths & Adopting The Right Approach To Investing in the Stock Market',
    dateRange: '23 Feb',
    time: '10:45 AM - 12:45 PM',
    location: 'Bangalore Central Campus',
    image: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=400&q=80',
  },
];

const achievements = [
  {
    category: 'Faculty',
    items: [
      {
        title: 'Awards',
        description: 'Dr Leena James, School of Business Management and Head of the SDG Cell, has been conferred with the prestigious Women Change Maker of the Year Award at the New Age Summit - Business and Education Conference.',
        image: 'https://images.unsplash.com/photo-1560523160-754a9e25c68f?w=600&q=80',
      },
    ],
  },
  {
    category: 'Student',
    items: [
      {
        title: 'Competition Winner',
        description: 'Students from Christ University won the national level coding competition with innovative solutions.',
        image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&q=80',
      },
    ],
  },
  {
    category: 'University',
    items: [
      {
        title: 'Ranking Achievement',
        description: 'Christ University has been ranked among the top institutions in India for academic excellence.',
        image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=600&q=80',
      },
    ],
  },
];

const socialCards = [
  {
    date: '2/19/2026',
    title: '50th Annual Family Day The Christ University Alumni Foundation celebrating together with joy and pride! 🎉',
    image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=400&q=80',
  },
  {
    date: '2/4/2026',
    title: 'Proud moment for CHRIST (Deemed to be University)! 🌟 Our NCC cadets shine at Republic Day Parade',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&q=80',
  },
  {
    date: '2/7/2026',
    title: 'Applications are now open for MBA – Session 2 (2026) at CHRIST University. Apply Now! 📚',
    type: 'video',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&q=80',
  },
  {
    date: '2/10/2026',
    title: 'Shaping the future of education through global perspectives and innovation 🌍',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&q=80',
  },
  {
    date: '2/17/2026',
    title: 'Admissions Open for 2026 MSc Mathematics at CHRIST – where pure mathematics meets applied excellence 🔢',
    image: 'https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?w=400&q=80',
  },
];

const galleryImages = [
  'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&q=80',
  'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&q=80',
  'https://images.unsplash.com/photo-1562774053-701939374585?w=600&q=80',
  'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&q=80',
  'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80',
  'https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?w=600&q=80',
  'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80',
  'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=600&q=80',
];

const degreeTypes = [
  { title: 'DOCTORAL (PhD)', color: 'from-blue-500 to-blue-700', icon: Award },
  { title: 'POSTGRADUATE', color: 'from-blue-600 to-blue-800', icon: GraduationCap },
  { title: 'UNDERGRADUATE', color: 'from-blue-500 to-blue-700', icon: BookOpen },
  { title: 'ONLINE DEGREE', color: 'from-blue-600 to-blue-800', icon: Globe },
];

const campuses = [
  'Bangalore Central',
  'Bangalore Kengeri',
  'Bangalore BRC',
  'Bangalore BYC',
  'Delhi NCR',
  'Pune Lavasa',
];

export function UniversityLandingPage() {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedTab, setSelectedTab] = useState('Faculty');
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  // Duplicate campus life items for infinite scroll
  const duplicatedCampusLifeItems = [...campusLifeItems, ...campusLifeItems, ...campusLifeItems];

  return (
    <div className="min-h-screen bg-slate-50">
      <SharedNavbar />

      {/* WhatsApp Button */}
      <motion.a
        href="https://wa.me/1234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed left-6 bottom-6 z-50"
        whileHover={{ scale: 1.15, rotate: 5 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
      >
        <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 rounded-full flex items-center justify-center shadow-2xl">
          <MessageCircle className="w-8 h-8 text-white" fill="white" />
        </div>
      </motion.a>

      {/* Chat Button */}
      <motion.button
        className="fixed right-6 bottom-6 z-50"
        whileHover={{ scale: 1.15, rotate: -5 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
      >
        <div className="relative w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-full flex items-center justify-center shadow-2xl">
          <MessageCircle className="w-8 h-8 text-white" />
          <motion.span
            className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-br from-red-500 to-red-600 text-white text-xs font-bold rounded-full flex items-center justify-center shadow-lg"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            1
          </motion.span>
        </div>
      </motion.button>

      {/* Hero Carousel */}
      <section className="relative h-[500px] md:h-[600px] lg:h-[750px] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${heroSlides[currentSlide].image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
            </div>

            <div className="relative h-full flex items-center">
              <div className="container mx-auto px-6 lg:px-16">
                <motion.div
                  initial={{ x: -80, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="max-w-3xl"
                >
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <Badge className="mb-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white border-0 px-4 py-2 text-sm font-bold">
                      {heroSlides[currentSlide].subtitle}
                    </Badge>
                  </motion.div>
                  
                  <motion.h1
                    className="text-3xl md:text-5xl lg:text-7xl text-white font-bold mb-8 leading-tight"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    {heroSlides[currentSlide].title}
                  </motion.h1>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                  >
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-10 py-7 text-lg font-bold shadow-2xl border-0 rounded-xl group">
                        {heroSlides[currentSlide].cta}
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                      </Button>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <motion.button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/90 hover:bg-white backdrop-blur-sm rounded-full flex items-center justify-center transition-all z-10 shadow-xl"
          whileHover={{ scale: 1.1, x: -5 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronLeft className="w-7 h-7 text-blue-700" />
        </motion.button>
        <motion.button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/90 hover:bg-white backdrop-blur-sm rounded-full flex items-center justify-center transition-all z-10 shadow-xl"
          whileHover={{ scale: 1.1, x: 5 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronRight className="w-7 h-7 text-blue-700" />
        </motion.button>

        {/* Dots Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-10">
          {heroSlides.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-3 rounded-full transition-all ${
                index === currentSlide ? 'bg-orange-500 w-12' : 'bg-white/70 w-3'
              }`}
              whileHover={{ scale: 1.2 }}
            />
          ))}
        </div>
      </section>

     
     

      {/* Statistics Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-orange-50/30 relative overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 15, repeat: Infinity }}
        />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-10"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                whileHover={{ scale: 1.08, y: -8 }}
                className="text-center group cursor-pointer"
              >
                <motion.div
                  className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <stat.icon className="w-8 h-8 text-white" />
                </motion.div>
                <motion.h3
                  className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-700 to-orange-600 bg-clip-text text-transparent mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, type: 'spring' }}
                >
                  {stat.value}
                </motion.h3>
                <p className="text-slate-700 font-semibold text-xs md:text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* University Achievements */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <span className="text-orange-500">University</span>{' '}
              <span className="text-blue-700">Achievements</span>
            </motion.h2>
            <motion.div
              className="w-24 h-1.5 bg-gradient-to-r from-orange-500 to-blue-700 mx-auto mb-12 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            />

            {/* Tabs */}
            <div className="flex justify-center gap-3 mb-12">
              {['Faculty', 'Student', 'University'].map((tab, index) => (
                <motion.button
                  key={tab}
                  onClick={() => setSelectedTab(tab)}
                  className={`px-8 py-4 font-bold transition-all rounded-xl shadow-lg ${
                    selectedTab === tab
                      ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white scale-105'
                      : 'bg-gradient-to-r from-blue-700 to-blue-800 text-white hover:from-blue-800 hover:to-blue-900'
                  }`}
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {tab}
                </motion.button>
              ))}
            </div>

            {/* Achievement Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedTab}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="max-w-5xl mx-auto"
              >
                {achievements
                  .find((a) => a.category === selectedTab)
                  ?.items.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      <Card className="p-8 border-4 border-orange-300 bg-white shadow-2xl hover:shadow-3xl transition-all rounded-2xl overflow-hidden group">
                        <div className="flex flex-col md:flex-row gap-8">
                          <motion.div
                            className="relative overflow-hidden rounded-2xl flex-shrink-0"
                            whileHover={{ scale: 1.05 }}
                          >
                            <img
                              src={item.image}
                              alt={item.title}
                              className="w-full md:w-64 h-64 object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                          </motion.div>
                          <div className="flex-1">
                            <motion.h3
                              className="text-3xl font-bold text-blue-700 mb-4"
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.3 }}
                            >
                              {item.title}
                            </motion.h3>
                            <motion.p
                              className="text-slate-600 leading-relaxed text-lg"
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.4 }}
                            >
                              {item.description}
                            </motion.p>
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
              </motion.div>
            </AnimatePresence>

            <motion.div
              className="text-center mt-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outline"
                  className="border-3 border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white font-bold px-10 py-6 text-lg rounded-xl shadow-lg"
                >
                  View All Achievements
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Campus Events */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <span className="text-orange-500">Campus</span>{' '}
              <span className="text-blue-700">Events</span>
            </motion.h2>
            <motion.div
              className="w-24 h-1.5 bg-gradient-to-r from-orange-500 to-blue-700 mx-auto mb-12 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {events.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  whileHover={{ y: -12, scale: 1.02 }}
                  className="group"
                >
                  <Card className="overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all h-full rounded-2xl bg-white">
                    {/* Event Image */}
                    <motion.div
                      className="relative overflow-hidden h-48"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                      <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-700 to-blue-800 text-white px-4 py-2 rounded-xl font-bold text-sm shadow-lg">
                        {event.date}
                      </div>
                    </motion.div>

                    <div className="p-6">
                      <h3 className="font-bold text-blue-700 mb-4 min-h-[80px] text-lg leading-snug line-clamp-3">
                        {event.title}
                      </h3>
                      <div className="space-y-3 text-sm text-slate-600">
                        <motion.div
                          className="flex items-start gap-3"
                          whileHover={{ x: 5 }}
                        >
                          <Calendar className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                          <span className="font-semibold">{event.dateRange}</span>
                        </motion.div>
                        <motion.div
                          className="flex items-start gap-3"
                          whileHover={{ x: 5 }}
                        >
                          <Clock className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                          <span className="font-semibold">{event.time}</span>
                        </motion.div>
                        <motion.div
                          className="flex items-start gap-3"
                          whileHover={{ x: 5 }}
                        >
                          <MapPin className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                          <span className="font-semibold">{event.location}</span>
                        </motion.div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="text-center mt-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  className="bg-gradient-to-r from-blue-700 to-blue-800 hover:from-blue-800 hover:to-blue-900 text-white font-bold px-10 py-6 text-lg rounded-xl shadow-xl border-0"
                >
                  View All Events
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Campus Life - Infinite Scrolling Marquee */}
      <section className="py-20 bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4 text-white"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <span className="text-orange-400">Campus</span>{' '}
              <span className="text-white">Life</span>
            </motion.h2>
            <motion.div
              className="w-24 h-1.5 bg-gradient-to-r from-orange-500 to-white mx-auto mb-16 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            />

            {/* Infinite Scrolling Container */}
            <div className="overflow-hidden">
              <motion.div
                className="flex gap-16"
                animate={{
                  x: ['0%', '-33.33%'],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              >
                {duplicatedCampusLifeItems.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center flex-shrink-0"
                  >
                    <motion.div
                      className={`w-32 h-32 rotate-45 bg-gradient-to-br ${item.color} shadow-2xl flex items-center justify-center mb-6 transition-all`}
                      whileHover={{
                        scale: 1.2,
                        rotate: 50,
                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
                      }}
                    >
                      <motion.div
                        className="-rotate-45"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <item.icon className="w-14 h-14 text-white" />
                      </motion.div>
                    </motion.div>
                    <p className="text-base font-bold text-white text-center max-w-[140px]">
                      {item.label}
                    </p>
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Find Your Degree */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-4"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-blue-700">Find your</span>{' '}
              <span className="text-orange-500">Degree</span>
            </motion.h2>
            <motion.p
              className="text-slate-600 mb-10 max-w-3xl text-lg leading-relaxed"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              CHRIST University offers rigorous programs, valuable resources, and countless
              opportunities that will enable you to pursue your desired course of study.
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {degreeTypes.map((degree, index) => (
                <motion.button
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-8 rounded-2xl bg-gradient-to-r ${degree.color} text-white font-bold text-xl shadow-xl hover:shadow-2xl transition-all border-b-8 border-orange-500 group`}
                >
                  <div className="flex items-center justify-between">
                    <span>{degree.title}</span>
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <degree.icon className="w-8 h-8" />
                    </motion.div>
                  </div>
                </motion.button>
              ))}
            </div>

            <motion.div
              className="bg-white rounded-2xl p-2 shadow-2xl border-4 border-orange-300"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center gap-4">
                <Search className="w-6 h-6 text-slate-400 ml-4" />
                <input
                  type="text"
                  placeholder="Search by: Keyword course"
                  className="flex-1 px-4 py-5 border-2 border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-slate-700 text-lg font-medium"
                />
                <Button className="bg-gradient-to-r from-blue-700 to-blue-800 hover:from-blue-800 hover:to-blue-900 text-white font-bold px-8 py-6 rounded-xl border-0 shadow-lg">
                  Search
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Social Media Cards */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <span className="text-orange-500">Socialize</span>{' '}
              <span className="text-blue-700">with wide Numbers</span>
            </motion.h2>
            <motion.div
              className="w-24 h-1.5 bg-gradient-to-r from-orange-500 to-blue-700 mx-auto mb-12 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            />

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {socialCards.map((card, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50, rotateY: 90 }}
                  whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ y: -10, scale: 1.03 }}
                  className="group"
                >
                  <Card className="overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all rounded-2xl bg-white h-full">
                    <div className="relative overflow-hidden">
                      <motion.img
                        src={card.image}
                        alt={card.title}
                        className="w-full h-56 object-cover"
                        whileHover={{ scale: 1.15 }}
                        transition={{ duration: 0.6 }}
                      />
                      {card.type === 'video' && (
                        <motion.div
                          className="absolute inset-0 bg-black/50 flex items-center justify-center"
                          whileHover={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}
                        >
                          <motion.div
                            whileHover={{ scale: 1.2, rotate: 90 }}
                            transition={{ duration: 0.3 }}
                          >
                            <PlayCircle className="w-20 h-20 text-white" />
                          </motion.div>
                        </motion.div>
                      )}
                      <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-700 to-blue-800 text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg">
                        {card.date}
                      </div>
                    </div>
                    <div className="p-5">
                      <p className="text-sm text-slate-700 line-clamp-3 mb-4 leading-relaxed font-medium">
                        {card.title}
                      </p>
                      <div className="flex items-center justify-between text-slate-400">
                        <motion.button
                          className="hover:text-red-500 transition-colors"
                          whileHover={{ scale: 1.3 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Heart className="w-6 h-6" />
                        </motion.button>
                        <motion.button
                          className="hover:text-blue-500 transition-colors"
                          whileHover={{ scale: 1.3, rotate: 15 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Share className="w-6 h-6" />
                        </motion.button>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Panoramic Gallery */}
      <section className="py-20 bg-gradient-to-br from-orange-50/50 to-blue-50/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <span className="text-orange-500">Panoramic</span>{' '}
              <span className="text-blue-700">Galleria</span>
            </motion.h2>
            <motion.div
              className="w-24 h-1.5 bg-gradient-to-r from-orange-500 to-blue-700 mx-auto mb-12 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            />

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {galleryImages.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, type: 'spring' }}
                  whileHover={{ scale: 1.08, rotate: 3, zIndex: 10 }}
                  className="relative overflow-hidden rounded-2xl shadow-xl border-4 border-blue-700 cursor-pointer group"
                >
                  <img
                    src={image}
                    alt={`Gallery ${index + 1}`}
                    className="w-full h-56 object-cover transition-all group-hover:scale-110"
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <span className="text-white font-bold text-lg">View Image</span>
                  </motion.div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="text-center mt-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  onClick={() => navigate('/gallery')}
                  className="bg-gradient-to-r from-blue-700 to-blue-800 hover:from-blue-800 hover:to-blue-900 text-white font-bold px-12 py-7 text-lg rounded-xl shadow-2xl border-0 group"
                >
                  View All Photos
                  <ArrowRight className="ml-2 w-5 h-5 inline-block group-hover:translate-x-2 transition-transform" />
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-amber-800 via-amber-900 to-amber-950 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* About */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="font-bold text-2xl mb-6 flex items-center gap-2">
                <GraduationCap className="w-7 h-7" />
                CHRIST
              </h3>
              <p className="text-sm text-amber-200 mb-3 font-semibold">
                (Deemed to be University)
              </p>
              <p className="text-sm text-amber-100 leading-relaxed mb-4">
                Dharmaram College Post, Hosur Road, Bengaluru - 560029, Karnataka, India
              </p>
              <div className="space-y-2 text-sm text-amber-100">
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  +91 80 4012 9100 / 9600
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  mail@christuniversity.in
                </p>
              </div>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="font-bold text-xl mb-6">Vision</h3>
              <p className="text-sm text-amber-100 mb-4 font-semibold">
                EXCELLENCE AND SERVICE
              </p>
              <h3 className="font-bold text-xl mb-3">Mission</h3>
              <p className="text-sm text-amber-100 leading-relaxed">
                CHRIST (Deemed to be University) is a nurturing ground for an individual's
                holistic development to make effective contribution to the society in a
                dynamic environment.
              </p>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="font-bold text-xl mb-6">Quick Links</h3>
              <ul className="space-y-3 text-sm">
                {['UBA', 'FCRA', 'IQAC', 'NIRF', 'Grievances'].map((link) => (
                  <motion.li key={link} whileHover={{ x: 5 }}>
                    <a
                      href="#"
                      className="text-amber-100 hover:text-white transition-colors flex items-center gap-2 group"
                    >
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      {link}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* More Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="font-bold text-xl mb-6">Resources</h3>
              <ul className="space-y-3 text-sm">
                {['Library', 'Centres', 'Research', 'Admission', 'Course Index'].map(
                  (link) => (
                    <motion.li key={link} whileHover={{ x: 5 }}>
                      <a
                        href="#"
                        className="text-amber-100 hover:text-white transition-colors flex items-center gap-2 group"
                      >
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        {link}
                      </a>
                    </motion.li>
                  )
                )}
              </ul>
            </motion.div>
          </div>

          {/* Social Media */}
          <motion.div
            className="border-t border-amber-700 pt-8 mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-center gap-6">
              {[Facebook, Twitter, Instagram, Linkedin, Youtube].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon className="w-6 h-6 text-amber-100" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Copyright */}
          <div className="border-t border-amber-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-amber-100">
            <p>Copyright © CHRIST (Deemed to be University) 2026 | Privacy Policy</p>
            <p className="text-center md:text-right">
              Website Developed by Cloud Business Pages from INI Technologies Pvt Ltd., Kochi,
              India
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Share Icon Component
function Share({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="18" cy="5" r="3" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="19" r="3" />
      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
      <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
    </svg>
  );
}