"use client";
import { Field, Label, Switch } from "@headlessui/react";
import { Bodoni_Moda } from "next/font/google";
import { useState } from "react";

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Contact() {
  const [agreed, setAgreed] = useState(false);

  return (
    <div className="font-sans isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-1/2 -z-10 aspect-1155/678 w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
        />
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h2
          className={`${bodoni.className} text-4xl tracking-tight text-balance text-black sm:text-5xl font-serif`}
        >
          Kontakt
        </h2>
        <div className="mt-10  text-lg/8">
          <p>Tel: 031-20 06 30</p>
          <p>Fax: 031-81 24 98</p>
          <p>E-mail: info@odevall-law.se</p>
          <p>Besöksadress: Södra vägen 12, 412 54</p>
          <p>Göteborg Plusgiro: 186320-8</p>
          <p>Bankgiro: 5701-3021</p>
          <p className="mt-10 mb-10 italic ">Eller skicka ett e-postmeddelande med formuläret nedanför</p>
        </div>
      </div>
      <form
        action="#"
        method="POST"
        className="mx-auto max-w-xl sm:mt-20"
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="first-name"
              className="block text-sm/6 font-semibold text-black"
            >
              Förnamn{" "}
            </label>
            <div className="mt-2.5">
              <input
                id="first-name"
                name="first-name"
                type="text"
                autoComplete="given-name"
                className="block w-full rounded-xs bg-white px-3.5 py-2  text-black outline-1 -outline-offset-1 outline-gray-400 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-black "
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
            <div className="mt-2.5">
              <input
                id="last-name"
                name="last-name"
                type="text"
                autoComplete="family-name"
                className="block w-full rounded-xs bg-white px-3.5 py-2 text-base text-black outline-1 -outline-offset-1 outline-gray-400 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-black"
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
            <div className="mt-2.5">
              <input
                id="company"
                name="company"
                type="text"
                autoComplete="organization"
                className="block w-full rounded-xs bg-white px-3.5 py-2 text-base text-black outline-1 -outline-offset-1 outline-gray-400 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-black"
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
            <div className="mt-2.5">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="block w-full rounded-xs bg-white px-3.5 py-2 text-base text-black outline-1 -outline-offset-1 outline-gray-400 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-black"
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
            <div className="mt-2.5">
              <div className="flex rounded-xs bg-white outline-1 -outline-offset-1 outline-gray-400 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-black">
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
            <div className="mt-2.5">
              <textarea
                id="message"
                name="message"
                rows={4}
                className="block w-full rounded-xs bg-white px-3.5 py-2 text-base text-black outline-1 -outline-offset-1 outline-gray-400 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-black"
                defaultValue={""}
              />
            </div>
          </div>
          <Field className="flex gap-x-4 sm:col-span-2">
            <div className="flex h-6 items-center">
              <Switch
                checked={agreed}
                onChange={setAgreed}
                className="group flex w-8 flex-none cursor-pointer rounded-full bg-gray-200 p-px ring-1 ring-black/5 transition-colors duration-200 ease-in-out ring-inset focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black data-checked:bg-black"
              >
                <span className="sr-only">Agree to policies</span>
                <span
                  aria-hidden="true"
                  className="size-4 transform rounded-full bg-white ring-1 shadow-xs ring-black/5 transition duration-200 ease-in-out group-data-checked:translate-x-3.5"
                />
              </Switch>
            </div>
            <Label className="text-sm/6 text-gray-600">
              By selecting this, you agree to our{" "}
              <a href="#" className="font-semibold text-black">
                privacy&nbsp;policy
              </a>
              .
            </Label>
          </Field>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full border border-gray-400 rounded-xs  px-3.5 py-2.5 text-center text-sm font-semibold text-black shadow-xs hover:bg-slate-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Skicka meddelande
          </button>
          <iframe
            className="mt-20 border border-black w-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2132.0465908272226!2d11.98086058919653!3d57.69867825324872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464ff3772796e4db%3A0x1fece42fdec071cc!2zU8O2ZHJhIFbDpGdlbiAxMiwgNDEyIDU0IEfDtnRlYm9yZw!5e0!3m2!1ssv!2sse!4v1742573230278!5m2!1ssv!2sse"
            width="576"
            height="450"
            loading="lazy"
          ></iframe>
        </div>
      </form>
    </div>
  );
}
