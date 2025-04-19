
import React from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

const Episodes = () => {
  const episodes = [
    {
      title: "ליברמן בראיון מיוחד",
      description: "אביגדור ליברמן מדבר על המצב הפוליטי",
      image: "/lovable-uploads/df11ae54-bd9e-4ac3-b220-4e74cde1de08.png"
    },
    {
      title: "צבי יחזקאלי",
      description: "כתב לענייני ערבית",
      image: "/lovable-uploads/60c0ef86-6d52-4359-b5c9-92035d0ee13b.png"
    },
    {
      title: "האלוף יצחק בריק",
      description: "מפקד בכיר לשעבר בצה״ל",
      image: "/lovable-uploads/27ba892d-db43-4cf0-852b-f1a4fe5a24ee.png"
    }
  ];

  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-2">ראיונות עם הגדולים מכל התחומים</h2>
        <p className="text-gray-600 text-center mb-12">הפודקאסט של משה פבריקנט עם ראיונות מרתקים</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {episodes.map((episode, index) => (
            <Card key={index} className="overflow-hidden">
              <img 
                src={episode.image} 
                alt={episode.title}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{episode.title}</h3>
                <p className="text-gray-600 mb-4">{episode.description}</p>
                <Button variant="outline" className="w-full">צפה עכשיו</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Episodes;
