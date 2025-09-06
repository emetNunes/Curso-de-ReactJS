import { useState } from "react";
import Input from "./Input";
import { CircleX, TrashIcon } from "lucide-react";
import Button from "./Button";

function AddTask({ onAddTaskSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [categoryColor, setCategoryColor] = useState("");

  const [clickInInput, setClickInInput] = useState(true);
  const [clickInCategory, setClickInCategory] = useState(true);

  return (
    <div className="space-y-4 p-6 bg-[#F2ECEB] rounded-md flex flex-col shadow">
      <Input
        label="Faça seu Habito"
        type="text"
        placeholder="Digite o titulo da tarefa"
        value={title}
        onChange={(event) => {
          setTitle(event.target.value);
        }}
      />

      <a
        style={{ marginBottom: "-15px" }}
        className={`${
          !clickInInput && "hidden"
        } hover:text-[#5E90F2] text-[#447EF2]`}
        href="#"
        onClick={() => setClickInInput(!clickInInput)}
      >
        + Adicionar descrição
      </a>

      <div className="flex gap-2">
        <Input
          condicionalInput={!clickInInput ? "w-96" : "w-full hidden"}
          type="text"
          placeholder="Digite a descrição"
          value={description}
          onChange={(event) => {
            setDescription(event.target.value);
          }}
        />
        <Button
          onClick={() => setClickInInput(!clickInInput)}
          condicionalButton={`
                ${clickInInput && "hidden "} ${"ml-2 bg-[#5E90F2]"}`}
        >
          <CircleX />
        </Button>
      </div>

      <button className="flex w-40 justify-start">
        <div
          onClick={() => setClickInCategory(!clickInCategory)}
          className={`${
            !clickInCategory && "hidden"
          } flex w-32 mr-2  hover:bg-[#447EF2] hover:text-[#f2eceb]  font-medium border-[#447EF2] border-2 rounded-md p-2  text-[#447EF2]`}
        >
          <TrashIcon className="mr-1" /> Categoria
        </div>
      </button>
      {!clickInCategory && (
        <label
          className="font-medium text-[#0D0D0D]"
          style={{ marginBottom: "-15px", marginTop: "-2px" }}
        >
          Categoria
        </label>
      )}
      <div className="flex gap-2">
        <Input
          condicionalInput={!clickInCategory ? "w-96 " : " w-full hidden"}
          type="text"
          placeholder="Adicione uma categoria"
          value={category}
          onChange={(event) => {
            setCategory(event.target.value);
          }}
        />

        <Button
          onClick={() => setClickInCategory(!clickInCategory)}
          condicionalButton={`
                ${clickInCategory && "hidden"} ${"ml-2 bg-[#5E90F2]"}`}
        >
          <CircleX />
        </Button>
      </div>
      <button
        onClick={() => {
          if (!title.trim()) {
            return alert("Preecha o titulo da tarefa.");
          }

          if (category != "") {
            onAddTaskSubmit(title, description, category, "#F24B59");
          } else {
            onAddTaskSubmit(title, description, category, "#F2ECEB");
          }

          setTitle("");
          setDescription("");
          setCategory("");
          setClickInInput(true);
          setCategoryColor("#F2ECEB");
          setClickInCategory(true);
        }}
        className="bg-[#447EF2] text-white px-4 py-3 rounded-md font-medium"
      >
        Adicionar
      </button>
    </div>
  );
}

export default AddTask;
