import InfiniteCarousel from "@/components/infiniteCarousel/InfiniteCarousel";
import React from "react";
import Google from "../../../../public/Google-Logo.png";
import Stripe from "../../../../public/Stripe.png";
import Amazon from "../../../../public/amazon.png";
import Unlayer from "../../../../public/unlayer.png";
import Twilio from "../../../../public/Twilio.png";

const logos = [
  { src: Google, url: "/" },
  { src: Stripe, url: "/" },
  { src: Amazon, url: "/" },
  { src: Unlayer, url: "/" },
  { src: Twilio, url: "/" },
];
export default function CompanyLogoCarousel() {
  return (
    <section>
      <h3 className="text-center text-xl font-semibold text-black">
        We are trusted by
      </h3>
      <div className=" flex items-center justify-center mt-3">
        <InfiniteCarousel logos={logos} />
      </div>
    </section>
  );
}
