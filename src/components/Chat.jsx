import { useSelector, useDispatch } from "react-redux";
import AddMessage from "./AddMessage";
import MessageDetail from "./MessageDetail";
import 'firebase/firestore';
import Footer from './Footer';
import { useEffect, useState } from 'react';
import { selectMovie } from '../redux/actions/movieSelectedActionCreator';
import { db } from '../firebase';


const Chat = () => {
  const [messages, setMessages] = useState([]);
  const movieSelected = useSelector((state) => state.movieSelected);
  const [show, setShow] = useState(false);
  const dispatch = useDispatch(); 
  const handleModalClose = (e) => {
    setShow(false);
  };

  useEffect(() => {
    db.collection(`messages_${movieSelected.id}`).onSnapshot((results) => {
      const movieMessages = [];
      results.forEach((message) => {
        movieMessages.push({ id: message.id, ...message.data() });
      });
      setMessages(movieMessages);
    });
  }, []);

function scrollToBottom (id) {
  var div = document.getElementById(id);
  div.scrollTop = div.scrollHeight - div.clientHeight ;
}
function handleMovieSelected(movie) {
  dispatch(selectMovie(movie));
}
return (
  <>

{movieSelected ? (
        <>
          <div className="chat--title--container" key={movieSelected.id}>
            <span className="chat__title">{movieSelected.title} movie chat</span>
            <button className="like__button" type="button">&#128077;</button>  
            <button className="dislike__button" type="button">&#128078;</button>
            <div hidden={!show}>
                <div className="modal--background" onClick={handleModalClose}>
                    <div>
                        <div className="modal--card">
                            {movieSelected.title}
                        </div>
                    </div>
                </div>
            </div>

          </div>
          <div className="messages--box--container">
            <div className="messages__box" id="messages--box">
              {messages
                .sort(function(a, b){
                  return a.createdAt - b.createdAt;
                })
                .map((message) => (
                <>
                  <MessageDetail key={message.id} message={message} />
                  {scrollToBottom("messages--box")}
                </>
              ))
              }
            </div>
          </div>
          <br />
          <AddMessage />
          <br />
          <div className="footer--empty--chat">
            <Footer />
          </div>
        </>
      ) : (
        <>
          <h4>No movie selected</h4>
        </>
      )}
    </>
    );
  }
  
  export default Chat;