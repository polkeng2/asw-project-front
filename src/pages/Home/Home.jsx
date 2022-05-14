import { useState, useEffect } from "react";
import Post from "../../components/NavBar/Post";
import axios from "axios";
import usePosts from "../../hooks/usePosts";

const Posts = [
  {
    id: 86,
    title: "Vull aprovar dbd",
    url: "",
    msg: "I asw també",
    likes: 4,
    username: "pol.ken.galceran",
    creationTime: "2022-04-20T14:28:47.672Z",
    commentsNum: "2",
    comments: [],
  },
  {
    id: 32,
    title: "Un post sin URL",
    url: "doamdaodmso",
    msg: "undefined",
    likes: 1,
    username: "tortuga",
    creationTime: "2022-03-28T20:59:00.478Z",
    commentsNum: "0",
    comments: [],
  },
];

const Home = () => {
    const [posts, setPosts] = useState([]);

  return (
    <div>
      {Posts.map((post, index) => {
        return (
          <Post
            key={index}
            index={index + 1}
            id={post.id}
            title={post.title}
            url={post.url}
            msg={post.msg}
            likes={post.likes}
            username={post.username}
            creationTime={post.creationTime}
            commentsNum={post.commentsNum}
            comments={post.comments}
          />
        );
      })}
    </div>
  );
};

export default Home;
