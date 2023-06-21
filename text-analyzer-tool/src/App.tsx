import { useState } from 'react'
import './App.scss'
import BottomResultBox from './components/BottomResultBox'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import ResultBox from './components/ResultBox'
import TextArea from './components/TextArea'

const App = () => {
  const [word, setWord] = useState(0);
  const [character, setCharacter] = useState(0);
  const [sentence, setSentence] = useState(0);
  const [pronoun, setPronoun] = useState(0);
  const [paragraph, setParagraph] = useState(0);
  const [longestWord, setLongestWord] = useState('');
  const [readTime, setReadTime] = useState(0);

  return (
    <>
      <Navbar />
      <div className="small-container">
        <div className="main-app">
          <ResultBox word={ word } character={ character } sentence={ sentence } pronoun = { pronoun } paragraph = { paragraph }/>
          <TextArea setWord={ setWord } setCharacter={ setCharacter } setSentence={ setSentence } setPronoun = { setPronoun } setParagraph = { setParagraph } setLongestWord = { setLongestWord } setReadTime = { setReadTime }/>
          <BottomResultBox longestWord = { longestWord }  readTime = { readTime }/>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
