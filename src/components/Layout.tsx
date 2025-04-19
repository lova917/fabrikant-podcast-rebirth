import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/config/routes";
import { Menu, X, Youtube, Instagram, Mail, Music } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Toaster } from "@/components/ui/toaster";
import { ContactDialog } from "./ContactDialog";

export default function Layout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const socialLinks = [
    {
      name: "YouTube",
      url: "https://www.youtube.com/@moshefabrikant1",
      icon: Youtube,
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/moshefabrikant/",
      icon: Instagram,
    },
    {
      name: "Spotify",
      url: "https://open.spotify.com/show/0PElxfZVbHGGY5Cc1ucy7x?si=ec6eec2e4c464df0",
      icon: Music,
    },
    {
      name: "Email",
      url: "mailto:wetalkpodcastmedia@gmail.com",
      icon: Mail,
    },
  ];

  return (
    <div dir="rtl">
      {/* Navigation */}
      <nav className="bg-white shadow-sm fixed w-full z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to={createPageUrl("home")} className="text-xl font-bold text-blue-900">
              משה פבריקנט
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8 space-x-reverse">
              <Link to={createPageUrl("home")} className="text-gray-600 hover:text-blue-900">
                ראשי
              </Link>
              <Link to={createPageUrl("episodes")} className="text-gray-600 hover:text-blue-900">
                פרקים
              </Link>
              <ContactDialog>
                <Button className="bg-blue-600 hover:bg-blue-700">דברו איתי</Button>
              </ContactDialog>
            </div>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="container mx-auto px-4 py-4 space-y-4">
              <Link 
                to={createPageUrl("home")} 
                className="block text-gray-600 hover:text-gray-900"
                onClick={() => setIsMenuOpen(false)}
              >
                ראשי
              </Link>
              <Link 
                to={createPageUrl("episodes")} 
                className="block text-gray-600 hover:text-gray-900"
                onClick={() => setIsMenuOpen(false)}
              >
                פרקים
              </Link>
              <ContactDialog>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">דברו איתי</Button>
              </ContactDialog>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="pt-16">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center space-y-6">
            <div className="flex space-x-6 space-x-reverse">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transform transition-transform duration-300 hover:scale-110"
                >
                  <link.icon className="w-6 h-6" />
                  <span className="sr-only">{link.name}</span>
                </a>
              ))}
            </div>
            <p className="text-gray-300">© {new Date().getFullYear()} משה פבריקנט. כל הזכויות שמורות.</p>
          </div>
        </div>
      </footer>

      <Toaster />
    </div>
  );
} 