import {
  CheckIcon,
  ChevronRightIcon,
  Circle,
  CircleCheckBig,
  TrashIcon,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import { useState } from "react";

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
    <div className="space-y-4 p-6 bg-[#F2ECEB] rounded-md shadow">
      <h1 className="text-[#0D0D0D] font-medium border-b-2 pb-1 border-[#c7c5c5]">
        Tarefas - {taskFilterNoCompleter.length}
      </h1>

      <ul>
        {taskFilterNoCompleter.length == 0 && (
          <div className="text-[#447EF2] font-medium">
            Não tem nenhuma tarefa a ser concluida!
          </div>
        )}
        {taskFilterNoCompleter.map((task) => (
          <li key={task.id} className={`flex gap-2 pb-2`}>
            <button
              className={`
                ${
                  task.isCompleted
                    ? "bg-slate-300"
                    : " border-2  border-x-0 border-t-0"
                } w-full text-left flex text-white p-2  rounded-md relative
                ${task.isCompleted && "line-through text-gray-500  "}
              `}
            >
              <div
                onClick={() => onTaskClick(task.id)}
                className="text-[#447EF2] my-auto w-8"
              >
                {task.isCompleted ? <CircleCheckBig /> : <Circle />}
              </div>

              <div
                className={`${
                  task.category == "" && "hidden"
                } truncate bg-white rounded-md absolute right-2 h-6 w-20 px-1 text-center`}
                style={{ backgroundColor: task.category.categoryColor }}
              >
                {task.category.category}
              </div>

              <div onClick={() => onSeeDetails(task)} className=" w-64">
                <div className="break-all font-bold text-[#0D0D0D]">
                  {task.title}
                </div>

                <div className="text-[#5E90F2] break-all">
                  {task.description}
                </div>
              </div>
            </button>

            <Button
              onClick={() => onDeleteTask(task.id)}
              condicionalButton={`
                ${task.isCompleted ? "bg-slate-300" : "bg-[#5E90F2]"}`}
            >
              <TrashIcon />
            </Button>
          </li>
        ))}
      </ul>

      <div>
        <h1 className="text-[#0D0D0D] font-medium border-b-2 pb-1 border-[#c7c5c5]">
          Concluidas - {taskFilterCompleter.length}
        </h1>
        <ul className="pt-3">
          {taskFilterCompleter.length == 0 && (
            <div className="text-[#447EF2] font-medium">
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
