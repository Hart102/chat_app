const InputField = ({
  type,
  placeholder,
  onchange, 
  Id,
  className
}) => {
 
  return (
    <span>
      <input 
        type={type} 
        className={`border px-10 py-4 my-3 drop-shadow-md rounded-3xl ${className}`}
        placeholder={placeholder} 
        onChange={onchange}
        id={Id}
      />
    </span>
  )
}

export default InputField