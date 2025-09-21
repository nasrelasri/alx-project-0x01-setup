import React from 'react';

interface PostCardProps {
  id: number;
  title: string;
  content: string;
  author: string;
  createdAt: string;
  onEdit?: (id: number) => void;
  onDelete?: (id: number) => void;
}

const PostCard: React.FC<PostCardProps> = ({
  id,
  title,
  content,
  author,
  createdAt,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-200">
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-xl font-semibold text-gray-900 line-clamp-2">
          {title}
        </h3>
        <div className="flex space-x-2 ml-4">
          {onEdit && (
            <button
              onClick={() => onEdit(id)}
              className="text-blue-600 hover:text-blue-800 text-sm font-medium"
            >
              Edit
            </button>
          )}
          {onDelete && (
            <button
              onClick={() => onDelete(id)}
              className="text-red-600 hover:text-red-800 text-sm font-medium"
            >
              Delete
            </button>
          )}
        </div>
      </div>
      
      <p className="text-gray-700 mb-4 line-clamp-3">
        {content}
      </p>
      
      <div className="flex justify-between items-center text-sm text-gray-500">
        <span className="font-medium">By {author}</span>
        <span>{new Date(createdAt).toLocaleDateString()}</span>
      </div>
    </div>
  );
};

export default PostCard;
