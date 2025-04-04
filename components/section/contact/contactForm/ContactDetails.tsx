import { HiOutlineMail } from "react-icons/hi";
import { PiChatTextBold } from "react-icons/pi";
// import { FiPhone } from "react-icons/fi";

const ContactDetails = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 max-w-7xl mx-auto p-4 gap-3">
      <div className="flex flex-col items-center sm:items-start gap-4 mb-3">
        <HiOutlineMail className="text-primary" size={30} />
        <h2 className="text-xl font-semibold">Email</h2>
        <p className="text-sm text-black text-center sm:text-left">
          Reach out via email for swift, professional support; your direct line
          to expert assistance is available round-the-clock.
        </p>
        <a
          href="mailto:contact@ezbooq.com"
          className="underline underline-offset-2"
        >
          contact@ezbooq.com
        </a>
      </div>
      <div className="flex flex-col gap-4 items-center sm:items-start mb-3">
        <PiChatTextBold className="text-primary" size={30} />
        <h2 className="text-xl font-semibold">Address</h2>
        <p className="text-sm text-black text-center sm:text-left">
          Visit us at our trusted location, where professionalism meets
          community commitment! Ready to support your business needs.
        </p>
        <a className="underline underline-offset-2">
          Balitmore, Maryland, USA; Melbourine, AU; Colombo, SL
        </a>
      </div>
      {/* <div className="flex flex-col gap-4 items-center sm:items-start mb-3">
        <FiPhone className="text-primary" size={30} />
        <h2 className="text-xl font-semibold">Phone</h2>
        <p className="text-sm text-black text-center sm:text-left">
          Call us for instant, expert support, personalized service and prompt
          solutions at your fingertips.
        </p>
        <a
          href="tel:+1 (203) 267-9397"
          className="underline underline-offset-2"
        >
          USA - +1 (203) 267-9397
        </a>
        <a href="tel:+61 485 982 386" className="underline underline-offset-2">
          AUS - +61 485 982 386
        </a>
      </div> */}
    </div>
  );
};

export default ContactDetails;
