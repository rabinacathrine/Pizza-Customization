import React from 'react'
import Cheese from '../assets/BaseCheese.png'
import Basil from '../assets/Basil.png'
import Base from '../assets/PizzaBase.png'
import Olive from '../assets/Olive.png'
import Pineapple from '../assets/Pineapple.png'
import Mushroom from '../assets/Mushroom.png'
import Tomato from '../assets/Tomato.png'
import {motion} from 'framer-motion'
import{useHistory} from 'react-router-dom'
export default function Customize({ingredients, setIngredients}){
    let history = useHistory();
    const onChange = (event,name) =>{
        console.log(localStorage)
      let newIngredients= JSON.parse(JSON.stringify(ingredients));
    //Toggle the ingredient
    newIngredients[name] = event;
    setIngredients(newIngredients)
    localStorage.setItem('ingredients',JSON.stringify(newIngredients))
    }
  
  
    return(
        <div style={{display:"flex"}}>
            {/* {JSON.stringify(ingredients)} */}
            <div style={{border:"2px solid black",flex:1}}>
                {/* Image */}
                <div style={{maxHeight:500, maxWidth:500, position:"relative"}}>
                    
                    {/* <img src={Cheese} alt="Cheese" height="100%" width="100%" className="ingredients"/>
                    <img src={Olive} alt="Olive" height="100%" width="100%" className="ingredients"/>
                    <img src={Pineapple} alt="Pineapple" height="100%" width="100%" className="ingredients"/>
                    <img src={Mushroom} alt="Mushroom" height="100%" width="100%" className="ingredients"/> */}
                         <motion.div
                            // initial={{opacity:0}}
                            initial={{scale:0}}
                            animate={{
                                // y:ingredients["cheese"]?100: -100,
                                // opacity:ingredients["cheese"]?1:0,
                                scale:ingredients["cheese"] ? 1 : 0,
                            }}
                            transition={{duration:1}}
                            className="cheese">
                    <img src={Cheese} alt="cheese" height="100%" width="100%"/> 
                    </motion.div>
                         <motion.div
                            initial={{opacity:0}}
                            animate={{
                                y:ingredients["pineapple"]?100: -100,
                                opacity:ingredients["pineapple"]?1:0,
                            }}
                            transition={{duration:1}}
                            className="ingredients">
                    <img src={Pineapple} alt="pineapple" height="100%" width="100%"/> 
                    </motion.div>
                       <motion.div
                            initial={{opacity:0}}
                            animate={{
                                y:ingredients["olive"]?100: -100,
                                opacity:ingredients["olive"]?1:0,
                            }}
                            transition={{duration:1}}
                            className="ingredients">
                    <img src={Olive} alt="olive" height="100%" width="100%"/> 
                    </motion.div>
                      
                    <motion.div
                            initial={{opacity:0}}
                            animate={{
                                y:ingredients["basil"]?100: -100,
                                opacity:ingredients["basil"]?1:0,
                            }}
                            transition={{duration:1}}
                            className="ingredients">
                    <img src={Basil} alt="basil" height="100%" width="100%"/> 
                    </motion.div>
                    <motion.div
                            initial={{opacity:0}}
                            animate={{
                                y:ingredients["tomato"]?100: -100,
                                opacity:ingredients["tomato"]?1:0,
                            }}
                            transition={{duration:1}}
                            className="ingredients">
                    <img src={Tomato} alt="tomato" height="100%" width="100%"/> 
                    </motion.div>
                    <motion.div
                            initial={{opacity:0}}
                            animate={{
                                y:ingredients["mushroom"]?100: -100,
                                opacity:ingredients["mushroom"]?1:0,
                            }}
                            transition={{duration:1}}
                            className="ingredients">
                    <img src={Mushroom} alt="mushroom" height="100%" width="100%"/> 
                    </motion.div>
                    
                    {/* <img src={Tomato} alt="Tomato" height="100%" width="100%" className="ingredients"/> */}
                    <img src={Base} alt="Pizza Base" height="100%" width="100%"/>
                </div>
            </div>
            <div style={{border:"2px solid black",flex:1}}>
                {/* Checkbox */}
                <input type="checkbox" checked={ingredients["pineapple"]}id="pineapple" name="pineapple" onChange={(event)=>onChange(event.currentTarget.checked,"pineapple")}/>
                <label for="pineapple">Pineapple</label>
                <input type="checkbox" checked={ingredients["basil"]}id="basil" name="basil" onChange={(event)=>onChange(event.currentTarget.checked,"basil")}/>
                <label for="basil">Basil</label>
                <input type="checkbox" checked={ingredients["cheese"]}id="cheese" name="cheese" onChange={(event)=>onChange(event.currentTarget.checked,"cheese")}/>
                <label for="cheese">Cheese</label>
                <input type="checkbox" checked={ingredients["mushroom"]}id="mushroom" name="mushroom" onChange={(event)=>onChange(event.currentTarget.checked,"mushroom")}/>
                <label for="mushroom">Mushroom</label>
                <input type="checkbox" checked={ingredients["olive"]}id="olive" name="olive" onChange={(event)=>onChange(event.currentTarget.checked,"olive")}/>
                <label for="olive">Olive</label>
                <input type="checkbox" checked={ingredients["tomato"]}id="tomato" name="tomato" onChange={(event)=>onChange(event.currentTarget.checked,"tomato")}/>
                <label for="tomato">Tomato</label>
                <button onClick={()=>history.push("/checkout")}>Proceed to Checkout</button>
            </div>
        </div>
    )
}