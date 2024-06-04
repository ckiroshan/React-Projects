const Button = ({ onClickHandler, value, title }) => {
  return (
    <button onClick={onClickHandler} value={value} className="btn btn-round">
      {title}
    </button>
  );
};

export default Button;
