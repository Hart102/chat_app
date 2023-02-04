import UserImg from '../../asserts/Img/avater.png'
import AnchorTag from '../Link/anchorTag'
import { elementSelector } from '../Module/HelperFunction'
const Avater = ({ 
  name, lastname,
  onclick,
  role
}) => {

  return (
    <>
    <section 
      className="fixed top-0 left-0 w-full flex align-center py-3 text-white1 bg-headerColor drop-shadow-sm z-[50]">
      <div className="container relative mx-auto flex justify-between align-center px-3">
        <div className="flex  justify-center align-center space-x-4 md:flex md:flex-row">
          {/*------ Avater  ------*/}
          <span className="flex justify-center drop-shadow-xl rounded-full">
            <div className='w-[50px] h-[50px] relative'>
              <img src={UserImg} className='absolute w-full h-full' />
            </div> 
          </span>
          {/*------    User ------   */}
          <span className='text-black'>
            <b className='uppercase text-white'>{name}</b>
            <p className='capitalize text-white font-light tracking-wider'>{lastname}</p>
          </span>
        </div>
        <span 
          className='flex align-baseline space-x-2 cursor-pointer font-light text-white' 
          onClick={() => {
            elementSelector('.menu').classList.contains('hidden') ? 
            elementSelector('.menu').classList.remove('hidden') :
            elementSelector('.menu').classList.add('hidden')
          }}>
          <p>more</p>
          <i className="fa fa-sort-desc fa-1x"></i>
        </span>
        <div 
          className="hidden menu flex-col absolute right-2 top-[70px] bg-white drop-shadow-xl space-y-6 p-10 
          capitalize tracking-wider font-light text-center cursor-pointer">
          <div className={role == 'staff' ? 'hidden' : ''}>
            <AnchorTag 
              onclick={onclick}
              text={'students'}
            />
          </div>
          <div>
            <AnchorTag 
              onclick={onclick}
              text={'student/lecturer'}
            />
          </div>
          <div className={role !== 'staff' ? 'hidden' : ''}>
            <AnchorTag 
              onclick={onclick}
              text={'Lecturers'}
            />
          </div>

          {/* <div>
            <p>Logout</p>
          </div> */}
          </div>
        </div>
    </section>
    </>
  )
}

export default Avater