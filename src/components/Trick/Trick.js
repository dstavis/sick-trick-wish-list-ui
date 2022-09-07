import "./Trick.css"

const Trick = ({id, name, stance, tutorial, obstacle}) => {

  let displayName = `${stance} ${name}`

  return (
    <div className="trick">
      <p>{displayName}</p>
      <p>{"Obstacle: " + obstacle}</p>
      <p>{"Link to Tutorial: "} </p>
      <p><a href={tutorial}>{tutorial}</a> </p>
    </div>
  )
}

export default Trick;