import { useState } from "react";
import data from "./data";


const App = () => {
  const [count, setCount] = useState(1)
  const [text, setText] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    setText(data.slice(0, count))
  }

  return (<section className="section-center">
    <h4>Lorem Ipsum Generate Paragraphs</h4>
    <form className="lorem-form" onSubmit={handleSubmit}>
      <label htmlFor="number-input">
      Paragraphs: 
        <input type="number"
          id="number-input"
          name="numberInput"
          min='1' max='8'
          step='1'
          value={count} 
          onChange={(e) => setCount(e.target.value)}
          />
      </label>
      <button type="submit" className="btn">
        generate
      </button>
    </form>
    <article className="lorem-text">
      {text.map((item, index) => {
        return <p key={index}>
            {item}
        </p>
      })}
    </article>
  </section>)
};
export default App;
