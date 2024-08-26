const {Model, Datatypes} = require('sequelize');


class Endereco extends Model{}

Endereco.init({
    Cep: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Id: {
        type: DatatTypes.INTEGER,
        primaryKey:true,
        autoIncrement: true,
    },
    Logradouro: {
        type: Datatypes.STRING,
        allowNull: false,
    },
    Numero: {
        type: Datatypes.INTEGER,
        allowNull: false
    },
    Complemento: {
        type: Datatypes.STRING,
    },
    Bairro: {
        type: Datatypes.STRING,
        allowNull: false
    },
    Cidade: {
        type: Datatypes.STRING,
        allowNull: false
    },
    Estado: {
        type: Datatypes.STRING,
        allowNull: false
    },
    MunicipioIBGE: {
        type: Datatypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'Endereco',
    tableName: 'enderecos',
    timestamps: true,
})
module.exports = Endereco;