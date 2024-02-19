let { contested } = require('../tiles/dominators.js'),

room = Array(15).fill(() => Array(15).fill()).map(x => x());

module.exports = room;