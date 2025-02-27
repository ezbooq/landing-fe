import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ezbooq | Partner SignUp",
  description: "Partner SignUp page for Ezbooq",
};

export default function PartnerSignUpLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
