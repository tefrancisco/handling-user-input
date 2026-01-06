import { useState } from 'react'

export default function Login() {
  // const [enteredEmail, setEnteredEmail] = useState('')
  // const [enteredPassword, setEnteredPassword] = useState('')
    const [enteredValues, setEnteredValues] = useState({
      email: '',
      password: ''
    })

    const [didEdit, setDidEdit] = useState({
      email: false,
      password: false
    })

    const emailIsInvalid = didEdit.email && !enteredValues.email.includes('@')

  function handleInputChange(identifier, event) {
    setEnteredValues(prevValues => ({
      ...prevValues,
      // Javascript feature that allows you to dinamically target and send a property of a object.
      [identifier]: event.target.value
    }))

    // Whenever the user starts typing again, the error disappears.
    setDidEdit(prevEdit => ({
      ...prevEdit,
      [identifier]: false
    }))
  }

  function handleInputBlur(identifier) {
    setDidEdit(prevEdit => ({
      ...prevEdit,
      [identifier]: true
    }))
  }


  function handleSubmit(event) {
    // Stops the default behaviour of the browser of creating and sending an HTTP request automatically.
    event.preventDefault()
    console.log(enteredValues)
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input 
          id="email" 
          type="email" 
          name="email" 
          onBlur={() => handleInputBlur('email')}
          onChange={() => handleInputChange('email', event)} 
          value={enteredValues.email} 
          />
          <div className="control-error">{emailIsInvalid && <p>Please enter a valid email address.</p>}</div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input 
          id="password" 
          type="password" 
          name="password" 
          onBlur={() => handleInputBlur('password')}
          onChange={() => handleInputChange('password', event)} 
          value={enteredValues.password}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
