import { fetchTasks, type Task } from "../data/server";
import { useState, useEffect } from "react";
import GitHubEmbed from "../utils/GitHubEmbed";

function TodoListItem({
  title,
  date,
  id,
  isCompleted,
  tasks,
  handleUpdateTasks,
}: Task & { tasks: Task[]; handleUpdateTasks: (newTasks: Task[]) => void }) {
  const handleCompleteTask = () => {
    const newTasks = tasks.map((task) =>
      task.id === id ? { ...task, isCompleted: true } : task
    );
    handleUpdateTasks(newTasks);
  };

  const handleArchiveTask = () => {
    const newTasks = tasks.filter((task) => task.id != id);
    handleUpdateTasks(newTasks);
  };

  let buttonContent;
  if (isCompleted) {
    buttonContent = (
      <button className="outline-button" onClick={handleArchiveTask}>
        🗃️ archive task
      </button>
    );
  } else {
    buttonContent = (
      <button className="outline-button" onClick={handleCompleteTask}>
        ✅ mark task completed
      </button>
    );
  }
  return (
    <li className="grid grid-cols-2 mt-8 p-4 items-center">
      <div>
        {title} // {date}
      </div>
      <div>{buttonContent}</div>
    </li>
  );
}

function TodoList({
  tasks,
  handleUpdateTasks,
}: {
  tasks: Task[];
  handleUpdateTasks: (newTasks: Task[]) => void;
}) {
  return (
    <ul>
      {tasks.map((task) => (
        <TodoListItem
          key={task.id}
          {...task}
          tasks={tasks}
          handleUpdateTasks={handleUpdateTasks}
        />
      ))}
    </ul>
  );
}

export default function Todo() {
  const [tasks, setTasks] = useState<Task[] | null>(null);

  useEffect(() => {
    async function fetchTasksEfect() {
      const tasks = await fetchTasks();

      setTasks(tasks);
    }
    fetchTasksEfect();
  }, []);

  const onUpdateTasks = (newTasks: Task[]) => {
    setTasks(newTasks);
  };

  let taskContent;
  if (tasks && tasks.length > 0) {
    taskContent = <TodoList tasks={tasks} handleUpdateTasks={onUpdateTasks} />;
  } else {
    taskContent = <div>loading tasks...</div>;
  }

  return (
    <>
      <div className="max-w-lg mx-auto mt-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Todo list example for passing callbacks as props
        </h2>
        <ul className="list-disc list-inside text-gray-700">
          <li className="mb-2">
            Todo list showing a list of tasks from mock api request.
          </li>
          <li className="mb-2">
            All tasks default to uncompleted on load. Uncompleted tasks show a
            button to mark completed. Completed task have button to archive,
            archived tasks don't show. Completed tasks have button to archive.
            Archived tasks don’t show.
          </li>
          <li className="mb-2">
            Work in progress (still remaining): Button to revert to original
            list. If all tasks archived show 'All archived' instead of loading
            text.
          </li>
        </ul>
        {taskContent}
      </div>
      <GitHubEmbed
        url="https://emgithub.com/embed-v2.js?target=https%3A%2F%2Fgithub.com%2Fnathansf%2Ffirebase-react-ts-sandbox%2Fblob%2Fmain%2Fsrc%2Fpages%2FTodo.tsx&style=github-dark-dimmed&type=code&showLineNumbers=on&showFileMeta=on&showFullPath=on&showCopy=on"
        title="Code for Todo list example and passing set state callback as prop in typescript"
      />
    </>
  );
}
