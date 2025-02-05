/// <reference types="cypress" />


describe('CreateKnight', () => {

  beforeEach(() => {
    cy.visit('http://localhost:5173');
    // cy.clearLocalStorage();
  })
  it('should create a new knight without saving to the database', () => {
    cy.intercept('POST', '/knights', {
      statusCode: 201, 
      body: {
        "_id": "67a18cec157478cc4116f6d5",
        "name": "Clark Kent",
        "nickname": "Supes",
        "birthday": "1938-04-18T00:00:00.000Z",
        "weapons": [
            {
                "id": "1",
                "name": "Sword",
                "mod": 3,
                "attr": "strength",
                "equipped": true
            },
            {
                "id": "2",
                "name": "Mace",
                "mod": 2,
                "attr": "strength",
                "equipped": false
            }
        ],
        "attributes": {
            "strength": 13,
            "dexterity": 11,
            "constitution": 5,
            "intelligence": 11,
            "wisdom": 9,
            "charisma": 12
        },
        "keyAttribute": "constitution",
        "__v": 0
      }
    }).as('createKnight');

    // MainDataInput.tsx
    const name: string = 'Clark Kent';
    const nickname: string = 'Supes';
    const birthday: string = '1938-04-18';


    cy.get('[data-cy="knightNameInput"]')
      .type(name);
    
    cy.get('[data-cy="knightNicknameInput"]')
      .type(nickname);
    
    cy.get('[data-cy="knightBirthdayInput"]')
      .type(birthday);

    // WeaponsList.tsx
    cy.wait(1000);
    cy.get('[data-cy="swordCheckbox"]').check();
    cy.get('[data-cy="maceCheckbox"]').check();

    cy.get('[data-cy="addWeaponsButton"]').click();

    cy.get('[data-cy="generateAttributesButton"').click();

    cy.get('[data-cy="keyAttributeSelect"]').select('constitution');

    cy.get('[data-cy="createKnightButton"]').click(); 

    cy.wait('@createKnight').its('response.statusCode').should('eq', 201);
  });
});