'use-strict';
module.exports = (sequelize, DataTypes) => {
  var UserSchema = sequelize.define(
    'User',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        field: 'id_usuario'
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        field: 'username'
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        field: 'password'
      },
      status: {
        type: DataTypes.ENUM, //configurar a ENUM
        allowNull: false,
        values: ['ACTIVO', 'INACTIVO', 'SUSPENDIDO'],
        defaultValue: 'ACTIVO',
        field: 'estado'
      },
      creationDate: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
        field: 'fecha_de_creacion'
      },
      expirationDate: {
        type: DataTypes.DATE,
        field: 'fecha_de_vencimiento'
      },
      userType: {
        type: DataTypes.ENUM, //configurar a ENUM,
        allowNull: false,
        values: ['GERENCIA', 'AUXILIAR_DE_GERENCIA'],
        defaultValue: 'GERENCIA',
        field: 'tipo_de_usuario'
      }
    },
    {
      tableName: 'usuario',
      createdAt: false,
      updatedAt: false
    }
  );

  UserSchema.associate = models => {
    models.Usuario.belongsTo(models.Persona, {
      foreignKey: 'numero_identificacion_fk',
      targetKey: 'numeroIdentificacion'
    });
  };

  return UserSchema;
};
