
import React from'react';
import {useState} from 'react';
const Career=()=>{
    /*const [newSum,setNewSum]=React.useState(0);
    const a=5;
    const b=5;
    const c=a+b;
    console.log('c:',c);
    const handleClick=()=>{
        setNewSum(a+b+5);

    }*/
   //const rollno="";
   const[name,setName]=React.useState('');
   const[rollno,setRollNo]=React.useState('');
   const[branch,setBranch]=React.useState('');
   const[marks1,setMarks1]=React.useState('');
   const[marks2,setMarks2]=React.useState('');
   const[marks3,setMarks3]=React.useState('');
   const[marks4,setMarks4]=React.useState('');
   const[marks5,setMarks5]=React.useState('');
   const[totalmarks,setTotalMarks]=React.useState('0');
   const[avgmarks,setAvgMarks]=React.useState('0');
   //const[grade,setGrade]=React.useState('');
   const[display,setDisplay]=React.useState('');

   const handleClick=()=>{
     setTotalMarks((parseInt(marks1) || 0) + (parseInt(marks2) || 0) + (parseInt(marks3) || 0) + (parseInt(marks4) || 0) + (parseInt(marks5) || 0));
     setAvgMarks((totalmarks)/5);
     grade(avgmarks);

   }
   /*const handleClick=()=>{
    setAvgMarks();
   }*/
   const grade=(avgmarks)=>{
    if(avgmarks>=90){
        return 'A';
    }
    else if(avgmarks>=80){
        return 'B';
    }  
     else  if(avgmarks>=70){
        return 'C';}
      else if(avgmarks>=60){
        return 'D';
    }
    else{
        return 'F';
    }}

   const handleSubmit = (e) => {
    e.preventDefault();
    setDisplay(true);

  }

    
    return(
        <>
        <form onSubmit={handleSubmit}>
            <div style={{display:'flex', 
                flexDirection:'column',
                width:'300px' ,
                height:'',
                 gap:'10px' ,
                 border:'1px solid black',
                 padding:'5px' ,
                 top_margin:'20px',
                 backgroundColor:'gray'
                 }}>
                    <h3 style={{color:'black'}}><b>My Information</b></h3>
            <label style={{color:'white'}}> Name:</label>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)}></input>
            <label style={{color:'white',height:'30px'}}>Roll No:</label>
            <input type="Number" value={rollno} onChange={(e)=>setRollNo(e.target.value)} />
            <label style={{color:'white'}}>Branch:</label>
            <input type="text"  value={branch} onChange={(e)=>setBranch(e.target.value)}/>
            <div style={{display:'flex',
                flexDirection:'column',
                gap:'10px',}}>
                <h3 style={{color:'black'}}><b>Subject marks</b></h3>
                <label style={{color:'white'}}>Software Engineering</label>
                <input type="number" value={marks1} onChange={(e)=>setMarks1(e.target.value)} ></input>
                <label>Data Structure</label>
                <input type="number" value={marks2} onChange={(e)=>setMarks2(e.target.value)} ></input>
                <label>SPM</label>
                <input type="number" value={marks3} onChange={(e)=>setMarks3(e.target.value)}></input>
                <label>compiler Design</label>
                <input type="number" value={marks4} onChange={(e)=>setMarks4(e.target.value)}></input>
                <label>Computer Network:</label>
                <input type="number" value={marks5} onChange={(e)=>setMarks5(e.target.value)}></input>
                
            </div>
            <button  type="submit" style={{background_color:'blue'}} >Submit</button>
            </div>
      </form>
      
      {/*<div>
        <p>Average of marks:{avgmarks}</p>
      <button onClick={handleClick}>Calculate</button>
      </div>*/}
      {display == true && (
        <div>
          <h2>Student Information:</h2>
          <div>
            <p>Name: {name}</p>
            <p>Roll No: {rollno}</p>
            <p>Branch: {branch}</p>
            <div> Obtained Marks:
            <table border="1">
                <tr>
                <th>Software Engineering</th>
                <th>Data Structure</th>
                <th>SPM</th>
                <th>Compiler Design</th>
                <th>Computer Network</th>
                
                </tr>
                <tr>
                    <td>{marks1}</td>
                    <td>{marks2}</td>
                    <td>{marks3}</td>
                    <td>{marks4}</td>
                    <td>{marks5}</td>
                </tr>
                
            </table>
            <div><p><b>Total marks:{totalmarks}</b></p>
            <p><b>Average of marks:{avgmarks}</b></p>
            <p><b>Grade:{grade(avgmarks)}</b></p>
        <button onClick={handleClick}>Calculate</button>
       </div>
            </div>
          </div>
        </div>
      )}
       {/* <p>state value:{newSum}</p>
        <button onClick={handleClick}>click me</button>
        <h1>do you want to discuss about your career?</h1>*/}
        </>
    )
}
export default Career;