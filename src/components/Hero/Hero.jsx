
export default function Hero() {
  return (
    <section className="bg-[#F7F1EA] px-[7%] py-16 md:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">

        {/* Left: Hero Content */}
        <div>
          <p className="mb-5 text-sm font-medium uppercase tracking-[4px] text-[#A78B76]">
            Beauty • Elegance • Confidence
          </p>

          <h1 className="mb-6 text-5xl font-semibold leading-tight text-[#332820] md:text-6xl">
            Your Nails,
            <br />
            Your <span className="italic text-[#A78B76]">Signature.</span>
          </h1>

          <p className="mb-8 max-w-md text-base leading-8 text-[#6E5548]">
            Experience beautiful nail artistry designed to make
            every detail feel special. Your moment of luxury starts here.
          </p>

          <div className="flex flex-wrap items-center gap-5">
            <a
              href="#booking"
              className="bg-[#6E5548] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#332820]"
            >
              Book Appointment
            </a>

            <a
              href="#services"
              className="text-sm font-medium text-[#332820] underline underline-offset-4"
            >
              Explore Services
            </a>
          </div>
        </div>

        {/* Right: Hero Image */}
        
<div className="relative h-[420px] md:h-[600px]">
  <img
    src="/images/NT1.png"
    alt="Luxury nude French tip manicure"
    className="h-full w-full object-cover object-center
    [mask-image:linear-gradient(to_right,transparent_0%,black_22%,black_100%)]"
  />
</div>


      </div>
    </section>
  );
}
