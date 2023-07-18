import { styled } from "styled-components";
import PageSelector from "../Component/PageSelector";

function Portfolio() {
  return (
    <Frame id="title_2">
      <Title>PORTFOLIO</Title>
      <List>
        {/* <a>https://github.com/Jin-Mook/IT_Library</a> */}
        <div>- 백엔드 개발자로 활동중인 제 친구와 협업하여 영화 리뷰서비스를 제작했습니다.</div>
      </List>
      <List>
        {/* <a>https://github.com/dongmin-Lim/movie_review_service</a> */}
        <div>- 백엔드 개발자로 활동중인 제 친구와 협업하여 책 리뷰서비스를 제작했습니다.</div>
      </List>
      {PageSelector("/tech", "/talk")}
    </Frame>
  );
}

export default Portfolio;

const Frame = styled.div`
  font-size: "40px";
  text-align: "center";
  a {
    text-decoration: none;
    color: white;
  }

  a:hover {
    text-decoration: underline;
    color: white;
  }
`;

const Title = styled.div`
  font-size: 28px;
  margin-bottom: 10px;
`;

const List = styled.div`
  font-size: 25px;
  text-align: left;
  margin-bottom: 20px;
  padding: 20px;
  background-color: rgba(100, 100, 100, 0.2);
  border-radius: 20px;
`;
