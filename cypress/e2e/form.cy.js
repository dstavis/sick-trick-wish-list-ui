const trickJson = `[{"stance":"regular","name":"treflip","obstacle":"flat ground","tutorial":"https://www.youtube.com/watch?v=XGw3YkQmNig","id":1},{"stance":"switch","name":"heelflip","obstacle":"stairs","tutorial":"https://www.youtube.com/watch?v=9N9swrZU1HA","id":2},{"stance":"regular","name":"frontside 50-50, backside 180 out","obstacle":"ledge","tutorial":"https://www.youtube.com/watch?v=9N9swrZU1HA","id":3}]`
const trickData = JSON.parse(trickJson)

beforeEach = () => {
  cy.intercept("http://localhost:3001/api/v1/tricks", {statusCode: 201, body: trickJson})
}

describe('controlled form', () => {
  it('when data is put into the form, the value is reflected in that form input', () => {
    cy.visit('http://localhost:3000')
    // TODO: unfinished
    
  })
  
  it('check the user flow of adding a new trick to the DOM.', () => {
    cy.visit('http://localhost:3000')
    // TODO: unfinished
    
  })
})