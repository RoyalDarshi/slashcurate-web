import { useState } from "react";
import { Mail, Phone, Send } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [focused, setFocused] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`;
    window.location.href = `mailto:sales@slashcurate.com?subject=Contact Request&body=${encodeURIComponent(
      body,
    )}`;
  };

  return (
    <section id="contact" className="py-28 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left side - Contact info */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Let's Talk
            </h2>
            <p className="text-xl text-slate-300 leading-relaxed mb-12">
              Tell us about your project. We'll get back to you within 24 hours 
              with next steps.
            </p>

            {/* Contact methods */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <div className="text-sm font-medium text-slate-400 mb-1">
                    Email
                  </div>
                  <a
                    href="mailto:sales@slashcurate.com"
                    className="text-white hover:text-blue-400 transition-colors"
                  >
                    sales@slashcurate.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <div className="text-sm font-medium text-slate-400 mb-1">
                    Phone
                  </div>
                  <a
                    href="tel:+911204545975"
                    className="text-white hover:text-blue-400 transition-colors"
                  >
                    +91-120-4545-975
                  </a>
                </div>
              </div>
            </div>

            {/* Additional info */}
            <div className="mt-12 p-6 rounded-xl bg-white/[0.02] border border-white/10">
              <h3 className="text-lg font-bold text-white mb-3">
                What Happens Next?
              </h3>
              <ol className="space-y-3 text-slate-300">
                <li className="flex gap-3">
                  <span className="text-blue-400 font-bold">1.</span>
                  <span>We'll review your requirements and schedule a call</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-400 font-bold">2.</span>
                  <span>We'll discuss your project scope and timeline</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-400 font-bold">3.</span>
                  <span>We'll provide a detailed proposal and next steps</span>
                </li>
              </ol>
            </div>
          </div>

          {/* Right side - Contact form */}
          <div>
            <form
              onSubmit={handleSubmit}
              className="p-8 rounded-2xl bg-white/[0.02] border border-white/10"
            >
              <div className="space-y-6">
                {/* Name input */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-slate-400 mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    onFocus={() => setFocused("name")}
                    onBlur={() => setFocused(null)}
                    placeholder="John Doe"
                    required
                    className={`w-full px-4 py-3 rounded-xl bg-white/5 border ${
                      focused === "name"
                        ? "border-blue-500/50"
                        : "border-white/10"
                    } text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/50 transition-colors`}
                  />
                </div>

                {/* Email input */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-slate-400 mb-2"
                  >
                    Work Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    onFocus={() => setFocused("email")}
                    onBlur={() => setFocused(null)}
                    placeholder="john@company.com"
                    required
                    className={`w-full px-4 py-3 rounded-xl bg-white/5 border ${
                      focused === "email"
                        ? "border-blue-500/50"
                        : "border-white/10"
                    } text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/50 transition-colors`}
                  />
                </div>

                {/* Message textarea */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-slate-400 mb-2"
                  >
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    onFocus={() => setFocused("message")}
                    onBlur={() => setFocused(null)}
                    placeholder="Tell us about your project, timeline, and any specific requirements..."
                    rows={6}
                    required
                    className={`w-full px-4 py-3 rounded-xl bg-white/5 border ${
                      focused === "message"
                        ? "border-blue-500/50"
                        : "border-white/10"
                    } text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/50 transition-colors resize-none`}
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full group flex items-center justify-center gap-2 px-6 py-4 bg-white text-slate-900 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20"
                >
                  Send Message
                  <Send className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                </button>

                <p className="text-sm text-slate-500 text-center">
                  We typically respond within 24 hours during business days
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
