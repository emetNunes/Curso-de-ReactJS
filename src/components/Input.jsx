function Input(props) {
  return (
    <div className="flex flex-col">
      <label className="font-medium text-slate-700">{props.label}</label>

      <input
        className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
        {...props}
      />
    </div>
  );
}

export default Input;
