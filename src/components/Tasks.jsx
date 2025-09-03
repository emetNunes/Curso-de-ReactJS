import { CheckIcon, ChevronRightIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

function Tasks({ tasks, onTaskClick, onDeleteTask }) {
  const navigate = useNavigate();

  function onSeeDetails(task) {
    const query = new URLSearchParams();
    query.set("title", task.title);
    query.set("description", task.description);
    navigate(`/task?${query.toString()}`);
  }

  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
      <h1 className="text-slate-500 font-bold border-b-2 pb-1 border-slate-400">
        Tarefas
      </h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} className={`flex gap-2 pb-2`}>
            <button
              onClick={() => onTaskClick(task.id)}
              className={`bg-slate-400 w-full text-left text-white p-2 rounded-md 
                ${
                  task.isCompleted &&
                  "line-through flex item-center text-gray-500"
                }
              `}
            >
              {task.isCompleted && <CheckIcon />}
              {task.title}
            </button>

            <Button onClick={() => onSeeDetails(task)}>
              <ChevronRightIcon />
            </Button>

            <Button onClick={() => onDeleteTask(task.id)}>
              <TrashIcon />
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tasks;
