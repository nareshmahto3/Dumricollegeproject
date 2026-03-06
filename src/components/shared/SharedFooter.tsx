import { Link } from 'react-router';
import logoImage from 'figma:asset/233f90283b695bb1a0a35b62804867616ecd9a87.png';

export function SharedFooter() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logoImage} alt="EduManage Pro" className="h-10 w-auto" />
              <span className="text-xl font-semibold">EduManage Pro</span>
            </div>
            <p className="text-slate-400 mb-4">
              Empowering education through digital innovation and excellence.
            </p>
            <p className="text-sm text-slate-400">Estd. 1980</p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-slate-400">
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/apply" className="hover:text-white transition-colors">
                  Admissions
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-white transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Academics</h3>
            <ul className="space-y-2 text-slate-400">
              <li>
                <Link to="/academics" className="hover:text-white transition-colors">
                  Programs
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Research
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Faculty
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Library
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-slate-400">
              <li>+91 123 456 7890</li>
              <li>admissions@edumanagepro.edu</li>
              <li>New Delhi, India 110001</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
          <p>&copy; 2026 EduManage Pro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
