import {Schema, model} from "mongoose";

const User = Schema ({
    nama: {
        type: String,
        allowNull: false,
    },
    email: {
        type: String,
        allowNull: false,
    },
    password: {
        type: String,
        allowNull: false,
    }
}, {
    timestamps: false,
    collection: "register",
}
);

export const UserDb = model("register", User)

export default UserDb;