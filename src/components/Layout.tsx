import React from 'react';
import { motion } from 'framer-motion';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Header with neon effect */}
      <header className="relative py-6 px-4 border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="flex justify-between items-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="neon-text text-4xl md:text-5xl font-bold">Neon Tasks</h1>
            <div className="text-sm text-purple-300/70">
              {new Date().toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </div>
          </motion.div>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-7xl mx-auto py-8 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Sidebar */}
          <motion.aside 
            className="lg:col-span-3 space-y-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="p-6 bg-black/30 backdrop-blur-sm rounded-lg shadow-lg border border-purple-500/30">
              <h2 className="text-xl font-semibold mb-4 text-purple-300">Task Stats</h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Total Tasks</span>
                  <span className="text-purple-400 font-medium">0</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Completed</span>
                  <span className="text-green-400 font-medium">0</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Pending</span>
                  <span className="text-yellow-400 font-medium">0</span>
                </div>
              </div>
            </div>

            <div className="p-6 bg-black/30 backdrop-blur-sm rounded-lg shadow-lg border border-purple-500/30">
              <h2 className="text-xl font-semibold mb-4 text-purple-300">Categories</h2>
              <div className="space-y-2">
                <button className="w-full text-left px-3 py-2 rounded-md bg-purple-500/20 text-purple-300 hover:bg-purple-500/30 transition-colors">
                  All Tasks
                </button>
                <button className="w-full text-left px-3 py-2 rounded-md hover:bg-purple-500/20 text-gray-300 hover:text-purple-300 transition-colors">
                  Work
                </button>
                <button className="w-full text-left px-3 py-2 rounded-md hover:bg-purple-500/20 text-gray-300 hover:text-purple-300 transition-colors">
                  Personal
                </button>
                <button className="w-full text-left px-3 py-2 rounded-md hover:bg-purple-500/20 text-gray-300 hover:text-purple-300 transition-colors">
                  Urgent
                </button>
              </div>
            </div>
          </motion.aside>

          {/* Main content area */}
          <motion.div 
            className="lg:col-span-9"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {children}
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 px-4 border-t border-purple-500/20">
        <div className="max-w-7xl mx-auto text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Neon Tasks - A stylish vintage-themed To-Do List app</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout; 