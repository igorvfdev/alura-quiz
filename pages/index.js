import styled from 'styled-components';
import Head from 'next/head';
import { useRouter } from 'next/router';

import db from '../db.json';
import QuizLogo from '../src/components/QuizLogo';
import Widget from '../src/components/Widget/index';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer/index.js';
import GitHubCorner from '../src/components/GitHubCorner';
import Input from '../src/components/Input';
import Button from '../src/components/Button';
import QuizContainer from '../src/components/QuizContainer';


export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');

  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>AluraQuiz</title>
      </Head>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>Titulo Principal</h1>
          </Widget.Header>
          <Widget.Content>
            <form onSubmit={function(e){
              e.preventDefault();
              
              router.push(`/quiz?name=${name}`);
              console.log('Fazendo submissao por meio do react');
            }}>
              <Input
                name = "nomeDoUsuario"
                onChange = {(e) => setName(e.target.value)}
                placeholder="Diz seu nome"
                value = {name}
              />
              <Button type="submit" disabled={name.length === 0}>
                {`Jogar ${name}`}            
              </Button>
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
