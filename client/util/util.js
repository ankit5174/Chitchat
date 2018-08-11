import bcrypt from "bcrypt-nodejs";

export const utils ={
    encryptUserId: (email) => {
        return bcrypt.hashSync(email, bcrypt.genSaltSync(8), null);
    },
    getMessagePacket: (user, chattingTo, message) => {
        return {
            from: user.email,
            to: chattingTo,
            message: message
        }
    }
};