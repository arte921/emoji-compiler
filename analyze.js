const fs = require("fs");
const path = process.cwd();

let emojis = JSON.parse(fs
    .readFileSync(path + "/emoji.json")
    .toString()
);

emojis = emojis
    .map((object) => object.emoji)
    .sort();

fs.writeFileSync(
    path + "/sortedemojis.json",
    JSON.stringify(emojis)
);