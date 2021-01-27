import styled from 'styled-components'
import db from '../db.json'
import Widget from '../src/components/Widget/index.js'
import QuizBackground from '../src/components/QuizBackground'
import Footer from '../src/components/Footer/index.js'
import GitHubCorner from '../src/components/GitHubCorner'

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  return (
    <QuizBackground backgroundImage = {db.bg}>
      <QuizContainer>
        <Widget>
            <Widget.Header>
              <h1>Titulo Principal</h1>
            </Widget.Header>
          <Widget.Content>

            <p>Loren ipsum dolor sit amedf...</p>
          </Widget.Content>
        </Widget>
        <Widget>
            <h1>Titulo Principal</h1>

            <p>Loren ipsum dolor sit amedf...</p>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner />
    </QuizBackground>
  );
}
