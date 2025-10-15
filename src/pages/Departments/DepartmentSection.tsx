import { Card, CardContent } from "@/components/ui/card";
import React from "react";
export const DepartmentSection: React.FC = () => {
  const items = [
    {
      title: "একাডেমিক বিভাগ",
      image: "/images/academic.png",
    },
    {
      title: "প্রকাশনা বিভাগ",
      image: "/images/publication.png",
    },
    {
      title: "ফতোয়া বিভাগ",
      image: "/images/fatwa.png",
    },
  ];

  return (
    <section className="py-12 bg-background text-foreground">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center mb-8">
          আমাদের বিভাগসমূহ
        </h2>

        {/* Image Grid */}
        <div className="flex flex-wrap justify-around items-center gap-6">
          {items.map((item, idx) => (
            <Card
              key={idx}
              className="w-40 sm:w-44 md:w-48 lg:w-52 xl:w-56 text-center shadow-md hover:shadow-lg transition-all duration-300"
            >
              <CardContent className="flex flex-col items-center p-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-32 h-32 object-cover rounded-2xl border border-border mb-3"
                />
                <h3 className="text-lg font-medium">{item.title}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
