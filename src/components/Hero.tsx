
import React from "react";
import { Button } from "./ui/button";
import { ChevronLeft } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative h-screen min-h-[600px] flex items-center justify-center pt-16">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('/lovable-uploads/27ba892d-db43-4cf0-852b-f1a4fe5a24ee.png')",
          filter: "brightness(0.5)"
        }}
      />
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-7xl font-bold mb-6 tracking-tight text-white drop-shadow-lg">משה פבריקנט</h1>
        <p className="text-2xl mb-12 opacity-90 text-white drop-shadow-md">פודקאסט, תוכן והרצאות על החיים עצמם</p>
        <div className="flex gap-4 justify-center">
          <Button 
            size="lg"
            variant="default"
            className="bg-blue-600 hover:bg-blue-700 text-lg px-8"
          >
            לכל הפרקים
            <ChevronLeft className="mr-2 h-5 w-5" />
          </Button>
          <Button 
            size="lg"
            variant="outline"
            className="text-lg px-8 text-white border-white hover:bg-white hover:text-blue-600 transition-colors"
          >
            דבר איתי
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
