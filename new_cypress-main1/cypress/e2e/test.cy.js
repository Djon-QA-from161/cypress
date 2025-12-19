import * as data from "../helpers/default_data.json"

describe('Логин и пароль', function () {


     beforeEach('Начало теста', function () {
         cy.visit('/');  // посетить сайт
         cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверка цвета забыли пароль
     });
 

      afterEach('Конец теста', function () {
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик
        });



    it('Верный пароль и логин 2', function () {
         cy.get('#mail').type(data.login);  // ввести логин 
         cy.get('#pass').type(data.password);  // ввести пароль
cy.get('#loginButton').click();  // кликнуть на кнопку

cy.get('#messageHeader').contains('Авторизация прошла успешно');  // проверяю что вошел
cy.get('#messageHeader').should('be.visible');  // есть надпись
    })
 

         it('Восстановление пароля', function () {  
      cy.get('#forgotEmailButton').click(); // нажал на кнопку забыли пароль
      cy.get('#mailForgot').type(data.login); // ввести логин
      cy.get('#restoreEmailButton').click(); // нажал на кнопку

      cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // проверяю что вошел
      cy.get('#messageHeader').should('be.visible');  // есть надпись
    })


  it('Верный логин и НЕправильный пароль ', function () {
         cy.get('#mail').type(data.login);  // ввести логин 
         cy.get('#pass').type('qa_one_loveewewe');  // вести неправильный пароль
cy.get('#loginButton').click();  // кликнуть на кнопку

cy.get('#messageHeader').contains('Такого логина или пароля нет');  // проверяю что вошел
cy.get('#messageHeader').should('be.visible');  // есть надпись
 })


    it('НЕправильный логин и правильный пароль', function () {    
         cy.get('#mail').type('1dfffggg@dolnikov.ru');  // ввести неправильный логин 
         cy.get('#pass').type(data.password);  // ввести пароль
cy.get('#loginButton').click();  // кликнуть на кнопку

cy.get('#messageHeader').contains('Такого логина или пароля нет');  // проверяю что вошел
cy.get('#messageHeader').should('be.visible');  // есть надпись
 })


       it('Ввести логин без @', function () {    
         cy.get('#mail').type('germandolnikov.ru');  // ввести логин без @ 
         cy.get('#pass').type(data.password);  // ввести пароль
cy.get('#loginButton').click();  // кликнуть на кнопку

cy.get('#messageHeader').contains('Нужно исправить проблему валидации');  // проверяю что вошел
cy.get('#messageHeader').should('be.visible');  // есть надпись
})


    it('Проверка на приведение к строчным буквам в логине', function () {
         cy.get('#mail').type('GerMan@Dolnikov.ru');  // ввести логин 
         cy.get('#pass').type(data.password);  // ввести пароль
cy.get('#loginButton').click();  // кликнуть на кнопку

cy.get('#messageHeader').contains('Авторизация прошла успешно');  // проверяю что вошел
cy.get('#messageHeader').should('be.visible');  // есть надпись
})
     }) 