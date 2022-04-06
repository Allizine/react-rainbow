import React, { useState } from 'react'

function ColorForm(props) {
  let [input, setInput] = useState('')

  const handleSubmit = (e) => {
    // We still want to eliminate the default behavior of our form submittal
    e.preventDefault()
    // addColor, the function we just built, should be available within props.
    props.addColor(input)
    // Clear the input & State
    document.getElementById("colorInput").value = ''
    setInput('')
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" id="colorInput" onChange={(e) => setInput(e.target.value)} />
        <button type="submit">Submit!</button>
      </form>
    </div>
  )
}

export default ColorForm