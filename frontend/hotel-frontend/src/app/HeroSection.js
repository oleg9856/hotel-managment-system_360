import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center text-center">
      <Image
        src="/images/zeus-statue.jpg"
        alt="Neo-Avant-Garde Sculpture"
        layout="fill"
        objectFit="cover"
        className="opacity-50"
      />
      <div className="absolute z-10">
        <h1 className="text-6xl sm:text-8xl font-extrabold text-white">
          Fall of Zeus
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-gray-300">
          A fusion of classical art and digital futurism.
        </p>
        <a
          href="#guests"
          className="mt-8 inline-block bg-orange-500 text-white px-6 py-3 rounded-full text-lg hover:bg-orange-600"
        >
          Learn More
        </a>
      </div>
    </section>
  );
}