const faker = require("faker");
const db = require("../config/connection");
const { Book } = require("../models");

db.once("open", async () => {
    await Book.deletMany({});

    const bookData = [];

    for (let i = 0; i < 20; i++) {
        const author = faker.name.findName();
        const description = faker.lorem.paragraphs();
        const bookId = faker.database.type();
        const image = faker.image.image();
        const link = faker.internet.url();
        const title = faker.company.catchPhrase();

        bookData.push({ author, description, bookId, image, link, title });
    }
    await Book.collection.insertMany(bookData);

    console.log("all done!");
    process.exit(0);
});