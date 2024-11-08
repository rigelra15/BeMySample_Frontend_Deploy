import React from "react";
import { motion } from "framer-motion";
import IllustrationBeMySample from "../../assets/images/welcomeIllustrationBeMySample.gif";

const translations = {
  en: {
    title: (
      <>
        Reach further <br /> for more complete data
      </>
    ),
    createSurvey: "Create Survey",
  },
  id: {
    title: (
      <>
        Jangkau lebih jauh <br /> untuk data yang lebih utuh
      </>
    ),
    createSurvey: "Buat Survei",
  },
};

const Hero = ({ language }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full bg-white pt-[120px]">
      <motion.div
        className="flex flex-col items-center w-full gap-[16px]"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.p
          className="text-[45px] text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          {translations[language].title}
        </motion.p>
        <motion.button
          className="px-4 py-2 rounded-[8px] text-[18pt] font-bold bg-[#1F38DB] text-white mt-2 font-inter"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          {translations[language].createSurvey}
        </motion.button>
      </motion.div>

      <motion.img
        className="mt-10 w-[771px] rounded-xl"
        src={IllustrationBeMySample}
        alt="welcome-illustration-bemysample"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
      />
    </div>
  );
};

export default Hero;
