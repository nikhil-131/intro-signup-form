import { useState, useEffect } from 'react'
import './App.css'
import error from "./assets/images/error.svg"

function App() {
  let [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });

  const [firstError, setFirstError] = useState(null);
  const [lastError, setLastError] = useState(null);
  const [emailError, setEmailError] = useState(null);
  const [passError, setPassError] = useState(null);
  const [finalMessage, setFinalMessage] = useState(null)

  const handleChange = (event) => {
    let {name, value} = event.target;
    if(name == "firstName") {
      setFirstError(false)
    }
    if (name == "lastName") {
      setLastError (false);
    }
    if(name == "email") {
      setEmailError(false);
    }
    if (name == "password") {
      setPassError(false);
    }
    setUserData({
      ...userData,
      [name]: value
    });
    // console.log(event.target, name, value);
  }

  const handleSubmit = (event) => {
    let pattern = /\b[a-z0-9.+_/-]+@[a-z0-9.-]+\.[a-z | A-Z]{2,}\b/
    // console.log(userData);
    if(userData.firstName.length < 1) {
      setFirstError(true);
    }
    if(userData.lastName.length < 1) {
      setLastError(true);
    }
    if(userData.email.length < 1 || (!pattern.test(userData.email))) {
      setEmailError(true);
    }
    if(userData.password.length < 1) {
      setPassError(true);
    }
    if((firstError == false && userData.firstName.length >= 1) && (lastError == false && userData.lastName.length >= 1) && (emailError == false && userData.email.length >= 1 && (pattern.test(userData.email))) && (passError == false && userData.password.length >= 1)) {
      setFinalMessage(true);
    }
  }


  return (
    <>
      <div className="container md:w-[80%] w-[90%] flex flex-col md:flex-row h-[80%] items-center absolute top-0 bottom-0 left-0 right-0 m-auto">
        <div className="left md:w-[45%] w-[90%] text-white">
          <div className="left-content px-5 flex flex-col justify-center items-center gap-6 text-center md:text-left md:py-0 py-4">
            <h1 className='text-5xl font-bold'>Learn to code by watching others</h1>
            <p className='text-base'>See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.</p>
          </div>
        </div>
        <div className="right md:w-[48%] w-[90%] flex flex-col gap-4">
          <div className="free-trial text-white bg-[#5D54A3] text-center flex justify-center py-4 rounded-xl shadow-[0_6px_rgb(0,0,0,0.1)]">
            <p><span className='font-bold'>Try it free 7 days</span> then $20/mo. thereafter</p>
          </div>
          <div className="user-form bg-white py-10 rounded-xl shadow-[0_6px_rgb(0,0,0,0.1)] w-full flex flex-col gap-6 mx-auto font-medium md:mb-0 mb-8">
            {
              <div className='w-[80%] flex flex-col gap-6 mx-auto font-medium'>
                
                <label className='relative' htmlFor="firstName">
                  <input value={userData.firstName} onChange={handleChange} className={`w-full pl-6 py-3 rounded-md border ${firstError?'border-red-700 focus:border-red-700 outline-none':'border-slate-300'}`} type="text" name="firstName" id="firstName" placeholder='First Name' />
                  {firstError &&
                    <div>
                      <img className='absolute top-[20%] right-[3%]' src={error} alt="" />
                      <p className='text-xs text-right text-red-500'>First Name cannot be empty</p>
                    </div>
                  }
                </label>
                <label className='relative' htmlFor="lastName">
                  <input value={userData.lastName} onChange={handleChange} className={`w-full pl-6 py-3 rounded-md border ${lastError?'border-red-700 focus:border-red-700 outline-none':'border-slate-300'}`} type="text" name="lastName" id="lastName" placeholder='Last Name' />
                  {lastError &&
                    <div>
                      <img className='absolute top-[20%] right-[3%]' src={error} alt="" />
                      <p className='text-xs text-right text-red-500'>Last Name cannot be empty</p>
                    </div>
                  }
                </label>
                <label className='relative' htmlFor="email">
                  <input value={userData.email} onChange={handleChange} className={`w-full pl-6 py-3 rounded-md border ${emailError?'border-red-700 focus:border-red-700 outline-none':'border-slate-300'}`} type="email" name="email" id="email" placeholder='Email Address' />
                  {emailError &&
                    <div>
                      <img className='absolute top-[20%] right-[3%]' src={error} alt="" />
                      <p className='text-xs text-right text-red-500'>Looks like this not an email</p>
                    </div>
                  }
                </label>
                <label className='relative' htmlFor="password">
                  <input value={userData.password} onChange={handleChange} className={`w-full pl-6 py-3 rounded-md border ${passError?'border-red-700 focus:border-red-700 outline-none':'border-slate-300'}`} type="password" name="password" id="password" placeholder='Password' />
                  {passError &&
                    <div>
                      <img className='absolute top-[20%] right-[3%]' src={error} alt="" />
                      <p className='text-xs text-right text-red-500'>Password cannot be empty</p>
                    </div>
                  }
                </label>
                <div className="terms text-xs text-center">
                  <button onClick={handleSubmit} className='uppercase hover:bg-[#77E2B4] bg-[#37CC8A] text-white py-3 rounded-md w-full mb-3' type="submit">Claim your free trial</button>
                  <p className='text-slate-400'>By clicking the button, you are agreeing to our <span className='font-bold hover:cursor-pointer text-[#FF7978]'>Terms and Services</span></p>
                  {finalMessage &&
                    <p className='text-green-500 text-sm'>Form Successfully submitted!!</p>
                  }
                </div>
              </div>
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default App
