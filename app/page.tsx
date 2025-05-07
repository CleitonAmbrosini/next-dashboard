import DashLogo from "./ui/dash-logo";

export default function Page() {
  return (
    <main className="h-screen w-screen flex bg-dark-primary">
      <div className="flex flex-col m-auto h-[648px] w-[641px] border border-gray-200 rounded-2xl shadow-sm sm:p-8 dark:bg-dark-secondary dark:border-gray-700">
        <div className="flex flex-col mt-12 h-1/2 w-[100%] rounded-t-3xl">
          <DashLogo />
          <h2 className="text-center h-6 w-[100%] text-dark-primaryText text-2xl mt-2">
            <strong>Welcome to CashBoard</strong>
          </h2>
        </div>
      </div>
    </main>
    // <main className="min-h-screen p-6 flex items-center justify-center bg-gradient-to-br from-dark-primary via-gray-900 to-dark-tealAccent">
    //   {/* <div
    //     className={
    //       "flex h-20 shrink-0 items-end rounded-lg bg-dark-secondary p-4 md:h-52"
    //     }
    //   >
    //     <AcmeLogo />
    //   </div> */}
    //   <div className="bg-dark-secondary bg-opacity-65 w-64 h-64 rounded-2xl shadow-lg">
    //     teste
    //   </div>
    //   {/* <div className="mt-4 flex grow flex-col md:flex-row">
    //     <div className="flex flex-col justify-center rounded-lg px-6 py-10 md:w-2/5 md:px-20">
    //       <p
    //         className={`text-xl text-gray-800 md:text-3xl md:leading-normal ${lusitana.className}`}
    //       >
    //         <strong>Welcome to Dash.</strong>
    //       </p>
    //       <Link
    //         href="/login"
    //         className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
    //       >
    //         <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
    //       </Link>
    //     </div>
    //   </div> */}
    // </main>
  );
}
