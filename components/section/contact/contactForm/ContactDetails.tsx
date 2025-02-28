import { HiOutlineMail } from "react-icons/hi";
import { PiChatTextBold } from "react-icons/pi";
import { FiPhone } from "react-icons/fi";

const ContactDetails = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 max-w-7xl mx-auto p-4 gap-3">
      <div className="flex flex-col justify-center items-center sm:items-start gap-4 mb-3">
        <HiOutlineMail className="text-primary" size={30} />
        <h2 className="text-xl font-semibold">Email</h2>
        <p className="text-sm text-black text-center sm:text-left">
          Reach out via email for swift, professional support; your direct line
          to expert assistance is available round-the-clock.
        </p>
        <a
          href="mailto:hello@ezbooq.com"
          className="underline underline-offset-2"
        >
          hello@ezbooq.com
        </a>
      </div>
      <div className="flex flex-col gap-4 items-center sm:items-start mb-3">
        <PiChatTextBold className="text-primary" size={30} />
        <h2 className="text-xl font-semibold">Live Chat</h2>
        <p className="text-sm text-black text-center sm:text-left">
          Visit us at our trusted location, where professionalism meets
          community commitment! Ready to support your business needs.
        </p>
        <a href="tel:+1(555) 000-0000" className="underline underline-offset-2">
          +1(555) 000-0000
        </a>
      </div>
      <div className="flex flex-col gap-4 items-center sm:items-start mb-3">
        <FiPhone className="text-primary" size={30} />
        <h2 className="text-xl font-semibold">Live Chat</h2>
        <p className="text-sm text-black text-center sm:text-left">
          Call us for instant, expert support, personalized service and prompt
          solutions at your fingertips.
        </p>
        <a href="tel:+1(555) 000-0000" className="underline underline-offset-2">
          +1(555) 000-0000
        </a>
      </div>
    </div>
  );
};

export default ContactDetails;
