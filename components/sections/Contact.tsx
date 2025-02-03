"use client";

export default function Contact() {
  return (
    <section className="py-16 text-center text-gray-900 bg-gray-100">
      <h2 className="text-3xl font-bold">Get in Touch</h2>
      <p className="mt-4">Send us a message.</p>
      <form className="max-w-md mx-auto mt-6 space-y-4">
        <input type="text" placeholder="Your Name" className="w-full p-2 border border-gray-300 rounded" />
        <input type="email" placeholder="Your Email" className="w-full p-2 border border-gray-300 rounded" />
        <textarea placeholder="Your Message" className="w-full p-2 border border-gray-300 rounded" rows={4}></textarea>
        <button type="submit" className="w-full p-2 text-white bg-gray-900 rounded">Send Message</button>
      </form>
    </section>
  );
}
