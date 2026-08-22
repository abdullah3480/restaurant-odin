import path from 'node:path';

export default {
    mode : "developement",
    entry : "src/index.js",
    output : {
        filename : "main.js",
        path : path.resolve(import.meta.dirname, "dist"),
        clean : true,
    },
};