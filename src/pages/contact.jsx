import React, { useState, useEffect } from 'react';
import questions from './constant/questions.constant';


const Contact = () => {

    const [questionsSet, setQuestionsSet] = useState(questions);
    const [selectedOptions, setSelectedOptions] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [second, setSecond] = useState(60);
    const [minute, setMinute] = useState(2);
    const [showWarningAlert, setShowWarningAlert] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setSecond(prevSecond => prevSecond - 1);
            if (second === 0) {
                setMinute(prevMinute => prevMinute - 1);
                setSecond(59);
            }

            if(minute === 2 && second === 0) {
                setShowWarningAlert(true);
            }

        }, 1000);

        return () => clearTimeout(timer);
    }, [second, minute]);

    const handleQuizSubmit = () => {
        setIsSubmitted(true);
    }

    const handleOptionChange = (questionId, option) => {
        setSelectedOptions(prev => ({ ...prev, [questionId]: option }));
    }



    return(
        <>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '20px' }}>

            <input type="text" placeholder='Enter your name' />
            <input type="email" placeholder='Enter your email' />
            <textarea placeholder='Enter your message'></textarea>
            <input type="file" />
            <input type="checkbox" /> I agree to the terms and conditions
            <input type="radio" name="gender" value="male" /> Male
            <input type="radio" name="gender" value="female" /> Female
            <input type="number" placeholder='Enter your age' />
            <input type="date" />
            <input type="time" />   
            <input type="color" />
            <input type="range" min="0" max="100" />
            <input type="url" placeholder='Enter your website' />
            <input type="tel" placeholder='Enter your phone number' />
            <input type="search" placeholder='Search...' />
            <input type="password" placeholder='Enter your password' />
            <input type="hidden" value="hiddenValue" />
            <button type="reset">Reset</button>
            <button type="button" onClick={() => alert('Button clicked!')}>Click Me</button>
            <button type="submit">Submit Form</button>
            </form>

            <div style={{ display: 'flex', gap: '10px', marginTop: '20px', flexDirection: 'row', justifyContent: 'space-between' }}>
                <h1>Quiz</h1>
                <h1>Timer: {minute < 10 ? `0${minute}` : minute}:{second < 10 ? `0${second}` : second}</h1>
                {
                    showWarningAlert && <h5 style={{ color: "#ff4d4d" }}>Your Time is going to run out!</h5>
                }
            </div>
            <div>
                {questionsSet.map((item, index) => (
                    <div key={item.id} style={{border: '1px solid gray', borderRadius: '5px', padding: '10px', marginBottom: '10px'}}>
                        <p style={{ fontWeight: 'bold', display: 'block' }}>{index + 1}. {item.question}</p>
                        
                        <div>
                            {item.options.map((option, optionIndex) => (
                                <div key={optionIndex}>
                                    <input type="radio"
                                        name={`question-${item.id}`}
                                        value={option}
                                        onChange={() => handleOptionChange(item.id, option)}
                                    />
                                    <label>{option}</label>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}

                <div>
                    <button onClick={handleQuizSubmit}>
                     Submit
                    </button>
                </div>

                {
                    isSubmitted && (
                    <div>
                        <h2>Results</h2>
                        <p> Total Selected Answers: {Object.keys(selectedOptions).length} </p>
                        <p> Correct Answers: {Object.keys(selectedOptions).filter(key => selectedOptions[key] === questionsSet.find(q => q.id === parseInt(key)).answer).length} </p>
                        <p> Incorrect Answers: {Object.keys(selectedOptions).filter(key => selectedOptions[key] !== questionsSet.find(q => q.id === parseInt(key)).answer).length} </p>
                        <p> Unanswered Questions: {questionsSet.length - Object.keys(selectedOptions).length} </p>
                        <p> Total Questions: {questionsSet.length} </p>
                        <p> Result Status: {Object.keys(selectedOptions).length === questionsSet.length ? "Completed" : "In Progress"} </p>
                        <p> Score: {Object.keys(selectedOptions).filter(key => selectedOptions[key] === questionsSet.find(q => q.id === parseInt(key)).answer).length} / {questionsSet.length} </p>
                    </div>
                    )
                }
                
            </div>
        </>
    )
}
export default Contact;