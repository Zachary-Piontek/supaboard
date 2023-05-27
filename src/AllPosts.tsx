import { useParams } from "react-router-dom";

export default function AllPosts() {
  const { pageNumber } = useParams();
  return (
    <div>
      <h1>All Posts --- Page: {pageNumber}</h1>
    </div>
  );
}
