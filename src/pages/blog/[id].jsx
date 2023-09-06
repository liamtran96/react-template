import { useParams } from "react-router-dom";
// eslint-disable-next-line react/prop-types
export default function PageName() {
  const { id } = useParams();
  return <div>Blog {id}</div>;
}
