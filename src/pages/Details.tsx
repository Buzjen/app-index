import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Item, getItemsById } from "../api/getItems";
import { VerticalSkeleton } from "../components/Card/VerticalCard/VerticalSkeleton";

export const Details = () => {
  const [post, setPost] = useState<Item | null>(null);
  const { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
        if (id !== undefined) {
          const res = await getItemsById(id);
          setPost(res);
        }
        return;
      } catch (error) {
        alert(`${id}`);
      }
    }
    fetchData();
  }, [id]);

  if (post !== null) {
    return (
      <div className="content">
        <div>
          <div>
            <h2>{post.price}</h2>
          </div>
          <h4>{post.title}</h4>
          <div>
            <p>{post.address}</p>
            <p>{post.about}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="content">
      <VerticalSkeleton />
    </div>
  );
};
