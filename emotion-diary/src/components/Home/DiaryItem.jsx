import { getEmotionImage } from "../../util/get-emtion-image";
import { useNavigate } from "react-router-dom";
import Button from "../Button";
import "./DiaryItem.css";

function DiaryItem({ id, emotionId, createdDate, content }) {
  const nav = useNavigate();

  return (
    <div className="DiaryItem">
      <div
        className={`img_section img_section_${emotionId}`}
        onClick={() => nav(`diary/${id}`)}
      >
        <img src={getEmotionImage(emotionId)} />
      </div>
      <div className="info_section" onClick={() => nav(`diary/${id}`)}>
        <div className="created_date">
          {new Date(createdDate).toLocaleDateString()}
        </div>
        <div className="content">{content}</div>
      </div>
      <div className="button_section">
        <Button text={"수정하기"} onClick={() => nav(`/edit/${id}`)} />
      </div>
    </div>
  );
}

export default DiaryItem;
