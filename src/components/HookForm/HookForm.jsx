import React from 'react';
import useInputField from '../../hooks/useInputField';





//! //# using custom hook to manage form state




const HookForm = () => {
    const [name, nameOnChange]= useInputField('');
    const [email, emailOnChange]= useInputField('');
    const [password, passwordOnChange]= useInputField('');

    const handleSubmit = e => {
        e.preventDefault();
        console.log('form submitted',name, email, password);
    }

    return (
        <div> 
            <form onSubmit={handleSubmit}>
                <input defaultValue={name} onChange={nameOnChange} type="text" placeholder='name'  />
                <br />
                <input defaultValue={email} onChange={emailOnChange} type="email" name="" placeholder='email' />
                <br />
                <input defaultValue={password} onChange={passwordOnChange} type="password" name="" placeholder='password' />
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default HookForm;