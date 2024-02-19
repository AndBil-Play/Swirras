let { bossSpawn:   boss , atmg:  A   } = require('../tiles/siege.js'),
    { wall: wall, normal: ____ } = require('../tiles/misc.js'),
	{ contested: cont } = require('../tiles/dominators.js'),

room = [
    [____,____,____,____,____,____,____,____,____,____,____,____,____,____,____],
    [____,wall,____,____,____,____,____,____,wall,____,wall,____,wall,____,____],
    [____,wall,wall,____,wall,wall,wall,____,wall,____,____,____,wall,wall,____],
    [____,____,____,____,____,____,wall,____,wall,wall,wall,____,wall,____,____],
    [____,wall,____,wall,____,____,____,____,wall,____,____,____,____,____,____],
    [____,____,____,wall,____,wall,____,____,____,____,____,____,wall,____,____],
    [____,wall,wall,____,____,____,____,wall,wall,____,wall,____,wall,wall,____],
    [____,____,____,____,wall,wall,____,____,____,____,____,____,____,____,____],
    [____,wall,wall,____,wall,wall,____,wall,____,wall,wall,wall,wall,wall,____],
    [____,wall,____,____,____,____,____,wall,____,____,wall,____,____,wall,____],
    [____,wall,____,____,wall,____,____,____,wall,____,wall,____,____,____,____],
    [____,____,____,wall,____,____,wall,wall,wall,____,____,wall,wall,____,____],
    [____,wall,____,____,wall,____,____,____,wall,wall,____,wall,____,____,____],
    [____,wall,wall,wall,____,____,wall,____,wall,____,____,wall,wall,wall,____],
    [____,____,____,____,____,____,____,____,____,____,____,____,____,____,____]
];

module.exports = room;