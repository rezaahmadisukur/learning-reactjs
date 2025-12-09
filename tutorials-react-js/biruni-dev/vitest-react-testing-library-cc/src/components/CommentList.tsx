import type { Comment } from "../App";
import CommentItem from "./CommentItem";

interface CommentListProps {
  comments: Comment[];
}

function CommentList({ comments }: CommentListProps) {
  if (comments.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-sm p-8 text-center">
        <p className="text-gray-500 text-lg">
          No comments yet. Be the first to comment!
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {comments.map((comment) => (
        <CommentItem key={comment.id} comment={comment} />
      ))}
    </div>
  );
}

export default CommentList;
