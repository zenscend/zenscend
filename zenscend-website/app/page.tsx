"use client";

import Navigation from "@/components/Navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import { 
  Code2,
  Rocket, 
  Users, 
  Lightbulb, 
  Shield, 
  Zap,
  ArrowRight,
  CheckCircle,
  Mail,
  Phone,
  MapPin
} from "lucide-react";

export default function Home() {
  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
        <div className="absolute inset-0 bg-grid opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-4">
              <h1 className="text-xl md:text-2xl font-semibold text-blue-600 tracking-wider mb-2">
                Innovate. Elevate. Zenscend.
              </h1>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold mb-6">
              Elevate Your <span className="text-gradient">Digital Experience</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              We deliver clean, efficient, and scalable software solutions 
              that transform the way businesses operate in the digital space.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105 flex items-center justify-center gap-2">
                Get Started <ArrowRight className="h-5 w-5" />
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all">
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-gradient">Solutions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive technology solutions designed to propel your business forward
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Code2 className="h-12 w-12 text-blue-600" />,
                title: "Custom Software Development",
                description: "Tailored solutions built with cutting-edge technologies to meet your unique business needs"
              },
              {
                icon: <Rocket className="h-12 w-12 text-blue-600" />,
                title: "Digital Transformation",
                description: "Modernize your operations and accelerate growth with our strategic digital solutions"
              },
              {
                icon: <Users className="h-12 w-12 text-blue-600" />,
                title: "Team Augmentation",
                description: "Scale your development capabilities with our skilled engineers and consultants"
              },
              {
                icon: <Lightbulb className="h-12 w-12 text-blue-600" />,
                title: "Innovation Consulting",
                description: "Strategic guidance to help you navigate emerging technologies and market trends"
              },
              {
                icon: <Shield className="h-12 w-12 text-blue-600" />,
                title: "Security & Compliance",
                description: "Robust security solutions to protect your data and ensure regulatory compliance"
              },
              {
                icon: <Zap className="h-12 w-12 text-blue-600" />,
                title: "Performance Optimization",
                description: "Enhance speed, efficiency, and scalability of your existing systems"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Why Choose <span className="text-gradient">Zenscend</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                At Zenscend, we embody the perfect balance of tranquility and innovation. 
                Our name reflects our philosophy: &ldquo;Zen&rdquo; for clarity, calm, and simplicity, 
                and &ldquo;Ascend&rdquo; for growth, progress, and reaching new heights.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                We are more than developers &ndash; we are your strategic partners in digital evolution. 
                Our approach combines thoughtful design with cutting-edge technology to deliver 
                solutions that not only meet today&rsquo;s needs but scale for tomorrow&rsquo;s opportunities.
              </p>
              <div className="space-y-4">
                {[
                  "Clean, maintainable code that stands the test of time",
                  "Scalable architecture designed for growth",
                  "Agile methodology for rapid, iterative development",
                  "Transparent communication throughout the project lifecycle",
                  "Post-launch support and continuous optimization"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-12 relative overflow-hidden">
                <div className="absolute inset-0 bg-dot-pattern opacity-20"></div>
                <div className="relative z-10">
                  <div className="grid grid-cols-2 gap-8">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-blue-600">50+</div>
                      <div className="text-gray-600 mt-2">Projects Delivered</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-blue-600">98%</div>
                      <div className="text-gray-600 mt-2">Client Satisfaction</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-blue-600">24/7</div>
                      <div className="text-gray-600 mt-2">Support Available</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-blue-600">15+</div>
                      <div className="text-gray-600 mt-2">Expert Engineers</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Let&rsquo;s <span className="text-gradient">Connect</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ready to elevate your digital presence? We&rsquo;re here to help transform your vision into reality.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Mail className="h-6 w-6 text-blue-600" />
                    <span className="text-gray-700">bongani@zenscend.co</span>
                  </div>
                  {/* <div className="flex items-center gap-4">
                    <Phone className="h-6 w-6 text-blue-600" />
                    <span className="text-gray-700">+1 (555) 123-4567</span>
                  </div> */}
                  <div className="flex items-center gap-4">
                    <MapPin className="h-6 w-6 text-blue-600" />
                    <span className="text-gray-700">Brooklyn, Pretoria</span>
                  </div>
                </div>
              </div>

              {/* <div>
                <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a href="#" className="p-3 bg-gray-100 rounded-lg hover:bg-blue-100 transition-colors">
                    <svg className="h-6 w-6 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a href="#" className="p-3 bg-gray-100 rounded-lg hover:bg-blue-100 transition-colors">
                    <svg className="h-6 w-6 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a href="#" className="p-3 bg-gray-100 rounded-lg hover:bg-blue-100 transition-colors">
                    <svg className="h-6 w-6 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                </div>
              </div> */}

              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-3">Ready to Start?</h3>
                <p className="text-gray-600 mb-4">
                  Schedule a free consultation to discuss your project requirements and discover how we can help.
                </p>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Schedule Consultation
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="mb-4">
                <Image 
                  src="/zenscend-logo-full-light.svg" 
                  alt="Zenscend" 
                  width={140}
                  height={32}
                  className="h-8 w-auto"
                />
              </div>
              <p className="text-gray-400">
                Elevating digital experiences through clarity and innovation.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Software Development</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Digital Transformation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Consulting</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Zenscend Tech Solutions. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}