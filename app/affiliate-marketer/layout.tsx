import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ezbooq | Affiliate Marketer",
  description: "Affiliate Marketer page for Ezbooq",
};

export default function AffiliateMarketerLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
