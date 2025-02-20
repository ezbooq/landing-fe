"use client";

import { z } from "zod";
import { Industries as IndustryData } from "@/data/data";
import { useToast } from "@/hooks/useToast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import InputField from "@/components/inputField/InputField";
import Image from "next/image";
import Button from "@/components/button/Button";

export default function Register() {
  const formSchema = z.object({
    firstname: z.string().nonempty("First name is required"),
    lastname: z.string().nonempty("Last name is required"),
    email: z
      .string()
      .nonempty("Email is required")
      .email("Invalid email address"),
    companyName: z.string().nonempty("Company name is required"),
    industry: z.enum(
      IndustryData.map((industry) => industry.slug) as [string, ...string[]],
      { message: "Invalid industry" }
    ),
    country: z.string().nonempty("Country is required"),
    mobileNumber: z.string().nonempty("Mobile number is required"),
  });

  type FormData = z.infer<typeof formSchema>;
  const { showToast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormData) => {
    localStorage.setItem("formData", JSON.stringify(data));
    showToast("Form submitted successfully!", "success");
    reset();
  };

  return (
    <div className="grid grid-cols-6 items-center max-w-7xl mx-auto px-4 py-8 gap-10">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 w-full col-span-6 lg:col-span-3 "
      >
        <h1 className="text-4xl">Register Now</h1>
        <p>Fill out the form below to contact us</p>
        <div className="grid grid-cols-2 gap-4">
          <InputField
            register={register}
            label="First Name"
            name="firstname"
            // placeholder="Enter your name"
            errorMessage={errors.firstname?.message}
          />
          <InputField
            register={register}
            label="Last Name"
            name="lastname"
            // placeholder="Enter your name"
            errorMessage={errors.lastname?.message}
          />

          <div className="col-span-2">
            <InputField
              register={register}
              label="Email"
              type="email"
              name="email"
              errorMessage={errors.email?.message}
            />
          </div>
          <div className="col-span-2">
            <InputField
              register={register}
              label="Company Name"
              type="email"
              name="companyName"
            //   placeholder="Enter your email"
              errorMessage={errors.companyName?.message}
            />
          </div>
          <div className="col-span-2">
            <InputField
              register={register}
              label="Company Name"
              type="email"
              name="companyName"
            //   placeholder="Enter your email"
              errorMessage={errors.companyName?.message}
            />
          </div>
          <div className="col-span-2">
            <InputField
              register={register}
              label="Company Name"
              type="email"
              name="companyName"
            //   placeholder="Enter your email"
              errorMessage={errors.companyName?.message}
            />
          </div>
          <div className="col-span-2">
            <InputField
              register={register}
              label="Company Name"
              type="email"
              name="companyName"
            //   placeholder="Enter your email"
              errorMessage={errors.companyName?.message}
            />
          </div>
        </div>

        <Button type="submit" variant="solid">
          Register Now
        </Button>
      </form>
      <div className="hidden lg:inline col-span-3 z-10">
        <Image
          src="/Dashboard.svg"
          alt="dashboard"
          className="w-full rounded-lg shadow-lg"
          height={800}
          width={800}
        />
      </div>
    </div>
  );
}
