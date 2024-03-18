'use strict';
const category = require('../data/category.json');


/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {

        // const data = [];
        // const createdAt = new Date();
        // const updatedAt = new Date();

       
        // await queryInterface.bulkInsert('category', data, {});

    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        await queryInterface.bulkDelete('category', null, {});
    }
};
