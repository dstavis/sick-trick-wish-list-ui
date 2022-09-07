import "./Trick.css"

const Trick = ({id, name, stance, tutorial, obstacle}) => {
  return (
    <div className="trick">
      <ul>
        <p>{"id: " + id}</p>
        <p>{"name: " + name}</p>
        <p>{"stance: " + stance}</p>
        <p>{"tutorial: " + tutorial}</p>
        <p>{"obstacle: " + obstacle}</p>
      </ul>
    </div>
  )
}

export default Trick;