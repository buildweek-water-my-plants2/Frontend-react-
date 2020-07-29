import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import * as yup from 'yup'
import axios from 'axios'
import Dashboard from '../Plants/Dashboard'
import {LogInStyle, LogInHeader, H3one2, H3two2, Container2, Containerh3, Containerp, InputField2, Label, Input, Button, Error } from './LogInStyle'

const initialForm = {
    username: '',
    phoneNumber: '',
    password: '',
}

const initialFormErrors = {
    username: '',
    phoneNumber: '',
    password: '',
}

const initialDisabled = true
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const formSchema = yup.object().shape({
    username: yup 
        .string()
        .required("Must include username"),
    password: yup
        .string()
        .min(6, "Passwords must be at least 6 characters long.")
        .required("Password is required"),
    phoneNumber: yup
        .string()
        .matches(phoneRegExp, 'Phone number is not valid')
        .required("Phone number is required")
})




export default function LogInForm(props) {
    const { userInfo, setUserInfo } = props
    const [form, setForm] = useState(initialForm)
    const [formError, setFormError] = useState(initialFormErrors)
    const [disabled, setDisabled] = useState(initialDisabled)
    const history = useHistory()

    const routeToSignIn = () => {
      history.push('/')
    }

    const handleChange = (e) => {
        e.persist()
        yup 
          .reach(formSchema, e.target.name)
          .validate(e.target.value)
          .then(valid => {
            setFormError({
              ...formError, [e.target.name]: ""
            })
          })
    
          .catch(err => {
            setFormError({
              ...formError, [e.target.name]: err.errors[0]
            })
          })
    
          setForm({
            ...form, [e.target.name]: e.target.value
          })
      }

      const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('https://jswatermyplants-backend.herokuapp.com/api/auth/register', form)
          .then(res => {
            console.log(res)
            setUserInfo(res.data, ...userInfo)
            setForm(initialForm)
            history.push("/dashboard")
          })
        .catch((err => {
          console.log(err)
        }))
      }

      useEffect(() => {
        formSchema.isValid(form)
          .then(valid => setDisabled(!valid))
      }, [form])


    return(
        <LogInStyle className="login-form" onSubmit={handleSubmit}>
        <LogInHeader className='log-in-header'>
        <H3one2 onClick={routeToSignIn}>Sign In</H3one2>
        <H3two2>Sign Up</H3two2>
        </LogInHeader>

        <Container2 className='container'>
            <Containerh3>Create an account</Containerh3>
            <Containerp>Keep forgetting to water your plants? No problem. We have the solution. Sign up today, your plants will thank you.</Containerp>
            <InputField2 className='input-fields'>
            <Label>
                Username
                <Input
                type='text'
                name='username'
                placeholder='Enter your username'
                value={form.username}
                onChange={handleChange}
                />
            </Label>
            {formError.username && <p>{formError.username}</p>}
            <Label>
                Password
                <Input 
                type='password' 
                name='password' 
                placeholder='Enter password'
                value={form.password}
                onChange={handleChange}
                />
            </Label>
            {formError.password && <Error>{formError.password}</Error>}
            <Label>
                Phone
                <Input 
                type='number' 
                name='phoneNumber' 
                placeholder='Enter phone number'
                value={form.phoneNumber}
                onChange={handleChange}
                />
            </Label>
            {formError.phoneNumber && <Error>{formError.phoneNumber}</Error>}
            <Button disabled={disabled} type='submit'>Sign Up</Button>
            </InputField2>
        </Container2>
    </LogInStyle>
    
    )
}