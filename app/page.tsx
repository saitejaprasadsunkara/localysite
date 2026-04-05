"use client";

import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  Mail,
  MapPin,
  Smartphone,
  Users,
  Zap,
  Globe,
  ChevronRight,
  ArrowRight,
  Check,
} from "lucide-react";

import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function LocalyWebsite() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [activeScreenIndex, setActiveScreenIndex] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);

  // Track scroll for parallax effects
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto-cycle app screenshots
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveScreenIndex((prev) => (prev + 1) % 6);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleEmailSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email) {
      // In production, connect to Firebase or your email service
      console.log("Email signup:", email);
      setEmailSubmitted(true);
      setTimeout(() => {
        setEmail("");
        setEmailSubmitted(false);
      }, 3000);
    }
  };

  const services = [
    {
      icon: "🛒",
      title: "Marketplace",
      description:
        "Buy from local vendors, home cooks, and artisans. Support your community while getting quality products.",
      color: "from-orange-400 to-orange-600",
    },
    {
      icon: "🚗",
      title: "Rides",
      description:
        "Affordable, safe local ride-sharing. Book instantly, track in real-time, connect with neighbors.",
      color: "from-green-400 to-green-600",
    },
    {
      icon: "🚚",
      title: "Delivery",
      description:
        "Fast hyperlocal delivery. Same-day service from your favorite local businesses to your doorstep.",
      color: "from-blue-400 to-blue-600",
    },
    {
      icon: "🧑‍🤝‍🧑",
      title: "Travel Buddy",
      description:
        "Find travel companions, split costs, share experiences. Make new friends on every journey.",
      color: "from-purple-400 to-purple-600",
    },
    {
      icon: "📍",
      title: "Local Discovery",
      description:
        "Discover hidden gems, local businesses, and trending spots in your neighborhood.",
      color: "from-pink-400 to-pink-600",
    },
    {
      icon: "👥",
      title: "Social Features",
      description:
        "Connect with friends, share stories, build community, and stay updated on local happenings.",
      color: "from-indigo-400 to-indigo-600",
    },
  ];

  const appScreens = [
    { title: "Login & Auth", desc: "Secure email & OTP verification" },
    { title: "Marketplace", desc: "Browse local products" },
    { title: "Rides", desc: "Book your ride instantly" },
    { title: "Travel Buddy", desc: "Find travel companions" },
    { title: "Social Feed", desc: "Stay connected" },
    { title: "Profile", desc: "Manage your account" },
  ];

  const stats = [
    { number: "10K+", label: "Early Beta Testers" },
    { number: "25+", label: "Cities Ready" },
    { number: "6", label: "Core Services" },
    { number: "2026", label: "Global Launch" },
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Home Cook & Seller",
      text: "Localy helped me reach 500+ customers in my neighborhood. Best decision ever!",
      avatar: "👩‍🍳",
    },
    {
      name: "Raj Patel",
      role: "Commuter",
      text: "I save ₹500 every week with Localy rides. The app is so easy to use.",
      avatar: "👨‍💼",
    },
    {
      name: "Ananya Gupta",
      role: "Travel Enthusiast",
      text: "Found amazing travel buddies through Localy. Made friends from Delhi to Goa!",
      avatar: "👩‍🎓",
    },
  ];

  const faqs = [
    {
      question: "When is Localy launching?",
      answer:
        "We're launching on iOS and Android in early 2026. Sign up to get notified the moment we go live!",
    },
    {
      question: "Is Localy available outside India?",
      answer:
        "We're launching in India first, but we're built for global expansion. Stay tuned!",
    },
    {
      question: "How can I sell on Localy?",
      answer:
        "Go to localy.me, sign up as a seller, and start listing your products. We handle the rest!",
    },
    {
      question: "Is my data safe on Localy?",
      answer:
        "Absolutely. We use enterprise-grade encryption and follow all data protection regulations.",
    },
    {
      question: "Are there any fees to use Localy?",
      answer:
        "The app is free to download and use. We only charge small platform fees for sellers.",
    },
    {
      question: "Can I become a Localy partner?",
      answer:
        "Yes! Visit localy.me/partnerships or email us. We're always looking for great partners.",
    },
  ];

  // const team = [
  //   {
  //     name: "Tej",
  //     role: "Founder & CEO",
  //     bio: "Building the future of hyperlocal commerce.",
  //   },
  //   {
  //     name: "Arjun",
  //     role: "Lead Developer",
  //     bio: "React Native & Firebase expert.",
  //   },
  //   { name: "Neha", role: "Product Lead", bio: "User experience obsessed." },
  // ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-green-400 bg-clip-text text-transparent">
            Localy
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            <a
              href="#features"
              className="text-sm hover:text-orange-400 transition"
            >
              Features
            </a>
            <a
              href="#showcase"
              className="text-sm hover:text-orange-400 transition"
            >
              App Showcase
            </a>
            <a href="#faq" className="text-sm hover:text-orange-400 transition">
              FAQ
            </a>
            <a
              href="https://localy.me"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:text-orange-400 transition"
            >
              Admin Login
            </a>
            <button className="px-6 py-2 bg-gradient-to-r from-orange-500 to-green-500 rounded-lg hover:shadow-lg hover:shadow-orange-500/50 transition">
              Download App
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-800 border-t border-white/10 p-6 space-y-4">
            <a
              href="#features"
              className="block hover:text-orange-400 transition"
            >
              Features
            </a>
            <a
              href="#showcase"
              className="block hover:text-orange-400 transition"
            >
              App Showcase
            </a>
            <a href="#faq" className="block hover:text-orange-400 transition">
              FAQ
            </a>
            <a
              href="https://localy.me"
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:text-orange-400 transition"
            >
              Admin Login
            </a>
            <button className="w-full px-6 py-2 bg-gradient-to-r from-orange-500 to-green-500 rounded-lg">
              Download App
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-10 w-72 h-72 bg-green-500/20 rounded-full blur-3xl"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center space-y-8">
            <h1 className="text-6xl md:text-7xl font-bold leading-tight">
              Your Hyperlocal
              <span className="block bg-gradient-to-r from-orange-400 via-green-400 to-blue-400 bg-clip-text text-transparent">
                Everything Superapp
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Marketplace • Rides • Delivery • Travel Buddies • Local Discovery
              <br />
              <span className="text-gray-400">
                All in one beautifully designed app
              </span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl text-lg font-semibold hover:shadow-xl hover:shadow-orange-500/50 transition transform hover:scale-105">
                Download on iOS & Android
              </button>
              <button
                onClick={() => {
                  const element = document.getElementById("email-signup");
                  element?.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-8 py-4 border border-green-400 rounded-xl text-lg font-semibold hover:bg-green-400/10 transition"
              >
                Notify Me When Live
              </button>
            </div>

            {/* Countdown or launch status */}
            <div className="pt-8">
              <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur rounded-full border border-white/20">
                <p className="text-sm text-gray-300">
                  🚀 Coming to App Stores in 2026
                </p>
              </div>
            </div>
          </div>

          {/* Hero Visual - App Mockup Representation */}
          <div className="mt-20 relative">
            <div className="mx-auto max-w-4xl">
              <div className="relative aspect-video bg-gradient-to-br from-orange-500/20 to-green-500/20 rounded-3xl border border-white/20 backdrop-blur-sm p-1 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="text-6xl">📱</div>
                    <p className="text-gray-400">
                      Beautiful app screenshots will go here
                    </p>
                    <p className="text-sm text-gray-500">
                      Hero image carousel showcase
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services/Features Section */}
      <section id="features" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">
              Everything You Need Locally
            </h2>
            <p className="text-xl text-gray-400">
              Six powerful services in one app
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 hover:border-orange-400/50 transition duration-300 hover:shadow-xl hover:shadow-orange-500/20"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-6 flex items-center text-orange-400 opacity-0 group-hover:opacity-100 transition">
                  <span className="text-sm font-semibold">Learn More</span>
                  <ChevronRight size={16} className="ml-2" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Showcase Section */}
      <section
        id="showcase"
        className="py-20 px-6 bg-gradient-to-b from-transparent to-orange-500/5"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">See It In Action</h2>
            <p className="text-xl text-gray-400">
              Explore the beautiful app interface
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Screen Showcase */}
            <div className="relative flex justify-center">
              <div className="w-48 aspect-video bg-gradient-to-br from-orange-500/30 to-green-500/30 rounded-3xl border border-white/20 p-4 relative">
                <div className="w-full h-full bg-slate-800 rounded-2xl flex flex-col items-center justify-center border border-white/10">
                  <div className="text-6xl mb-4">
                    {appScreens[activeScreenIndex].emoji || "📱"}
                  </div>
                  <p className="text-center text-sm text-gray-300">
                    {appScreens[activeScreenIndex].title}
                  </p>
                  <p className="text-xs text-gray-500 mt-2">
                    {appScreens[activeScreenIndex].desc}
                  </p>
                </div>
              </div>

              {/* Screen Indicator Dots */}
              <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-2 translate-y-16">
                {appScreens.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveScreenIndex(index)}
                    className={`w-2 h-2 rounded-full transition ${
                      index === activeScreenIndex
                        ? "bg-orange-400 w-8"
                        : "bg-white/30 hover:bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Features List */}
            <div className="space-y-6">
              <h3 className="text-3xl font-bold">
                Designed for India. Built for the World.
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                We are meticulously crafting every screen to be intuitive,
                beautiful, and lightning-fast. From seamless onboarding to
                frictionless transactions, every detail matters.
              </p>

              <div className="space-y-4 pt-4">
                {[
                  "Secure email & OTP authentication",
                  "Real-time tracking & notifications",
                  "Smooth animations & transitions",
                  "Offline mode support",
                  "Multi-language support",
                  "Privacy-first design",
                ].map((feature, index) => (
                  <div key={index} className="flex gap-3 items-start">
                    <Check
                      className="text-green-400 flex-shrink-0 mt-1"
                      size={20}
                    />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              <button className="mt-8 px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 rounded-xl font-semibold hover:shadow-lg hover:shadow-green-500/50 transition">
                Watch Demo Video →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof / Stats Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10"
              >
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-400 to-green-400 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <p className="text-gray-400 mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 bg-gradient-to-b from-transparent to-green-500/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">
              What Our Beta Testers Say
            </h2>
            <p className="text-xl text-gray-400">
              Real feedback from real users
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 hover:border-green-400/50 transition"
              >
                <p className="text-gray-300 text-lg mb-6 italic">
                  {testimonial.text}
                </p>
                <div className="flex items-center gap-4">
                  <div className="text-4xl">{testimonial.avatar}</div>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Email Signup Section */}
      <section id="email-signup" className="py-20 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="p-12 rounded-3xl bg-gradient-to-br from-orange-500/20 via-green-500/10 to-blue-500/20 border border-white/20 backdrop-blur-sm">
            <h2 className="text-3xl font-bold text-center mb-4">
              Be The First To Know
            </h2>
            <p className="text-center text-gray-300 mb-8">
              Get instant access to Localy when we launch. Plus early-bird perks
              and exclusive updates.
            </p>

            <form onSubmit={handleEmailSignup} className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-6 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-orange-400 transition"
                  required
                />
                <button
                  type="submit"
                  className="px-8 py-3 bg-gradient-to-r from-orange-500 to-green-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-orange-500/50 transition whitespace-nowrap"
                >
                  {emailSubmitted ? "✓ Subscribed!" : "Notify Me"}
                </button>
              </div>
              <p className="text-xs text-gray-500 text-center">
                No spam. We will only email you about important Localy updates.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="group p-6 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 hover:border-orange-400/50 transition cursor-pointer"
              >
                <summary className="flex justify-between items-center font-semibold text-lg hover:text-orange-400 transition">
                  <span>{faq.question}</span>
                  <span className="group-open:rotate-180 transition">▼</span>
                </summary>
                <p className="mt-4 text-gray-400 leading-relaxed">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-transparent to-purple-500/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">Meet The Team Soon..</h2>
            <p className="text-xl text-gray-400">
              Building the future of hyperlocal
            </p>
          </div>

          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/20 hover:border-purple-400/50 transition"
              >
                <div className="text-6xl mb-4 flex justify-center">👤</div>
                <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                <p className="text-orange-400 font-semibold mb-3">
                  {member.role}
                </p>
                <p className="text-gray-400">{member.bio}</p>
              </div>
            ))}
          </div> */}
        </div>
      </section>

      {/* CTA Before Footer */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">
            Ready For The Local Revolution?
          </h2>
          <p className="text-xl text-gray-400">
            Join thousands of early adopters and be part of Indias hyperlocal
            future.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl text-lg font-semibold hover:shadow-xl hover:shadow-orange-500/50 transition">
              Download App Now
            </button>
            <a
              href="https://localy.me"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-green-400 rounded-xl text-lg font-semibold hover:bg-green-400/10 transition"
            >
              Admin/Seller Login →
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div>
              <div className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-green-400 bg-clip-text text-transparent mb-4">
                Localy
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                The hyperlocal superapp connecting communities, supporting local
                businesses, and making life better.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a
                    href="#features"
                    className="hover:text-orange-400 transition"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#showcase"
                    className="hover:text-orange-400 transition"
                  >
                    App Showcase
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-orange-400 transition">
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    href="https://localy.me"
                    className="hover:text-orange-400 transition"
                  >
                    Admin Portal
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-orange-400 transition">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-400 transition">
                    Press Kit
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-400 transition">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-400 transition">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/localy.me?igsh=Z2N2OTlidzNkOHp6&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-orange-400 transition"
                >
                  <FaInstagram size={20} />
                </a>
                <a
                  href="https://x.com/localyme"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-orange-400 transition"
                >
                  <FaTwitter size={20} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-orange-400 transition"
                >
                  <FaLinkedin size={20} />
                </a>
                <a
                  href="https://www.facebook.com/share/1BfbWXd3rJ/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-orange-400 transition"
                >
                  <FaFacebook size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
              <p>&copy; 2026 Localy. All rights reserved.</p>
              <div className="flex gap-6">
                <a href="#" className="hover:text-orange-400 transition">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-orange-400 transition">
                  Terms of Service
                </a>
                <a href="#" className="hover:text-orange-400 transition">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
