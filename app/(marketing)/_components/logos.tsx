import Marquee from "components/ui/marquee";
import Image from "next/image";

const companies = [
  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIOj-PJ7_F-RpOkFwiIxrvgue_UDHs_lJbyQ&s",
    name: "Oxford",
  },
  {
    logo: "https://i0.wp.com/thecustodian.ca/wp-content/uploads/2022/02/waterloo.png?fit=600%2C600&ssl=1",
    name: "Waterloo",
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/en/b/b9/NUS_coat_of_arms.svg",
    name: "NUS",
  },
];

export function Logos() {
  return (
    <section id="logos">
      <div className="container mx-auto px-4 py-12 md:px-8">
        <h3 className="text-center font-semibold text-gray-500 text-sm">
          With a team you can trust
        </h3>
        <div className="relative mt-6">
          <Marquee className="max-w-full [--duration:40s]" repeat={6}>
            {companies.map(({ logo, name }) => (
              <Image
                key={name}
                width={56}
                height={56}
                src={logo}
                className="h-16 w-16 opacity-40 grayscale"
                alt={name}
              />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 right-0 left-0 h-full bg-gradient-to-r from-background via-transparent to-background" />
        </div>
      </div>
    </section>
  );
}
