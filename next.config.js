/** @type {import('next').NextConfig} */

const path = require('path');

module.exports = {
  compiler: {
    styledComponents: true,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};
