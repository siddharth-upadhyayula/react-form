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
          <label htmlFor="occupation" className="form-label">Occupation</label><br/>
          <select onChange={FormHandler} name="occupation" className='form-select'>
            <option>Employee</option>
            <option>Student</option>
            <option>Retired</option>
          </select>
      </div>
      <div className="form-group">
        <label htmlFor="gender" className="form-label">Gender</label><br/>
        <div>
          <input type="radio" value="male" name="gender" onChange={FormHandler}></input>
          <label htmlFor="male">Male</label>
        </div>
        <div>
          <input type="radio" value="male" name="gender" onChange={FormHandler}></input>
          <label htmlFor="female">Female</label>
        </div>
        <div>
          <input type="radio" value="other" name="gender" onChange={FormHandler}></input>
          <label htmlFor="other">Other</label>
        </div>
      </div>
      <div className="form-group">
        <button className='btn' type="submit" onClick={() => console.log(formData)}>Submit</button>
      </div>  
    </div>
  );
}

export default App;
