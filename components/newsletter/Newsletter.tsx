"use client";

import { useToast } from "@/hooks/useToast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Button from "../button/Button";
import InputField from "../inputField/InputField";

const Newsletter: React.FC = () => {
  const schema = z.object({
    email: z
      .string()
      .nonempty("Email is required")
      .email("Invalid email address"),
  });
  type FormData = z.infer<typeof schema>;
  const { showToast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    localStorage.setItem("newsletterEmail", JSON.stringify(data));
    showToast(
      "Thank you for subscribing to the Ezbooq newsletter! 💡 Expect valuable insights, industry tips, and the latest updates to help your business thrive.",
      "success"
    );
    reset();
  };

  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-10 mb-4">
      <div>
        <h1 className="text-xl">Join Our Weekly Newsletter</h1>
        <p className="text-sm">
          Stay ahead with the latest updates, new features, and expert tips on
          growing your business effortlessly. Get insights on how we’re making
          business management smarter; straight to your inbox!
          {/* <br />
          we help to improve your business */}
        </p>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col sm:flex-row items-center gap-3"
      >
        <InputField
          register={register}
          type="email"
          name="email"
          placeholder="Enter your email"
          errorMessage={errors.email?.message}
        />
        <Button type="submit" variant="solid" className="w-full">
          Subscribe Now
        </Button>
      </form>
    </div>
  );
};

export default Newsletter;
