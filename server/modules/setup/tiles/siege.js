let spawnPermanentAntiTankMachineGun = (loc) => {
    let o = new Entity(loc);
    o.define('antiTankMachineGun');
    o.controllers = [new ioTypes.nearestDifferentMaster(o)]
    o.team = TEAM_ROOM;
    o.color = getTeamColor(TEAM_RED);
    o.on('dead', () => spawnPermanentAntiTankMachineGun(loc));
},

atmg = new Tile({ color: "white", init: tile => spawnPermanentAntiTankMachineGun(tile.loc) }),

// we are not yet advanced enough to transition between two color codes
outside = new Tile({ color: "#C5C5C5" }),

bossSpawn = new Tile({
    color: getTeamColor(TEAM_RED),
    /*tick: tile => {
        for (let i = 0; i < tile.entities.length; i++) {
            let entity = tile.entities[i];
            if (!entity.isBoss && !entity.isArenaCloser) entity.kill();
        }
    }*/
    tick: tile => {
        for (let i = 0; i < tile.entities.length; i++) {
            let entity = tile.entities[i];
            if (entity.pushability) {
				entity.kill();
            }
        }
    }
});

module.exports = { bossSpawn, outside, atmg };
