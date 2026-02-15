import { Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // EmailJS Configuration - Replace these with your actual credentials
  const EMAILJS_CONFIG = {
    serviceID: 'YOUR_SERVICE_ID',      // Replace with your EmailJS service ID
    templateID: 'YOUR_TEMPLATE_ID',    // Replace with your EmailJS template ID
    publicKey: 'YOUR_PUBLIC_KEY'       // Replace with your EmailJS public key
  };

  // Set this to true to use EmailJS, false to use mailto fallback
  const USE_EMAILJS = false; // Change to true after setting up EmailJS

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (USE_EMAILJS) {
      // EmailJS Implementation
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'support@evermob.com'
      };

      try {
        const response = await emailjs.send(
          EMAILJS_CONFIG.serviceID,
          EMAILJS_CONFIG.templateID,
          templateParams,
          EMAILJS_CONFIG.publicKey
        );
        
        console.log('SUCCESS!', response.status, response.text);
        alert('Message sent successfully! We will get back to you soon.');
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      } catch (error) {
        console.error('FAILED...', error);
        alert('Failed to send message. Please try again or email us directly at support@evermob.com');
      } finally {
        setIsSubmitting(false);
      }
    } else {
      // Mailto Fallback Implementation
      const subject = `Contact Form: Message from ${formData.name}`;
      const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
      
      // Open user's default email client
      window.location.href = `mailto:support@evermob.com?subject=${encodeURIComponent(subject)}&body=${body}`;
      
      // Show confirmation
      alert('Your default email client will open. Please send the email from there.');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 px-4 relative bg-gradient-to-b from-slate-50 to-white overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-100/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-100/30 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium mb-4">
            Get In Touch
          </span>

          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
            Ready to <span className="bg-gradient-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent">Scale Your App?</span>
          </h2>

          <p className="text-slate-600 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve explosive growth. Book a free strategy call with our team.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* LEFT SIDE - Contact Info */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-slate-900">
              Contact Information
            </h3>

            <div className="space-y-6">
              
              {/* Email */}
              <div className="flex items-start space-x-4 group">
                <div className="p-3 rounded-full bg-gradient-to-br from-indigo-100 to-indigo-200 group-hover:from-indigo-500 group-hover:to-indigo-600 transition-all duration-300">
                  <Mail className="h-6 w-6 text-indigo-600 group-hover:text-white transition" />
                </div>
                <div>
                  <h4 className="font-medium text-slate-900">Email</h4>
                  <a
                    href="mailto:support@evermob.com"
                    className="text-slate-600 hover:text-indigo-600 transition-colors"
                  >
                    support@evermob.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4 group">
                <div className="p-3 rounded-full bg-gradient-to-br from-purple-100 to-purple-200 group-hover:from-purple-500 group-hover:to-purple-600 transition-all duration-300">
                  <Phone className="h-6 w-6 text-purple-600 group-hover:text-white transition" />
                </div>
                <div>
                  <h4 className="font-medium text-slate-900">Phone</h4>
                  <a
                    href="tel:+15196978494"
                    className="text-slate-600 hover:text-purple-600 transition-colors"
                  >
                    +1 519 697-8494
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start space-x-4 group">
                <div className="p-3 rounded-full bg-gradient-to-br from-indigo-100 to-cyan-100 group-hover:from-indigo-500 group-hover:to-cyan-500 transition-all duration-300">
                  <MapPin className="h-6 w-6 text-indigo-600 group-hover:text-white transition" />
                </div>
                <div>
                  <h4 className="font-medium text-slate-900">Location</h4>
                  <p className="text-slate-600">
                    Adelaide St N, London, ON N6B 3J5, Canada
                  </p>
                </div>
              </div>

            </div>

            {/* Socials */}
            <div className="pt-8">
              <h4 className="font-medium mb-4 text-slate-900">
                Connect With Us
              </h4>
              <div className="flex space-x-4">
                <a 
                  href="https://www.linkedin.com/company/evermob/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-slate-100 hover:bg-indigo-500 flex items-center justify-center transition-all duration-300 group"
                >
                  <Linkedin className="w-5 h-5 text-slate-600 group-hover:text-white transition" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE - Contact Form */}
          <motion.div 
            className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-8 text-slate-900">
              Send a Message
            </h3>

            <form className="space-y-6" onSubmit={handleSubmit}>
              
              {/* Name Input */}
              <div>
                <label className="block text-sm font-semibold mb-2 text-slate-900">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-slate-50 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                  placeholder="ABC"
                />
              </div>

              {/* Email Input */}
              <div>
                <label className="block text-sm font-semibold mb-2 text-slate-900">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-slate-50 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                  placeholder="abc@gmail.com"
                />
              </div>

              {/* Message Textarea */}
              <div>
                <label className="block text-sm font-semibold mb-2 text-slate-900">
                  Your Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-slate-50 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none transition"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 text-white font-semibold text-base hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.02]"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={18} />
              </button>

              {/* Info text based on mode */}
              {!USE_EMAILJS && (
                <p className="text-sm text-slate-500 text-center">
                </p>
              )}

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};