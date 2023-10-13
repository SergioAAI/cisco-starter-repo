import { useEffect, useState } from 'react'

const Address = ({ ipType }) => {
  const [requestedIp, setRequestedIp] = useState("")
  useEffect(() => {
    const ipRequestType = {
      ipv4: 'https://api.ipify.org?format=json',
      ipv6: 'https://api64.ipify.org?format=json'
    }

    fetch(ipRequestType[ipType]).then((response) =>
      (response.json())
    ).then((data) => {
      setRequestedIp(data.ip)
    })
  }, [ipType])

  return (
    <>
      <p>{requestedIp}</p>
    </>
  )
}

export default Address