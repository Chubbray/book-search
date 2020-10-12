const { AuthenticationError } = require("apollo-server-express");
const { Book, User } = require("../models");
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async () => {
            return User.find();
        }
    },
    Mutation: {
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError("Can't find this user");
            }

            if (password !== user.password) {
                throw new AuthenticationError("Wrong password!");
            }
            const token = signToken(user);
            return { token, user };
        },

        addUser: async (parent, args) => {
            const user = await User.create(args);
            if (!user) {
                throw new AuthenticationError("Something is wrong!")
            }

            const token = signToken(user);
            return { token, user };
        },

        saveBook: async (parent, [description, title, bookId, image, link]) => {
            const user = await User.findOneAndUpdate([description, title, bookId, image, link]);

            const token = signToken(user);
            return { token, user };
        },

        removeBook: async (parent, [description, title, bookId, image, link]) => {
            const user = await User.findOneAndUpdate([description, title, bookId, image, link]);
            if (!updatedUser) {
                throw new AuthenticationError("Couldn't find user with this id!")
            }

            const token = signToken(user);
            return { token, user };
        },
    }
};

module.exports = resolvers;
