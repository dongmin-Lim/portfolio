import { styled } from "styled-components";

function PageSelector(prev, next) {
  return (
    <PageSelect>
      {prev ? (
        <NextPage href={`/resume${prev}`}>PREVIOUS</NextPage>
      ) : (
        <NonNextPage></NonNextPage>
      )}
      {next && <NextPage href={`/resume${next}`}>NEXT</NextPage>}
    </PageSelect>
  );
}

export default PageSelector;

const PageSelect = styled.div`
  width: 1200px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 20px;
  margin-top: 20px;
  a {
    text-decoration: none;
    color: white;
  }

  a:hover {
    text-decoration: underline;
    color: white;
  }
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

const NonNextPage = styled.div`
  height: 70px;
  margin: 0;
  background-color: rgba(100, 100, 100, 0);
  border-radius: 20px;
  font-size: 25px;
`;
