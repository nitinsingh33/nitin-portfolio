import  { useState } from "react";
import { Send, MapPin, Mail, Phone, Clock, MessageCircle, Github, Linkedin, Twitter } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);

  const validateForm = () => {
    let tempErrors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      tempErrors.name = "Name is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is invalid";
      isValid = false;
    }

    if (!formData.subject.trim()) {
      tempErrors.subject = "Subject is required";
      isValid = false;
    }

    if (!formData.message.trim()) {
      tempErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      setStatus("Please fill in all required fields correctly.");
      return;
    }

    const form = new FormData();
    form.append("access_key", "2daaa31b-f6c5-4570-91de-f86190d3b1b0");
    form.append("name", formData.name);
    form.append("email", formData.email);
    form.append("subject", formData.subject || "New Contact Form Submission");
    form.append("message", formData.message);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: form,
      });

      const result = await response.json();
      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setErrors({});
      } else {
        setStatus(result.message || "There was an error sending your message.");
      }
    } catch (error) {
      console.error(error);
      setStatus("An error occurred. Please try again.");
    }
  };

  return (
    <section className="min-h-screen relative overflow-hidden py-20 bg-[#04081A]">
      {/* Grid Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:50px_50px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#04081A] via-transparent to-[#04081A]" />
      </div>
      
      {/* Gradient Blur Effects */}
      <div className="absolute inset-0 blur-[80px] bg-gradient-to-tr from-blue-900/30 via-sky-700/20 to-cyan-700/10 z-0" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent mb-6">
            Get in Touch
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let&#39;s discuss your next project and create something amazing together.
          </p>
        </motion.div>

        {/* Availability Status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex justify-center mb-12"
        >
          <div className="bg-green-500/10 border border-green-500/30 rounded-full px-6 py-3 flex items-center gap-2">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-green-400 font-medium">Available for new projects</span>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              {/* Enhanced Email Contact */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="flex items-center space-x-4 p-4 rounded-xl bg-gray-900/30 backdrop-blur-sm border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 hover:scale-105"
              >
                <div className="bg-cyan-600/10 p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Email</h3>
                  <p className="text-gray-400">nitinsingh.iitp@gmail.com</p>
                  <p className="text-sm text-cyan-400">Response within 24 hours</p>
                </div>
              </motion.div>

              {/* Enhanced Location */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="flex items-center space-x-4 p-4 rounded-xl bg-gray-900/30 backdrop-blur-sm border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 hover:scale-105"
              >
                <div className="bg-blue-600/10 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Location</h3>
                  <p className="text-gray-400">Gurugram, Haryana -122001</p>
                  <p className="text-sm text-blue-400">Open to remote work</p>
                </div>
              </motion.div>

              {/* Phone Contact */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="flex items-center space-x-4 p-4 rounded-xl bg-gray-900/30 backdrop-blur-sm border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:scale-105"
              >
                <div className="bg-purple-600/10 p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Phone</h3>
                  <p className="text-gray-400">+91 9876543210</p>
                  <p className="text-sm text-purple-400">Available 9 AM - 6 PM IST</p>
                </div>
              </motion.div>

              {/* Quick Response Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/30 rounded-xl p-4"
              >
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-5 h-5 text-emerald-400" />
                  <h3 className="font-semibold text-white">Quick Response</h3>
                </div>
                <p className="text-gray-300 text-sm">
                  I typically respond to emails within 2-4 hours during business days. 
                  For urgent matters, feel free to connect on LinkedIn.
                </p>
              </motion.div>

              {/* Social Media Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="space-y-4"
              >
                <h3 className="text-xl font-semibold text-white">Connect with me</h3>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/nitinsingh33"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-gray-900/50 hover:bg-gray-800/80 border border-gray-700 hover:border-gray-500 p-3 rounded-lg transition-all duration-300 hover:scale-110"
                  >
                    <Github className="w-6 h-6 text-gray-400 group-hover:text-white" />
                  </a>
                  <a
                    href="https://linkedin.com/in/nitinsingh33"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-blue-900/50 hover:bg-blue-800/80 border border-blue-700 hover:border-blue-500 p-3 rounded-lg transition-all duration-300 hover:scale-110"
                  >
                    <Linkedin className="w-6 h-6 text-blue-400 group-hover:text-blue-300" />
                  </a>
                  <a
                    href="https://twitter.com/nitinsingh33"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-sky-900/50 hover:bg-sky-800/80 border border-sky-700 hover:border-sky-500 p-3 rounded-lg transition-all duration-300 hover:scale-110"
                  >
                    <Twitter className="w-6 h-6 text-sky-400 group-hover:text-sky-300" />
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-green-900/50 hover:bg-green-800/80 border border-green-700 hover:border-green-500 p-3 rounded-lg transition-all duration-300 hover:scale-110"
                  >
                    <MessageCircle className="w-6 h-6 text-green-400 group-hover:text-green-300" />
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
 
          {/* Contact Form */}
          <motion.div
            className="backdrop-blur-xl bg-[#111827]/60 border border-white/10 p-8 rounded-2xl shadow-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {["name", "email", "subject", "message"].map((field) => (
                <div key={field}>
                  {field !== "message" ? (
                    <input
                      type={field === "email" ? "email" : "text"}
                      placeholder={`Your ${field.charAt(0).toUpperCase() + field.slice(1)}`}
                      className={`w-full px-4 py-3 rounded-lg bg-[#0f172a] border transition-all duration-300 ${
                        errors[field] 
                          ? "border-red-500 focus:border-red-400 focus:shadow-lg focus:shadow-red-500/20" 
                          : "border-gray-700 focus:border-blue-500 focus:shadow-lg focus:shadow-blue-500/20 hover:border-gray-600"
                      } focus:outline-none hover:scale-[1.02] focus:scale-[1.02]`}
                      value={formData[field]}
                      onChange={(e) =>
                        setFormData({ ...formData, [field]: e.target.value })
                      }
                    />
                  ) : (
                    <textarea
                      placeholder="Your Message"
                      rows="4"
                      className={`w-full px-4 py-3 rounded-lg bg-[#0f172a] border transition-all duration-300 resize-none ${
                        errors.message 
                          ? "border-red-500 focus:border-red-400 focus:shadow-lg focus:shadow-red-500/20" 
                          : "border-gray-700 focus:border-blue-500 focus:shadow-lg focus:shadow-blue-500/20 hover:border-gray-600"
                      } focus:outline-none hover:scale-[1.02] focus:scale-[1.02]`}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                    ></textarea>
                  )}
                  {errors[field] && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors[field]}
                    </p>
                  )}
                </div>
              ))}

              <button
                type="submit"
                className="group w-full bg-gray-900/80 border border-gray-700/50 text-gray-200 py-3.5 px-6 rounded-xl font-medium flex items-center justify-center space-x-2 hover:bg-gray-800/90 hover:border-gray-600/60 hover:text-white hover:shadow-lg hover:shadow-gray-900/50 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-gray-500/40 focus:border-gray-500/60 backdrop-blur-sm"
              >
                <span className="relative">Send Message</span>
                <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
              </button>
            </form>

            {status && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className={`mt-4 text-center p-3 rounded-lg border ${
                  status.includes("success")
                    ? "text-green-400 bg-green-500/10 border-green-500/30"
                    : "text-red-400 bg-red-500/10 border-red-500/30"
                }`}
              >
                <p className="font-medium">{status}</p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
