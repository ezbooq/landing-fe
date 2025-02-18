import Image from "next/image";

const Companies: React.FC = () => {
  return (
    <div className="mt-8 sm:mt-2 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto sm:p-10 px-5 py-5">
        <h3 className="text-center text-xl font-semibold">We are trusted by</h3>
        <div className="relative w-full overflow-hidden mt-8">
          {/* Scrolling Container */}
          <div className="flex w-max animate-infinite-scroll gap-20">
            {/* Logos are duplicated for smooth looping */}
            <div className="flex justify-center items-center gap-20">
              <Image src="/google.svg" alt="google" width={120} height={50} />
              <Image src="/stripe.svg" alt="stripe" width={120} height={50} />
              <Image src="/amezon.svg" alt="amazon" width={120} height={50} />
              <Image src="/unlayer.svg" alt="unlayer" width={120} height={50} />
              <Image src="/twilio.svg" alt="twilio" width={120} height={50} />
            </div>
            <div className="flex justify-center items-center gap-20">
              <Image src="/google.svg" alt="google" width={120} height={50} />
              <Image src="/stripe.svg" alt="stripe" width={120} height={50} />
              <Image src="/amezon.svg" alt="amazon" width={120} height={50} />
              <Image src="/unlayer.svg" alt="unlayer" width={120} height={50} />
              <Image src="/twilio.svg" alt="twilio" width={120} height={50} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Companies;