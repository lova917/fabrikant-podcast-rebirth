import React from "react";
import { Button } from "@/components/ui/button";
import { Play, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/config/routes";
import { Episode, EpisodeAPI } from "@/types/Episode";
import StatsSection from "../components/Stats";
import { ContactDialog } from "@/components/ContactDialog";

export default function Home() {
  const [featuredEpisodes, setFeaturedEpisodes] = React.useState<Episode[]>([]);

  React.useEffect(() => {
    loadFeaturedEpisodes();
  }, []);

  const loadFeaturedEpisodes = async () => {
    const episodes = await EpisodeAPI.filter({ featured: true }, "-publish_date", 3);
    setFeaturedEpisodes(episodes);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center group">
        <div className="absolute inset-0 bg-black/60 z-10 transition-opacity duration-500 group-hover:bg-black/50"></div>
        <div className="absolute inset-0 bg-[url('/images/moshe-hero.jpg')] bg-cover bg-center scale-100 transition-transform duration-700 group-hover:scale-105"></div>
        <div className="container mx-auto px-4 relative z-20 text-right">
          <div className="max-w-2xl mr-auto ml-0">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 transform transition-transform duration-500 hover:scale-105">משה פבריקנט</h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8">
              פודקאסט, תוכן והרצאות על החיים עצמם
            </p>
          </div>
          <div className="flex gap-4 justify-end">
            <ContactDialog>
              <Button className="bg-white text-blue-900 hover:bg-gray-100 transform transition-transform duration-300 hover:scale-105">
                דברו איתי
              </Button>
            </ContactDialog>
            <Link to={createPageUrl("episodes")}>
              <Button className="bg-blue-600 hover:bg-blue-700 transform transition-transform duration-300 hover:scale-105">
                <Play className="w-4 h-4 ml-2" />
                לכל הפרקים
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Featured Episodes */}
      <section className="py-20 px-4 bg-blue-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-right mb-12 transform transition-transform duration-300 hover:scale-105">פרקים מובחרים</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredEpisodes.map((episode) => (
              <div 
                key={episode.id} 
                className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
              >
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={episode.image}
                    alt={episode.title}
                    className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
                  />
                  <a
                    href={episode.youtube_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 hover:opacity-100 transition-all duration-300"
                  >
                    <Play className="w-12 h-12 text-white transform transition-transform duration-300 hover:scale-110" />
                  </a>
                </div>
                <div className="p-6 text-right">
                  <h3 className="text-xl font-semibold mb-2 transition-colors duration-300 hover:text-blue-600">{episode.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{episode.description}</p>
                  <a
                    href={episode.youtube_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center transform transition-transform duration-300 hover:translate-x-2"
                  >
                    צפה עכשיו
                    <ArrowLeft className="w-4 h-4 mr-2" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section with Image */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2 order-2 md:order-1">
              <div className="rounded-2xl overflow-hidden shadow-xl transform transition-transform duration-500 hover:scale-105">
                <img 
                  src="/images/moshe-profile.jpg"
                  alt="משה פבריקנט בראיון" 
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 text-right order-1 md:order-2">
              <h2 className="text-3xl font-bold mb-6 transform transition-transform duration-300 hover:scale-105">קצת עלי</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                אני משה פבריקנט, יוצר תוכן ומנחה פודקאסט. 
                דרך השיחות והתכנים שאני יוצר, אני מנסה להביא לכם את הסיפורים המעניינים
                והתובנות החשובות ביותר על החיים, על הצלחה, ועל משמעות.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 