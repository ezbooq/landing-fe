import Image from "next/image";
import RegisterForm from "@/components/section/register/RegisterForm"; // Import the form component

export default function Register() {
  return (
    <main className="grid grid-cols-6 items-center max-w-7xl mx-auto px-4 py-8 gap-10">
      <RegisterForm /> {/* Client Component */}
      <div className="hidden lg:inline col-span-3 z-10">
        <Image
          src="/Dashboard.svg"
          alt="dashboard"
          className="w-full rounded-lg shadow-lg"
          height={800}
          width={800}
        />
      </div>
    </main>
  );
}