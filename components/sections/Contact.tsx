"use client";

export default function Contact() {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-white to-gray-50">
      <div 
        className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-5"
        aria-hidden="true"
      />
      <div className="relative text-center text-gray-900">
      <h2 className="text-3xl font-bold">Get in Touch</h2>
      <p className="mt-4">Send us a message.</p>
      <form className="relative max-w-md mx-auto mt-6 space-y-4">
        <input type="text" placeholder="Your Name" className="w-full p-2 border border-gray-300 rounded" />
        <input type="email" placeholder="Your Email" className="w-full p-2 border border-gray-300 rounded" />
        <textarea placeholder="Your Message" className="w-full p-2 border border-gray-300 rounded" rows={4} />
        <button type="submit" className="w-full p-2 text-white bg-primary hover:bg-primary/90 rounded transition-colors">Send Message</button>
      </form>
      </div>
    </section>
  );
}
