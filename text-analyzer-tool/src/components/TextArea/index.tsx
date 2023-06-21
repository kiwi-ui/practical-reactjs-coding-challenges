import './index.scss'
import { useRef } from "react";
import { pronouns } from '../../data/pronouns';
const TextArea = ({ setWord, setCharacter, setSentence, setPronoun, setParagraph, setLongestWord, setReadTime }:any) => {
  const input = useRef('')
  
  const countingWords = (e:any) => {
    e.preventDefault()
    input.current = e.target.value

    const splitedWord = input.current.split(' ');
    
    setWord(splitedWord.filter((word) => word !== '').length);
    setCharacter(input.current.length)
    
    const paragraphs = input.current.split("\n"); // Memisahkan teks menjadi paragraf
    const count = paragraphs.reduce((total, paragraph) => {
      const words = paragraph.split(" "); // Memisahkan kata-kata dalam paragraf
      const pronounCount = words.filter((word) => pronouns.includes(word)).length;
      return total + pronounCount;
    }, 0);    

    setPronoun(count)
    
    const regex = /[\w)][.?!]/
    const sentence = input.current.split(regex);
    setSentence(sentence.length-1)

    const pargraphRegex = /[\w)][\n]/
    const paragraph = input.current.split(pargraphRegex);
    setParagraph(paragraph.length)

    let theLongestWord:any = splitedWord.sort((a,b) => (b.length - a.length))
    setLongestWord(theLongestWord[0])
    
    let averageReadingTime: number = 200 //word per minute;
    let readTime: number = Math.ceil(splitedWord.length / averageReadingTime)
    if(splitedWord.length / averageReadingTime < 1) {
      setReadTime('Less than a minute')
    }
    else {
      setReadTime(`~${readTime} minute`);
    }
  }

  
  return (
    <>
      <textarea onChange={ countingWords } className="text-area" placeholder="Paste your text here..." />
    </>
  ) 
}

export default TextArea
