import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[496px]">
          <Image
            src="/assets/icons/logo-full.svg"
            alt=""
            height={1000}
            width={1000}
            className="w-fit h-10 mb-12"
          />
        </div>
      </section>
    </div>
  );
}
