// TaskApp.tsx
import React from 'react';

interface Task {
  id: number;
  text: string;
  done: boolean;
}

interface TaskAppProps {
  onAddTask: (text: string) => void;
}

const TaskApp: React.FC<TaskAppProps> = ({ onAddTask }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const text = formData.get('taskText') as string;
    onAddTask(text);
  };

  return (
    <div>
      <h2>Add Task</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="taskText" required />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default TaskApp;
