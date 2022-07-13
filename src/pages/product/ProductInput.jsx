function ProdcutInput({ name, placeholder }) {
  return (
    <div className={`wrapper-${name}`}>
      <label htmlFor={`input-${name}`} className={`label-${name}`}>
        상품명
      </label>
      <input id={`input-${name}`} type="text" placeholder={placeholder}></input>
    </div>
  );
}

export default ProdcutInput;
