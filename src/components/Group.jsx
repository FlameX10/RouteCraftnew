import React, { useState } from 'react';
import { X, Users, Calendar, Target, MessageCircle, BookOpen, Plus, TrendingUp, Award, Clock, Star, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

const Group = () => {
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [activeTab, setActiveTab] = useState('all');

  // Example room data with enhanced information
  const rooms = [
    { 
      id: 1, 
      subject: 'React Development', 
      members: 10, 
      created: '2023-09-25', 
      tasks: ['Component Creation', 'State Management', 'Hooks Implementation'],
      progress: 75,
      category: 'frontend',
      lastActivity: '2 hours ago',
      description: 'Advanced React concepts and modern development practices'
    },
    { 
      id: 2, 
      subject: 'Advanced Data Structures', 
      members: 15, 
      created: '2023-09-22', 
      tasks: ['Binary Trees', 'Graph Algorithms', 'Dynamic Programming'],
      progress: 60,
      category: 'algorithms',
      lastActivity: '1 day ago',
      description: 'Master complex data structures and algorithmic thinking'
    },
    { 
      id: 3, 
      subject: 'Python Programming', 
      members: 8, 
      created: '2023-09-20', 
      tasks: ['File I/O', 'Object-Oriented Programming', 'Web Scraping'],
      progress: 45,
      category: 'backend',
      lastActivity: '3 days ago',
      description: 'Complete Python programming from basics to advanced'
    },
    { 
      id: 4, 
      subject: 'MERN Stack Project', 
      members: 8, 
      created: '2023-02-20', 
      tasks: ['Database Design', 'API Development', 'Frontend Integration'],
      progress: 85,
      category: 'fullstack',
      lastActivity: '5 hours ago',
      description: 'Build a complete full-stack application using MERN'
    },
    { 
      id: 5, 
      subject: 'Semester 1 Assignments', 
      members: 8, 
      created: '2024-09-20', 
      tasks: ['Research Paper', 'Code Implementation', 'Documentation'],
      progress: 30,
      category: 'academic',
      lastActivity: '1 week ago',
      description: 'Collaborative academic project work and research'
    },
    { 
      id: 6, 
      subject: 'GoLang Development', 
      members: 8, 
      created: '2023-10-20', 
      tasks: ['Concurrency', 'Web Services', 'Microservices'],
      progress: 55,
      category: 'backend',
      lastActivity: '2 days ago',
      description: 'Learn Go programming for scalable backend development'
    },
  ];

  const categories = [
    { id: 'all', name: 'All Rooms', count: rooms.length },
    { id: 'frontend', name: 'Frontend', count: rooms.filter(r => r.category === 'frontend').length },
    { id: 'backend', name: 'Backend', count: rooms.filter(r => r.category === 'backend').length },
    { id: 'fullstack', name: 'Full Stack', count: rooms.filter(r => r.category === 'fullstack').length },
    { id: 'algorithms', name: 'Algorithms', count: rooms.filter(r => r.category === 'algorithms').length },
    { id: 'academic', name: 'Academic', count: rooms.filter(r => r.category === 'academic').length },
  ];

  const filteredRooms = activeTab === 'all' ? rooms : rooms.filter(room => room.category === activeTab);

  const handleViewRoom = (room) => {
    setSelectedRoom(room);
  };

  const handleClosePopup = () => {
    setSelectedRoom(null);
  };

  const getCategoryColor = (category) => {
    const colors = {
      frontend: 'bg-primary-100 text-primary-700',
      backend: 'bg-accent-100 text-accent-700',
      fullstack: 'bg-success-100 text-success-700',
      algorithms: 'bg-warning-100 text-warning-700',
      academic: 'bg-secondary-100 text-secondary-700'
    };
    return colors[category] || 'bg-neutral-100 text-neutral-700';
  };

  return (
    <div className="min-h-screen bg-neutral-50 p-4">
      <div className="w-full">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold text-primary text-display">Study Groups</h1>
            <p className="text-secondary mt-1">Collaborate and learn together with your peers</p>
          </div>
          <Link to='AddFriend'>
            <button className="btn btn-primary flex items-center space-x-2">
              <Plus className="w-5 h-5" />
              <span>Create Room</span>
            </button>
          </Link>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="card p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-secondary">Total Rooms</p>
                <p className="text-2xl font-bold text-primary">{rooms.length}</p>
              </div>
              <div className="p-3 bg-primary-100 rounded-lg">
                <BookOpen className="w-6 h-6 text-primary-600" />
              </div>
            </div>
          </div>
          <div className="card p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-secondary">Total Members</p>
                <p className="text-2xl font-bold text-primary">{rooms.reduce((sum, room) => sum + room.members, 0)}</p>
              </div>
              <div className="p-3 bg-accent-100 rounded-lg">
                <Users className="w-6 h-6 text-accent-600" />
              </div>
            </div>
          </div>
          <div className="card p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-secondary">Active Projects</p>
                <p className="text-2xl font-bold text-primary">{rooms.filter(r => r.progress > 0 && r.progress < 100).length}</p>
              </div>
              <div className="p-3 bg-success-100 rounded-lg">
                <Activity className="w-6 h-6 text-success-600" />
              </div>
            </div>
          </div>
          <div className="card p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-secondary">Completed</p>
                <p className="text-2xl font-bold text-primary">{rooms.filter(r => r.progress === 100).length}</p>
              </div>
              <div className="p-3 bg-warning-100 rounded-lg">
                <Award className="w-6 h-6 text-warning-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  activeTab === category.id
                    ? 'bg-primary-500 text-white'
                    : 'bg-white text-secondary hover:bg-neutral-50'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>

        {/* Room Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRooms.map((room) => (
            <div key={room.id} className="card p-6 hover:scale-105 transition-transform">
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 text-primary">{room.subject}</h3>
                  <p className="text-sm text-secondary mb-3">{room.description}</p>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(room.category)}`}>
                  {room.category}
                </span>
              </div>
              
              <div className="space-y-3 mb-4">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-secondary" />
                    <span className="text-secondary">{room.members} members</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-secondary" />
                    <span className="text-secondary">{room.lastActivity}</span>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-secondary">Progress</span>
                    <span className="text-primary font-medium">{room.progress}%</span>
                  </div>
                  <div className="bg-tertiary rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-primary-500 to-accent-500 h-2 rounded-full transition-all duration-300" 
                      style={{width: `${room.progress}%`}}
                    ></div>
                  </div>
                </div>
              </div>

              <div className="flex space-x-2">
                <button
                  onClick={() => handleViewRoom(room)}
                  className="btn btn-primary flex-1"
                >
                  View Details
                </button>
                <button className="btn btn-outline">
                  <MessageCircle className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced Popup */}
      {selectedRoom && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-start mb-4">
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-primary">{selectedRoom.subject}</h2>
                <p className="text-secondary mt-1">{selectedRoom.description}</p>
              </div>
              <button onClick={handleClosePopup} className="text-tertiary hover:text-primary transition-colors">
                <X size={24} />
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-primary">Room Information</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-secondary">Members:</span>
                    <span className="text-primary font-medium">{selectedRoom.members}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-secondary">Created:</span>
                    <span className="text-primary font-medium">{selectedRoom.created}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-secondary">Last Activity:</span>
                    <span className="text-primary font-medium">{selectedRoom.lastActivity}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-secondary">Progress:</span>
                    <span className="text-primary font-medium">{selectedRoom.progress}%</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3 text-primary">Progress Overview</h3>
                <div className="bg-neutral-50 p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-secondary">Overall Progress</span>
                    <span className="text-sm font-medium text-primary">{selectedRoom.progress}%</span>
                  </div>
                  <div className="bg-tertiary rounded-full h-3 mb-3">
                    <div 
                      className="bg-gradient-to-r from-primary-500 to-accent-500 h-3 rounded-full transition-all duration-300" 
                      style={{width: `${selectedRoom.progress}%`}}
                    ></div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <p className="text-lg font-bold text-primary">{selectedRoom.tasks.length}</p>
                      <p className="text-xs text-secondary">Total Tasks</p>
                    </div>
                    <div>
                      <p className="text-lg font-bold text-accent-600">{Math.ceil(selectedRoom.tasks.length * selectedRoom.progress / 100)}</p>
                      <p className="text-xs text-secondary">Completed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-3 text-primary">Current Tasks</h3>
              <div className="space-y-2">
                {selectedRoom.tasks.map((task, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-neutral-50 rounded-lg">
                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                    <span className="text-primary">{task}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex space-x-3 mt-6">
              <button className="btn btn-primary flex-1">
                Join Room
              </button>
              <button className="btn btn-secondary">
                Share Room
              </button>
              <button className="btn btn-outline">
                View Members
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Group;