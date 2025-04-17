import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Layout from './components/Layout';
import TaskForm from './components/TaskForm';
import TaskItem from './components/TaskItem';
import { Task, TaskCategory } from './types/Task';

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<TaskCategory | 'All'>('All');

  const handleAddTask = (taskData: Omit<Task, 'id' | 'createdAt'>) => {
    if (editingTask) {
      setTasks((prev) =>
        prev.map((task) =>
          task.id === editingTask.id
            ? { ...taskData, id: task.id, createdAt: task.createdAt }
            : task
        )
      );
      setEditingTask(null);
    } else {
      const newTask: Task = {
        ...taskData,
        id: crypto.randomUUID(),
        createdAt: new Date(),
      };
      setTasks((prev) => [...prev, newTask]);
    }
  };

  const handleToggleComplete = (id: string) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDeleteTask = (id: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const handleEditTask = (task: Task) => {
    setEditingTask(task);
  };

  // Filter tasks based on selected category
  const filteredTasks = useMemo(() => {
    if (selectedCategory === 'All') return tasks;
    return tasks.filter(task => task.category === selectedCategory);
  }, [tasks, selectedCategory]);

  // Calculate task stats
  const taskStats = useMemo(() => {
    return {
      total: tasks.length,
      completed: tasks.filter(task => task.completed).length,
      pending: tasks.filter(task => !task.completed).length
    };
  }, [tasks]);

  return (
    <Layout>
      <div className="space-y-6">
        {/* Task Form */}
        <div className="bg-black/30 backdrop-blur-sm rounded-lg shadow-lg border border-purple-500/30 overflow-hidden">
          <div className="p-4 border-b border-purple-500/20">
            <h2 className="text-xl font-semibold text-purple-300">
              {editingTask ? 'Edit Task' : 'Add New Task'}
            </h2>
          </div>
          <div className="p-6">
            <TaskForm
              onAddTask={handleAddTask}
              initialTask={editingTask}
            />
          </div>
        </div>

        {/* Task List */}
        <div className="bg-black/30 backdrop-blur-sm rounded-lg shadow-lg border border-purple-500/30 overflow-hidden">
          <div className="p-4 border-b border-purple-500/20">
            <h2 className="text-xl font-semibold text-purple-300">Your Tasks</h2>
          </div>
          <div className="p-6">
            <AnimatePresence mode="popLayout">
              {filteredTasks.length > 0 ? (
                <div className="space-y-4">
                  {filteredTasks.map((task) => (
                    <TaskItem
                      key={task.id}
                      task={task}
                      onToggleComplete={handleToggleComplete}
                      onDelete={handleDeleteTask}
                      onEdit={handleEditTask}
                    />
                  ))}
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-12"
                >
                  <div className="text-6xl mb-4">📝</div>
                  <p className="text-gray-400 text-lg">
                    {selectedCategory === 'All' 
                      ? "You don't have any tasks yet. Add one above!" 
                      : `No ${selectedCategory.toLowerCase()} tasks found.`}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default App; 