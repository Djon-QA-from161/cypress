describe('Проверка покупки нового аватара', function () {                 // название набора тестов
    it('e2e тест на покупку нового аватара для тренера', function () {   // название теста
         cy.visit('https://pokemonbattle.ru/');                          // переходим на сайт 

         cy.get('#k_email').type('USER_LOGIN');  // вводим логин
         cy.get('#k_password').type('USER_PASSWORD'); // вводим пароль
         cy.get('.MuiButton-root').click(); // нажимаем войти
         cy.wait(2000);

         cy.get('.header_card_trainer').click(); // нажимаем на тренера
         cy.wait(2000);
         cy.get('[data-qa="shop"]').click(); // нажимаем на покупку
         cy.get('.available > button').first().click();   // кликаем Купить у первого доступного аватара

         cy.get('.payment_form_card_form > :nth-child(2) > .style_1_base_input').type('4620869113632996'); // вводим номер карты 
         cy.get(':nth-child(1) > .style_1_base_input').type('1226'); // вводим срок действия карты
         cy.get('.payment_form_card_form_inputs > :nth-child(2) > .style_1_base_input').type('125'); // вводим СVV
         cy.get('.payment_form_card_form_input_last > .style_1_base_input').type('DJON'); // вводим имя 
         cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click(); // нажимаем оплатить
         cy.get('.style_1_base_input').type('56456'); // вводим код из смс
         cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click(); // нажимаем оплатить
         cy.get('.payment_status_top_title').contains('Покупка прошла успешно'); // проверяем покупку
         cy.get('.payment_status_back').click(); // обратно
     });
 });