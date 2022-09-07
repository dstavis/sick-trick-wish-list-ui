const getData = () => {
  const data = fetch("http://localhost:3001/api/v1/tricks")
    .then(response => response.json())
  return data
}

export default getData