import React, {useState} from 'react'

const Form = (props) => {
	console.log('this is props in form: ', props);
    console.log('this is props.author in form: ', props.author)
	const [formData, setFormData] = useState(props.author);

    console.log('this is formData in form: ', formData)
	//functions
	const handleSubmit = (e) => {
		e.preDefault();
		props.handleSubmit(formData);
		props.history.push('/');
	};
//this was working and stopped when I configured delete
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
                value={props.label}
            />
		</form>
	);
}

export default Form