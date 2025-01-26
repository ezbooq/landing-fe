import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ezbooq industries",
  description: "Industries page for Ezbooq",
};

export default function IndustryLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
