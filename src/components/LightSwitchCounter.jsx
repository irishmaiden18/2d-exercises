import { useState } from "react"

const LightSwitchCounter = () => {

    const [isOn, setIsOn] = useState(false)

    const [count, setCount] = useState(0)

    const handleSwitch = () => {
        // console.log(isOn)
        setIsOn(!isOn)
        setCount(count + 1)
    }

  return (
    <>
        <h2>Light Switch Counter: {count}</h2>
        {isOn ? <h4>The Light is ON!</h4> : <h4>The Light is OFF!</h4>}
        <button onClick={handleSwitch}>{isOn ? "OFF" : "ON"}</button>
    </>
  )
}

export default LightSwitchCounter