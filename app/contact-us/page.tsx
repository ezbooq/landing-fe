import ContactDetails from "@/components/section/contact/contactForm/ContactDetails";
import ContactForm from "@/components/section/contact/contactForm/ContactForm";
import FAQ from "@/components/section/contact/FAQ/FAQ";
import Image from "next/image";
import Dashboard from "../../public/Dashboard.svg";

export default function ContactUs() {
  return (
    <main>
      <section>
        <div className="relative">
          <div
            className="hidden lg:inline absolute inset-y-0 right-0 w-96 h-full bg-cover bg-no-repeat bg-right rotate-180"
            style={{
              backgroundImage: "url('/backgroundCircleLeft.png')",
            }}
          ></div>
          <div className="grid grid-cols-5 items-center max-w-7xl mx-auto px-4 py-8 gap-10">
            <ContactForm />
            <div className="hidden md:inline col-span-3 z-10">
              <Image
                src={Dashboard}
                alt="dashboard"
                className="w-full rounded-lg shadow-lg"
                height={800}
                width={1000}
              />
            </div>
          </div>
        </div>
      </section>

      <ContactDetails />
      <FAQ />
    </main>
  );
}
