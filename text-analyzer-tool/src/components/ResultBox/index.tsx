import { ReactNode } from 'react';
import './index.scss';

interface ResultBoxProps {
  word: number;
  character: number;
  sentence: number;
  pronoun: number;
  paragraph: number;
}

interface ResultBox {
  title: string;
  value: number;
}

const ResultBox = ({ word, character, sentence, pronoun, paragraph }: ResultBoxProps) => {
  const resultBar: ResultBox[] = [
    {
      title: 'Words',
      value: word,
    },
    {
      title: 'Characters',
      value: character,
    },
    {
      title: 'Sentences',
      value: sentence,
    },
    {
      title: 'Paragraphs ',
      value: paragraph,
    },
    {
      title: 'Pronouns',
      value: pronoun,
    },
  ]

  return (
    <div className="result-bar">
      {resultBar.map(({ title, value }) => (
        <div className="result-box" key={title}>
          <span className="box-title">{title}</span>
          <span className="box-value">{value}</span>
        </div>
      ))}
    </div>
  )
}

export default ResultBox
