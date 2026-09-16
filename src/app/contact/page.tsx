export default function ContactPage() {
  return (
    <div className="min-h-screen bg-stone-50 py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-stone-900 mb-6">Contact Us</h1>
          <p className="text-xl text-stone-600 leading-relaxed">
            We'd love to hear from you. Get in touch with us for reservations, inquiries, or feedback.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100">
            <h2 className="font-serif text-2xl font-bold text-stone-900 mb-6">Send us a message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-stone-700">Name</label>
                  <input type="text" id="name" className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:outline-none focus:ring-2 focus:ring-stone-900" placeholder="Your name" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-stone-700">Phone</label>
                  <input type="tel" id="phone" className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:outline-none focus:ring-2 focus:ring-stone-900" placeholder="Your phone number" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-stone-700">Email</label>
                <input type="email" id="email" className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:outline-none focus:ring-2 focus:ring-stone-900" placeholder="Your email address" />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-stone-700">Message</label>
                <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:outline-none focus:ring-2 focus:ring-stone-900" placeholder="How can we help you?"></textarea>
              </div>
              <button type="submit" className="w-full bg-stone-900 text-white font-medium py-4 rounded-lg hover:bg-stone-800 transition-colors">
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Details & Map */}
          <div className="space-y-12">
            <div>
              <h2 className="font-serif text-2xl font-bold text-stone-900 mb-6">Visit Us</h2>
              <div className="space-y-4 text-stone-600">
                <p className="flex items-start gap-4">
                  <svg className="w-6 h-6 text-stone-900 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  <span>Shop No. B-1, The Malange, near Madhuram Hotel Jakat Naka, Gokul Township, Virar West, Maharashtra 401303</span>
                </p>
                <p className="flex items-center gap-4">
                  <svg className="w-6 h-6 text-stone-900 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                  <span>+91 80078 90850 / 852</span>
                </p>
              </div>
            </div>

            <div className="h-64 bg-stone-200 rounded-3xl overflow-hidden relative">
              {/* Google Maps embed iframe would go here. Using a placeholder for now */}
              <div className="absolute inset-0 flex items-center justify-center text-stone-500">
                Map Embed Placeholder
              </div>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.504260655462!2d72.80208177517684!3d19.458628381861783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7a9f9d2a6b2c3%3A0xc3f8e6552a8dd93!2sCocoa%20Cafe!5e0!3m2!1sen!2sin!4v1705663189912!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
