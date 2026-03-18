import { useState } from 'react';
import { Image, Upload, Plus, X, Calendar, Tag, Video, Download, Trash2, Play } from 'lucide-react';
import { Card } from './ui/card';
import { PortalLayout } from './PortalLayout';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';

interface GalleryItem {
  id: number;
  type: 'image' | 'video';
  title: string;
  description?: string;
  url?: string;
  thumbnail?: string;
  tags: string[];
  date: string;
  eventName?: string;
}

const sampleGalleryItems: GalleryItem[] = [
  {
    id: 1,
    type: 'image',
    title: 'Annual Day 2026',
    description: 'Annual cultural fest celebration',
    url: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=500',
    tags: ['event', 'cultural'],
    date: '2026-01-25',
    eventName: 'Annual Day',
  },
  {
    id: 2,
    type: 'video',
    title: 'Physics Lab Experiment',
    description: 'Newton\'s laws demonstration in lab',
    url: 'https://www.w3schools.com/html/mov_bbb.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=500',
    tags: ['study', 'physics'],
    date: '2026-02-10',
  },
  {
    id: 3,
    type: 'image',
    title: 'Sports Day Victory',
    description: 'Won first prize in 100m race',
    url: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=500',
    tags: ['sports', 'achievement'],
    date: '2026-02-05',
    eventName: 'Sports Day',
  },
  {
    id: 4,
    type: 'video',
    title: 'Chemistry Reaction Demo',
    description: 'Exciting chemical reaction demonstration',
    url: 'https://www.w3schools.com/html/movie.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1628863353691-0071c8c1874c?w=500',
    tags: ['study', 'chemistry'],
    date: '2026-02-08',
  },
  {
    id: 5,
    type: 'image',
    title: 'Tech Fest 2026',
    description: 'Robotics competition showcase',
    url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=500',
    tags: ['event', 'technology'],
    date: '2026-01-30',
    eventName: 'Tech Fest',
  },
  {
    id: 6,
    type: 'video',
    title: 'Annual Function Performance',
    description: 'Dance performance at annual function',
    url: 'https://www.w3schools.com/html/mov_bbb.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1504609813442-a8924e83f76e?w=500',
    tags: ['event', 'cultural'],
    date: '2026-01-26',
    eventName: 'Annual Day',
  },
];

export function StudentGallery() {
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>(sampleGalleryItems);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [selectedType, setSelectedType] = useState<'image' | 'video'>('image');
  const [filter, setFilter] = useState<'all' | 'images' | 'videos'>('all');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const filteredItems = galleryItems.filter((item) => {
    if (filter === 'all') return true;
    if (filter === 'images') return item.type === 'image';
    if (filter === 'videos') return item.type === 'video';
    return true;
  });

  const deleteItem = (id: number) => {
    setGalleryItems(galleryItems.filter((item) => item.id !== id));
    if (selectedItem?.id === id) {
      setSelectedItem(null);
    }
  };

  return (
    <PortalLayout
      role="student"
      userName="Rohan Kumar"
      userRole="Class 10-A"
      pageTitle="Gallery"
      breadcrumbs={["Home", "Student", "Gallery"]}
    >
      <div className="space-y-6">
        {/* Header Card */}
        <Card className="p-6 bg-white border border-slate-200 shadow-sm">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-2">My Gallery</h2>
              <p className="text-slate-600 font-medium">
                Save your notes and college event memories
              </p>
            </div>
            <Button
              onClick={() => setIsAddModalOpen(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-all duration-200"
            >
              <Plus className="w-4 h-4 mr-2" />
              Add New
            </Button>
          </div>
        </Card>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Card className="p-6 bg-gradient-to-br from-blue-500 to-blue-600 border-0 shadow-lg hover:shadow-xl transition-all duration-200">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center backdrop-blur-sm">
                <Image className="w-6 h-6 text-white" />
              </div>
              <Badge className="bg-white/20 text-white border-white/30 font-medium">Total</Badge>
            </div>
            <h3 className="text-3xl font-bold text-white mb-1">{galleryItems.length}</h3>
            <p className="text-sm text-white/90 font-medium">Total Items</p>
          </Card>
          <Card className="p-6 bg-gradient-to-br from-emerald-500 to-emerald-600 border-0 shadow-lg hover:shadow-xl transition-all duration-200">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center backdrop-blur-sm">
                <Image className="w-6 h-6 text-white" />
              </div>
              <Badge className="bg-white/20 text-white border-white/30 font-medium">Media</Badge>
            </div>
            <h3 className="text-3xl font-bold text-white mb-1">
              {galleryItems.filter((item) => item.type === 'image').length}
            </h3>
            <p className="text-sm text-white/90 font-medium">Images</p>
          </Card>
          <Card className="p-6 bg-gradient-to-br from-purple-500 to-purple-600 border-0 shadow-lg hover:shadow-xl transition-all duration-200">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center backdrop-blur-sm">
                <Video className="w-6 h-6 text-white" />
              </div>
              <Badge className="bg-white/20 text-white border-white/30 font-medium">Videos</Badge>
            </div>
            <h3 className="text-3xl font-bold text-white mb-1">
              {galleryItems.filter((item) => item.type === 'video').length}
            </h3>
            <p className="text-sm text-white/90 font-medium">Videos</p>
          </Card>
        </div>

        {/* Filters */}
        <Card className="p-4 bg-white border border-slate-200 shadow-sm">
          <div className="flex gap-2 flex-wrap">
            <Button
              variant={filter === 'all' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setFilter('all')}
              className={filter === 'all' ? 'bg-blue-600 hover:bg-blue-700 text-white font-semibold' : 'border-slate-300 text-slate-700 hover:bg-blue-50 hover:text-[#2F80ED] hover:border-blue-500 font-semibold transition-all duration-200'}
            >
              All
            </Button>
            <Button
              variant={filter === 'images' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setFilter('images')}
              className={filter === 'images' ? 'bg-blue-600 hover:bg-blue-700 text-white font-semibold' : 'border-slate-300 text-slate-700 hover:bg-blue-50 hover:text-[#2F80ED] hover:border-blue-500 font-semibold transition-all duration-200'}
            >
              <Image className="w-4 h-4 mr-2" />
              Images
            </Button>
            <Button
              variant={filter === 'videos' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setFilter('videos')}
              className={filter === 'videos' ? 'bg-blue-600 hover:bg-blue-700 text-white font-semibold' : 'border-slate-300 text-slate-700 hover:bg-blue-50 hover:text-[#2F80ED] hover:border-blue-500 font-semibold transition-all duration-200'}
            >
              <Video className="w-4 h-4 mr-2" />
              Videos
            </Button>
          </div>
        </Card>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredItems.map((item) => (
            <Card
              key={item.id}
              className="overflow-hidden border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all duration-200 cursor-pointer"
              onClick={() => setSelectedItem(item)}
            >
              {item.type === 'image' ? (
                <div className="relative h-48 bg-slate-100">
                  {item.url ? (
                    <img
                      src={item.url}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <Image className="w-12 h-12 text-gray-400" />
                    </div>
                  )}
                  <div className="absolute top-3 right-3">
                    <Badge className="bg-emerald-600 text-white border-emerald-600 font-medium">
                      <Image className="w-3 h-3 mr-1" />
                      Image
                    </Badge>
                  </div>
                </div>
              ) : (
                <div className="relative h-48 bg-slate-100">
                  {item.thumbnail ? (
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-purple-50">
                      <Video className="w-12 h-12 text-purple-400" />
                    </div>
                  )}
                  {/* Play Icon Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                    <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
                      <Play className="w-8 h-8 text-purple-600" fill="currentColor" />
                    </div>
                  </div>
                  <div className="absolute top-3 right-3">
                    <Badge className="bg-purple-600 text-white border-purple-600 font-medium">
                      <Video className="w-3 h-3 mr-1" />
                      Video
                    </Badge>
                  </div>
                </div>
              )}

              <div className="p-4">
                <h4 className="font-bold text-slate-900 mb-2 line-clamp-1">{item.title}</h4>
                {item.description && (
                  <p className="text-sm text-slate-600 font-medium mb-3 line-clamp-2">
                    {item.description}
                  </p>
                )}
                <div className="flex items-center justify-between text-xs text-slate-600 font-medium mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-blue-600" />
                    {new Date(item.date).toLocaleDateString()}
                  </div>
                </div>
                <div className="flex flex-wrap gap-1">
                  {item.tags.map((tag, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="bg-blue-50 text-blue-700 border-blue-200 text-xs font-medium"
                    >
                      <Tag className="w-3 h-3 mr-1" />
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <Card className="p-12 text-center border border-slate-200 shadow-sm">
            <Image className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="font-bold text-slate-900 mb-2">No items found</h3>
            <p className="text-slate-600 font-medium mb-6">
              Start adding images and notes to your gallery
            </p>
            <Button
              onClick={() => setIsAddModalOpen(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-all duration-200"
            >
              <Plus className="w-4 h-4 mr-2" />
              Add First Item
            </Button>
          </Card>
        )}
      </div>

      {/* Add Item Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl">Add New Item</h2>
                <button
                  onClick={() => setIsAddModalOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <Label>Type</Label>
                  <div className="flex gap-3 mt-2">
                    <Button
                      type="button"
                      variant={selectedType === 'image' ? 'default' : 'outline'}
                      onClick={() => setSelectedType('image')}
                      className={selectedType === 'image' ? 'bg-blue-600 hover:bg-blue-700 font-semibold' : ''}
                    >
                      <Image className="w-4 h-4 mr-2" />
                      Image
                    </Button>
                    <Button
                      type="button"
                      variant={selectedType === 'video' ? 'default' : 'outline'}
                      onClick={() => setSelectedType('video')}
                      className={selectedType === 'video' ? 'bg-blue-600 hover:bg-blue-700 font-semibold' : ''}
                    >
                      <Video className="w-4 h-4 mr-2" />
                      Video
                    </Button>
                  </div>
                </div>

                {selectedType === 'image' ? (
                  <>
                    <div>
                      <Label htmlFor="image-upload">Upload Image</Label>
                      <div className="mt-2 border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-emerald-300 transition-colors cursor-pointer">
                        <input type="file" id="image-upload" className="hidden" accept="image/*" />
                        <label htmlFor="image-upload" className="cursor-pointer">
                          <Upload className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                          <p className="text-sm text-muted-foreground">
                            Click to upload or drag and drop
                          </p>
                          <p className="text-xs text-muted-foreground mt-1">
                            PNG, JPG up to 10MB
                          </p>
                        </label>
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="title">Title</Label>
                      <Input id="title" placeholder="e.g., Annual Day 2026" className="mt-2" />
                    </div>
                    <div>
                      <Label htmlFor="description">Description</Label>
                      <Input id="description" placeholder="Brief description" className="mt-2" />
                    </div>
                    <div>
                      <Label htmlFor="event">Event Name (Optional)</Label>
                      <Input id="event" placeholder="e.g., Sports Day" className="mt-2" />
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <Label htmlFor="video-title">Title</Label>
                      <Input id="video-title" placeholder="e.g., Physics Lab Experiment" className="mt-2" />
                    </div>
                    <div>
                      <Label htmlFor="video-url">Video URL</Label>
                      <Input id="video-url" placeholder="Enter video URL" className="mt-2" />
                    </div>
                    <div>
                      <Label htmlFor="video-thumbnail">Thumbnail URL (Optional)</Label>
                      <Input id="video-thumbnail" placeholder="Enter thumbnail URL" className="mt-2" />
                    </div>
                    <div>
                      <Label htmlFor="video-description">Description</Label>
                      <textarea
                        id="video-description"
                        placeholder="Write your notes here..."
                        className="w-full mt-2 min-h-[200px] p-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      />
                    </div>
                  </>
                )}

                <div>
                  <Label htmlFor="tags">Tags (comma separated)</Label>
                  <Input id="tags" placeholder="e.g., event, cultural, study" className="mt-2" />
                </div>

                <div className="flex gap-3 pt-4">
                  <Button
                    type="button"
                    onClick={() => setIsAddModalOpen(false)}
                    variant="outline"
                    className="flex-1"
                  >
                    Cancel
                  </Button>
                  <Button
                    type="button"
                    onClick={() => {
                      // Add item logic here
                      setIsAddModalOpen(false);
                    }}
                    className="flex-1 bg-emerald-600 hover:bg-emerald-700"
                  >
                    Add to Gallery
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      )}

      {/* View Item Modal */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <Card className="w-full max-w-3xl max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl">{selectedItem.title}</h2>
                <div className="flex items-center gap-2">
                  {selectedItem.type === 'image' && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => console.log('Download image')}
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                  )}
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => deleteItem(selectedItem.id)}
                    className="text-red-600 hover:bg-red-50"
                  >
                    <Trash2 className="w-4 h-4 mr-2" />
                    Delete
                  </Button>
                  <button
                    onClick={() => setSelectedItem(null)}
                    className="p-2 hover:bg-gray-100 rounded-lg"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {selectedItem.type === 'image' ? (
                <div className="space-y-4">
                  <div className="relative h-96 bg-gray-100 rounded-lg overflow-hidden">
                    {selectedItem.url ? (
                      <img
                        src={selectedItem.url}
                        alt={selectedItem.title}
                        className="w-full h-full object-contain"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <Image className="w-16 h-16 text-gray-400" />
                      </div>
                    )}
                  </div>
                  {selectedItem.description && (
                    <div>
                      <h4 className="text-sm text-muted-foreground mb-2">Description</h4>
                      <p>{selectedItem.description}</p>
                    </div>
                  )}
                  {selectedItem.eventName && (
                    <div>
                      <h4 className="text-sm text-muted-foreground mb-2">Event</h4>
                      <p>{selectedItem.eventName}</p>
                    </div>
                  )}
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="relative h-96 bg-gray-100 rounded-lg overflow-hidden">
                    {selectedItem.url ? (
                      <video
                        src={selectedItem.url}
                        alt={selectedItem.title}
                        className="w-full h-full object-contain"
                        controls
                      >
                        <source src={selectedItem.url} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <Video className="w-16 h-16 text-gray-400" />
                      </div>
                    )}
                  </div>
                  {selectedItem.description && (
                    <div>
                      <h4 className="text-sm text-muted-foreground mb-2">Description</h4>
                      <p>{selectedItem.description}</p>
                    </div>
                  )}
                  {selectedItem.eventName && (
                    <div>
                      <h4 className="text-sm text-muted-foreground mb-2">Event</h4>
                      <p>{selectedItem.eventName}</p>
                    </div>
                  )}
                </div>
              )}

              <div className="mt-6 pt-6 border-t border-border">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {new Date(selectedItem.date).toLocaleDateString()}
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedItem.tags.map((tag, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="bg-yellow-50 text-yellow-700 border-yellow-200"
                    >
                      <Tag className="w-3 h-3 mr-1" />
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>
      )}
    </PortalLayout>
  );
}