import { useState } from 'react';
import { useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { ChevronRight, X, Calendar } from 'lucide-react';
import { CarouselHeader } from './CarouselHeader';
import { Footer } from './Footer';

const Badge = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className={`inline-flex items-center ${className}`}>{children}</div>
);

const Card = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className={className}>{children}</div>
);
// Image URLs
const imgDivElementorElement = 'https://via.placeholder.com/800x600?text=Gallery+Banner';
const imgBnrArrow11 = 'https://via.placeholder.com/120x120?text=Arrow';
const imgGalleryImg55MinJpg = 'https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=500';
const imgGalleryImg5Jpg = 'https://images.unsplash.com/photo-1763890763432-17c9a529da20?w=500';
const imgGalleryImg4MinJpg = 'https://images.unsplash.com/photo-1687866394811-9fe40749c860?w=500';
const imgGalleryImg3MinJpg = 'https://images.unsplash.com/photo-1604307405707-04f70b3af5d3?w=500';
const imgGalleryImg6Jpg = 'https://images.unsplash.com/photo-1770844049822-583611b8efb3?w=500';
const imgGalleryImg2MinJpg = 'https://images.unsplash.com/photo-1502232917128-1aa500764cbd?w=500';

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

interface EventImage {
  url: string;
  title: string;
  date: string;
  category: string;
}

const eventImages: EventImage[] = [
  { url: 'https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=500', title: 'Classroom Session', date: 'Jan 2024', category: 'Academic' },
  { url: 'https://images.unsplash.com/photo-1763890763432-17c9a529da20?w=500', title: 'Campus Activity', date: 'Feb 2024', category: 'Campus Life' },
  { url: 'https://images.unsplash.com/photo-1733426509854-10931d84009a?w=500', title: 'Lab Work', date: 'Mar 2024', category: 'Research' }
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
      <section
        className="relative h-[385px] bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=1200&q=80)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#2F584F]/80 to-[#00192C]/90" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-full flex flex-col justify-center pt-30 pb-16">
          <div className="flex items-center gap-2 mb-5">
            <button
              onClick={() => window.history.back()}
              className="text-white text-base hover:underline"
            >
              Home
            </button>
            <ChevronRight className="w-4 h-4 text-white" />
            <span className="text-white text-base">Gallery</span>
          </div>
          <h1 className="text-5xl font-light text-white mb-5 font-serif">
            Campus Gallery
          </h1>
          <div className="relative w-full max-w-[480px] h-[1px] bg-white/15 mb-5">
            <div className="absolute left-0 top-0 h-full w-[120px] bg-[#FDC72F]" />
          </div>
          <p className="text-white/90 text-lg max-w-2xl leading-relaxed">
            Explore life at Dumri College through moments captured from our vibrant campus
          </p>
        </div>
      </section>

      {/* Life at Our University Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
              Life at Our College
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
                className={`px-6 py-2.5 rounded-md font-medium text-sm transition-colors ${activeCategory === category.id
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
      {
        lightboxOpen && (
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
