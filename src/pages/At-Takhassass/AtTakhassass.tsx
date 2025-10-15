"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const AtTakhassass = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 1500, stopOnInteraction: false })
  );

  const images = [
    { id: 1, image: "/images/1.webp" },
    { id: 2, image: "/images/2.webp" },
    { id: 3, image: "/images/3.webp" },
    { id: 3, image: "/images/6.webp" },
    { id: 3, image: "/images/5.webp" },
  ];

  return (
    <section className="w-full overflow-hidden bg-background text-foreground py-16 px-4 sm:px-8 flex flex-col items-center justify-center">
      {/* 🔹 Heading */}
      <div className="text-center mb-10">
        <h2 className=" text-2xl md:text-3xl font-bold leading-tight text-[#0059A2]">
          কুল্লিয়াতুশ শরিয়াহ
        </h2>
        <h2 className=" mt-2  text-4xl md:text-5xl font-bold leading-tight text-gray-900">
          আত-তাখাসসুস ফি উলুমিল হাদিস
        </h2>
      </div>

      {/* 🔹 Carousel */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: [0.25, 0.1, 0.25, 1],
        }}
        viewport={{ once: true }}
        className="w-full max-w-7xl overflow-hidden"
      >
        <Carousel
          plugins={[plugin.current]}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          className="w-full"
        >
          <CarouselContent className="flex items-center">
            {images.map((item) => (
              <CarouselItem
                key={item.id}
                className="basis-full md:basis-1/2 lg:basis-1/3 flex justify-center"
              >
                <Card className="w-[90%] sm:w-80 md:w-96 aspect-square rounded-2xl shadow-md hover:shadow-xl border border-border transition-all duration-500 overflow-hidden">
                  <CardContent className="p-0 flex items-center justify-center h-full">
                    <motion.img
                      src={item.image}
                      alt="section image"
                      className="w-full h-full object-cover rounded-2xl transition-transform duration-700 hover:scale-105"
                    />
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* 🔹 Navigation Buttons */}
          <CarouselPrevious className="left-2 sm:left-6" />
          <CarouselNext className="right-2 sm:right-6" />
        </Carousel>
      </motion.div>
    </section>
  );
};
