import {Separator} from "@/components/ui/separator";

export default function ServicesSection() {
  const services = [
    {
      title: "Affärsjuridik",
      image: "https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/meeting1.jpg",
    },
    {
      title: "Arbetsrätt",
      image: "https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/meeting2.jpg",
    },
    {
      title: "Arvsrätt",
      image: "https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/meeting3.jpg",
    },
    {
      title: "Avtal- & Köprätt",
      image: "https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/meeting4.jpg",
    },
    {
      title: "Avtal- & Köprätt",
      image: "https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/meeting4.jpg",
    },
    {
      title: "Avtal- & Köprätt",
      image: "https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/meeting4.jpg",
    },
    {
      title: "Avtal- & Köprätt",
      image: "https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/meeting4.jpg",
    },
    {
      title: "Avtal- & Köprätt",
      image: "https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/meeting4.jpg",
    },
  ];

  return (
    <section
      id="services-1354"
      className="relative z-10 px-6 py-20"
    >
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center gap-[clamp(3rem,6vw,4rem)]">
        <div className="w-full flex flex-col items-center text-center lg:items-start lg:text-left">
          <h2 className="max-w-[25ch] m-0 text-3xl font-bold mx-auto">
            Rättsområden
          </h2>
        </div>
        <ul className="w-full grid grid-cols-12 gap-[clamp(1rem,2vw,1.25rem)]">
          {services.map((service, index) => (
            <li
              key={index}
              className="list-none w-full h-[19.0625rem] bg-black rounded-1 overflow-hidden shadow-[0px_12px_80px_rgba(26,26,26,0.08)] col-span-12 sm:col-span-6 lg:col-span-3 flex flex-col justify-end items-start relative z-[1]"
            >
              <a
                href="#"
                className="w-full h-full p-6 flex justify-center items-center box-border relative z-10"
              >
                <h3 className="text-white text-[1.5625rem] leading-[1.2] font-bold m-0">
                  <span className="block">
                    {service.title.split(" ")[0]}
                  </span>{" "}
                  {service.title.split(" ").slice(1).join(" ")}
                </h3>
              </a>
              <picture className="absolute top-0 left-0 w-full h-full z-[-1] filter grayscale">
                <source media="(max-width: 600px)" srcSet={service.image} />
                <source media="(min-width: 601px)" srcSet={service.image} />
                <img
                  decoding="async"
                  src={service.image}
                  alt="Service background"
                  className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  aria-hidden="true"
                />
                <span className="absolute inset-0 bg-black opacity-40 transition-all duration-300 group-hover:opacity-85 group-hover:bg-primary" />
              </picture>
            </li>
          ))}
        </ul>
      </div>
      <Separator className="mt-5 mx-auto" />
    </section>
  );
}