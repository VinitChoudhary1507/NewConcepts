import React,{useState} from "react";

 function Count (props){
    //  const [count,setCount] = useState(1)   
     const handleChanges=()=>{
        props.data((count)=>count+1);
     }
    return(
         <>
           <div>
            <h1>Button in bottom</h1>
            <button onClick={handleChanges}>{props.counts}</button>
           </div>
         </>
        )     
}
export default Count;