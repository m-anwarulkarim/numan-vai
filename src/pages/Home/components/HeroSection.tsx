import { Button } from "@/components/ui/button";
import { motion } from "motion/react";

const HeroSection = () => {
  return (
    <section
      className="relative w-full bg-center bg-no-repeat bg-cover min-h-screen text-white flex items-start justify-center pt-20 sm:pt-24 md:pt-32 lg:pt-40 pb-5 overflow-hidden px-0 mx-0"
      style={{
        backgroundImage: "url('/images/banner.webp')",
        backgroundSize: "contain",
        // backgroundColor: "#000",
      }}
    >
      {/* Overlay (optional, readability বাড়াতে) */}
      {/* <div className="absolute inset-0 bg-black/40"></div> */}

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center  md:px-6">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 12,
            mass: 0.5,
            delay: 0.2,
          }}
        >
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
            className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight dark:text-gray-300 text-gray-800"
          >
            <span className="text-lg sm:text-xl md:text-2xl ">
              একনজরে দেখে নিন
            </span>
            <br />
            ইলমওয়েবের সব কোর্স
          </motion.h1>

          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              delay: 0.8,
              duration: 0.5,
              type: "spring",
              stiffness: 120,
            }}
          >
            <Button className="bg-blue-400 text-black hover:bg-yellow-500 font-semibold text-base sm:text-lg px-5 py-3 md:px-6 md:py-4 rounded-md transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer">
              কোর্স দেখুন
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
