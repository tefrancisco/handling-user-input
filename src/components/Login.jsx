import { useState } from 'react'

export default function Login() {
  // const [enteredEmail, setEnteredEmail] = useState('')
  // const [enteredPassword, setEnteredPassword] = useState('')
    const [enteredValues, setEnteredValues] = useState({
      email: '',
      password: ''
    })

  function handleInputChange(identifier, event) {
    setEnteredValues(prevValues => ({
      ...prevValues,
      // Javascript feature that allows you to dinamically target and send a property of a object.
      [identifier]: event.target.value
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
          <input id="email" type="email" name="email" onChange={() => handleInputChange('email', event)} value={enteredValues.email} />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" onChange={() => handleInputChange('password', event)} value={enteredValues.password}/>
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
