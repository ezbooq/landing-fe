"use client";

import InputField from "@/components/inputField/InputField";
import Button from "@/components/button/Button";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/useToast";

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
    // <section>
    //   <div className="relative">
    //     <div
    //       className="hidden lg:inline absolute inset-y-0 right-0 w-96 h-full bg-cover bg-no-repeat bg-right rotate-180"
    //       style={{
    //         backgroundImage: "url('/backgroundCircleLeft.png')",
    //       }}
    //     ></div>
    //     <div className="grid grid-cols-5 items-center max-w-7xl mx-auto px-4 py-8 gap-10">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className=" w-full col-span-5 md:col-span-2 "
          >
            <div className="space-y-4">
            <h1 className="text-4xl">Contact us</h1>
            <p>Let’s Talk About Your Digital Future. Send your inquiries to us</p>
            <InputField
              register={register}
              label="Name"
              name="name"
              placeholder="Enter your name"
              errorMessage={errors.name?.message}
              required={true}
            />
            <InputField
              register={register}
              label="Email"
              type="email"
              name="email"
              placeholder="Enter your email"
              errorMessage={errors.email?.message}
              required={true}
            />
            <InputField
              register={register}
              label="Message"
              name="message"
              type="textarea"
              // value={FormData.message}
              placeholder="Type your message..."
              errorMessage={errors.message?.message}
              required={true}
            />
            </div>
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

            <Button type="submit" variant="solid" className="mt-6">
              Submit
            </Button>
          </form>
         
      
    // </section>
  );
};

export default ContactForm;
