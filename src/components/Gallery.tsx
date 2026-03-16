import { useState } from 'react';
import { useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { ChevronRight, X } from 'lucide-react';
import { CarouselHeader } from './CarouselHeader';
import { Footer } from './Footer';
import imgDivElementorElement from "figma:asset/04d1f575a7ef1739b76204137772fe6c3ad17fe6.png";
import imgBnrArrow11 from "figma:asset/13bec648740b03b5c9d2c72567cc9f3e05c47165.png";
import imgGalleryImg55MinJpg from "figma:asset/42eacf93ea3054579ca1fa8f5ce78d9b065e6f8a.png";
import imgGalleryImg5Jpg from "figma:asset/15c3fd45d7da5342a52535f718dc36e0eb37d0e3.png";
import imgGalleryImg4MinJpg from "figma:asset/d871d868f1f32cc206ea9d0915fceee73eb84c6e.png";
import imgGalleryImg3MinJpg from "figma:asset/08575e4e244c4d18de0ef25022dd7a4fd3eddd44.png";
import imgGalleryImg6Jpg from "figma:asset/5ecc01adcbaf2fb031ee6a927356d1c25871b29d.png";
import imgGalleryImg2MinJpg from "figma:asset/c9c9ffb636b53266c96e26987f011f92912502c6.png";

type GalleryCategory = 'all' | 'campus-life' | 'academic' | 'labs' | 'graduation';

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: GalleryCategory[];
}

const galleryImages: GalleryImage[] = [
  {
    id: '1',
    src: imgGalleryImg55MinJpg,
    alt: 'Students in classroom raising hands',
    category: ['all', 'academic', 'campus-life']
  },
  {
    id: '2',
    src: imgGalleryImg5Jpg,
    alt: 'Happy students on campus',
    category: ['all', 'campus-life']
  },
  {
    id: '3',
    src: imgGalleryImg4MinJpg,
    alt: 'College building exterior',
    category: ['all', 'graduation']
  },
  {
    id: '4',
    src: imgGalleryImg3MinJpg,
    alt: 'Students studying outdoors',
    category: ['all', 'campus-life', 'academic']
  },
  {
    id: '5',
    src: imgGalleryImg6Jpg,
    alt: 'Music performance',
    category: ['all', 'campus-life']
  },
  {
    id: '6',
    src: imgGalleryImg2MinJpg,
    alt: 'Students gathering outdoor',
    category: ['all', 'campus-life', 'graduation']
  },
  // Additional images from Unsplash
  {
    id: '7',
    src: 'https://images.unsplash.com/photo-1606761568499-6d2451b23c66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwY2xhc3Nyb29tJTIwc3R1ZGVudHMlMjBzdHVkeWluZ3xlbnwxfHx8fDE3NzM2MDA2Njl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Classroom study session',
    category: ['all', 'academic']
  },
  {
    id: '8',
    src: 'https://images.unsplash.com/photo-1763890763432-17c9a529da20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwZnJpZW5kcyUyMGNhbXB1cyUyMG91dGRvb3J8ZW58MXx8fHwxNzczNjAwNjcwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Friends on campus',
    category: ['all', 'campus-life']
  },
  {
    id: '9',
    src: 'https://images.unsplash.com/photo-1733426509854-10931d84009a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwbGFib3JhdG9yeSUyMHNjaWVuY2UlMjBleHBlcmltZW50fGVufDF8fHx8MTc3MzYwMDY3MHww&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Science laboratory',
    category: ['all', 'labs', 'academic']
  },
  {
    id: '10',
    src: 'https://images.unsplash.com/photo-1708578200684-3aa944b73237?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwc3R1ZGVudHMlMjBvdXRkb29yJTIwZGlzY3Vzc2lvbnxlbnwxfHx8fDE3NzM2MDA2NzF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Outdoor discussion',
    category: ['all', 'campus-life', 'academic']
  },
  {
    id: '11',
    src: 'https://images.unsplash.com/photo-1770844049822-583611b8efb3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwbXVzaWMlMjBiYW5kJTIwcGVyZm9ybWFuY2V8ZW58MXx8fHwxNzczNTA3NjIxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Music band performance',
    category: ['all', 'campus-life']
  },
  {
    id: '12',
    src: 'https://images.unsplash.com/photo-1687866394811-9fe40749c860?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwYnVpbGRpbmclMjBhcmNoaXRlY3R1cmUlMjBjYW1wdXN8ZW58MXx8fHwxNzczNjAwNjcxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'College building architecture',
    category: ['all', 'graduation']
  }
];

const categories = [
  { id: 'all' as const, label: 'All' },
  { id: 'campus-life' as const, label: 'Campus Life' },
  { id: 'academic' as const, label: 'Academic Activities' },
  { id: 'labs' as const, label: 'Classrooms & Labs' },
  { id: 'graduation' as const, label: 'Graduation Ceremony' }
];

export function Gallery() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Filter images based on active category
  const filteredImages = activeCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category.includes(activeCategory));

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const goToNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % filteredImages.length);
  };

  const goToPrev = () => {
    setCurrentImageIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <CarouselHeader />

      {/* Hero Banner */}
      <section className="relative h-[320px] overflow-hidden">
        {/* Background with texture */}
        <div className="absolute inset-0">
          <div className="absolute bg-[#0c5776] inset-0" />
          <div className="absolute inset-0 overflow-hidden">
            <img 
              alt="" 
              className="absolute h-full left-0 max-w-none top-0 w-[115.51%] object-cover opacity-30" 
              src={imgDivElementorElement} 
            />
          </div>
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#00192C]/40 to-transparent"></div>

        {/* Decorative Arrow - Bottom Right */}
        <div className="absolute bottom-[40px] right-[100px] z-10 hidden lg:block opacity-70">
          <img 
            alt="" 
            className="w-[120px] h-[120px]" 
            src={imgBnrArrow11} 
          />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-full flex flex-col justify-center pt-20 pb-8">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 mb-4">
            <button
              onClick={() => navigate('/')}
              className="text-white text-sm hover:underline"
            >
              Home
            </button>
            <ChevronRight className="w-4 h-4 text-white" />
            <span className="text-white text-sm">Gallery</span>
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-6xl font-light text-white mb-6 font-serif">
            Gallery
          </h1>

          {/* Description */}
          <p className="text-white/90 text-base leading-7 max-w-3xl">
            Education goes beyond textbooks and classrooms. We believe in empowering students
            <br className="hidden sm:block" />
            to explore their passions, challenge conventions, and discover their potential.
          </p>
        </div>
      </section>

      {/* Life at Our University Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
              Life at Our University
            </h2>
            <p className="text-gray-600 text-base max-w-2xl mx-auto">
              Explore life at our university through images and memories.
            </p>
          </div>

          {/* Category Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2.5 rounded-md font-medium text-sm transition-colors ${
                  activeCategory === category.id
                    ? 'bg-[#00a7b8] text-white'
                    : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group cursor-pointer overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition-all"
                onClick={() => openLightbox(index)}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* No Results */}
          {filteredImages.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-600 text-lg mb-4">No images found in this category</p>
              <button
                onClick={() => setActiveCategory('all')}
                className="text-[#00a7b8] hover:underline font-medium"
              >
                View all images
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center">
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors z-10"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          {/* Image Counter */}
          <div className="absolute top-6 left-6 text-white text-base font-medium z-10">
            {currentImageIndex + 1} / {filteredImages.length}
          </div>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToPrev();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors z-10"
            aria-label="Previous image"
          >
            <ChevronRight className="w-6 h-6 text-white rotate-180" />
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors z-10"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          {/* Image */}
          <div className="max-w-6xl max-h-[90vh] px-16" onClick={(e) => e.stopPropagation()}>
            <img
              src={filteredImages[currentImageIndex]?.src}
              alt={filteredImages[currentImageIndex]?.alt}
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />
          </div>

          {/* Image Title */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-center">
            <p className="text-lg font-medium">{filteredImages[currentImageIndex]?.alt}</p>
          </div>

          {/* Background Click to Close */}
          <div
            className="absolute inset-0 -z-10"
            onClick={closeLightbox}
          />
        </div>
      )}
    </div>
  );
}
