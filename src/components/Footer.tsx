
import React from "react";
import { Youtube, Mail, Instagram, Music } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    {
      icon: <Youtube className="h-6 w-6" />,
      href: "https://www.youtube.com/@moshefabrikant1",
      label: "YouTube"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      href: "mailto:wetalkpodcastmedia@gmail.com",
      label: "Email"
    },
    {
      icon: <Instagram className="h-6 w-6" />,
      href: "https://www.instagram.com/moshefabrikant/",
      label: "Instagram"
    },
    {
      icon: <Music className="h-6 w-6" />,
      href: "https://open.spotify.com/show/0PElxfZVbHGGY5Cc1ucy7x?si=ec6eec2e4c464df0",
      label: "Spotify"
    }
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-bold mb-8">בואו נישאר בקשר</h2>
          <div className="flex gap-6 mb-8">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
          <p className="text-gray-400 text-center">
            © {new Date().getFullYear()} משה פבריקנט. כל הזכויות שמורות.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
