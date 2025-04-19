
import React from "react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <div className="relative h-screen min-h-[600px] flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('/lovable-uploads/2360f291-fe2c-4f63-8633-46ba2ea6b631.png')",
          filter: "brightness(0.7)"
        }}
      />
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-6xl font-bold mb-6">משה פבריקנט</h1>
        <p className="text-2xl mb-8">פודקאסט, תוכן והרצאות על החיים עצמם</p>
        <Button 
          size="lg"
          variant="default"
          className="bg-blue-600 hover:bg-blue-700 text-lg px-8"
        >
          לכל הפרקים
        </Button>
      </div>
    </div>
  );
};

export default Hero;
