import './index.scss'

interface BottomResultBox {
  longestWord: string;
  readTime: number;
}

const BottomResultBox = ({ longestWord, readTime  }: BottomResultBox) => {
  const bottomResultBar = [
    {
      title: 'Average Reading Time:',
      value: readTime,
    },
    {
      title: 'Longest word:',
      value: longestWord,
    },
  ]

  return (
    <div className="bottom-result-bar">
      {bottomResultBar.map(({ title, value }) => (
        <div className="result-box" key={title}>
          <span className="box-title">{title}</span>
          <span className="box-value">{value}</span>
        </div>
      ))}
    </div>
  )
}

export default BottomResultBox
