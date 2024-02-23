import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [quote, setQuote] = useState("")
  const [author, setAuthor] = useState("")

  const handleclick = () => {
    fetch("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json").then(res => res.json())
      .then(data => {
        const dataQuotes = data.quotes;
        const randomNum = Math.floor(Math.random() * dataQuotes.length);
        const randomQuote = dataQuotes[randomNum];

        setQuote(randomQuote.quote);
        setAuthor(randomQuote.author);
      })
  }
  useEffect(() => {
    handleclick();
  }, [])
  return (
    <>
      <div>
        <h1 className=' text-white text-3xl mb-3'>Quote Generator</h1>
      </div>
      <div className='bg-blue-800 rounded-xl p-4 mb-3'>
        <h1 className='text-3xl mb-1'>{quote}</h1>
        <p className='text-3xl '>~{author}</p>
      </div>
      <button onClick={handleclick}>Next Quote</button>
    </>
  )
}

export default App
