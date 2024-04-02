// TaskList.tsx
import React, { useState } from 'react';

interface Task {
  id: number;
  text: string;
  done: boolean;
}

interface TaskListProps {
  tasks: Task[];
  onChangeTask: (task: Task) => void;
  onDeleteTask: (taskId: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onChangeTask, onDeleteTask }) => {
  const [editedTask, setEditedTask] = useState<Task | null>(null);
  const [editedText, setEditedText] = useState('');

  const handleEdit = (task: Task) => {
    setEditedTask(task);
    setEditedText(task.text);
  };

  const handleSave = () => {
    if (editedTask) {
      onChangeTask({ ...editedTask, text: editedText });
      setEditedTask(null);
    }
  };

  const handleCancel = () => {
    setEditedTask(null);
  };

  const handleCheckboxChange = (task: Task) => {
    onChangeTask({ ...task, done: !task.done });
  };

  return (
    <div>
      <h2>Tasks</h2>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            {editedTask === task ? (
              <>
                <input
                  type="text"
                  value={editedText}
                  onChange={e => setEditedText(e.target.value)}
                />
                <button onClick={handleSave}>Confirm</button>
                <button onClick={handleCancel}>Cancel</button>
              </>
            ) : (
              <>
                <input
                  type="checkbox"
                  checked={task.done}
                  onChange={() => handleCheckboxChange(task)}
                />
                <span style={{ textDecoration: task.done ? 'line-through' : 'none' }}>{task.text}</span>
                <button onClick={() => handleEdit(task)}>Edit</button>
                <button onClick={() => onDeleteTask(task.id)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
