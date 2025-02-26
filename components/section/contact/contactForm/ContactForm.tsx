"use client";

import InputField from "@/components/inputField/InputField";
import Image from "next/image";
import Button from "@/components/button/Button";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/useToast";

import { HiOutlineMail } from "react-icons/hi";
import { PiChatTextBold } from "react-icons/pi";
import { FiPhone } from "react-icons/fi";

const ContactForm = () => {
  const formSchema = z.object({
    name: z.string().nonempty("Name is required"),
    email: z
      .string().nonempty("Email is required")
      .email("Invalid email address"),
    message: z.string().nonempty("Message is required"),
    // isAgreed: z.boolean().refine((value) => value === true, {
    //   message: "You must agree to the terms",
    // }),
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
    showToast("Thank you for reaching out! 📩 We’ve received your inquiry, and a member of our Ezbooq team will contact you soon.", "success");
    reset();
  };

  return (
    <section>
      <div className="relative">
        <div
          className="hidden lg:inline absolute inset-y-0 right-0 w-96 h-full bg-cover bg-no-repeat bg-right rotate-180"
          style={{
            backgroundImage: "url('/backgroundCircleLeft.png')",
          }}
        ></div>
        <div className="grid grid-cols-5 items-center max-w-7xl mx-auto px-4 py-8 gap-10">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4 w-full col-span-5 lg:col-span-2 "
          >
            <h1 className="text-4xl">Contact us</h1>
            <p>Fill out the form below to contact us</p>
            <InputField
              register={register}
              label="Name"
              name="name"
              placeholder="Enter your name"
              errorMessage={errors.name?.message}
            />
            <InputField
              register={register}
              label="Email"
              type="email"
              name="email"
              placeholder="Enter your email"
              errorMessage={errors.email?.message}
            />
            <InputField
              register={register}
              label="Message"
              name="message"
              type="textarea"
              // value={FormData.message}
              placeholder="Type your message..."
              errorMessage={errors.message?.message}
            />
            {/* <div className="flex items-center gap-2">
              <input
                {...register("isAgreed")}
                type="checkbox"
                id="subscribe"
                // checked={FormData.isAgreed}
                className="border border-black"
              />{" "}
              <div className="text-sm text-black">I accept the terms</div>
              {errors.isAgreed && (
                <span className="mt-1 text-sm text-red-500">
                  {errors.isAgreed?.message}
                </span>
              )}
            </div> */}

            <Button type="submit" variant="solid">
              Submit
            </Button>
          </form>
          <div className="hidden lg:inline col-span-3 z-10">
            <Image
              src="/Dashboard.svg"
              alt="dashboard"
              className="w-full rounded-lg shadow-lg"
              height={800}
              width={1000}
            />
          </div>
        </div>
      </div>
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
    </section>
  );
};

export default ContactForm;
