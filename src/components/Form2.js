import React, { useState } from 'react';
import '../App.css';


function App2() {

    const [formData, setFormData]= useState({
        firstName:'',
        lastName:'',
        email:'',
        password:'',
        confirmpassword:''

    })

        const handleChange = (event)=>{
            const { name,value } = event.target
            setFormData ({
                ...formData,
                [name]:value
            });

        };


        const handleSubmit = (event)=>{
            event.preventDefault()


            let errors=[]
            let isValid=true


            if(!formData.firstName){
                errors.push('FirstName is required')
                isValid=false;
            }

            if(!formData.lastName){
                errors.push('LastName is Required')
                isValid=false
            }

            if(!formData.email){
                errors.push('email is Required')
                isValid=false
            }

            if(!formData.password){
                errors.push('password is Required')
                isValid=false
            }

            if(!formData.confirmpassword){
                errors.push('confirmpassword is Required')
                isValid=false
            }

            if(formData.password !== formData.confirmpassword){
                errors.push('Passwords do not match')
                isValid=false
            }

            if(!isValid){
               alert (errors.join('\n'))
            }else{
                alert(`Welcome ${formData.firstName}`)
               }
            }

            return (
            <div class="vertical-container">
                <form onSubmit={handleSubmit}>
                <input 
                type="text"
                placeholder="Enter your first name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                class='input'
                />

                <input 
                placeholder="Enter your last name"
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                class='input'
                />

                <input
                placeholder="Enter your email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                class='input'
                />

                <input
                placeholder="Enter your password"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                class='input'
                />

<input
                placeholder="Confirm your password"
                type="password"
                name="confirmpassword"
                value={formData.confirmpassword}
                onChange={handleChange}
                class='input'
                />

                <button type="submit"> Submit </button>
                </form>
             </div>


            ) 
        }

export default  App2; 
    

