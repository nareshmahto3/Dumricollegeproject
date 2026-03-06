import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { CarouselHeader } from '../CarouselHeader';
import { Footer } from '../Footer';

interface GalleryImage {
  id: number;
  src: string;
  title: string;
  category: string;
  description: string;
}

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800',
    title: 'Annual Convocation',
    category: 'Events',
    description: 'Celebrating the achievements of our graduating students',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800',
    title: 'Science Laboratory',
    category: 'Campus',
    description: 'State-of-the-art facilities for research and innovation',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=800',
    title: 'Sports Activities',
    category: 'Sports',
    description: 'Promoting physical fitness and teamwork',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800',
    title: 'Modern Library',
    category: 'Campus',
    description: 'A quiet sanctuary for knowledge seekers',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800',
    title: 'Cultural Festival',
    category: 'Events',
    description: 'Celebrating diversity through music and dance',
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800',
    title: 'Basketball Championship',
    category: 'Sports',
    description: 'Excellence in athletic performance',
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800',
    title: 'Art Exhibition',
    category: 'Events',
    description: 'Showcasing student creativity and talent',
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?w=800',
    title: 'Campus Architecture',
    category: 'Campus',
    description: 'Beautiful and modern infrastructure',
  },
  {
    id: 9,
    src: 'https://images.unsplash.com/photo-1562774053-701939374585?w=800',
    title: 'Graduation Ceremony',
    category: 'Events',
    description: 'Honoring academic achievements',
  },
];

const categories = ['All', 'Events', 'Campus', 'Sports'];

export function GalleryPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const filteredImages =
    selectedCategory === 'All'
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  const handlePrevImage = () => {
    if (!selectedImage) return;
    const currentIndex = filteredImages.findIndex((img) => img.id === selectedImage.id);
    const prevIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1;
    setSelectedImage(filteredImages[prevIndex]);
  };

  const handleNextImage = () => {
    if (!selectedImage) return;
    const currentIndex = filteredImages.findIndex((img) => img.id === selectedImage.id);
    const nextIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0;
    setSelectedImage(filteredImages[nextIndex]);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <CarouselHeader />

      {/* Hero Section */}
      <section
        className="relative h-[385px] bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=1200&q=80)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#2F584F]/80 to-[#00192C]/90" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-full flex flex-col justify-center pt-20 pb-16">
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

      {/* Category Filter */}
      <section className="py-4 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                variant={selectedCategory === category ? 'default' : 'outline'}
                className={
                  selectedCategory === category
                    ? 'bg-[#2563EB] hover:bg-[#1d4ed8] text-white'
                    : 'border-slate-300 text-slate-700 hover:bg-slate-50'
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-6 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence>
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Card
                    className="overflow-hidden cursor-pointer hover:shadow-xl transition-shadow bg-white border-slate-200"
                    onClick={() => setSelectedImage(image)}
                  >
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={image.src}
                        alt={image.title}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                      />
                    </div>
                    <div className="p-4">
                      <Badge className="mb-2 bg-blue-100 text-[#2563EB] border-0">
                        {image.category}
                      </Badge>
                      <h3 className="font-semibold text-slate-900 mb-2">{image.title}</h3>
                      <p className="text-sm text-slate-600">{image.description}</p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-slate-300 transition-colors"
            >
              <X className="w-8 h-8" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrevImage();
              }}
              className="absolute left-4 text-white hover:text-slate-300 transition-colors"
            >
              <ChevronLeft className="w-12 h-12" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNextImage();
              }}
              className="absolute right-4 text-white hover:text-slate-300 transition-colors"
            >
              <ChevronRight className="w-12 h-12" />
            </button>

            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />
              <div className="mt-4 text-center">
                <Badge className="mb-2 bg-[#2563EB] text-white border-0">
                  {selectedImage.category}
                </Badge>
                <h3 className="text-xl font-semibold text-white mb-2">{selectedImage.title}</h3>
                <p className="text-slate-300">{selectedImage.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <Footer />
    </div>
  );
}