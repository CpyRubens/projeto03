const Sequelize = require('sequelize');
const connection = require('../database/db')

const Character = connection.define('character', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    heroi: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    altura: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    peso: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    especie: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    sobre: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    imagem: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    imagem2: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    imagembg: {
        type: Sequelize.STRING,
        allowNull: false,
    },
}, {
    freezeTableName: true,
    timestamps: false,
    createdAt: false,
    updatedAt: false,

}
);

const initTable = async ()=>{
    await Character.sync();
};
initTable();

module.exports = Character;