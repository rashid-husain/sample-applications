import * as React from "react";
import  useState from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

/*
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
});*/


const Support=()=>{
const[display,setDisplay]= React.useState(false);
const[answers,setAnswrs]=React.useState({});
//const[result,setResult]=React.useState("");
const[score,setScore]=React.useState(0);
const[selected,setSelected]=React.useState("");

//const[q1,setQ1]=React.useState('');
  const id = React.useId();


const handleSubmit=()=>{
  /*let score=0;
  
  setDisplay(true);
  Object.keys(correctAnswers).forEach((key)=>{
    if(answers[key]===correctAnswers[key]){
      score++;
    }
  })*/
  setDisplay(true);}
const correctAnswers={
  q1:"delhi",
  q2:"library",
  q3:"jsx",
  q4:"vdom",
  q5:"props",
  q6:"state",
  q7:"effect",
  q8:"one",
  q9:"key",
  q10:"reconciliation",
}



 
 /*const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };*/


  return(
    <>
<div   style={{Border:"1px solid black"}}>
    <div style={{border:"1px solid black" ,margin:"10px",width:"100vh",padding:"15px"}}>
      
      <FormControl>
      <FormLabel id={`${id}-label`} value="q1"><b>Q1:Capital of India?</b></FormLabel>
      <RadioGroup
        aria-labelledby={`${id}-label`}
        
        name="q1"
        /*onChange={(e)=>setAnswers({...answers,
          q1:e.target.value,
        })}*/
      >
        <FormControlLabel value="punjab" onChange={(e)=>setSelected(e.target.value)} control={<Radio />} label="Punjab" />
        <FormControlLabel value="kerla"  onChange={(e)=>setSelected(e.target.value)}control={<Radio />} label="Kerla" />
        <FormControlLabel value="delhi" onChange={(e)=>setSelected(e.target.value)} control={<Radio />} label="Delhi" />
        <FormControlLabel value="other"  onChange={(e)=>setSelected(e.target.value)} control={<Radio />} label="Other" />
      </RadioGroup>
    </FormControl>
  

    </div>
    <div style={{border:"1px solid black", margin:"10px",width:"100vh" ,padding:"15px"}}>
      <FormControl>
      <FormLabel id={`${id}-label`}><b>Q2:What is React primarily used for?</b></FormLabel>
      <RadioGroup
        aria-labelledby={`${id}-label`}
        
        name="q2"
      >
        <FormControlLabel value="database" control={<Radio />}   label="Database" />
        <FormControlLabel value="styling" control={<Radio />} label="Styling" />
        <FormControlLabel value="library" control={<Radio />} label="Library" />
        <FormControlLabel value="framework" control={<Radio />} label="Framework" />
      </RadioGroup>
    </FormControl>
  

    </div>
    
    <div style={{border:"1px solid black",margin:"10px",width:"100vh" ,padding:"15px"}}>
      <FormControl>
      <FormLabel id={`${id}-label`}>Q3:Syntax allows to write html inside js</FormLabel>
      <RadioGroup
        aria-labelledby={`${id}-label`}
        
        name="q3"
      >
        <FormControlLabel value="jsx" control={<Radio />} label="Jsx" />
        <FormControlLabel value="dom" control={<Radio />} label="Dom" />
        <FormControlLabel value="htmlr" control={<Radio />} label="Html" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
      </RadioGroup>
    </FormControl>
  

    </div>
    <div style={{border:"1px solid black",margin:"10px",width:"100vh" ,padding:"15px"}}>
      <FormControl>
      <FormLabel id={`${id}-label`}>Q4:Lightweight in memory representation of the actual browser DPM</FormLabel>
      <RadioGroup
        aria-labelledby={`${id}-label`}
        
        name="q4"
      >
        <FormControlLabel value="tree" control={<Radio />} label="Tree" />
        <FormControlLabel value="vdom" control={<Radio />} label="VDOM" />
        <FormControlLabel value="node" control={<Radio />} label="Node" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
      </RadioGroup>
    </FormControl>
  

    </div>
    <div style={{border:"1px solid black",margin:"10px",width:"100vh" ,padding:"15px"}}>
      <FormControl>
      <FormLabel id={`${id}-label`}>Q5:used to pass data from parent componenet to child</FormLabel>
      <RadioGroup
        aria-labelledby={`${id}-label`}
        
        name="q5"
      >
        <FormControlLabel value="state" control={<Radio />} label="State" />
        <FormControlLabel value="props" control={<Radio />} label="Props" />
        <FormControlLabel value="refs" control={<Radio />} label="Refs" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
      </RadioGroup>
    </FormControl>
  

    </div>
    <div style={{border:"1px solid black",margin:"10px",width:"100vh" ,padding:"15px"}}>
      <FormControl>
      <FormLabel id={`${id}-label`}><b>Q6:used to manage and tracke data within the component</b></FormLabel>
      <RadioGroup
        aria-labelledby={`${id}-label`}
    
        name="q6"
      >
        <FormControlLabel value="effect" control={<Radio />} label="Effect" />
        <FormControlLabel value="context" control={<Radio />} label="Context" />
        <FormControlLabel value="state" control={<Radio />} label="State" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
      </RadioGroup>
    </FormControl>
  

    </div>
    <div style={{border:"1px solid black",margin:"10px",width:"100vh" ,padding:"15px"}}>
      <FormControl>
      <FormLabel id={`${id}-label`}><b>Q7:which hook is used for sideEffect in functional components</b></FormLabel>
      <RadioGroup
        aria-labelledby={`${id}-label`}
        
        name="q7"
      >
        <FormControlLabel value="ref" control={<Radio />} label="Ref" />
        <FormControlLabel value="effect" control={<Radio />} label="Effect" />
        <FormControlLabel value="state" control={<Radio />} label="State" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
      </RadioGroup>
    </FormControl>
  

    </div>
    <div style={{border:"1px solid black",margin:"10px",width:"100vh" ,padding:"15px"}}>
      <FormControl>
      <FormLabel id={`${id}-label`}><b>Q8:how many element can a cvalid functional component return without wrapper</b></FormLabel>
      <RadioGroup
        aria-labelledby={`${id}-label`}
        
        name="q8"
      >
        <FormControlLabel value="zero" control={<Radio />} label="Zero" />
        <FormControlLabel value="one" control={<Radio />} label="One" />
        <FormControlLabel value="two" control={<Radio />} label="Two" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
      </RadioGroup>
    </FormControl>
  

    </div>
    <div style={{border:"1px solid black",margin:"10px",width:"100vh" ,padding:"15px"}}>
      <FormControl>
      <FormLabel id={`${id}-label`}><b>Q9: used to uniquely identify elements in a renderd list</b></FormLabel>
      <RadioGroup
        aria-labelledby={`${id}-label`}
        
        name="q9"
      >
        <FormControlLabel value="key" control={<Radio />} label="Key" />
        <FormControlLabel value="ref" control={<Radio />} label="Ref" />
        <FormControlLabel value="tag" control={<Radio />} label="Tag" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
      </RadioGroup>
    </FormControl>
  

    </div>
    <div style={{border:"1px solid black",margin:"10px",width:"100vh" ,padding:"15px"}}>
      <FormControl>
      <FormLabel id={`${id}-label`}><b>Q10:Process of updating actual DOM  when state or props change</b></FormLabel>
      <RadioGroup
        aria-labelledby={`${id}-label`}
        
        name="q10"
      >
        <FormControlLabel value="rendering" control={<Radio />} label="Rendering" />
        <FormControlLabel value="mounting" control={<Radio />} label="Mounting" />
        <FormControlLabel value="reconciliation" control={<Radio />} label="Reconciliation" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
      </RadioGroup>
    </FormControl>
  

    </div>
    <div><button variant="contained" onClick={handleSubmit}>Submit</button></div>

    
  {/*<React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open full-screen dialog
      </Button>
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
              Sound
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        <List>
          <ListItemButton>
            <ListItemText primary="Phone ringtone" secondary="Titania" />
          </ListItemButton>
          <Divider />
          <ListItemButton>
            <ListItemText
              primary="Default notification ringtone"
              secondary="Tethys"
            />
          </ListItemButton>
        </List>
      </Dialog>
    </React.Fragment>*/}
    
  

</div>

{display == true &&(
  <div>
    <h2>your answer:{selected}</h2>
  </div>

)}
    </>
  )

  
}
export default Support;