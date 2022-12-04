import {
    Given,
    When,
    Then
} from "@badeball/cypress-cucumber-preprocessor";
require('@cypress/xpath');

Given('que estou na tela inicial da amazon', () => {
    cy.visit('/')
    cy.get('#nav-logo-sprites').should('be.visible')
})

Given('que realizo a busca pelo produto na barra de pesquisa', () => {
    cy.get('#twotabsearchtextbox').type('Xbox Series S')
    cy.get('#nav-search-submit-button').click()
})

When('selecionar o produto desejado na listagem', () => {
    cy.xpath('//div[@class="a-section a-spacing-base"]//span[text()="Xbox Series S – Pacote Fortnite e Rocket League"]')
        .click()
})

Then('inserir o produto ao carrinho e validar a mensagem', () => {
    cy.get('#productTitle').should('be.visible')
    cy.get('#add-to-cart-button').click()
    cy.xpath('//*[@id="sw-atc-details-single-container"]/div[2]')
        .should('be.visible')
})

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})