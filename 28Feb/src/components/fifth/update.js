import { useState } from "react";
import Menu from "../menu/menu";
const NameUpdater = () => {
  const [name, setName] = useState("");
  const [displayName, setDisplayName] = useState("");

  const givename = (e) => {
    setName(e.target.value)
  }
  const handleUpdate = () => {
    setDisplayName(name);
  };

  return (
    <div>
      <Menu/>
      <input type="text" placeholder="Enter your name" onChange={givename} />
      <p>My name is {displayName}</p>
      <input type="button" value="UPDATE" onClick={handleUpdate} /> <br/>
    </div>
  );
}
export default NameUpdater;