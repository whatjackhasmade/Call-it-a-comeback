const downloadPath =
  "https://storage.googleapis.com/whatjackhasmade-london/app/uploads/2019/12/Jack-Pritchard-Award-Winning-Developer.pdf"

describe(`CV Download`, () => {
  it(`Downloads the CV file from the homepage`, () => {
    cy.visit("http://localhost:8000")
    cy.get(`a[href*="${downloadPath}"]`).should("exist")
    cy.request(downloadPath).then(response => {
      expect(response.status).to.equal(200)
      expect(response.body).not.to.null
    })
  })
})
