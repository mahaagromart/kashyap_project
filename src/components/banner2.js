import Image from "next/image";
import img from "../app/assets/img/farmer.webp";

export default function BannerPage() {
  return (
    <main className="mx-auto mt-8 px-6 py-6">
      <section className="relative text-white py-32 w-full">
        <Image
          src={img}
          alt="Background banner"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 z-0"
        />
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative z-10 mx-auto px-6 text-center">
          <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight mb-6 text-white">
            Welcome to Our Service
          </h1>
          <p className="text-lg lg:text-xl mb-10 max-w-2xl mx-auto text-white">
            Empowering farmers with the best solutions for sustainable growth.
          </p>
          <button className="bg-green-400 text-white py-4 px-8 rounded-full text-lg font-semibold hover:bg-green-500 transition duration-300">
            Learn More
          </button>
        </div>
      </section>
    </main>
  );
}
