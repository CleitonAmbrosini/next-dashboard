"use client";

import { authenticate } from "@/app/lib/actions";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import {
  AtSymbolIcon,
  ExclamationCircleIcon,
  KeyIcon,
} from "@heroicons/react/24/outline";
import { useRouter, useSearchParams } from "next/navigation";
import { useActionState } from "react";
import { Button } from "./button";

export default function LoginForm() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/dashboard";
  const [errorMessage, formAction, isPending] = useActionState(
    authenticate,
    undefined
  );
  const router = useRouter();

  return (
    <div className="flex-1 rounded-lg px-6 pb-4 pt-6">
      <form>
        <h1 className={`mb-8 text-xl text-dark-primaryText`}>
          Please log in to continue.
        </h1>
        <div className="w-full">
          <div>
            <label
              className="mb-3 mt-5 block text-sm font-medium text-dark-primaryText"
              htmlFor="email"
            >
              Email
            </label>
            <div className="relative">
              <input
                className="peer block w-full text-dark-primaryText bg-dark-primary rounded-md border border-dark-primary/50 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email address"
                required
              />
              <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-dark-primaryText" />
            </div>
          </div>
          <div className="mt-8">
            <label
              className="mb-3 mt-5 block text-sm font-medium text-dark-primaryText"
              htmlFor="password"
            >
              Password
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border text-dark-primaryText bg-dark-primary border-dark-primary/50 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="password"
                type="password"
                name="password"
                placeholder="Enter password"
                required
                minLength={6}
              />
              <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-dark-primaryText" />
            </div>
          </div>
        </div>
        <input type="hidden" name="redirectTo" value={callbackUrl} />
        <div
          className="flex h-8 items-end mt-4 mb-1"
          aria-live="polite"
          aria-atomic="true"
        >
          {errorMessage && (
            <>
              <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
              <p className="text-sm text-red-500">{errorMessage}</p>
            </>
          )}
        </div>
        <Button
          className="w-full"
          aria-disabled={isPending}
          formAction={formAction}
        >
          Log in
          <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
        </Button>
      </form>
      <Button
        className="w-full bg-dark-secondary mt-4"
        aria-disabled={isPending}
        onClick={() => router.push("/register")}
      >
        Register
        <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
      </Button>
    </div>
  );
}
