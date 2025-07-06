import { useParams, useNavigate } from "react-router-dom";
import { getStringedDate } from "../util/get-stringed-date";
import usePageTitle from "../hooks/usePageTitle";
import useDiary from "../hooks/useDiary";
import Header from "../components/Header";
import Button from "../components/Button";
import Viewer from "../components/Diary/Viewer";

function Diary() {
  const params = useParams();
  const nav = useNavigate();
  usePageTitle(`${params.id}번 일기`);

  const currentDiaryItem = useDiary(params.id);

  if (!currentDiaryItem) {
    return <div>데이터 로딩중...</div>;
  }

  const { createdDate, emotionId, content } = currentDiaryItem;
  const title = getStringedDate(new Date(createdDate));

  return (
    <div>
      <Header
        title={`${title} 기록`}
        leftChild={<Button text={"< 뒤로가기"} onClick={() => nav(-1)} />}
        rightChild={
          <Button text={"수정하기"} onClick={() => nav(`/edit/${params.id}`)} />
        }
      />
      <Viewer emotionId={emotionId} content={content} />
    </div>
  );
}

export default Diary;
