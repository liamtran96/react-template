import { useParams } from "react-router-dom";

export default function PageName() {
  const { id } = useParams();
  return <div>Blog {id}</div>;
}
