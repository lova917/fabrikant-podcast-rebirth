
import React from "react";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center py-4 px-8 bg-blue-600/90 backdrop-blur-sm">
      <h1 className="text-2xl font-bold text-right text-white">משה פבריקנט</h1>
      <div className="flex gap-6 items-center">
        <Button variant="link" className="text-lg text-white hover:text-white/80">
          ראשי
        </Button>
        <Button variant="link" className="text-lg text-white hover:text-white/80">
          פרקים
        </Button>
        <Button 
          variant="outline" 
          className="text-lg text-white border-white hover:bg-white hover:text-blue-600 transition-colors"
        >
          דבר איתי
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
