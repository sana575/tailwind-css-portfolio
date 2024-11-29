import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="bg-black bg-opacity-35 text-white mt my-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 lg:p-12">
        
        {/* Left side */}
        <div className="col-span-1 lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
           <h1 className="text-orange-700 mb-2 text-3xl sm:text-4xl lg:text-6xl font-extrabold animate-bounce">
            Hello,
          </h1>
          <h2 className="text-white mb-4 text-3xl sm:text-4xl lg:text-6xl font-extrabold">
              I&apos;m a Full-Stack Developer
          </h2> 



          <p className="text-gray-100 text-base sm:text-lg lg:text-xl mb-6">
          Crafting seamless digital experiences is my specialty. With a strong foundation in both front-end and back-end technologies, I bring ideas to life with intuitive, dynamic, and engaging web applications. Let s work together to turn your vision into a vibrant, functional reality.
          </p>
          <button className="bg-gradient-to-r from-orange-700 to-black-500 text-white py-2 px-6 rounded-md mt-4 shadow-lg hover:from-orange-700 hover:to-orange-500 transition-transform duration-300">
            <ul>
              <li>
                <Link href="/contact"> Contact Us</Link>
              </li>
            </ul>
          </button>
        </div>
        
        {/* Right side */}
        <div className="col-span-1 lg:col-span-5 flex justify-center lg:justify-end">
          <div className="w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px] rounded-md overflow-hidden transition-transform duration-300 hover:scale-105">
            <Image src="/my-image.jpg" alt="Sana Image" width={300} height={400} className="rounded-lg" />
          </div>
        </div>
        
      </div>
    </section>
  );
}
