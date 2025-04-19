
import React from "react";
import { Youtube, Instagram, Music, Radio } from "lucide-react";

const Stats = () => {
  return (
    <div className="py-20 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-4">הפודקאסט במספרים</h2>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <StatCard
            icon={<Youtube className="h-8 w-8 text-blue-600" />}
            number="40K"
            label="מנויים ביוטיוב"
          />
          <StatCard
            icon={<Instagram className="h-8 w-8 text-blue-600" />}
            number="10K"
            label="עוקבים באינסטגרם"
          />
          <StatCard
            icon={<Music className="h-8 w-8 text-blue-600" />}
            number="300K"
            label="צופים ביוטיוב"
          />
          <StatCard
            icon={<Radio className="h-8 w-8 text-blue-600" />}
            number="30K"
            label="מאזינים בפודקאסט"
          />
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ icon, number, label }: { icon: React.ReactNode, number: string, label: string }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-sm text-center">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-4xl font-bold mb-2">{number}</h3>
      <p className="text-gray-600">{label}</p>
    </div>
  );
};

export default Stats;
