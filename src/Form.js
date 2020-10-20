import React, {useState} from 'react'

const Form = (props) => {
	console.log('this is props in form: ', props);

	const [formData, setFormData] = useState(props.author);

	//functions
	const handleSubmit = (e) => {
		e.preDefault();
		props.handleSubmit(formData);
		props.history.push('/');
	};

    //handles change and sets form data to these
	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	return (
		<form onSubmit={handleSubmit}>
            <input 
                type='text' 
                name='firstName' 
                value={formData.firstName} 
                onChange={handleChange} 
            />
            <input 
                type='text'
                name='lastName'
                value={formData.lastName}
                onChange={handleChange} 
            />
            <input 
                type='submit'
                value='add new author'
            />
		</form>
	);
}

export default Form