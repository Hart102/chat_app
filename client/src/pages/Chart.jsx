import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import io from 'socket.io-client';
import Avater from '../components/Avater/Avater'
import Chartcard from '../components/ChartCard/Chartcard'
import ChatInput from '../components/ChatInput/ChatInput'
import { 
  clearInput, 
  SendMessage ,
} from '../components/Module/HelperFunction'
import Socialicons from '../components/Socialicons/Socialicons';
import Model from '../components/Model/Model';

const Chart = () => {
  const navigation = useNavigate();
  const location = useLocation();
  const socket = io.connect('http://localhost:5000');
  
  const [user, setUser] = useState(location.state)
  const [previousMsgs, setpreviousMsgs] = useState('')
  const [category, setCategory] = useState(user.department)

  //===========switch chat function=========== 
  const switchChats = (arg) => {
    switch (arg) {
      case 'Students':
        return setCategory(user.department)
      case 'student/lecturer':
        return setCategory('student/lecturer')
      case 'Lecturers':
        return setCategory('Lecturers')
      default:
        return setCategory(user.department)
    }
  }

  //====== Fetch previous messages function =========
  class LoadPreviousMsg {
    constructor() {
      Object.assign(this, {})
    }
    fetctMessages(){
      return socket.emit('chat message')
    }
    capturePreviousMsg(){
      socket.on('chat message', (messages) => {
        return setpreviousMsgs(messages)
      })
    }
  }
  const previousMessage = new LoadPreviousMsg()
  const loadMsgs = () => {// Load messages
    previousMessage.capturePreviousMsg()
    previousMessage.fetctMessages()
  }

  //==========Triger Send message function==========
  const message = new SendMessage(user)
  message.msgCategory(category)
  const sendMsg = () => {
    if (document.querySelector('#msg').value !== '') {
      socket.emit('send message', message.msg())
      clearInput('#msg'); loadMsgs();
    }
  }

  useEffect(() => {
    console.log(user);
    if (!user) return navigation('/')
    loadMsgs()
  }, [])
 

  return (
    <section className='bg-[url(../asserts/Img/chatbg.jpg)] w-screen h-full overflow-y-scroll overflow-x-hidden'>
      <div className="container relative mx-auto w-screen h-[100vh] py-10">
        {/*=========Navbar=========*/}
        <Avater 
          name={user ? user.firstname : null} 
          lastname={user ? user.lastname : null}
          onclick={(e) => switchChats(e.target.textContent)}
          role={user.department}
        />
        <div className="px-5 py-5 pb-20 my-20 relative overflow-x-hidden">
          {previousMsgs ? previousMsgs.map(msg => msg.category == category &&
            <div key={msg.id} className={`grid justify-items-stretch w-[100%]`}>
              {/*========Chats========*/}
              <Chartcard  
                sender={msg.sender_id === user.id ?  'you' : msg.sender_name} 
                message={msg.chat_message}
                className={user.id === msg.sender_id ? //====Arrange chats=========
                  `justify-self-end ${msg.sender_id} chats ` : `chats ${msg.sender_id}`}
              />
            </div>
          ): null}
        </div>
        {/*=======Social Icons=======*/}
        <Socialicons /> 
        {/*=======Chat input============*/}
        <ChatInput 
          id={'msg'}
          func={(e) => message.captureUserMsg(e.target.value)}
          send={(e) => {
            e.preventDefault()
            sendMsg()
        }}/>
      </div>
      <Model />
    </section>
  )
}

export default Chart
// style={{background: 'linear-gradient(to left, #184DDF 0%, #68D3FA 100%)'}}