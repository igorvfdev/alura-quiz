import styled from 'styled-components';
import Head from 'next/head';
import { useRouter } from 'next/router';

import db from '../db.json';
import Widget from '../src/components/Widget/index';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer/index.js';
import GitHubCorner from '../src/components/GitHubCorner';

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
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>AluraQuiz</title>
      </Head>
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>Titulo Principal</h1>
          </Widget.Header>
          <Widget.Content>
            <form onSubmit={function(e){
              e.preventDefault();
              const name = 'Igor';
              const router = useRouter();
              router.push(`/quiz?name=${name}`);
              console.log('Fazendo submissao por meio do react');
            }}>
              <input placeholder="Diz seu nomne" />
              <button type="submit">
                Jogar (seuNome)
              </button>
            </form>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Content>
            <h1>Titulo Principal</h1>

            <p>Loren ipsum dolor sit amedf...</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner />
    </QuizBackground>
  );
}
