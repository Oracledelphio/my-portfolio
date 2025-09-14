import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, MapPin, Send, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create mailto link
    const subject = `Message from ${formData.name}`;
    const body = `Hi Kurt,\n\n${formData.message}\n\nBest regards,\n${formData.name}\n${formData.email}`;
    const mailtoLink = `mailto:kurtsonyrebello@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "kurtsonyrebello@gmail.com",
      action: () => window.open("mailto:kurtsonyrebello@gmail.com"),
    },
    {
      icon: Github,
      label: "GitHub",
      value: "Oracledelphio",
      action: () => window.open("https://github.com/Oracledelphio", "_blank"),
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Kochi, Kerala",
      action: null,
    },
  ];

  return (
    <section id="contact" className="py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">
            Let's Collaborate
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to bring innovative ideas to life? Let's connect and explore
            opportunities together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="glass rounded-3xl p-8">
              <h3 className="text-3xl font-bold text-white mb-8">
                Get In Touch
              </h3>

              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className={`flex items-center gap-4 p-4 rounded-2xl glass glass-hover mb-4 ${
                    info.action ? "cursor-pointer" : ""
                  }`}
                  onClick={info.action}
                >
                  <div className="glass rounded-xl p-3">
                    <info.icon className="w-6 h-6 text-pistachio-400" />
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-400 text-sm">{info.label}</p>
                    <p className="text-white font-semibold">{info.value}</p>
                  </div>
                  {info.action && (
                    <ExternalLink className="w-5 h-5 text-gray-400" />
                  )}
                </motion.div>
              ))}
            </div>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              viewport={{ once: true }}
              className="glass rounded-3xl p-8"
            >
              <h4 className="text-xl font-bold text-white mb-6">
                Quick Connect
              </h4>
              <div className="space-y-4">
                <Button
                  onClick={() =>
                    window.open("mailto:kurtsonyrebello@gmail.com")
                  }
                  color="green"
                  className="flex items-center w-full min-w-[200px] px-10 py-4 gap-3"
                >
                  <Mail className="w-5 h-5" />
                  <span className="font-semibold text-base">Send Email</span>
                </Button>

                <Button
                  onClick={() =>
                    window.open("https://github.com/Oracledelphio", "_blank")
                  }
                  color="blue"
                  className="flex items-center w-full min-w-[200px] px-10 py-4 gap-3"
                >
                  <Github className="w-5 h-5" />
                  <span className="font-semibold text-base">View GitHub</span>
                </Button>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-8"
          >
            <h3 className="text-3xl font-bold text-white mb-8">
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="glass bg-transparent border-gray-500/30 text-white placeholder:text-gray-400 py-6 text-lg rounded-xl focus:border-pistachio-400"
                />
              </div>

              <div>
                <Input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="glass bg-transparent border-gray-500/30 text-white placeholder:text-gray-400 py-6 text-lg rounded-xl focus:border-pistachio-400"
                />
              </div>

              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="glass bg-transparent border-gray-500/30 text-white placeholder:text-gray-400 text-lg rounded-xl focus:border-pistachio-400 resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full py-6 text-lg font-semibold rounded-xl glow"
                style={{
                  background: "linear-gradient(135deg, #8B4513, #CD853F)",
                  boxShadow: "0 0 20px rgba(139, 69, 19, 0.3)",
                }}
              >
                <Send className="w-5 h-5 mr-3" />
                Let's Collaborate
              </Button>
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="glass rounded-2xl p-6 inline-block">
            <p className="text-gray-400">
              © 2024 Kurt Sony Rebello. Crafted with innovation and excellence.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
