import Image from "next/image";
import { Button } from "@/components/ui/button"
import Hero from "./_component/Hero";
import CategorySearch from "./_component/CategorySearch";

export default function Home() {
  return (
    <div >
      <Hero/>
      <CategorySearch/>
    </div>
  );
}
