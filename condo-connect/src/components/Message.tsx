// components/Message.js
export default function Message({ content, user }) {
    return (
      <div className="message">
        <p><strong>{user}:</strong> {content}</p>
      </div>
    );
  }
  