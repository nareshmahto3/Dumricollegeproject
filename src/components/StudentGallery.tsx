import { useState } from 'react';
import { Image, Upload, Plus, X, Calendar, Tag, FileText, Download, Trash2 } from 'lucide-react';
import { Card } from './ui/card';
import { PortalLayout } from './PortalLayout';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';

interface GalleryItem {
  id: number;
  type: 'image' | 'note';
  title: string;
  description?: string;
  url?: string;
  content?: string;
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
    type: 'note',
    title: 'Physics Formula Notes',
    content: 'Important formulas for Physics exam: \n- F = ma\n- E = mc²\n- v = u + at',
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
    type: 'note',
    title: 'Mathematics Tips',
    content: 'Quick tips for solving calculus problems:\n1. Always check domain\n2. Simplify before differentiation\n3. Use chain rule when needed',
    tags: ['study', 'mathematics'],
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
];

export function StudentGallery() {
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>(sampleGalleryItems);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [selectedType, setSelectedType] = useState<'image' | 'note'>('image');
  const [filter, setFilter] = useState<'all' | 'images' | 'notes'>('all');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const filteredItems = galleryItems.filter((item) => {
    if (filter === 'all') return true;
    if (filter === 'images') return item.type === 'image';
    if (filter === 'notes') return item.type === 'note';
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
          <Card className="p-6 bg-white border border-slate-200 hover:border-blue-300 transition-all duration-200 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
                <Image className="w-6 h-6 text-blue-600" />
              </div>
              <Badge className="bg-blue-50 text-blue-700 border-blue-200 font-medium">Total</Badge>
            </div>
            <h3 className="text-3xl font-bold text-slate-900 mb-1">{galleryItems.length}</h3>
            <p className="text-sm text-slate-600 font-medium">Total Items</p>
          </Card>
          <Card className="p-6 bg-white border border-slate-200 hover:border-blue-300 transition-all duration-200 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center">
                <Image className="w-6 h-6 text-emerald-600" />
              </div>
              <Badge className="bg-emerald-50 text-emerald-700 border-emerald-200 font-medium">Media</Badge>
            </div>
            <h3 className="text-3xl font-bold text-slate-900 mb-1">
              {galleryItems.filter((item) => item.type === 'image').length}
            </h3>
            <p className="text-sm text-slate-600 font-medium">Images</p>
          </Card>
          <Card className="p-6 bg-white border border-slate-200 hover:border-blue-300 transition-all duration-200 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center">
                <FileText className="w-6 h-6 text-purple-600" />
              </div>
              <Badge className="bg-purple-50 text-purple-700 border-purple-200 font-medium">Docs</Badge>
            </div>
            <h3 className="text-3xl font-bold text-slate-900 mb-1">
              {galleryItems.filter((item) => item.type === 'note').length}
            </h3>
            <p className="text-sm text-slate-600 font-medium">Notes</p>
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
              variant={filter === 'notes' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setFilter('notes')}
              className={filter === 'notes' ? 'bg-blue-600 hover:bg-blue-700 text-white font-semibold' : 'border-slate-300 text-slate-700 hover:bg-blue-50 hover:text-[#2F80ED] hover:border-blue-500 font-semibold transition-all duration-200'}
            >
              <FileText className="w-4 h-4 mr-2" />
              Notes
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
                <div className="relative h-48 bg-blue-50 p-4 overflow-hidden">
                  <div className="absolute top-3 right-3">
                    <Badge className="bg-blue-600 text-white border-blue-600 font-medium">
                      <FileText className="w-3 h-3 mr-1" />
                      Note
                    </Badge>
                  </div>
                  <div className="h-full overflow-hidden">
                    <pre className="text-sm text-slate-700 whitespace-pre-wrap line-clamp-6 font-sans font-medium">
                      {item.content}
                    </pre>
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
                      variant={selectedType === 'note' ? 'default' : 'outline'}
                      onClick={() => setSelectedType('note')}
                      className={selectedType === 'note' ? 'bg-blue-600 hover:bg-blue-700 font-semibold' : ''}
                    >
                      <FileText className="w-4 h-4 mr-2" />
                      Note
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
                      <Label htmlFor="note-title">Title</Label>
                      <Input id="note-title" placeholder="e.g., Physics Notes" className="mt-2" />
                    </div>
                    <div>
                      <Label htmlFor="note-content">Content</Label>
                      <textarea
                        id="note-content"
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
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <pre className="text-sm whitespace-pre-wrap font-sans">
                      {selectedItem.content}
                    </pre>
                  </div>
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