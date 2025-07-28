import React, { useState, useEffect } from 'react';
import { AlertCircle, Send, Loader, CheckCircle2, Clock, Target, TrendingUp, BookOpen, Users, Calendar, Star, Award } from 'lucide-react';
import RoadmapGenerator from './RoadmapGenerator';

// WARNING: Never expose API keys in production frontend code. Use a backend proxy for real apps.
const GEMINI_API_KEY = 'AIzaSyBT5v5y4ehfGbyg4q1Us4WG3ZZP7boeuBc';
const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1/models/gemini-1.0-pro-latest:generateContent';

const RoadMap = () => {
  // States for Task Management
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [timer, setTimer] = useState(25 * 60); // Default to 25 minutes
  const [isActive, setIsActive] = useState(false);
  const [inputMinutes, setInputMinutes] = useState(25); // User-input for minutes

  // States for AI Roadmap Creator
  const [prompt, setPrompt] = useState('');
  const [roadmap, setRoadmap] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // States for additional features
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [studyStats, setStudyStats] = useState({
    totalHours: 156,
    weeklyGoal: 20,
    currentWeek: 18,
    streak: 7
  });

  // Timer logic
  useEffect(() => {
    let interval = null;
    if (isActive && timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else if (timer === 0) {
      setIsActive(false);
      alert('Session completed!');
    }
    return () => clearInterval(interval);
  }, [isActive, timer]);

  // Add a new task
  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  // Toggle task completion
  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  // Start timer
  const startTimer = () => {
    if (inputMinutes > 0) {
      setTimer(inputMinutes * 60); // Set timer based on user input
      setIsActive(true);
    } else {
      alert('Please enter a valid time greater than 0.');
    }
  };

  // Reset timer
  const resetTimer = () => {
    setIsActive(false);
    setTimer(inputMinutes * 60); // Reset to the user-input time
  };

  // Format time for display
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  // Progress calculation
  const progress = (tasks.filter(task => task.completed).length / tasks.length) * 100 || 0;

  // Timeline component for AI Roadmap
  const Timeline = ({ steps }) => (
    <div className="relative border-l-2 border-primary-200 ml-4 mt-4">
      {steps.map((step, index) => (
        <div key={index} className="mb-10 ml-6">
          <div className="absolute w-6 h-6 bg-white rounded-full -left-3 border-2 border-primary-500 flex items-center justify-center">
            <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
          </div>
          <div className="bg-white p-4 rounded-lg border border-light shadow-sm">
            <h3 className="font-semibold text-primary mb-2">{step.name}</h3>
            <p className="text-sm text-secondary mb-2">{step.details}</p>
            <span className="inline-block bg-primary-100 text-primary-700 text-xs px-2 py-1 rounded-full">
              {step.duration}
            </span>
          </div>
        </div>
      ))}
    </div>
  );

  // Study Stats Card
  const StudyStatsCard = ({ icon, title, value, subtitle, color }) => (
    <div className="card p-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-secondary font-medium">{title}</p>
          <p className="text-2xl font-bold text-primary">{value}</p>
          <p className="text-xs text-tertiary">{subtitle}</p>
        </div>
        <div className={`p-3 rounded-full ${color}`}>
          {icon}
        </div>
      </div>
    </div>
  );

  // Quick Actions
  const QuickAction = ({ icon, title, description, onClick }) => (
    <button 
      onClick={onClick}
      className="card p-4 text-left hover:scale-105 transition-transform cursor-pointer w-full"
    >
      <div className="flex items-center space-x-3">
        <div className="p-2 bg-primary-100 rounded-lg">
          {icon}
        </div>
        <div>
          <h3 className="font-semibold text-primary">{title}</h3>
          <p className="text-sm text-secondary">{description}</p>
        </div>
      </div>
    </button>
  );

  // Popular Roadmaps
  const popularRoadmaps = [
    { title: "Web Development", icon: <BookOpen size={20} />, students: 1240, rating: 4.8 },
    { title: "Data Science", icon: <TrendingUp size={20} />, students: 890, rating: 4.9 },
    { title: "Mobile Development", icon: <Users size={20} />, students: 756, rating: 4.7 },
    { title: "Machine Learning", icon: <Target size={20} />, students: 634, rating: 4.6 }
  ];

  return (
    <div className="min-h-screen bg-secondary p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl md:text-4xl font-bold text-primary text-display">Roadmap Creator</h1>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-secondary">Last updated:</span>
            <span className="text-sm text-primary font-medium">Today</span>
          </div>
        </div>

        {/* Study Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <StudyStatsCard 
            icon={<Clock className="w-6 h-6 text-primary-600" />}
            title="Total Study Hours"
            value={studyStats.totalHours}
            subtitle="This month"
            color="bg-primary-100"
          />
          <StudyStatsCard 
            icon={<Target className="w-6 h-6 text-success-600" />}
            title="Weekly Goal"
            value={`${studyStats.currentWeek}/${studyStats.weeklyGoal}h`}
            subtitle="Hours completed"
            color="bg-success-100"
          />
          <StudyStatsCard 
            icon={<TrendingUp className="w-6 h-6 text-secondary-600" />}
            title="Study Streak"
            value={studyStats.streak}
            subtitle="Days in a row"
            color="bg-secondary-100"
          />
          <StudyStatsCard 
            icon={<Award className="w-6 h-6 text-warning-600" />}
            title="Achievements"
            value="12"
            subtitle="Badges earned"
            color="bg-warning-100"
          />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Task Management Section */}
          <div className="card p-4 md:p-6">
            <h2 className="text-xl font-bold mb-4 text-primary">Task Management</h2>
            
            {/* Add Task */}
            <div className="flex gap-2 mb-4">
              <input
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                placeholder="Add a new task..."
                className="flex-1 p-3 border border-light rounded-lg focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none"
                onKeyPress={(e) => e.key === 'Enter' && addTask()}
              />
              <button
                onClick={addTask}
                className="btn btn-primary px-4"
              >
                Add
              </button>
            </div>

            {/* Task List */}
            <div className="space-y-2 mb-4 max-h-60 overflow-y-auto">
              {tasks.map((task) => (
                <div
                  key={task.id}
                  className="flex items-center p-3 bg-secondary rounded-lg border border-light"
                >
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleTask(task.id)}
                    className="mr-3 text-primary-600 border-light rounded focus:ring-primary-500"
                  />
                  <span className={`flex-1 ${task.completed ? 'line-through text-tertiary' : 'text-primary'}`}>
                    {task.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Progress Bar */}
            <div className="mb-4">
              <div className="flex justify-between text-sm text-secondary mb-1">
                <span>Progress</span>
                <span>{Math.round(progress)}%</span>
              </div>
              <div className="w-full bg-tertiary rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-primary-500 to-secondary-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>
          </div>

          {/* Pomodoro Timer Section */}
          <div className="card p-4 md:p-6">
            <h2 className="text-xl font-bold mb-4 text-primary">Pomodoro Timer</h2>
            
            <div className="text-center mb-6">
              <div className="text-4xl md:text-6xl font-bold text-primary mb-4">
                {formatTime(timer)}
              </div>
              
              <div className="flex gap-2 mb-4 justify-center">
                <input
                  type="number"
                  value={inputMinutes}
                  onChange={(e) => setInputMinutes(parseInt(e.target.value) || 0)}
                  min="1"
                  max="120"
                  className="w-20 p-2 border border-light rounded-lg text-center focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none"
                />
                <span className="flex items-center text-secondary">minutes</span>
              </div>
              
              <div className="flex gap-2 justify-center">
                <button
                  onClick={startTimer}
                  disabled={isActive}
                  className="btn btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isActive ? <Loader className="w-4 h-4 animate-spin" /> : 'Start'}
                </button>
                <button
                  onClick={resetTimer}
                  className="btn btn-secondary"
                >
                  Reset
                </button>
              </div>
            </div>

            {/* Quick Timer Presets */}
            <div className="grid grid-cols-3 gap-2">
              <button 
                onClick={() => setInputMinutes(25)}
                className="p-2 text-xs bg-secondary rounded-lg hover:bg-primary-100 transition-colors"
              >
                25 min
              </button>
              <button 
                onClick={() => setInputMinutes(45)}
                className="p-2 text-xs bg-secondary rounded-lg hover:bg-primary-100 transition-colors"
              >
                45 min
              </button>
              <button 
                onClick={() => setInputMinutes(60)}
                className="p-2 text-xs bg-secondary rounded-lg hover:bg-primary-100 transition-colors"
              >
                60 min
              </button>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-primary">Quick Actions</h2>
            <QuickAction 
              icon={<BookOpen className="w-5 h-5 text-primary-600" />}
              title="Create New Roadmap"
              description="Start a custom learning path"
              onClick={() => console.log('Create roadmap')}
            />
            <QuickAction 
              icon={<Users className="w-5 h-5 text-secondary-600" />}
              title="Join Study Group"
              description="Connect with other learners"
              onClick={() => console.log('Join group')}
            />
            <QuickAction 
              icon={<Calendar className="w-5 h-5 text-success-600" />}
              title="Schedule Session"
              description="Plan your study time"
              onClick={() => console.log('Schedule session')}
            />
            <QuickAction 
              icon={<Star className="w-5 h-5 text-warning-600" />}
              title="View Achievements"
              description="Check your progress badges"
              onClick={() => console.log('View achievements')}
            />
          </div>
        </div>

        {/* Popular Roadmaps */}
        <div className="card p-4 md:p-6 mb-8">
          <h2 className="text-xl font-bold mb-4 text-primary">Popular Roadmaps</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {popularRoadmaps.map((roadmap, index) => (
              <div key={index} className="card p-4 hover:scale-105 transition-transform cursor-pointer">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="p-2 bg-primary-100 rounded-lg">
                    {roadmap.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary">{roadmap.title}</h3>
                    <div className="flex items-center space-x-2">
                      <Star className="w-4 h-4 text-warning-500 fill-current" />
                      <span className="text-sm text-secondary">{roadmap.rating}</span>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-secondary">{roadmap.students} students enrolled</p>
                <button className="btn btn-outline w-full mt-3 text-sm">
                  Start Learning
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* AI Roadmap Creator (replaced with RoadmapGenerator) */}
        <div className="mb-8">
          <RoadmapGenerator />
        </div>

        {/* Generated Roadmap (handled by RoadmapGenerator now) */}
      </div>
    </div>
  );
};

export default RoadMap;
