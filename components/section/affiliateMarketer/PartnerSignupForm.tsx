"use client";

import Button from "@/components/button/Button";
import InputField from "@/components/inputField/InputField";
import { useToast } from "@/hooks/useToast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Country } from "@/types/common";
import { countries, countryCodes } from "@/utils/country";
import { useState } from "react";
import { parsePhoneNumberFromString } from "libphonenumber-js";
import dynamic from "next/dynamic";
import PhoneNumberInput from "@/components/phoneNumberInput/PhoneNumberInput";
import AxiosInstance from "@/services/AxiosInstance";
const SelectField = dynamic(
  () => import("@/components/selectField/SelectField"),
  { ssr: false }
);

export default function PartnerSignupForm() {
  const [selectedCountryCode, setSelectedCountryCode] = useState<Country>(
    countryCodes[126]
  );
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState("");
  const { showToast } = useToast();

  const formSchema = z.object({
    firstName: z.string().nonempty("First name is required"),
    lastName: z.string(),
    mobileNumber: z
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
    email: z
      .string()
      .nonempty("Email is required")
      .email("Invalid email address"),
    country: z.string().nonempty("Country is required"),
  });

  type FormData = z.infer<typeof formSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      mobileNumber: "",
      email: "",
      country: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    const fullPhoneNumber = `${selectedCountryCode.dialingCode}${data.mobileNumber}`;

    const formDataWithFullNumber = {
      ...data,
      mobileNumber: fullPhoneNumber, // Ensure the phone number includes the country code
    };

    setLoading(true);
    setServerError("");
    try {
      const response = await AxiosInstance.post("/affiliate-marketer/create", formDataWithFullNumber);

      if (!response.data.success) {
        throw new Error(
          response.data.error?.message ||
            "Something went wrong. Please try again."
        );
      }
      showToast(
        "Welcome to the Ezbooq Affiliate Program! 🚀 We appreciate you joining us and will keep you updated on the next steps.",
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
      className="max-w-3xl mx-auto py-8 px-5"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="bg-white p-5 rounded-sm shadow-md border-t-primary border-t-4">
        <h1 className="text-2xl sm:text-3xl font-medium mb-4">
          Partner Sign Up
        </h1>
        <p className="text-sm sm:text-base mb-4">
          EzBooq is transforming booking, customer & staff management for
          service providers. Join us in revolutionizing the industry.
        </p>
        <div className="space-y-4">
          <InputField
            register={register}
            label="First Name"
            name="firstName"
            errorMessage={errors.firstName?.message}
            required={true}
          />
          <InputField
            register={register}
            label="Last Name"
            name="lastName"
            errorMessage={errors.lastName?.message}
          />
          <PhoneNumberInput
            label="Mobile Number"
            register={register}
            name="mobileNumber"
            selectedCountry={selectedCountryCode}
            setSelectedCountry={setSelectedCountryCode}
            countries={countryCodes}
            error={errors.mobileNumber?.message}
            required={true}
          />
          <InputField
            register={register}
            label="Email"
            type="email"
            name="email"
            errorMessage={errors.email?.message}
            required={true}
          />
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
        {serverError && (
          <p className="text-red-500 text-sm mt-3">{serverError}</p>
        )}
        <Button type="submit" variant="solid" className="mt-6" loading={loading}>
          Sign Up
        </Button>
      </div>
    </form>
  );
}
