// import HomeDesign from '../../asserts/Img/formdesign.jpg'
import { useState } from 'react'
import { Form } from 'semantic-ui-react'
import { useForm } from 'react-hook-form'
import io from 'socket.io-client';
import Button from '../Button/Button'
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const navigation = useNavigate();
    const[error, setError] = useState('')
    const socket = io.connect('http://localhost:5000', {
        transports: ["websocket"]
    });
    const { 
        register, 
        handleSubmit, 
        formState: { errors } 
    } = useForm();

    const onSubmit = (data) => {
        socket.emit('create account', data)
        socket.on('create account', res => {
            if (res.error) return setError(res.error)
            navigation('/chat', {state: res[0]})
        })
    }
    
  return (
    <>
    <Form onSubmit={handleSubmit(onSubmit)}>
        <div className='text-center mb-5 mt-3'>
            <b className="text-darkBlue font-light">Multi-Comm App</b>
            <p className='font-light text-red-500'>{error}</p>
        </div>
        <div className="flex flex-col md:space-x-6 md:flex-row">
            <div className='w-full md:w-1/2'>
                <label 
                    htmlFor='Firstname' 
                    className="font-light">Firstname
                </label>
                <Form.Field>
                    <input 
                        type="text"
                        className='px-5 py-4 my-3 border w-full rounded-2xl outline-none' 
                        {...register('firstname', { required: true })}
                    />
                </Form.Field>
                {
                    errors.firstname && 
                    <p className='text-red-500 text-sm'>
                        Please check the firstame
                    </p>
                }
            </div>
            <div className='w-full md:w-1/2'>
                <label 
                    htmlFor='Lastname' 
                    className="font-light">Lastname
                </label>
                <Form.Field>
                    <input 
                        type="text"
                        className='px-5 py-4 my-3 border w-full rounded-2xl outline-none' 
                        {...register('lastname', { required: true })}
                    />
                </Form.Field>
                {
                    errors.lastname && 
                    <p className='text-red-500 text-sm'>
                        Please check the lastname
                    </p>
                }
            </div>
        </div>
        <div className="flex flex-col md:space-x-6 md:flex-row">
            <div className='w-full md:w-1/2'>
                <label 
                    htmlFor='Registration number' 
                    className="font-light">Registration number
                </label>
                <Form.Field>
                    <input 
                        type="text"
                        className='px-5 py-4 my-3 border w-full rounded-2xl outline-none'
                        {...register('regNumber', { required: true })}
                    />
                </Form.Field>
                {
                    errors.regNumber && 
                    <p className='text-red-500 text-sm'>
                      Please check the reg number
                    </p>
                }
            </div>
            <div className={"w-full md:w-1/2"}>
                <label 
                    htmlFor='Department' 
                    className="font-light">Department
                </label>
                <Form.Field>
                    <input 
                        type="text"
                        className='px-5 py-4 my-3 border w-full rounded-2xl outline-none'
                        {...register('department', { required: true })}
                    />
                </Form.Field>
                {   
                    errors.department && 
                    <p className='text-red-500 text-sm text-darkBlue'>
                        Please check the department
                    </p>
                }
            </div>
        </div>
        <Button 
            type={'submit'}
            className={'w-full bg-yellow drop-shadow-xl rounded-2xl p-4 hover:bg-blueColor'}
            text={'Resgister'}
        />
    </Form>
    </>
  )
}

export default Signup