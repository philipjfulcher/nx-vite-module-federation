
import "./Button.css"

import { useState } from "react"

export const Button = () => {
  const [state, setState] = useState(0)
  return (
    <div>
      <h4>Button Component From Remote</h4>
      <button id='click-btn' className='shared-btn' onClick={() => setState((s) => s + 1)}>Click me: {state}</button>
    </div>
  )
}

export default Button
