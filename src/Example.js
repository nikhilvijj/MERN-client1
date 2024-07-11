import { Mycontext} from "./Mycontext";
import Mycomponent from "./Mycomponent";
import { useState } from "react";
export default function Example(){
    const [text,setText]= useState("");
   
    return(

        <div>
            <Mycontext.Provider value={{text,setText}} >
                <Mycomponent/>

            </Mycontext.Provider>
            
        </div>
    )
}