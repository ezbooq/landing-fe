"use client";

import { z } from "zod";
import { useToast } from "@/hooks/useToast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import InputField from "@/components/inputField/InputField";
import Button from "@/components/button/Button";
import PhoneNumberInput from "@/components/phoneNumberInput/PhoneNumberInput";
import { countries, countryCodes } from "@/utils/country";
import { useState } from "react";
import { Country } from "@/types/common";
import dynamic from "next/dynamic";
import parsePhoneNumberFromString from "libphonenumber-js";

const SelectField = dynamic(
  () => import("@/components/selectField/SelectField"),
  { ssr: false }
);

const IndustryList = [
  { id: "CAR_DETAILING", name: "Car Detailing" },
  { id: "CAR_WASH", name: "Car Wash" },
  { id: "HOME_CLEANING", name: "Home Cleaning" },
  { id: "PET_GROOMERS", name: "Pet Groomers" },
  { id: "DOG_WALKER", name: "Dog Walker" },
  { id: "CARPET_CLEANING", name: "Carpet Cleaning" },
  { id: "POOL_CLEANING", name: "Pool Cleaning" },
  { id: "LAWN_CARE", name: "Lawn Care" },
  { id: "MOVING_BUSINESS", name: "Moving Business" },
  { id: "NAIL_SALOON", name: "Nail Saloon" },
  { id: "SPA", name: "Spa" },
  { id: "MASSAGE", name: "Massage" },
  { id: "GUTTER_CLEANING", name: "Gutter Cleaning" },
  { id: "LAWYERS", name: "Lawyers" },
  { id: "ACCOUNTANTS", name: "Accountants" },
  { id: "ALL_TUTORS", name: "All Tutors" },
  { id: "ALL_CONSULTATION", name: "All Consultation" },
  {
    id: "ALL_COACHES",
    name: "All Coaches (online coach, personal trainers, nutrition coaches, etc...)",
  },
  { id: "OTHERS", name: "Others" },
];

export default function RegisterForm() {
  const [selectedCountryCode, setSelectedCountryCode] = useState<Country>(
    countryCodes[126]
  );
  const { showToast } = useToast();

  const formSchema = z.object({
    firstname: z.string().nonempty("First name is required"),
    lastname: z.string(),
    email: z
      .string()
      .nonempty("Email is required")
      .email("Invalid email address"),
    companyName: z.string().nonempty("Company name is required"),
    industry: z.enum(
      IndustryList.map((industry) => industry.id) as [string, ...string[]],
      {
        message: "Invalid industry",
      }
    ),
    country: z.string().nonempty("Country is required"),
    phoneNumber: z
      .string()
      .nonempty("Mobile number is required")
      .refine(
        (value) => {
          const fullPhoneNumber = `${selectedCountryCode.dialingCode}${value}`;
          const parsedPhoneNumber = parsePhoneNumberFromString(fullPhoneNumber);
          return parsedPhoneNumber?.isValid() ?? false;
        },
        { message: "Invalid phone number" }
      ),
  });

  type FormData = z.infer<typeof formSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormData) => {
    const fullPhoneNumber = `${selectedCountryCode.dialingCode}${data.phoneNumber}`;

    const formDataWithFullNumber = {
      ...data,
      mobileNumber: fullPhoneNumber, // Ensure the phone number includes the country code
    };

    localStorage.setItem("formData", JSON.stringify(formDataWithFullNumber));
    showToast("Thank you for signing up with Ezbooq! 🎉 We're excited to have you on board. Stay tuned for updates on how Ezbooq can help your business grow.", "success");
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 w-full col-span-6 lg:col-span-3"
    >
      <h1 className="text-4xl">Register Now</h1>
      <p>Fill out the form below to contact us</p>
      <div className="grid grid-cols-2 gap-4">
        <InputField
          register={register}
          label="First Name*"
          name="firstname"
          errorMessage={errors.firstname?.message}
        />
        <InputField
          register={register}
          label="Last Name"
          name="lastname"
          errorMessage={errors.lastname?.message}
        />
        <div className="col-span-2">
          <InputField
            register={register}
            label="Email*"
            type="email"
            name="email"
            errorMessage={errors.email?.message}
          />
        </div>
        <div className="col-span-2">
          <InputField
            register={register}
            label="Company Name*"
            type="text"
            name="companyName"
            errorMessage={errors.companyName?.message}
          />
        </div>
        <div className="col-span-2">
          <SelectField
            register={register}
            label="Industry*"
            name="industry"
            placeholder="Select Industry"
            options={IndustryList.map((industry) => ({
              value: industry.id,
              label: industry.name,
            }))}
            errorMessage={errors.industry?.message}
          />
        </div>
        <div className="col-span-2">
          <SelectField
            register={register}
            label="Country*"
            name="country"
            placeholder="Select Country"
            options={countries.map((country) => ({
              value: country.id,
              label: country.name,
            }))}
            errorMessage={errors.country?.message}
          />
        </div>
        <div className="col-span-2">
          <PhoneNumberInput
            label="Mobile Number*"
            register={register}
            name="phoneNumber"
            selectedCountry={selectedCountryCode}
            setSelectedCountry={setSelectedCountryCode}
            countries={countryCodes}
            error={errors.phoneNumber?.message}
          />
        </div>
      </div>

      <Button type="submit" variant="solid">
        Register Now
      </Button>
    </form>
  );
}
