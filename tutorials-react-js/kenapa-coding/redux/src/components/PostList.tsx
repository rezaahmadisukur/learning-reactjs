import { useDispatch, useSelector } from "react-redux";
import { type AppDispath, type RootState } from "../store";
import { fetchPost } from "../slices/PostSlice";
import { useEffect } from "react";

const PostList = () => {
  const dispatch = useDispatch<AppDispath>();
  const items = useSelector((state: RootState) => state.post.items);
  const status = useSelector((state: RootState) => state.post.status);

  useEffect(() => {
    if (status == "idle") {
      dispatch(fetchPost());
    }
  }, []);

  if (status == "loading") {
    return <div>Loading fethcing post ....</div>;
  }

  if (status == "failed") {
    return <div>Failed fethcing post ....</div>;
  }

  return (
    <div>
      <ul>
        {items.map((item: { id: number; title: string }) => (
          <div key={item.id}>{item.title}</div>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
