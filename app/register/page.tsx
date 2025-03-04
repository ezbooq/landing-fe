import Image from "next/image";
import RegisterForm from "@/components/section/register/RegisterForm"; 
import Dashboard from "../../public/Dashboard.svg";

export default function Register() {
  return (
    <main className="grid grid-cols-6 items-center max-w-7xl mx-auto px-4 py-8 gap-10">
      <RegisterForm /> {/* Client Component */}
      <div
        className="hidden lg:inline col-span-3 h-screen bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: "url('/login_bg2.png')",
        }}
      >
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 pl-20">
          <Image
            src={Dashboard}
            alt="dashboard"
            className="rounded-lg shadow-lg w-auto h-auto"
            height={800}
            width={800}
          />
        </div>
      </div>
    </main>
  );
}
