import * as S from "../../../StudyRoomStyledComponents";
import { useSelector, useDispatch } from "react-redux";
import { interviewActions } from "store/InterviewStore";

const StudyEssayDetail = ({ nickname, onAir }) => {
  const feedbackList = useSelector((state) => state.interview.feedbackList);
  const members = useSelector(
    (state) => state.interviewWebSocket.currentRoom.members
  );
  const dispatch = useDispatch();

  // nickname을 사용하여 해당 멤버를 찾습니다.
  const member = members.find((m) => m.nickname === nickname);
  const essay = member ? member.mainEssay : null;

  const createAI = (index) => {
    // 자소서 기반 질문 자동 생성 api 호출
    // 생셩되면 store에 저장하기
    if (window.confirm("이 항목에 대한 질문을 자동으로 생성할까요?")) {
    }
  };

  // const updateMatchingObject = (value) => {
  //     const targetUserIdx = feedbackList.findIndex(
  //         (obj) => obj.name === profile.name
  //     );
  //     const updatedMatchingObject = {
  //         ...feedbackList[targetUserIdx],
  //         feedbacks: [
  //             ...feedbackList[targetUserIdx].feedbacks,
  //             { question: value, feedback: [] },
  //         ],
  //     };

  //     return updatedMatchingObject;
  // };

  // const submitQuestion = () => {
  //     const updatedMatchingObject = updateMatchingObject(value);
  //     const updatedArray = feedbackList.map((obj) =>
  //         obj.name === profile.name ? updatedMatchingObject : obj
  //     );

  //     dispatch(interviewActions.updateFeedbacks(updatedArray));
  // };
  if (!essay) {
    return (
      <div>
        {nickname}
        {member && member.mainEssay ? (
          <S.essayDetailWrap>
            {member.mainEssay.title}
            {member.mainEssay.essayDetails.map((item, index) => (
              <S.essayDetailEach key={index}>
                <S.essayDetailQuest>
                  {index + 1}. {item.question}
                </S.essayDetailQuest>
                <S.essayDetailContent>{item.answer}</S.essayDetailContent>
              </S.essayDetailEach>
            ))}
          </S.essayDetailWrap>
        ) : (
          <S.essayDetailWrap>에세이가 없습니다.</S.essayDetailWrap>
        )}
      </div>
    );
  }
  return (
    <div>
      {nickname}
      <S.essayDetailWrap>
        {essay.title}
        {essay.essayDetails.map((item, index) => (
          <S.essayDetailEach key={index}>
            <S.essayDetailQuest>
              {index + 1}. {item.question}
            </S.essayDetailQuest>
            <S.essayDetailContent>{item.answer}</S.essayDetailContent>
            {!onAir && (
              <S.essayAI onClick={() => createAI(index)}>
                AI 질문 생성하기
              </S.essayAI>
            )}
          </S.essayDetailEach>
        ))}
      </S.essayDetailWrap>
    </div>
  );
};

export default StudyEssayDetail;
