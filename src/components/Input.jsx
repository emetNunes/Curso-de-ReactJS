function Input(props) {
  return (
    <div className={`flex flex-col ${props.condicionalInput}`}>
      <label className="font-medium mb-1 text-[#0D0D0D]">{props.label}</label>

      <input
        className={` 
          border bg-[#f2eceb] 
          text-[#0D0D0D] placeholder:text-[#808080]
           border-[#c7c5c5] border-x-0 border-t-0 outline-[#c7c5c5] px-4 py-2
          `}
        {...props}
      />
    </div>
  );
}

export default Input;
