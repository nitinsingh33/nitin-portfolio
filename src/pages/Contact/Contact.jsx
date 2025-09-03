import  { useState } from "react";
import { Send, MapPin, Mail } from "lucide-react";
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
    <main className="pt-0 bg-[#0c0f1a] text-white min-h-screen relative">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#0a0f1c] to-[#0f172a] opacity-80 z-0" />
      <div className="absolute inset-0 blur-[80px] bg-gradient-to-tr from-blue-900/30 via-sky-700/20 to-cyan-700/10 z-0" />

      <section className="hero min-h-screen flex items-center relative px-4 sm:px-6 lg:px-8 z-10">
        <div className="container mx-auto">
          <motion.div
            className="grid lg:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Get in Touch
                </h2>
                <p className="text-gray-200 text-lg">
                  I&#39;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-cyan-600/10 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-gray-400">nitinsingh.iitp@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-blue-600/10 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Location</h3>
                    <p className="text-gray-400">Gurugram, Haryana -122001</p>
                  </div>
                </div>
              </div>
            </div>
 
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
                  className="group w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-6 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:from-cyan-400 hover:to-blue-500 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-400/50 relative overflow-hidden"
                >
                  <span className="relative z-10">Send Message</span>
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
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
          </motion.div>
        </div>
      </section>
    </main>
  );
}
