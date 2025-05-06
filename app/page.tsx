import AcmeLogo from "./ui/acme-logo";

export default function Page() {
  return (
    <main className="h-screen bg-[url('/bg-img-2.jpg')] bg-cover bg-right-top">
      <div className="absolute h-screen w-screen inset-0 bg-gradient-to-r from-[#282a36] via-[#282a36] to-[#282a36]/50" />
      <div className="relative z-10 flex justify-center h-full">
        <div className="fixed ml-26 left-2/4 transform -translate-x-1/2 top-0 z-0">
          <svg
            viewBox="0 0 100 1000"
            className="h-screen w-24"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M50,0
                Q70,100 50,200
                Q30,300 50,400
                Q70,500 50,600
                Q30,700 50,800
                Q70,900 50,1000"
              fill="none"
              stroke="#b5ddd830"
              stroke-width="2"
              stroke-dasharray="8,8"
            />
          </svg>
        </div>
        <div className="w-screen h-14 flex align-top">
          <AcmeLogo />
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
