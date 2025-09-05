function Button(props) {
  return (
    <button
      {...props}
      className={` p-2 rounded-md text-white ${props.condicionalButton}`}
    >
      {props.children}
    </button>
  );
}

export default Button;
