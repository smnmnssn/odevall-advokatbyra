"use client";
import { Separator } from "@/components/ui/separator";
import { Field, Label, Switch } from "@headlessui/react";
import { useState } from "react";
import Link from "next/link";
export default function Contact() {
  const [agreed, setAgreed] = useState(false);

  return (
    <div className="flex flex-col  font-sans isolate   lg:px-8 ">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
      />

      <div className="">
        <p className="text-center text-3xl md:text-6xl text-black font-serif py-7">
          Kontakt
        </p>
        <div className="text-center text-2xl w-2xl mx-auto italic">
          <p>Här kan du kontakta oss genom att skicka ett mail med kontaktformuläret, eller ring oss direkt på: 031-20 06 30.</p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row lg:justify-center md:gap-8 p-3 lg:w-[70%] lg:mx-auto">
        <form action="#" method="POST" className="w-full ">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="first-name"
                className="block text-sm/6 font-semibold text-black"
              >
                Förnamn{" "}
              </label>
              <div className="mt-2.5 border-1 border-gray-400">
                <input
                  id="first-name"
                  name="first-name"
                  type="text"
                  autoComplete="given-name"
                  className="block w-full rounded-xs  bg-white px-3.5 py-2  text-black  -outline-offset-1 "
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="last-name"
                className=" block text-sm/6 font-semibold text-black"
              >
                Efternamn{" "}
              </label>
              <div className="mt-2.5 border-1 border-gray-400">
                <input
                  id="last-name"
                  name="last-name"
                  type="text"
                  autoComplete="family-name"
                  className="block w-full rounded-xs bg-white px-3.5 py-2 text-base text-black  -outline-offset-1 focus:outline-black"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="company"
                className="block text-sm/6 font-semibold text-black"
              >
                Företag
              </label>
              <div className="mt-2.5 border-1 border-gray-400">
                <input
                  id="company"
                  name="company"
                  type="text"
                  autoComplete="organization"
                  className="block w-full rounded-xs bg-white px-3.5 py-2 text-base text-black  -outline-offset-1 focus:outline-black"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="block text-sm/6 font-semibold text-black"
              >
                E-mail
              </label>
              <div className="mt-2.5 border-1 border-gray-400">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-xs bg-white px-3.5 py-2 text-base text-black  -outline-offset-1 focus:outline-black"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="phone-number"
                className="block text-sm/6 font-semibold text-black"
              >
                Telefon{" "}
              </label>
              <div className="mt-2.5 border-1 border-gray-400">
                <div className="flex rounded-xs bg-white  -outline-offset-1 outline-gray-400 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-black">
                  <input
                    id="phone-number"
                    name="phone-number"
                    type="text"
                    placeholder="123-456-7890"
                    className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-black placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                  />
                </div>
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm/6 font-semibold text-black"
              >
                Meddelande
              </label>
              <div className="mt-2.5 border-1 border-gray-400">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="block w-full rounded-xs bg-white px-3.5 py-2 text-base text-black  -outline-offset-1 focus:outline-black"
                  defaultValue={""}
                />
              </div>
            </div>
            <Field className="flex gap-x-4 sm:col-span-2">
              <div className="flex h-6 items-center ">
                <Switch
                  checked={agreed}
                  onChange={setAgreed}
                  className="group flex w-8 flex-none cursor-pointer rounded-2xl bg-gray-400 p-px ring-1 ring-black/5 transition-colors duration-200 ease-in-out ring-inset focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black data-checked:bg-black"
                >
                  <span className="sr-only">Agree to policies</span>
                  <span
                    aria-hidden="true"
                    className="size-4 transform rounded-full bg-white ring-1 shadow-xs ring-black/5 transition duration-200 ease-in-out group-data-checked:translate-x-3.5"
                  />
                </Switch>
              </div>
              <Label className="text-sm/6 text-gray-600">
                Markera följande om du godkänner vår{" "}
                <Link href="/integritetspolicy" className="font-semibold text-black">
                  integritets&nbsp;policy
                </Link>
                .
              </Label>
            </Field>
          </div>
          <div className="mt-10">
            <button
              type="submit"
              className="block w-full border-1 border-gray-400 rounded-xs  px-3.5 py-2.5 text-center text-sm font-semibold text-black shadow-xs hover:bg-[var(--yellow-12)]  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Skicka meddelande
            </button>
          </div>
        </form>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2132.031040919872!2d11.979082677804266!3d57.69894244044101!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464ff3772796e4db%3A0xd961560c2a9ba9b!2sOdevall%20Advokatbyr%C3%A5%20AB!5e0!3m2!1ssv!2sse!4v1742739536242!5m2!1ssv!2sse"
          width="600"
          height="450"
          loading="lazy"
          className="border border-black mt-5 w-full"
        ></iframe>
      </div>
      <Separator className="mt-5 mx-auto" />
      {/* <hr className="w-[80%] mx-auto"> */}
    </div>
  );
}
