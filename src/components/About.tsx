
import React from "react";

const About = () => {
  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold mb-6 text-right">קצת עלי</h2>
            <div className="text-lg text-gray-600 space-y-4 text-right">
              <p>
                אני משה פבריקנט, יוצר תוכן ומנחה פודקאסט. דרך השיחות והתכנים שאני יוצר,
                אני מנסה להביא לכם את הסיפורים המעניינים והתובנות החשובות ביותר על
                החיים, על הצלחה, ועל משמעות.
              </p>
              <p>
                אני מאמין בשיחות עמוקות ומשמעותיות שמביאות ערך אמיתי למאזינים,
                ומשתדל לארח אנשים מעניינים מכל תחומי החיים.
              </p>
            </div>
          </div>
          <div className="lg:w-1/2">
            <img
              src="/lovable-uploads/f973337a-2ffc-4ac8-ba82-c8cf4b112180.png"
              alt="משה פבריקנט"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
