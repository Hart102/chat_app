const anchorTag = ({ 
  onclick, 
  text, 
  id
}) => {
  return (
    <span className='links h-full flex flex-col justify-center hover:text-blueColor'>
      <div>
        <i className='fa fa-users bg-yellow p-2 rounded-full'></i>
      </div>
      <p className='text-xs' id={id} onClick={onclick}>{text}</p>
    </span>
  )
}

export default anchorTag