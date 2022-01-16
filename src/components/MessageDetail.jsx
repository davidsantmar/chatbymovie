import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { deleteMessage } from "../redux/actions/messageActionCreator";

function MessageDetail({ message }) {
  const dispatch = useDispatch();

  function handleDelete() {
    dispatch(deleteMessage(message));
  }
  return (
    <p className="message--container">
      {message.description}
      <button
        type="button"
        aria-label="Close"
        onClick={handleDelete}
      >
        &#10060;      
      </button>
    </p>
  );
}

MessageDetail.propTypes = {
  message: PropTypes.string.isRequired,
};

export default MessageDetail;
