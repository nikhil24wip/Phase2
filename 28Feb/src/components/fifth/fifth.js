import { useState } from "react";
import Menu from "../menu/menu";
const Five = () => {
    const [firstName, setFirstName] = useState('')

    const update = () => {
        setFirstName("NIKHIL")
    }
    return(
        <div>
            <Menu/>
            First Name is : {firstName} 
            <br/>
            <input type="button" value="Change" onClick={update} /> <br/>
            
        </div>
    )
}
export default Five;