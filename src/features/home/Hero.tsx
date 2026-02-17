"use client";
import { useRouter } from "next/navigation";
const Hero = () => {
  const router = useRouter();
  return (
    <section className="relative bg-linear-to-br from-purple-300 via-purple-400 to-pink-400 w-full min-h-[80vh] flex items-center justify-center bg-cover bg-center">
      <div className="relative z-10 text-center px-6 sm:px-8 md:px-12 max-w-4xl mx-auto">
        <h1 className="text-white font-bold leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
          We Create Events People Remember
        </h1>

        {/* Subheadline */}
        <p className="mt-4 text-gray-200 text-base sm:text-lg md:text-xl max-w-2xl mx-auto">
          From weddings to corporate gatherings, we plan, design, and deliver
          events without stress.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <button
            className="px-6 py-3 bg-pink-600 hover:bg-purple-500 text-white rounded-full font-semibold transition duration-300"
            onClick={() => router.push("/auth/register")}
          >
            Plan Your Event
          </button>

          <button className="px-6 py-3 bg-white/10 backdrop-blur border border-white/30 text-white rounded-full font-semibold hover:bg-white/20 transition duration-300">
            View Our Work
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
