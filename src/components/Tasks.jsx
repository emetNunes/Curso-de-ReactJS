import {
  CheckIcon,
  ChevronRightIcon,
  Circle,
  CircleCheckBig,
  TrashIcon,
} from "lucide-react";
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

  var taskFilterNoCompleter = tasks.filter((task) => !task.isCompleted);
  var taskFilterCompleter = tasks.filter((task) => task.isCompleted);

  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
      <h1 className="text-slate-500 font-bold border-b-2 pb-1 border-slate-400">
        Tarefas - {taskFilterNoCompleter.length}
      </h1>
      <ul>
        {taskFilterNoCompleter.length == 0 && (
          <div className="text-slate-500">
            Não tem nenhuma tarefa a ser concluida!
          </div>
        )}
        {taskFilterNoCompleter.map((task) => (
          <li key={task.id} className={`flex gap-2 pb-2`}>
            <button
              onClick={() => onTaskClick(task.id)}
              className={`
                ${
                  task.isCompleted ? "bg-slate-300" : "bg-slate-400"
                } w-full text-left flex text-white p-2 rounded-md 
                ${task.isCompleted && "line-through text-gray-500 "}
              `}
            >
              <div className="my-auto mr-3">
                {task.isCompleted ? <CircleCheckBig /> : <Circle />}
              </div>
              <div>
                <div>{task.title}</div>
                <div className="text-gray-200">{task.description}</div>
              </div>
            </button>

            <Button
              onClick={() => onSeeDetails(task)}
              condicionalButton={`
                ${task.isCompleted ? "bg-slate-300" : "bg-slate-400"}`}
            >
              <ChevronRightIcon />
            </Button>

            <Button
              onClick={() => onDeleteTask(task.id)}
              condicionalButton={`
                ${task.isCompleted ? "bg-slate-300" : "bg-slate-400"}`}
            >
              <TrashIcon />
            </Button>
          </li>
        ))}
      </ul>
      <div>
        <h1 className="text-slate-500 font-bold border-b-2 pb-1 border-slate-400">
          Concluidas - {taskFilterCompleter.length}
        </h1>
        <ul className="pt-3">
          {taskFilterCompleter.length == 0 && (
            <div className="text-slate-500">
              Não tem nenhuma tarefa concluida!
            </div>
          )}
          {taskFilterCompleter.map((task) => (
            <li key={task.id} className={`flex gap-2 pb-2`}>
              <button
                onClick={() => onTaskClick(task.id)}
                className={`
                ${
                  task.isCompleted ? "bg-slate-300" : "bg-slate-400"
                } w-full text-left flex text-white p-2 rounded-md 
                ${task.isCompleted && "line-through text-gray-500 "}
              `}
              >
                <div className="my-auto mr-3">
                  {task.isCompleted ? <CircleCheckBig /> : <Circle />}
                </div>
                <div>
                  <div>{task.title}</div>
                  <div className="text-gray-200">{task.description}</div>
                </div>
              </button>

              <Button
                onClick={() => onSeeDetails(task)}
                condicionalButton={`
                ${task.isCompleted ? "bg-slate-300" : "bg-slate-400"}`}
              >
                <ChevronRightIcon />
              </Button>

              <Button
                onClick={() => onDeleteTask(task.id)}
                condicionalButton={`
                ${task.isCompleted ? "bg-slate-300" : "bg-slate-400"}`}
              >
                <TrashIcon />
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Tasks;
