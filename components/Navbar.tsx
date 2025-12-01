import React, { useState, useEffect } from 'react';
import { Scale, Menu, X } from 'lucide-react';
import { Button } from './Button';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Only handle hash links manually
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        // Use scrollIntoView with options supported by modern browsers
        // The CSS scroll-padding-top in index.html handles the offset automatically
        element.scrollIntoView({ behavior: 'smooth' });
      }
      setIsMobileMenuOpen(false);
    }
  };

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { name: 'Özellikler', href: '#features' },
    { name: 'Nasıl Çalışır?', href: '#how-it-works' },
    { name: 'Yapay Zeka', href: '#ai-demo' },
    { name: 'İletişim', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled || isMobileMenuOpen ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#" onClick={scrollToTop} className="flex items-center cursor-pointer group">
            {!logoError ? (
              <img 
                src="https://www.tevkilal.com/_assets/v11/785dc8be9b1b19aa2064a1ddc7bdbd557841684c.png" 
                alt="Tevkilal Logo" 
                className="h-10 w-10 rounded-lg mr-2 object-cover shadow-sm border border-slate-100" 
                onError={() => setLogoError(true)} 
              />
            ) : (
              <div className="bg-navy-900 p-2 rounded-lg mr-2 group-hover:bg-navy-800 transition-colors">
                <Scale className="h-6 w-6 text-white" />
              </div>
            )}
            <span className={`font-bold text-2xl tracking-tight ${isScrolled || isMobileMenuOpen ? 'text-navy-900' : 'text-navy-900'}`}>
              Tevkil<span className="text-gold-500">al</span>
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-slate-600 hover:text-navy-900 font-medium transition-colors relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-gold-500 after:left-0 after:-bottom-1 after:transition-all hover:after:w-full"
              >
                {link.name}
              </a>
            ))}
            <div className="flex items-center space-x-3">
              <Button variant="ghost" size="sm" href="https://tevkilal.com">Giriş Yap</Button>
              <Button variant="primary" size="sm" href="https://tevkilal.com">Kayıt Ol</Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-navy-900 hover:text-gold-500 transition-colors p-2"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-slate-100 py-4 px-4 flex flex-col space-y-4 h-screen overflow-y-auto pb-24">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-slate-600 hover:text-navy-900 font-medium block py-3 border-b border-slate-50 text-lg"
              onClick={(e) => scrollToSection(e, link.href)}
            >
              {link.name}
            </a>
          ))}
          <div className="flex flex-col space-y-3 pt-4">
            <Button variant="outline" fullWidth href="https://tevkilal.com">Giriş Yap</Button>
            <Button variant="primary" fullWidth href="https://tevkilal.com">Ücretsiz Kayıt Ol</Button>
          </div>
        </div>
      )}
    </nav>
  );
};