import { styled } from "styled-components";
import PageSelector from "../Component/PageSelector";

function Profile() {
  return (
    <Frame>
      <Title>PROFILE</Title>
      <Box>
        <ProfileImg
          // src="./img/IMG_1069.JPG"
          src="./img/IMG_1069.JPG"
          onContextMenu={(e) => e.preventDefault()}
          alt="profile_img"
        />
        <ProfileBox>
          <ProfileLeft>
            <div>이름</div>
            <div>MBTI</div>
            <div>관심 개발 분야</div>
            <div>GitHub</div>
            <div>instagram</div>
          </ProfileLeft>
          <ProfileRight style={{ borderLeft: "3px solid white" }}>
            <div>임동민</div>
            <div>ESFJ</div>
            <div>Front-End</div>
            <div>
              <a
                href="https://github.com/dongmin-Lim"
                target="_blank"
                rel="noopener noreferrer"
              >
                HERE!
              </a>
            </div>
            <div>
              <a
                href="https://www.instagram.com/dm_0216/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Me 😊
              </a>
              <a
                href="https://www.instagram.com/pepsi._.1009/"
                target="_blank"
                rel="noopener noreferrer"
              >
                My Dog 🐶
              </a>
              <a
                href="https://www.instagram.com/dongmini_r53/"
                target="_blank"
                rel="noopener noreferrer"
              >
                My Car 🚙
              </a>
            </div>
          </ProfileRight>
        </ProfileBox>
      </Box>
      {PageSelector(undefined, "/tech")}
    </Frame>
  );
}

export default Profile;

const Frame = styled.div`
  font-size: "40px";
  text-align: "center";
  a {
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`;

export const Title = styled.div`
  font-size: 40px;
  margin-bottom: 10px;
`;

const Box = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;

const ProfileImg = styled.img`
  display: block;
  width: 300px;
  height: 100%;
  border-radius: 20px;
`;

const ProfileBox = styled.div`
  width: 100%;
  height: 700px;
  display: grid;
  grid-template-columns: 1fr 3fr;
  background-color: rgba(100, 100, 100, 0.2);
  border-radius: 20px;
  padding: 20px;
`;

const ProfileLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-right: 20px;
  font-size: 30px;
  text-align: right;
`;

const ProfileRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-left: 20px;
  font-size: 30px;
  text-align: left;
  a {
    margin-right: 30px;
  }
`;
