"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArticleData } from "./ArticleData";
import { ArticleItem } from "./ArticleItem";

export const ArticleGrid = () => {
  const [page, setPage] = useState(1);
  const cardsPerPage = 6;
  const totalPages = Math.ceil(ArticleData.length / cardsPerPage);

  const startIndex = (page - 1) * cardsPerPage;
  const currentCards = ArticleData.slice(startIndex, startIndex + cardsPerPage);

  const handleNext = () => {
    if (page < totalPages) setPage(page + 1);
  };

  const handleBack = () => {
    if (page > 1) setPage(page - 1);
  };

  return (
    <div className="flex flex-col items-center space-y-12 py-10 px-4 sm:px-6 lg:px-8">
      {/* Scroll Reveal Grid */}
      <motion.div
        initial="hidden"
        animate="visible"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.18,
              delayChildren: 0.1,
            },
          },
        }}
        className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl"
      >
        {currentCards.map((card) => (
          <ArticleItem
            key={card.id}
            title={card.title}
            image={card.image}
            description={card.description}
            link={card.link}
          />
        ))}
      </motion.div>

      {/* Pagination */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: [0.25, 0.1, 0.25, 1],
        }}
        viewport={{ once: true }}
        className="flex items-center space-x-4"
      >
        <Button
          onClick={handleBack}
          disabled={page === 1}
          variant="outline"
          className="rounded-full"
        >
          Back
        </Button>
        <span className="text-gray-600 dark:text-gray-400">
          Page {page} of {totalPages}
        </span>
        <Button
          onClick={handleNext}
          disabled={page === totalPages}
          className="rounded-full"
        >
          Next
        </Button>
      </motion.div>
    </div>
  );
};
