import React from 'react';
import { motion } from 'framer-motion';
import { Task } from '../types/Task';

interface TaskItemProps {
  task: Task;
  onToggleComplete: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (task: Task) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({
  task,
  onToggleComplete,
  onDelete,
  onEdit,
}) => {
  const getPriorityColor = (priority: Task['priority']) => {
    switch (priority) {
      case 'High':
        return 'text-red-400 bg-red-400/10';
      case 'Medium':
        return 'text-yellow-400 bg-yellow-400/10';
      case 'Low':
        return 'text-green-400 bg-green-400/10';
      default:
        return 'text-white bg-white/10';
    }
  };

  const getCategoryColor = (category: Task['category']) => {
    switch (category) {
      case 'Work':
        return 'text-blue-400 bg-blue-400/10';
      case 'Personal':
        return 'text-purple-400 bg-purple-400/10';
      case 'Urgent':
        return 'text-red-400 bg-red-400/10';
      default:
        return 'text-white bg-white/10';
    }
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -100 }}
      className={`p-4 bg-black/30 backdrop-blur-sm rounded-lg shadow-lg border ${
        task.completed ? 'border-green-500/30' : 'border-purple-500/30'
      } transition-all duration-300 hover:border-purple-500/50`}
    >
      <div className="flex items-center space-x-4">
        <div className="flex-shrink-0">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => onToggleComplete(task.id)}
            className="w-5 h-5 rounded border-purple-500/30 text-purple-500 focus:ring-purple-500 focus:ring-offset-black"
          />
        </div>
        <div className="flex-1 min-w-0">
          <h3
            className={`text-lg font-medium truncate ${
              task.completed ? 'line-through text-gray-400' : 'text-white'
            }`}
          >
            {task.title}
          </h3>
          <div className="flex flex-wrap items-center gap-2 mt-2">
            {task.scheduledTime && (
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-800 text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                {task.scheduledTime}
              </span>
            )}
            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getCategoryColor(task.category)}`}>
              {task.category}
            </span>
            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getPriorityColor(task.priority)}`}>
              {task.priority}
            </span>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => onEdit(task)}
            className="p-2 text-purple-400 hover:text-purple-300 transition-colors"
            title="Edit task"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
                clipRule="evenodd"
              />
            </svg>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => onDelete(task.id)}
            className="p-2 text-red-400 hover:text-red-300 transition-colors"
            title="Delete task"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default TaskItem; 