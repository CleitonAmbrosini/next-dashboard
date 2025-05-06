import { nunito } from "@/app/ui/fonts";
import Logo from "@/public/logo.svg";
import Image from "next/image";

export default function AcmeLogo() {
  return (
    <div className="flex flex-row justify-end">
      <Image
        className="flex flex-row"
        src={Logo}
        width={70}
        height={100}
        alt="Dash logo image"
      />
      <h1
        className={`${nunito.className} flex flex-row pt-12 text-white text-[38px]`}
      >
        Dash
      </h1>
    </div>
  );
}
