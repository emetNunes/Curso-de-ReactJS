import { useState } from "react";
import Input from "./Input";

function AddTask({ onAddTaskSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md flex flex-col shadow">
      <Input
        label="Habito"
        type="text"
        placeholder="Digite o titulo da tarefa"
        value={title}
        onChange={(event) => {
          setTitle(event.target.value);
        }}
      />
      <div className="border border-slate-300"></div>
      <Input
        label="Descrição"
        type="text"
        placeholder="Digite a descrição"
        value={description}
        onChange={(event) => {
          setDescription(event.target.value);
        }}
      />
      <Input
        label="Categoria"
        type="text"
        placeholder="Adicione uma categoria"
        value={category}
        onChange={(event) => {
          setCategory(event.target.value);
        }}
      />
      <button
        onClick={() => {
          if (!title.trim()) {
            return alert("Preecha o titulo da tarefa.");
          }

          onAddTaskSubmit(title, description, category);
          setTitle("");
          setDescription("");
          setCategory("");
        }}
        className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium"
      >
        Adicionar
      </button>
    </div>
  );
}

export default AddTask;
