import { useState } from "react";
import CommentBox from "./components/CommentBox";
import CommentList from "./components/CommentList";

export interface Comment {
  id: string;
  text: string;
  timestamp: Date;
}

function App() {
  const [comments, setComments] = useState<Comment[]>([]);

  const handleAddComment = (text: string) => {
    const newComment: Comment = {
      id: Date.now().toString(),
      text,
      timestamp: new Date(),
    };
    setComments((prev) => [newComment, ...prev]);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Comments</h1>
        <CommentBox onAddComment={handleAddComment} />
        <CommentList comments={comments} />
      </div>
    </div>
  );
}

export default App;
