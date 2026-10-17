import { useState } from "react";
import {MessageBox} from "./MessageBox";

function MessageBoard() {
const [messageArry,setMessageArry] = useState(["Hello all ! This is first"])
const  [message,setMessage] = useState("")

function addMessage() {
  const newArry = [...messageArry];
  newArry.push(message);
  setMessageArry(newArry);
}

 function deleteMessage(index){
  const newArry = [...messageArry];
  newArry.splice(index,1)
  setMessageArry(newArry)
} 

  return (
    <div className="app-wrapper">
      <h1 className="app-title">Message board</h1>
      <div className="message-input-container">
        <label>
          <input
            id="message-text"
            name="message-text"
            type="text"
            placeholder="Enter message here"
            onChange={(event)=>{setMessage(event.target.value)}}
          />
          
        </label>
        <button className="submit-message-button" onClick={()=>{addMessage()}}>Submit</button>
      </div>
      <div className="board">
            {messageArry.map((messages,index)=>{return( 
              MessageBox(messages,index,deleteMessage)
            )}
            )}
          
        
      </div>
    </div>
  );
}

export default MessageBoard;
