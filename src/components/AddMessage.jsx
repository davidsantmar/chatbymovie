import { useState } from "react";
import {  useSelector } from "react-redux";
import { addMessage } from "../firebase/dbactions";
//import { addMessage } from "../redux/actions/messageActionCreator";

function AddMessage() {
  const [message, setMessage] = useState("");
  const movieSelected = useSelector((state) => state.movieSelected);

  const handleEnterPressed = (event) => {
      if(event.key === 'Enter'){
          handleClick();        
      }
  }

  function handleChange(event) {
    setMessage(event.target.value);
  }

  function handleClick() {
    addMessage(movieSelected.id, {
      text: message,
      user: "davidsanmar@yahoo.es", // TODO TRAER USER DEL STORE O DE FIREBASE
      createdAt: Date.now()
    });
    setMessage("");
  }
  return (
    <>
      <div className="input--message--container">
        <input
          className="send__message__field"
          type="text"
          onChange={handleChange}
          onKeyPress={handleEnterPressed}
          value={message}
          placeholder="Type your message"
          autoFocus            
        />
        <button
          className="send__message__button"
          type="submit"
          disabled={!message.trim()}
          onClick={handleClick}
        >
          &#10132;
        </button>
      </div>
    </>
  );
}

export default AddMessage;
