import { styled } from "styled-components";

function Talk() {
  return (
    <Frame id="title_3">
      TALK
      <Talk_0>
        <Talk_1>
          <h3 style={{ fontSize: "30px" }}>전하고 싶은 말</h3>
          비록 현재엔 기술이 부족하고 서투른 개발자일지 몰라도
          <br />
          꾸준히 성장하며 언젠가 거대해질 날을 꿈꾸며 꾸준히 노력하겠습니다.
        </Talk_1>
        <Talk_2 style={{ fontSize: "40px" }}>
          <h3 style={{ fontSize: "30px" }}>나의 관심사</h3>
          <div style={{ fontSize: "25px" }}>
            🏎 <br />
            어렸을 때 부터 자동차를 굉장히 좋아했습니다. <br />
            <br />
            👟 <br />
            대학교 진학 후 신발에 관심을 가지게 되면서 꾸미는 법을 알게 되었습니다. <br />
            <br />
            💻 <br />
            컴퓨터 다루는 것을 좋아했습니다. <br />
            자동차라는 기계를 좋아하다보니 자연스럽게 컴퓨터에 관심을 가지게 되었고,
            <br />그 것이 이어져 코딩이라는 세계에 빠졌습니다.
          </div>
        </Talk_2>
      </Talk_0>
      <PageSelect>
        <NextPage href="/tech">PREVIOUS</NextPage>
      </PageSelect>
    </Frame>
  );
}

export default Talk;

const Frame = styled.div`
  font-size: "40px";
  text-align: "center";
`;

const Talk_0 = styled.div`
  text-align: left;
`;

const Talk_1 = styled.div`
  background-color: rgba(100, 100, 100, 0.2);
  border-radius: 20px;
  font-size: 25px;
  padding: 20px;
  margin-bottom: 20px;
`;

const Talk_2 = styled.div`
  background-color: rgba(100, 100, 100, 0.2);
  border-radius: 20px;
  font-size: 25px;
  padding: 20px;
`;

const PageSelect = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 20px;
`;

const NextPage = styled.a`
  height: 70px;
  margin: 20px 0;
  text-align: center;
  line-height: 70px;
  background-color: rgba(100, 100, 100, 0.2);
  border-radius: 20px;
  font-size: 25px;
`;
