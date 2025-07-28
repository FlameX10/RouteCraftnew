
import React, { useState } from 'react';
import { Trophy, Star, Award, TrendingUp, Users, Calendar, Target, Filter, Search, Crown, Medal, Zap } from 'lucide-react';

const Leaderboard = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Enhanced leaderboard data
  const leaderboardData = [
    {
      id: 1,
      name: 'Sarah Johnson',
      rank: 1,
      points: 2847,
      avatar: 'SJ',
      level: 'Master',
      badges: 15,
      streak: 45,
      category: 'frontend',
      achievements: ['Code Enthusiast', 'Problem Solver', 'Streak Master'],
      lastActivity: '2 hours ago'
    },
    {
      id: 2,
      name: 'Mike Chen',
      rank: 2,
      points: 2654,
      avatar: 'MC',
      level: 'Expert',
      badges: 12,
      streak: 32,
      category: 'fullstack',
      achievements: ['Full Stack Developer', 'Contest Winner'],
      lastActivity: '5 hours ago'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      rank: 3,
      points: 2489,
      avatar: 'ER',
      level: 'Advanced',
      badges: 10,
      streak: 28,
      category: 'backend',
      achievements: ['Backend Specialist', 'Database Master'],
      lastActivity: '1 day ago'
    },
    {
      id: 4,
      name: 'Alex Thompson',
      rank: 4,
      points: 2341,
      avatar: 'AT',
      level: 'Advanced',
      badges: 9,
      streak: 25,
      category: 'algorithms',
      achievements: ['Algorithm Expert', 'Speed Coder'],
      lastActivity: '3 days ago'
    },
    {
      id: 5,
      name: 'Lisa Wang',
      rank: 5,
      points: 2187,
      avatar: 'LW',
      level: 'Intermediate',
      badges: 8,
      streak: 20,
      category: 'frontend',
      achievements: ['UI/UX Designer', 'React Master'],
      lastActivity: '1 week ago'
    },
    {
      id: 6,
      name: 'David Kim',
      rank: 6,
      points: 2056,
      avatar: 'DK',
      level: 'Intermediate',
      badges: 7,
      streak: 18,
      category: 'fullstack',
      achievements: ['MERN Stack Developer'],
      lastActivity: '2 days ago'
    },
    {
      id: 7,
      name: 'Maria Garcia',
      rank: 7,
      points: 1943,
      avatar: 'MG',
      level: 'Intermediate',
      badges: 6,
      streak: 15,
      category: 'backend',
      achievements: ['Python Developer'],
      lastActivity: '4 days ago'
    },
    {
      id: 8,
      name: 'James Wilson',
      rank: 8,
      points: 1827,
      avatar: 'JW',
      level: 'Beginner',
      badges: 5,
      streak: 12,
      category: 'algorithms',
      achievements: ['Problem Solver'],
      lastActivity: '1 week ago'
    },
    {
      id: 9,
      name: 'Anna Lee',
      rank: 9,
      points: 1756,
      avatar: 'AL',
      level: 'Beginner',
      badges: 4,
      streak: 10,
      category: 'frontend',
      achievements: ['HTML/CSS Master'],
      lastActivity: '3 days ago'
    },
    {
      id: 10,
      name: 'Tom Brown',
      rank: 10,
      points: 1689,
      avatar: 'TB',
      level: 'Beginner',
      badges: 3,
      streak: 8,
      category: 'backend',
      achievements: ['JavaScript Basics'],
      lastActivity: '5 days ago'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Categories', count: leaderboardData.length },
    { id: 'frontend', name: 'Frontend', count: leaderboardData.filter(p => p.category === 'frontend').length },
    { id: 'backend', name: 'Backend', count: leaderboardData.filter(p => p.category === 'backend').length },
    { id: 'fullstack', name: 'Full Stack', count: leaderboardData.filter(p => p.category === 'fullstack').length },
    { id: 'algorithms', name: 'Algorithms', count: leaderboardData.filter(p => p.category === 'algorithms').length },
  ];

  const filteredData = leaderboardData
    .filter(player => activeFilter === 'all' || player.category === activeFilter)
    .filter(player => player.name.toLowerCase().includes(searchTerm.toLowerCase()));

  const getRankIcon = (rank) => {
    if (rank === 1) return <Crown className="w-6 h-6 text-yellow-500" />;
    if (rank === 2) return <Medal className="w-6 h-6 text-gray-400" />;
    if (rank === 3) return <Medal className="w-6 h-6 text-amber-600" />;
    return <span className="text-lg font-bold text-primary">#{rank}</span>;
  };

  const getLevelColor = (level) => {
    const colors = {
      'Master': 'bg-gradient-to-r from-purple-500 to-pink-500',
      'Expert': 'bg-gradient-to-r from-blue-500 to-cyan-500',
      'Advanced': 'bg-gradient-to-r from-green-500 to-emerald-500',
      'Intermediate': 'bg-gradient-to-r from-yellow-500 to-orange-500',
      'Beginner': 'bg-gradient-to-r from-gray-500 to-slate-500'
    };
    return colors[level] || 'bg-gray-500';
  };

  return (
    <div className="min-h-screen bg-neutral-50 p-4">
      <div className="w-full">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-primary text-display mb-2">Leaderboard</h1>
          <p className="text-secondary text-lg">See who's leading the learning journey</p>
        </div>

        {/* Statistics Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="card p-4 text-center">
            <div className="p-3 bg-primary-100 rounded-full w-12 h-12 mx-auto mb-3 flex items-center justify-center">
              <Trophy className="w-6 h-6 text-primary-600" />
            </div>
            <p className="text-2xl font-bold text-primary">{leaderboardData.length}</p>
            <p className="text-sm text-secondary">Total Participants</p>
          </div>
          <div className="card p-4 text-center">
            <div className="p-3 bg-accent-100 rounded-full w-12 h-12 mx-auto mb-3 flex items-center justify-center">
              <Star className="w-6 h-6 text-accent-600" />
            </div>
            <p className="text-2xl font-bold text-primary">{Math.round(leaderboardData.reduce((sum, p) => sum + p.points, 0) / leaderboardData.length)}</p>
            <p className="text-sm text-secondary">Average Points</p>
          </div>
          <div className="card p-4 text-center">
            <div className="p-3 bg-success-100 rounded-full w-12 h-12 mx-auto mb-3 flex items-center justify-center">
              <Award className="w-6 h-6 text-success-600" />
            </div>
            <p className="text-2xl font-bold text-primary">{leaderboardData.reduce((sum, p) => sum + p.badges, 0)}</p>
            <p className="text-sm text-secondary">Total Badges</p>
          </div>
          <div className="card p-4 text-center">
            <div className="p-3 bg-warning-100 rounded-full w-12 h-12 mx-auto mb-3 flex items-center justify-center">
              <Zap className="w-6 h-6 text-warning-600" />
            </div>
            <p className="text-2xl font-bold text-primary">{Math.max(...leaderboardData.map(p => p.streak))}</p>
            <p className="text-sm text-secondary">Longest Streak</p>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="card p-4 mb-6">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    activeFilter === category.id
                      ? 'bg-primary-500 text-white'
                      : 'bg-white text-secondary hover:bg-neutral-50'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-tertiary w-4 h-4" />
              <input
                type="text"
                placeholder="Search participants..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-light rounded-lg focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none"
              />
            </div>
          </div>
        </div>

        {/* Leaderboard Table */}
        <div className="card p-6">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-light">
                  <th className="text-left py-3 px-4 font-semibold text-primary">Rank</th>
                  <th className="text-left py-3 px-4 font-semibold text-primary">Participant</th>
                  <th className="text-left py-3 px-4 font-semibold text-primary">Level</th>
                  <th className="text-left py-3 px-4 font-semibold text-primary">Points</th>
                  <th className="text-left py-3 px-4 font-semibold text-primary">Badges</th>
                  <th className="text-left py-3 px-4 font-semibold text-primary">Streak</th>
                  <th className="text-left py-3 px-4 font-semibold text-primary">Category</th>
                  <th className="text-left py-3 px-4 font-semibold text-primary">Last Activity</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((player, index) => (
                  <tr key={player.id} className="border-b border-light hover:bg-neutral-50 transition-colors">
                    <td className="py-4 px-4">
                      <div className="flex items-center space-x-2">
                        {getRankIcon(player.rank)}
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center">
                          <span className="text-sm font-semibold text-primary">{player.avatar}</span>
                        </div>
                        <div>
                          <p className="font-medium text-primary">{player.name}</p>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {player.achievements.slice(0, 2).map((achievement, idx) => (
                              <span key={idx} className="text-xs bg-accent-100 text-accent-700 px-2 py-1 rounded-full">
                                {achievement}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium text-white ${getLevelColor(player.level)}`}>
                        {player.level}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center space-x-2">
                        <span className="font-bold text-primary">{player.points.toLocaleString()}</span>
                        <TrendingUp className="w-4 h-4 text-success-600" />
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center space-x-1">
                        <Award className="w-4 h-4 text-accent-600" />
                        <span className="text-primary font-medium">{player.badges}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center space-x-1">
                        <Target className="w-4 h-4 text-warning-600" />
                        <span className="text-primary font-medium">{player.streak} days</span>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <span className="capitalize text-secondary">{player.category}</span>
                    </td>
                    <td className="py-4 px-4">
                      <span className="text-sm text-tertiary">{player.lastActivity}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Top 3 Podium */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {filteredData.slice(0, 3).map((player, index) => (
            <div key={player.id} className={`card p-6 text-center ${index === 0 ? 'bg-gradient-to-br from-yellow-50 to-yellow-100 border-2 border-yellow-200' : ''}`}>
              <div className="mb-4">
                {getRankIcon(player.rank)}
              </div>
              <div className="w-16 h-16 rounded-full bg-primary-100 mx-auto mb-3 flex items-center justify-center">
                <span className="text-lg font-semibold text-primary">{player.avatar}</span>
              </div>
              <h3 className="text-lg font-bold text-primary mb-1">{player.name}</h3>
              <p className="text-secondary mb-2">{player.level}</p>
              <div className="text-2xl font-bold text-primary mb-2">{player.points.toLocaleString()}</div>
              <div className="flex justify-center space-x-2 mb-3">
                <span className="text-sm text-secondary">{player.badges} badges</span>
                <span className="text-sm text-secondary">•</span>
                <span className="text-sm text-secondary">{player.streak} day streak</span>
              </div>
              <div className="flex flex-wrap gap-1 justify-center">
                {player.achievements.slice(0, 2).map((achievement, idx) => (
                  <span key={idx} className="text-xs bg-accent-100 text-accent-700 px-2 py-1 rounded-full">
                    {achievement}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
