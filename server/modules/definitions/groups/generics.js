const { combineStats, makeAuto, addAura } = require('../facilitators.js');
const { base, dfltskl, smshskl, gunCalcNames } = require('../constants.js');
const g = require('../gunvals.js');

exports.droneAura = addAura(0.4, 2.00, 0.2, 0);

exports.genericEntity = {
    NAME: "",
    LABEL: "Unknown Entity",
    TYPE: "unknown",
    DAMAGE_CLASS: 0,
    DANGER: 0,
    VALUE: 0,
    SHAPE: 0,
    COLOR: {
        BASE: 16, // ID
        HUE_SHIFT: 0, // Additive, degrees
        SATURATION_SHIFT: 1, // Multiplicative
        BRIGHTNESS_SHIFT: 0, // Additive, ranges from -100 to 100
        ALLOW_BRIGHTNESS_INVERT: true, // Toggles offset invert if exceeding normal color bounds
    },
    INDEPENDENT: false,
    CONTROLLERS: ["doNothing"],
    HAS_NO_MASTER: false,
    MOTION_TYPE: "glide",
    FACING_TYPE: "toTarget",
    DRAW_HEALTH: false,
    DRAW_SELF: true,
    DAMAGE_EFFECTS: true,
    RATEFFECTS: true,
    MOTION_EFFECTS: true,
    INTANGIBLE: false,
    ACCEPTS_SCORE: true,
    GIVE_KILL_MESSAGE: false,
    CAN_GO_OUTSIDE_ROOM: false,
    HITS_OWN_TYPE: "normal",
    DIE_AT_LOW_SPEED: false,
    DIE_AT_RANGE: false,
    CLEAR_ON_MASTER_UPGRADE: false,
    PERSISTS_AFTER_DEATH: false,
    VARIES_IN_SIZE: false,
    HEALTH_WITH_LEVEL: true,
    CAN_BE_ON_LEADERBOARD: true,
    HAS_NO_RECOIL: false,
    BUFF_VS_FOOD: false,
    OBSTACLE: false,
    CRAVES_ATTENTION: false,
    NECRO: false,
    UPGRADES_TIER_0: [],
    UPGRADES_TIER_1: [],
    UPGRADES_TIER_2: [],
    UPGRADES_TIER_3: [],
    UPGRADES_TIER_4: [],
    UPGRADES_TIER_5: [],
    UPGRADES_TIER_6: [],
    UPGRADES_TIER_7: [],
    UPGRADES_TIER_8: [],
    UPGRADES_TIER_9: [],
    SKILL: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    LEVEL: 0,
    SKILL_CAP: Array(10).fill(dfltskl),
    GUNS: [],
    MAX_CHILDREN: 0,
    BORDERLESS: false,
    DRAW_FILL: true,
    REROOT_UPGRADE_TREE: null,
    DISPLAY_NAME: true,
    ON: [],
    BODY: {
        ACCELERATION: 1,
        SPEED: 0,
        HEALTH: 1,
        RESIST: 1,
        SHIELD: 0,
        REGEN: 0,
        DAMAGE: 1,
        PENETRATION: 1,
        RANGE: 0,
        FOV: 1,
        SHOCK_ABSORB: 1,
        RECOIL_MULTIPLIER: 1,
        DENSITY: 1,
        STEALTH: 1,
        PUSHABILITY: 1,
        HETERO: 2,
    },
    FOOD: {
        LEVEL: -1,
    },
};
exports.genericTank = {
    LABEL: "Unknown Class",
    TYPE: "tank",
    DAMAGE_CLASS: 2,
    DANGER: 5,
    MOTION_TYPE: "motor",
    FACING_TYPE: "toTarget",
    SIZE: 11,
    MAX_CHILDREN: 0,
    DAMAGE_EFFECTS: false,
    IGNORED_BY_AI: false,
    REROOT_UPGRADE_TREE: "basic",
    BODY: {
        ACCELERATION: base.ACCEL,
        SPEED: base.SPEED,
        HEALTH: base.HEALTH,
        DAMAGE: base.DAMAGE,
        PENETRATION: base.PENETRATION,
        SHIELD: base.SHIELD,
        REGEN: base.REGEN,
        FOV: base.FOV,
        DENSITY: base.DENSITY,
        PUSHABILITY: 1,
        HETERO: 3,
    },
    GUNS: [],
    TURRETS: [],
    GIVE_KILL_MESSAGE: true,
    DRAW_HEALTH: true,
    HITS_OWN_TYPE: "hardOnlyTanks",
};
exports.genericSpeedTank = {
    PARENT: ["genericTank"],
    LABEL: "",
    SHAPE: 3,
};
exports.food = {
    TYPE: "food",
    DAMAGE_CLASS: 1,
    CONTROLLERS: ["moveInCircles"],
    HITS_OWN_TYPE: "repel",
    MOTION_TYPE: "drift",
    FACING_TYPE: "turnWithSpeed",
    VARIES_IN_SIZE: true,
    BODY: {
        STEALTH: 30,
        PUSHABILITY: 1,
    },
    DAMAGE_EFFECTS: false,
    RATEFFECTS: false,
    HEALTH_WITH_LEVEL: false,
};

exports.bullet = {
    LABEL: "Bullet",
    TYPE: "bullet",
    ACCEPTS_SCORE: false,
    BODY: {
        PENETRATION: 1,
        SPEED: 4.25,
        RANGE: 90,
        DENSITY: 1.25,
        HEALTH: 0.165,
        DAMAGE: 6,
        PUSHABILITY: 0.3,
    },
    FACING_TYPE: "smoothWithMotion",
    CAN_GO_OUTSIDE_ROOM: true,
    HITS_OWN_TYPE: "never",
    DIE_AT_RANGE: true,
};
exports.shard = {
    LABEL: "Shard",
    TYPE: "bullet",
    ACCEPTS_SCORE: false,
	SHAPE: [[-1,0.400],[-1,-0.400],[1,0]],
    BODY: {
        PENETRATION: 2,
        SPEED: 4.25,
        RANGE: 20,
        DENSITY: 1.25,
        HEALTH: 2.5,
        DAMAGE: 15,
        PUSHABILITY: 0.3,
    },
    FACING_TYPE: "smoothWithMotion",
    CAN_GO_OUTSIDE_ROOM: true,
    HITS_OWN_TYPE: "never",
    DIE_AT_RANGE: true,
};
exports.fragmentationbullet = {
    LABEL: "fragmentationBullet",
    TYPE: "bullet",
	SHAPE: [[-1,-1],[0.5,-1],[1,-0.5],[1.79,0],[1,0.5],[0.5,1],[-1,1]],
    ACCEPTS_SCORE: false,
    BODY: {
        PENETRATION: 1,
        SPEED: 4.25,
        RANGE: 60,
        DENSITY: 1.25,
        HEALTH: 0.165,
        DAMAGE: 6,
        PUSHABILITY: 0.3,
    },
    FACING_TYPE: "smoothWithMotion",
    CAN_GO_OUTSIDE_ROOM: true,
    HITS_OWN_TYPE: "never",
    DIE_AT_RANGE: true,
	ON: [
        {
            event: 'death',
            handler: ({body}) => {
                for (let i = 0; i < 10; i++) {
                    let frag = new Entity(body)
					frag.skill = body.skill;
					frag.master = body.source;
                    frag.team = body.team
					frag.color = body.color
					frag.store = body.store
					frag.masterStore = body.masterStore
					frag.globalMasterStore = body.globalMasterStore
                    frag.define("shard")
                    frag.SIZE = body.SIZE / 3;
                    frag.velocity = new Vector((Math.random() - 0.5) * 50, (Math.random() - 0.5) * 50);
                    frag.life()
                }
            }
        },
		{
            event: 'death',
            handler: ({body}) => {
                for (let i = 0; i < 10; i++) {
                    let frag = new Entity(body)
					frag.define('assemblerEffect');
					frag.master = body.source;
                    frag.team = body.team;
                    frag.color = body.color;
                    frag.SIZE = body.SIZE / 3;
                    frag.velocity = new Vector((Math.random() - 0.5) * 25, (Math.random() - 0.5) * 25);
                    frag.refreshBodyAttributes();
                    frag.life();
                }
            }
        }]
};
exports.exmentationbullet = {
    LABEL: "exmentationBullet",
    TYPE: "bullet",
	SHAPE: [[-1,-1],[0.5,-1],[1,-0.5],[1.79,0],[1,0.5],[0.5,1],[-1,1]],
    ACCEPTS_SCORE: false,
    BODY: {
        PENETRATION: 1,
        SPEED: 4.25,
        RANGE: 60,
        DENSITY: 1.25,
        HEALTH: 0.165,
        DAMAGE: 6,
        PUSHABILITY: 0.3,
    },
    FACING_TYPE: "smoothWithMotion",
    CAN_GO_OUTSIDE_ROOM: true,
    HITS_OWN_TYPE: "never",
    DIE_AT_RANGE: true,
	ON: [
        {
            event: 'death',
            handler: ({body}) => {
                for (let i = 0; i < 7; i++) {
                    let frag = new Entity(body)
					frag.skill = body.skill;
					frag.master = body.source;
                    frag.team = body.team
					frag.color = body.color
					frag.store = body.store
					frag.masterStore = body.masterStore
					frag.globalMasterStore = body.globalMasterStore
                    frag.define("shard")
                    frag.SIZE = body.SIZE / 3;
                    frag.velocity = new Vector((Math.random() - 0.5) * 50, (Math.random() - 0.5) * 50);
                    frag.life()
                }
            }
        },
		{
            event: 'death',
            handler: ({body}) => {
                for (let i = 0; i < 1; i++) {
                    let frag = new Entity(body)
					frag.skill = body.skill;
					frag.master = body.source;
					frag.team = body.team
					frag.color = body.color
					frag.store = body.store
					frag.masterStore = body.masterStore
					frag.globalMasterStore = body.globalMasterStore
                    frag.define("auraexplosiontwin")
                    frag.SIZE = 70
                    frag.velocity.x = 0
                    frag.velocity.y = 0
                    frag.life()
                }
            }
        },
		{
            event: 'death',
            handler: ({body}) => {
                for (let i = 0; i < 10; i++) {
                    let frag = new Entity(body)
					frag.define('assemblerEffect');
					frag.master = body.source;
                    frag.team = body.team;
                    frag.color = body.color;
                    frag.SIZE = body.SIZE / 3;
                    frag.velocity = new Vector((Math.random() - 0.5) * 25, (Math.random() - 0.5) * 25);
                    frag.refreshBodyAttributes();
                    frag.life();
                }
            }
        }]
};
exports.explosionbullet = {
    LABEL: "explosionBullet",
    TYPE: "bullet",
	SHAPE: [[-1,-1],[0.5,-1],[1,-0.5],[1.79,0],[1,0.5],[0.5,1],[-1,1]],
    ACCEPTS_SCORE: false,
    BODY: {
        PENETRATION: 1,
        SPEED: 4.25,
        RANGE: 60,
        DENSITY: 1.25,
        HEALTH: 0.165,
        DAMAGE: 6,
        PUSHABILITY: 0.3,
    },
    FACING_TYPE: "smoothWithMotion",
    CAN_GO_OUTSIDE_ROOM: true,
    HITS_OWN_TYPE: "never",
    DIE_AT_RANGE: true,
	ON: [
        {
            event: 'death',
            handler: ({body}) => {
                for (let i = 0; i < 1; i++) {
                    let frag = new Entity(body)
					frag.skill = body.skill;
					frag.master = body.source;
                    frag.team = body.team
					frag.color = body.color
					frag.store = body.store
					frag.masterStore = body.masterStore
					frag.globalMasterStore = body.globalMasterStore
                    frag.define("auraexplosion")
                    frag.SIZE = 80
                    frag.velocity.x = 0
                    frag.velocity.y = 0
                    frag.life()
                }
            }
        },
		{
            event: 'death',
            handler: ({body}) => {
                for (let i = 0; i < 10; i++) {
                    let frag = new Entity(body)
					frag.define('assemblerEffect');
					frag.master = body.source;
                    frag.team = body.team;
                    frag.color = body.color;
                    frag.SIZE = body.SIZE / 3;
                    frag.velocity = new Vector((Math.random() - 0.5) * 25, (Math.random() - 0.5) * 25);
                    frag.refreshBodyAttributes();
                    frag.life();
                }
            }
        }]
};
exports.explosiontwinbullet = {
    LABEL: "explosiontwinBullet",
    TYPE: "bullet",
	SHAPE: [[-1,-1],[0.5,-1],[1,-0.5],[1.79,0],[1,0.5],[0.5,1],[-1,1]],
    ACCEPTS_SCORE: false,
    BODY: {
        PENETRATION: 1,
        SPEED: 4.25,
        RANGE: 60,
        DENSITY: 1.25,
        HEALTH: 0.165,
        DAMAGE: 6,
        PUSHABILITY: 0.3,
    },
    FACING_TYPE: "smoothWithMotion",
    CAN_GO_OUTSIDE_ROOM: true,
    HITS_OWN_TYPE: "never",
    DIE_AT_RANGE: true,
	ON: [
        {
            event: 'death',
            handler: ({body}) => {
                for (let i = 0; i < 1; i++) {
                    let frag = new Entity(body)
					frag.skill = body.skill;
					frag.master = body.source;
                    frag.team = body.team
					frag.color = body.color
					frag.store = body.store
					frag.masterStore = body.masterStore
					frag.globalMasterStore = body.globalMasterStore
                    frag.define("auraexplosiontwin")
                    frag.SIZE = 60
                    frag.velocity.x = 0
                    frag.velocity.y = 0
                    frag.life()
                }
            }
        },
		{
            event: 'death',
            handler: ({body}) => {
                for (let i = 0; i < 10; i++) {
                    let frag = new Entity(body)
					frag.define('assemblerEffect');
					frag.master = body.source;
                    frag.team = body.team;
                    frag.color = body.color;
                    frag.SIZE = body.SIZE / 3;
                    frag.velocity = new Vector((Math.random() - 0.5) * 25, (Math.random() - 0.5) * 25);
                    frag.refreshBodyAttributes();
                    frag.life();
                }
            }
        }]
};
exports.alphaexplosionbullet = {
    LABEL: "alphaexplosionBullet",
    TYPE: "bullet",
	SHAPE: [[-1,-1],[0.5,-1],[1,-0.5],[1.79,0],[1,0.5],[0.5,1],[-1,1]],
    ACCEPTS_SCORE: false,
    BODY: {
        PENETRATION: 1,
        SPEED: 4.25,
        RANGE: 60,
        DENSITY: 1.25,
        HEALTH: 0.165,
        DAMAGE: 6,
        PUSHABILITY: 0.3,
    },
    FACING_TYPE: "smoothWithMotion",
    CAN_GO_OUTSIDE_ROOM: true,
    HITS_OWN_TYPE: "never",
    DIE_AT_RANGE: true,
	ON: [
        {
            event: 'death',
            handler: ({body}) => {
                for (let i = 0; i < 1; i++) {
                    let frag = new Entity(body)
					frag.skill = body.skill;
					frag.master = body.source;
                    frag.team = body.team
					frag.color = body.color
					frag.store = body.store
					frag.masterStore = body.masterStore
					frag.globalMasterStore = body.globalMasterStore
                    frag.define("auraexplosion")
                    frag.SIZE = 160
                    frag.velocity.x = 0
                    frag.velocity.y = 0
                    frag.life()
                }
            }
        },
		{
            event: 'death',
            handler: ({body}) => {
                for (let i = 0; i < 1; i++) {
                    let frag = new Entity(body)
					frag.skill = body.skill;
					frag.master = body.source;
                    frag.team = body.team
					frag.color = body.color
					frag.store = body.store
					frag.masterStore = body.masterStore
					frag.globalMasterStore = body.globalMasterStore
                    frag.define("auraexplosion")
                    frag.SIZE = 60
                    frag.velocity.x = 0
                    frag.velocity.y = 0
                    frag.life()
                }
            }
        },
		{
            event: 'death',
            handler: ({body}) => {
                for (let i = 0; i < 10; i++) {
                    let frag = new Entity(body)
					frag.define('assemblerEffect');
					frag.master = body.source;
                    frag.team = body.team;
                    frag.color = body.color;
                    frag.SIZE = body.SIZE / 3;
                    frag.velocity = new Vector((Math.random() - 0.5) * 25, (Math.random() - 0.5) * 25);
                    frag.refreshBodyAttributes();
                    frag.life();
                }
            }
        }]
};
exports.radiationbullet = {
    LABEL: "radiationBullet",
    TYPE: "bullet",
	SHAPE: [[-1,-1],[0.5,-1],[1,-0.5],[1.79,0],[1,0.5],[0.5,1],[-1,1]],
    ACCEPTS_SCORE: false,
    BODY: {
        PENETRATION: 1,
        SPEED: 4.25,
        RANGE: 50,
        DENSITY: 1.25,
        HEALTH: 0.165,
        DAMAGE: 6,
        PUSHABILITY: 0.3,
    },
    FACING_TYPE: "smoothWithMotion",
    CAN_GO_OUTSIDE_ROOM: true,
    HITS_OWN_TYPE: "never",
    DIE_AT_RANGE: true,
	ON: [
        {
            event: 'death',
            handler: ({body}) => {
                for (let i = 0; i < 1; i++) {
                    let frag = new Entity(body)
					frag.skill = body.skill;
					frag.master = body.source;
					frag.team = body.team
					frag.color = 11
					frag.store = body.store
					frag.masterStore = body.masterStore
					frag.globalMasterStore = body.globalMasterStore
                    frag.define("auraradiation")
                    frag.SIZE = 250
                    frag.velocity.x = 0
                    frag.velocity.y = 0
                    frag.life()
                }
            }
        },
		{
            event: 'death',
            handler: ({body}) => {
                for (let i = 0; i < 1; i++) {
                    let frag = new Entity(body)
					frag.skill = body.skill;
					frag.master = body.source;
					frag.team = body.team
					frag.color = body.color
					frag.store = body.store
					frag.masterStore = body.masterStore
					frag.globalMasterStore = body.globalMasterStore
                    frag.define("auraexplosiontwin")
                    frag.SIZE = 70
                    frag.velocity.x = 0
                    frag.velocity.y = 0
                    frag.life()
                }
            }
        },
		{
            event: 'death',
            handler: ({body}) => {
                for (let i = 0; i < 1; i++) {
                    let frag = new Entity(body)
					frag.skill = body.skill;
					frag.master = body.source;
					frag.color = body.color
					frag.store = body.store
					frag.masterStore = body.masterStore
					frag.globalMasterStore = body.globalMasterStore
                    frag.define("auraradiationteam")
                    frag.SIZE = 250
                    frag.velocity.x = 0
                    frag.velocity.y = 0
                    frag.life()
                }
            }
        },
		{
            event: 'death',
            handler: ({body}) => {
                for (let i = 0; i < 10; i++) {
                    let frag = new Entity(body)
					frag.define('assemblerEffect');
					frag.master = body.source;
                    frag.team = body.team;
                    frag.color = body.color;
                    frag.SIZE = body.SIZE / 3;
                    frag.velocity = new Vector((Math.random() - 0.5) * 25, (Math.random() - 0.5) * 25);
                    frag.refreshBodyAttributes();
                    frag.life();
                }
            }
        }]
};
exports.chain = {
    LABEL: "chain",
    TYPE: "chain",
	SHAPE: -6,
    ACCEPTS_SCORE: false,
    BODY: {
        PENETRATION: 1,
        SPEED: 0,
        RANGE: 750,
        DENSITY: 1.25,
        HEALTH: 10.165,
        DAMAGE: 0.01,
        PUSHABILITY: 0.3,
    },
    FACING_TYPE: "smoothWithMotion",
    CAN_GO_OUTSIDE_ROOM: true,
    HITS_OWN_TYPE: "never",
    DIE_AT_RANGE: true,
	MOTION_TYPE: "glide",
	ALPHA: 0.51,
	TURRETS: [
        {
            POSITION: [15, 0, 0, 0, 360, 1],
            TYPE: "chainwhitesymbol",
        },
    ],
	ON: [
        {
            event: 'collide',
            handler: ({ instance, other, body }) => {
				for (let i = 0; i < 30; i++) {
				if (instance.type == "explosionchain") break;
                if (other.type == "explosionchain" && other.master == instance.master){
                    instance.SIZE = 40;
					instance.type == "explosionchain";
					instance.define("fired");
					instance.refreshBodyAttributes();
                };}
            }
        }
	]
};
/*{
            event: 'collide',
            handler: ({ instance, other }) => {
                if (other.type == "explosionchain" && other.master == instance.master){
                    let burn = new Entity(instance)
					burn.skill = other.skill;
					burn.master = other.source;
					burn.team = instance.team;
					burn.color = instance.color;
                    burn.SIZE = instance.SIZE * 3;
					burn.define("explosionchain");
                    burn.velocity = new Vector((Math.random() - 0.5) * 10, (Math.random() - 0.5) * 10);
					burn.refreshBodyAttributes();
					instance.kill()
					burn.life();
                }
            }
        },*/
exports.chainsymbol = {
    PARENT: ["genericTank"],
    COLOR: 2,
    LABEL: "",
    SHAPE: -6,
	BORDERLESS: true,
};
exports.chainwhitesymbol = {
    PARENT: ["genericTank"],
    COLOR: 18,
    LABEL: "",
    SHAPE: -6,
	BORDERLESS: true,
};
exports.explosionchain = {
    LABEL: "explosionchain",
    TYPE: "explosionchain",
	SHAPE: -3,
    ACCEPTS_SCORE: false,
    BODY: {
        PENETRATION: 1,
        SPEED: 0,
        RANGE: 50,
        DENSITY: 1.25,
        HEALTH: 17,
        DAMAGE: 20,
        PUSHABILITY: 0.3,
    },
    FACING_TYPE: "smoothWithMotion",
    CAN_GO_OUTSIDE_ROOM: true,
    HITS_OWN_TYPE: "never",
    DIE_AT_RANGE: true,
	MOTION_TYPE: "glide",
	ALPHA: 0.51,
	TURRETS: [
        {
            POSITION: [15, 0, 0, 0, 360, 1],
            TYPE: "chainsymbol",
        },
    ],
};
exports.fired = {
    LABEL: "fired",
    TYPE: "explosionchain",
	SHAPE: -6,
    ACCEPTS_SCORE: false,
    BODY: {
        PENETRATION: 1,
        SPEED: 0,
        RANGE: 10,
        DENSITY: 1.25,
        HEALTH: 10,
        DAMAGE: 12,
        PUSHABILITY: 0.3,
    },
    FACING_TYPE: "smoothWithMotion",
    CAN_GO_OUTSIDE_ROOM: true,
    HITS_OWN_TYPE: "never",
    DIE_AT_RANGE: true,
	MOTION_TYPE: "glide",
	ALPHA: 0.51,
	TURRETS: [
        {
            POSITION: [15, 0, 0, 0, 360, 1],
            TYPE: "chainsymbol",
        },
    ],
};
exports.auraexplosion = {
    TYPE: "aura",
    ACCEPTS_SCORE: false,
    FACING_TYPE: "smoothWithMotion",
    MOTION_TYPE: "withMaster",
    CAN_GO_OUTSIDE_ROOM: true,
    HITS_OWN_TYPE: "never",
    DAMAGE_EFFECTS: false,
    DIE_AT_RANGE: true,
    ALPHA: 0.3,
    CLEAR_ON_MASTER_UPGRADE: true,
    CAN_GO_OUTSIDE_ROOM: true,
    BODY: {
        SHIELD: 1e9,
        REGEN: 1e6,
        HEALTH: 1e9,
		RANGE: 20,
        DENSITY: 0,
        SPEED: 0,
        PUSHABILITY: 0,
		DAMAGE: 20
    }
};
exports.auraexplosiontwin = {
    TYPE: "aura",
    ACCEPTS_SCORE: false,
    FACING_TYPE: "smoothWithMotion",
    MOTION_TYPE: "withMaster",
    CAN_GO_OUTSIDE_ROOM: true,
    HITS_OWN_TYPE: "never",
    DAMAGE_EFFECTS: false,
    DIE_AT_RANGE: true,
    ALPHA: 0.3,
    CLEAR_ON_MASTER_UPGRADE: true,
    CAN_GO_OUTSIDE_ROOM: true,
    BODY: {
        SHIELD: 1e9,
        REGEN: 1e6,
        HEALTH: 1e9,
		RANGE: 20,
        DENSITY: 0,
        SPEED: 0,
        PUSHABILITY: 0,
		DAMAGE: 10
    }
};
exports.auraradiation = {
    TYPE: "aura",
    ACCEPTS_SCORE: false,
    FACING_TYPE: "smoothWithMotion",
    MOTION_TYPE: "withMaster",
    CAN_GO_OUTSIDE_ROOM: true,
    HITS_OWN_TYPE: "never",
    DAMAGE_EFFECTS: false,
    DIE_AT_RANGE: true,
    ALPHA: 0.1,
    CLEAR_ON_MASTER_UPGRADE: true,
    CAN_GO_OUTSIDE_ROOM: true,
    BODY: {
        SHIELD: 1e9,
        REGEN: 1e6,
        HEALTH: 1e9,
		RANGE: 150,
        DENSITY: 0,
        SPEED: 0,
        PUSHABILITY: 0,
		DAMAGE: 0.925
    }
};
exports.auraradiationteam = {
    TYPE: "aura",
    ACCEPTS_SCORE: false,
    FACING_TYPE: "smoothWithMotion",
    MOTION_TYPE: "withMaster",
    CAN_GO_OUTSIDE_ROOM: true,
    HITS_OWN_TYPE: "never",
    DAMAGE_EFFECTS: false,
    DIE_AT_RANGE: true,
    ALPHA: 0.0,
    CLEAR_ON_MASTER_UPGRADE: true,
    CAN_GO_OUTSIDE_ROOM: true,
    BODY: {
        SHIELD: 1e9,
        REGEN: 1e6,
        HEALTH: 1e9,
		RANGE: 150,
        DENSITY: 0,
        SPEED: 0,
        PUSHABILITY: 0,
		DAMAGE: 0.075
    }
};
exports.bulletsmasher = {
    PARENT: ["bullet"],
	LABEL: "Bulletsmasher",
    TYPE: "bulletsmasher",
	HITS_OWN_TYPE: "hardOnlyBulletSmasher",
	TURRETS: [
        {
            POSITION: [21.5, 0, 0, 0, 360, 0],
            TYPE: "smasherBody",
        },
    ],
};
exports.bulletsmasherable = {
    PARENT: ["bulletsmasher"],
    TYPE: "bulletsmasher",
	HITS_OWN_TYPE: "hardOnlyBulletSmasher",
	MOTION_TYPE: "chase",
    FACING_TYPE: "smoothToTarget",
    CONTROLLERS: [
        "nearestDifferentMaster",
        "canRepel",
        "mapTargetToGoal",
        "hangOutNearMaster",
    ],
	BODY: {
        RANGE: 180,
		SPEED: 4.00,
		DAMAGE: 5.30,
    },
    AI: {
        BLIND: true,
    },
	TURRETS: [
        {
            POSITION: [21.5, 0, 0, 0, 360, 0],
            TYPE: "smasherBody",
        },
    ],
};
exports.bulletsmasherdeco = {
    PARENT: ["genericTank"],
	TURRETS: [
        {
            POSITION: [21.5, 0, 0, 0, 360, 0],
            TYPE: "smasherBody",
        },
    ],
};
exports.propellant = {
    LABEL: "propellant",
    TYPE: "propellant",
    ACCEPTS_SCORE: false,
    BODY: {
        PENETRATION: 1,
        SPEED: 4.25,
        RANGE: 90,
        DENSITY: 1.25,
        HEALTH: 0.165,
        DAMAGE: 6,
        PUSHABILITY: 0.3,
    },
    FACING_TYPE: "smoothWithMotion",
    CAN_GO_OUTSIDE_ROOM: true,
    HITS_OWN_TYPE: "never",
    DIE_AT_RANGE: true,
	TURRETS: [
        {
            /** SIZE     X       Y     ANGLE    ARC */
            POSITION: [18, 0, 0, 0, 360, 1],
            TYPE: "propellantsymbol",
        },
    ],
};
exports.propellant1symbol = {
    PARENT: ["genericTank"],
    COLOR: 13,
    LABEL: "",
	BORDERLESS: true,
};
exports.propellantsymbol = {
    PARENT: ["genericTank"],
    COLOR: 2,
    LABEL: "",
	BORDERLESS: true,
	TURRETS: [
        {
            /** SIZE     X       Y     ANGLE    ARC */
            POSITION: [14, 0, 0, 0, 360, 1],
            TYPE: "propellant1symbol",
        },
    ],
};
exports.fakebullet = {
    PARENT: ["bullet"],
	ALPHA: 0.7,
};
exports.hypnotismBody = {
    PARENT: ["genericTank"],
	SHAPE: 0,
    COLOR: 9,
    INDEPENDENT: true,
};
exports.hypnotismDeco = {
    PARENT: ["genericTank"],
	SHAPE: 0,
	COLOR: -1,
    INDEPENDENT: true,
	GUNS: [
		{
            POSITION: [18, 8, 1, 0, 0, 0, 0],
			PROPERTIES: {COLOR: -1}
        },
    ],
};
exports.sleepparalysisDeco = {
    PARENT: ["genericTank"],
	SHAPE: 0,
	COLOR: -1,
    INDEPENDENT: true,
	GUNS: [
		{
            POSITION: [6, 11, 1.3, 7, 0, 0, 0],
			PROPERTIES: {COLOR: -1}
        },
    ],
};
exports.laser = {
PARENT: ["bullet"],
SHAPE: "M -2.5 -0.2 L 2.5 -0.2 L 2.5 0.2 L -2.5 0.2",
BORDERLESS: true,
BODY: {
        PENETRATION: 999,
        SPEED: 20,
        RANGE: 135,
        DENSITY: 999,
        HEALTH: 0.013,
        DAMAGE: 8,
        PUSHABILITY: 0,
    },
ALPHA: 0.7
};
exports.laserre = {
PARENT: ["laser"],
COLOR: 12
};
exports.laseror = {
PARENT: ["laser"],
COLOR: 2
};
exports.laserye = {
PARENT: ["laser"],
COLOR: 3
};
exports.lasergr = {
PARENT: ["laser"],
COLOR: 11
};
exports.laserbl1 = {
PARENT: ["laser"],
COLOR: 0
};
exports.laserbl2 = {
PARENT: ["laser"],
COLOR: 10
};
exports.laservi = {
PARENT: ["laser"],
COLOR: 14
};
exports.bulletLancer = {
    LABEL: "BulletLanser",
    TYPE: "bullet",
    ACCEPTS_SCORE: false,
    BODY: {
        PENETRATION: 1,
        SPEED: 4.25,
        RANGE: 90,
        DENSITY: 1.25,
        HEALTH: 0.165,
        DAMAGE: 6,
        PUSHABILITY: 0.003,
    },
    FACING_TYPE: "smoothWithMotion",
    CAN_GO_OUTSIDE_ROOM: true,
    HITS_OWN_TYPE: "never",
    DIE_AT_RANGE: true,
};
exports.speedBullet = {
    PARENT: ["bullet"],
    MOTION_TYPE: "accel",
};
exports.growBullet = {
    PARENT: ["bullet"],
    MOTION_TYPE: "grow",
};
exports.flare = {
    PARENT: ["growBullet"],
    LABEL: "Flare",
    SHAPE: 4,
};
exports.developerBullet = {
    PARENT: ["bullet"],
    SHAPE: [[-1, -1], [1, -1], [2, 0], [1, 1], [-1, 1]],
};
exports.casing = {
    PARENT: ["bullet"],
    LABEL: "Shell",
    TYPE: "swarm",
};
exports.drone = {
    LABEL: "Drone",
    TYPE: "drone",
    ACCEPTS_SCORE: false,
    DANGER: 2,
    CONTROL_RANGE: 0,
    SHAPE: 3,
    MOTION_TYPE: "chase",
    FACING_TYPE: "smoothToTarget",
    CONTROLLERS: [
        "nearestDifferentMaster",
        "canRepel",
        "mapTargetToGoal",
        "hangOutNearMaster",
    ],
    AI: {
        BLIND: true,
    },
    BODY: {
        PENETRATION: 1.2,
        PUSHABILITY: 0.6,
        ACCELERATION: 0.05,
        HEALTH: 0.3,
        DAMAGE: 3.375,
        SPEED: 4.5,
        RANGE: 200,
        DENSITY: 0.03,
        RESIST: 1.5,
        FOV: 0.5,
    },
    HITS_OWN_TYPE: "hard",
    DRAW_HEALTH: false,
    CLEAR_ON_MASTER_UPGRADE: true,
    BUFF_VS_FOOD: true,
};
exports.auradrone = {
    LABEL: "auraDrone",
    TYPE: "drone",
    ACCEPTS_SCORE: false,
    DANGER: 2,
    CONTROL_RANGE: 0,
    SHAPE: -2,
    MOTION_TYPE: "chase",
    FACING_TYPE: "smoothToTarget",
    CONTROLLERS: [
        "nearestDifferentMaster",
        "canRepel",
        "mapTargetToGoal",
        "hangOutNearMaster",
    ],
    AI: {
        BLIND: true,
    },
    BODY: {
        PENETRATION: 1.2,
        PUSHABILITY: 0.6,
        ACCELERATION: 0.05,
        HEALTH: 0.6,
        DAMAGE: 1.0,
        SPEED: 4.0,
        RANGE: 200,
        DENSITY: 0.03,
        RESIST: 1.5,
        FOV: 0.5,
    },
    HITS_OWN_TYPE: "hard",
    DRAW_HEALTH: false,
    CLEAR_ON_MASTER_UPGRADE: true,
    BUFF_VS_FOOD: true,
	TURRETS: [
	{
      POSITION: [11, 0, 0, 0, 0, 1],
      TYPE: "droneAura",
    },
  ],
};
exports.dronestorm = {
    LABEL: "Dronestorm",
    TYPE: "drone",
    ACCEPTS_SCORE: false,
    DANGER: 2,
    CONTROL_RANGE: 0,
    SHAPE: 3,
    MOTION_TYPE: "chase",
    FACING_TYPE: "smoothToTarget",
    CONTROLLERS: [
        "nearestDifferentMaster",
        "canRepel",
        "mapTargetToGoal",
        "hangOutNearMaster",
    ],
    AI: {
        BLIND: true,
    },
    BODY: {
        PENETRATION: 1.2,
        PUSHABILITY: 0.6,
        ACCELERATION: 0.05,
        HEALTH: 0.3,
        DAMAGE: 3.375,
        SPEED: 4.2,
        RANGE: 200,
        DENSITY: 0.03,
        RESIST: 1.5,
        FOV: 0.5,
    },
    HITS_OWN_TYPE: "hard",
    DRAW_HEALTH: false,
    CLEAR_ON_MASTER_UPGRADE: true,
    BUFF_VS_FOOD: true,
	TURRETS: [
        {
            /** SIZE     X       Y     ANGLE    ARC */
            POSITION: [10, 0, 0, 0, 360, 1],
            TYPE: "autoStormGun",
        },
    ],
};
exports.droneCastling = {
    LABEL: "DroneCastling",
    TYPE: "drone",
    ACCEPTS_SCORE: false,
    SHAPE: 3,
    MOTION_TYPE: "chase",
	FACING_TYPE: "smoothToTarget",
    CONTROLLERS: [
        "nearestDifferentMaster",
        "canRepel",
        "mapTargetToGoal",
        "hangOutNearMaster",
    ],
    AI: {
        BLIND: true,
    },
    BODY: {
        PENETRATION: 1.2,
        PUSHABILITY: 0.6,
        ACCELERATION: 0.05,
        HEALTH: 0.3,
        DAMAGE: 3.375,
        SPEED: 4.2,
        RANGE: 200,
        DENSITY: 0.03,
        RESIST: 1.5,
        FOV: 0.5,
    },
    HITS_OWN_TYPE: "hard",
    DRAW_HEALTH: false,
    CLEAR_ON_MASTER_UPGRADE: true,
    BUFF_VS_FOOD: true,
	TURRETS: [
        {
            /** SIZE     X       Y     ANGLE    ARC */
            POSITION: [11, 0, 0, 0, 360, 1],
            TYPE: "autoCastlingGun",
        },
    ],
};
exports.droneLaser = {
    LABEL: "DroneCastling",
    TYPE: "drone",
    ACCEPTS_SCORE: false,
    SHAPE: 3,
    MOTION_TYPE: "chase",
	FACING_TYPE: "smoothToTarget",
    CONTROLLERS: [
        "nearestDifferentMaster",
        "canRepel",
        "mapTargetToGoal",
        "hangOutNearMaster",
    ],
    AI: {
        BLIND: true,
    },
    BODY: {
        PENETRATION: 1.2,
        PUSHABILITY: 0.6,
        ACCELERATION: 0.05,
        HEALTH: 0.3,
        DAMAGE: 3.375,
        SPEED: 4.2,
        RANGE: 200,
        DENSITY: 0.03,
        RESIST: 1.5,
        FOV: 0.5,
    },
    HITS_OWN_TYPE: "hard",
    DRAW_HEALTH: false,
    CLEAR_ON_MASTER_UPGRADE: true,
    BUFF_VS_FOOD: true,
	TURRETS: [
        {
            /** SIZE     X       Y     ANGLE    ARC */
            POSITION: [18, 0, 0, 0, 360, 1],
            TYPE: "autoLaserGun",
        },
    ],
};
exports.haze = {
    TYPE: "haze",
    ACCEPTS_SCORE: false,
    DANGER: 2,
    CONTROL_RANGE: 10,
    SHAPE: 6,
	ALPHA: 0.3,
	BORDERLESS: true,
    MOTION_TYPE: "chase",
    CONTROLLERS: [
        "nearestDifferentMaster",
        "canRepel",
        "mapTargetToGoal",
        "hangOutNearMaster",
    ],
    AI: {
        BLIND: true,
    },
    BODY: {
        PENETRATION: 0.1,
        PUSHABILITY: 0.001,
        ACCELERATION: 0.05,
        HEALTH: 7.0,
        DAMAGE: 0.10,
        SPEED: 1.75,
        RANGE: 200,
        DENSITY: 0.03,
        RESIST: 1.0,
        FOV: 0.5,
    },
    HITS_OWN_TYPE: "hardOnlyHaze",
    DAMAGE_EFFECTS: false,
    DRAW_HEALTH: false,
    CLEAR_ON_MASTER_UPGRADE: true,
    BUFF_VS_FOOD: true,
	TURRETS: [
        {
            /** SIZE     X       Y     ANGLE    ARC */
            POSITION: [15, 0, 0, 0, 360, 1],
            TYPE: "hazesymbol",
        },
    ],
};
exports.rangehaze = {
    TYPE: "haze",
    ACCEPTS_SCORE: false,
    DANGER: 2,
    CONTROL_RANGE: 10,
    SHAPE: 6,
	ALPHA: 0.3,
	BORDERLESS: true,
    MOTION_TYPE: "chase",
    CONTROLLERS: [
        "nearestDifferentMaster",
        "canRepel",
        "mapTargetToGoal",
        "hangOutNearMaster",
    ],
    AI: {
        BLIND: true,
    },
    BODY: {
        PENETRATION: 0.1,
        PUSHABILITY: 0.001,
        ACCELERATION: 0.05,
        HEALTH: 15.0,
        DAMAGE: 0.20,
        SPEED: 1.75,
        RANGE: 50,
        DENSITY: 0.03,
        RESIST: 1.0,
        FOV: 0.5,
    },
    HITS_OWN_TYPE: "hard",
    DAMAGE_EFFECTS: false,
    DRAW_HEALTH: false,
    CLEAR_ON_MASTER_UPGRADE: true,
    BUFF_VS_FOOD: true,
	DIE_AT_RANGE: true,
	TURRETS: [
        {
            /** SIZE     X       Y     ANGLE    ARC */
            POSITION: [15, 0, 0, 0, 360, 1],
            TYPE: "hazesymbol",
        },
    ],
};
exports.hazesymbol = {
    PARENT: ["genericTank"],
    COLOR: 17,
    LABEL: "",
    SHAPE: 6,
	BORDERLESS: true,
};
exports.autoStormGun = {
    PARENT: ["genericTank"],
    LABEL: "",
    COLOR: 16,
    GUNS: [
        {
            POSITION: [15, 8, 0.8, 0, 0, 90, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.minion, g.auto, g.storm]),
                TYPE: "autostormswarm",
				STAT_CALCULATOR: gunCalcNames.swarm,
                LABEL: "Autonomous",
            },
        },
		{
            POSITION: [15, 8, 0.8, 0, 0, 270, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.minion, g.auto, g.storm]),
                TYPE: "autostormswarm",
				STAT_CALCULATOR: gunCalcNames.swarm,
                LABEL: "Autonomous",
            },
        },
    ],
};
exports.emptydrone = {
    LABEL: "EmptyDrone",
    TYPE: "drone",
    ACCEPTS_SCORE: false,
    DANGER: 2,
    CONTROL_RANGE: 0,
    SHAPE: 3,
    MOTION_TYPE: "chase",
    FACING_TYPE: "smoothToTarget",
    CONTROLLERS: [
        "nearestDifferentMaster",
        "canRepel",
        "mapTargetToGoal",
        "hangOutNearMaster",
    ],
    AI: {
        BLIND: true,
    },
    BODY: {
        PENETRATION: 1.2,
        PUSHABILITY: 0.6,
        ACCELERATION: 0.05,
        HEALTH: 0.3,
        DAMAGE: 1.0,
        SPEED: 5.0,
        RANGE: 200,
        DENSITY: 0.03,
        RESIST: 1.5,
        FOV: 0.5,
    },
	TURRETS: [
        {
            /** SIZE     X       Y     ANGLE    ARC */
            POSITION: [11, 0, 0, 0, 360, 1],
            TYPE: "emptySymbol1",
        },
    ],
    HITS_OWN_TYPE: "hard",
    DRAW_HEALTH: false,
    CLEAR_ON_MASTER_UPGRADE: true,
    BUFF_VS_FOOD: true,
};

exports.trap = {
    LABEL: "Thrown Trap",
    TYPE: "trap",
    ACCEPTS_SCORE: false,
    SHAPE: -3,
    MOTION_TYPE: "glide",
    FACING_TYPE: "turnWithSpeed",
    HITS_OWN_TYPE: "push",
    DIE_AT_RANGE: true,
    BODY: {
        HEALTH: 0.5,
        DAMAGE: 3,
        RANGE: 450,
        DENSITY: 2.5,
        RESIST: 2.5,
        SPEED: 0,
    },
};
exports.virusBody1 = {
    LABEL: "",
    CONTROLLERS: [["spin", { speed: 0.1, independent: true }]],
    COLOR: 14,
    SHAPE: -3,
    INDEPENDENT: true,
};
exports.virusBody2 = {
    LABEL: "",
    CONTROLLERS: [["spin", { speed: -0.05, independent: true }]],
    COLOR: 14,
    SHAPE: -3,
    INDEPENDENT: true,
	TURRETS: [
        {
            POSITION: [22, 0, 0, 0, 360, 0],
            TYPE: "virusBody1",
        },
    ],
};
exports.virusweak = {
    LABEL: "Virus-weak",
    TYPE: "virusweak",
    ACCEPTS_SCORE: false,
    MOTION_TYPE: "glide",
    FACING_TYPE: "turnWithSpeed",
    HITS_OWN_TYPE: "push",
    DIE_AT_RANGE: true,
    BODY: {
        HEALTH: 25.0,
        DAMAGE: 5.5,
        RANGE: 30,
        DENSITY: 2.5,
        RESIST: 2.5,
        SPEED: 0,
    },
	TURRETS: [
        {
            POSITION: [22, 0, 0, 0, 360, 0],
            TYPE: "virusBody2",
        },
    ],
};
exports.money1s = {
    LABEL: "Money",
    TYPE: "money",
	SHAPE: 8,
    ACCEPTS_SCORE: false,
    BODY: {
        PENETRATION: 1,
        SPEED: 4.25,
        RANGE: 90,
        DENSITY: 1.25,
        HEALTH: 0.165,
        DAMAGE: 6,
        PUSHABILITY: 0.3,
    },
    FACING_TYPE: "smoothWithMotion",
    CAN_GO_OUTSIDE_ROOM: true,
    HITS_OWN_TYPE: "never",
    DIE_AT_RANGE: true,
	TURRETS: [
        {
            /** SIZE     X       Y     ANGLE    ARC */
            POSITION: [17, 0, 0, 0, 360, 1],
            TYPE: "moneysymbol",
        },
    ],
};
exports.money2s = {
    LABEL: "Money2",
    TYPE: "money2",
	SHAPE: 8,
    ACCEPTS_SCORE: false,
    BODY: {
        PENETRATION: 1,
        SPEED: 4.25,
        RANGE: 90,
        DENSITY: 1.25,
        HEALTH: 0.165,
        DAMAGE: 6,
        PUSHABILITY: 0.3,
    },
    FACING_TYPE: "smoothWithMotion",
    CAN_GO_OUTSIDE_ROOM: true,
    HITS_OWN_TYPE: "never",
    DIE_AT_RANGE: true,
	TURRETS: [
        {
            /** SIZE     X       Y     ANGLE    ARC */
            POSITION: [17, 0, 0, 0, 360, 1],
            TYPE: "moneysymbol2",
        },
    ],
};
exports.moneysymbol = {
    PARENT: ["genericTank"],
    COLOR: 2,
    LABEL: "",
	BORDERLESS: true,
	TURRETS: [
        {
            /** SIZE     X       Y     ANGLE    ARC */
            POSITION: [14, 0, 0, 0, 360, 1],
            TYPE: "moneysymbols1",
        },
    ],
};
exports.moneysymbol2 = {
    PARENT: ["genericTank"],
    COLOR: 2,
    LABEL: "",
	BORDERLESS: true,
	TURRETS: [
        {
            /** SIZE     X       Y     ANGLE    ARC */
            POSITION: [14, 0, 0, 0, 360, 1],
            TYPE: "moneysymbols2",
        },
    ],
};
exports.moneysymbols1 = {
    PARENT: ["genericTank"],
	SHAPE: [[-0.77,0.43],[0.2,0.94],[0.21,-0.89],[-0.13,-0.89],[-0.13,0.42]],
    COLOR: 13,
    LABEL: "",
};
exports.moneysymbols2 = {
    PARENT: ["genericTank"],
	SHAPE: [[-0.51,0.69],[-0.2,0.95],
	[0.23,0.94],[0.52,0.68],
	[0.516,0.33],[-0.124,0.05],
	[-0.56,-0.5],[-0.54,-0.934],
	[-0.23,-0.964],[0.215,-0.97],
	[0.62,-0.97],[0.65,-0.76],
	[0.25,-0.78],[-0.11,-0.76],
	[-0.33,-0.746],[-0.34,-0.55],
	[-0.01,-0.12],[0.68,0.21],
	[0.704,0.64],[0.36,1.1],
	[-0.31,1.1],[-0.62,0.8]],
    COLOR: 13,
    LABEL: "",
};
exports.moneysymbols = {
    PARENT: ["genericTank"],
	SHAPE: [[0.534,0.56],[0.25,0.92],
	[-0.27,0.93],[-0.576,0.604],
	[-0.58,0.215],[-0.001,-0.01],
	[0.574,-0.214],[0.56,-0.69],
	[0.21,-0.98],[-0.32,-0.99],
	[-0.61,-0.73],[-0.595,-0.21],
	[-0.416,-0.22],[-0.416,-0.715],
	[-0.245,-0.855],[0.215,-0.85],
	[0.42,-0.614],[0.42,-0.3],
	[-0.75,0.14],[-0.72,0.68],
	[-0.33,1.07],[0.23,1.084],
	[0.65,0.67],[0.706,0.165],
	[0.534,0.165]],
    COLOR: 13,
    LABEL: "",
};
exports.virusbasic = {
    LABEL: "Virusbasic",
    TYPE: "virusbasic",
    ACCEPTS_SCORE: false,
    MOTION_TYPE: "glide",
    FACING_TYPE: "turnWithSpeed",
    HITS_OWN_TYPE: "push",
    DIE_AT_RANGE: true,
    BODY: {
        HEALTH: 5.0,
        DAMAGE: 0.5,
        RANGE: 100,
        DENSITY: 2.5,
        RESIST: 2.5,
        SPEED: 0,
    },
	TURRETS: [
        {
            POSITION: [22, 0, 0, 0, 360, 0],
            TYPE: "virusBody2",
        },
    ],
	ON: [
        {
            event: 'death',
            handler: ({body}) => {
                let angle1 = ran.randomAngle(),
                    angle2 = angle1 + Math.PI,
                    boost = config.fragSpeedMultiplier,
					drandchance = [ 3, 2, 1, 0.1 ]
                for (let i = 0; i < 1; i++) {
                    let frag = new Entity(body)
					frag.master = body.course
                    frag.team = body.team
					frag.color = body.color
					frag.store = body.store
                    frag.define([ "virusweak", "virus", "virusstrong", "virusverystrong" ][ran.chooseChance(...drandchance)])
                    frag.SIZE = body.SIZE
                    frag.velocity.x = i == 0 ? Math.cos(angle1) * boost : Math.cos(angle2) * boost
                    frag.velocity.y = i == 0 ? Math.sin(angle1) * boost : Math.sin(angle2) * boost
                    frag.life()
                }
            }
        }]
};
exports.virus = {
    LABEL: "Virus",
    TYPE: "virus",
    ACCEPTS_SCORE: false,
    MOTION_TYPE: "glide",
    FACING_TYPE: "turnWithSpeed",
    HITS_OWN_TYPE: "push",
    DIE_AT_RANGE: true,
    BODY: {
        HEALTH: 25.0,
        DAMAGE: 5.5,
        RANGE: 100,
        DENSITY: 2.5,
        RESIST: 2.5,
        SPEED: 0,
    },
	TURRETS: [
        {
            POSITION: [22, 0, 0, 0, 360, 0],
            TYPE: "virusBody2",
        },
    ],
	ON: [
        {
            event: 'death',
            handler: ({body}) => {
                let angle1 = ran.randomAngle(),
                    angle2 = angle1 + Math.PI,
                    boost = config.fragSpeedMultiplier,
					drandchance = [ 3, 2, 1, 0.1 ]
                for (let i = 0; i < 1; i++) {
                    let frag = new Entity(body)
					frag.master = body.course
                    frag.team = body.team
					frag.color = body.color
					frag.store = body.store
                    frag.define([ "virusweak", "virus", "virusstrong", "virusverystrong" ][ran.chooseChance(...drandchance)])
                    frag.SIZE = body.SIZE
                    frag.velocity.x = i == 0 ? Math.cos(angle1) * boost : Math.cos(angle2) * boost
                    frag.velocity.y = i == 0 ? Math.sin(angle1) * boost : Math.sin(angle2) * boost
                    frag.life()
                }
            }
        }]
};
exports.virusstrong = {
    LABEL: "Virus-strong",
    TYPE: "virusstrong",
    ACCEPTS_SCORE: false,
    MOTION_TYPE: "glide",
    FACING_TYPE: "turnWithSpeed",
    HITS_OWN_TYPE: "push",
    DIE_AT_RANGE: true,
    BODY: {
        HEALTH: 25.0,
        DAMAGE: 5.5,
        RANGE: 60,
        DENSITY: 2.5,
        RESIST: 2.5,
        SPEED: 0,
    },
	TURRETS: [
        {
            POSITION: [22, 0, 0, 0, 360, 0],
            TYPE: "virusBody2",
        },
    ],
	ON: [
        {
            event: 'death',
            handler: ({body}) => {
                let angle1 = ran.randomAngle(),
                    angle2 = angle1 + Math.PI,
                    boost = config.fragSpeedMultiplier,
					drandchance = [ 1, 3, 2, 0.1 ]
                for (let i = 0; i < 2; i++) {
                    let frag = new Entity(body)
					frag.master = body.course
                    frag.team = body.team
					frag.color = body.color
					frag.store = body.store
                    frag.define([ "virusweak", "virus", "virusstrong", "virusverystrong" ][ran.chooseChance(...drandchance)])
                    frag.SIZE = body.SIZE
                    frag.velocity.x = i == 0 ? Math.cos(angle1) * boost : Math.cos(angle2) * boost
                    frag.velocity.y = i == 0 ? Math.sin(angle1) * boost : Math.sin(angle2) * boost
                    frag.life()
                }
            }
        }]
};
exports.virusverystrong = {
    LABEL: "Virus very-strong",
    TYPE: "virusverystrong",
    ACCEPTS_SCORE: false,
    MOTION_TYPE: "glide",
    FACING_TYPE: "turnWithSpeed",
    HITS_OWN_TYPE: "push",
    DIE_AT_RANGE: true,
    BODY: {
        HEALTH: 25.0,
        DAMAGE: 5.5,
        RANGE: 60,
        DENSITY: 2.5,
        RESIST: 2.5,
        SPEED: 0,
    },
	TURRETS: [
        {
            POSITION: [22, 0, 0, 0, 360, 0],
            TYPE: "virusBody2",
        },
    ],
	ON: [
        {
            event: 'death',
            handler: ({body}) => {
                let angle1 = ran.randomAngle(),
                    angle2 = angle1 + Math.PI,
                    boost = config.fragSpeedMultiplier,
					drandchance = [ 7, 0.5, 0.5, 0.01 ]
                for (let i = 0; i < 2; i++) {
                    let frag = new Entity(body)
					frag.master = body.course
                    frag.team = body.team
					frag.color = body.color
					frag.store = body.store
                    frag.define([ "virusweak", "virus", "virusstrong", "virusverystrong" ][ran.chooseChance(...drandchance)])
                    frag.SIZE = body.SIZE
                    frag.velocity.x = i == 0 ? Math.cos(angle1) * boost : Math.cos(angle2) * boost
                    frag.velocity.y = i == 0 ? Math.sin(angle1) * boost : Math.sin(angle2) * boost
                    frag.life()
                }
            }
        }]
};
exports.autovirusweak = {
    LABEL: "auto Virus-weak",
    TYPE: "autovirusweak",
    ACCEPTS_SCORE: false,
    MOTION_TYPE: "glide",
    FACING_TYPE: "turnWithSpeed",
    HITS_OWN_TYPE: "push",
    DIE_AT_RANGE: true,
    BODY: {
        HEALTH: 5.0,
        DAMAGE: 0.5,
        RANGE: 30,
        DENSITY: 2.5,
        RESIST: 2.5,
        SPEED: 0,
    },
	TURRETS: [
        {
            POSITION: [22, 0, 0, 0, 360, 0],
            TYPE: "virusBody2",
        },
		{
            POSITION: [11, 0, 0, 0, 360, 1],
            TYPE: "autoVirusGun",
        },
    ],
};
exports.autovirus = {
    LABEL: "auto Virus",
    TYPE: "autovirus",
    ACCEPTS_SCORE: false,
    MOTION_TYPE: "glide",
    FACING_TYPE: "turnWithSpeed",
    HITS_OWN_TYPE: "push",
    DIE_AT_RANGE: true,
    BODY: {
        HEALTH: 5.0,
        DAMAGE: 0.5,
        RANGE: 100,
        DENSITY: 2.5,
        RESIST: 2.5,
        SPEED: 0,
    },
	TURRETS: [
        {
            POSITION: [22, 0, 0, 0, 360, 0],
            TYPE: "virusBody2",
        },
		{
            POSITION: [11, 0, 0, 0, 360, 1],
            TYPE: "autoVirusGun",
        },
    ],
	ON: [
        {
            event: 'death',
            handler: ({body}) => {
                let angle1 = ran.randomAngle(),
                    angle2 = angle1 + Math.PI,
                    boost = config.fragSpeedMultiplier,
					drandchance = [ 3, 2, 1, 0.1 ]
                for (let i = 0; i < 1; i++) {
                    let frag = new Entity(body)
					frag.master = body.course
                    frag.team = body.team
					frag.color = body.color
                    frag.define([ "autovirusweak", "autovirus", "autovirusstrong", "autovirusverystrong" ][ran.chooseChance(...drandchance)])
                    frag.SIZE = body.SIZE
                    frag.velocity.x = i == 0 ? Math.cos(angle1) * boost : Math.cos(angle2) * boost
                    frag.velocity.y = i == 0 ? Math.sin(angle1) * boost : Math.sin(angle2) * boost
                    frag.life()
                }
            }
        }]
};
exports.autovirusstrong = {
    LABEL: "auto Virus-strong",
    TYPE: "autovirusstrong",
    ACCEPTS_SCORE: false,
    MOTION_TYPE: "glide",
    FACING_TYPE: "turnWithSpeed",
    HITS_OWN_TYPE: "push",
    DIE_AT_RANGE: true,
    BODY: {
        HEALTH: 5.0,
        DAMAGE: 0.5,
        RANGE: 60,
        DENSITY: 2.5,
        RESIST: 2.5,
        SPEED: 0,
    },
	TURRETS: [
        {
            POSITION: [22, 0, 0, 0, 360, 0],
            TYPE: "virusBody2",
        },
		{
            POSITION: [11, 0, 0, 0, 360, 1],
            TYPE: "autoVirusGun",
        },
    ],
	ON: [
        {
            event: 'death',
            handler: ({body}) => {
                let angle1 = ran.randomAngle(),
                    angle2 = angle1 + Math.PI,
                    boost = config.fragSpeedMultiplier,
					drandchance = [ 1, 3, 2, 0.1 ]
                for (let i = 0; i < 2; i++) {
                    let frag = new Entity(body)
					frag.master = body.course
                    frag.team = body.team
					frag.color = body.color
                    frag.define([ "autovirusweak", "autovirus", "autovirusstrong", "autovirusverystrong" ][ran.chooseChance(...drandchance)])
                    frag.SIZE = body.SIZE
                    frag.velocity.x = i == 0 ? Math.cos(angle1) * boost : Math.cos(angle2) * boost
                    frag.velocity.y = i == 0 ? Math.sin(angle1) * boost : Math.sin(angle2) * boost
                    frag.life()
                }
            }
        }]
};
exports.autovirusverystrong = {
    LABEL: "auto Virus very-strong",
    TYPE: "autovirusverystrong",
    ACCEPTS_SCORE: false,
    MOTION_TYPE: "glide",
    FACING_TYPE: "turnWithSpeed",
    HITS_OWN_TYPE: "push",
    DIE_AT_RANGE: true,
    BODY: {
        HEALTH: 5.0,
        DAMAGE: 0.5,
        RANGE: 60,
        DENSITY: 2.5,
        RESIST: 2.5,
        SPEED: 0,
    },
	TURRETS: [
        {
            POSITION: [22, 0, 0, 0, 360, 0],
            TYPE: "virusBody2",
        },
		{
            POSITION: [11, 0, 0, 0, 360, 1],
            TYPE: "autoVirusGun",
        },
    ],
	ON: [
        {
            event: 'death',
            handler: ({body}) => {
                let angle1 = ran.randomAngle(),
                    angle2 = angle1 + Math.PI,
                    boost = config.fragSpeedMultiplier,
					drandchance = [ 7, 0.5, 0.5, 0.01 ]
                for (let i = 0; i < 8; i++) {
                    let frag = new Entity(body)
					frag.master = body.course
                    frag.team = body.team
					frag.color = body.color
                    frag.define([ "autovirusweak", "autovirus", "autovirusstrong", "autovirusverystrong" ][ran.chooseChance(...drandchance)])
                    frag.SIZE = body.SIZE
                    frag.velocity.x = i == 0 ? Math.cos(angle1) * boost : Math.cos(angle2) * boost
                    frag.velocity.y = i == 0 ? Math.sin(angle1) * boost : Math.sin(angle2) * boost
                    frag.life()
                }
            }
        }]
};
exports.trapmine = {
    LABEL: "Thrown trapmine",
    TYPE: "trapmine",
    ACCEPTS_SCORE: false,
    SHAPE: -3,
    MOTION_TYPE: "glide",
    FACING_TYPE: "turnWithSpeed",
    HITS_OWN_TYPE: "push",
    DIE_AT_RANGE: true,
    BODY: {
        HEALTH: 0.2,
        DAMAGE: 3,
        RANGE: 450,
        DENSITY: 2.5,
        RESIST: 2.5,
        SPEED: 0,
    },
	ON: [
        {
            event: 'death',
            handler: ({body}) => {
                let angle1 = ran.randomAngle(),
                    angle2 = angle1 + Math.PI,
                    boost = config.fragSpeedMultiplier,
					drandchance = [ 2, 1 ]
                for (let i = 0; i < 2; i++) {
                    let frag = new Entity(body)
					frag.master = body.course
                    frag.team = body.team
					frag.color = body.color
                    frag.define([ "haze", "trapminef" ][ran.chooseChance(...drandchance)])
                    frag.SIZE = body.SIZE
                    frag.velocity.x = i == 0 ? Math.cos(angle1) * boost : Math.cos(angle2) * boost
                    frag.velocity.y = i == 0 ? Math.sin(angle1) * boost : Math.sin(angle2) * boost
                    frag.life()
                }
            }
        }]
};
exports.trapminef = {
	LABEL: "Thrown trapminef",
    TYPE: "trapminef",
    ACCEPTS_SCORE: false,
    SHAPE: -3,
    MOTION_TYPE: "glide",
    FACING_TYPE: "turnWithSpeed",
    HITS_OWN_TYPE: "push",
    DIE_AT_RANGE: true,
    BODY: {
        HEALTH: 0.1,
        DAMAGE: 3,
        RANGE: 450,
        DENSITY: 2.5,
        RESIST: 2.5,
        SPEED: 0,
    },
};
//#region Config
    const config = {
        fragSpeedMultiplier: 10, // How fast the frags fly off
        scoreMultiplier: 10, // How much it multiplies the score of the normal shape.
        damageMultiplier: 10, // How much it multiplies the damage of the normal shape
        healthMultipler: 3, // How much it multiplies the health of the normal shape.
        enableBraindeadNames: false, // Makes the explosives have funny names
    }
    //#endregion
exports.satellite = { 
    LABEL: "Satellite",
    TYPE: "satellite",
    ACCEPTS_SCORE: false,
    DANGER: 2,
    SHAPE: 0,
    LAYER: 13,
    CONTROLLERS: ['orbit'],
    FACING_TYPE: "spin",
    BODY: {
        PENETRATION: 1.2,
        PUSHABILITY: 0.6,
        ACCELERATION: 0.75,
        HEALTH: 0.3,
        DAMAGE: 3.375,
        SPEED: 10,
        RANGE: 200,
        DENSITY: 0.03,
        RESIST: 1.5,
        FOV: 0.5,
    },
    DRAW_HEALTH: false,
    CLEAR_ON_MASTER_UPGRADE: true,
    BUFF_VS_FOOD: true,
    MOTION_TYPE: 'motor'
};
exports.mendersymbol = {
    PARENT: ["genericTank"],
    COLOR: 16,
    LABEL: "",
    SHAPE: 3,
};
exports.healerBullet = {
    PARENT: ["bullet"],
    HEALER: true,
    HITS_OWN_TYPE: "normal",
	TURRETS: [
        {
            /** SIZE     X       Y     ANGLE    ARC */
            POSITION: [15, 0, 0, 0, 360, 1],
            TYPE: "healerSymbol",
        },
    ],
};
exports.healerSymbol = {
    PARENT: ["genericEntity"],
    SHAPE: [[0.3, -0.3],[1,-0.3],[1,0.3],[0.3,0.3],[0.3,1],[-0.3,1],[-0.3,0.3],[-1,0.3],[-1,-0.3],[-0.3,-0.3],[-0.3,-1],[0.3,-1]],
    SIZE: 13,
    COLOR: 12,
};
exports.notHealerSymbol = {
    PARENT: ["genericEntity"],
    SHAPE: [[0.3, -0.3],[1,-0.3],[1,0.3],[0.3,0.3],[0.3,1],[-0.3,1],[-0.3,0.3],[-1,0.3],[-1,-0.3],[-0.3,-0.3],[-0.3,-1],[0.3,-1]],
    SIZE: 13,
    COLOR: 17,
};
exports.swiss1Symbol = {
    PARENT: ["genericEntity"],
    SHAPE: [[0.3, -0.3],[1,-0.3],[1,0.3],[0.3,0.3],[0.3,1],[-0.3,1],[-0.3,0.3],[-1,0.3],[-1,-0.3],[-0.3,-0.3],[-0.3,-1],[0.3,-1]],
    SIZE: 13,
    COLOR: 8,
};
exports.laser1Symbol = {
    PARENT: ["genericTank"],
    SHAPE: 4,
	INDEPENDENT: true,
    COLOR: -1,
};
exports.laserSymbol = {
    PARENT: ["genericTank"],
    SHAPE: 4,
	INDEPENDENT: true,
    COLOR: 16,
	TURRETS: [
        {
            /** SIZE     X       Y     ANGLE    ARC */
            POSITION: [12.5, 0, 0, 0, 360, 1],
            TYPE: "laser1Symbol",
        },
    ],
};
exports.swissSymbol = {
    PARENT: ["genericTank"],
	INDEPENDENT: true,
    COLOR: 4,
	TURRETS: [
        {
            /** SIZE     X       Y     ANGLE    ARC */
            POSITION: [10, 0, 0, 0, 360, 1],
            TYPE: "swiss1Symbol",
        },
    ],
};
exports.flyShieldSymbol = {
    PARENT: ["genericTank"],
    SHAPE: [[0,1],[0.6,0.2],[0.6,-0.2],[0.0,-1.0],[1,-0.2],[1,0.2]],
	INDEPENDENT: true,
    COLOR: 17,
};
exports.infinity1Symbol = {
    PARENT: ["genericTank"],
    SHAPE: [[-1,-0.5],[-0.5,-1.0],[0.5,-1],[1,-0.5],[1,0.5],[0.5,1],[-0.5,1],[-1,0.5]],
	INDEPENDENT: true,
    COLOR: 16,
};
exports.infinity2Symbol = {
    PARENT: ["genericTank"],
    SHAPE: [[-1,-0.5],[-0.5,-1.0],[0.5,-1],[1,-0.5],[1,0.5],[0.5,1],[-0.5,1],[-1,0.5]],
	INDEPENDENT: true,
    COLOR: 0,
	TURRETS: [
        {
            /** SIZE     X       Y     ANGLE    ARC */
            POSITION: [13, 0, 0, 0, 360, 1],
            TYPE: "infinity1Symbol",
        },
    ],
};
exports.infinitySymbol = {
    PARENT: ["genericTank"],
    SHAPE: 4,
	INDEPENDENT: true,
    COLOR: 16,
	TURRETS: [
        {
            /** SIZE     X       Y     ANGLE    ARC */
            POSITION: [9.1, 0, 5, 0, 360, 1],
            TYPE: "infinity2Symbol",
        },
		{
            /** SIZE     X       Y     ANGLE    ARC */
            POSITION: [9.1, 0, -5, 0, 360, 1],
            TYPE: "infinity2Symbol",
        },
    ],
};
exports.single1Symbol = {
    PARENT: ["genericTank"],
    SHAPE: 4,
	INDEPENDENT: true,
    COLOR: 0,
	BORDERLESS: true
};
exports.singleSymbol = {
    PARENT: ["genericTank"],
    SHAPE: 4,
	INDEPENDENT: true,
    COLOR: 16,
	TURRETS: [
        {
            /** SIZE     X       Y     ANGLE    ARC */
            POSITION: [9.1, 0, 0, 0, 360, 1],
            TYPE: "single1Symbol",
        },
    ],
};
exports.emptySymbol1 = {
    PARENT: ["genericTank"],
    SHAPE: 3,
	INDEPENDENT: true,
    COLOR: 16,
};

exports.auraBase = {
    TYPE: "aura",
    ACCEPTS_SCORE: false,
    FACING_TYPE: "smoothWithMotion",
    MOTION_TYPE: "withMaster",
    CAN_GO_OUTSIDE_ROOM: true,
    HITS_OWN_TYPE: "never",
    DAMAGE_EFFECTS: false,
    DIE_AT_RANGE: false,
    ALPHA: 0.3,
    CLEAR_ON_MASTER_UPGRADE: true,
    CAN_GO_OUTSIDE_ROOM: true,
    BODY: {
        SHIELD: 1e9,
        REGEN: 1e6,
        HEALTH: 1e9,
        DENSITY: 0,
        SPEED: 0,
        PUSHABILITY: 0,
    }
};
exports.aura = {
    PARENT: ["auraBase"],
    LABEL: "Aura",
    COLOR: 0,
    BODY: {
        DAMAGE: 0.25,
    },
};
exports.healAura = {
    PARENT: ["auraBase"],
    LABEL: "Heal Aura",
    HEALER: true,
    COLOR: 12,
    BODY: {
        DAMAGE: 0.25/3,
    },
};
exports.auraSymbol = {
    PARENT: ["genericTank"],
    CONTROLLERS: [["spin", {speed: -0.04}]],
    INDEPENDENT: true,
    COLOR: 0,
    SHAPE: [[-0.598,-0.7796],[-0.3817,-0.9053],[0.9688,-0.1275],[0.97,0.125],[-0.3732,0.9116],[-0.593,0.785]]
};
exports.whip1 = {
    PARENT: ["genericTank"],
    LABEL: "",
    COLOR: 16,
    BODY: {
        FOV: 3,
    },
    HAS_NO_RECOIL: true,
    TURRETS: [
        {
            POSITION: [20, 20, 0, 0, 360, 1],
            TYPE: "whip2",
        },
    ],
};
exports.whip2 = {
    PARENT: ["genericTank"],
    LABEL: "",
    COLOR: 16,
    BODY: {
        FOV: 3,
    },
    HAS_NO_RECOIL: true,
    TURRETS: [
        {
            POSITION: [20, 20, 0, 0, 360, 1],
            TYPE: "whip3",
        },
    ],
};
exports.whip3 = {
    PARENT: ["genericTank"],
    LABEL: "",
    COLOR: 16,
    BODY: {
        FOV: 3,
    },
    HAS_NO_RECOIL: true,
    TURRETS: [
        {
            POSITION: [20, 20, 0, 0, 360, 1],
            TYPE: "whip4",
        },
    ],
};
exports.whip4 = {
    PARENT: ["genericTank"],
    LABEL: "",
    COLOR: 16,
    BODY: {
        FOV: 3,
    },
    HAS_NO_RECOIL: true,
    TURRETS: [
		{
            POSITION: [40, 30, 0, 0, 360, 1],
            TYPE: "whipsmasher",
        },
    ],
};
exports.whipsmasher = {
    PARENT: ["genericTank"],
    LABEL: "",
    COLOR: 16,
    BODY: {
        PENETRATION: 1,
        DENSITY: 1.25,
        DAMAGE: 6,
        PUSHABILITY: 0.3,
		FOV: 3,
    },
    HAS_NO_RECOIL: false,
    TURRETS: [
		{
			POSITION: [23, 0, 0, 0, 360, 0],
            TYPE: "smasherBody",
		},
    ],
	GUNS: [
    {
      POSITION: [1, 15, 0.001, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.lancer]),
        TYPE: ["bulletLancer", { ALPHA: 0 }],
        AUTOFIRE: true,
      },
    },
    ],
};
exports.twinwhip1 = {
    PARENT: ["genericTank"],
    LABEL: "",
    COLOR: 16,
    BODY: {
        FOV: 3,
    },
    HAS_NO_RECOIL: true,
    TURRETS: [
        {
            POSITION: [20, 20, 0, 0, 360, 1],
            TYPE: "twinwhip2",
        },
    ],
};
exports.twinwhip2 = {
    PARENT: ["genericTank"],
    LABEL: "",
    COLOR: 16,
    BODY: {
        FOV: 3,
    },
    HAS_NO_RECOIL: true,
    TURRETS: [
        {
            POSITION: [20, 20, 0, 0, 360, 1],
            TYPE: "twinwhip3",
        },
    ],
};
exports.twinwhip3 = {
    PARENT: ["genericTank"],
    LABEL: "",
    COLOR: 16,
    BODY: {
        FOV: 3,
    },
    HAS_NO_RECOIL: true,
    TURRETS: [
        {
            POSITION: [20, 20, 0, 0, 360, 1],
            TYPE: "twinwhip4",
        },
    ],
};
exports.twinwhip4 = {
    PARENT: ["genericTank"],
    LABEL: "",
    COLOR: 16,
    BODY: {
        FOV: 3,
    },
    HAS_NO_RECOIL: true,
    TURRETS: [
        {
            POSITION: [40, 30, 0, 0, 360, 1],
            TYPE: "twinwhipsmasher",
        },
    ],
};
exports.twinwhipsmasher = {
    PARENT: ["genericTank"],
    LABEL: "",
    COLOR: 16,
    BODY: {
        PENETRATION: 1,
        DENSITY: 1.25,
        DAMAGE: 6,
        PUSHABILITY: 0.3,
		FOV: 3,
    },
    HAS_NO_RECOIL: false,
    TURRETS: [
		{
			POSITION: [23, 0, 0, 0, 360, 0],
            TYPE: "smasherBody",
		},
    ],
	GUNS: [
    {
      POSITION: [1, 15, 0.001, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.lancer, g.healthtwin, g.damageweak]),
        TYPE: ["bulletLancer", { ALPHA: 0 }],
        AUTOFIRE: true,
      },
    },
    ],
};
exports.spinlancer = {
    PARENT: ["genericTank"],
    LABEL: "",
    COLOR: 16,
    BODY: {
		FOV: 3,
    },
	CONTROLLERS: [["spin", {speed: 0.60}]],
    HAS_NO_RECOIL: false,
	GUNS: [
	{
      POSITION: [18, 15, 0.001, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.lancer, g.damage75]),
        TYPE: ["bulletLancer", { ALPHA: 0 }],
        AUTOFIRE: true,
      },
    },
    {
      POSITION: [22, 15, 0.001, 0, 0, 0, 0],
    },
    ],
};
exports.spinnerlancer = {
    PARENT: ["genericTank"],
    LABEL: "",
    COLOR: 16,
    BODY: {
		FOV: 3,
    },
	CONTROLLERS: [["spin", {speed: 0.60}]],
    HAS_NO_RECOIL: false,
	GUNS: [
	{
      POSITION: [18, 15, 0.001, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.lancer, g.damage75]),
        TYPE: ["bulletLancer", { ALPHA: 0 }],
        AUTOFIRE: true,
      },
    },
    {
      POSITION: [22, 15, 0.001, 0, 0, 0, 0],
    },
	{
      POSITION: [18, 15, 0.001, 0, 0, 120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.lancer, g.damage75]),
        TYPE: ["bulletLancer", { ALPHA: 0 }],
        AUTOFIRE: true,
      },
    },
    {
      POSITION: [22, 15, 0.001, 0, 0, 120, 0],
    },
	{
      POSITION: [18, 15, 0.001, 0, 0, 240, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.lancer, g.damage75]),
        TYPE: ["bulletLancer", { ALPHA: 0 }],
        AUTOFIRE: true,
      },
    },
    {
      POSITION: [22, 15, 0.001, 0, 0, 240, 0],
    },
    ],
};