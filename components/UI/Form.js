import React,{useState} from 'react'

import classes from '../../styles/form.module.css'

const Form = () => {
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const data = {
      name,
      email,
      message,
    };
    console.log(data);
    fetch('/api/contact', {
      method: 'post',
      body: JSON.stringify(data),
    });
  };

  return (
    <form onSubmit={handleSubmit} >
        <div className={`${classes.form__group}`}>
            <input 
              type='text' 
              placeholder='Your Name' 
              onChange={e => setName(e.target.value)} 
              required
            />
        </div>
        <div className={`${classes.form__group}`}>
            <input 
              type='email' 
              placeholder='Email Address' 
              onChange={e => setEmail(e.target.value)}
              required
            />
        </div>
        <div className={`${classes.form__group}`}>
            <textarea 
              type='text' 
              rows={5} 
              placeholder='Message' 
              onChange={e => setMessage(e.target.value)}
              required 
            />
        </div>

        <button className='primary__btn' type='submit'>Send</button>

    </form>
  )
}

export default Form