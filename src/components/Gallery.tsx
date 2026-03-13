import { motion, AnimatePresence } from 'motion/react';
import { Camera, Image as ImageIcon, Video, Calendar, Award, Music, Palette, Trophy, Users, Heart, Sparkles, Play, MapPin, Building, X, ChevronLeft, ChevronRight, Maximize2, ZoomIn, Share2 } from 'lucide-react';
import { Badge } from './ui/badge';
import { Card } from './ui/card';
import { Button } from './ui/button';
// import { SharedNavigation } from './shared/SharedNavigation';
import { CarouselHeader } from './CarouselHeader';
import { SharedFooter } from './shared/SharedFooter';
import { Footer } from './Footer';
import { Preloader } from './shared/Preloader';
import { useNavigate } from 'react-router';
import { useState } from 'react';

export function Gallery() {
  const navigate = useNavigate();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentCategory, setCurrentCategory] = useState('');

  const eventImages = [
    { url: 'https://images.unsplash.com/photo-1643199032520-99230e970fb9?w=800&q=80', title: 'Annual Convocation 2025', category: 'Events', date: 'March 15, 2025', filename: 'gallery-img-1' },
    { url: 'https://images.unsplash.com/photo-1759456629213-3db5a7bb53ae?w=800&q=80', title: 'TechFest Innovation Fair', category: 'Events', date: 'February 10, 2025', filename: 'gallery-img-2' },
    { url: 'https://images.unsplash.com/photo-1686213011371-2aff28a08f16?w=800&q=80', title: 'Placement Drive 2025', category: 'Career', date: 'January 20, 2025', filename: 'gallery-img-3' },
  ];

  const campusImages = [
    { url: 'https://images.unsplash.com/photo-1670111482157-c5ecbba142a7?w=800&q=80', title: 'Main Academic Block', category: 'Campus', filename: 'gallery-img-4' },
    { url: 'https://images.unsplash.com/photo-1588618319407-948d4424befd?w=800&q=80', title: 'Central Library', category: 'Facilities', filename: 'gallery-img-5' },
    { url: 'https://images.unsplash.com/photo-1733426509854-10931d84009a?w=800&q=80', title: 'Science Laboratory', category: 'Facilities', filename: 'gallery-img-6' },
    { url: 'https://images.unsplash.com/photo-1701448149957-b96dbd1926ff?w=800&q=80', title: 'Engineering Workshop', category: 'Facilities', filename: 'gallery-img-7' },
    { url: 'https://images.unsplash.com/photo-1767319257862-e5c5aeb1c628?w=800&q=80', title: 'Research Center', category: 'Research', filename: 'gallery-img-8' },
    { url: 'https://images.unsplash.com/photo-1765294064326-036a233f9f49?w=800&q=80', title: 'Campus Aerial View', category: 'Campus', filename: 'gallery-img-9' },
  ];

  const studentLife = [
    { url: 'https://images.unsplash.com/photo-1763890498955-13f109b2fbd7?w=800&q=80', title: 'Students in Campus', category: 'Student Life', filename: 'gallery-img-10' },
    { url: 'https://images.unsplash.com/photo-1664273891579-22f28332f3c4?w=800&q=80', title: 'Study Group', category: 'Student Life', filename: 'gallery-img-11' },
    { url: 'https://images.unsplash.com/photo-1766459710529-c9fdb8023ecb?w=800&q=80', title: 'Sports Day', category: 'Sports', filename: 'gallery-img-12' },
    { url: 'https://images.unsplash.com/photo-1766297248027-864589dbd336?w=800&q=80', title: 'Laboratory Work', category: 'Academics', filename: 'gallery-img-13' },
    { url: 'https://images.unsplash.com/photo-1768796370407-6d36619e7d6d?w=800&q=80', title: 'Workshop Session', category: 'Learning', filename: 'gallery-img-14' },
    { url: 'https://images.unsplash.com/photo-1766297247924-6638d54e7c89?w=800&q=80', title: 'Computer Lab', category: 'Technology', filename: 'gallery-img-15' },
  ];

  const cultural = [
    { url: 'https://images.unsplash.com/photo-1771736462659-786b163d291e?w=800&q=80', title: 'Cultural Festival', category: 'Culture', filename: 'gallery-img-16' },
    { url: 'https://images.unsplash.com/photo-1742497360373-a399f83ec432?w=800&q=80', title: 'Art Exhibition', category: 'Art', filename: 'gallery-img-17' },
    { url: 'https://images.unsplash.com/photo-1754531976838-436a70636c96?w=800&q=80', title: 'Leadership Summit', category: 'Conference', filename: 'gallery-img-18' },
  ];

  const openLightbox = (index: number, category: string) => {
    setCurrentImageIndex(index);
    setCurrentCategory(category);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const goToNext = () => {
    const images = getCategoryImages(currentCategory);
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const goToPrev = () => {
    const images = getCategoryImages(currentCategory);
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const getCategoryImages = (category: string) => {
    switch (category) {
      case 'events':
        return eventImages;
      case 'campus':
        return campusImages;
      case 'studentLife':
        return studentLife;
      case 'cultural':
        return cultural;
      default:
        return [];
    }
  };

  const currentImage = getCategoryImages(currentCategory)[currentImageIndex];
  const totalImages = getCategoryImages(currentCategory).length;

  return (
    <>
      <Preloader />
      <div className="min-h-screen bg-white">
        <CarouselHeader />

        {/* Hero Section */}
        <section className="relative h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1920&q=80"
              alt="Campus Gallery"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-purple-950/95 via-blue-900/90 to-cyan-900/85" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="text-center text-white"
              >
                {/* <Badge className="bg-blue-500/30 text-blue-100 border-blue-400/50 backdrop-blur-md mb-6 md:mb-8 px-4 md:px-8 py-2 md:py-4 text-sm md:text-lg">
                  <Camera className="w-4 h-4 md:w-6 md:h-6 mr-2 md:mr-3" />
                  <span className="hidden sm:inline">1000+ Photos • 50+ Events</span>
                  <span className="sm:hidden">Campus Moments</span>
                </Badge> */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-4 md:mb-8 leading-tight px-4">
                  Campus Gallery
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-blue-100 mb-4 md:mb-6 max-w-4xl mx-auto font-light px-4">
              Explore life at our college through images and memories.
                </p>
                <p className="text-base md:text-xl text-blue-200 max-w-3xl mx-auto leading-relaxed px-4">
                     Moments That Define Our Community, Explore the vibrant life, culture, and achievements at  Jharkhand Commerce Inter College
                </p>
              </motion.div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-20 md:h-32 bg-gradient-to-t from-white to-transparent" />
        </section>

    
        {/* Recent Events */}
        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <Badge className="bg-blue-100 text-blue-700 border-0 mb-4 px-4 py-2">
                <Calendar className="w-4 h-4 mr-2" />
                Latest Updates
              </Badge>
              <h2 className="text-5xl lg:text-6xl font-black text-slate-900 mb-6">
                Recent Events
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Highlights from our latest college events and celebrations
              </p>
              <div className="w-24 h-2 bg-blue-600 mx-auto mt-8" />
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {eventImages.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  whileHover={{ y: -15 }}
                  className="group cursor-pointer"
                  onClick={() => openLightbox(index, 'events')}
                >
                  <Card className="overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all rounded-2xl">
                    <div className="relative h-96 overflow-hidden rounded-2xl">
                      <img
                        src={image.url}
                        alt={image.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />
                      <div className="absolute bottom-0 left-0 right-0 p-8 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform">
                        <Badge className="bg-blue-600 text-white border-0 mb-4">
                          <Calendar className="w-3 h-3 mr-1" />
                          {image.date}
                        </Badge>
                        <h3 className="text-3xl font-black mb-2">{image.title}</h3>
                        <p className="text-blue-200 font-semibold">{image.category}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

      
        {/* Student Life */}
        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <Badge className="bg-cyan-100 text-cyan-700 border-0 mb-4 px-4 py-2">
                <Users className="w-4 h-4 mr-2" />
                Campus Life
              </Badge>
              <h2 className="text-5xl lg:text-6xl font-black text-slate-900 mb-6">
                Student Life
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                A vibrant community of learners, creators, and achievers
              </p>
              <div className="w-24 h-2 bg-cyan-600 mx-auto mt-8" />
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {studentLife.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  whileHover={{ scale: 1.05 }}
                  className="group cursor-pointer"
                  onClick={() => openLightbox(index, 'studentLife')}
                >
                  <Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all rounded-2xl">
                    <div className="relative h-72 overflow-hidden rounded-2xl">
                      <img
                        src={image.url}
                        alt={image.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/80 via-cyan-900/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <Badge className="bg-cyan-600 text-white border-0 mb-3 text-xs">
                          {image.category}
                        </Badge>
                        <h3 className="text-xl font-bold">{image.title}</h3>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Cultural & Sports */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <Badge className="bg-purple-100 text-purple-700 border-0 mb-4 px-4 py-2">
                <Palette className="w-4 h-4 mr-2" />
                Culture & Arts
              </Badge>
              <h2 className="text-5xl lg:text-6xl font-black text-slate-900 mb-6">
                Cultural Events
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Celebrating diversity, creativity, and talent
              </p>
              <div className="w-24 h-2 bg-purple-600 mx-auto mt-8" />
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {cultural.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  whileHover={{ y: -10 }}
                  className="group cursor-pointer"
                  onClick={() => openLightbox(index, 'cultural')}
                >
                  <Card className="overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all rounded-2xl">
                    <div className="relative h-96 overflow-hidden rounded-2xl">
                      <img
                        src={image.url}
                        alt={image.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 via-purple-900/50 to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />
                      <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                        <Badge className="bg-purple-600 text-white border-0 mb-4">
                          {image.category}
                        </Badge>
                        <h3 className="text-3xl font-black">{image.title}</h3>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Statistics */}
        <section className="py-24 bg-gradient-to-br from-blue-950 via-indigo-900 to-purple-900 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl lg:text-6xl font-black mb-6">
                Gallery Statistics
              </h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Capturing moments of excellence
              </p>
              <div className="w-24 h-2 bg-blue-400 mx-auto mt-8" />
            </motion.div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { icon: ImageIcon, value: '1000+', label: 'Photos' },
                { icon: Video, value: '100+', label: 'Videos' },
                { icon: Calendar, value: '50+', label: 'Events Covered' },
                { icon: Trophy, value: '30+', label: 'Awards Captured' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="text-center"
                >
                  <div className="w-20 h-20 bg-blue-500/30 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <item.icon className="w-10 h-10 text-blue-200" />
                  </div>
                  <div className="text-5xl font-black mb-2">{item.value}</div>
                  <div className="text-blue-100 font-medium text-lg">{item.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Video Gallery Section */}
        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <Badge className="bg-red-100 text-red-700 border-0 mb-4 px-4 py-2">
                <Video className="w-4 h-4 mr-2" />
                Video Gallery
              </Badge>
              <h2 className="text-5xl lg:text-6xl font-black text-slate-900 mb-6">
                Campus Videos
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Experience Dumri College through our video collection
              </p>
              <div className="w-24 h-2 bg-red-600 mx-auto mt-8" />
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: 'Campus Tour 2026', duration: '5:30', thumbnail: 'https://images.unsplash.com/photo-1670111482157-c5ecbba142a7?w=800&q=80' },
                { title: 'Convocation Highlights', duration: '8:45', thumbnail: 'https://images.unsplash.com/photo-1643199032520-99230e970fb9?w=800&q=80' },
                { title: 'Student Life at Dumri', duration: '6:20', thumbnail: 'https://images.unsplash.com/photo-1763890498955-13f109b2fbd7?w=800&q=80' },
              ].map((video, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  whileHover={{ y: -10 }}
                  className="group cursor-pointer"
                >
                  <Card className="overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all">
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors flex items-center justify-center">
                        <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Play className="w-10 h-10 text-white ml-1" fill="white" />
                        </div>
                      </div>
                      <Badge className="absolute top-4 right-4 bg-black/70 text-white border-0">
                        {video.duration}
                      </Badge>
                    </div>
                    <div className="p-6 bg-white">
                      <h3 className="text-xl font-bold text-slate-900">{video.title}</h3>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center"
            >
              <Sparkles className="w-16 h-16 mx-auto mb-8 text-blue-200" />
              <h2 className="text-5xl lg:text-6xl font-black mb-8 leading-tight">
                Experience Campus Life Firsthand
              </h2>
              <p className="text-2xl text-blue-100 mb-12 leading-relaxed">
                Schedule a campus visit and see why Dumri College is the perfect place 
                for your academic journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button
                  size="lg"
                  onClick={() => navigate('/contact')}
                  className="bg-white text-blue-600 hover:bg-blue-50 px-12 py-8 text-xl font-bold shadow-2xl"
                >
                  Schedule Visit
                  <MapPin className="ml-3 w-6 h-6" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => navigate('/apply')}
                  className="bg-white text-blue-600 hover:bg-blue-50 px-12 py-8 text-xl font-bold shadow-2xl"
                >
                  Apply Now
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && currentImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center"
            onClick={closeLightbox}
          >
            {/* Counter - Top Left */}
            <div className="absolute top-6 left-6 text-white text-base font-medium z-10">
              {currentImageIndex + 1} / {totalImages}
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
                src={currentImage.url}
                alt={currentImage.title}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />

              {/* Image Caption - Bottom Center */}
              <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 text-white text-sm whitespace-nowrap">
                {currentImage.filename}
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