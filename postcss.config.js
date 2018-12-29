const autoprefixer = require('autoprefixer');
const path = require('path');

const sourcePath = path.join(__dirname, 'src');

module.exports = {
    plugins: [
        autoprefixer({
            browsers: ['last 3 version', 'ie >= 10'],
            context: sourcePath
        })
    ]
};
