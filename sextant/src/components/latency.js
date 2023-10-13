import React, { useEffect } from 'react'

const Latency = () => {
  const [time, setTime] = React.useState("")
  const [myTime, setMyTime] = React.useState("")

  useEffect(() => {
    const client = new WebSocket('ws://localhost:55455');

    client.onerror = () => {
      console.log('Connection Error');
    }

    client.onopen = () => {
      console.log('WebSocket Client Connected');
    }

    client.onmessage = (message) => {
      setTime(new Date(parseInt(message.data)).getTime())
      setMyTime(new Date().getTime())
    }



  }, [])


  return (
    <div>{myTime - time}</div>
  )
}

export default Latency