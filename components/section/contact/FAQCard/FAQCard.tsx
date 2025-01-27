"use client";

import { useState } from "react";
import { IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io";
import { motion } from "motion/react";

type FAQCardProps = {
  question: string;
  answer: string;
};

const FAQCard: React.FC<FAQCardProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white border rounded-lg p-4 text-black">
      <div className="flex flex-col max-w-7xl mx-auto justify-start text-left gap-8">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold">{question}</h3>
          {isOpen ? (
            <IoIosArrowDropup
              className="text-black cursor-pointer"
              size={20}
              onClick={() => setIsOpen(!isOpen)}
            />
          ) : (
            <IoIosArrowDropdown
              className="text-black cursor-pointer"
              size={20}
              onClick={() => setIsOpen(!isOpen)}
            />
          )}
        </div>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={
              isOpen
                ? { height: "auto", opacity: 1 }
                : { height: 0, opacity: 0 }
            }
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="text-sm">{answer}</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default FAQCard;
