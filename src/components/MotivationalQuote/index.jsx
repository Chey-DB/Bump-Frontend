import React, { useEffect, useState} from 'react'

const MotivationalQuote = () => {
    const [quote, setQuote] = useState('')

    useEffect(() => {
        fetch('https://type.fit/api/quotes')
        .then(response => response.json())
        .then(data => {
            const randomQuote = Math.floor(Math.random() * data.length)
            setQuote(data[randomQuote].text)
        })      
    }, [])

  return (
    <div className='motivational-quote'>
        <h3>Motivational Quote of the day:</h3>
        <p>{quote}</p>
    </div>
  )
}

export default MotivationalQuote