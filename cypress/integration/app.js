/* global cy */

// Cypress test e2e -> test if footer string is Pokémon and Pokémon character names are trademarks of Nintendo and if there's Pikachu

// Los test e2e son bastante mas lentos, por eso es mejor hacer los de integración
// lo bueno es que te hace hasta un video (lo configuras en las setting de cypress en cypress.json) -> https://docs.cypress.io/guides/references/configuration#Screenshots
describe('Pokedex', function() {
  it('frontpage can be opened', function () {
    cy.visit('http://localhost:5000')
    cy.contains('pikachu')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo')
  })
})
