import { styled } from "styled-components";

function Profile() {
  return (
    <Frame>
      <Title>PROFILE</Title>
      <Box>
        <ProfileImg src="./img/IMG_1069.JPG" onContextMenu={(e) => e.preventDefault()} alt="profile_img" />
        <ProfileBox>
          <ProfileLeft>
            <div>이름</div>
            <div>MBTI</div>
            <div>관심 개발 분야</div>
            <div>git</div>
            <div>instagram</div>
          </ProfileLeft>
          <ProfileRight style={{ borderLeft: "3px solid white" }}>
            <div>임동민</div>
            <div>ESFJ</div>
            <div>Front-End</div>
            <div>
              <a href="https://github.com/dongmin-Lim" target="_blank" rel="noopener noreferrer">
                HERE!
              </a>
            </div>
            <div>
              <a href="https://www.instagram.com/dm_0216/" target="_blank" rel="noopener noreferrer">
                Me 😊
              </a>
              <a href="https://www.instagram.com/pepsi._.1009/" target="_blank" rel="noopener noreferrer">
                My Dog 🐶
              </a>
              <a href="https://www.instagram.com/dongmini_r53/" target="_blank" rel="noopener noreferrer">
                My Car 🚙
              </a>
            </div>
          </ProfileRight>
        </ProfileBox>
      </Box>
      <PageSelect>
        <NextPage href="/profile">PREVIOUS</NextPage>
        <NextPage href="/talk">NEXT</NextPage>
      </PageSelect>
    </Frame>
  );
}

export default Profile;

const Frame = styled.div`
  font-size: "40px";
  text-align: "center";
`;

const Title = styled.div`
  font-size: 28px;
  margin-bottom: 10px;
`;

const Box = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;

const ProfileImg = styled.img`
  display: block;
  width: 500px;
  border-radius: 20px;
`;

const ProfileBox = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 3fr;
  background-color: rgba(100, 100, 100, 0.2);
  border-radius: 20px;
  padding: 20px;
`;

const ProfileLeft = styled.div`
  padding-right: 20px;
  font-size: 25px;
  text-align: right;
`;

const ProfileRight = styled.div`
  padding-left: 20px;
  font-size: 25px;
  text-align: left;
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
