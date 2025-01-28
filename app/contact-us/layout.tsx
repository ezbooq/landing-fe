import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ezbooq | Contact us",
  description: "Contact us page for Ezbooq",
};

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
