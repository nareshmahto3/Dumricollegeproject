import { useState } from 'react';
import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { PortalLayout } from './PortalLayout';
import { BookOpen, Search, Calendar, Clock, CheckCircle, AlertCircle, BookMarked } from 'lucide-react';

interface Book {
  id: string;
  title: string;
  author: string;
  category: string;
  isbn: string;
  status: 'Borrowed' | 'Available' | 'Reserved';
  borrowDate?: string;
  dueDate?: string;
  coverImage: string;
}

const mockBooks: Book[] = [
  {
    id: 'BK001',
    title: 'Advanced Mathematics for Class 10',
    author: 'Dr. R.S. Aggarwal',
    category: 'Mathematics',
    isbn: '978-0-123456-78-9',
    status: 'Borrowed',
    borrowDate: '2026-02-10',
    dueDate: '2026-03-10',
    coverImage: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=200&h=300&fit=crop',
  },
  {
    id: 'BK002',
    title: 'Physics: Concepts and Applications',
    author: 'Prof. H.C. Verma',
    category: 'Physics',
    isbn: '978-0-234567-89-0',
    status: 'Borrowed',
    borrowDate: '2026-02-15',
    dueDate: '2026-03-15',
    coverImage: 'https://images.unsplash.com/photo-1589998059171-988d887df646?w=200&h=300&fit=crop',
  },
  {
    id: 'BK003',
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    category: 'Literature',
    isbn: '978-0-345678-90-1',
    status: 'Available',
    coverImage: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=200&h=300&fit=crop',
  },
  {
    id: 'BK004',
    title: 'Chemistry: The Central Science',
    author: 'Dr. N.K. Verma',
    category: 'Chemistry',
    isbn: '978-0-456789-01-2',
    status: 'Available',
    coverImage: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=200&h=300&fit=crop',
  },
];

const getStatusBadge = (status: string) => {
  const colors = {
    Borrowed: 'bg-blue-100 text-blue-700 border-blue-300',
    Available: 'bg-emerald-100 text-emerald-700 border-emerald-300',
    Reserved: 'bg-amber-100 text-amber-700 border-amber-300',
  };
  return <Badge className={`${colors[status as keyof typeof colors]} border`}>{status}</Badge>;
};

export function StudentLibrary() {
  const [searchTerm, setSearchTerm] = useState('');

  const borrowedBooks = mockBooks.filter(b => b.status === 'Borrowed');
  const availableBooks = mockBooks.filter(b => b.status === 'Available');

  return (
    <PortalLayout
      role="student"
      userName="Rohan Kumar"
      userRole="Grade 10-A"
      pageTitle="Library"
      breadcrumbs={["Home", "Student", "Library"]}
    >
      <div className="space-y-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white border-0 shadow-lg p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-blue-100 text-sm">Books Borrowed</p>
                <h3 className="text-3xl font-bold">{borrowedBooks.length}</h3>
              </div>
            </div>
          </Card>

          <Card className="bg-gradient-to-br from-emerald-500 to-emerald-600 text-white border-0 shadow-lg p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-emerald-100 text-sm">Available Limit</p>
                <h3 className="text-3xl font-bold">{5 - borrowedBooks.length}</h3>
              </div>
            </div>
          </Card>

          <Card className="bg-gradient-to-br from-amber-500 to-amber-600 text-white border-0 shadow-lg p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                <BookMarked className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-amber-100 text-sm">Total Read</p>
                <h3 className="text-3xl font-bold">24</h3>
              </div>
            </div>
          </Card>
        </div>

        {/* Currently Borrowed Books */}
        <Card className="bg-white border-amber-200 shadow-lg">
          <div className="p-6 border-b border-amber-200">
            <h3 className="text-lg font-bold text-slate-900">Currently Borrowed Books</h3>
          </div>
          <div className="p-6 space-y-4">
            {borrowedBooks.map((book, index) => (
              <motion.div
                key={book.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-amber-50 border border-amber-200 rounded-lg p-4"
              >
                <div className="flex gap-4">
                  <img src={book.coverImage} alt={book.title} className="w-20 h-28 object-cover rounded shadow" />
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="font-bold text-slate-900">{book.title}</h4>
                        <p className="text-sm text-slate-600">{book.author}</p>
                      </div>
                      {getStatusBadge(book.status)}
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-3">
                      <div className="flex items-center gap-2 text-sm text-slate-700">
                        <Calendar className="w-4 h-4 text-amber-600" />
                        <div>
                          <p className="text-xs text-slate-500">Borrowed</p>
                          <p className="font-medium">{book.borrowDate}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-slate-700">
                        <Clock className="w-4 h-4 text-amber-600" />
                        <div>
                          <p className="text-xs text-slate-500">Due Date</p>
                          <p className="font-medium">{book.dueDate}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Card>

        {/* Search Books */}
        <Card className="bg-white border-amber-200 shadow-lg p-6">
          <h3 className="text-lg font-bold text-slate-900 mb-4">Search Library Catalog</h3>
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-amber-600" />
            <Input
              type="text"
              placeholder="Search by title, author, or ISBN..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-amber-50 border-2 border-amber-200 focus:ring-2 focus:ring-amber-500"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {availableBooks.map((book, index) => (
              <motion.div
                key={book.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="border-amber-200 hover:border-amber-400 transition-all">
                  <div className="p-4">
                    <img src={book.coverImage} alt={book.title} className="w-full h-48 object-cover rounded mb-3" />
                    <h4 className="font-bold text-slate-900 text-sm mb-1 line-clamp-2">{book.title}</h4>
                    <p className="text-xs text-slate-600 mb-2">{book.author}</p>
                    <div className="mb-3">{getStatusBadge(book.status)}</div>
                    <Button className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white text-sm py-2">
                      Request Book
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </Card>
      </div>
    </PortalLayout>
  );
}