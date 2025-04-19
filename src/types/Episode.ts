// Types
export interface Episode {
  id: string;
  title: string;
  description: string;
  youtube_url: string;
  featured: boolean;
  publish_date: string;
  image?: string;
}

// Mock data
const episodes: Episode[] = [
  {
    id: "1",
    title: "ליברמן בראיון מיוחד",
    description: "אביגדור ליברמן מדבר על המצב הפוליטי",
    youtube_url: "https://youtube.com/watch?v=example1",
    featured: true,
    publish_date: "2024-01-01",
    image: "/images/liberman.png"
  },
  {
    id: "2",
    title: "צבי יחזקאלי",
    description: "כתב לענייני ערבית",
    youtube_url: "https://youtube.com/watch?v=example2",
    featured: true,
    publish_date: "2024-01-02",
    image: "/images/zvi.png"
  },
  {
    id: "3",
    title: "האלוף יצחק בריק",
    description: "מפקד בכיר לשעבר בצה״ל",
    youtube_url: "https://youtube.com/watch?v=example3",
    featured: true,
    publish_date: "2024-01-03",
    image: "/images/brik.png"
  }
];

// Mock API functions
export const EpisodeAPI = {
  filter: async (
    criteria: Partial<Episode>,
    sort: string = "-publish_date",
    limit: number = 10
  ): Promise<Episode[]> => {
    return episodes
      .filter(episode => 
        Object.entries(criteria).every(([key, value]) => 
          episode[key as keyof Episode] === value
        )
      )
      .sort((a, b) => 
        sort.startsWith("-") 
          ? new Date(b[sort.slice(1) as keyof Episode] as string).getTime() - 
            new Date(a[sort.slice(1) as keyof Episode] as string).getTime()
          : new Date(a[sort as keyof Episode] as string).getTime() - 
            new Date(b[sort as keyof Episode] as string).getTime()
      )
      .slice(0, limit);
  }
}; 