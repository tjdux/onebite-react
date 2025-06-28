import { useParams } from "react-router-dom";

function Diary() {
  const { id } = useParams();

  return <div>{id}번 Diary</div>;
}

export default Diary;
