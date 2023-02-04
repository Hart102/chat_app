import { elementSelector } from "../Module/HelperFunction"

const Model = () =>  {
  return (
    <section className={"hidden model px-4"}
      style={{
      background: 'linear-gradient(rgba(0, 0, 0, 0.9),rgba(0, 0, 0, 0.9))',
      position: 'fixed', width: '100%', height: '100vh', 
      left: '0', top: '0', zIndex: '2000'}}>

      <div className="w-1/3 bg-white p-4 mx-auto my-5 rounded-2xl">
        <div className="py-4 text-center">
          <p>{'This work could not be completed due to limited time frame!'}</p>
        </div>

        <div className="flex justify-center">
          <div className="border cursor-pointer py-2 px-10 rounded-2xl bg-blueColor hover:drop-shadow-xl hover:bg-white" 
            onClick={(e) => elementSelector('.model').classList.add('hidden')}>Ok
          </div>
        </div>
      </div>
    </section>
  )
}

export default Model