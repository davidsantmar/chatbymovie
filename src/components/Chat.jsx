import { useSelector } from "react-redux";
import AddMessage from "./AddMessage";
import MessageDetail from "./MessageDetail";
import firebase from "firebase";
import 'firebase/firestore';

function Chat() {
  const messages = useSelector((state) => state.messages);
  const movieSelected = useSelector((state) => state.movieSelected);
  const db = firebase.firestore();

  function scrollToBottom (id) {
    var div = document.getElementById(id);
    div.scrollTop = div.scrollHeight - div.clientHeight ;
  }
  return (
  <>
      {movieSelected && movieSelected.length > 0 ? (
        movieSelected.map((movie) => (
          <>
          <div className="chat--title--container" key={movie.id}>
            <span className="chat__title">{movie.title} movie chat</span>
            <button className="like__button" type="button">&#128077;</button>  
            <button className="dislike__button" type="button">&#128078;</button>  
          </div>
          {console.log(movie.poster_path)}
          <div className="message--box--container">
            <div className="messages__box" id="messages--box">
              {messages?.map((message) => (
                <>
                <MessageDetail key={message.id} message={message} />
                {scrollToBottom("messages--box")}
                </>
              ))
              }
            </div>
          </div>
          <AddMessage />
          </>
          ))
      ) : (
        <h4>No movie selected</h4>         
    )}

    </>
  );
}

export default Chat;
