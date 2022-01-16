import { useState } from "react";
import { useDispatch } from "react-redux";
import { addMessage } from "../redux/actions/messageActionCreator";

function AddMessage() {
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");
  const handleEnterPressed = (event) => {
      if(event.key === 'Enter'){
          handleClick();        
      }
  }

  function handleChange(event) {
    setMessage(event.target.value);
  }

  function handleClick() {
    dispatch(addMessage(message));
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
