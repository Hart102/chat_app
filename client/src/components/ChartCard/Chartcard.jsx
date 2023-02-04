const Chartcard = ({ 
  sender, message, className
}) => {
  return (
    <>
    <div className={`
      card bg-chatCardColor text-darkBlue p-5 my-3 
      rounded-3xl py-3 drop-shadow-xl capitalize ${className} w-1/2 md:w-1/3`}>
      <span className="mb-3 text-base text-xs lowercase bg-yellow font-bold text-white rounded-full px-1">@{sender}</span>
      <p className="text-sm">{message}</p>
    </div>
    </>
  )
}

export default Chartcard