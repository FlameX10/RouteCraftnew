# RouteCraft

**RouteCraft** is a modern learning platform designed to help students navigate their educational journey, collaborate with peers, and track their progress toward mastery.

## 🎯 Features

- **Home Dashboard** - Get an overview of your learning activities
- **Dashboard** - Track your progress with analytics and statistics
- **Roadmap** - View and follow structured learning paths
- **Group Collaboration** - Connect and study with other learners
- **Leaderboard** - Compete and see how you rank among peers
- **Profile Management** - Customize your learning profile
- **Contact Support** - Reach out for help and support
- **Friend Management** - Build your learning community

## 🛠️ Tech Stack

- **Frontend Framework**: React with React Router
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Icons**: Lucide React
- **Linting**: ESLint
- **CSS Processing**: PostCSS

## 📁 Project Structure

```
src/
├── components/
│   ├── Home.jsx              # Landing page for authenticated users
│   ├── Dashboard.jsx         # Analytics and progress tracking
│   ├── Profile.jsx           # User profile management
│   ├── RoadMap.jsx           # Learning path viewer
│   ├── RoadmapGenerator.jsx  # Dynamic roadmap creation
│   ├── Group.jsx             # Group collaboration features
│   ├── Leaderboard.jsx       # Ranking and competition
│   ├── Contact.jsx           # Support and contact form
│   ├── Sidebar.jsx           # Navigation menu
│   ├── AddFriend.jsx         # Friend management
│   ├── AuthPage.jsx          # Authentication wrapper
│   ├── Login.jsx             # Login form
│   ├── Landing.jsx           # Public landing page
│   └── Table.jsx             # Reusable table component
├── App.jsx                   # Main application component
├── main.jsx                  # React entry point
├── index.css                 # Global styles
└── App.css                   # App-specific styles
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone <repository-url>
   cd RouteCraft
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start the development server
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## 📋 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🔐 Authentication

The platform includes:
- **Login Page** - User authentication
- **Auth Page** - Protected route wrapper
- **Profile Management** - User profile customization

## 🎨 UI Components

- **Sidebar** - Main navigation with user profile section
- **Table** - Reusable data table component
- **AddFriend** - Friend management interface
- **Contact** - Contact form and support page

## 🌟 Key Features Explained

### Dashboard
Monitor your learning statistics and progress with interactive charts powered by BarChart3 icon integration.

### Roadmap Generator
Dynamically create personalized learning paths based on your goals and progress.

### Group Collaboration
Connect with peers, form study groups, and collaborate on learning objectives.

### Leaderboard
Track your standing and get motivated by healthy competition with other learners.

## 🎨 Styling

The project uses:
- **Tailwind CSS** for utility-first styling
- **Custom color scheme** with primary colors
- **Responsive design** for all screen sizes
- **Smooth transitions** and hover effects

## 📝 Configuration Files

- `vite.config.js` - Vite build configuration
- `tailwind.config.js` - Tailwind CSS customization
- `postcss.config.js` - PostCSS processing
- `eslint.config.js` - Code linting rules

## 🤝 Contributing

Contributions are welcome! Please follow the existing code style and structure.

## 📄 License

This project is part of the RouteCraft learning platform initiative.

## 👨‍💻 Author

Created by Prasen Shinde

---

**Happy Learning! 🚀**
