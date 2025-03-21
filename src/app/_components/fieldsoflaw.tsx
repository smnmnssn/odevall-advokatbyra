import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/_components/accordion";
import Image from "next/image";
import FadeInSection from "./useinview";

export default function FieldsOfLaw() {
  return (
    <div id="wrapper">
      <FadeInSection>
        <div className="text-center p-2">
          <h1 className="  ">VÅR EXPERTIS</h1>
          <p className="font-sans">
            Våra advokater har
            lång erfarenhet inom varje specialområde och kan bistå dig med
            juridisk rådgivning.
          </p>
        </div>
      </FadeInSection>

      <FadeInSection>
        <Accordion
          type="single"
          collapsible
          className="text-black border border-black"
        >
          {/* AFFÄRSJURIDIK */}
          <AccordionItem value="affarsjuridik">
            <AccordionTrigger className="font-bold ml-2 font-sans">
              AFFÄRSJURIDIK
            </AccordionTrigger>
            <AccordionContent>
              <p className="ml-2 font-sans">
                Kontakta Odevall Advokatbyrå i Göteborg om du önskar juridisk
                rådgivning inom affärsjuridik. Vi hjälper dig att ta fram avtal
                (för exempelvis fastighetsköp, inventarier, affärsuppgörelsen
                mm.)
              </p>
              <p className="mt-4 ml-2 font-sans">
                Följande advokater är särskilt inriktade på affärsjuridik:
              </p>
              <p className="mt-4 ml-2 font-sans">Michael Gibbons</p>{" "}
              <p className=" ml-2 font-sans">Jan Ohlsson</p>
              <p className="mt-4 ml-2 font-sans">
                Affärsjuridik kan handla om de lagar som styr bildandet av
                företag och hur de kan drivas. Under uppbyggnaden av olika typer
                av företag, förtydligar affärsjuridiken hur varje typ av
                verksamhet kan och bör struktureras. Affärsjuridik hanterar även
                alla typer av avtal som ingås mellan två eller flera parter vid
                köp av fastigheter, inventarier samt rena affärs och
                samarbetsuppgörelser.
              </p>
              <p className="mt-4 ml-2 font-sans">
                Till skillnad från många olika juridiska områden har du som
                klient och din motpart samma intresse, ni vill komma överens! Ni
                stretar alltså inte åt var sitt håll och försöker vinna ett
                eventuellt mål utan ni vill hitta en lösning så bra som möjligt
                för båda affärspartner. För att underlätta detta är det viktigt
                att ni från början sätter upp så tydliga regler och riktlinjer
                som möjligt så att inga konflikter ska uppstå i framtiden.
              </p>
              <p className="mt-4 ml-2 font-sans">
                Vi på Odevall Advokatbyrå har under decennier medverkat vid ett
                otal olika affärsuppgörelsen med stor tillfredsställelse för
                alla inblandade parter. Vi häger oss åt era ärenden och har en
                stor förmåga att sätta oss in i er affär, ert behov. Vår långa
                erfarenhet hjälper er och är din trygghet för en lyckad affär.
              </p>
              <button className="border border-black p-2 m-2">
                Kontakta oss här
              </button>
            </AccordionContent>
          </AccordionItem>

          {/* ARBETSRÄTT */}
          <AccordionItem value="arbetsratt">
            <AccordionTrigger className="font-bold ml-2 font-sans">
              ARBETSRÄTT
            </AccordionTrigger>
            <AccordionContent>
              <p className="ml-2 font-sans">
                Kontakta Odevall Advokatbyrå i Göteborg om du behöver hjälp vid
                arbetsrättsliga tvister eller frågor. Vi erbjuder juridisk
                rådgivning angående LAS, uppsägningar och mycket mer.
              </p>
              <p className="mt-4 ml-2 font-sans">
                Följande advokater är särskilt inriktade på arbetsrätt:
              </p>
              <p className="mt-4 ml-2 font-sans">Michael Gibbons</p>
              <p className="mt-4 ml-2 font-sans">
                Arbetsrätt handlar i huvudsak om dig som är arbetstagare i ditt
                förhållande till din arbetsgivare, enklast beskrivet vad du har
                för rättigheter och skyldigheter vid eventuella tvister. Den
                enskilt viktigaste faktorn är framförallt lagen om
                anställningsskydd (LAS) Den reglerar dina rättigheter som
                arbetstagare. Om du arbetar i allmän tjänst som till exempel
                stat, kommun och landsting så är även lagen om offentlig
                anställning (LOA) tillämplig. Utöver dessa finns även
                branschspecifika kollektivavtal man kan söka stöd i om man
                hamnar i tvist med sin arbetsgivare.
              </p>
              <p className="mt-4 ml-2 font-sans">
                Uppsägning är ofta grund till olika konflikter då tolkningar kan
                skilja sig åt beroende på om du blir uppsagd eller om du som
                arbetsgivare ska säga upp någon. Som anställd så har du så som
                texten beskriver ovan såväl rättigheter och skyldigheter mot din
                arbetsgivare. Ett flertal lagar reglerar dessa förhållanden
                främst lagen om anställningsskydd (LAS) men även som vi skrev
                tidigare, genom andra lagar, föreskrifter och avtal. Väldigt
                många arbetsrättsliga tvister handlar om uppsägningar eller
                avskedande. Här kan du som är fackligt ansluten få en hel del
                hjälp av din fackförening. Dock kan problem uppstå då de flesta
                fackföreningar har många medlemmar och inte alltid har det
                engagemang eller den kompetens som krävs för att hjälpa en part
                fullt ut när en tvist uppstår.
              </p>
              <p className="mt-4 ml-2 font-sans">
                De vanligaste skälen till uppsägningar är arbetsbrist eller på
                grund av personliga skäl. Det krävs saklig grund för att en
                uppsägning ska följa lagen. Gör den inte det så kan
                arbetsgivaren bli skyldig att betala skadestånd till
                arbetstagaren. Arbetsbrist är en samlad benämning för
                anledningar som inte hänför sig till arbetstagaren personligen.
                Det vanligaste skälet är att bolaget har behov av att genomgå
                organisatoriska förändringar, hamnar i likviditets eller andra
                resursproblem, eller får behov att strukturera om
                arbetsuppgifter/outsourca för att göra bolaget mer effektivt och
                rustat för framtiden. Organisatoriska skäl som måste genomföras
                för att företagen ska kunna leva vidare kan utgöra saklig grund
                för uppsägning. Personliga skäl för uppsägning i är en samlad
                benämning för skiljande från tjänsten med anledning av händelser
                som beror på arbetstagaren personligen. Exempelvis händelser som
                gör att arbetsgivaren med rätta kan anse att förtroende för
                arbetstagaren är förbrukat kan anses utgöra saklig grund för
                uppsägning. Det kan röra sig om brott mot anställningsavtal
                eller allmän misskötsamhet såsom en rad händelser som var för
                sig betraktas som ringa men tillsammans kan motivera en
                uppsägning. Icke överenskommen frånvaro, samarbetsproblem,
                arbetsvägran eller att flera gånger komma försent är några
                exempel på misskötsamhet som kan utgöra saklig grund för
                uppsägning. Skada kan också leda till sakligt skäl till
                uppsägning men arbetsgivaren måste då i så fall ha utrett och
                uttömt alla möjligheter till en annan lösning innan
                arbetstagaren kan sägas upp. De juridiska termer som reglerar
                arbetsrätten är inte alltid lättbegriplig. Det finns olika
                regler och steg arbetsgivare måste följa för att anställningen
                ska kunna avslutas på ett riktigt sätt. Det kanske enskilt
                viktigaste råd vi kan ge är att agera snabbt om ni behöver hjälp
                för att i arbetsrätten råder snäva tidsfrister för när man måste
                agera. Ett korrekt tillvägagångssätt vid uppsägning år att du
                som arbetstagare har rätt att få veta grunden till varför du
                blivit uppsagd eller avskedad. Själva uppsägningsbeskedet ska
                vara skriftligt och innehålla information om vilka tidsramar du
                ska hålla dig inom för att agera om du anser att uppsägningen
                eller avskedandet är felaktigt. Det är inte ovanligt att
                arbetsgivaren missar att lämna sådan information och det är
                viktigt att inte vänta för länge med att agera eller söka råd. I
                uppsägningstvister är arbetstagaren ofta utsatt trots att det är
                arbetsgivaren som ska bevisa att uppsägningen gått rätt till.
                Därför kan en kontakt med oss betyda stor skillnad, vi har lång
                erfarenhet av arbetsrättsliga frågor och kan på bästa sätt
                hjälpa er.
              </p>
              <button className="border border-black p-2 m-2">
                Kontakta oss här
              </button>
            </AccordionContent>
          </AccordionItem>

          {/* ARVSRÄTT */}
          <AccordionItem value="arvsratt">
            <AccordionTrigger className="font-bold ml-2 font-sans">
              ARVSRÄTT
            </AccordionTrigger>
            <AccordionContent>
              <p className="ml-2 font-sans">
                Kontakta Odevall Advokatbyrå i Göteborg om du behöver hjälp vid
                arvsskiften. Vi erbjuder juridisk rådgivning vid bouppteckningar
                och boutredningar. Vi hjälper också till att ta fram testamenten
                och rådgör i allmänna arvsfrågor.
              </p>
              <p className="mt-4 ml-2 font-sans">
                Följande advokater är särskilt inriktade på arvsrätt:
              </p>
              <p className="mt-4 ml-2 font-sans">Ann-Christin Hemsedahl</p>
              <p className="mt-4 ml-2 font-sans">
                Odevall biträder klienter vid arvsfrågor som hur arv skall
                fördelas, bouppteckningar, boutredningar och när testamenten ska
                skrivas.
              </p>
              <p className="mt-4 ml-2 font-sans">
                Rätt till arv när någon avlider har efterlevande arvingar enligt
                arvsordningen. Utefter släktskapets närhet delas arvingarna
                utöver efterlevande make eller maka, in i tre olika kategorier,
                s.k. arvsklasser. Här nedan följer några utdrag ur lagen som ger
                er kunskap i grova drag om hur Arvsrätten ska tolkas.
              </p>
              <p className="mt-4 ml-2 font-sans">
                Den första arvsklassen, är bröstarvingarna med andra ord
                arvlåtarens barn, bröstarvingarna. Dessa, barn till arvlåtaren
                erhåller lika stor del (arvslott) av det totala arvet. Arvsrätt
                barnbarn: Om något av arvlåtarens barn är avliden men
                efterlämnar i sin tur barn, delar de barnbarnen till arvlåtaren
                på det avlidna barnets arvslott. Varje arvsgren får lika stor
                arvslott.
              </p>
              <p className="mt-4 ml-2 font-sans">
                För arvsrätt syskon och/eller arvsrätt föräldrar gäller
                följande: är arvlåtarens föräldrar och syskon och syskonens barn
                och barnbarn o.s.v. De som är efterlevande i andra arvsklassen
                ärver bara om det inte finns någon efterlevande i första
                arvsklassen. För andra arvsklassen gäller att arvlåtarens far
                och mor får hälften var av arvlåtarens egendom. Är en av
                föräldrarna avliden ska den avlidna förälderns arvslott delas
                lika mellan arvlåtarens syskon. Om dessutom något av arvlåtarens
                syskon har avlidit före arvlåtaren, träder syskonets barn och
                barnbarn o.s.v. i det avlidna syskonets ställe.
              </p>
              <p className="mt-4 ml-2 font-sans">
                Är far- och morföräldrar och deras barn, dvs. farbröder,
                fastrar, morbröder och mostrar, men inte far- och
                morföräldrarnas barnbarn, dvs. arvlåtarens kusiner. Vid kusiner
                är det stopp, de ärver inte. Efterlevande i tredje och sista
                arvsklassen ärver bara om det inte finns någon arvinge i första
                och andra arvsklassen. Allmänna arvsfonden: Om det inte finns
                några arvingar eller något testamente går arvet till den
                allmänna arvsfonden.
              </p>
              <p className="mt-4 ml-2 font-sans">
                Om den som avlider är gift när han eller hon dör, är huvudregeln
                att efterlevande maken ärver hela den avlidnes kvarlåtenskap.
                Har makarna inga gemensamma barn men den avlidna maken
                efterlämnar ”egna” barn (särkullbarn), har den efterlevande
                maken i princip ingen arvsrätt efter sin avlidne make*
                Efterlevande make har inte heller arvsrätt när den make som
                avlidit har testamenterat bort sin kvarlåtenskap. En make kan
                nämligen genom testamente göra den andre maken helt eller delvis
                arvlös. Om den avlidna maken inte har några arvingar i första
                eller andra arvsklassen får efterlevande make kvarlåtenskap med
                full äganderätt. Finns arvingar i första eller andra arvsklassen
                ärver den efterlevande maken kvarlåtenskapen med fri
                förfoganderätt, och arvingar i första eller andra arvsklassen
                har rätt till arv efter det att även denna maken eller makan
                avlidit.
              </p>
              <p className="mt-4 ml-2 font-sans">
                Denn rätt kan beskrivas som en äganderätt med de begränsningar
                att den make som ärver inte får testamentera bort egendom som
                han eller hon ärvt efter den först avlidna maken genom att i sin
                tur upprätta ett eget testamente. Under sin livstid får dock den
                efterlevande maken i stort sett fritt disponera och förbruka den
                ärvda egendomen.
              </p>
              <p className="mt-4 ml-2 font-sans">
                Barn till en avliden make som inte den andra maken också är
                förälder till kallas i arvssammanhang för särkullbarn.
                Särkullbarn har rätt att få ut sitt arv genast och behöver inte
                vänta tills styvföräldern också har avlidit. Har särkullbarnet
                halvsyskon och vill bli behandlat på samma sätt som dem, kan
                särkullbarnet avstå från sitt arv till förmån för styvföräldern
                (efterlevande maken). Särkullbarnet blir då efterarvinge i
                dödsboet efter styvföräldern.
              </p>
              <button className="border border-black p-2 m-2">
                Kontakta oss här
              </button>
            </AccordionContent>
          </AccordionItem>

          {/* AVTAL & KÖPRÄTT */}
          <AccordionItem value="avtal-kopratt">
            <AccordionTrigger className="font-bold ml-2 font-sans">
              AVTAL- & KÖPRÄTT
            </AccordionTrigger>
            <AccordionContent>
              <p className="ml-2 font-sans">
                Kontakta Odevall Advokatbyrå i Göteborg om du behöver hjälp att
                ta fram juridiska avtal. Vi erbjuder rådgivning och bistår med
                vår juridiska expertis vid framtagande av köpehandlingar och
                diverse andra juridiskt bindande avtal.
              </p>
              <p className="mt-4 ml-2 font-sans">
                Följande advokater är särskilt inriktade på köprätt och
                avtalsrätt:
              </p>
              <p className="mt-4 ml-2 font-sans">Jan Ohlsson</p>
              <p className="mt-4 ml-2 font-sans">
                Odevall biträder klienter vid arvsfrågor som hur arv skall
                fördelas, bouppteckningar, boutredningar och när testamenten ska
                skrivas.
              </p>

              <p className="mt-4 ml-2 font-sans">
                Få har längre erfarenhet av detta ämne än Odevall Advokatbyrå
                och det gör att du med förtroende kan vända dig till oss när du
                har ärenden som rör avtal och köprätt. Köplagen är en lag med
                många svårigheter och möjligheter (som de flesta andra lagar).
                Att få erfaren och kunnig juridisk vägledning gör att man
                undviker konflikter samt spar oftast mycket tid, arbete och inte
                minst pengar.
              </p>
              <p className="mt-4 ml-2 font-sans">
                Odevall Advokatbyrå biträder klienter med alla typer av avtal
                och köprättsfrågor som exempelvis : avtal om köp eller
                försäljning av företag eller dess verksamhet, Agentavtal,
                Distributionsavtal, Inköps- och leveransavtal, Licensavtal,
                Samarbetsavtal, Uppdrags- och tjänsteavtal med mera
              </p>
              <p className="mt-4 ml-2 font-sans">
                Det är inte ovanligt att avtal handlar om kompromisser och
                jämkningar mellan vad som går att göra eller vad som är lämpligt
                ur en klients perspektiv, och sedan inte minst vad som är
                nödvändigt juridiskt. Återigen, vår långa erfarenhet hjälper er
                rätt.
              </p>
              <button className="border border-black p-2 m-2">
                Kontakta oss här
              </button>
            </AccordionContent>
          </AccordionItem>
          <p className="text-xl m-3 font-extrabold">MEDARBETARE</p>
          {/* MEDARBETARE - MICHAEL GIBBONS */}
          <AccordionItem value="michael-gibbons">
            <AccordionTrigger className="font-bold ml-2 font-sans">
              MICHAEL GIBBONS
            </AccordionTrigger>
            <AccordionContent className="ml-2 font-sans">
              <h3 className="font-bold mt-2">Inriktning:</h3>
              <p>Affärsjuridik samt bolags- och skatterätt.</p>
              <h3 className="font-bold mt-2">Bakgrund:</h3>
              <p>
                Fördjupade akademiska studier i företagsekonomi samt bolags- och
                skatterätt. Arbete på länsrätt.
              </p>
              <p className="mt-2">
                Verksam vid Odevall Advokatbyrå AB sedan år 1980.
              </p>
              <p className="mt-2">Advokat sedan år 1983.</p>

              <h2 className="text-xl font-bold mt-4 mb-2">Kontakt</h2>
              <h3 className="font-bold">Besöksadress:</h3>
              <p>Södra vägen 12, 412 54 Göteborg</p>
              <p className="font-bold mt-2">Tel:</p>
              <p>+46 (0) 31 20 06 30</p>
              <p className="font-bold mt-2">Fax:</p>
              <p>+46 (0) 31-81 24 98</p>
              <p className="font-bold mt-2">gibbons@odevall-law.se</p>

              <div className="flex justify-center">
                <Image
                  src="/assets/gibbons.png"
                  alt="Michael Gibbons picture"
                  width={300}
                  height={300}
                  className="rounded-xs mt-4 w-[200px] h-[250px]"
                />
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </FadeInSection>
    </div>
  );
}
