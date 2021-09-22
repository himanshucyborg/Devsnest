const fs = require('fs');

fs.mkdir("async", (err) => {
    console.log("created folder");
});

fs.writeFile("./async/async_file.js", "lorem ipsum dispsum threesum foursome fivesome .....", (err) => {
    console.log("file created");
})

fs.appendFile("./async/async_file.js", "hello,appended this.", (err) => {
    console.log("stuff appended");
})

fs.readFile("./async/async_file.js", "utf-8", (err, data) => {
    console.log(data);
})

fs.rename("./async/async_file.js", "./async/async_renamed.js", (err) => {
    console.log("file renamed");
})


// can used these also --


// fs.unlink("./async/async_renamed.js", (err) => {
//     console.log("file deleted");
// })

// fs.rmdir("async", (err) => {
//     console.log("folder deleted");
// })
