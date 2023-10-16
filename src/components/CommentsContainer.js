import React from "react";

const CommentsData = [
  {
    name: "Dinesh",
    text: "Hello Dear",
    replies: [],
  },
  {
    name: "Dinesh",
    text: "Hello Dear",
    replies: [
      {
        name: "Dinesh",
        text: "Hello Dear",
        replies: [
          {
            name: "Dinesh",
            text: "Hello Dear",
            replies: [
              {
                name: "Dinesh",
                text: "Hello Dear",
                replies: [],
              },
            ],
          },
        ],
      },
      {
        name: "Dinesh",
        text: "Hello Dear",
        replies: [],
      },
    ],
  },
  {
    name: "Dinesh",
    text: "Hello Dear",
    replies: [],
  },
  {
    name: "Dinesh",
    text: "Hello Dear",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex shadow-sm bg-gray-100 p-1 rounded-lg m-1">
      <img
        className="w-8 h-8"
        alt="user"
        src="https://toppng.com/public/uploads/preview/user-account-management-logo-user-icon-11562867145a56rus2zwu.png"
      ></img>
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};
const CommentsList = ({ comments }) => {
  //don't use index as key
  return comments.map((comment, index) => {
    return (
      <div key={index}>
        <Comment data={comment} />;
        <div className="pl-2 border-l-black ml-5">
          <CommentsList comments={comment.replies} />
        </div>
      </div>
    );
  });
};
const CommentsContainer = () => {
  return (
    <div className="m-1 p-1">
      <h1 className="text-2xl font-bold">Comments:</h1>
      <CommentsList comments={CommentsData} />
    </div>
  );
};

export default CommentsContainer;
