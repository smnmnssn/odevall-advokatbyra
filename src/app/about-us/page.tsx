import KitchenSinkExample from "../_components/card";

export default function AboutUs() {
  return (
    <div className=" w-full p-3 ">
      <div
        className="text-center mx-auto text-2xl w-65"
      >
        <p>Odevall Advokatbyrå erbjuder hög kompetens</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mx-auto">
        <KitchenSinkExample />
        <KitchenSinkExample />
        <KitchenSinkExample />
        <KitchenSinkExample />
      </div>

    </div>
  );
}
