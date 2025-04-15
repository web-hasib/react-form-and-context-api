import React from 'react';

const Form = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e);
      
        console.log(e.target.name.value);
        console.log(e.target.email.value);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name='name' placeholder='Your name' />
                <br />
                <input type="email" name='email' placeholder='Your email' />
                <br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default Form;