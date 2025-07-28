import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BookOpen, 
  Target, 
  Users, 
  TrendingUp, 
  Play, 
  ArrowRight, 
  Star, 
  CheckCircle,
  Zap,
  Calendar,
  Trophy,
  Brain
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Landing = () => {
  const [currentFeature, setCurrentFeature] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const features = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Smart Goal Setting",
      description: "Set personalized learning goals and track your progress with AI-powered insights"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Interactive Roadmaps",
      description: "Create custom study plans with interactive timelines and milestone tracking"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Study Groups",
      description: "Join study groups, collaborate with peers, and learn together"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Progress Analytics",
      description: "Visualize your learning journey with detailed analytics and insights"
    }
  ];

  const stats = [
    { number: "50K+", label: "Active Students" },
    { number: "95%", label: "Success Rate" },
    { number: "200+", label: "Study Roadmaps" },
    { number: "24/7", label: "Support" }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Computer Science Student",
      text: "RouteCraft transformed my study habits. I went from struggling to acing my exams!",
      rating: 5
    },
    {
      name: "Mike Chen",
      role: "Engineering Graduate",
      text: "The roadmap feature is incredible. It helped me stay organized and motivated throughout my degree.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Medical Student",
      text: "Finally, a tool that makes studying fun and effective. My grades improved significantly!",
      rating: 5
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [features.length]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex justify-between items-center p-6">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center space-x-2"
        >
          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <Brain className="w-6 h-6 text-white" />
          </div>
          <span className="text-2xl font-bold text-white">RouteCraft</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center space-x-6"
        >
          <a href="#features" className="text-white/80 hover:text-white transition-colors">Features</a>
          <a href="#testimonials" className="text-white/80 hover:text-white transition-colors">Reviews</a>
          <Link 
            to="/login" 
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
          >
            Get Started
          </Link>
        </motion.div>
      </nav>

      {/* Hero Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-32">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            Master Your
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Learning Journey</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto"
          >
            Transform your study habits with AI-powered roadmaps, interactive tools, and personalized learning experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <Link
              to="/login"
              className="group bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 flex items-center space-x-2"
            >
              <span>Start Learning Free</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <button className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                <Play className="w-5 h-5 ml-1" />
              </div>
              <span>Watch Demo</span>
            </button>
          </motion.div>

          {/* Animated Feature Showcase */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto border border-white/10"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentFeature}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="flex items-center justify-center space-x-4"
              >
                <div className="text-blue-400">
                  {features[currentFeature].icon}
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {features[currentFeature].title}
                  </h3>
                  <p className="text-white/70">
                    {features[currentFeature].description}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.1 }}
        className="relative z-10 max-w-6xl mx-auto px-6 mb-32"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.3 + index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-white/60">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Features Section */}
      <div id="features" className="relative z-10 max-w-7xl mx-auto px-6 mb-32">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Everything You Need to Succeed
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Powerful tools designed to make learning more effective, engaging, and enjoyable.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <Zap className="w-8 h-8" />,
              title: "AI-Powered Insights",
              description: "Get personalized recommendations and insights to optimize your learning path."
            },
            {
              icon: <Calendar className="w-8 h-8" />,
              title: "Smart Scheduling",
              description: "Intelligent scheduling that adapts to your learning pace and preferences."
            },
            {
              icon: <Trophy className="w-8 h-8" />,
              title: "Achievement System",
              description: "Earn badges, certificates, and rewards as you progress through your journey."
            },
            {
              icon: <Users className="w-8 h-8" />,
              title: "Study Groups",
              description: "Connect with peers, share resources, and learn together in collaborative groups."
            },
            {
              icon: <Brain className="w-8 h-8" />,
              title: "Memory Techniques",
              description: "Advanced memory techniques and spaced repetition for better retention."
            },
            {
              icon: <TrendingUp className="w-8 h-8" />,
              title: "Progress Tracking",
              description: "Visual progress tracking with detailed analytics and performance insights."
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="text-blue-400 mb-4 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-white/70">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div id="testimonials" className="relative z-10 max-w-6xl mx-auto px-6 mb-32">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Loved by Students Worldwide
          </h2>
          <p className="text-xl text-white/70">
            Join thousands of students who have transformed their learning experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-white/80 mb-4 italic">
                "{testimonial.text}"
              </p>
              <div>
                <div className="font-semibold text-white">{testimonial.name}</div>
                <div className="text-white/60 text-sm">{testimonial.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-4xl mx-auto px-6 mb-32 text-center"
      >
        <div className="bg-gradient-to-r from-blue-500/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-12 border border-white/10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Learning?
          </h2>
          <p className="text-xl text-white/70 mb-8">
            Join thousands of students who are already achieving their goals with RouteCraft.
          </p>
          <Link
            to="/login"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300"
          >
            <span>Start Your Free Journey</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </motion.div>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="flex justify-center items-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">RouteCraft</span>
          </div>
          <p className="text-white/60">
            © 2024 RouteCraft. All rights reserved. Empowering students worldwide.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Landing; 