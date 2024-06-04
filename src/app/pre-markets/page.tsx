import PreMarkets from "@/components/Dashboard/PreMarkets";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "NEP Markets",
  description: "Pre markets on multi network",
  // other metadata
};

export default function Home() {
  return (
    <>
      <PreMarkets />
    </>
  );
}
