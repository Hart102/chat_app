import LoginLogo from '../asserts/Img/login.png'
import Signup from '../components/Form/Signup'
import SignIn from '../components/Form/SignIn'
import { useState } from 'react'

const Index = () => {
    const[switchForm, setSwitchForm] = useState('true')

  return (
    // bg-[url(../asserts/Img/formbg.jpg)]
    <section className=" bg-no-repeat bg-center bg-cover h-screen w-screen py-5"
        style={{background: 'rgba(0, 129, 105, 0.938)'}}>
        <div className='w-[100%] h-full flex flex-col justify-center mx-auto px-10 bg-white rounded-3xl md:w-[40%]'>
            <div className="w-[80px] h-[80px] relative mx-auto drop-shadow-xl bg-blueColor rounded-full border p-1">
                <img src={LoginLogo} className="w-full h-full absolute" />
            </div>
            <div className={switchForm == 'true' ? 'block' : 'hidden'}>
                <SignIn />
            </div>
            <div className={switchForm == 'true' ? 'hidden' : 'block'}>
                <Signup />
            </div>
            <p className='mt-3 text-center cursor-pointer font-light'
            onClick={() => switchForm == 'true' ? setSwitchForm('false') : setSwitchForm('true')}>
                {switchForm == 'true' ? 'Don"t have an account?' : 'Already have an account?'}
            </p>
        </div>

    </section>
  )
}

export default Index

// #3B88ED