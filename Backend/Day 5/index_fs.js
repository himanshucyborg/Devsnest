const fs = require('fs');

fs.mkdirSync("newFolder")


fs.unlinkSync("anything.js");
fs.rmdirSync("newFolder");


// in REPL we can log errors:


fs.writeFileSync("nayaFile.js", "message", function (err) {
    if (err) {
        console.log(err);
    }
});