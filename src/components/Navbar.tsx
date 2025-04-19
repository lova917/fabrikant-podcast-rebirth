
import React from "react";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <nav className="w-full flex justify-between items-center py-4 px-8 bg-white">
      <h1 className="text-2xl font-bold text-right">משה פבריקנט</h1>
      <div className="flex gap-6 items-center">
        <Button variant="link" className="text-lg">
          ראשי
        </Button>
        <Button variant="link" className="text-lg">
          פרקים
        </Button>
        <Button variant="outline" className="text-lg">
          דבר אתי
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
