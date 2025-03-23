import KitchenSinkExample from "../_components/card";

export default function AboutUs() {
  const bgImage = "/assets/bgImage.jpg";
  return (
    <div className="grid grid-cols-1 w-full p-3 ">
      <div
        className="text-center mx-auto text-2xl w-65
"
      >
        <p>Odevall Advokatbyrå erbjuder hög kompetens</p>
      </div>
      <div className="flex flex-col gap-5 w-xl mx-auto ">
        <KitchenSinkExample />
        <KitchenSinkExample />
      </div>
      <div>
        <p>
          Det här är Odevall Advokatbyrå i Göteborg Såväl företag som
          privatpersoner som anlitar oss är ofta framgångsrika i sin verksamhet
          och i det de gör. De ställer höga krav på servicenivå och ser oss som
          en självklar partner för att lyckas. Med vårt engagemang, vår
          tillgänglighet och vår erfarenhet tillsammans med god förberedelse
          skapas en hög kvalitet på de förhandlingar som förs och på de avtal
          som ingås. En väl etablerad relation med Odevall Advokatbyrå
          säkerställer en trygg hantering av alla de tvister som kan förekomma.
          De som anlitar oss kommer oftast från Göteborg och Västra Götaland men
          vi bistår alla, från hela Sverige, Europa och övriga världen.
        </p>
      </div>
    </div>
  );
}
