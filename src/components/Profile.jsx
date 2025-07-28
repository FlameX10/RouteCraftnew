import React from 'react';
import { User, Code, Award, TrendingUp, Calendar, Target, Star, BookOpen, Clock, Zap, Trophy, Activity, BarChart3, Users, Download } from 'lucide-react';

const Card = ({ children, className = "" }) => (
  <div className={`card p-4 ${className}`}>{children}</div>
);

const Button = ({ children, variant = 'primary', size = 'md', className = "", ...props }) => {
  const baseClasses = "btn";
  const variantClasses = {
    primary: "btn-primary",
    secondary: "btn-secondary",
    ghost: "btn-ghost"
  };
  const sizeClasses = {
    sm: "text-sm px-2 py-1",
    md: "px-4 py-2",
    lg: "px-6 py-3"
  };
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

const SkillProgress = ({ skill, progress, level }) => (
  <div className="mb-4">
    <div className="flex justify-between items-center mb-2">
      <span className="font-medium text-primary">{skill}</span>
      <span className="text-sm text-secondary">{level}</span>
    </div>
    <div className="bg-tertiary rounded-full h-2">
      <div 
        className="bg-gradient-to-r from-primary-500 to-accent-500 h-2 rounded-full transition-all duration-300" 
        style={{width: `${progress}%`}}
      ></div>
    </div>
  </div>
);

const AchievementCard = ({ icon, title, description, date, type }) => {
  const typeColors = {
    bronze: 'text-amber-600',
    silver: 'text-gray-600',
    gold: 'text-yellow-600',
    platinum: 'text-blue-600'
  };

  return (
    <div className="flex items-start space-x-3 p-3 bg-neutral-50 rounded-lg">
      <div className={`p-2 rounded-full bg-white ${typeColors[type]}`}>
        {icon}
      </div>
      <div className="flex-1">
        <h4 className="font-medium text-primary">{title}</h4>
        <p className="text-sm text-secondary">{description}</p>
        <p className="text-xs text-tertiary mt-1">{date}</p>
      </div>
    </div>
  );
};

const AnalyticsCard = ({ title, value, change, icon, color }) => (
  <div className="card p-4">
    <div className="flex items-center justify-between mb-3">
      <h3 className="font-semibold text-primary">{title}</h3>
      <div className={`p-2 rounded-lg ${color}`}>
        {icon}
      </div>
    </div>
    <p className="text-2xl font-bold text-primary mb-1">{value}</p>
    <div className="flex items-center text-sm">
      <TrendingUp className={`w-4 h-4 mr-1 ${change > 0 ? 'text-success-600' : 'text-error-600'}`} />
      <span className={change > 0 ? 'text-success-600' : 'text-error-600'}>
        {change > 0 ? '+' : ''}{change}% from last month
      </span>
    </div>
  </div>
);

const Profile = () => {
  const user = {
    name: 'Prasen Shinde',
    username: 'prasen_10',
    country: 'India',
    type: 'Other',
    activePlan: 'No Active Plan',
    totalPoints: '1456 CP',
    joinDate: 'March 2023',
    email: 'prasen@example.com',
    activeRoadmaps: [
      { name: 'React.js complete bootcamp', date: '4/05/2024', progress: 75 },
      { name: 'node.js roadmap', date: '4/05/2024', progress: 45 },
      { name: 'python in 100Days', date: '4/05/2024', progress: 30 },
    ],
    badges: [
      { name: 'Code Enthusiast', progress: '0 / 10', description: 'Explain 10 Solutions to get Bronze Badge', type: 'bronze' },
      { name: 'Contest Contender', progress: '0 / 5', description: 'Participate in 5 Contests to get Bronze Badge', type: 'bronze' },
      { name: 'Problem Solver', progress: '0 / 50', description: 'Solve 50 Problems to get Bronze Badge', type: 'bronze' },
    ],
    skills: [
      { skill: 'JavaScript', progress: 85, level: 'Advanced' },
      { skill: 'React', progress: 70, level: 'Intermediate' },
      { skill: 'Node.js', progress: 60, level: 'Intermediate' },
      { skill: 'Python', progress: 45, level: 'Beginner' },
    ],
    achievements: [
      { icon: <Trophy className="w-4 h-4" />, title: 'First Project Completed', description: 'Successfully built your first React application', date: '2 weeks ago', type: 'bronze' },
      { icon: <Star className="w-4 h-4" />, title: '7-Day Streak', description: 'Studied for 7 consecutive days', date: '1 month ago', type: 'silver' },
      { icon: <Award className="w-4 h-4" />, title: 'Course Completion', description: 'Completed JavaScript Fundamentals course', date: '2 months ago', type: 'gold' },
    ]
  };

  const subscriptionPlans = [
    { name: 'Basic Plan', price: '₹999/month', features: ['Create unlimited roadmaps', 'Access to public templates', 'Basic support'], popular: false },
    { name: 'Pro Plan', price: '₹9999/month', features: ['Everything in Basic Plan', 'Custom templates', 'Priority support', 'Advanced analytics'], popular: true },
  ];

  return (
    <div className="min-h-screen bg-neutral-50 p-4">
      <div className="w-full">
        <div className="mb-4">
          <a href="#" className="text-primary-600 hover:text-primary-800 font-medium">Home</a>
          <span className="text-secondary mx-2">»</span>
          <span className="text-primary">{user.name}</span>
      </div>
      
        <div className="flex items-center mb-6">
          <User size={32} className="text-primary-600" />
          <h1 className="text-2xl md:text-3xl font-bold ml-3 text-primary">{user.name}</h1>
          <div className="ml-auto flex space-x-2">
          <Button variant="ghost"><Code size={16} /></Button>
          <Button variant="ghost"><Award size={16} /></Button>
            <Button variant="ghost"><Download size={16} /></Button>
        </div>
      </div>

        {/* Profile Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
      <Card>
            <h2 className="text-xl font-bold mb-4 text-primary">Profile Information</h2>
            <div className="space-y-3">
              <div>
                <p className="font-semibold text-primary">Username</p>
                <p className="text-secondary">{user.username}</p>
              </div>
              <div>
                <p className="font-semibold text-primary">Email</p>
                <p className="text-secondary">{user.email}</p>
              </div>
          <div>
                <p className="font-semibold text-primary">Country</p>
                <p className="text-secondary">{user.country}</p>
          </div>
          <div>
                <p className="font-semibold text-primary">Member Since</p>
                <p className="text-secondary">{user.joinDate}</p>
          </div>
          <div>
                <p className="font-semibold text-primary">Account Type</p>
                <p className="text-secondary">{user.type}</p>
          </div>
          <div>
                <p className="font-semibold text-primary">RouteCraft Plan</p>
                <p className="text-secondary">
                  {user.activePlan} 
                  <a href="#" className="text-primary-600 hover:text-primary-800 font-medium ml-2">View Details</a>
                </p>
          </div>
        </div>
      </Card>

        <Card>
            <h2 className="text-lg font-bold mb-3 text-primary">TOTAL POINTS</h2>
            <p className="text-3xl font-bold text-primary-600 mb-4">{user.totalPoints}</p>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-3 bg-primary-50 rounded-lg">
                <p className="text-2xl font-bold text-primary-600">12</p>
                <p className="text-sm text-secondary">Badges Earned</p>
              </div>
              <div className="text-center p-3 bg-accent-50 rounded-lg">
                <p className="text-2xl font-bold text-accent-600">3</p>
                <p className="text-sm text-secondary">Active Roadmaps</p>
              </div>
            </div>
        </Card>

        <Card>
            <h2 className="text-lg font-bold mb-3 text-primary">Learning Analytics</h2>
            <div className="space-y-4">
              <AnalyticsCard 
                title="Study Hours"
                value="156h"
                change={12}
                icon={<Clock className="w-5 h-5 text-primary-600" />}
                color="bg-primary-100"
              />
              <AnalyticsCard 
                title="Courses Completed"
                value="8"
                change={25}
                icon={<BookOpen className="w-5 h-5 text-accent-600" />}
                color="bg-accent-100"
              />
            </div>
          </Card>
        </div>

        {/* Skills and Active Roadmaps */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <Card>
            <h2 className="text-lg font-bold mb-4 text-primary">Skill Progress</h2>
            {user.skills.map((skill, index) => (
              <SkillProgress key={index} {...skill} />
          ))}
        </Card>

        <Card>
            <h2 className="text-lg font-bold mb-3 text-primary">Active Roadmaps</h2>
            {user.activeRoadmaps.map((roadmap, index) => (
              <div key={index} className="mb-4 p-3 bg-neutral-50 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <p className="font-medium text-primary">{roadmap.name}</p>
                  <span className="text-sm text-secondary">{roadmap.progress}%</span>
                </div>
                <div className="bg-tertiary rounded-full h-2 mb-2">
                  <div 
                    className="bg-gradient-to-r from-primary-500 to-accent-500 h-2 rounded-full transition-all duration-300" 
                    style={{width: `${roadmap.progress}%`}}
                  ></div>
              </div>
                <p className="text-sm text-secondary">Started: {roadmap.date}</p>
                <Button size="sm" variant="secondary" className="mt-2">Continue Learning</Button>
            </div>
          ))}
        </Card>
      </div>

        {/* Badges and Achievements */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <Card>
            <h2 className="text-lg font-bold mb-4 text-primary">Available Badges</h2>
            {user.badges.map((badge, index) => (
              <div key={index} className="mb-4 p-3 bg-neutral-50 rounded-lg">
                <h3 className="font-semibold text-primary mb-1">{badge.name}</h3>
                <p className="text-sm text-secondary mb-2">{badge.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-primary-600">{badge.progress}</span>
                  <div className="w-24 bg-tertiary rounded-full h-2">
                    <div className="bg-primary-500 h-2 rounded-full" style={{width: '0%'}}></div>
                  </div>
                </div>
              </div>
            ))}
          </Card>

          <Card>
            <h2 className="text-lg font-bold mb-4 text-primary">Recent Achievements</h2>
            <div className="space-y-3">
              {user.achievements.map((achievement, index) => (
                <AchievementCard key={index} {...achievement} />
              ))}
            </div>
          </Card>
        </div>

        {/* Subscription Plans */}
      <Card>
          <h2 className="text-lg font-bold mb-4 text-primary">Subscription Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {subscriptionPlans.map((plan, index) => (
              <div key={index} className={`p-4 border rounded-lg relative ${plan.popular ? 'border-primary-500 bg-primary-50' : 'border-light'}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary-500 text-white px-3 py-1 rounded-full text-xs font-medium">Most Popular</span>
                  </div>
                )}
                <h3 className="font-semibold text-primary mb-2">{plan.name}</h3>
                <p className="text-2xl font-bold text-primary-600 mb-3">{plan.price}</p>
                <ul className="space-y-2 mb-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-secondary flex items-center">
                      <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                      {feature}
                    </li>
                ))}
              </ul>
                <Button variant={plan.popular ? "primary" : "outline"} className="w-full">
                  {plan.popular ? 'Choose Pro Plan' : 'Choose Basic Plan'}
                </Button>
            </div>
          ))}
        </div>
      </Card>

        {/* Additional Features Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
          <Card>
            <h2 className="text-lg font-bold mb-4 text-primary">Learning Goals</h2>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-primary-50 rounded-lg">
                <div>
                  <p className="font-medium text-primary">Complete React Course</p>
                  <p className="text-sm text-secondary">Target: Dec 2024</p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-primary-600">75%</p>
                  <p className="text-xs text-secondary">On Track</p>
                </div>
              </div>
              <div className="flex items-center justify-between p-3 bg-accent-50 rounded-lg">
                <div>
                  <p className="font-medium text-primary">Master Node.js</p>
                  <p className="text-sm text-secondary">Target: Jan 2025</p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-accent-600">45%</p>
                  <p className="text-xs text-secondary">In Progress</p>
                </div>
              </div>
              <div className="flex items-center justify-between p-3 bg-success-50 rounded-lg">
                <div>
                  <p className="font-medium text-primary">Python Basics</p>
                  <p className="text-sm text-secondary">Target: Feb 2025</p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-success-600">30%</p>
                  <p className="text-xs text-secondary">Started</p>
                </div>
              </div>
            </div>
          </Card>

          <Card>
            <h2 className="text-lg font-bold mb-4 text-primary">Study Statistics</h2>
            <div className="space-y-4">
              <div className="text-center p-4 bg-neutral-50 rounded-lg">
                <p className="text-3xl font-bold text-primary-600">24</p>
                <p className="text-sm text-secondary">Study Sessions</p>
                <p className="text-xs text-tertiary">This Month</p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="text-center p-3 bg-primary-50 rounded-lg">
                  <p className="text-xl font-bold text-primary-600">156h</p>
                  <p className="text-xs text-secondary">Total Time</p>
                </div>
                <div className="text-center p-3 bg-accent-50 rounded-lg">
                  <p className="text-xl font-bold text-accent-600">6.5h</p>
                  <p className="text-xs text-secondary">Avg/Day</p>
                </div>
              </div>
            </div>
          </Card>

          <Card>
            <h2 className="text-lg font-bold mb-4 text-primary">Quick Actions</h2>
            <div className="space-y-3">
              <Button variant="primary" className="w-full">
                <BookOpen className="w-4 h-4 mr-2" />
                Start New Course
              </Button>
              <Button variant="secondary" className="w-full">
                <Users className="w-4 h-4 mr-2" />
                Join Study Group
              </Button>
              <Button variant="outline" className="w-full">
                <Download className="w-4 h-4 mr-2" />
                Export Progress
              </Button>
              <Button variant="outline" className="w-full">
                <BarChart3 className="w-4 h-4 mr-2" />
                View Analytics
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Profile;