import Link from "next/link";

export default function Footer() {
  return (
    <div className="text-center md:text-xl flex flex-col justify-center md:flex-row md:gap-50 pb-2 p-2 pl-2 ">
      <div>
        <ul className="space-y-1 pr-5 italic">
          <li>
            <Link href="/">Hem</Link>
          </li>
          <li>
            <Link href="/om">Om oss</Link>
          </li>
          <li>
            <Link href="/tjanster">Tjänster</Link>
          </li>
          <li>
            <Link href="/kontakt">Kontakt</Link>
          </li>
          <li>
            <Link href="/integritetspolicy">Integritetspolicy</Link>
          </li>
        </ul>
      </div>
      <div className="italic">
        <p>Tel: 031-20 06 30</p>
        <p>Fax: 031-81 24 98</p>
        <p>E-mail: info@odevall-law.se</p>
      </div>
      <div className="italic">
        <p>Göteborg Plusgiro: 186320-8</p>
        <p>Besöksadress: Södra vägen 12, 412 54</p>
        <p>Bankgiro: 5701-3021</p>
      </div>

      <p className="text-sm text-gray-400 mt-4">
        &copy; {new Date().getFullYear()} Odevall Advokatbyrå. <br /> Alla rättigheter
        förbehållna.
      </p>
    </div>
  );
}
