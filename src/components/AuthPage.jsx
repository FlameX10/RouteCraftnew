import React, { useState } from 'react';
import { Eye, EyeOff, Mail, Lock, User, ArrowRight } from 'lucide-react';

export default function AuthPage() {
  const [activeForm, setActiveForm] = useState('login');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Login attempted with:', { email: formData.email, password: formData.password });
    // Add your login logic here
  };

  const handleSignup = (e) => {
    e.preventDefault();
    console.log('Signup attempted with:', formData);
    // Redirect to new page
    window.location.href = '/dashboard'; // Change this to your desired route
  };

  return (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center p-4">
      <div className="max-w-6xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-blue-600 text-white p-8 text-center">
          <h1 className="text-4xl font-bold mb-2 animate-pulse">Route Craft</h1>
          <p className="text-blue-100 text-lg">Your Journey Starts Here</p>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row min-h-[600px]">
          {/* Login Form */}
          <div className={`flex-1 p-8 transition-all duration-700 ease-in-out ${
            activeForm === 'login' 
              ? 'opacity-100 transform translate-x-0' 
              : 'opacity-50 transform translate-x-4'
          }`}>
            <div className="max-w-md mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-blue-800 mb-2">Welcome Back</h2>
                <p className="text-blue-600">Sign in to your account</p>
              </div>

              <div className="space-y-6">
                <div className="relative group">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-400 w-5 h-5 group-focus-within:text-blue-600 transition-colors duration-300" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full pl-12 pr-4 py-4 border-2 border-blue-200 rounded-xl focus:border-blue-500 focus:outline-none transition-all duration-300 bg-blue-50 focus:bg-white"
                    required
                  />
                </div>

                <div className="relative group">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-400 w-5 h-5 group-focus-within:text-blue-600 transition-colors duration-300" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full pl-12 pr-12 py-4 border-2 border-blue-200 rounded-xl focus:border-blue-500 focus:outline-none transition-all duration-300 bg-blue-50 focus:bg-white"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-400 hover:text-blue-600 transition-colors duration-300"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>

                <div className="flex items-center justify-between">
                  <label className="flex items-center text-blue-600">
                    <input type="checkbox" className="mr-2 rounded border-blue-300 text-blue-600 focus:ring-blue-500" />
                    Remember me
                  </label>
                  <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors duration-300">
                    Forgot Password?
                  </a>
                </div>

                <button
                  type="button"
                  onClick={handleLogin}
                  className="w-full bg-blue-600 text-white py-4 rounded-xl hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl group"
                >
                  <span className="flex items-center justify-center">
                    Sign In
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </button>
              </div>

              <div className="mt-8 text-center">
                <p className="text-blue-600">
                  Don't have an account?{' '}
                  <button
                    onClick={() => setActiveForm('signup')}
                    className="font-semibold text-blue-800 hover:text-blue-900 transition-colors duration-300"
                  >
                    Sign up here
                  </button>
                </p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden lg:block w-px bg-blue-200 my-8"></div>
          <div className="lg:hidden h-px bg-blue-200 mx-8"></div>

          {/* Signup Form */}
          <div className={`flex-1 p-8 transition-all duration-700 ease-in-out ${
            activeForm === 'signup' 
              ? 'opacity-100 transform translate-x-0' 
              : 'opacity-50 transform -translate-x-4'
          }`}>
            <div className="max-w-md mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-blue-800 mb-2">Join Route Craft</h2>
                <p className="text-blue-600">Create your account today</p>
              </div>

              <div className="space-y-6">
                <div className="relative group">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-400 w-5 h-5 group-focus-within:text-blue-600 transition-colors duration-300" />
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full pl-12 pr-4 py-4 border-2 border-blue-200 rounded-xl focus:border-blue-500 focus:outline-none transition-all duration-300 bg-blue-50 focus:bg-white"
                    required
                  />
                </div>

                <div className="relative group">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-400 w-5 h-5 group-focus-within:text-blue-600 transition-colors duration-300" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full pl-12 pr-4 py-4 border-2 border-blue-200 rounded-xl focus:border-blue-500 focus:outline-none transition-all duration-300 bg-blue-50 focus:bg-white"
                    required
                  />
                </div>

                <div className="relative group">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-400 w-5 h-5 group-focus-within:text-blue-600 transition-colors duration-300" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full pl-12 pr-12 py-4 border-2 border-blue-200 rounded-xl focus:border-blue-500 focus:outline-none transition-all duration-300 bg-blue-50 focus:bg-white"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-400 hover:text-blue-600 transition-colors duration-300"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>

                <div className="relative group">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-400 w-5 h-5 group-focus-within:text-blue-600 transition-colors duration-300" />
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className="w-full pl-12 pr-12 py-4 border-2 border-blue-200 rounded-xl focus:border-blue-500 focus:outline-none transition-all duration-300 bg-blue-50 focus:bg-white"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-400 hover:text-blue-600 transition-colors duration-300"
                  >
                    {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>

                <div className="flex items-center">
                  <input type="checkbox" className="mr-3 rounded border-blue-300 text-blue-600 focus:ring-blue-500" required />
                  <label className="text-blue-600 text-sm">
                    I agree to the{' '}
                    <a href="#" className="font-semibold hover:text-blue-800 transition-colors duration-300">
                      Terms & Conditions
                    </a>
                  </label>
                </div>

                <button
                  type="button"
                  onClick={handleSignup}
                  className="w-full bg-blue-600 text-white py-4 rounded-xl hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl group"
                >
                  <span className="flex items-center justify-center">
                    Create Account
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </button>
              </div>

              <div className="mt-8 text-center">
                <p className="text-blue-600">
                  Already have an account?{' '}
                  <button
                    onClick={() => setActiveForm('login')}
                    className="font-semibold text-blue-800 hover:text-blue-900 transition-colors duration-300"
                  >
                    Sign in here
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}