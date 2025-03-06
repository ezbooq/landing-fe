'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Google from '../../../../public/Google-Logo.png';
import Stripe from '../../../../public/Stripe.png';
import Amazon from '../../../../public/amazon.png';
import Unlayer from '../../../../public/unlayer.png';
import Twilio from '../../../../public/Twilio.png';

const logos = [Google, Stripe, Amazon, Unlayer, Twilio];

const Companies: React.FC = () => {
  return (
    <section className="mt-8 sm:mt-2 overflow-hidden bg-white ">
      <div className="max-w-7xl mx-auto sm:p-10 px-5 py-5">
        <h3 className="text-center text-xl font-semibold text-black">We are trusted by</h3>
        <div className="relative w-full overflow-hidden mt-8">
          <div className="w-full flex overflow-hidden">
            <motion.div
              className="flex"
              initial={{ x: 0 }}
              animate={{ x: '-50%' }}
              transition={{
                repeat: Infinity,
                duration: 20,
                ease: 'linear',
              }}
              style={{ display: 'flex', gap: '80px', minWidth: 'max-content' }}
            >
              {[...logos, ...logos].map((logo, index) => (
                <div key={index} className="flex-shrink-0">
                  <Image src={logo} alt="company-logo" width={120} height={50}/>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Companies;
