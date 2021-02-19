import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import pizzaman from '../assets/PizzaMan.png'
export default function Checkout({ingredients}){
const history = useHistory()
    const [success, setSuccess] = useState(false)
   return(
       <div style={{display:"flex"}}>
           {/* {JSON.stringify(ingredients)} */}
        <div>
            <div>
                <h1>My Ingredients</h1>
                {Object.keys(ingredients).map((ingredient)=>{
                    return(
                        ingredients[ingredient]&&(
                     <p>{ingredient[0].toUpperCase()}
                    {ingredient.substr(1)}
                    </p>
                    ));
                })}
                <button onClick={()=>setSuccess(true)}>
                    Confirm
                </button>
                <button onClick={()=>history.push("/")}>
                    Go Back
                </button>
            </div>
        </div>
           
           <div>{success &&(<img src={pizzaman} alt="pizzaman"></img>)}</div>
       </div>
   )
   }