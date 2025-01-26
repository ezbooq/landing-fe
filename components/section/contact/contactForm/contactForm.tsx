"use client";

import React, { useState } from "react";
import InputField from "@/components/inputField/InputField";
import Image from "next/image";
import Button from "@/components/button/Button";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    message: "",
    isAgreed: false,
  });
  const [errors, setErrors] = useState({
    username: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" })); // Clear errors on change
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.username) {
      setErrors((prev) => ({ ...prev, username: "Username is required" }));
    }
    if (!formData.email) {
      setErrors((prev) => ({ ...prev, email: "Email is required" }));
    }
    if (!formData.message) {
      setErrors((prev) => ({ ...prev, message: "Message is required" }));
    }
  };

  return (
    <div className="relative">
      <div
        className="hidden lg:inline absolute inset-y-0 right-0 w-96 h-full bg-cover bg-no-repeat bg-right rotate-180"
        style={{
          backgroundImage: "url('/backgroundCircleLeft.png')",
        }}
      ></div>
      <div className="grid grid-cols-5 h-screen items-center max-w-7xl mx-auto px-5 gap-10">
        <form
          onSubmit={handleSubmit}
          className="space-y-4 w-full col-span-5 lg:col-span-2 "
        >
          <h1 className="text-4xl">Contact us</h1>
          <p>Fill out the form below to contact us</p>
          <InputField
            label="Username"
            name="username"
            value={formData.username}
            placeholder="Enter your username"
            onChange={handleChange}
            errorMessage={errors.username}
          />
          <InputField
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            placeholder="Enter your email"
            onChange={handleChange}
            errorMessage={errors.email}
          />
          <InputField
            label="Message"
            name="message"
            type="textarea"
            value={formData.message}
            placeholder="Type your message..."
            onChange={handleChange}
            errorMessage={errors.message}
          />
          <input
            type="checkbox"
            name="subscribe"
            id="subscribe"
            checked={formData.isAgreed}
            onChange={() =>
              setFormData((prev) => ({ ...prev, isAgreed: !prev.isAgreed }))
            }
            className="border border-black"
            required
          />{" "}
          I accept the terms
          <br />
          <Button type="submit" variant="solid" onClick={() => {}}>
            Submit
          </Button>
        </form>
        <div className="hidden lg:inline col-span-3 z-10">
          <Image
            src="/Dashboard.png"
            alt="dashboard"
            className="w-full rounded-lg shadow-lg"
            height={800}
            width={1000}
          />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
