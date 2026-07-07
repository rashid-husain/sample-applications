
import React, { useState, useEffect } from 'react';
import questions from './constant/questions.constant';


import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


const Contact = () => {

    const [questionsSet, setQuestionsSet] = useState(questions);
    const [selectedOptions, setSelectedOptions] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [second, setSecond] = useState(3);
    const [minute, setMinute] = useState(0);
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
            if(minute === 0 && second == 0){
              clearTimeout(timer);
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

    const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };




    return(
        <>
            

            <div style={{ textAlign:'center', gap: '10px', marginTop: '20px',  justifyContent: 'space-between' }}>
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

                <div style={{alignItem:"center" ,textAlign:"center",margin:"10px",border:"1"}}>
                    <button onClick={handleQuizSubmit} style={{padding:"10px" ,backgroundColor:"green",borderRadius:"5px"}}>
                     Submit
                    </button>
                </div>

               {
                    isSubmitted && (
                    <div>
         <React.Fragment>
     <div style={{textAlign:"center",margin:"10px",padding:"10px"}}><Button  onClick={handleClickOpen} style={{backgroundColor:"gray",margin:"10px", color:"white"}}>
        here you can see your result
      </Button>
      </div>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        slots={{
          transition: Transition,
        }}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              <h4>Results </h4>
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        <List>
             <ListItemButton><p> Total Selected Answers: {Object.keys(selectedOptions).length} </p></ListItemButton>
                        <ListItemButton><p > Correct Answers: {Object.keys(selectedOptions).filter(key => selectedOptions[key] === questionsSet.find(q => q.id === parseInt(key)).answer).length} </p></ListItemButton>
                        <ListItemButton><p> Incorrect Answers: {Object.keys(selectedOptions).filter(key => selectedOptions[key] !== questionsSet.find(q => q.id === parseInt(key)).answer).length} </p></ListItemButton>
                        <ListItemButton><p> Unanswered Questions: {questionsSet.length - Object.keys(selectedOptions).length} </p></ListItemButton>
                        <ListItemButton><p> Total Questions: {questionsSet.length} </p></ListItemButton>
                        <ListItemButton><p> Result Status: {Object.keys(selectedOptions).length === questionsSet.length ? "Completed" : "In Progress"} </p></ListItemButton>
                        <ListItemButton style={{border:"1px",borderRadius:"10px"}}><p> Score: {Object.keys(selectedOptions).filter(key => selectedOptions[key] === questionsSet.find(q => q.id === parseInt(key)).answer).length} / {questionsSet.length} </p></ListItemButton>
          
        </List>
      </Dialog>
    </React.Fragment>

                      </div>
                    )
                }
                
            </div>
        </>
    )
}
export default Contact;