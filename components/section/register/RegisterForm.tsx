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
import AxiosInstance from "@/services/AxiosInstance";

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
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState("");
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

  const onSubmit = async (data: FormData) => {
    const fullPhoneNumber = `${selectedCountryCode.dialingCode}${data.phoneNumber}`;

    const formDataWithFullNumber = {
      ...data,
      mobileNumber: fullPhoneNumber, // Ensure the phone number includes the country code
    };

    setLoading(true);
    setServerError("");
    try {
      const response = await AxiosInstance.post("/user/create", formDataWithFullNumber);

      if (!response.data.success) {
        throw new Error(
          response.data.error?.message ||
            "Something went wrong. Please try again."
        );
      }
      showToast(
        "Thank you for signing up with Ezbooq! 🎉 We're excited to have you on board. Stay tuned for updates on how Ezbooq can help your business grow.",
        "success"
      );
      reset();
    } catch (error) {
      setServerError(
        error instanceof Error ? error.message : "An unexpected error occurred."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full col-span-6 lg:col-span-3"
    >
      <div className="space-y-4">
        <h1 className="text-4xl">Register Now</h1>
        <p>
          Register now to simplify bookings, automate operations, and grow your
          business effortlessly with Ezbooq!
        </p>
        <div className="grid grid-cols-2 gap-4">
          <InputField
            register={register}
            label="First Name"
            name="firstname"
            errorMessage={errors.firstname?.message}
            required={true}
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
              label="Email"
              type="email"
              name="email"
              errorMessage={errors.email?.message}
              required={true}
            />
          </div>
          <div className="col-span-2">
            <InputField
              register={register}
              label="Company Name"
              type="text"
              name="companyName"
              errorMessage={errors.companyName?.message}
              required={true}
            />
          </div>
          <div className="col-span-2">
            <SelectField
              register={register}
              label="Industry"
              name="industry"
              placeholder="Select Industry"
              options={IndustryList.map((industry) => ({
                value: industry.id,
                label: industry.name,
              }))}
              errorMessage={errors.industry?.message}
              required={true}
            />
          </div>
          <div className="col-span-2">
            <SelectField
              register={register}
              label="Country"
              name="country"
              placeholder="Select Country"
              options={countries.map((country) => ({
                value: country.id,
                label: country.name,
              }))}
              errorMessage={errors.country?.message}
              required={true}
            />
          </div>
          <div className="col-span-2">
            <PhoneNumberInput
              label="Mobile Number"
              register={register}
              name="phoneNumber"
              selectedCountry={selectedCountryCode}
              setSelectedCountry={setSelectedCountryCode}
              countries={countryCodes}
              error={errors.phoneNumber?.message}
              required={true}
            />
          </div>
        </div>
      </div>
      {serverError && (
        <p className="text-red-500 text-sm mt-3">{serverError}</p>
      )}
      <Button type="submit" variant="solid" className="mt-6" loading={loading}>
        Register Now
      </Button>
    </form>
  );
}
