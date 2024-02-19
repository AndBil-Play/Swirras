let { bossSpawn:   boss , atmg:  A   } = require('../tiles/siege.js'),
    { wall: wall, normal: ____ } = require('../tiles/misc.js'),
	{ contested: cont } = require('../tiles/dominators.js'),

room = [
    [boss,boss,boss,boss,boss,boss,boss,boss,boss,boss,boss,boss,boss,boss,boss],
    [boss,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,boss],
    [boss,wall,cont,cont,cont,cont,cont,cont,cont,cont,cont,cont,cont,wall,boss],
    [boss,wall,cont,cont,cont,cont,cont,wall,cont,cont,cont,cont,cont,wall,boss],
    [boss,wall,cont,cont,cont,cont,cont,cont,cont,cont,cont,cont,cont,wall,boss],
    [boss,wall,cont,cont,cont,cont,cont,cont,cont,cont,cont,cont,cont,wall,boss],
    [boss,wall,cont,cont,cont,cont,wall,____,wall,cont,cont,cont,cont,wall,boss],
    [boss,wall,cont,wall,cont,cont,____,cont,____,cont,cont,wall,cont,wall,boss],
    [boss,wall,cont,cont,cont,cont,wall,____,wall,cont,cont,cont,cont,wall,boss],
    [boss,wall,cont,cont,cont,cont,cont,cont,cont,cont,cont,cont,cont,wall,boss],
    [boss,wall,cont,cont,cont,cont,cont,cont,cont,cont,cont,cont,cont,wall,boss],
    [boss,wall,cont,cont,cont,cont,cont,wall,cont,cont,cont,cont,cont,wall,boss],
    [boss,wall,cont,cont,cont,cont,cont,cont,cont,cont,cont,cont,cont,wall,boss],
    [boss,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,boss],
    [boss,boss,boss,boss,boss,boss,boss,boss,boss,boss,boss,boss,boss,boss,boss]
];

module.exports = room;