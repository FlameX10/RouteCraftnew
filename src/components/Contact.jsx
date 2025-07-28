import React, { useState } from 'react';
import { Instagram, Linkedin, Twitter, Mail, Phone, MapPin, Send, User, MessageSquare, Clock, Award, Star } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const teamMembers = [
    { 
      name: 'RAKSHIKA BATRA', 
      email: 'rakshikabatra@gmail.com',
      role: 'Frontend Developer',
      avatar: 'RB',
      skills: ['React', 'JavaScript', 'UI/UX'],
      experience: '3 years',
      linkedin: 'https://linkedin.com/in/rakshikabatra',
      twitter: 'https://twitter.com/rakshikabatra',
      instagram: 'https://instagram.com/rakshikabatra'
    },
    { 
      name: 'PRASEN SHINDE', 
      email: 'prasenshinde3@gmail.com',
      role: 'Full Stack Developer',
      avatar: 'PS',
      skills: ['MERN Stack', 'Python', 'DevOps'],
      experience: '4 years',
      linkedin: 'https://linkedin.com/in/prasenshinde',
      twitter: 'https://twitter.com/prasenshinde',
      instagram: 'https://instagram.com/prasenshinde'
    },
    { 
      name: 'PARAS PAWAR', 
      email: 'paras0419@gmail.com',
      role: 'Backend Developer',
      avatar: 'PP',
      skills: ['Node.js', 'Database', 'API Design'],
      experience: '2 years',
      linkedin: 'https://linkedin.com/in/paraspawar',
      twitter: 'https://twitter.com/paraspawar',
      instagram: 'https://instagram.com/paraspawar'
    },
  ];

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email Us',
      details: ['support@routecraft.com', 'info@routecraft.com'],
      color: 'bg-primary-100 text-primary-600'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Call Us',
      details: ['+1 (555) 123-4567', '+1 (555) 987-6543'],
      color: 'bg-accent-100 text-accent-600'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Visit Us',
      details: ['123 Learning Street', 'Tech City, TC 12345'],
      color: 'bg-success-100 text-success-600'
    }
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
      alert('Thank you for your message! We\'ll get back to you soon.');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-neutral-50 p-4">
      <div className="w-full">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-primary text-display mb-2">Contact Us</h1>
          <p className="text-secondary text-lg">Get in touch with our amazing team</p>
        </div>

        {/* Contact Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {contactInfo.map((info, index) => (
            <div key={index} className="card p-6 text-center">
              <div className={`p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center ${info.color}`}>
                {info.icon}
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">{info.title}</h3>
              {info.details.map((detail, idx) => (
                <p key={idx} className="text-secondary">{detail}</p>
              ))}
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Team Members */}
          <div className="card p-6">
            <h2 className="text-2xl font-bold text-primary mb-6 text-center">Our Team</h2>
            <div className="space-y-6">
              {teamMembers.map((member, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 bg-neutral-50 rounded-lg">
                  <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-semibold text-primary">{member.avatar}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-primary mb-1">{member.name}</h3>
                    <p className="text-accent-600 font-medium mb-2">{member.role}</p>
                    <p className="text-secondary text-sm mb-2">{member.email}</p>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {member.skills.map((skill, idx) => (
                        <span key={idx} className="text-xs bg-primary-100 text-primary-700 px-2 py-1 rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-secondary mb-3">
                      <span className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{member.experience}</span>
                      </span>
                    </div>
                    <div className="flex space-x-3">
                      <a href={member.linkedin} className="text-primary-600 hover:text-primary-800 transition-colors">
                        <Linkedin className="w-5 h-5" />
                      </a>
                      <a href={member.twitter} className="text-primary-600 hover:text-primary-800 transition-colors">
                        <Twitter className="w-5 h-5" />
                      </a>
                      <a href={member.instagram} className="text-primary-600 hover:text-primary-800 transition-colors">
                        <Instagram className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="card p-6">
            <h2 className="text-2xl font-bold text-primary mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-primary mb-2">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-tertiary w-5 h-5" />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your full name"
                    className="w-full pl-10 pr-4 py-3 border-2 border-light rounded-lg focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none bg-white"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-tertiary w-5 h-5" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your email address"
                    className="w-full pl-10 pr-4 py-3 border-2 border-light rounded-lg focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none bg-white"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-primary mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  placeholder="What's this about?"
                  className="w-full px-4 py-3 border-2 border-light rounded-lg focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none bg-white"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">
                  Message *
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 text-tertiary w-5 h-5" />
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="5"
                    placeholder="Tell us more about your inquiry..."
                    className="w-full pl-10 pr-4 py-3 border-2 border-light rounded-lg focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none bg-white resize-none"
                  ></textarea>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary w-full flex items-center justify-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Additional Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card p-6 text-center">
            <div className="p-4 bg-primary-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Clock className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="text-lg font-semibold text-primary mb-2">Response Time</h3>
            <p className="text-secondary">We typically respond within 24 hours during business days.</p>
          </div>

          <div className="card p-6 text-center">
            <div className="p-4 bg-accent-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Award className="w-8 h-8 text-accent-600" />
            </div>
            <h3 className="text-lg font-semibold text-primary mb-2">Expert Support</h3>
            <p className="text-secondary">Our team of experienced developers is here to help you succeed.</p>
          </div>

          <div className="card p-6 text-center">
            <div className="p-4 bg-success-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Star className="w-8 h-8 text-success-600" />
            </div>
            <h3 className="text-lg font-semibold text-primary mb-2">Customer Satisfaction</h3>
            <p className="text-secondary">We're committed to providing the best learning experience possible.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;