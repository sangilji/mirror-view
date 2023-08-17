import { styled, css, keyframes } from "styled-components";

const fadeInLeft = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border: none;
  overflow: scroll;
  overflow-x: hidden;
  overflow-y: hidden;
`;

export const Content = styled.div`
  position: absolute;
  top: 30%;
  left: 25%;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 2;
`;

export const Image = styled.img`
  width: 100%;
  height: 400vh;
  object-fit: cover;
  display: flex;
`;

export const MainComment = styled.h2`
  position: relative;
  color: #033495;
  font-size: 64px;
  font-family: "wooju";
  word-wrap: break-word;
`;

export const MainComment2 = styled.h2`
  position: relative;
  color: #6a9cfd;
  font-size: 64px;
  font-family: wooju;
`;

export const AboutusThinkImage = styled.div`
  position: relative;
  z-index: 1;
`;

export const AboutusThinkBubble = styled.div`
  position: relative;
  z-index: 1;
`;

export const BubbleConmmentWrapper = styled.div`
  position: relative;
  z-index: 1;
  white-space: nowrap;
  line-height: 1.6;
`;

export const BubbleComment = styled.h2`
  color: black;
  font-size: 1.7rem;
  font-family: KCC;
  line-height: 2;
`;

export const GrayWave = styled.div`
  position: relative;
  width: 1800px;
  height: 20px;
  background: linear-gradient(90deg, transparent, #ccc, transparent);
  z-index: 1;
`;

// 채팅
const ChatBubbleBase = styled.div`
  opacity: ${(props) => (props.show === "true" ? 1 : 0)};
  animation: ${(props) =>
    props.show
      ? css`
          ${fadeInLeft} ${props.animationDuration || "2s"} ease
        `
      : "none"};
  position: relative;
  z-index: 1;
  width: 100px;
  height: 300px;
`;

export const ChatBuubleOne = styled(ChatBubbleBase)``;

export const ChatBuubleTwo = styled(ChatBubbleBase)``;

export const ChatBuubleThree = styled(ChatBubbleBase)``;

export const ChatBuubleFour = styled(ChatBubbleBase)``;

export const ChatBuubleFive = styled(ChatBubbleBase)``;

export const ChatBuubleSix = styled(ChatBubbleBase)``;

export const BubbleOneWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: #ffffff;
  border: 0px solid #ccc;
  border-radius: 30px;
  padding: 60px 50px;
  width: 320px;
  height: 10px;
  max-width: 2000px;

  &::before {
    content: "";
    position: absolute;
    transform: translateY(-50%);
    width: 20;
    height: 0;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-bottom: 20px solid #ffffff; /* 꼬리 색상을 배경색과 동일하게 설정 */
  }

  &::after {
    content: "";
    position: absolute;
    top: 10%;
    left: -38px; /* 꼬리 뾰족한 부분을 왼쪽 옆을 향하도록 설정 */
    transform: translateY(-50%);
    width: 10;
    height: 10;
    border-left: 20px solid transparent;
    border-right: 20px solid #ffffff; /* 꼬리 뾰족한 부분의 색상 설정 */
    border-bottom: 20px solid transparent;
  }
`;

export const BubbleTwoWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: #fef01b;
  border: 0px solid #ccc;
  border-radius: 30px;
  padding: 40px 45px;
  width: 400%;
  height: 0px;
  max-width: 2000px;

  &::after {
    content: "";
    position: absolute;
    top: 13%;
    left: 470px; /* 꼬리 뾰족한 부분을 왼쪽 옆을 향하도록 설정 */
    transform: translateY(-50%) rotate(270deg);
    width: 10;
    height: 10;
    border-left: 20px solid transparent;
    border-right: 20px solid #fef01b; /* 꼬리 뾰족한 부분의 색상 설정 */
    border-bottom: 20px solid transparent;
  }
`;

export const BubbleThreeWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: #ffffff;
  border: 0px solid #ccc;
  border-radius: 30px;
  padding: 65px 55px;
  width: 650px;
  height: 230px;
  max-width: 2000px;

  &::before {
    content: "";
    position: absolute;
    transform: translateY(-50%);
    width: 20;
    height: 0;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-bottom: 20px solid #ffffff; /* 꼬리 색상을 배경색과 동일하게 설정 */
  }

  &::after {
    content: "";
    position: absolute;
    top: 20%;
    left: -38px; /* 꼬리 뾰족한 부분을 왼쪽 옆을 향하도록 설정 */
    transform: translateY(-50%);
    width: 10;
    height: 0;
    border-left: 20px solid transparent;
    border-right: 20px solid #ffffff; /* 꼬리 뾰족한 부분의 색상 설정 */
    border-bottom: 20px solid transparent;
  }
`;

export const BubbleFourWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: #fef01b;
  border: 0px solid #ccc;
  border-radius: 30px;
  padding: 40px 45px;
  width: 470%;
  height: 10px;
  max-width: 2000px;

  &::after {
    content: "";
    position: absolute;
    top: 13%;
    left: 543px; /* 꼬리 뾰족한 부분을 왼쪽 옆을 향하도록 설정 */
    transform: translateY(-50%) rotate(270deg);
    width: 10;
    height: 10;
    border-left: 20px solid transparent;
    border-right: 20px solid #fef01b; /* 꼬리 뾰족한 부분의 색상 설정 */
    border-bottom: 20px solid transparent;
  }
`;

export const BubbleFiveWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: #ffffff;
  border: 0px solid #ccc;
  border-radius: 30px;
  padding: 65px 55px;
  width: 580px;
  height: 150px;
  max-width: 2000px;

  &::before {
    content: "";
    position: absolute;
    transform: translateY(-50%);
    width: 20;
    height: 0;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-bottom: 20px solid #ffffff; /* 꼬리 색상을 배경색과 동일하게 설정 */
  }

  &::after {
    content: "";
    position: absolute;
    top: 20%;
    left: -38px; /* 꼬리 뾰족한 부분을 왼쪽 옆을 향하도록 설정 */
    transform: translateY(-50%);
    width: 10;
    height: 0;
    border-left: 20px solid transparent;
    border-right: 20px solid #ffffff; /* 꼬리 뾰족한 부분의 색상 설정 */
    border-bottom: 20px solid transparent;
  }
`;

export const BubbleSixWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: #fef01b;
  border: 0px solid #ccc;
  border-radius: 30px;
  padding: 40px 45px;
  width: 320%;
  height: 40px;
  max-width: 2000px;

  &::after {
    content: "";
    position: absolute;
    top: 13%;
    left: 390px; /* 꼬리 뾰족한 부분을 왼쪽 옆을 향하도록 설정 */
    transform: translateY(-50%) rotate(270deg);
    width: 10;
    height: 10;
    border-left: 20px solid transparent;
    border-right: 20px solid #fef01b; /* 꼬리 뾰족한 부분의 색상 설정 */
    border-bottom: 20px solid transparent;
  }
`;

const BubbleCommentBase = styled.h2`
  opacity: ${(props) => (props.show === "true" ? 1 : 0)};
  animation: ${(props) =>
    props.show
      ? css`
          ${fadeInLeft} ${props.animationDuration || "2s"} ease
        `
      : "none"};
  text-align: ${(props) => props.textAlign || "justify"};
  z-index: 2;
  font-size: ${(props) => props.fontSize || "30px"};
  font-family: wooju;
  color: black;
  line-height: ${(props) => props.lineHeight || "1.5"};
  white-space: nowrap;
`;

export const BubbleOneComment = styled(BubbleCommentBase)`
  display: inline-block;
  font-size: 31px;
`;

export const BubbleTwoComment = styled(BubbleCommentBase)`
  text-align: center;
`;

export const BubbleThreeComment = styled(BubbleCommentBase)`
  line-height: 1.6;
`;

export const BubbleFourComment = styled(BubbleCommentBase)`
  text-align: center;
`;

export const BubbleFiveComment = styled(BubbleCommentBase)`
  line-height: 1.7;
`;

export const BubbleSixComment = styled(BubbleCommentBase)``;
