import PropTypes from "prop-types";

function MessageDetail({ message }) {
  const messageDate = new Date(message.createdAt).toDateString();
  return (
    <>
    <div className="message--container">
      <div className="message__view">
      {message.text} 
      </div>
        &#10060;      
    </div>
    <sub>
    (by {message.user} at {messageDate})
    </sub>
  </>
  );
}

MessageDetail.propTypes = {
  message: PropTypes.string.isRequired,
};

export default MessageDetail;
