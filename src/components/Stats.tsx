import React from "react";
import { Youtube, Instagram, Music, Radio } from "lucide-react";

const stats = [
  { value: "+100", label: "פרקים" },
  { value: "+500K", label: "צפיות" },
  { value: "+50", label: "שעות תוכן" },
];

export default function Stats() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="p-8 rounded-xl bg-gradient-to-br from-blue-50 to-white shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:from-blue-100 hover:to-blue-50"
            >
              <div className="text-4xl font-bold text-blue-900 mb-2 transform transition-transform duration-300 hover:scale-110">
                {stat.value}
              </div>
              <div className="text-gray-600 text-lg">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const StatCard = ({ icon, number, label }: { icon: React.ReactNode, number: string, label: string }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-sm text-center">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-4xl font-bold mb-2">{number}</h3>
      <p className="text-gray-600">{label}</p>
    </div>
  );
};
