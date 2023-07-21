import { DataTypes } from "sequelize";
import db from "../database/db.js";

const User = db.define('register', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    nama: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: { args: true, msg: "You must enter a name" }
        },
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: { args: true, msg: "You must enter a email" }
        },
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: { args: true, msg: "You must enter a password" }
        },
    }
}, {
    timestamps: false,
    tableName: 'register'
}
);

export default User;