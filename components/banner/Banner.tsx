"use client";

import { useRouter } from "next/navigation";

const Banner: React.FC = () => {
    const router = useRouter();
    return (
        <div className="bg-primary text-sm text-center p-3 text-white cursor-pointer" onClick={() => router.push("/register")}>
            <p>Greetings! You are eligible for 10% off! Sign up today to claim your discount on launch day.</p>
        </div>
    );
}

export default Banner;