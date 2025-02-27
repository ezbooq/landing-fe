import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ezbooq | Register",
  description: "Register page for Ezbooq",
};

export default function RegisterLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
