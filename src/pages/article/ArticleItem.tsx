import { motion } from "framer-motion";
import { useNavigate } from "react-router";

interface CardItemProps {
  title: string;
  image: string;
  description: string;
  link: string;
}

export const ArticleItem: React.FC<CardItemProps> = ({
  title,
  image,
  description,
  link,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(link);
  };

  return (
    <motion.div
      className="bg-white dark:bg-gray-900 rounded-2xl shadow-md overflow-hidden cursor-pointer 
                 transition-all duration-700 border border-gray-200 dark:border-gray-700
                 hover:border-indigo-400 dark:hover:border-indigo-500 hover:shadow-[0_0_0.5rem_rgba(99,102,241,0.4)]"
      onClick={handleClick}
      variants={{
        hidden: { opacity: 0, y: 80, scale: 0.98 },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: {
            type: "spring",
            stiffness: 80,
            damping: 18,
            mass: 0.9,
            duration: 1.4,
          },
        },
      }}
      whileHover={{
        scale: 1.04,
        rotate: 0.5,
        transition: { type: "spring", stiffness: 200, damping: 15 },
      }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Image */}
      <motion.div
        className="overflow-hidden px-3 py-4 "
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.4 }}
      >
        <motion.h3
          className="text-lg md:text-xl font-semibold text-gray-800 dark:text-gray-200"
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {title}
        </motion.h3>
        <img
          src={image}
          alt={title}
          className="w-full h-48 sm:h-56 md:h-60 object-cover transition-transform duration-700 hover:scale-110"
        />
      </motion.div>

      {/* Text */}
      <div className="p-5 text-center space-y-2">
        <motion.p
          className="text-sm md:text-base text-gray-600 dark:text-gray-400 line-clamp-3"
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {description}
        </motion.p>
      </div>
    </motion.div>
  );
};
