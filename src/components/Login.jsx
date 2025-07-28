import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Brain } from 'lucide-react';

const Login = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate('/home');
    }, 1000);
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-[var(--primary-50)] via-[var(--neutral-50)] to-[var(--primary-100)] font-[Inter,sans-serif]">
      <div className="bg-white rounded-2xl shadow-xl border border-[var(--primary-100)] p-8 max-w-md w-full flex flex-col items-center">
        <div className="flex flex-col items-center mb-4">
          <div className="w-14 h-14 bg-gradient-to-r from-[var(--primary-500)] to-[var(--accent-500)] rounded-lg flex items-center justify-center mb-2 shadow-md">
            <Brain className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--primary-700)] mb-1 tracking-tight">Welcome Back</h2>
          <p className="text-base text-[var(--secondary-700)] font-medium">Sign in to your account</p>
        </div>
        <hr className="w-full border-t border-[var(--neutral-200)] mb-6" />
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="mb-5">
            <label className="block text-[var(--primary-700)] text-sm font-semibold mb-1" htmlFor="username">Username</label>
            <input
              id="username"
              name="username"
              type="text"
              autoComplete="username"
              required
              value={formData.username}
              onChange={handleInputChange}
              className="w-full px-4 py-2 rounded-lg border border-[var(--primary-200)] focus:outline-none focus:ring-2 focus:ring-[var(--primary-400)] bg-[var(--primary-50)] text-[var(--primary-900)] placeholder-[var(--secondary-400)] font-medium text-base"
              placeholder="Enter your username"
            />
          </div>
          <div className="mb-7">
            <label className="block text-[var(--primary-700)] text-sm font-semibold mb-1" htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              value={formData.password}
              onChange={handleInputChange}
              className="w-full px-4 py-2 rounded-lg border border-[var(--primary-200)] focus:outline-none focus:ring-2 focus:ring-[var(--primary-400)] bg-[var(--primary-50)] text-[var(--primary-900)] placeholder-[var(--secondary-400)] font-medium text-base"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2.5 rounded-lg bg-[var(--accent-500)] text-white font-bold text-lg shadow-md hover:bg-[var(--accent-600)] transition-all duration-200 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[var(--accent-400)] focus:ring-offset-2"
            disabled={isLoading}
          >
            {isLoading ? (
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
              </svg>
            ) : (
              'Login'
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login; 