const trickJson = `[{"stance":"regular","name":"treflip","obstacle":"flat ground","tutorial":"https://www.youtube.com/watch?v=XGw3YkQmNig","id":1},{"stance":"switch","name":"heelflip","obstacle":"stairs","tutorial":"https://www.youtube.com/watch?v=9N9swrZU1HA","id":2},{"stance":"regular","name":"frontside 50-50, backside 180 out","obstacle":"ledge","tutorial":"https://www.youtube.com/watch?v=9N9swrZU1HA","id":3}]`
const trickData = JSON.parse(trickJson)

beforeEach = () => {
  cy.intercept("http://localhost:3001/api/v1/tricks", {statusCode: 201, body: trickJson})
}

describe('user first visits', () => {
  it('shows all 3 tricks', () => {
    cy.visit('http://localhost:3000')
    cy.get(".trick").should("be.length", 3)
  })
  
  it('shows all trick info', () => {
    cy.visit('http://localhost:3000')
    cy.get(".trick").first().get("p").first().contains("regular treflip")
    cy.get(".trick").first().get("p").eq(1).contains("Obstacle: flat ground")
    cy.get(".trick").first().get("a").contains("https://www.youtube.com/watch?v=XGw3YkQmNig")

  })
})