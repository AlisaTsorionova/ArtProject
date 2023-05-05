/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Categories',
      [
        {
          title: 'Живопись',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Цифровая живопись',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Вязаные изделия',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Дизайн',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Тафтинг',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Роспись тканей',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Пошив одежды',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Резьба по дереву',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Вышивка',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Изготовление кукол',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Фотография',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Categories', null, {});
  },
};
