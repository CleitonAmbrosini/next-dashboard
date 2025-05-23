import { fetchLatestInvoices } from "@/app/lib/data";
import { ArrowPathIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import Image from "next/image";

export default async function LatestInvoices() {
  const latestInvoices = await fetchLatestInvoices();

  return (
    <div className="flex w-full flex-col md:col-span-4">
      <h2 className={"mb-4 text-xl md:text-2xl text-dark-primaryText"}>
        Latest Invoices
      </h2>
      <div className="flex grow flex-col justify-between rounded-xl bg-dark-secondary p-4">
        <div className="px-6">
          {latestInvoices.map((invoice, i) => {
            return (
              <div
                key={invoice.id}
                className={clsx(
                  "flex flex-row items-center justify-between py-4 text-dark-primaryText hover:text-dark-highlight",
                  {
                    "border-t": i !== 0,
                  }
                )}
              >
                <div className="flex items-center">
                  <Image
                    src={invoice.customer.image_url}
                    alt={`${invoice.customer.name}'s profile picture`}
                    className="mr-4 rounded-full"
                    width={32}
                    height={32}
                  />
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold md:text-base">
                      {invoice.customer.name}
                    </p>
                    <p className="hidden text-sm  sm:block">
                      {invoice.customer.email}
                    </p>
                  </div>
                </div>
                <p className={"truncate text-sm font-medium md:text-base"}>
                  {invoice.amount}
                </p>
              </div>
            );
          })}
        </div>
        <div className="flex items-center pb-2 pt-6">
          <ArrowPathIcon className="h-5 w-5 text-gray-500" />
          <h3 className="ml-2 text-sm text-gray-500 ">Updated just now</h3>
        </div>
      </div>
    </div>
  );
}
