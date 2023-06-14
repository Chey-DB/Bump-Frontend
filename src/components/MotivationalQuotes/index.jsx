import React, { useEffect, useState} from 'react'

const MotivationalQuotes = () => {
    const [quotes, setQuotes] = useState('')

    useEffect(() => {
        fetch('https://type.fit/api/quotes')
        .then(response => response.json())
        .then(data => {
            const randomQuote = Math.floor(Math.random() * data.length)
            setQuotes(data[randomQuote].text)
        })      
    })

  return (
    <div>MotivationalQuotes</div>
  )
}

export default MotivationalQuotes