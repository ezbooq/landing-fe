'use client';

import Image from "next/image";
import Google from "../../../../public/Google-Logo.png";
import Stripe from "../../../../public/Stripe.png";
import Amazon from "../../../../public/amazon.png";
import Unlayer from "../../../../public/unlayer.png";
import Twilio from "../../../../public/Twilio.png";
import { motion } from "framer-motion";

const logos = [Google, Stripe, Amazon, Unlayer, Twilio];

const Companies: React.FC = () => {
  return (
    <section className="mt-8 sm:mt-2 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto sm:p-10 px-5 py-5">
        <h3 className="text-center text-xl font-semibold">We are trusted by</h3>
        <div className="relative w-full overflow-hidden mt-8">
          <motion.div
            className="flex justify-center items-center gap-20"
            initial={{ x: 0 }}
            animate={{ x: '-100%' }}
            transition={{
              repeat: Infinity,
              duration: 10,
              ease: 'linear',
            }}
          >
            {[...logos, ...logos].map((logo, index) => (
              <Image key={index} src={logo} alt="company-logo" width={120} height={50} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Companies;
