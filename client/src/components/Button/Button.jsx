
const Button = ({
  type,
  className,
  onclick,
  text
}) => {
  return (
    <button 
      type={type}
      className={`my-2 px-3 ${className}`}
      onClick={onclick}>
      {text}
    </button>
  )
}

export default Button