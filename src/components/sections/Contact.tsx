import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, CheckCircle } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SectionHeader } from '../ui/SectionHeader';
import { HERO_DATA } from '../../data/portfolioData';

const SOCIAL_LINKS = [
  {
    label: 'Email',
    value: HERO_DATA.socials.email,
    href: `mailto:${HERO_DATA.socials.email}`,
    Icon: Mail,
    color: 'hover:bg-teal-600',
  },
  {
    label: 'GitHub',
    value: 'github.com/sekharg62',
    href: HERO_DATA.socials.github,
    Icon: FaGithub,
    color: 'hover:bg-slate-900 dark:hover:bg-slate-700',
  },
  {
    label: 'LinkedIn',
    value: 'sekhar-ghosh-cse26',
    href: HERO_DATA.socials.linkedin,
    Icon: FaLinkedin,
    color: 'hover:bg-[#0A66C2]',
  },
];

export function Contact() {
  const [form, setForm]     = useState({ name: '', email: '', message: '' });
  const [sent, setSent]     = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(p => ({ ...p, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
      setForm({ name: '', email: '', message: '' });
    }, 1200);
  };

  return (
    <section id="contact" className="section-wrap">
      <div className="container-xl">
        <SectionHeader
          label="Contact"
          title="Let's Work Together"
          subtitle="Have a project in mind or just want to say hi? I'd love to hear from you."
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 max-w-5xl mx-auto">

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">Get in touch</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                I'm currently open to freelance projects, internships and full-time opportunities. If you have something interesting, let's talk!
              </p>
            </div>

            <div className="space-y-4">
              {SOCIAL_LINKS.map(({ label, value, href, Icon, color }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className={`w-11 h-11 rounded-xl bg-slate-100 text-slate-600 flex items-center justify-center ${color} group-hover:text-white transition-all duration-300 shrink-0 dark:bg-slate-800 dark:text-slate-300`}>
                    <Icon size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 dark:text-slate-500 font-medium mb-0.5">{label}</p>
                    <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors truncate max-w-[200px]">
                      {value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-4 p-5 bg-teal-50 rounded-2xl border border-teal-100 dark:bg-teal-950/40 dark:border-teal-800">
              <p className="text-xs text-teal-700 dark:text-teal-300 font-semibold uppercase tracking-wider mb-1">Response time</p>
              <p className="text-sm text-teal-800 dark:text-teal-200">Usually within 24 hours 🚀</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-3"
          >
            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-md p-8">
              {sent ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <CheckCircle size={52} className="text-teal-500 mb-4" />
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">Message Sent!</h3>
                  <p className="text-slate-500 dark:text-slate-400 mb-6">Thanks for reaching out. I'll get back to you soon.</p>
                  <button onClick={() => setSent(false)} className="btn btn-secondary">
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-2">Name</label>
                      <input
                        id="name" name="name" type="text"
                        value={form.name} onChange={handleChange} required
                        placeholder="John Doe"
                        className="input-field"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-2">Email</label>
                      <input
                        id="email" name="email" type="email"
                        value={form.email} onChange={handleChange} required
                        placeholder="john@example.com"
                        className="input-field"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-2">Message</label>
                    <textarea
                      id="message" name="message"
                      value={form.message} onChange={handleChange} required
                      rows={5} placeholder="Tell me about your project..."
                      className="input-field resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn btn-primary w-full py-3.5 text-base"
                  >
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <>
                        <Send size={17} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
