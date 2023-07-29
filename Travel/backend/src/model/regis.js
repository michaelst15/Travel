import mongoose from "mongoose";

const User = new mongoose.Schema ({
    id: {
        type: Number,
    },
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

export const UserDb = new mongoose.model("register", User)

// export default UserDb;