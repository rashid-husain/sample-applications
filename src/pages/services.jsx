import React,{useState} from "react";
const Services=()=>{

const[num1,setNum1]=useState(0);
const[num2,setNum2]=useState(0);
const[display,setDisplay]=useState(false);
const[result,setResult]=useState(0);
 
 

const ClickofSum=()=>{
 setDisplay(true);
 setResult(Number (num1)+ Number(num2));
}
const ClickofMinus=()=>{
 setDisplay(true);
 setResult(Number(num1)-Number(num2));

}
const ClickofMultiply=()=>{
 setDisplay(true);
 setResult(Number(num1)*Number(num2));
}
const ClickofDivision=()=>{
 setDisplay(true);
 setResult(Number(num1)/Number(num2));
}
 


    return(
        <>
        <div style={{display:'flex' ,flexDirection:'column '}}>
            <label>first number:</label>
            <input type="number" value={num1}  onChange={(e)=>setNum1(e.target.value)} ></input>
            <label>second number:</label>
            <input type="number" value={num2} onChange={(e)=>setNum2(e.target.value)}></input>
            <label>Result:</label>
            <input type="number" value={result} ></input>
           
           <div><button onClick={()=>ClickofSum()}>Plus</button>
           <button onClick={()=>ClickofMinus()}>Minus</button>
           <button onClick={()=>ClickofMultiply()}>Multiply</button>
           <button onClick={()=>ClickofDivision()}>Divide</button>

            </div> 
            </div>
            

        

        
        {display==true &&(
            <div> 
                <p>
                  Result:{result}  
                </p>

            </div>
        )
            
            
        

        }
     
     
        
    
       
    

        
        </>
    )
}
export default Services;