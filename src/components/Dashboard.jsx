import React, { useState, useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Bell, ChevronDown, TrendingUp, Users, Calendar, Target, Clock, BookOpen, Award, Star, Activity, Zap, CheckCircle, AlertCircle } from 'lucide-react';

ChartJS.register(ArcElement, Tooltip, Legend);

const TaskBox = ({ title, progress, dueDate }) => {
  const [showDate, setShowDate] = useState(false);

  return (
    <div className="card p-4 hover:scale-105 transition-transform">
      <h3 className="text-lg font-semibold text-primary mb-2">{title}</h3>
      <p className="text-sm text-primary-600 font-medium mb-3">Progress: {progress}/10</p>
      <div className="bg-tertiary rounded-full h-2 mb-3">
        <div 
          className="bg-gradient-to-r from-primary-500 to-accent-500 rounded-full h-2 transition-all duration-300" 
          style={{width: `${progress * 10}%`}}
        ></div>
      </div>
      <button
        onClick={() => setShowDate(!showDate)}
        className="btn btn-outline text-sm"
      >
        {showDate ? 'Hide' : 'Show'} Due Date
      </button>
      {showDate && <p className="mt-2 text-sm text-secondary">{dueDate}</p>}
    </div>
  );
};

const TaskCard = ({ title, description, actions, priority = 'medium' }) => {
  const priorityColors = {
    high: 'border-l-4 border-l-error-500',
    medium: 'border-l-4 border-l-warning-500',
    low: 'border-l-4 border-l-success-500'
  };

  return (
    <div className={`card p-4 mb-4 ${priorityColors[priority]}`}>
      <h3 className="text-lg font-semibold mb-2 text-primary">{title}</h3>
      <p className="text-sm text-secondary mb-3">{description}</p>
      <div className="flex space-x-2">
        {actions.map((action, index) => (
          <button
            key={index}
            className={`btn text-sm ${
              index === 0 ? 'btn-primary' : 'btn-secondary'
            }`}
          >
            {action}
          </button>
        ))}
      </div>
    </div>
  );
};

const StatCard = ({ icon, title, value, change, color }) => (
  <div className="card p-4">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm text-secondary font-medium">{title}</p>
        <p className="text-2xl font-bold text-primary">{value}</p>
        {change && (
          <p className={`text-sm ${change > 0 ? 'text-success-600' : 'text-error-600'}`}>
            {change > 0 ? '+' : ''}{change}% from last month
          </p>
        )}
      </div>
      <div className={`p-3 rounded-full ${color}`}>
        {icon}
      </div>
    </div>
  </div>
);

const ActivityCard = ({ icon, title, description, time, type }) => {
  const typeColors = {
    study: 'text-primary-600',
    achievement: 'text-accent-600',
    reminder: 'text-warning-600',
    completed: 'text-success-600'
  };

  return (
    <div className="flex items-start space-x-3 p-3 hover:bg-neutral-50 rounded-lg transition-colors">
      <div className={`p-2 rounded-full bg-neutral-100 ${typeColors[type]}`}>
        {icon}
      </div>
      <div className="flex-1">
        <h4 className="font-medium text-primary">{title}</h4>
        <p className="text-sm text-secondary">{description}</p>
        <p className="text-xs text-tertiary mt-1">{time}</p>
      </div>
    </div>
  );
};

const InsightCard = ({ title, value, trend, description, icon }) => (
  <div className="card p-4">
    <div className="flex items-center justify-between mb-3">
      <h3 className="font-semibold text-primary">{title}</h3>
      <div className="p-2 bg-primary-100 rounded-lg">
        {icon}
      </div>
    </div>
    <p className="text-2xl font-bold text-primary mb-1">{value}</p>
    <p className="text-sm text-secondary mb-2">{description}</p>
    <div className="flex items-center text-sm">
      <TrendingUp className={`w-4 h-4 mr-1 ${trend > 0 ? 'text-success-600' : 'text-error-600'}`} />
      <span className={trend > 0 ? 'text-success-600' : 'text-error-600'}>
        {trend > 0 ? '+' : ''}{trend}% from last week
      </span>
    </div>
  </div>
);

const Dashboard = () => {
  const [chartData, setChartData] = useState({
    labels: ['Progress', 'To-Do', 'Completed'],
    datasets: [{
      data: [58, 30, 12],
      backgroundColor: ['#0056D2', '#E87D1E', '#22C55E'],
      hoverOffset: 4,
      borderWidth: 0,
    }]
  });

  const recentActivities = [
    { icon: <BookOpen className="w-4 h-4" />, title: 'Completed React Basics', description: 'Finished Chapter 3 of React Fundamentals', time: '2 hours ago', type: 'completed' },
    { icon: <Award className="w-4 h-4" />, title: 'Earned New Badge', description: 'Achieved "Code Enthusiast" badge', time: '4 hours ago', type: 'achievement' },
    { icon: <Clock className="w-4 h-4" />, title: 'Study Session', description: 'Completed 2-hour focused study session', time: '6 hours ago', type: 'study' },
    { icon: <AlertCircle className="w-4 h-4" />, title: 'Upcoming Deadline', description: 'Data Structures assignment due tomorrow', time: '1 day ago', type: 'reminder' },
  ];

  const upcomingDeadlines = [
    { title: 'React Project Submission', date: 'Tomorrow', priority: 'high' },
    { title: 'Data Structures Quiz', date: 'Dec 15', priority: 'medium' },
    { title: 'Team Presentation', date: 'Dec 20', priority: 'low' },
  ];

  useEffect(() => {
    // You can fetch data here if needed
  }, []);

  const chartOptions = {
    responsive: true,
    cutout: '75%',
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          usePointStyle: true,
          padding: 20,
          font: { size: 14 }
        }
      },
      tooltip: { enabled: true }
    }
  };

  return (
    <div className="min-h-screen bg-neutral-50 p-4">
      {/* Main Content */}
      <div className="max-w-full mx-auto">
        <header className="bg-white shadow-sm p-4 flex justify-between items-center rounded-lg mb-6">
          <div className="flex items-center space-x-4">
            <Bell className="text-tertiary cursor-pointer hover:text-primary transition-colors" />
            <div className="flex items-center space-x-2 cursor-pointer">
              <div>
                <span className="font-medium text-primary">Prasen Shinde</span>
                <span className="text-sm text-secondary block">User</span>
              </div>
              <ChevronDown size={16} className="text-tertiary" />
            </div>
          </div>
        </header>

        <main>
          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <StatCard 
              icon={<TrendingUp className="w-6 h-6 text-primary-600" />}
              title="Total Progress"
              value="78%"
              change={12}
              color="bg-primary-100"
            />
            <StatCard 
              icon={<Users className="w-6 h-6 text-accent-600" />}
              title="Study Groups"
              value="5"
              change={-2}
              color="bg-accent-100"
            />
            <StatCard 
              icon={<Calendar className="w-6 h-6 text-success-600" />}
              title="Study Hours"
              value="24h"
              change={8}
              color="bg-success-100"
            />
            <StatCard 
              icon={<Target className="w-6 h-6 text-warning-600" />}
              title="Goals Achieved"
              value="12"
              change={15}
              color="bg-warning-100"
            />
          </div>

          {/* Top Boxes */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <TaskBox title="Design few mobile" progress={8} dueDate="26 AUG 2023" />
            <TaskBox title="Create wireframe" progress={7} dueDate="14 NOV 2023" />
            <TaskBox title="Make Twitter banner" progress={9} dueDate="08 JUN 2023" />
            <TaskBox title="Add more UI/UX" progress={5} dueDate="12 FEB 2023" />
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            {/* Progress Chart */}
            <div className="card p-4">
              <h2 className="text-lg font-bold mb-4 text-primary">Progress Overview</h2>
              <div className="w-full max-w-xs mx-auto">
                <Doughnut data={chartData} options={chartOptions} />
              </div>
            </div>

            {/* Recent Tasks */}
            <div className="card p-4">
              <h2 className="text-lg font-bold mb-4 text-primary">Recent Tasks</h2>
              <TaskCard 
                title="Complete React Course"
                description="Finish the advanced React concepts and build a final project"
                actions={['Mark Complete', 'Edit']}
                priority="high"
              />
              <TaskCard 
                title="Study Data Structures"
                description="Review binary trees and graph algorithms for upcoming exam"
                actions={['Start', 'Reschedule']}
                priority="medium"
              />
              <TaskCard 
                title="Prepare Presentation"
                description="Create slides for the team meeting on Friday"
                actions={['Complete', 'Share']}
                priority="low"
              />
            </div>

            {/* Recent Activities */}
            <div className="card p-4">
              <h2 className="text-lg font-bold mb-4 text-primary">Recent Activities</h2>
              <div className="space-y-2">
                {recentActivities.map((activity, index) => (
                  <ActivityCard key={index} {...activity} />
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {/* Study Insights */}
            <div className="card p-4">
              <h2 className="text-lg font-bold mb-4 text-primary">Study Insights</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <InsightCard 
                  title="Focus Score"
                  value="85%"
                  trend={12}
                  description="Your concentration level this week"
                  icon={<Zap className="w-5 h-5 text-primary-600" />}
                />
                <InsightCard 
                  title="Study Streak"
                  value="7 days"
                  trend={5}
                  description="Consecutive days of studying"
                  icon={<Activity className="w-5 h-5 text-accent-600" />}
                />
                <InsightCard 
                  title="Efficiency"
                  value="92%"
                  trend={-3}
                  description="Time utilization rate"
                  icon={<CheckCircle className="w-5 h-5 text-success-600" />}
                />
                <InsightCard 
                  title="Knowledge Retention"
                  value="78%"
                  trend={8}
                  description="Information retention rate"
                  icon={<Star className="w-5 h-5 text-warning-600" />}
                />
              </div>
            </div>

            {/* Upcoming Deadlines */}
            <div className="card p-4">
              <h2 className="text-lg font-bold mb-4 text-primary">Upcoming Deadlines</h2>
              <div className="space-y-3">
                {upcomingDeadlines.map((deadline, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-neutral-50 rounded-lg">
                    <div>
                      <h3 className="font-medium text-primary">{deadline.title}</h3>
                      <p className="text-sm text-secondary">Due: {deadline.date}</p>
                    </div>
                    <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                      deadline.priority === 'high' ? 'bg-error-100 text-error-700' :
                      deadline.priority === 'medium' ? 'bg-warning-100 text-warning-700' :
                      'bg-success-100 text-success-700'
                    }`}>
                      {deadline.priority}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="card p-4">
            <h2 className="text-lg font-bold mb-4 text-primary">Quick Actions</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <button className="btn btn-primary">
                Create New Roadmap
              </button>
              <button className="btn btn-secondary">
                Join Study Group
              </button>
              <button className="btn btn-outline">
                View Analytics
              </button>
              <button className="btn btn-outline">
                Export Progress
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;