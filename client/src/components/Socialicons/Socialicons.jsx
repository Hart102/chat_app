import { elementSelector } from "../Module/HelperFunction"

const Socialicons = () => {
  const displayModel = () => {
    if (elementSelector('.model').classList.contains('hidden')) {
      elementSelector('.model').classList.remove('hidden')
    }
  }
  return (
    <>
    <section 
        className="socialIcons hidden cursor-pointer w-[70px] p-2 py-5 
        -my-[50px] pb-5 flex flex-col rounded-t-full text-center space-y-6 relative left-3 -top-[110px] md:-top-[195px]"
        style={{position: 'fixed', top: '50%'}}>
        <i 
          className="fa fa-camera bg-white py-5 rounded-full hover:bg-chatCardColor" 
          onClick={() => displayModel()}></i>
        <i 
          className="fa fa-photo bg-yellow py-5  rounded-full hover:bg-chatCardColor" 
          onClick={() => displayModel()}></i>
        <i 
          className="fa fa-file bg-chatCardColor py-5  rounded-full hover:bg-chatCardColor" 
          onClick={() => displayModel()}></i>
    </section>
    </>
  )
}

export default Socialicons