import { useState } from "react";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [username, setUsername] = useState(""); // Track the user's name

  const handleAddComment = () => {
    if (newComment.trim() !== "" && username.trim() !== "") {
      const newEntry = { id: Date.now(), user: username, text: newComment };
      setComments([...comments, newEntry]);
      setNewComment("");
    }
  };

  const handleEditComment = (id) => {
    const updatedText = prompt("Edit your comment:");
    if (updatedText !== null && updatedText.trim() !== "") {
      setComments(
        comments.map((comment) =>
          comment.id === id ? { ...comment, text: updatedText } : comment
        )
      );
    }
  };

  const handleDeleteComment = (id) => {
    setComments(comments.filter((comment) => comment.id !== id));
  };

  return (
    <div className="comments-page">
      <h2>Comments</h2>
      
      <div className="comment-input">
        <input
          type="text"
          placeholder="Enter your name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          placeholder="Write a comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button onClick={handleAddComment}>Post</button>
      </div>

      <ul className="comments-list">
        {comments.map((comment) => (
          <li key={comment.id}>
            <strong>{comment.user}:</strong> {comment.text}
            <button onClick={() => handleEditComment(comment.id)}>Edit</button>
            <button onClick={() => handleDeleteComment(comment.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Comments;
