import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../Button/Button'
import { Form } from 'semantic-ui-react'
import { useForm } from 'react-hook-form'
import io from 'socket.io-client';

const SignIn = () => {
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
        socket.emit('login', data)
        socket.on('login response', res => {
            if (res.error) return setError(res.error)
            navigation('/chat', {state: res[0]})
        })
    }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
        <div className='text-center mb-10 mt-3'>
            <b className="text-darkBlue font-light">Multi-Comm App</b>
            <p className='font-light text-red-500'>{error}</p>
        </div>
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
        {errors.firstname && <p className='text-red-500 text-sm'>Please check the First Name</p>}
        <label 
            htmlFor='Reg number' 
            className="font-light"> Registration number | Password
        </label>
        <Form.Field>
            <input 
                type="text"
                className='px-5 py-4 my-3 border w-full rounded-2xl outline-none' 
                {...register('regNo', { required: true })}
            />
        </Form.Field>
        {errors.regNo && <p className='text-red-500 text-sm'>Please check the Last Name</p>}
        <Button 
            type={'submit'}
            className={'w-full bg-blueColor drop-shadow-xl rounded-2xl p-4 hover:bg-yellow'}
            text={'Login'}
        />
    </Form>
  )
}

export default SignIn