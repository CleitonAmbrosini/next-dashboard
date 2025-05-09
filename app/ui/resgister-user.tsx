"use client";

import { registerUser } from "@/app/lib/actions";
import { Button } from "@/app/ui/button";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/20/solid";
import {
  AtSymbolIcon,
  ExclamationCircleIcon,
  KeyIcon,
  StarIcon,
} from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import { useActionState } from "react";

export default function RegisterUserForm() {
  const router = useRouter();
  const [errorRegisterMessage, formRegisterAction, isRegisterPending] =
    useActionState(registerUser, undefined);

  return (
    <div className="flex-1 rounded-lg px-6 pb-4 pt-8">
      <form>
        <h1 className={`mb-3 text-xl text-dark-primaryText`}>
          Please log in to continue.
        </h1>
        <div className="w-full">
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-dark-primaryText"
              htmlFor="email"
            >
              Name
            </label>
            <div className="relative">
              <input
                className="peer block w-full text-dark-primaryText bg-dark-primary rounded-md border border-dark-primary/50 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="name"
                type="text"
                name="name"
                placeholder="Enter your name"
                required
              />
              <StarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-dark-primaryText" />
            </div>
          </div>
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-dark-primaryText"
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
              className="mb-3 mt-5 block text-xs font-medium text-dark-primaryText"
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
            <div className="mt-8">
              <label
                className="mb-3 mt-5 block text-xs font-medium text-dark-primaryText"
                htmlFor="password"
              >
                Confirm Password
              </label>
              <div className="relative">
                <input
                  className="peer block w-full rounded-md border text-dark-primaryText bg-dark-primary border-dark-primary/50 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                  id="password"
                  type="password"
                  name="confirmPassword"
                  placeholder="Enter password"
                  required
                  minLength={6}
                />
                <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-dark-primaryText" />
              </div>
            </div>
          </div>
        </div>
        <div
          className="flex h-8 items-end mt-4 mb-1"
          aria-live="polite"
          aria-atomic="true"
        >
          {errorRegisterMessage && (
            <>
              <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
              <p className="text-sm text-red-500">{errorRegisterMessage}</p>
            </>
          )}
        </div>
        <Button
          className="w-full"
          aria-disabled={isRegisterPending}
          formAction={formRegisterAction}
        >
          Create account
          <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
        </Button>
      </form>
      <Button
        className="w-full bg-dark-secondary mt-4"
        aria-disabled={isRegisterPending}
        onClick={() => router.push("/")}
      >
        Log In
        <ArrowLeftIcon className="ml-auto h-5 w-5 text-gray-50" />
      </Button>
    </div>
  );
}
