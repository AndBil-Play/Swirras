let bases = require('../tiles/tdm.js'),
	teams = require('../gamemodeconfigs/tdm.js').TEAMS,
	room = Array(15).fill(() => Array(15).fill()).map(x => x()),
locations = [
	[
		[[ 2,  2]],
	],[
		[[12, 12]],
	],[
		[[ 2, 12]],
	],[
		[[12,  2]],
	],
];

for (let i = 1; i <= teams; i++) {
	let [ spawns, protectors ] = locations[i - 1];
	for (let [y, x] of spawns) room[y][x] = bases[`base${i}`];
}

module.exports = room;