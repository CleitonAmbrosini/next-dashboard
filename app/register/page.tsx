import { nunito } from "@/app/ui/fonts";
import RegisterUserForm from "@/app/ui/resgister-user";
import CashLogo from "@/public/logo.png";
import Image from "next/image";

import { Suspense } from "react";

export default function Page() {
  return (
    <main
      className={`h-screen w-screen flex bg-dark-primary ${nunito.className}`}
    >
      <div className="flex flex-col m-auto h-min-[648px] w-[641px] p-0 pb-8 border border-gray-200 rounded-2xl shadow-sm dark:bg-dark-secondary dark:border-gray-700">
        <div className="flex flex-col bg-black p-10 rounded-t-2xl">
          <Image
            src={CashLogo}
            alt="CashBoard logo"
            className="bg-red-700 m-auto"
            width={148}
          />
          <h2 className="text-center h-6 w-[100%] text-dark-primaryText text-2xl mt-2 mb-4">
            <strong>Welcome to CashBoard</strong>
          </h2>
        </div>
        <Suspense>
          <RegisterUserForm />
        </Suspense>
      </div>
    </main>
  );
}
