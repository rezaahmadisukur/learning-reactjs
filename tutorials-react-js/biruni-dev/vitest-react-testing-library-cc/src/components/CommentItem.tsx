import type { Comment } from "../App";

interface CommentItemProps {
  comment: Comment;
}

function CommentItem({ comment }: CommentItemProps) {
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(date);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-4 mb-4 border border-gray-200">
      <p className="text-gray-800 mb-2">{comment.text}</p>
      <span className="text-sm text-gray-500">
        {formatDate(comment.timestamp)}
      </span>
    </div>
  );
}

export default CommentItem;
