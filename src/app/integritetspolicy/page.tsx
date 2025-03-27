// pages/integritetspolicy.tsx

export default function Integritetspolicy() {
  return (
      <main className="max-w-3xl mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold mb-6">Integritetspolicy</h1>
          <p className="mb-4">Senast uppdaterad: 03/27/2025</p>

          <p className="mb-6">
              Odevall Advokatbyrå värnar om din personliga integritet. I denna policy
              förklarar vi hur vi samlar in och använder dina personuppgifter, samt vilka
              rättigheter du har enligt dataskyddsförordningen (GDPR).
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-2">1. Personuppgiftsansvarig</h2>
          <p className="mb-4">
              Odevall Advokatbyrå<br />
              Södra vägen 12, 412 54<br />
              E-post: kontakt@exempel.se<br />
              Telefon: 012-345 67 89
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-2">2. Vilka uppgifter samlar vi in?</h2>
          <p className="mb-4">
              När du kontaktar oss via vårt kontaktformulär kan vi samla in följande uppgifter:
          </p>
          <ul className="list-disc list-inside mb-4">
              <li>Namn</li>
              <li>E-postadress</li>
              <li>Telefonnummer</li>
              <li>Meddelandet du skickar till oss</li>
              <li>Din IP-adress (för säkerhetsändamål)</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-2">3. Syfte och rättslig grund</h2>
          <p className="mb-4">
              Vi behandlar dina personuppgifter för att kunna:
          </p>
          <ul className="list-disc list-inside mb-4">
              <li>Svara på din förfrågan</li>
              <li>Följa upp ditt ärende</li>
              <li>Kommunicera med dig om våra tjänster</li>
          </ul>
          <p className="mb-4">
              Den rättsliga grunden för behandlingen är <strong>samtycke</strong> (när du skickar
              formuläret) samt vårt <strong>berättigade intresse</strong> att kunna ge dig service
              och svara på dina frågor.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-2">4. Lagringstid</h2>
          <p className="mb-4">
              Vi sparar dina uppgifter så länge det är nödvändigt för att hantera ditt ärende,
              dock som längst i 12 månader, om inte annan lagstiftning kräver längre lagring.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-2">5. Tredje parter</h2>
          <p className="mb-4">
              Vi delar inte dina uppgifter med tredje part, om det inte krävs enligt lag eller är
              nödvändigt för att hantera ditt ärende (t.ex. IT-leverantörer som driftar
              hemsidan). Alla våra samarbetspartners hanterar data enligt GDPR.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-2">6. Dina rättigheter</h2>
          <p className="mb-4">Du har rätt att:</p>
          <ul className="list-disc list-inside mb-4">
              <li>Begära ett utdrag av de personuppgifter vi har om dig</li>
              <li>Få felaktiga uppgifter rättade</li>
              <li>Bli raderad (“rätten att bli glömd”)</li>
              <li>Begränsa eller invända mot behandlingen</li>
              <li>Lämna in klagomål till Integritetsskyddsmyndigheten (IMY)</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-2">7. Cookies</h2>
          <p className="mb-4">
              Vi använder endast nödvändiga cookies för att webbplatsen ska fungera korrekt. Vi
              samlar inte in någon statistik eller använder analysverktyg utan ditt samtycke.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-2">8. Kontakt</h2>
          <p>
              Har du frågor om hur vi behandlar dina personuppgifter?<br />
              Kontakta oss gärna på: <strong>kontakt@exempel.se</strong>
          </p>
      </main>
  );
}
