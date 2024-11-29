import Image from "next/image";

export default function ContactForm() {
  return (
    <section className="flex flex-col items-center">
      <div>
        <h2 className="text-4xl font-bold text-white mb-4 animate-bounce">Contact Us</h2>
      </div>
      {/* Form Container */}
      <form className="flex flex-col md:flex-row items-center w-full max-w-4xl p-6 bg-black bg-opacity-35 shadow-lg rounded-md">
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center items-center p-4">
          <Image
            src="/image-5.jpg"
            alt="image"
            className="rounded-md shadow-lg duration-300 hover:scale-105"
            width={500}
            height={500}
          />
        </div>

        {/* Form Inputs Section */}
        <div className="w-full md:w-1/2 flex flex-col p-4 space-y-4 bg-orange-950">
          <input
            type="text"
            placeholder="First Name"
            className="w-full text-lg px-4 py-2 rounded shadow-md outline-none"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="w-full text-lg px-4 py-2 rounded shadow-md outline-none"
          />
          <input
            type="email"
            placeholder="E-Mail"
            className="w-full text-lg px-4 py-2 rounded shadow-md outline-none"
          />
          <input
            type="tel"
            placeholder="Contact No."
            className="w-full text-lg px-4 py-2 rounded shadow-md outline-none"
          />
          <textarea
            placeholder="Your Message"
            className="w-full text-lg px-4 py-2 rounded shadow-md outline-none min-h-[100px]"
          ></textarea>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-gradient-to-r from-orange-700 to-black text-white py-2 px-4 font-medium uppercase rounded shadow-lg hover:from-orange-700 hover:to-orange-500"
          >
            Send Message
          </button>
        </div>
      </form>
    </section>
  );
}
