import React from "react";
import { Episode, EpisodeAPI } from "@/types/Episode";
import { Play, ArrowLeft } from "lucide-react";

export default function Episodes() {
  const [episodes, setEpisodes] = React.useState<Episode[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    loadEpisodes();
  }, []);

  const loadEpisodes = async () => {
    try {
      const data = await EpisodeAPI.filter({}, "-publish_date", 20);
      setEpisodes(data);
    } catch (error) {
      console.error("Failed to load episodes:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-right mb-8">פרקי הפודקאסט</h1>
          
          {isLoading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            </div>
          ) : (
            <div className="space-y-6">
              {episodes.map((episode) => (
                <div 
                  key={episode.id} 
                  className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3">
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
                    </div>
                    <div className="p-6 md:w-2/3 text-right">
                      <h2 className="text-xl font-semibold mb-3">{episode.title}</h2>
                      <p className="text-gray-600 mb-4">{episode.description}</p>
                      <div className="flex items-center justify-between">
                        <a
                          href={episode.youtube_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center transform transition-transform duration-300 hover:translate-x-2"
                        >
                          צפה עכשיו
                          <ArrowLeft className="w-4 h-4 mr-2" />
                        </a>
                        <time className="text-sm text-gray-500">
                          {new Date(episode.publish_date).toLocaleDateString('he-IL')}
                        </time>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 