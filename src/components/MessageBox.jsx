export function MessageBox(messages,index,deleteFun) { return(
  <div className="message" key={index}>
                <h1>{messages}</h1>
                <button className="delete-button" onClick={()=>{deleteFun(index)}}>x</button>
    </div>)
}

