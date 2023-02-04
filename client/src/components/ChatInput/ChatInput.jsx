import Button from '../Button/Button'
import { elementSelector } from '../Module/HelperFunction'
const ChatInput = ({ 
  func, id, send 
}) => {

  return (
    <section className='fixed bottom-0 left-0 w-full bg-bgColor'>
      <div className="container mx-auto py-2">
        <form className='relative flex align-center space-x-6 py-1 rounded-full bg-almostWhite drop-shadow-xl'>
          <label 
            className='cursor-pointer flex align-center
            drop-shadow-xl border bg-white py-2 px-4 rounded-full'
            onClick={() => {
              elementSelector('.socialIcons').classList.contains('hidden') ? 
              elementSelector('.socialIcons').classList.remove('hidden') :
              elementSelector('.socialIcons').classList.add('hidden')
            }}>
            <i className="fa fa-plus text-mainBlue self-center hover:text-blueColor"></i>
          </label>
          <input 
            type="text" 
            placeholder='Type a message...' 
            className='border rounded-full px-[02em] bg-transparent w-[90%] outline-none'
            onChange={func}
            id={id}
          />
          <Button 
            type={'submit'}
            className={'rounded-3xl px-2 text-2xl outline-none'}
            text={<i className='fa fa-paper-plane
            text-mainBlue self-center
            hover:text-blueColor cursor-pointer'>Send</i>}
            onclick={send}
          />
        </form>
      </div>
    </section>
  )
}

export default ChatInput