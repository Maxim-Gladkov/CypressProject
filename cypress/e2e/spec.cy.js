describe('First test case', () => {
  it('Search for "Cypress documentation" in Google and go to the docs website', () => {
    cy.visit("https://www.google.com")
    expect(true).to.equal(true)

    cy.get("#vc3jof")
    .click()

    cy.get(".Ge0Aub:nth-child(2)")
    .should('contain.text', 'English (United Kingdom)')
    .click()
    .then(() => {
      cy.get('#W0wltc').contains('Reject all').click()
      cy.get('textarea.gLFyf').type('Cypress documentation{enter}')
    })

    cy.get('[jsname=UWckNb]:nth-child(1)')
    .invoke('attr', 'href')
    .then( (href) => {
      cy.visit(href)
      expect(true).to.equal(true)
      cy.origin(href, () => {
        cy.get('h1').should('have.text', 'Why Cypress?')
      })
    })

  })

})