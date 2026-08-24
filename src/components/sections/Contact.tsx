import React, { useState } from 'react';
import { personalInfo, socialLinks } from '../../data/portfolioData';
import { formatMailto } from '../../utils/helpers';
import { ScrollReveal } from '../animations/ScrollReveal';
import { Mail, Phone, MapPin, Send, Github, Linkedin, AlertCircle } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  // Validate form fields
  const validateForm = () => {
    const tempErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) tempErrors.name = 'Name is required';
    
    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      tempErrors.email = 'Invalid email address';
    }
    
    if (!formData.subject.trim()) tempErrors.subject = 'Subject is required';
    if (!formData.message.trim()) tempErrors.message = 'Message is required';
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear field-specific error as they type
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Formulate pre-filled email body content
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    const mailtoUrl = formatMailto(personalInfo.email, formData.subject, body);

    setTimeout(() => {
      // Trigger local mail client redirect
      window.location.href = mailtoUrl;
      setIsSubmitting(false);
      setSuccess(true);
      // Reset form
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSuccess(false), 5000);
    }, 800);
  };

  return (
    <section 
      id="contact" 
      className="py-24 px-4 md:px-8 max-w-6xl mx-auto relative"
    >
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-cyber-neon-cyan/5 blur-[120px] pointer-events-none" />

      {/* Header */}
      <ScrollReveal>
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-xl md:text-3xl font-mono tracking-widest uppercase text-gradient-cyan-purple font-bold">
            // CONNECT_NODE
          </h2>
          <div className="h-[1px] w-20 bg-cyber-neon-cyan mt-3" />
        </div>
      </ScrollReveal>

      {/* Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Info Column */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <ScrollReveal direction="left" delay={0.1}>
            <div className="glass-panel p-6 rounded border border-white/5 flex flex-col gap-6">
              <div>
                <h3 className="text-lg md:text-xl font-bold font-mono text-cyber-text-primary uppercase tracking-wide">
                  Let&apos;s Build Something Great Together.
                </h3>
                <p className="text-xs text-cyber-text-secondary mt-3 leading-relaxed">
                  I am open to full-stack, application security, or AI/ML internships. Reach out to collaborate on secure and intelligent applications!
                </p>
              </div>

              {/* Contact Detail Nodes */}
              <div className="flex flex-col gap-4 font-mono text-xs border-t border-white/5 pt-6">
                <div className="flex items-center gap-3.5 text-cyber-text-secondary">
                  <span className="w-8 h-8 rounded-full bg-cyber-neon-cyan/10 border border-cyber-neon-cyan/20 flex items-center justify-center text-cyber-neon-cyan shrink-0">
                    <Mail size={14} />
                  </span>
                  <div>
                    <span className="text-[8px] text-cyber-text-muted block uppercase">Secure Email</span>
                    <a href={socialLinks.email} className="hover:text-cyber-neon-cyan transition-colors select-all">
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 text-cyber-text-secondary">
                  <span className="w-8 h-8 rounded-full bg-cyber-neon-purple/10 border border-cyber-neon-purple/20 flex items-center justify-center text-cyber-neon-purple shrink-0">
                    <Phone size={14} />
                  </span>
                  <div>
                    <span className="text-[8px] text-cyber-text-muted block uppercase">Secure Comms</span>
                    <a href={socialLinks.phone} className="hover:text-cyber-neon-purple transition-colors select-all">
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 text-cyber-text-secondary">
                  <span className="w-8 h-8 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                    <MapPin size={14} />
                  </span>
                  <div>
                    <span className="text-[8px] text-cyber-text-muted block uppercase">Location</span>
                    <span className="text-cyber-text-primary">{personalInfo.location}</span>
                  </div>
                </div>
              </div>

              {/* Inline socials list for mobile/footer fallback */}
              <div className="flex gap-3 border-t border-white/5 pt-6">
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded bg-white/[0.02] hover:bg-white/[0.06] border border-white/5 flex items-center justify-center text-cyber-text-secondary hover:text-cyber-text-primary transition-all duration-300"
                  aria-label="GitHub Profile"
                >
                  <Github size={14} />
                </a>
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded bg-white/[0.02] hover:bg-white/[0.06] border border-white/5 flex items-center justify-center text-cyber-text-secondary hover:text-cyber-text-primary transition-all duration-300"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={14} />
                </a>
              </div>

            </div>
          </ScrollReveal>
        </div>

        {/* Form Column */}
        <div className="lg:col-span-7">
          <ScrollReveal direction="right" delay={0.2}>
            <form 
              onSubmit={handleSubmit}
              className="glass-panel p-6 rounded border border-white/5 flex flex-col gap-4 font-mono text-xs"
              noValidate
            >
              {/* Row 1: Name and Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-cyber-text-secondary uppercase tracking-widest text-[9px] font-bold">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full bg-[#030712]/50 border rounded px-3 py-2.5 text-cyber-text-primary focus:outline-none transition-colors ${
                      errors.name ? 'border-red-500/50 focus:border-red-500' : 'border-white/5 focus:border-cyber-neon-cyan/50'
                    }`}
                    placeholder="John Doe"
                    disabled={isSubmitting}
                  />
                  {errors.name && <span className="text-[9px] text-red-400 mt-0.5">{errors.name}</span>}
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-cyber-text-secondary uppercase tracking-widest text-[9px] font-bold">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full bg-[#030712]/50 border rounded px-3 py-2.5 text-cyber-text-primary focus:outline-none transition-colors ${
                      errors.email ? 'border-red-500/50 focus:border-red-500' : 'border-white/5 focus:border-cyber-neon-cyan/50'
                    }`}
                    placeholder="john@example.com"
                    disabled={isSubmitting}
                  />
                  {errors.email && <span className="text-[9px] text-red-400 mt-0.5">{errors.email}</span>}
                </div>
              </div>

              {/* Subject */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="subject" className="text-cyber-text-secondary uppercase tracking-widest text-[9px] font-bold">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full bg-[#030712]/50 border rounded px-3 py-2.5 text-cyber-text-primary focus:outline-none transition-colors ${
                    errors.subject ? 'border-red-500/50 focus:border-red-500' : 'border-white/5 focus:border-cyber-neon-cyan/50'
                  }`}
                  placeholder="Internship opportunity"
                  disabled={isSubmitting}
                />
                {errors.subject && <span className="text-[9px] text-red-400 mt-0.5">{errors.subject}</span>}
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-cyber-text-secondary uppercase tracking-widest text-[9px] font-bold">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`w-full bg-[#030712]/50 border rounded px-3 py-2.5 text-cyber-text-primary focus:outline-none transition-colors resize-none ${
                    errors.message ? 'border-red-500/50 focus:border-red-500' : 'border-white/5 focus:border-cyber-neon-cyan/50'
                  }`}
                  placeholder="Hey Manikanta, let's connect..."
                  disabled={isSubmitting}
                />
                {errors.message && <span className="text-[9px] text-red-400 mt-0.5">{errors.message}</span>}
              </div>

              {/* Redirect Note */}
              <div className="flex items-start gap-2 bg-white/[0.01] border border-white/5 p-3 rounded text-[9px] text-cyber-text-muted leading-relaxed">
                <AlertCircle size={14} className="text-cyber-neon-cyan shrink-0 mt-0.5" />
                <span>FORM REDIRECT NOTE: This form validates client-side and opens your local mail client with pre-filled details to send securely.</span>
              </div>

              {/* Submit button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex items-center justify-center gap-2 w-full py-3 rounded text-xs font-bold uppercase tracking-wider text-cyber-bg bg-cyber-neon-cyan hover:bg-cyber-neon-cyan/90 hover:shadow-glow-cyan/50 transition-all duration-300 disabled:opacity-50"
              >
                {isSubmitting ? 'Opening Mail Client...' : 'Send Transmission'}
                <Send size={12} />
              </button>

              {/* Success Notification */}
              {success && (
                <div className="text-[10px] text-center text-cyber-neon-green bg-cyber-neon-green/10 border border-cyber-neon-green/20 p-2.5 rounded">
                  Success! Launching default mail client...
                </div>
              )}
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
export default Contact;
