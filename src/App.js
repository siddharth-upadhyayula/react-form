import './App.css';
import { useState } from "react";
function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    occupation: '',
    gender: ''
  })
  const FormHandler = (event) => {
    setFormData(() => ({
      ... formData,
      [event.target.name]: event.target.value
    }))
  }
  return (
    <div className="App">
      <h1>Basic React Form</h1>
      <label htmlFor="name" className="form-label">Name</label><br/>
      <input type="text" onChange={FormHandler} name="name"></input><br/>
      <div className="form-group">
          <label htmlFor="email" className="form-label">Email</label><br/>
          <input type="text" onChange={FormHandler} name="email"></input><br/>
      </div>
      <div className="form-group">
          <select onChange={FormHandler} name="occupation" className='form-select'>
            <option selected disabled>Occupation</option>
            <option>Employee</option>
            <option>Student</option>
            <option>Retired</option>
          </select>
      </div>
      <div className="form-group">
        <label htmlFor="gender" className="form-label">Gender</label>
        <div>
          <label htmlFor="male">Male</label>
          <input type="radio" value="male" name="gender" onChange={FormHandler}></input>
        </div>
        <div>
          <label htmlFor="female">Female</label>
          <input type="radio" value="male" name="gender" onChange={FormHandler}></input>
        </div>
        <div>
          <label htmlFor="other">Other</label>
          <input type="radio" value="other" name="gender" onChange={FormHandler}></input>
        </div>
      </div>
      <div className="form-group">
        <button className='btn' type="submit" onClick={() => console.log(formData)}>Submit</button>
      </div>  
    </div>
  );
}

export default App;
