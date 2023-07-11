import { styled } from "styled-components";

function PageSelector(prev, next) {
  return (
    <PageSelect>
      <NextPage href={prev}>PREVIOUS</NextPage>
      <NextPage href={next}>NEXT</NextPage>
    </PageSelect>
  );
}

export default PageSelector;

const PageSelect = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 20px;
  margin-top: 20px;
`;

const NextPage = styled.a`
  height: 70px;
  margin: 0;
  text-align: center;
  line-height: 70px;
  background-color: rgba(100, 100, 100, 0.2);
  border-radius: 20px;
  font-size: 25px;
`;
