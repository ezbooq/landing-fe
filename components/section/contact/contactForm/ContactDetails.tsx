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
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores
            dolore praesentium accusamus.
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
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores
            dolore praesentium accusamus laudantium.
          </p>
          <a
            href="tel:+1(555) 000-0000"
            className="underline underline-offset-2"
          >
            +1(555) 000-0000
          </a>
        </div>
        <div className="flex flex-col gap-4 items-center sm:items-start mb-3">
          <FiPhone className="text-primary" size={30} />
          <h2 className="text-xl font-semibold">Live Chat</h2>
          <p className="text-sm text-black text-center sm:text-left">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores
            dolore praesentium accusamus.
          </p>
          <a
            href="tel:+1(555) 000-0000"
            className="underline underline-offset-2"
          >
            +1(555) 000-0000
          </a>
        </div>
      </div>
    )
}

export default ContactDetails