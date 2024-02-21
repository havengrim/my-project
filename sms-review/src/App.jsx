import React, { useState } from 'react';
import Button from "./components/Button";
import { data } from './components/questions'; // Importing data from separate file
import { logo } from "./assets/index"
const App = () => {

 // State variables to hold current question and description
 const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

 // Function to handle button click and update question
 const handleButtonClick = () => {
  console.log("Button clicked"); // Add this line to check if the function is being called
  setCurrentQuestionIndex((prevIndex) => (prevIndex + 1) % data.length);
};

const handleBackButtonClick = () => {
  console.log("Back button clicked"); // Add this line to check if the function is being called
  setCurrentQuestionIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
};


 // Current question and description based on currentQuestionIndex
 const currentQuestion = data[currentQuestionIndex].question;
 const currentDescription = data[currentQuestionIndex].description;

  return (

  <section className='bg-white dark:bg-gray-900 font-poppins'>
    <div className="flex justify-center min-h-screen">
      <div className="hidden bg-cover lg:block lg:w-2/5" style={{backgroundImage: "url('https://images.unsplash.com/photo-1494621930069-4fd4b2e24a11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80')"}}>
        
      </div>
      
      <div className="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
        <div className="w-full">
        {/* <img src='./src/assets/logo-academe-sms.png' alt='academe-sms-logo' className='w-[100px] h-[30px]'/> */}
           <img src={logo} alt="logo" className='w-[100px] h-[30px]' />
          <h1 className="text-2xl font-semibold tracking-wider text-gray-800 capitalize dark:text-white mt-4" id='question'>
          <span>{currentQuestionIndex + 1}.)</span> {currentQuestion}
          </h1>
          <p className="mt-4 text-gray-500 dark:text-gray-400" id="description">
          {currentDescription}
          </p>

          <div className="mt-6">
            <h1 className="text-gray-500 dark:text-gray-300">Select type of account</h1>
            <div className="mt-3 md:flex md:-mx-2 flex-col gap-3 items-start">
            <div className="flex gap-2 flex-col">
              <div className="inline-flex items-center">
                <label className="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="html">
                  <input name="type" type="radio"
                    className="before:content[''] peer relative h-5 w-5 cursor-pointer  rounded-full border border-blue-gray-200 text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                    id="html" />
                  <span
                    className="absolute text-gray-900 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="currentColor">
                      <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                    </svg>
                  </span>
                </label>
                <label className="mt-px font-medium text-gray-700 cursor-pointer select-none" htmlFor="html">
                  Poor
                </label>
              </div>

              <div className="inline-flex items-center">
                <label className="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="html">
                  <input name="type" type="radio"
                    className="before:content[''] peer relative h-5 w-5 cursor-pointer  rounded-full border border-blue-gray-200 text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                    id="html" />
                  <span
                    className="absolute text-gray-900 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="currentColor">
                      <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                    </svg>
                  </span>
                </label>
                <label className="mt-px font-medium text-gray-700 cursor-pointer select-none" htmlFor="html">
                  Fair
                </label>
              </div>

              <div className="inline-flex items-center">
                <label className="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="html">
                  <input name="type" type="radio"
                    className="before:content[''] peer relative h-5 w-5 cursor-pointer  rounded-full border border-blue-gray-200 text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                    id="html" />
                  <span
                    className="absolute text-gray-900 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="currentColor">
                      <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                    </svg>
                  </span>
                </label>
                <label className="mt-px font-medium text-gray-700 cursor-pointer select-none" htmlFor="html">
                  Good
                </label>
              </div>

              <div className="inline-flex items-center">
                <label className="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="html">
                  <input name="type" type="radio"
                    className="before:content[''] peer relative h-5 w-5 cursor-pointer  rounded-full border border-blue-gray-200 text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                    id="html" />
                  <span
                    className="absolute text-gray-900 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="currentColor">
                      <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                    </svg>
                  </span>
                </label>
                <label className="mt-px font-medium text-gray-700 cursor-pointer select-none" htmlFor="html">
                  Very Good
                </label>
              </div>

              <div className="inline-flex items-center">
                <label className="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="html">
                  <input name="type" type="radio"
                    className="before:content[''] peer relative h-5 w-5 cursor-pointer  rounded-full border border-blue-gray-200 text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                    id="html" />
                  <span
                    className="absolute text-gray-900 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="currentColor">
                      <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                    </svg>
                  </span>
                </label>
                <label className="mt-px font-medium text-gray-700 cursor-pointer select-none" htmlFor="html">
                  Excellent
                </label>
              </div>
              
            </div>

              <div className='flex items-end w-full justify-between'>
                <Button onClick={handleBackButtonClick} buttonText="Back" styles="bg-gray-500" />
                <Button onClick={handleButtonClick} buttonText="Next"/>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
};

export default App;
