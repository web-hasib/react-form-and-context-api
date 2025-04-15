import React from 'react';

const FormAction = () => {
    const handleFormAction = (formData)=> {
        console.log(formData.get('name'));
        console.log(formData.get('email'));
    }
    return (


        <div>
            {/* I am form action */}
            <form action={handleFormAction}>
                <input type="text" name="name" placeholder='name' />
                <br />
                <input type="email" name="email" placeholder='Email' />
                <br />
                <input type="submit" value="submit " />

            </form>
        </div>
    );
};

export default FormAction;