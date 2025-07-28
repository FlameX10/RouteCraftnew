import React, { useState } from 'react';
import { Calendar, Clock, Trophy, Search, Plus, X, ChevronRight, Star, Users, BookOpen } from 'lucide-react';

const Home = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [roadmapSteps, setRoadmapSteps] = useState([]);
  const [showRoadmap, setShowRoadmap] = useState(false);

  const handleAddTask = () => {
    if (task) {
      setTasks([...tasks, { text: task, completed: false }]);
      setTask('');
    }
  };

  const handleDeleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const handleToggleTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const handleAddRoadmapStep = () => {
    setRoadmapSteps([...roadmapSteps, { text: '', duration: '' }]);
  };

  const handleUpdateRoadmapStep = (index, field, value) => {
    const newSteps = [...roadmapSteps];
    newSteps[index][field] = value;
    setRoadmapSteps(newSteps);
  };

  // Mock data for existing roadmaps
  const existingRoadmaps = [
    { id: 1, title: "Computer Science Degree", progress: 75 },
    { id: 2, title: "Web Development Bootcamp", progress: 40 },
    { id: 3, title: "Data Science Fundamentals", progress: 60 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-neutral-100 to-neutral-200 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 fade-in">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-display text-primary">Plan Your Study Roadmap</h1>
          <p className="text-base md:text-lg mb-8 text-secondary">
            Stay organized and achieve your academic goals with your personalized study roadmap.
            Get ready to ace your subjects with ease and fun!
          </p>
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-tertiary w-5 h-5" />
            <input 
              type="text" 
              placeholder='Search roadmaps, courses, or topics...' 
              className='w-full p-3 md:p-4 pl-12 rounded-xl border-2 border-light focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 transition-all duration-200 bg-white shadow-md'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <FeatureCard 
            icon={<Calendar size={32} />}
            title="Personalized Roadmaps"
            description="Create custom study plans based on your goals and deadlines."
          />
          <FeatureCard 
            icon={<Clock size={32} />}
            title="Pomodoro Timer"
            description="Boost productivity with built-in focus timers to keep you on track."
          />
          <FeatureCard 
            icon={<Trophy size={32} />}
            title="Track Your Progress"
            description="Track your study milestones and achievements with visual progress bars."
          />
        </div>

        {/* Call to Action and To-Do List Section */}
        <div className="flex flex-col lg:flex-row gap-12 mb-16">
          {/* Call to Action */}
          <div className="text-center lg:w-1/2">
            <h2 className="text-3xl font-semibold mb-6 text-primary text-display">Ready to Crush Your Exams?</h2>
            <button 
              className="btn btn-primary text-lg px-8 py-3 rounded-full hover:scale-105 transition-transform"
              onClick={() => setShowRoadmap(!showRoadmap)}
            >
              {showRoadmap ? 'Hide Roadmap Builder' : 'Start Building Your Roadmap'}
            </button>
            {showRoadmap && (
              <div className="mt-6 card p-6 slide-in">
                <h3 className="text-xl font-bold mb-4 text-primary">Roadmap Builder</h3>
                {roadmapSteps.map((step, index) => (
                  <div key={index} className="flex gap-2 mb-2">
                    <input
                      type="text"
                      placeholder="Step description"
                      value={step.text}
                      onChange={(e) => handleUpdateRoadmapStep(index, 'text', e.target.value)}
                      className="flex-grow p-2 rounded-lg border border-primary-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none"
                    />
                    <input
                      type="text"
                      placeholder="Duration"
                      value={step.duration}
                      onChange={(e) => handleUpdateRoadmapStep(index, 'duration', e.target.value)}
                      className="w-24 p-2 rounded-lg border border-primary-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none"
                    />
                  </div>
                ))}
                <button
                  className="btn btn-secondary w-full mt-2"
                  onClick={handleAddRoadmapStep}
                >
                  <Plus size={16} className="inline mr-2" /> Add Step
                </button>
              </div>
            )}
          </div>

          {/* To-Do List */}
          <div className="card p-6 lg:w-1/2">
            <h3 className="text-xl font-bold mb-4 text-primary">To-Do List</h3>
            <div className="mb-4">
              <input
                type="text"
                className="w-full p-3 rounded-lg border border-primary-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none"
                placeholder="Add a new task"
                value={task}
                onChange={(e) => setTask(e.target.value)}
              />
              <button
                className="btn btn-primary w-full mt-2"
                onClick={handleAddTask}
              >
                <Plus size={16} className="inline mr-2" /> Add Task
              </button>
            </div>
            <ul className="space-y-2">
              {tasks.map((task, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center p-3 bg-secondary rounded-lg border border-light"
                >
                  <span className={task.completed ? 'line-through text-tertiary' : 'text-primary'}>
                    <input
                      type="checkbox"
                      checked={task.completed}
                      onChange={() => handleToggleTask(index)}
                      className="mr-2 text-primary-600 border-light rounded focus:ring-primary-500"
                    />
                    {task.text}
                  </span>
                  <button
                    className="text-error-500 hover:text-error-600 transition-colors"
                    onClick={() => handleDeleteTask(index)}
                  >
                    <X size={16} />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Existing Roadmaps Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-primary text-display">Your Active Roadmaps</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {existingRoadmaps.map((roadmap) => (
              <div key={roadmap.id} className="card p-6 hover:scale-105 transition-transform">
                <h3 className="text-lg font-semibold mb-3 text-primary">{roadmap.title}</h3>
                <div className="mb-4">
                  <div className="flex justify-between text-sm text-secondary mb-1">
                    <span>Progress</span>
                    <span>{roadmap.progress}%</span>
                  </div>
                  <div className="w-full bg-tertiary rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-primary-500 to-accent-500 h-2 rounded-full transition-all duration-300" 
                      style={{width: `${roadmap.progress}%`}}
                    ></div>
                  </div>
                </div>
                <button className="btn btn-outline w-full">
                  Continue Learning <ChevronRight size={16} className="ml-2" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-primary text-display">What Students Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Testimonial 
              text="RouteCraft helped me organize my study schedule and stay on track with my goals. Highly recommended!"
              author="Sarah Johnson"
            />
            <Testimonial 
              text="The roadmap feature is amazing! I can see my progress and stay motivated throughout my learning journey."
              author="Mike Chen"
            />
            <Testimonial 
              text="Finally, a tool that makes studying fun and organized. My grades have improved significantly!"
              author="Emily Rodriguez"
            />
          </div>
        </div>

        {/* Resources Section */}
        <div className="card p-8 mb-16">
          <h3 className="text-2xl font-bold mb-6 text-primary text-display">Learning Resources</h3>
          <ul className="space-y-4">
            <Resource 
              icon={<BookOpen size={20} />}
              title="Free Programming Books"
              link="#"
            />
            <Resource 
              icon={<Users size={20} />}
              title="Study Group Finder"
              link="#"
            />
            <Resource 
              icon={<Star size={20} />}
              title="Top Rated Online Courses"
              link="#"
            />
          </ul>
        </div>

        {/* Call-to-Action Footer */}
        <div className="text-center card p-8 bg-gradient-to-r from-primary-500 to-accent-500 text-white relative overflow-hidden">
          {/* Background overlay for better text visibility */}
          <div className="absolute inset-0 bg-black/20"></div>
          
          {/* Content with relative positioning */}
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4 text-display text-white drop-shadow-lg">Start Your Learning Journey Today!</h2>
            <p className="mb-6 text-white/90 text-lg drop-shadow-md">Join thousands of students achieving their goals with our roadmap planner.</p>
            <button className="btn bg-white text-black font-bold py-3 px-8 rounded-full hover:bg-primary-50 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105">
              Sign Up Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <div className="card p-6 text-center hover:scale-105 transition-transform">
    <div className="bg-gradient-to-br from-primary-100 to-accent-100 p-4 rounded-full mb-4 inline-block">
      <div className="text-primary-600">
        {icon}
      </div>
    </div>
    <h3 className="text-xl font-bold mb-2 text-primary">{title}</h3>
    <p className="text-secondary">{description}</p>
  </div>
);

const Testimonial = ({ text, author }) => (
  <div className="card p-6 bg-gradient-to-br from-primary-50 to-accent-50">
    <p className="italic mb-4 text-secondary">"{text}"</p>
    <p className="font-semibold text-primary">- {author}</p>
  </div>
);

const Resource = ({ icon, title, link }) => (
  <li>
    <a href={link} className="flex items-center space-x-3 text-primary-600 hover:text-primary-800 transition-colors p-3 rounded-lg hover:bg-primary-50">
      <div className="text-primary-500">
        {icon}
      </div>
      <span className="font-medium">{title}</span>
    </a>
  </li>
);

export default Home;