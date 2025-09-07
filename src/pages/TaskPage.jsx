import { ChevronsLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Title from "../components/Title";

function TaskPage() {
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");
  const category = searchParams.get("category");
  const navigate = useNavigate();

  return (
    <div className="h-screen w-screen bg-[#F2ECEB] p-6">
      <div className="space-y-4 mx-auto ">
        <div className="flex justify-center relative mb-6">
          <button
            onClick={() => navigate(-1)}
            className="text-[#0D0D0D] absolute left-0 top-0 bottom-0"
          >
            <ChevronsLeftIcon />
          </button>
          <Title>Detalhes da tarefa</Title>
        </div>
        <div className="space-y-4 p-6 bg-[#F2ECEB] rounded-md shadow">
          <div className="flex gap-2 relative">
            <h1 className="text-xl text-[#0D0D0D] font-bold"> {title}</h1>
            <div
              className={`${
                category == "" && "hidden"
              } truncate bg-white text-white rounded-md absolute right-2 h-6 w-20 px-1 text-center`}
              style={{
                backgroundColor: category ? "#F24B59" : "#F2ECEB",
              }}
            >
              {category !== "" ? category : ""}
            </div>
          </div>
          <p className="text-[#5E90F2]">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;
