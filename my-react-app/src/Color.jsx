import { useState } from "react";



const Color=()=>{
   const [color1,setColor1]=useState('Yellow');
   
   const [color2,setColor2]=useState('Yellow');

   const [color3,setColor3]=useState('Yellow');

   const [color4,setColor4]=useState('Yellow');
    
 return(
    <div style={{display:'flex'}}>
         
        
    
    <div onClick={()=>{setColor1('blue');setColor2('yellow');setColor3('yellow');setColor4('yellow')}} style={{width:'20px',height:'20px',background:color1,marginLeft:'40px'}}></div>

    <div onClick={()=>{setColor1('blue');setColor2('blue');setColor3('yellow');setColor4('yellow')}} style={{width:'20px',height:'20px',border:'black',background:color2,marginLeft:'25px'}}></div>

    <div onClick={()=>{setColor1('blue');setColor2('blue');setColor3('blue');setColor4('yellow')}} style={{width:'20px',height:'20px',border:'black',background:color3,marginLeft:'25px'}}></div>

    <div onClick={()=>{setColor1('blue');setColor2('blue');setColor3('blue');setColor4('blue')}} style={{width:'20px',height:'20px',border:'black',background:color4,marginLeft:'25px'}}></div>
    </div>
 )

}
export default Color;