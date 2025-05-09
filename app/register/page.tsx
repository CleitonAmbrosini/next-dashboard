import DashLogo from "@/app/ui/dash-logo";
import { nunito } from "@/app/ui/fonts";
import RegisterUserForm from "@/app/ui/resgister-user";
import { Suspense } from "react";

export default function Page() {
  return (
    <main
      className={`h-screen w-screen flex bg-dark-primary ${nunito.className}`}
    >
      <div className="flex flex-col m-auto h-min-[648px] w-[641px] border border-gray-200 rounded-2xl shadow-sm sm:p-8 dark:bg-dark-secondary dark:border-gray-700">
        <div className="flex flex-col h-1/2 w-[100%] rounded-t-3xl">
          <DashLogo />
          <h2 className="text-center h-6 w-[100%] text-dark-primaryText text-2xl mt-2">
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
