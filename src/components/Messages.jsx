import React from 'react';
import PropTypes from 'prop-types';

export default function Messages({ messages }) {
  return (
    <>
      <h2>Messages</h2>
      {messages.map((message, i) =>
        // TODO: format as cards, add timestamp
        {
          const d = new Date(parseInt(message.datetime)/1000000)
          let date = d.getDate();
          let month = d.getMonth() + 1;
          let year = d.getFullYear();
          let hour = d.getHours();
          let minute = d.getMinutes();
          let second = d.getSeconds();
          const formattedDate = `${date}.${month}.${year} ${hour}:${minute}:${second}`

          return <p key={i} className={message.premium ? 'is-premium' : ''}>
            <strong>{message.sender}</strong>:
            <p class="message-info"><span>{message.text}</span><small>Was signed on: {formattedDate}</small></p>
          </p>
        }
      )}
    </>
  );
}

Messages.propTypes = {
  messages: PropTypes.array
};
