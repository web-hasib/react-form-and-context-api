import React, { useState } from 'react';

const ControlledField = () => {

    const [password , setPassword] = useState('');
    const [error ,setError] = useState('');

    const handleOnChangePassword = (e) => {
        setPassword(e.target.value);
        console.log(password);
        // if (e.target.value.length < 6) {
        //     setError('Password must be at least 6 characters long');
        // } else{
        //     setError('');
        // }
    }

    const handleSubmit = (e) => {   
        e.preventDefault();
        console.log('submitted');
        if (password.length < 6) {
            setError('Password must be 6 characters needed ');
        } else{
            setError('');
        }
    }

    return (
        <div>
           <form onSubmit={handleSubmit}>
                <input type="email" name="email"  placeholder='Email' required />
                <br />
                <input type="password" name="password" placeholder='Password' onChange={handleOnChangePassword} defaultValue={password} required />
                <br />
                <small style={{color:'red'}}>{error}</small>
                <br />
                <input type="submit" value="Submit" />
           </form>
        </div>
    );
};

export default ControlledField;