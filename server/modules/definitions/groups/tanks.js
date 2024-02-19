const { combineStats, makeAuto, makeHybrid, makeOver, makeDeco, makeInfinityDeco, makeGuard, addAura, makeStormDeco, makeMulti } = require('../facilitators.js');
const { base, statnames, gunCalcNames, dfltskl, smshskl, rsmshrl } = require('../constants.js');
const generics = require('./generics.js');
const g = require('../gunvals.js');

exports.basicAura = addAura(1, 1.00);
exports.superAura = addAura(0.3, 5.00);
exports.SwissAura = addAura(0.3, 3, 0.3, 4);

// Whatever the hell is needed
exports.missile = {
    PARENT: ["bullet"],
    LABEL: "Missile",
    INDEPENDENT: true,
    BODY: {
        RANGE: 120,
    },
    GUNS: [
        {
            POSITION: [14, 6, 1, 0, -2, 130, 0],
            PROPERTIES: {
                AUTOFIRE: true,
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.skim,
                    g.doublereload,
                    g.lowpower,
                    g.muchmorerecoil,
                    g.morespeed,
                    g.morespeed,
                ]),
                TYPE: [
                    "bullet",
                    {
                        PERSISTS_AFTER_DEATH: true,
                    },
                ],
                STAT_CALCULATOR: gunCalcNames.thruster,
            },
        },
        {
            POSITION: [14, 6, 1, 0, 2, 230, 0],
            PROPERTIES: {
                AUTOFIRE: true,
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.skim,
                    g.doublereload,
                    g.lowpower,
                    g.muchmorerecoil,
                    g.morespeed,
                    g.morespeed,
                ]),
                TYPE: [
                    "bullet",
                    {
                        PERSISTS_AFTER_DEATH: true,
                    },
                ],
                STAT_CALCULATOR: gunCalcNames.thruster,
            },
        },
    ],
};
exports.hypermissile = {
    PARENT: ["missile"],
    GUNS: [
        {
            POSITION: [14, 6, 1, 0, -2, 150, 0],
            PROPERTIES: {
                AUTOFIRE: true,
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    {reload: 3},
                ]),
                TYPE: [
                    "bullet",
                    {
                        PERSISTS_AFTER_DEATH: true,
                    },
                ],
                STAT_CALCULATOR: gunCalcNames.thruster,
            },
        },
        {
            POSITION: [14, 6, 1, 0, 2, 210, 0],
            PROPERTIES: {
                AUTOFIRE: true,
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    {reload: 3},
                ]),
                TYPE: [
                    "bullet",
                    {
                        PERSISTS_AFTER_DEATH: true,
                    },
                ],
                STAT_CALCULATOR: gunCalcNames.thruster,
            },
        },
        {
            POSITION: [14, 6, 1, 0, -2, 90, 0.5],
            PROPERTIES: {
                AUTOFIRE: true,
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    {reload: 3},
                ]),
                TYPE: [
                    "bullet",
                    {
                        PERSISTS_AFTER_DEATH: true,
                    },
                ],
            },
        },
        {
            POSITION: [14, 6, 1, 0, 2, 270, 0.5],
            PROPERTIES: {
                AUTOFIRE: true,
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    {reload: 3},
                ]),
                TYPE: [
                    "bullet",
                    {
                        PERSISTS_AFTER_DEATH: true,
                    },
                ],
            },
        },
    ],
};
exports.minimissile = {
    PARENT: ["missile"],
    GUNS: [
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [14, 6, 1, 0, 0, 180, 0],
            PROPERTIES: {
                AUTOFIRE: true,
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.skim,
                    g.doublereload,
                    g.lowpower,
                    g.muchmorerecoil,
                    g.morespeed,
                ]),
                TYPE: ["bullet", { PERSISTS_AFTER_DEATH: true }],
                STAT_CALCULATOR: gunCalcNames.thruster,
            },
        },
    ],
};
exports.spinmissile = {
    PARENT: ["bullet"],
    LABEL: "Missile",
    INDEPENDENT: !0,
    BODY: {
        RANGE: 120,
    },
    FACING_TYPE: "fastspin",
    GUNS: [
        {
            POSITION: [14, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                AUTOFIRE: !0,
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.skim,
                    g.doublereload,
                    g.lowpower,
                    g.morereload,
                    g.morespeed,
                ]),
                TYPE: [
                    "bullet",
                    {
                        PERSISTS_AFTER_DEATH: !0,
                    },
                ],
                STAT_CALCULATOR: gunCalcNames.thruster,
            },
        },
        {
            POSITION: [14, 8, 1, 0, 0, 180, 0],
            PROPERTIES: {
                AUTOFIRE: !0,
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.skim,
                    g.doublereload,
                    g.lowpower,
                    g.morereload,
                    g.morespeed,
                ]),
                TYPE: [
                    "bullet",
                    {
                        PERSISTS_AFTER_DEATH: !0,
                    },
                ],
                STAT_CALCULATOR: gunCalcNames.thruster,
            },
        },
    ],
};
exports.hyperspinmissile = {
    PARENT: ["bullet"],
    LABEL: "Missile",
    INDEPENDENT: !0,
    BODY: {
        RANGE: 120,
    },
    FACING_TYPE: "fastspin",
    GUNS: [
        {
            POSITION: [14, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                AUTOFIRE: !0,
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.skim,
                    g.doublereload,
                    g.lowpower,
                    g.morereload,
                    g.morespeed,
                ]),
                TYPE: [
                    "bullet",
                    {
                        PERSISTS_AFTER_DEATH: !0,
                    },
                ],
                STAT_CALCULATOR: gunCalcNames.thruster,
            },
        },
        {
            POSITION: [14, 8, 1, 0, 0, 180, 0],
            PROPERTIES: {
                AUTOFIRE: !0,
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.skim,
                    g.doublereload,
                    g.lowpower,
                    g.morereload,
                    g.morespeed,
                ]),
                TYPE: [
                    "bullet",
                    {
                        PERSISTS_AFTER_DEATH: !0,
                    },
                ],
                STAT_CALCULATOR: gunCalcNames.thruster,
            },
        },
        {
            POSITION: [14, 8, 1, 0, 0, 90, 0],
            PROPERTIES: {
                AUTOFIRE: !0,
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.skim,
                    g.doublereload,
                    g.lowpower,
                    g.morereload,
                    g.morespeed,
                ]),
                TYPE: [
                    "bullet",
                    {
                        PERSISTS_AFTER_DEATH: !0,
                    },
                ],
                STAT_CALCULATOR: gunCalcNames.thruster,
            },
        },
        {
            POSITION: [14, 8, 1, 0, 0, 270, 0],
            PROPERTIES: {
                AUTOFIRE: !0,
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.skim,
                    g.doublereload,
                    g.lowpower,
                    g.morereload,
                    g.morespeed,
                ]),
                TYPE: [
                    "bullet",
                    {
                        PERSISTS_AFTER_DEATH: !0,
                    },
                ],
                STAT_CALCULATOR: gunCalcNames.thruster,
            },
        },
    ],
};

exports.hive = {
    PARENT: ["bullet"],
    LABEL: "Hive",
    BODY: {
        RANGE: 90,
        FOV: 0.5,
    },
    FACING_TYPE: "turnWithSpeed",
    INDEPENDENT: true,
    CONTROLLERS: ["alwaysFire", "nearestDifferentMaster", "targetSelf"],
    AI: {
        NO_LEAD: true,
    },
    GUNS: [
        {
            POSITION: [7, 9.5, 0.6, 7, 0, 108, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees, g.damagex2, g.damagex15]),
                TYPE: "bee",
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [7, 9.5, 0.6, 7, 0, 180, 0.2],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees, g.damagex2, g.damagex15]),
                TYPE: "bee",
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [7, 9.5, 0.6, 7, 0, 252, 0.4],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees, g.damagex2, g.damagex15]),
                TYPE: "bee",
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [7, 9.5, 0.6, 7, 0, 324, 0.6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees, g.damagex2, g.damagex15]),
                TYPE: "bee",
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [7, 9.5, 0.6, 7, 0, 36, 0.8],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees, g.damagex2, g.damagex15]),
                TYPE: "bee",
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
    ],
};
exports.snake = {
    PARENT: ["bullet"],
    LABEL: "Snake",
    INDEPENDENT: true,
    BODY: {
        RANGE: 120,
    },
    GUNS: [
        {
            POSITION: [6, 12, 1.4, 8, 0, 180, 0],
            PROPERTIES: {
                AUTOFIRE: true,
                STAT_CALCULATOR: gunCalcNames.thruster,
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.sniper,
                    g.hunter,
                    g.hunter2,
                    g.snake,
                    g.snakeskin,
                ]),
                TYPE: [
                    "bullet",
                    {
                        PERSISTS_AFTER_DEATH: true,
                    },
                ],
            },
        },
        {
            POSITION: [10, 12, 0.8, 8, 0, 180, 0.5],
            PROPERTIES: {
                AUTOFIRE: true,
                NEGATIVE_RECOIL: true,
                STAT_CALCULATOR: gunCalcNames.thruster,
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.sniper,
                    g.hunter,
                    g.hunter2,
                    g.snake,
                ]),
                TYPE: [
                    "bullet",
                    {
                        PERSISTS_AFTER_DEATH: true,
                    },
                ],
            },
        },
    ],
};
exports.rocketeerMissile = {
    PARENT: ["bullet"],
    LABEL: "Missile",
    BODY: {
        RANGE: 120,
    },
    GUNS: [
        {
            POSITION: [16.5, 10, 1.5, 0, 0, 180, 7.5],
            PROPERTIES: {
                AUTOFIRE: true,
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.missileTrail,
                    g.rocketeerMissileTrail,
                ]),
                TYPE: [
                    "bullet",
                    {
                        PERSISTS_AFTER_DEATH: true,
                    },
                ],
                STAT_CALCULATOR: gunCalcNames.thruster,
            },
        },
    ],
};

exports.surgeonPillboxTurret = {
    PARENT: ["genericTank"],
    LABEL: "",
    COLOR: 16,
    BODY: {
        FOV: 3,
    },
    HAS_NO_RECOIL: true,
    CONTROLLERS: [["spin", { independent: true, speed: 0.08 }]],
    TURRETS: [
        {
            POSITION: [13, 0, 0, 0, 360, 1],
            TYPE: "healerSymbol",
        },
    ],
    GUNS: [
        {
            POSITION: [17, 11, 1, 0, 0, 90, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.healer, g.turret]),
                TYPE: "healerBullet",
                AUTOFIRE: true,
            },
        },
        {
            POSITION: [14, 11, 1, 0, 0, 90, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.healer, g.turret]),
                TYPE: "healerBullet",
                AUTOFIRE: true,
            },
        },
        {
            POSITION: [17, 11, 1, 0, 0, 270, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.healer, g.turret]),
                TYPE: "healerBullet",
                AUTOFIRE: true,
            },
        },
        {
            POSITION: [14, 11, 1, 0, 0, 270, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.healer, g.turret]),
                TYPE: "healerBullet",
                AUTOFIRE: true,
            },
        },
    ],
};
exports.trapTurreted = {
    LABEL: "trapTurreted",
    PARENT: ["trap"],
    DIE_AT_RANGE: true,
    TURRETS: [
        {
            POSITION: [11, 0, 0, 0, 360, 1],
            TYPE: "autotrapTurreted",
        },
    ],
};
exports.trapTripleTurreted = {
    LABEL: "trapTurreted",
    PARENT: ["trap"],
    DIE_AT_RANGE: true,
    TURRETS: [
        {
            POSITION: [11, 0, 0, 0, 360, 1],
            TYPE: "autotrapTripleTurreted",
        },
    ],
};
exports.trapTurretedPawn = {
    LABEL: "trapTurreted",
    PARENT: ["trap"],
    DIE_AT_RANGE: true,
    TURRETS: [
        {
            POSITION: [11, 0, 0, 0, 360, 1],
            TYPE: "autotrapTurretedPawn",
        },
    ],
};
exports.autotrapTurreted = {
    PARENT: ["genericTank"],
    LABEL: "",
    COLOR: 16,
    BODY: {
        FOV: 0.75,
    },
    HAS_NO_RECOIL: true,
	CONTROLLERS: ["nearestDifferentMaster"],
	INDEPENDENT: true,
    GUNS: [
        {
            POSITION: [22, 11, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.damagetwin, g.damagetwin, g.damagetwin, g.damagetwin]),
                TYPE: "bullet",
            },
        },
    ],
};
exports.autotrapTripleTurreted = {
    PARENT: ["genericTank"],
    LABEL: "",
    COLOR: 16,
    BODY: {
        FOV: 0.75,
    },
    HAS_NO_RECOIL: true,
	CONTROLLERS: ["nearestDifferentMaster"],
	INDEPENDENT: true,
    GUNS: [
        {
            POSITION: [22, 11, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.damagetwin, g.damagetwin, g.damagetwin, g.damagetwin, g.damagetriple]),
                TYPE: "bullet",
            },
        },
    ],
};
exports.autotrapTurretedPawn = {
    PARENT: ["genericTank"],
    LABEL: "",
    COLOR: 16,
    BODY: {
        FOV: 0.75,
    },
    HAS_NO_RECOIL: true,
	CONTROLLERS: ["nearestDifferentMaster"],
	INDEPENDENT: true,
    GUNS: [
        {
            POSITION: [22, 11, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.damagetwin, g.damagetwin, g.damagetwin, g.damagetwin, g.damagetwin]),
                TYPE: "bullet",
            },
        },
    ],
};
exports.surgeonPillbox = {
    LABEL: "Pillbox",
    PARENT: ["trap"],
    SHAPE: -6,
    MOTION_TYPE: "motor",
    CONTROLLERS: ["goToMasterTarget", "nearestDifferentMaster"],
    INDEPENDENT: true,
    BODY: {
        SPEED: 1,
        DENSITY: 5,
        DAMAGE: 0
    },
    DIE_AT_RANGE: true,
    GUNS: [
        {
            POSITION: [11, 0, 0, 0, 360, 1],
            TYPE: "surgeonPillboxTurret",
        },
    ],
};
exports.doctorDrone = {
    PARENT: ["drone"],
    HITS_OWN_TYPE: "normal",
    TURRETS: [
        {
            POSITION: [13, 0, 0, 0, 360, 1],
            TYPE: "healerSymbol",
        },
    ],
};

exports.sunchip = {
    PARENT: ["drone"],
    SHAPE: 4,
    NECRO: true,
    HITS_OWN_TYPE: "hard",
    BODY: {
        FOV: 0.5,
    },
    AI: {
        BLIND: true,
        FARMER: true,
    },
    DRAW_HEALTH: false,
};
exports.eggchip = {
    PARENT: ["sunchip"],
    NECRO: [0],
    SHAPE: 0,
};
exports.autosunchip = {
    PARENT: ["sunchip"],
    AI: {
        BLIND: true,
        FARMER: true,
    },
    INDEPENDENT: true,
};
exports.autoeggchip = {
    PARENT: ["eggchip"],
    AI: {
        BLIND: true,
        FARMER: true,
    },
    INDEPENDENT: true,
};
exports.pentachip = {
    PARENT: ["sunchip"],
    SHAPE: 5,
};
exports.summonerDrone = {
    PARENT: ["sunchip"],
    NECRO: false,
};
exports.gunchip = {
    PARENT: ["drone"],
    SHAPE: -2,
    NECRO: true,
    HITS_OWN_TYPE: "hard",
    BODY: {
        FOV: 0.5,
    },
    AI: {
        BLIND: true,
        FARMER: true,
    },
    DRAW_HEALTH: false,
};

exports.minion = {
    PARENT: ["genericTank"],
    LABEL: "Minion",
    TYPE: "minion",
    DAMAGE_CLASS: 0,
    HITS_OWN_TYPE: "hardWithBuffer",
    FACING_TYPE: "smoothToTarget",
    BODY: {
        FOV: 0.5,
        SPEED: 4,
        ACCELERATION: 0.4,
        HEALTH: 5,
        SHIELD: 0,
        DAMAGE: 1.2,
        RESIST: 1,
        PENETRATION: 1,
        DENSITY: 0.4,
    },
    AI: {
        BLIND: true,
    },
    DRAW_HEALTH: false,
    CLEAR_ON_MASTER_UPGRADE: true,
    GIVE_KILL_MESSAGE: false,
    CONTROLLERS: [
        "nearestDifferentMaster",
        "mapAltToFire",
        "minion",
        "canRepel",
        "hangOutNearMaster",
    ],
    GUNS: [
        {
            POSITION: [17, 9, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.minion]),
                WAIT_TO_CYCLE: true,
                TYPE: "bullet",
            },
        },
    ],
};
exports.hypnotismmini = {
    PARENT: ["genericTank"],
    LABEL: "Hypnotismmini",
    DAMAGE_CLASS: 0,
    HITS_OWN_TYPE: "never",
    FACING_TYPE: "smoothToTarget",
    BODY: {
        FOV: 0.5,
        SPEED: 2.5,
        ACCELERATION: 0.4,
        HEALTH: 8,
        SHIELD: 0,
        DAMAGE: 0.5,
        RESIST: 1,
        PENETRATION: 0.75,
        DENSITY: 0.4,
    },
    AI: {
        BLIND: true,
    },
    DRAW_HEALTH: true,
    CLEAR_ON_MASTER_UPGRADE: true,
    CONTROLLERS: [
        "nearestDifferentMaster",
        "mapAltToFire",
        "minion",
        "canRepel",
        "hangOutNearMaster",
    ],
    TURRETS: [
        {
            POSITION: [23, 0, 0, 0, 360, 0],
            TYPE: ["hypnotismBody"],
        }
    ],
    GUNS: [
		{
            POSITION: [18, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.damagetwin, g.damagetwin, g.damageweak, g.damageweak]),
                TYPE: "bullet",
            },
        },
		{
            POSITION: [18, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.fakedebuff, g.realfake]),
                TYPE: "bullet",
				COLOR: 18,
				ALPHA: 0.25
            },
        },
	],
	ALPHA: 0.75
};
exports.sleepparalysismini = {
    PARENT: ["genericTank"],
    LABEL: "Sleepparalysismini",
    DAMAGE_CLASS: 0,
    HITS_OWN_TYPE: "never",
    FACING_TYPE: "smoothToTarget",
    BODY: {
        FOV: 0.5,
        SPEED: 2.5,
        ACCELERATION: 0.4,
        HEALTH: 8,
        SHIELD: 0,
        DAMAGE: 0.5,
        RESIST: 1,
        PENETRATION: 0.75,
        DENSITY: 0.4,
    },
    AI: {
        BLIND: true,
    },
    DRAW_HEALTH: true,
    CLEAR_ON_MASTER_UPGRADE: true,
    CONTROLLERS: [
        "nearestDifferentMaster",
        "mapAltToFire",
        "minion",
        "canRepel",
        "hangOutNearMaster",
    ],
    TURRETS: [
        {
            POSITION: [23, 0, 0, 0, 360, 0],
            TYPE: ["hypnotismBody"],
        }
    ],
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [6, 11, 1.3, 7, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.damagetwin, g.damagetwin, g.damageweak, g.morereload]),
                TYPE: "drone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                MAX_CHILDREN: 6,
            },
        },
    ],
	ALPHA: 0.75
};
exports.miniontwin = {
    PARENT: ["genericTank"],
    LABEL: "Minion",
    TYPE: "minion",
    DAMAGE_CLASS: 0,
    HITS_OWN_TYPE: "hardWithBuffer",
    FACING_TYPE: "smoothToTarget",
    BODY: {
        FOV: 0.5,
        SPEED: 4,
        ACCELERATION: 0.4,
        HEALTH: 3,
        SHIELD: 0,
        DAMAGE: 1.0,
        RESIST: 1,
        PENETRATION: 1,
        DENSITY: 0.4,
    },
    AI: {
        BLIND: true,
    },
    DRAW_HEALTH: false,
    CLEAR_ON_MASTER_UPGRADE: true,
    GIVE_KILL_MESSAGE: false,
    CONTROLLERS: [
        "nearestDifferentMaster",
        "mapAltToFire",
        "minion",
        "canRepel",
        "hangOutNearMaster",
    ],
    GUNS: [
        {
            POSITION: [17, 9, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.minion, g.twin]),
                WAIT_TO_CYCLE: true,
                TYPE: "bullet",
            },
        },
    ],
};
exports.miniontwintwin = {
    PARENT: ["genericTank"],
    LABEL: "Minion",
    TYPE: "minion",
    DAMAGE_CLASS: 0,
    HITS_OWN_TYPE: "hardWithBuffer",
    FACING_TYPE: "smoothToTarget",
    BODY: {
        FOV: 0.5,
        SPEED: 4,
        ACCELERATION: 0.4,
        HEALTH: 3,
        SHIELD: 0,
        DAMAGE: 1.0,
        RESIST: 1,
        PENETRATION: 1,
        DENSITY: 0.4,
    },
    AI: {
        BLIND: true,
    },
    DRAW_HEALTH: false,
    CLEAR_ON_MASTER_UPGRADE: true,
    GIVE_KILL_MESSAGE: false,
    CONTROLLERS: [
        "nearestDifferentMaster",
        "mapAltToFire",
        "minion",
        "canRepel",
        "hangOutNearMaster",
    ],
    GUNS: [
        {
            POSITION: [17, 9, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.minion, g.twin]),
                WAIT_TO_CYCLE: true,
                TYPE: "bullet",
            },
        },
		{
            POSITION: [15, 6, 1, 0, 0, 90, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.minion, g.twin, g.twin, g.bent, g.healer]),
                TYPE: "healerBullet",
            },
        },
		{
            POSITION: [15, 6, 1, 0, 0, 270, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.minion, g.twin, g.twin, g.bent, g.healer]),
                TYPE: "healerBullet",
            },
        },
    ],
};
exports.megaMinion = {
    PARENT: ["minion"],
    LABEL: "Mega Minion",
    BODY: {
        ACCELERATION: base.ACCEL * 0.8,
    },
    GUNS: [
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [19.5, 13, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.minion]),
                TYPE: "bullet",
            },
        },
    ],
};
exports.tinyMinion = {
    PARENT: ["minion"],
    LABEL: "Tiny Minion",
    ACCEPTS_SCORE: false,
    SHAPE: 0,
    MOTION_TYPE: 'swarm',
    CRAVES_ATTENTION: true,
    BODY: {
        ACCELERATION: 3,
        PENETRATION: 1.5,
        HEALTH: 0.35 * 0.5,
        DAMAGE: 2.25,
        RESIST: 1.6,
        RANGE: 300,
        DENSITY: 12,
        PUSHABILITY: 0.5,
        FOV: 1.5,
    },
    AI: {
        BLIND: true,
    },
    GUNS: [ { /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
        POSITION: [    17,         9,            1,            0,            0,            0,            0,     ], 
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.minion, g.lowpower]),
            WAIT_TO_CYCLE: true,
            TYPE: "bullet",
        }, }, 
    ],
    DIE_AT_RANGE: true,
    BUFF_VS_FOOD: true,
};
exports.setTrap = {
    LABEL: "Set Trap",
    PARENT: ["trap"],
    SHAPE: -4,
    MOTION_TYPE: "motor",
    CONTROLLERS: ["goToMasterTarget"],
    BODY: {
        SPEED: 1,
        DENSITY: 5,
    },
};
exports.unsetTrap = {
    LABEL: "Set Trap",
    PARENT: ["trap"],
    SHAPE: -4,
    MOTION_TYPE: "motor",
    BODY: {
        SPEED: 1,
        DENSITY: 5,
    },
};
exports.boomerang = {
    LABEL: "Boomerang",
    PARENT: ["trap"],
    CONTROLLERS: ["boomerang"],
    MOTION_TYPE: "motor",
    HITS_OWN_TYPE: "never",
    SHAPE: -5,
    BODY: {
        SPEED: 1.25,
        RANGE: 120,
    },
};
exports.masterBullet = {
    PARENT: ["trap"],
    SHAPE: 0,
    GUNS: [
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [18, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.flank,
                    g.tri,
                    g.trifront,
                    g.tonsmorrecoil,
                    g.minion,
                    g.weak,
                ]),
                TYPE: "bullet",
                LABEL: "Front",
                AUTOFIRE: true,
            },
        },
        {
            POSITION: [13, 8, 1, 0, -1, 140, 0.6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.flank,
                    g.tri,
                    g.thruster,
                    g.minion,
                    g.weak,
                ]),
                TYPE: "bullet",
                LABEL: "Thruster",
                AUTOFIRE: true,
            },
        },
        {
            POSITION: [13, 8, 1, 0, 1, 220, 0.6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.flank,
                    g.tri,
                    g.thruster,
                    g.minion,
                    g.weak,
                ]),
                TYPE: "bullet",
                LABEL: "Thruster",
                AUTOFIRE: true,
            },
        },
        {
            POSITION: [16, 8, 1, 0, 0, 150, 0.1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.flank,
                    g.tri,
                    g.thruster,
                    g.minion,
                    g.weak,
                ]),
                TYPE: "bullet",
                LABEL: "Thruster",
                AUTOFIRE: true,
            },
        },
        {
            POSITION: [16, 8, 1, 0, 0, 210, 0.1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.flank,
                    g.tri,
                    g.thruster,
                    g.minion,
                    g.weak,
                ]),
                TYPE: "bullet",
                LABEL: "Thruster",
                AUTOFIRE: true,
            },
        },
    ],
};

exports.autoTankGun = {
    PARENT: ["genericTank"],
    LABEL: "",
    BODY: {
        FOV: 3,
    },
    CONTROLLERS: ["canRepel", "onlyAcceptInArc", "mapAltToFire", "nearestDifferentMaster"],
    COLOR: 16,
    GUNS: [
        {
            POSITION: [22, 10, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.auto]),
                TYPE: "bullet",
            },
        },
    ],
};
exports.autoLancerGun = {
    PARENT: ["genericTank"],
    LABEL: "",
    BODY: {
        FOV: 3,
    },
    CONTROLLERS: ["canRepel", "onlyAcceptInArc", "mapAltToFire", "nearestDifferentMaster"],
    COLOR: 16,
    GUNS: [
        {
      POSITION: [30, 15, 0.001, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.lancer]),
        TYPE: ["bullet", { ALPHA: 0 }],
        AUTOFIRE: true,
      },
    },
    {
      POSITION: [35, 15, 0.001, 0, 0, 0, 0],
    },
    ],
};
exports.autoDesmosGun = {
    PARENT: ["genericTank"],
    LABEL: "",
    BODY: {
        FOV: 3,
    },
    CONTROLLERS: ["canRepel", "onlyAcceptInArc", "mapAltToFire", "nearestDifferentMaster"],
    COLOR: 16,
    GUNS: [
        {
            POSITION: [20, 10, 0.8, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.desmos, g.damageweakweak]),
                TYPE: ["bullet", {MOTION_TYPE: "desmos"}]
            }
        },
        {
            POSITION: [3.75, 10, 2.125, 1.25, -6.25, 90, 0]
        },
        {
            POSITION: [3.75, 10, 2.125, 1.25, 6.25, -90, 0]
        }
    ],
};
exports.autoTwinDesmosGun = {
    PARENT: ["genericTank"],
    LABEL: "",
    BODY: {
        FOV: 3,
    },
    CONTROLLERS: ["canRepel", "onlyAcceptInArc", "mapAltToFire", "nearestDifferentMaster"],
    COLOR: 16,
    GUNS: [
        {
            POSITION: [20, 10, 0.8, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.desmos, g.damageweakweak, g.damagetwin]),
                TYPE: ["bullet", {MOTION_TYPE: "desmos"}]
            }
        },
        {
            POSITION: [3.75, 10, 2.125, 1.25, -6.25, 90, 0]
        },
        {
            POSITION: [3.75, 10, 2.125, 1.25, 6.25, -90, 0]
        }
    ],
};
exports.autoTwinDesmosGun2 = {
    PARENT: ["genericTank"],
    LABEL: "",
    BODY: {
        FOV: 3,
    },
    CONTROLLERS: ["canRepel", "onlyAcceptInArc", "mapAltToFire", "nearestDifferentMaster"],
    COLOR: 16,
    GUNS: [
        {
            POSITION: [20, 10, 0.8, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.desmos, g.damageweakweak, g.damagetwin]),
                TYPE: ["bullet", {MOTION_TYPE: ["desmos", {invert: true}]}],
            }
        },
        {
            POSITION: [3.75, 10, 2.125, 1.25, -6.25, 90, 0]
        },
        {
            POSITION: [3.75, 10, 2.125, 1.25, 6.25, -90, 0]
        }
    ],
};
exports.autoTwinLancerGun = {
    PARENT: ["genericTank"],
    LABEL: "",
    BODY: {
        FOV: 3,
    },
    CONTROLLERS: ["canRepel", "onlyAcceptInArc", "mapAltToFire", "nearestDifferentMaster"],
    COLOR: 16,
    GUNS: [
        {
      POSITION: [30, 15, 0.001, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.lancer, g.damagetriple, g.damagex2]),
        TYPE: ["bullet", { ALPHA: 0 }],
        AUTOFIRE: true,
      },
    },
    {
      POSITION: [35, 15, 0.001, 0, 0, 0, 0],
    },
    ],
};
exports.bansheegun = {
    PARENT: ["genericTank"],
    LABEL: "",
    CONTROLLERS: ["canRepel", "onlyAcceptInArc", "mapAltToFire", "nearestDifferentMaster"],
    COLOR: 16,
    INDEPENDENT: true,
    GUNS: [
        {
            POSITION: [26, 10, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.auto, g.lessreload]),
                TYPE: "bullet",
            },
        },
    ],
};
exports.auto4gun = {
    PARENT: ["genericTank"],
    LABEL: "",
    BODY: {
        FOV: 2,
    },
    CONTROLLERS: ["canRepel", "onlyAcceptInArc", "mapAltToFire", "nearestDifferentMaster"],
    COLOR: 16,
    GUNS: [
        {
            POSITION: [16, 4, 1, 0, -3.5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.auto, g.gunner, g.twin, g.power, g.slow]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [16, 4, 1, 0, 3.5, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.auto, g.gunner, g.twin, g.power, g.slow]),
                TYPE: "bullet",
            },
        },
    ],
};
exports.bigauto4gun = {
    PARENT: ["genericTank"],
    LABEL: "",
    CONTROLLERS: [
        "canRepel",
        "onlyAcceptInArc",
        "mapAltToFire",
        "nearestDifferentMaster",
    ],
    COLOR: 16,
    GUNS: [
        {
            POSITION: [14, 5, 1, 0, -4.5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.auto,
                    g.gunner,
                    g.twin,
                    g.twin,
                    g.power,
                    g.halfreload,
                ]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [14, 5, 1, 0, 4.5, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.auto,
                    g.gunner,
                    g.twin,
                    g.twin,
                    g.power,
                    g.halfreload,
                ]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [16, 5, 1, 0, 0, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.auto,
                    g.gunner,
                    g.twin,
                    g.twin,
                    g.power,
                    g.halfreload,
                ]),
                TYPE: "bullet",
            },
        },
    ],
};
exports.megaAutoTankgun = {
    PARENT: ["genericTank"],
    LABEL: "",
    BODY: {
        FOV: 2,
        SPEED: 0.9,
    },
    CONTROLLERS: ["canRepel", "onlyAcceptInArc", "mapAltToFire", "nearestDifferentMaster"],
    COLOR: 16,
    GUNS: [
        {
            POSITION: [22, 14, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.auto]),
                TYPE: "bullet",
            },
        },
    ],
};

exports.autoTurret = {
    PARENT: ["genericTank"],
    LABEL: "Turret",
    BODY: {
        FOV: 0.8,
    },
    COLOR: 16,
    GUNS: [
        {
            POSITION: [22, 10, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.morerecoil, g.turret]),
                TYPE: "bullet",
            },
        },
    ],
};
exports.droneAutoTurret = {
    PARENT: ["genericTank"],
    LABEL: "Turret",
    BODY: {
        FOV: 0.8,
    },
    COLOR: 16,
    GUNS: [
        {
            POSITION: [22, 10, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.morerecoil, g.turret, g.overdrive]),
                TYPE: "bullet",
            },
        },
    ],
};
exports.autoSmasherTurret = {
    PARENT: ["genericTank"],
    LABEL: "Turret",
    COLOR: 16,
    GUNS: [
        {
            POSITION: [20, 6, 1, 0, 5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.morerecoil, g.turret, g.fast, g.mach, g.pound, g.morereload, g.morereload]),
                TYPE: "bullet",
                STAT_CALCULATOR: gunCalcNames.fixedReload,
            },
        },
        {
            POSITION: [20, 6, 1, 0, -5, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.morerecoil, g.turret, g.fast, g.mach, g.pound, g.morereload, g.morereload]),
                TYPE: "bullet",
                STAT_CALCULATOR: gunCalcNames.fixedReload,
            },
        },
    ],
};
exports.architectGun = {
    PARENT: ["genericTank"],
    LABEL: "",
    COLOR: 16,
    GUNS: [
        {
            POSITION: [20, 16, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [2, 16, 1.1, 20, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.block, g.auto, g.damageweakweak, g.damageweakweak, g.damageweakweak]),
                TYPE: "setTrap",
            },
        },
    ],
};

exports.pillboxTurret = {
    PARENT: ["genericTank"],
    LABEL: "",
    COLOR: 16,
    BODY: {
        FOV: 2,
    },
    HAS_NO_RECOIL: true,
	CONTROLLERS: ["goToMasterTarget", "nearestDifferentMaster"],
	INDEPENDENT: true,
    GUNS: [
        {
            POSITION: [22, 11, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.minionx1i5, g.turret, g.power, g.auto, g.notdense]),
                TYPE: "bullet",
            },
        },
    ],
};
exports.autoCastlingGun = {
    PARENT: ["genericTank"],
    LABEL: "",
    COLOR: 16,
    BODY: {
        FOV: 0.75,
    },
    HAS_NO_RECOIL: true,
	CONTROLLERS: ["nearestDifferentMaster"],
	INDEPENDENT: true,
    GUNS: [
        {
            POSITION: [22, 11, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.damage75]),
                TYPE: "bullet",
            },
        },
    ],
};
exports.autoLaserGun = {
    PARENT: ["genericTank"],
    LABEL: "",
    COLOR: 16,
    BODY: {
        FOV: 0.75,
    },
    HAS_NO_RECOIL: true,
	CONTROLLERS: ["nearestDifferentMaster"],
	INDEPENDENT: true,
    GUNS: [
		{
            POSITION: [20, 7, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.laser, g.damagetwin, g.damage75, g.truebig, g.truebig]),
                TYPE: "laser",
				COLOR: -1,
				ALPHA: 0.7,
				BORDERLESS: false
            },
        },
		{
            POSITION: [1, 8, 1, 22, 0, 0, 0],
        },
		{
            POSITION: [1, 8, 1, 18, 0, 0, 0],
        },
		{
            POSITION: [24, 2, 1, 0, 4, 0, 0],
        },
		{
            POSITION: [24, 2, 1, 0, -4, 0, 0],
        },
		{
            POSITION: [12, 12, 1, 0, 0, 0, 0],
        },
    ],
};
exports.autoVirusGun = {
    PARENT: ["genericTank"],
    LABEL: "",
    COLOR: 16,
    BODY: {
        FOV: 0.75,
    },
    HAS_NO_RECOIL: true,
	CONTROLLERS: ["nearestDifferentMaster"],
	INDEPENDENT: true,
    GUNS: [
        {
            POSITION: [22, 11, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.damagetwin, g.damagetwin, g.damagetwin, g.damage75]),
                TYPE: "bullet",
            },
        },
    ],
};
exports.pillbox = {
    LABEL: "Pillbox",
    PARENT: ["trap"],
    SHAPE: -4,
    MOTION_TYPE: "motor",
    CONTROLLERS: ["goToMasterTarget", "nearestDifferentMaster"],
    INDEPENDENT: true,
    BODY: {
        SPEED: 1,
        DENSITY: 5,
    },
    DIE_AT_RANGE: true,
    TURRETS: [
        {
            POSITION: [11, 0, 0, 0, 360, 1],
            TYPE: "pillboxTurret",
        },
    ],
};
exports.finitydecopillbox = {
	PARENT: ["genericTank"],
    SHAPE: -4,
	LABEL: "",
	COLOR: 16,
};
exports.finitypillbox = {
    LABEL: "Pillbox",
    PARENT: ["trap"],
    SHAPE: -4,
    MOTION_TYPE: "motor",
    CONTROLLERS: ["goToMasterTarget", "nearestDifferentMaster"],
    INDEPENDENT: true,
    BODY: {
		HEALTH: 0.05,
        SPEED: 1,
        DENSITY: 5,
    },
    DIE_AT_RANGE: true,
    TURRETS: [
		{
            POSITION: [17, 0, 0, 0, 360, 1],
            TYPE: "finitydecopillbox",
        },
        {
            POSITION: [11, 0, 0, 0, 360, 1],
            TYPE: "pillboxTurret",
        },
    ],
};
exports.autoSwarmGun = {
    PARENT: ["genericTank"],
    LABEL: "",
    COLOR: 16,
    BODY: {
        FOV: 0.75,
    },
    HAS_NO_RECOIL: true,
	CONTROLLERS: ["nearestDifferentMaster"],
	INDEPENDENT: true,
    GUNS: [
        {
            POSITION: [22, 11, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.damagetwin, g.damagetwin, g.damagetwin, g.damagetwin, g.damage75]),
                TYPE: "bullet",
            },
        },
    ],
};
exports.swarm = {
    LABEL: "Swarm Drone",
    TYPE: "swarm",
    ACCEPTS_SCORE: false,
    SHAPE: 3,
    MOTION_TYPE: "swarm",
    FACING_TYPE: "smoothWithMotion",
    CONTROLLERS: ["nearestDifferentMaster", "mapTargetToGoal"],
    CRAVES_ATTENTION: true,
    BODY: {
        ACCELERATION: 3,
        PENETRATION: 1.5,
        HEALTH: 0.175,
        DAMAGE: 2.25,
        SPEED: 4.5,
        RESIST: 1.6,
        RANGE: 225,
        DENSITY: 12,
        PUSHABILITY: 0.6,
        FOV: 1.5,
    },
    DIE_AT_RANGE: true,
    BUFF_VS_FOOD: true,
};
exports.turretedSwarm = {
    LABEL: "Swarm Drone",
    TYPE: "swarm",
    ACCEPTS_SCORE: false,
    SHAPE: 3,
    MOTION_TYPE: "swarm",
    FACING_TYPE: "smoothWithMotion",
    CONTROLLERS: ["nearestDifferentMaster", "mapTargetToGoal"],
    CRAVES_ATTENTION: true,
    BODY: {
        ACCELERATION: 3,
        PENETRATION: 1.5,
        HEALTH: 0.175,
        DAMAGE: 2.25,
        SPEED: 4.5,
        RESIST: 1.6,
        RANGE: 225,
        DENSITY: 12,
        PUSHABILITY: 0.6,
        FOV: 1.5,
    },
	TURRETS: [
        {
            POSITION: [11, 0, 0, 0, 360, 1],
            TYPE: "autoSwarmGun",
        },
    ],
    DIE_AT_RANGE: true,
    BUFF_VS_FOOD: true,
};
exports.autoswarm = {
    PARENT: ["swarm"],
    AI: {
        FARMER: true,
    },
    INDEPENDENT: true,
};
exports.autoturretedSwarm = {
    PARENT: ["turretedSwarm"],
    AI: {
        FARMER: true,
    },
    INDEPENDENT: true,
};
exports.autostormswarm = {
    PARENT: ["swarm"],
    AI: {
        FARMER: true,
    },
	BODY: {
        FOV: 3.0,
    },
    INDEPENDENT: true,
};
exports.bee = {
    PARENT: ["swarm"],
    PERSISTS_AFTER_DEATH: true,
    SHAPE: 4,
    LABEL: "Drone",
    HITS_OWN_TYPE: "hardWithBuffer",
};
exports.controllablebee = {
    PARENT: ["swarm"],
    PERSISTS_AFTER_DEATH: true,
    SHAPE: 4,
    LABEL: "Drone",
    HITS_OWN_TYPE: "hardWithBuffer",
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
	BUFF_VS_FOOD: true,
};
exports.homingBullet = {
    PARENT: ["autoswarm"],
    SHAPE: 0,
    BODY: {
        PENETRATION: 1,
        SPEED: 3.75,
        RANGE: 90,
        DENSITY: 1.25,
        HEALTH: 0.165,
        DAMAGE: 6,
        PUSHABILITY: 0.3,
    },
    CAN_GO_OUTSIDE_ROOM: true,
};

exports.smasherBody = {
    LABEL: "",
    CONTROLLERS: [["spin", { independent: true }]],
    COLOR: 9,
    SHAPE: 6,
    INDEPENDENT: true,
};
exports.landmineBody = {
    LABEL: "",
    CONTROLLERS: [["spin", { independent: true, speed: 0.08 }]],
    COLOR: 9,
    SHAPE: 6,
    INDEPENDENT: !0,
};
exports.spikeBody = {
    LABEL: "",
    CONTROLLERS: [["spin", { independent: true }]],
    COLOR: 9,
    SHAPE: 3,
    INDEPENDENT: true,
};
exports.weirdSpikeBody1 = {
    LABEL: "",
    CONTROLLERS: [["spin", { independent: true, speed: 0.08 }]],
    COLOR: 9,
    SHAPE: 3,
    INDEPENDENT: true,
};
exports.weirdSpikeBody2 = {
    LABEL: "",
    CONTROLLERS: [["spin", { independent: true, speed: -0.05 }]],
    COLOR: 9,
    SHAPE: 3,
    INDEPENDENT: true,
};

// BASIC TANK AND STARTING UPGRADES
exports.basic = {
    PARENT: ["genericTank"],
    LABEL: "Basic",
    BODY: {
        ACCELERATION: base.ACCEL * 1,
        SPEED: base.SPEED * 1,
        HEALTH: base.HEALTH * 1,
        DAMAGE: base.DAMAGE * 1,
        PENETRATION: base.PENETRATION * 1,
        SHIELD: base.SHIELD * 1,
        REGEN: base.REGEN * 1,
        FOV: base.FOV * 1,
        DENSITY: base.DENSITY * 1,
        PUSHABILITY: 1,
        HETERO: 3,
    },
    GUNS: [
        {
            POSITION: [18, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic]),
                TYPE: "bullet",
                COLOR: 16,
                LABEL: "",
                STAT_CALCULATOR: 0,
                WAIT_TO_CYCLE: false,
                AUTOFIRE: false,
                SYNCS_SKILLS: false,
                MAX_CHILDREN: 0,
                ALT_FIRE: false,
                NEGATIVE_RECOIL: false,
            },
        },
    ],
};
exports.twin = {
    PARENT: ["genericTank"],
    LABEL: "Twin",
    GUNS: [
        {
            POSITION: [20, 8, 1, 0, 5.5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [20, 8, 1, 0, -5.5, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
                TYPE: "bullet",
            },
        },
    ],
};
exports.sniper = {
    PARENT: ["genericTank"],
    LABEL: "Sniper",
    BODY: {
        FOV: 1.2 * base.FOV,
    },
    GUNS: [
        {
            POSITION: [24, 8.5, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper]),
                TYPE: "bullet",
            },
        },
    ],
};
exports.sunburn = {
    PARENT: ["genericTank"],
    LABEL: "Sunburn",
    BODY: {
        FOV: 1.2 * base.FOV,
    },
	TURRETS: [
        {
            POSITION: [9, 0, 0, 0, 360, 1],
            TYPE: "laserSymbol",
        },
    ],
    GUNS: [
        {
            POSITION: [20, 7, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.laser]),
                TYPE: "laser",
				COLOR: -1,
				ALPHA: 0.7,
				BORDERLESS: false
            },
        },
		{
            POSITION: [1, 8, 1, 22, 0, 0, 0],
        },
		{
            POSITION: [1, 8, 1, 18, 0, 0, 0],
        },
		{
            POSITION: [24, 2, 1, 0, 4, 0, 0],
        },
		{
            POSITION: [24, 2, 1, 0, -4, 0, 0],
        },
		{
            POSITION: [12, 12, 1, 0, 0, 0, 0],
        },
    ],
};
exports.lanser = {
    PARENT: ["genericTank"],
    LABEL: "Burnt-Out",
    BODY: {
        FOV: 1.2 * base.FOV,
    },
	TURRETS: [
        {
            POSITION: [9, 0, 0, 0, 360, 1],
            TYPE: "laserSymbol",
        },
    ],
    GUNS: [
        {
            POSITION: [20, 12, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.laser, g.lanser]),
                TYPE: "laser",
				COLOR: -1,
				ALPHA: 0.7,
				BORDERLESS: false
            },
        },
		{
            POSITION: [20, 2, 1, 0, 6, 0, 0],
        },
		{
            POSITION: [20, 2, 1, 0, -6, 0, 0],
        },
		{
            POSITION: [12, 16, 1, 0, 0, 0, 0],
        },
    ],
};
exports.laserfield = {
    PARENT: ["genericTank"],
    LABEL: "Laser Field",
    BODY: {
        FOV: 1.2 * base.FOV,
    },
	TURRETS: [
        {
            POSITION: [9, 0, 0, 0, 360, 1],
            TYPE: "laserSymbol",
        },
    ],
    GUNS: [
        {
            POSITION: [20, 7, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.laser, g.damage75]),
                TYPE: "laser",
				COLOR: -1,
				ALPHA: 0.7,
				BORDERLESS: false
            },
        },
		{
            POSITION: [1, 8, 1, 22, 0, 0, 0],
        },
		{
            POSITION: [1, 8, 1, 18, 0, 0, 0],
        },
		{
            POSITION: [24, 2, 1, 0, 4, 0, 0],
        },
		{
            POSITION: [24, 2, 1, 0, -4, 0, 0],
        },
		{
            POSITION: [12, 12, 1, 0, 0, 0, 0],
        },
		{
            POSITION: [20, 7, 1, 0, 0, 120, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.laser, g.damage75]),
                TYPE: "laser",
				COLOR: -1,
				ALPHA: 0.7,
				BORDERLESS: false
            },
        },
		{
            POSITION: [1, 8, 1, 22, 0, 120, 0],
        },
		{
            POSITION: [1, 8, 1, 18, 0, 120, 0],
        },
		{
            POSITION: [24, 2, 1, 0, 4, 120, 0],
        },
		{
            POSITION: [24, 2, 1, 0, -4, 120, 0],
        },
		{
            POSITION: [12, 12, 1, 0, 0, 120, 0],
        },
		{
            POSITION: [20, 7, 1, 0, 0, 240, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.laser, g.damage75]),
                TYPE: "laser",
				COLOR: -1,
				ALPHA: 0.7,
				BORDERLESS: false
            },
        },
		{
            POSITION: [1, 8, 1, 22, 0, 240, 0],
        },
		{
            POSITION: [1, 8, 1, 18, 0, 240, 0],
        },
		{
            POSITION: [24, 2, 1, 0, 4, 240, 0],
        },
		{
            POSITION: [24, 2, 1, 0, -4, 240, 0],
        },
		{
            POSITION: [12, 12, 1, 0, 0, 240, 0],
        },
    ],
};
exports.blind = {
    PARENT: ["genericTank"],
    LABEL: "Blind",
    BODY: {
        FOV: 1.2 * base.FOV,
    },
	TURRETS: [
        {
            POSITION: [9, 0, 0, 0, 360, 1],
            TYPE: "laserSymbol",
        },
    ],
    GUNS: [
		{
            POSITION: [16, 6, 1, 0, 6, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.laser, g.damagetriple]),
                TYPE: "laser",
				COLOR: -1,
				ALPHA: 0.7,
				BORDERLESS: false
            },
        },
		{
            POSITION: [1, 8, 1, 18, 5, 0, 0],
        },
		{
            POSITION: [1, 8, 1, 14, 5, 0, 0],
        },
		{
            POSITION: [20, 1, 1, 0, 9, 0, 0],
        },
		{
            POSITION: [16, 6, 1, 0, -6, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.laser, g.damagetriple]),
                TYPE: "laser",
				COLOR: -1,
				ALPHA: 0.7,
				BORDERLESS: false
            },
        },
		{
            POSITION: [1, 8, 1, 18, -5, 0, 0],
        },
		{
            POSITION: [1, 8, 1, 14, -5, 0, 0],
        },
		{
            POSITION: [20, 1, 1, 0, -9, 0, 0],
        },
        {
            POSITION: [20, 7, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.laser, g.damagetwin]),
                TYPE: "laser",
				COLOR: -1,
				ALPHA: 0.7,
				BORDERLESS: false
            },
        },
		{
            POSITION: [1, 8, 1, 22, 0, 0, 0],
        },
		{
            POSITION: [1, 8, 1, 18, 0, 0, 0],
        },
		{
            POSITION: [24, 2, 1, 0, 4, 0, 0],
        },
		{
            POSITION: [24, 2, 1, 0, -4, 0, 0],
        },
		{
            POSITION: [12, 20, 1, 0, 0, 0, 0],
        },
    ],
};
exports.lightspeed = {
    PARENT: ["genericTank"],
    LABEL: "Light-speed",
    BODY: {
        FOV: 1.3 * base.FOV,
    },
	TURRETS: [
        {
            POSITION: [9, 0, 0, 0, 360, 1],
            TYPE: "laserSymbol",
        },
    ],
    GUNS: [
        {
            POSITION: [24, 7, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.laser, g.laserspeed]),
                TYPE: "laser",
				COLOR: -1,
				ALPHA: 0.7,
				BORDERLESS: false
            },
        },
		{
            POSITION: [1, 8, 1, 26, 0, 0, 0],
        },
		{
            POSITION: [1, 8, 1, 22, 0, 0, 0],
        },
		{
            POSITION: [28, 2, 1, 0, 4, 0, 0],
        },
		{
            POSITION: [28, 2, 1, 0, -4, 0, 0],
        },
		{
            POSITION: [4, 14, 0.7, 12, 0, 0, 0],
        },
		{
            POSITION: [12, 14, 1, 0, 0, 0, 0],
        },
    ],
};
exports.prism = {
    PARENT: ["genericTank"],
    LABEL: "Prism",
    BODY: {
        FOV: 1.2 * base.FOV,
    },
	TURRETS: [
        {
            POSITION: [9, 0, 0, 0, 360, 1],
            TYPE: "laserSymbol",
        },
    ],
    GUNS: [
		
		{
            POSITION: [8, 5, 1, 0, -7.5, 15, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.laser, g.damagetwin, g.damagetwin, g.damage75]),
                TYPE: "laserre",
				COLOR: -1,
				ALPHA: 0.0,
				BORDERLESS: false
            },
        },
		{
            POSITION: [8, 5, 1, 0, -5, 10, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.laser, g.damagetwin, g.damagetwin, g.damage75]),
                TYPE: "laseror",
				COLOR: -1,
				ALPHA: 0.0,
				BORDERLESS: false
            },
        },
		{
            POSITION: [8, 5, 1, 0, -2.5, 5, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.laser, g.damagetwin, g.damagetwin, g.damage75]),
                TYPE: "laserye",
				COLOR: -1,
				ALPHA: 0.0,
				BORDERLESS: false
            },
        },
        {
            POSITION: [8, 5, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.laser, g.damagetwin, g.damagetwin, g.damage75]),
                TYPE: "lasergr",
				COLOR: -1,
				ALPHA: 0.0,
				BORDERLESS: false
            },
        },
		{
            POSITION: [8, 5, 1, 0, 2.5, -5, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.laser, g.damagetwin, g.damagetwin, g.damage75]),
                TYPE: "laserbl1",
				COLOR: -1,
				ALPHA: 0.0,
				BORDERLESS: false
            },
        },
		{
            POSITION: [8, 5, 1, 0, 5, -10, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.laser, g.damagetwin, g.damagetwin, g.damage75]),
                TYPE: "laserbl2",
				COLOR: -1,
				ALPHA: 0.0,
				BORDERLESS: false
            },
        },
		{
            POSITION: [8, 5, 1, 0, 7.5, -15, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.laser, g.damagetwin, g.damagetwin, g.damage75]),
                TYPE: "laservi",
				COLOR: -1,
				ALPHA: 0.0,
				BORDERLESS: false
            },
        },
		{
            POSITION: [25, 30, 0.01, 0, 0, 0, 0],
        },
		{
            POSITION: [25, 25, 0.01, 0, 0, 0, 0],
			PROPERTIES: {
				COLOR: 6,
				BORDERLESS: false
            },
        },
		{
            POSITION: [5, 30, 0.7, 0, 0, 180, 0],
        },
    ],
};
exports.machineGun = {
    PARENT: ["genericTank"],
    LABEL: "Machine Gun",
    GUNS: [
        {
            POSITION: [12, 10, 1.4, 8, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
                TYPE: "bullet",
            },
        },
    ],
};
exports.machinefill = {
    PARENT: ["genericTank"],
    LABEL: "Machine Fill",
    GUNS: [
        {
            POSITION: [13, 10, 1.6, 8, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.overmach]),
                TYPE: "bullet",
            },
        },
    ],
};
exports.tsunami = {
    PARENT: ["genericTank"],
    LABEL: "Tsunami",
    GUNS: [
		{
            POSITION: [20.5, 1, 1.0, 0, 10, 0, 0],
        },
		{
            POSITION: [20.5, 1, 1.0, 0, -10, 0, 0],
        },
        {
            POSITION: [14, 10, 2.0, 8, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.overmach, g.overmach]),
                TYPE: "bullet",
            },
        },
    ],
};
exports.flankGuard = {
    PARENT: ["genericTank"],
    LABEL: "Flank Guard",
    BODY: {
        SPEED: 1.1 * base.SPEED,
    },
    GUNS: [
        {
            POSITION: [18, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [18, 8, 1, 0, 0, 120, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [18, 8, 1, 0, 0, 240, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank]),
                TYPE: "bullet",
            },
        },
    ],
};
exports.director = {
    PARENT: ["genericTank"],
    LABEL: "Director",
    STAT_NAMES: statnames.drone,
    BODY: {
        FOV: base.FOV * 1.1,
    },
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [6, 11, 1.3, 7, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone]),
                TYPE: "drone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                MAX_CHILDREN: 6,
            },
        },
    ],
};
exports.overburned = {
    PARENT: ["genericTank"],
    LABEL: "Overburned",
    STAT_NAMES: statnames.drone,
    BODY: {
        FOV: base.FOV * 1.1,
    },
	TURRETS: [
        {
            POSITION: [9, 0, 0, 0, 360, 1],
            TYPE: "laserSymbol",
        },
    ],
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [6, 11, 1.3, 7, 0, 90, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over, g.drive]),
                TYPE: "droneLaser",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                MAX_CHILDREN: 2,
            },
        },
		{
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [6, 11, 1.3, 7, 0, -90, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over, g.drive]),
                TYPE: "droneLaser",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                MAX_CHILDREN: 2,
            },
        },
    ],
};
exports.frontier = {
    PARENT: ["genericTank"],
    LABEL: "Frontier",
    STAT_NAMES: statnames.drone,
    BODY: {
        FOV: base.FOV * 1.1,
    },
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [6, 6, 3.0, 7, 0, 45, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.truebig]),
                TYPE: "auradrone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                MAX_CHILDREN: 1,
            },
        },
		{
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [6, 6, 3.0, 7, 0, 135, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.truebig]),
                TYPE: "auradrone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                MAX_CHILDREN: 1,
            },
        },
		{
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [6, 6, 3.0, 7, 0, 225, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.truebig]),
                TYPE: "auradrone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                MAX_CHILDREN: 1,
            },
        },
		{
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [6, 6, 3.0, 7, 0, 315, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.truebig]),
                TYPE: "auradrone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                MAX_CHILDREN: 1,
            },
        },
    ],
};
exports.haste = {
    PARENT: ["genericTank"],
    LABEL: "Haste",
    STAT_NAMES: statnames.drone,
    BODY: {
        FOV: base.FOV * 1.1,
    },
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [6, 11, 1.3, 7, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.hastedrone]),
                TYPE: "drone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                MAX_CHILDREN: 6,
            },
        },
		{
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [9, 3, 0.001, 7, 0, 0, 0],
			PROPERTIES: {
				COLOR: -1,
				BORDERLESS: false
            },
        },
    ],
};
exports.accelerator = {
    PARENT: ["genericTank"],
    LABEL: "Accelerator",
    STAT_NAMES: statnames.drone,
    BODY: {
        FOV: base.FOV * 1.1,
    },
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [6, 11, 1.3, 7, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.hastedrone, g.hastedrone]),
                TYPE: "drone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                MAX_CHILDREN: 6,
            },
        },
		{
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [8, 6, 0.001, 7, 0, 0, 0],
			PROPERTIES: {
				COLOR: -1,
				BORDERLESS: false
            },
        },
    ],
};
exports.psychologist = {
    PARENT: ["genericTank"],
    LABEL: "Psychologist",
    STAT_NAMES: statnames.drone,
    BODY: {
        FOV: base.FOV * 1.2,
    },
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [6, 11, 1.3, 7, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.finity]),
                TYPE: "emptydrone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                MAX_CHILDREN: 24,
            },
        },
		{
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [5, 8, 1.3, 7, 0, 0, 0],
			PROPERTIES: {
				COLOR: -1,
				ALPHA: 0.7,
				BORDERLESS: false
            },
        },
    ],
};
exports.psychiatrist = {
    PARENT: ["genericTank"],
    LABEL: "Psychiatrist",
    STAT_NAMES: statnames.drone,
    BODY: {
        FOV: base.FOV * 1.2,
    },
    GUNS: [
		{
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [8, 11, 1.3, 7, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.finity]),
                TYPE: "emptydrone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                MAX_CHILDREN: 12,
            },
        },
		{
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [7, 8, 1.3, 7, 0, 0, 0],
			PROPERTIES: {
				COLOR: -1,
				ALPHA: 0.7,
				BORDERLESS: false
            },
        },
		{
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [6, 11, 1.3, 7, 0, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.finity]),
                TYPE: "emptydrone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                MAX_CHILDREN: 12,
            },
        },
		{
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [5, 8, 1.3, 7, 0, 0, 0],
			PROPERTIES: {
				COLOR: -1,
				ALPHA: 0.7,
				BORDERLESS: false
            },
        },
    ],
};
exports.pounder = {
    PARENT: ["genericTank"],
    LABEL: "Pounder",
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [20.5, 12, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound]),
                TYPE: "bullet",
            },
        },
    ],
};
exports.trapper = {
    PARENT: ["genericTank"],
    LABEL: "Trapper",
    STAT_NAMES: statnames.trap,
    GUNS: [
        {
            POSITION: [15, 7, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [3, 7, 1.7, 15, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap]),
                TYPE: "trap",
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
    ],
};
exports.trapperdrive = {
    PARENT: ["genericTank"],
    LABEL: "Trapperdrive",
    STAT_NAMES: statnames.trap,
	TURRETS: [
        {
            /** SIZE     X       Y     ANGLE    ARC */
            POSITION: [9, 0, 0, 0, 360, 1],
            TYPE: "overdriveDeco",
        },
    ],
    GUNS: [
        {
            POSITION: [15, 7, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [3, 7, 1.7, 15, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.damage75]),
                TYPE: "trapTurreted",
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
    ],
};
exports.trappergun = {
    PARENT: ["genericTank"],
    DANGER: 5,
    LABEL: "Trappergun",
    GUNS: [
        {
            POSITION: [4, 3, 1, 11, -3, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.mach, g.shotgun, g.morereload, g.damagex2, g.damagex2, g.healthtwin, g.slow]),
                TYPE: "trap",
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
        {
            POSITION: [4, 3, 1, 11, 3, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.mach, g.shotgun, g.morereload, g.damagex15, g.damagex2, g.healthtwin, g.slow, g.celeslower]),
                TYPE: "trap",
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
        {
            POSITION: [4, 4, 1, 13, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.mach, g.shotgun, g.morereload, g.damagex2, g.damagex2, g.healthtwin, g.slow]),
                TYPE: "trap",
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
        {
            POSITION: [1, 4, 1, 12, -1, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.mach, g.shotgun, g.morereload, g.damagex15, g.damagex2, g.healthtwin, g.slow, g.celeslower]),
                TYPE: "trap",
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
        {
            POSITION: [1, 4, 1, 11, 1, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.mach, g.shotgun, g.morereload, g.damagex15, g.damagex2, g.healthtwin, g.slow, g.celeslower]),
                TYPE: "trap",
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
        {
            POSITION: [1, 3, 1, 13, -1, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.mach, g.shotgun, g.morereload, g.damagex2, g.damagex2, g.healthtwin, g.slow]),
                TYPE: "trap",
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
        {
            POSITION: [1, 3, 1, 13, 1, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.mach, g.shotgun, g.morereload, g.damagex2, g.damagex2, g.healthtwin, g.slow]),
                TYPE: "trap",
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
        {
            POSITION: [1, 2, 1, 13, 2, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.mach, g.shotgun, g.morereload, g.damagex2, g.damagex2, g.healthtwin, g.slow]),
                TYPE: "trap",
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
        {
            POSITION: [1, 2, 1, 13, -2, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.mach, g.shotgun, g.morereload, g.damagex15, g.damagex2, g.healthtwin, g.slow, g.celeslower]),
                TYPE: "trap",
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
        {
            POSITION: [18, 12, 1, 0, 0, 0, 0],
        },
		{
            POSITION: [12, 20, 0.6, 0, 0, 0, 0],
        },
        {
            POSITION: [3, 12, 1.7, 18, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.mach, g.shotgun, g.morereload, g.realfake]),
                TYPE: "trap",
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
    ],
};
exports.machinetrapper = {
    PARENT: ["genericTank"],
    LABEL: "Machine Trapper",
    STAT_NAMES: statnames.trap,
    GUNS: [
        {
            POSITION: [18, 7, 1.5, 0, 0, 0, 0],
        },
        {
            POSITION: [3, 11, 1.7, 18, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.machtrapper]),
                TYPE: "trap",
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
    ],
};
exports.machinetrench = {
    PARENT: ["genericTank"],
    LABEL: "Machine Trench",
    STAT_NAMES: statnames.trap,
    GUNS: [
        {
            POSITION: [18, 10, 1.7, 0, 0, 0, 0],
        },
        {
            POSITION: [3, 17, 1.7, 18, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.machtrapper, g.machtrapper]),
                TYPE: "trap",
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
    ],
};
exports.fpstrapper = {
    PARENT: ["genericTank"],
    LABEL: "FPS Trapper (!?)",
    STAT_NAMES: statnames.trap,
    GUNS: [
        {
            POSITION: [18, 15, 2.0, 0, 0, 0, 0],
        },
        {
            POSITION: [3, 30, 1.7, 18, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.machtrapper, g.machtrapper, g.machtrapper]),
                TYPE: "trap",
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
    ],
};
exports.pawndefense = {
    PARENT: ["genericTank"],
    LABEL: "Pawn Defense",
    STAT_NAMES: statnames.trap,
    GUNS: [
        {
            POSITION: [15, 7, 1, 0, 5, 0, 0],
        },
        {
            POSITION: [3, 7, 1.7, 15, 5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.pawn]),
                TYPE: "trap",
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
		{
            POSITION: [15, 7, 1, 0, -5, 0, 0],
        },
        {
            POSITION: [3, 7, 1.7, 15, -5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.pawn]),
                TYPE: "trap",
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
    ],
};
exports.d4e4pawns = {
    PARENT: ["genericTank"],
    LABEL: "D4 E4 Pawns",
    STAT_NAMES: statnames.trap,
	TURRETS: [
        {
            /** SIZE     X       Y     ANGLE    ARC */
            POSITION: [9, 0, 0, 0, 360, 1],
            TYPE: "overdriveDeco",
        },
    ],
    GUNS: [
        {
            POSITION: [15, 7, 1, 0, 5, 0, 0],
        },
        {
            POSITION: [3, 7, 1.7, 15, 5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.pawn, g.damage75]),
                TYPE: "trapTurretedPawn",
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
		{
            POSITION: [15, 7, 1, 0, -5, 0, 0],
        },
        {
            POSITION: [3, 7, 1.7, 15, -5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.pawn, g.damage75]),
                TYPE: "trapTurretedPawn",
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
    ],
};
exports.twinpawns = {
    PARENT: ["genericTank"],
    LABEL: "Twin Pawns",
    STAT_NAMES: statnames.trap,
    GUNS: [
        {
            POSITION: [15, 7, 1, 0, 5, 0, 0],
        },
        {
            POSITION: [3, 7, 1.7, 15, 5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.pawn, g.damage75]),
                TYPE: "trap",
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
		{
            POSITION: [15, 7, 1, 0, -5, 0, 0],
        },
        {
            POSITION: [3, 7, 1.7, 15, -5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.pawn, g.damage75]),
                TYPE: "trap",
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
		{
            POSITION: [15, 7, 1, 0, 5, 180, 0],
        },
        {
            POSITION: [3, 7, 1.7, 15, 5, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.pawn, g.damage75]),
                TYPE: "trap",
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
		{
            POSITION: [15, 7, 1, 0, -5, 180, 0],
        },
        {
            POSITION: [3, 7, 1.7, 15, -5, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.pawn, g.damage75]),
                TYPE: "trap",
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
    ],
};
exports.trappawns = {
    PARENT: ["genericTank"],
    LABEL: "Trap Pawns",
    STAT_NAMES: statnames.trap,
    GUNS: [
		{
            POSITION: [3, 7, 1.7, 18, 5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.damagetwin]),
                TYPE: "trap",
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
        {
            POSITION: [3, 7, 1.7, 18, -5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.damagetwin]),
                TYPE: "trap",
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
        {
            POSITION: [15, 7, 1, 0, 5, 0, 0],
        },
        {
            POSITION: [3, 7, 1.7, 15, 5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.pawn, g.damage75]),
                TYPE: "trap",
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
		{
            POSITION: [15, 7, 1, 0, -5, 0, 0],
        },
        {
            POSITION: [3, 7, 1.7, 15, -5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.pawn, g.damage75]),
                TYPE: "trap",
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
    ],
};
exports.pawnassault = {
    PARENT: ["genericTank"],
    LABEL: "Pawn Assault",
    STAT_NAMES: statnames.trap,
    GUNS: [
		{
            POSITION: [15, 7, 1, 0, 15, 0, 0],
        },
        {
            POSITION: [3, 7, 1.7, 15, 15, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.pawn, g.damage75]),
                TYPE: "trap",
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
		{
            POSITION: [15, 7, 1, 0, -15, 0, 0],
        },
		{
            POSITION: [3, 7, 1.7, 15, -15, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.pawn, g.damage75]),
                TYPE: "trap",
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
        {
            POSITION: [15, 7, 1, 0, 5, 0, 0],
        },
        {
            POSITION: [3, 7, 1.7, 15, 5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.pawn, g.damage75]),
                TYPE: "trap",
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
		{
            POSITION: [15, 7, 1, 0, -5, 0, 0],
        },
        {
            POSITION: [3, 7, 1.7, 15, -5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.pawn, g.damage75]),
                TYPE: "trap",
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
		{
            POSITION: [5, 37, 0.2, 0, 0, 180, 0],
        },
    ],
};
exports.weirdTrapper = {
    // For use with -trapper combos only.
    PARENT: ["genericTank"],
    LABEL: "Trapper",
    DANGER: 5,
    STAT_NAMES: statnames.mixed,
    BODY: {
        SPEED: base.SPEED * 0.8,
        FOV: base.FOV * 1.2,
    },
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [14, 8, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [4, 8, 1.5, 14, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap]),
                TYPE: "trap",
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
    ],
};
exports.smasher = {
    PARENT: ["genericTank"],
    LABEL: "Smasher",
    DANGER: 5,
    BODY: {
        FOV: 1.05 * base.FOV,
        DENSITY: 2 * base.DENSITY,
		HEALTH: base.HEALTH * 1.2,
    },
    TURRETS: [
        {
            POSITION: [21.5, 0, 0, 0, 360, 0],
            TYPE: "smasherBody",
        },
    ],
    IS_SMASHER: true,
    SKILL_CAP: [smshskl, 0, 0, 0, 0, smshskl, smshskl, smshskl, smshskl, smshskl],
    STAT_NAMES: statnames.smasher,
};
exports.healer = {
    PARENT: ["genericTank"],
    LABEL: "Healer",
    TURRETS: [
        {
            /** SIZE     X       Y     ANGLE    ARC */
            POSITION: [13, 0, 0, 0, 360, 1],
            TYPE: "healerSymbol",
        },
    ],
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [8, 9, -0.5, 12.5, 0, 0, 0],
        },
        {
            POSITION: [18, 10, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.healer]),
                TYPE: "healerBullet",
            },
        },
    ],
    STAT_NAMES: statnames.heal,
};
exports.single = {
    PARENT: ["genericTank"],
    LABEL: "Single",
	DANGER: 5,
	TURRETS: [
        {
            /** SIZE     X       Y     ANGLE    ARC */
            POSITION: [5, 0, 0, 0, 360, 1],
            TYPE: "singleSymbol",
        },
    ],
    GUNS: [
        {
            POSITION: [19, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.single]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [5.5, 8, -1.8, 6.5, 0, 0, 0],
        },
    ],
};
exports.duo = {
    PARENT: ["genericTank"],
    LABEL: "Duo",
	DANGER: 5,
	TURRETS: [
        {
            /** SIZE     X       Y     ANGLE    ARC */
            POSITION: [5, 0, 0, 0, 360, 1],
            TYPE: "singleSymbol",
        },
    ],
    GUNS: [
        {
            POSITION: [19, 7, 1, 0, 4, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.single, g.twin]),
                TYPE: "bullet",
            },
        },
		{
            POSITION: [19, 7, 1, 0, -4, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.single, g.twin]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [12.0, 19, 0.8, 0.0, 0, 0, 0],
        },
    ],
};
exports.doubleduo = {
    PARENT: ["genericTank"],
    LABEL: "Double Duo",
	DANGER: 5,
	TURRETS: [
        {
            /** SIZE     X       Y     ANGLE    ARC */
            POSITION: [5, 0, 0, 0, 360, 1],
            TYPE: "singleSymbol",
        },
    ],
    GUNS: [
        {
            POSITION: [19, 7, 1, 0, 4, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.single, g.twin, g.double]),
                TYPE: "bullet",
            },
        },
		{
            POSITION: [19, 7, 1, 0, -4, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.single, g.twin, g.double]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [12.0, 19, 0.8, 0.0, 0, 0, 0],
        },
		{
            POSITION: [19, 7, 1, 0, 4, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.single, g.twin, g.double]),
                TYPE: "bullet",
            },
        },
		{
            POSITION: [19, 7, 1, 0, -4, 180, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.single, g.twin, g.double]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [12.0, 19, 0.8, 0.0, 0, 180, 0],
        },
    ],
};
exports.solitary = {
    PARENT: ["genericTank"],
    LABEL: "Solitary",
	DANGER: 5,
	TURRETS: [
        {
            /** SIZE     X       Y     ANGLE    ARC */
            POSITION: [5, 0, -3, 0, 360, 1],
            TYPE: "singleSymbol",
        },
		{
            /** SIZE     X       Y     ANGLE    ARC */
            POSITION: [5, 0, 3, 0, 360, 1],
            TYPE: "singleSymbol",
        },
    ],
    GUNS: [
        {
            POSITION: [19, 6, 1, 0, 0, 0, 0],
			PROPERTIES: {COLOR: 17},
        },
		{
            POSITION: [14, 8, 1, 0, 0, 0, 0],
        },
		{
            POSITION: [2, 8, 1, 18, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.single, g.single]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [5.0, 8, -1.8, 6.5, 0, 0, 0],
        },
    ],
};
exports.distinctive = {
    PARENT: ["genericTank"],
    LABEL: "Distinctive",
	DANGER: 5,
	TURRETS: [
        {
            /** SIZE     X       Y     ANGLE    ARC */
            POSITION: [5, 3, 0, 0, 360, 1],
            TYPE: "singleSymbol",
        },
		{
            /** SIZE     X       Y     ANGLE    ARC */
            POSITION: [5, -3, 3, 0, 360, 1],
            TYPE: "singleSymbol",
        },
		{
            /** SIZE     X       Y     ANGLE    ARC */
            POSITION: [5, -3, -3, 0, 360, 1],
            TYPE: "singleSymbol",
        },
    ],
    GUNS: [
        {
            POSITION: [19, 6, 1, 0, 0, 0, 0],
			PROPERTIES: {COLOR: 17},
        },
		{
            POSITION: [19, 2, 1, 0, 0, 0, 0],
        },
		{
            POSITION: [14, 8, 1, 0, 0, 0, 0],
        },
		{
            POSITION: [2, 8, 1, 20, 0, 0, 0],
        },
		{
            POSITION: [3, 8, 1, 18, 0, 0, 0],
			PROPERTIES: {BORDERLESS: true},
        },
		{
            POSITION: [1.8, 7, 1, 18, 0, 0, 0],
			PROPERTIES: {COLOR: 17, BORDERLESS: true},
        },
		{
            POSITION: [2, 8, 1, 18, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.single, g.single, g.single]),
                TYPE: "bullet",
            },
        },
		{
            POSITION: [0.5, 10, 1, 18, 0, 0, 0],
        },
        {
            POSITION: [5.0, 8, -1.8, 6.5, 0, 0, 0],
        },
		{
            POSITION: [5.0, 3, 0.6, 6.5, 0, 0, 0],
        },
    ],
};

// TWIN UPGRADES
exports.doubleTwin = {
    PARENT: ["genericTank"],
    LABEL: "Double Twin",
    DANGER: 5,
    GUNS: [
        {
            POSITION: [20, 8, 1, 0, 5.5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [20, 8, 1, 0, -5.5, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [20, 8, 1, 0, 5.5, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [20, 8, 1, 0, -5.5, 180, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double]),
                TYPE: "bullet",
            },
        },
    ],
};
exports.tripleShot = {
    PARENT: ["genericTank"],
    LABEL: "Triple Shot",
    DANGER: 5,
    BODY: {
        SPEED: base.SPEED * 0.9,
    },
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [19, 8, 1, 0, -2, -17.5, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [19, 8, 1, 0, 2, 17.5, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [22, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
                TYPE: "bullet",
            },
        },
    ],
};

// DOUBLE TWIN UPGRADES
exports.tripleTwin = {
    PARENT: ["genericTank"],
    LABEL: "Triple Twin",
    DANGER: 5,
    GUNS: [
        {
            POSITION: [20, 8, 1, 0, 5.5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.spam, g.double]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [20, 8, 1, 0, -5.5, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.spam, g.double]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [20, 8, 1, 0, 5.5, 120, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.spam, g.double]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [20, 8, 1, 0, -5.5, 120, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.spam, g.double]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [20, 8, 1, 0, 5.5, 240, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.spam, g.double]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [20, 8, 1, 0, -5.5, 240, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.spam, g.double]),
                TYPE: "bullet",
            },
        },
    ],
};
exports.autoDouble = makeAuto(exports.doubleTwin, "Auto-Double");
exports.hewnDouble = {
    PARENT: ["genericTank"],
    LABEL: "Hewn Double",
    DANGER: 5,
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [19, 8, 1, 0, 5.5, 205, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.twin,
                    g.twin,
                    g.double,
                    g.hewn,
                    g.morerecoil,
                ]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [19, 8, 1, 0, -5.5, -205, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.twin,
                    g.twin,
                    g.double,
                    g.hewn,
                    g.morerecoil,
                ]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [20, 8, 1, 0, 5.5, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.twin,
                    g.double,
                    g.hewn,
                    g.morerecoil,
                ]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [20, 8, 1, 0, -5.5, 180, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.twin,
                    g.double,
                    g.hewn,
                    g.morerecoil,
                ]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [20, 8, 1, 0, 5.5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double, g.hewn]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [20, 8, 1, 0, -5.5, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double, g.hewn]),
                TYPE: "bullet",
            },
        },
    ],
};

// TRIPLE SHOT UPGRADES
exports.pentaShot = {
    PARENT: ["genericTank"],
    LABEL: "Penta Shot",
    DANGER: 5,
    BODY: {
        SPEED: 0.85 * base.SPEED,
    },
    GUNS: [
        {
            POSITION: [16, 8, 1, 0, -3, -30, 0.667],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [16, 8, 1, 0, 3, 30, 0.667],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [19, 8, 1, 0, -2, -15, 0.333],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [19, 8, 1, 0, 2, 15, 0.333],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [22, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
                TYPE: "bullet",
            },
        },
    ],
};
exports.spreadshot = {
    PARENT: ["genericTank"],
    LABEL: "Spreadshot",
    DANGER: 5,
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [13, 4, 1, 0, -0.5, -75, 5 / 6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.gunner,
                    g.arty,
                    g.twin,
                    g.spread,
                ]),
                TYPE: "bullet",
                LABEL: "Spread",
            },
        },
        {
            POSITION: [13, 4, 1, 0, 0.5, 75, 5 / 6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.gunner,
                    g.arty,
                    g.twin,
                    g.spread,
                ]),
                TYPE: "bullet",
                LABEL: "Spread",
            },
        },
        {
            POSITION: [14.5, 4, 1, 0, -0.5, -60, 4 / 6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.gunner,
                    g.arty,
                    g.twin,
                    g.spread,
                ]),
                TYPE: "bullet",
                LABEL: "Spread",
            },
        },
        {
            POSITION: [14.5, 4, 1, 0, 0.5, 60, 4 / 6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.gunner,
                    g.arty,
                    g.twin,
                    g.spread,
                ]),
                TYPE: "bullet",
                LABEL: "Spread",
            },
        },
        {
            POSITION: [16, 4, 1, 0, -0.5, -45, 3 / 6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.gunner,
                    g.arty,
                    g.twin,
                    g.spread,
                ]),
                TYPE: "bullet",
                LABEL: "Spread",
            },
        },
        {
            POSITION: [16, 4, 1, 0, 0.5, 45, 3 / 6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.gunner,
                    g.arty,
                    g.twin,
                    g.spread,
                ]),
                TYPE: "bullet",
                LABEL: "Spread",
            },
        },
        {
            POSITION: [17.5, 4, 1, 0, -0.5, -30, 2 / 6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.gunner,
                    g.arty,
                    g.twin,
                    g.spread,
                ]),
                TYPE: "bullet",
                LABEL: "Spread",
            },
        },
        {
            POSITION: [17.5, 4, 1, 0, 0.5, 30, 2 / 6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.gunner,
                    g.arty,
                    g.twin,
                    g.spread,
                ]),
                TYPE: "bullet",
                LABEL: "Spread",
            },
        },
        {
            POSITION: [19, 4, 1, 0, -1, -15, 1 / 6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.gunner,
                    g.arty,
                    g.twin,
                    g.spread,
                ]),
                TYPE: "bullet",
                LABEL: "Spread",
            },
        },
        {
            POSITION: [19, 4, 1, 0, 1, 15, 1 / 6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.gunner,
                    g.arty,
                    g.twin,
                    g.spread,
                ]),
                TYPE: "bullet",
                LABEL: "Spread",
            },
        },
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [12, 8, 1, 8, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.pound,
                    g.spreadmain,
                    g.spread,
                ]),
                TYPE: "bullet",
            },
        },
    ],
};
exports.bentHybrid = makeHybrid(exports.tripleShot, "Bent Hybrid");
exports.bentDouble = {
    PARENT: ["genericTank"],
    LABEL: "Bent Double",
    DANGER: 5,
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [19, 8, 1, 0, -2, -17.5, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.double]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [19, 8, 1, 0, 2, 17.5, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.double]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [22, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.double]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [19, 8, 1, 0, -2, -197.5, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.double]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [19, 8, 1, 0, 2, 197.5, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.double]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [22, 8, 1, 0, 0, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.double]),
                TYPE: "bullet",
            },
        },
    ],
};
exports.triplet = {
    PARENT: ["genericTank"],
    DANGER: 5,
    LABEL: "Triplet",
    BODY: {
        FOV: 1.05 * base.FOV,
    },
    GUNS: [
        {
            POSITION: [18, 10, 1, 0, 5, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [18, 10, 1, 0, -5, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [21, 10, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple]),
                TYPE: "bullet",
            },
        },
    ],
};

// SNIPER UPGRADES
exports.assassin = {
    PARENT: ["genericTank"],
    DANGER: 5,
    LABEL: "Assassin",
    BODY: {
        SPEED: 0.85 * base.SPEED,
        FOV: 1.4 * base.FOV,
    },
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [27, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [5, 8, -1.4, 8, 0, 0, 0],
        },
    ],
};
exports.hunter = {
    PARENT: ["genericTank"],
    LABEL: "Hunter",
    DANGER: 5,
    BODY: {
        SPEED: base.SPEED * 0.9,
        FOV: base.FOV * 1.25,
    },
    CONTROLLERS: ["zoom"],
    TOOLTIP: "Hold right click to zoom.",
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [24, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunter2]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [21, 12, 1, 0, 0, 0, 0.25],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter]),
                TYPE: "bullet",
            },
        },
    ],
};
exports.rifle = {
    PARENT: ["genericTank"],
    LABEL: "Rifle",
    BODY: {
        FOV: base.FOV * 1.225,
    },
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [20, 12, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [24, 7, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rifle]),
                TYPE: "bullet",
            },
        },
    ],
};

// ASSASSIN UPGRADES
exports.ranger = {
    PARENT: ["genericTank"],
    LABEL: "Ranger",
    DANGER: 5,
    BODY: {
        SPEED: 0.8 * base.SPEED,
        FOV: 1.5 * base.FOV,
    },
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [32, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [5, 8, -1.4, 8, 0, 0, 0],
        },
    ],
};
exports.caretaker = {
    PARENT: ["genericTank"],
    LABEL: "Caretaker",
    DANGER: 5,
    BODY: {
        SPEED: 2.0 * base.SPEED,
        FOV: 8.0 * base.FOV,
    },
    GUNS: [
	{
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [5, 8, 1, 40, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass]),
                TYPE: "bullet",
            },
        },
		{
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [15, 8, 1, 20, 0, 0, 0],
        },
        {
            POSITION: [5, 8, -1.4, 8, 0, 0, 0],
        },
    ],
};
exports.falcon = {
    PARENT: ["genericTank"],
    LABEL: "Falcon",
    DANGER: 5,
    BODY: {
        FOV: 1.2 * base.FOV,
    },
    TOOLTIP: "Right click to fire your main barrel.",
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [27, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.sniper,
                    g.assass,
                    g.lessreload,
                ]),
                TYPE: "bullet",
                LABEL: "Assassin",
                ALT_FIRE: true,
            },
        },
        {
            POSITION: [5, 8, -1.4, 8, 0, 0, 0],
        },
        {
            POSITION: [16, 8, 1, 0, 0, 150, 0.1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.flank,
                    g.tri,
                    g.thruster,
                    g.halfrecoil,
                ]),
                TYPE: "bullet",
                STAT_CALCULATOR: gunCalcNames.thruster,
            },
        },
        {
            POSITION: [16, 8, 1, 0, 0, 210, 0.1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.flank,
                    g.tri,
                    g.thruster,
                    g.halfrecoil,
                ]),
                TYPE: "bullet",
                STAT_CALCULATOR: gunCalcNames.thruster,
            },
        },
        {
            POSITION: [18, 8, 1, 0, 0, 180, 0.6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.flank,
                    g.tri,
                    g.thruster,
                    g.halfrecoil,
                ]),
                TYPE: "bullet",
                STAT_CALCULATOR: gunCalcNames.thruster,
            },
        },
    ],
};
exports.stalker = {
    PARENT: ["genericTank"],
    DANGER: 5,
    LABEL: "Stalker",
    BODY: {
        SPEED: 0.85 * base.SPEED,
        FOV: 1.35 * base.FOV,
    },
    INVISIBLE: [0.08, 0.03],
    TOOLTIP: "Stay still to turn invisible.",
    GUNS: [
        {
            POSITION: [27, 8, -1.8, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass]),
                TYPE: "bullet",
            },
        },
    ],
};
exports.autoAssassin = makeAuto(exports.assassin);

// HUNTER UPGRADES
exports.predator = {
    PARENT: ["genericTank"],
    LABEL: "Predator",
    DANGER: 5,
    BODY: {
        SPEED: base.SPEED * 0.9,
        FOV: base.FOV * 1.25,
    },
    CONTROLLERS: ["zoom"],
    TOOLTIP: "Hold right click to zoom.",
    GUNS: [
        {
            POSITION: [24, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.sniper,
                    g.hunter,
                    g.hunter2,
                    g.hunter2,
                    g.preda,
                ]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [21, 12, 1, 0, 0, 0, 0.15],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.sniper,
                    g.hunter,
                    g.hunter2,
                    g.preda,
                ]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [18, 16, 1, 0, 0, 0, 0.3],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.preda]),
                TYPE: "bullet",
            },
        },
    ],
};
exports.xHunter = {
    PARENT: ["genericTank"],
    LABEL: "X-Hunter",
    DANGER: 5,
    BODY: {
        SPEED: base.SPEED * 0.9,
        FOV: base.FOV * 1.25,
    },
    CONTROLLERS: [["zoom", { distance: 550 }]],
    TOOLTIP: "Hold right click to zoom.",
    GUNS: [
        {
            POSITION: [24, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.sniper,
                    g.hunter,
                    g.hunter2,
                ]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [21, 12, 1, 0, 0, 0, 0.25],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.sniper,
                    g.hunter,
                ]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [5, 11.5, -1.25, 7, 0, 0, 0],
        },
    ],
};
exports.poacher = makeHybrid(exports.hunter, "Poacher");
exports.dual = {
    PARENT: ["genericTank"],
    LABEL: "Dual",
    DANGER: 5,
    BODY: {
        FOV: 1.1 * base.FOV,
    },
    CONTROLLERS: ["zoom"],
    TOOLTIP: "Hold right click to zoom.",
    GUNS: [
        {
            POSITION: [18, 7, 1, 0, 5.5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.lowpower]),
                TYPE: "bullet",
                LABEL: "Small",
            },
        },
        {
            POSITION: [18, 7, 1, 0, -5.5, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.lowpower]),
                TYPE: "bullet",
                LABEL: "Small",
            },
        },
        {
            POSITION: [16, 8.5, 1, 0, 5.5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [16, 8.5, 1, 0, -5.5, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual]),
                TYPE: "bullet",
            },
        },
    ],
};

// RIFLE UPGRADES
exports.musket = {
    PARENT: ["genericTank"],
    LABEL: "Musket",
    BODY: {
        FOV: base.FOV * 1.225,
    },
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [16, 19, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [18, 7, 1, 0, 4, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rifle, g.twin]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [18, 7, 1, 0, -4, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rifle, g.twin]),
                TYPE: "bullet",
            },
        },
    ],
};
exports.crossbow = {
    PARENT: ["genericTank"],
    LABEL: "Crossbow",
    BODY: {
        FOV: base.FOV * 1.225,
    },
    GUNS: [
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [12.5, 2.5, 1, 0, 3.5, 35, 1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.sniper,
                    g.rifle,
                    g.slow,
                    g.crossbow,
                    g.halfrecoil,
                ]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [12.5, 2.5, 1, 0, -3.5, -35, 1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.sniper,
                    g.rifle,
                    g.slow,
                    g.crossbow,
                    g.halfrecoil,
                ]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [15, 2.5, 1, 0, 3.5, 35/2, 2/3],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.sniper,
                    g.rifle,
                    g.slow,
                    g.crossbow,
                    g.halfrecoil,
                ]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [15, 2.5, 1, 0, -3.5, -35/2, 2/3],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.sniper,
                    g.rifle,
                    g.slow,
                    g.crossbow,
                    g.halfrecoil,
                ]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [20, 3.5, 1, 0, 4, 0, 1/3],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.sniper,
                    g.rifle,
                    g.slow,
                    g.crossbow,
                    g.halfrecoil,
                ]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [20, 3.5, 1, 0, -4, 0, 1/3],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.sniper,
                    g.rifle,
                    g.slow,
                    g.crossbow,
                    g.halfrecoil,
                ]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [24, 7, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.sniper,
                    g.rifle,
                    g.slow,
                    g.halfreload,
                    g.halfrecoil,
                ]),
                TYPE: "bullet",
            },
        },
    ],
};
exports.armsman = makeHybrid(exports.rifle, "Armsman");

// MACHINE GUN UPGRADES
exports.minigun = {
    PARENT: ["genericTank"],
    LABEL: "Minigun",
    DANGER: 5,
    BODY: {
        FOV: 1.2,
    },
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [21, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mini]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [19, 8, 1, 0, 0, 0, 1 / 3],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mini]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [17, 8, 1, 0, 0, 0, 2 / 3],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mini]),
                TYPE: "bullet",
            },
        },
    ],
};
exports.gunner = {
    PARENT: ["genericTank"],
    LABEL: "Gunner",
    DANGER: 5,
    GUNS: [
        {
            POSITION: [12, 3.5, 1, 0, 7.25, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [12, 3.5, 1, 0, -7.25, 0, 0.75],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [16, 3.5, 1, 0, 3.75, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [16, 3.5, 1, 0, -3.75, 0, 0.25],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
                TYPE: "bullet",
            },
        },
    ],
};
exports.journeygun = {
    PARENT: ["genericTank"],
    LABEL: "Journeygun",
    DANGER: 5,
    GUNS: [
        {
            POSITION: [10, 2, 1, 0, 9, 0, 0.75],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.twin, g.puregunner, g.fast]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [10, 2, 1, 0, -9, 0, 0.875],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.twin, g.puregunner, g.fast]),
                TYPE: "bullet",
            },
        },
		{
            POSITION: [13, 2, 1, 0, 7, 0, 0.50],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.twin, g.puregunner, g.fast]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [13, 2, 1, 0, -7, 0, 0.625],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.twin, g.puregunner, g.fast]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [16, 2, 1, 0, 5, 0, 0.25],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.twin, g.puregunner, g.fast]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [16, 2, 1, 0, -5, 0, 0.375],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.twin, g.puregunner, g.fast]),
                TYPE: "bullet",
            },
        },
		{
            POSITION: [16, 2, 1, 0, 2, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.twin, g.puregunner, g.fast]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [16, 2, 1, 0, -2, 0, 0.125],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.twin, g.puregunner, g.fast]),
                TYPE: "bullet",
            },
        },
    ],
};
exports.weirdGunner = {
    // For use with -gunner combos only.
    PARENT: ["genericTank"],
    LABEL: "Gunner",
    DANGER: 5,
    GUNS: [
        {
            POSITION: [19, 2, 1, 0, -2.5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.gunner,
                    g.power,
                    g.twin,
                    g.slow,
                    g.flank,
                    g.lotsmorrecoil,
                ]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [19, 2, 1, 0, 2.5, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.gunner,
                    g.power,
                    g.twin,
                    g.slow,
                    g.flank,
                    g.lotsmorrecoil,
                ]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [12, 11, 1, 0, 0, 0, 0],
        },
    ],
};
exports.sprayer = {
    PARENT: ["genericTank"],
    LABEL: "Sprayer",
    GUNS: [
        {
            POSITION: [23, 7, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.gunner,
                    g.lowpower,
                    g.mach,
                    g.morerecoil,
                ]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [12, 10, 1.4, 8, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
                TYPE: "bullet",
            },
        },
    ],
};

// MINIGUN UPGRADES
exports.streamliner = {
    PARENT: ["genericTank"],
    LABEL: "Streamliner",
    DANGER: 5,
    BODY: {
        FOV: 1.3,
    },
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [25, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [23, 8, 1, 0, 0, 0, 0.2],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [21, 8, 1, 0, 0, 0, 0.4],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [19, 8, 1, 0, 0, 0, 0.6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [17, 8, 1, 0, 0, 0, 0.8],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
                TYPE: "bullet",
            },
        },
    ],
};
exports.cropDuster = makeHybrid(exports.minigun, "Crop Duster");
exports.barricade = {
    PARENT: ["genericTank"],
    DANGER: 5,
    LABEL: "Barricade",
    STAT_NAMES: statnames.trap,
    BODY: {
        FOV: 1.15,
    },
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [24, 8, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [4, 8, 1.3, 22, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.mini, g.morereload]),
                TYPE: "trap",
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
        {
            POSITION: [4, 8, 1.3, 18, 0, 0, 0.333],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.mini, g.morereload]),
                TYPE: "trap",
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
        {
            POSITION: [4, 8, 1.3, 14, 0, 0, 0.667],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.mini, g.morereload]),
                TYPE: "trap",
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
    ],
};
exports.blockade = {
    PARENT: ["genericTank"],
    DANGER: 5,
    LABEL: "Blockade",
    STAT_NAMES: statnames.trap,
    BODY: {
        FOV: 1.15,
    },
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [24, 12, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [3, 13, 1.2, 24, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.block, g.mini, g.morereload, g.damageweakweak, g.damageweakweak]),
                TYPE: "setTrap",
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
        {
            POSITION: [3, 13, 1.2, 20, 0, 0, 0.333],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.block, g.mini, g.morereload, g.damageweakweak, g.damageweakweak]),
                TYPE: "setTrap",
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
        {
            POSITION: [3, 13, 1.2, 16, 0, 0, 0.667],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.block, g.mini, g.morereload, g.damageweakweak, g.damageweakweak]),
                TYPE: "setTrap",
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
    ],
};
exports.kremlin = {
    PARENT: ["genericTank"],
    DANGER: 5,
    LABEL: "Kremlin",
    STAT_NAMES: statnames.trap,
    BODY: {
        FOV: 1.15,
    },
    GUNS: [
		{
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [14, 6, 1, 0, 2, 20, 0],
        },
		{
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [14, 6, 1, 0, -2, -20, 0],
        },
		{
            POSITION: [2, 7, 1.2, 12, 2, 20, 0.0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.block, g.mini, g.damagetriple, g.doublereload, g.morereload, g.damagex15]),
                TYPE: "setTrap",
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
		{
            POSITION: [2, 7, 1.2, 12, -2, -20, 0.333],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.block, g.mini, g.damagetriple, g.doublereload, g.morereload, g.damagex15]),
                TYPE: "setTrap",
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
		{
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [23, 6, 1, 0, 0, 0, 0],
        },
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [17, 14, 1, 0, 0, 0, 0],
        },
		{
            POSITION: [2, 7, 1.2, 21, 0, 0, 0.667],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.block, g.mini, g.damagetriple, g.doublereload, g.morereload, g.damagex15]),
                TYPE: "setTrap",
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
        {
            POSITION: [3, 16, 1.2, 16, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.block, g.lessreload, g.one_third_reload]),
                TYPE: "setTrap",
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
    ],
};
exports.twofoldfenced = {
    PARENT: ["genericTank"],
    DANGER: 5,
    LABEL: "Twofold Fenced",
    STAT_NAMES: statnames.trap,
    BODY: {
        FOV: 1.15,
    },
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [24, 8, 1, 0, 6, 0, 0],
        },
        {
            POSITION: [4, 8, 1.3, 22, 6, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.mini, g.morereload, g.damagetwin, g.damageweak]),
                TYPE: "trap",
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
        {
            POSITION: [4, 8, 1.3, 18, 6, 0, 0.333],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.mini, g.morereload, g.damagetwin, g.damageweak]),
                TYPE: "trap",
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
        {
            POSITION: [4, 8, 1.3, 14, 6, 0, 0.667],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.mini, g.morereload, g.damagetwin, g.damageweak]),
                TYPE: "trap",
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
		{
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [24, 8, 1, 0, -6, 0, 0],
        },
        {
            POSITION: [4, 8, 1.3, 22, -6, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.mini, g.morereload, g.damagetwin, g.damageweak]),
                TYPE: "trap",
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
        {
            POSITION: [4, 8, 1.3, 18, -6, 0, 0.333],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.mini, g.morereload, g.damagetwin, g.damageweak]),
                TYPE: "trap",
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
        {
            POSITION: [4, 8, 1.3, 14, -6, 0, 0.667],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.mini, g.morereload, g.damagetwin, g.damageweak]),
                TYPE: "trap",
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
    ],
};
exports.fieldworker = {
    PARENT: ["genericTank"],
    DANGER: 5,
    LABEL: "Fieldworker",
    STAT_NAMES: statnames.trap,
    BODY: {
        FOV: 1.15,
    },
	TURRETS: [
        {
            /** SIZE     X       Y     ANGLE    ARC */
            POSITION: [9, 0, 0, 0, 360, 1],
            TYPE: "overdriveDeco",
        },
    ],
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [24, 8, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [4, 8, 1.3, 22, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.mini, g.morereload, g.damage75]),
                TYPE: "trapTripleTurreted",
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
        {
            POSITION: [4, 8, 1.3, 18, 0, 0, 0.333],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.mini, g.morereload, g.damage75]),
                TYPE: "trapTripleTurreted",
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
        {
            POSITION: [4, 8, 1.3, 14, 0, 0, 0.667],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.mini, g.morereload, g.damage75]),
                TYPE: "trapTripleTurreted",
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
    ],
};
exports.vulture = {
    PARENT: ["genericTank"],
    LABEL: "Vulture",
    DANGER: 5,
    GUNS: [
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [20, 6, -2, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront, g.mini]),
                TYPE: "bullet",
                ALT_FIRE: true,
                LABEL: "Minigun",
            },
        },
        {
            POSITION: [18, 6.5, -2, 0, 0, 0, 0.333],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront, g.mini]),
                TYPE: "bullet",
                ALT_FIRE: true,
                LABEL: "Minigun",
            },
        },
        {
            POSITION: [16, 7, -2, 0, 0, 0, 0.667],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront, g.mini]),
                TYPE: "bullet",
                ALT_FIRE: true,
                LABEL: "Minigun",
            },
        },
        {
            POSITION: [16, 8, 1, 0, 0, 150, 0.1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.halfrecoil]),
                TYPE: "bullet",
                LABEL: gunCalcNames.thruster,
            },
        },
        {
            POSITION: [16, 8, 1, 0, 0, 210, 0.1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.halfrecoil]),
                TYPE: "bullet",
                LABEL: gunCalcNames.thruster,
            },
        },
        {
            POSITION: [18, 8, 1, 0, 0, 180, 0.6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.halfrecoil]),
                TYPE: "bullet",
                LABEL: gunCalcNames.thruster,
            },
        },
    ],
};

// GUNNER UPGRADES
exports.autoGunner = makeAuto(exports.gunner);
exports.nailgun = {
    PARENT: ["genericTank"],
    LABEL: "Nailgun",
    DANGER: 5,
    BODY: {
        FOV: base.FOV * 1.1,
        SPEED: base.SPEED * 0.9,
    },
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [19, 2, 1, 0, -2.5, 0, 0.25],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.gunner,
                    g.power,
                    g.twin,
                    g.nail,
                ]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [19, 2, 1, 0, 2.5, 0, 0.75],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.gunner,
                    g.power,
                    g.twin,
                    g.nail,
                ]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [20, 2, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.gunner,
                    g.power,
                    g.twin,
                    g.nail,
                ]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [5.5, 7, -1.8, 6.5, 0, 0, 0],
        },
    ],
};
exports.machineGunner = {
    PARENT: ["genericTank"],
    LABEL: "Machine Gunner",
    DANGER: 5,
    BODY: {
        SPEED: 0.9 * base.SPEED,
    },
    GUNS: [
        {
            POSITION: [14, 3, 4, -3, 5, 0, 0.6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.twin,
                    g.puregunner,
                    g.machgun,
                ]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [14, 3, 4, -3, -5, 0, 0.8],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.twin,
                    g.puregunner,
                    g.machgun,
                ]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [14, 3, 4, 0, 2.5, 0, 0.4],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.twin,
                    g.puregunner,
                    g.machgun,
                ]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [14, 3, 4, 0, -2.5, 0, 0.2],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.twin,
                    g.puregunner,
                    g.machgun,
                ]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [14, 3, 4, 3, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.twin,
                    g.puregunner,
                    g.machgun,
                ]),
                TYPE: "bullet",
            },
        },
    ],
};
exports.overgunner = makeOver(exports.weirdGunner);

// SPRAYER UPGRADES
exports.redistributor = {
    PARENT: ["genericTank"],
    LABEL: "Redistributor",
    GUNS: [
        {
            POSITION: [26, 7, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.gunner,
                    g.lowpower,
                    g.mach,
                    g.morerecoil,
                ]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [23, 10, 1, 0, 0, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.gunner,
                    g.lowpower,
                    g.mach,
                    g.morerecoil,
                ]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [12, 10, 1.4, 8, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
                TYPE: "bullet",
            },
        },
    ],
};
exports.phoenix = {
    PARENT: ["genericTank"],
    LABEL: "Phoenix",
    DANGER: 5,
    TOOLTIP: "Right click to fire your main barrel.",
    GUNS: [
        {
            POSITION: [23, 7, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.gunner,
                    g.lowpower,
                    g.mach,
                    g.morerecoil,
                ]),
                TYPE: "bullet",
                LABEL: "Sprayer",
                ALT_FIRE: true,
            },
        },
        {
            POSITION: [12, 10, 1.4, 8, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
                TYPE: "bullet",
                LABEL: "Sprayer",
                ALT_FIRE: true,
            },
        },
        {
            POSITION: [16, 8, 1, 0, 0, 150, 0.1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.flank,
                    g.tri,
                    g.thruster,
                    g.halfrecoil,
                ]),
                TYPE: "bullet",
                LABEL: gunCalcNames.thruster,
            },
        },
        {
            POSITION: [16, 8, 1, 0, 0, 210, 0.1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.flank,
                    g.tri,
                    g.thruster,
                    g.halfrecoil,
                ]),
                TYPE: "bullet",
                LABEL: gunCalcNames.thruster,
            },
        },
        {
            POSITION: [18, 8, 1, 0, 0, 180, 0.6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.flank,
                    g.tri,
                    g.thruster,
                    g.halfrecoil,
                ]),
                TYPE: "bullet",
                LABEL: gunCalcNames.thruster,
            },
        },
    ],
};
exports.atomizer = {
    PARENT: ["genericTank"],
    LABEL: "Atomizer",
    GUNS: [
        {
            POSITION: [5, 7.5, 1.3, 18.5, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.gunner,
                    g.lowpower,
                    g.mach,
                    g.morerecoil,
                    g.atomizer,
                ]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [12, 10, 1.4, 8, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
                TYPE: "bullet",
            },
        },
    ],
};
exports.focal = {
    PARENT: ["genericTank"],
    LABEL: "Focal",
    GUNS: [
        {
            POSITION: [25, 7, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.gunner,
                    g.lowpower,
                    g.mach,
                    g.morerecoil,
                ]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [14, 10, 1.3, 8, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.chain]),
                TYPE: "bullet",
            },
        },
    ],
};

// FLANK GUARD UPGRADES
exports.hexaTank = {
    PARENT: ["genericTank"],
    LABEL: "Hexa Tank",
    DANGER: 5,
    GUNS: [
        {
            POSITION: [18, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [18, 8, 1, 0, 0, 120, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [18, 8, 1, 0, 0, 240, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [18, 8, 1, 0, 0, 60, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [18, 8, 1, 0, 0, 180, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [18, 8, 1, 0, 0, 300, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
                TYPE: "bullet",
            },
        },
    ],
};
exports.triAngle = {
    PARENT: ["genericTank"],
    LABEL: "Tri-Angle",
    BODY: {
        HEALTH: 0.8 * base.HEALTH,
        SHIELD: 0.8 * base.SHIELD,
        DENSITY: 0.6 * base.DENSITY,
    },
    DANGER: 5,
    GUNS: [
        {
            POSITION: [18, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.flank,
                    g.tri,
                    g.trifront,
                    g.tonsmorrecoil,
                ]),
                TYPE: "bullet",
                LABEL: "Front",
            },
        },
        {
            POSITION: [16, 8, 1, 0, 0, 150, 0.1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
                TYPE: "bullet",
                LABEL: gunCalcNames.thruster,
            },
        },
        {
            POSITION: [16, 8, 1, 0, 0, 210, 0.1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
                TYPE: "bullet",
                LABEL: gunCalcNames.thruster,
            },
        },
    ],
};
exports.auto3 = {
    PARENT: ["genericTank"],
    LABEL: "Auto-3",
    DANGER: 5,
    FACING_TYPE: "autospin",
    TURRETS: [
        {
            POSITION: [11, 8, 0, 0, 190, 0],
            TYPE: "autoTankGun",
        },
        {
            POSITION: [11, 8, 0, 120, 190, 0],
            TYPE: "autoTankGun",
        },
        {
            POSITION: [11, 8, 0, 240, 190, 0],
            TYPE: "autoTankGun",
        },
    ],
};

// HEXA TANK UPGRADES
exports.octoTank = {
    PARENT: ["genericTank"],
    LABEL: "Octo Tank",
    DANGER: 5,
    GUNS: [
        {
            POSITION: [18, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [18, 8, 1, 0, 0, 90, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [18, 8, 1, 0, 0, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [18, 8, 1, 0, 0, 270, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [18, 8, 1, 0, 0, 45, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [18, 8, 1, 0, 0, 135, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [18, 8, 1, 0, 0, 225, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [18, 8, 1, 0, 0, 315, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                TYPE: "bullet",
            },
        },
    ],
};
exports.cyclone = {
    PARENT: ["genericTank"],
    LABEL: "Cyclone",
    DANGER: 5,
    GUNS: [
        {
            POSITION: [15, 3.5, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.twin,
                    g.puregunner,
                    g.hurricane,
                ]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [15, 3.5, 1, 0, 0, 30, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.twin,
                    g.puregunner,
                    g.hurricane,
                ]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [15, 3.5, 1, 0, 0, 60, 0.25],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.twin,
                    g.puregunner,
                    g.hurricane,
                ]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [15, 3.5, 1, 0, 0, 90, 0.75],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.twin,
                    g.puregunner,
                    g.hurricane,
                ]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [15, 3.5, 1, 0, 0, 120, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.twin,
                    g.puregunner,
                    g.hurricane,
                ]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [15, 3.5, 1, 0, 0, 150, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.twin,
                    g.puregunner,
                    g.hurricane,
                ]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [15, 3.5, 1, 0, 0, 180, 0.25],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.twin,
                    g.puregunner,
                    g.hurricane,
                ]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [15, 3.5, 1, 0, 0, 210, 0.75],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.twin,
                    g.puregunner,
                    g.hurricane,
                ]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [15, 3.5, 1, 0, 0, 240, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.twin,
                    g.puregunner,
                    g.hurricane,
                ]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [15, 3.5, 1, 0, 0, 270, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.twin,
                    g.puregunner,
                    g.hurricane,
                ]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [15, 3.5, 1, 0, 0, 300, 0.25],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.twin,
                    g.puregunner,
                    g.hurricane,
                ]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [15, 3.5, 1, 0, 0, 330, 0.75],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.twin,
                    g.puregunner,
                    g.hurricane,
                ]),
                TYPE: "bullet",
            },
        },
    ],
};

// TRI-ANGLE UPGRADES
exports.fighter = {
    PARENT: ["genericTank"],
    LABEL: "Fighter",
    BODY: {
        DENSITY: 0.6 * base.DENSITY,
    },
    DANGER: 5,
    GUNS: [
        {
            POSITION: [18, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
                TYPE: "bullet",
                LABEL: "Front",
            },
        },
        {
            POSITION: [16, 8, 1, 0, -1, 90, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
                TYPE: "bullet",
                LABEL: "Side",
            },
        },
        {
            POSITION: [16, 8, 1, 0, 1, -90, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
                TYPE: "bullet",
                LABEL: "Side",
            },
        },
        {
            POSITION: [16, 8, 1, 0, 0, 150, 0.1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
                TYPE: "bullet",
                LABEL: gunCalcNames.thruster,
            },
        },
        {
            POSITION: [16, 8, 1, 0, 0, 210, 0.1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
                TYPE: "bullet",
                LABEL: gunCalcNames.thruster,
            },
        },
    ],
};
exports.booster = {
    PARENT: ["genericTank"],
    LABEL: "Booster",
    BODY: {
        HEALTH: base.HEALTH * 0.4,
        SHIELD: base.SHIELD * 0.4,
        DENSITY: base.DENSITY * 0.3,
    },
    DANGER: 5,
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [18, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.flank,
                    g.tri,
                    g.trifront,
                    g.tonsmorrecoil,
                ]),
                TYPE: "bullet",
                LABEL: "Front",
            },
        },
        {
            POSITION: [13, 8, 1, 0, -1, 140, 0.6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
                TYPE: "bullet",
                LABEL: gunCalcNames.thruster,
            },
        },
        {
            POSITION: [13, 8, 1, 0, 1, 220, 0.6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
                TYPE: "bullet",
                LABEL: gunCalcNames.thruster,
            },
        },
        {
            POSITION: [16, 8, 1, 0, 0, 150, 0.1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
                TYPE: "bullet",
                LABEL: gunCalcNames.thruster,
            },
        },
        {
            POSITION: [16, 8, 1, 0, 0, 210, 0.1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
                TYPE: "bullet",
                LABEL: gunCalcNames.thruster,
            },
        },
    ],
};
exports.autoTriAngle = makeAuto(exports.triAngle);
exports.autoTriAngle.BODY = { SPEED: base.SPEED };
exports.surfer = {
    PARENT: ["genericTank"],
    LABEL: "Surfer",
    BODY: {
        DENSITY: 0.6 * base.DENSITY,
    },
    DANGER: 5,
    GUNS: [
        {
            POSITION: [18, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
                TYPE: "bullet",
                LABEL: "Front",
            },
        },
        {
            POSITION: [7, 7.5, 0.6, 7, -1, 90, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm]),
                TYPE: "autoswarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [7, 7.5, 0.6, 7, 1, -90, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm]),
                TYPE: "autoswarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [16, 8, 1, 0, 0, 150, 0.1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
                TYPE: "bullet",
                LABEL: gunCalcNames.thruster,
            },
        },
        {
            POSITION: [16, 8, 1, 0, 0, 210, 0.1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
                TYPE: "bullet",
                LABEL: gunCalcNames.thruster,
            },
        },
    ],
};

// AUTO-3 UPGRADES
exports.auto5 = {
    PARENT: ["genericTank"],
    LABEL: "Auto-5",
    DANGER: 5,
    FACING_TYPE: "autospin",
    TURRETS: [
        {
            POSITION: [11, 8, 0, 0, 190, 0],
            TYPE: "autoTankGun",
        },
        {
            POSITION: [11, 8, 0, 72, 190, 0],
            TYPE: "autoTankGun",
        },
        {
            POSITION: [11, 8, 0, 144, 190, 0],
            TYPE: "autoTankGun",
        },
        {
            POSITION: [11, 8, 0, 216, 190, 0],
            TYPE: "autoTankGun",
        },
        {
            POSITION: [11, 8, 0, 288, 190, 0],
            TYPE: "autoTankGun",
        },
    ],
};
exports.mega3 = {
    PARENT: ["genericTank"],
    LABEL: "Mega-3",
    BODY: {
        SPEED: 0.95 * base.SPEED,
    },
    DANGER: 5,
    FACING_TYPE: "autospin",
    TURRETS: [
        {
            POSITION: [14, 8, 0, 0, 190, 0],
            TYPE: "megaAutoTankgun",
        },
        {
            POSITION: [14, 8, 0, 120, 190, 0],
            TYPE: "megaAutoTankgun",
        },
        {
            POSITION: [14, 8, 0, 240, 190, 0],
            TYPE: "megaAutoTankgun",
        },
    ],
};
exports.auto4 = {
    PARENT: ["genericTank"],
    LABEL: "Auto-4",
    FACING_TYPE: "autospin",
    TURRETS: [
        {
            POSITION: [13, 6, 0, 45, 160, 0],
            TYPE: "auto4gun",
        },
        {
            POSITION: [13, 6, 0, 135, 160, 0],
            TYPE: "auto4gun",
        },
        {
            POSITION: [13, 6, 0, 225, 160, 0],
            TYPE: "auto4gun",
        },
        {
            POSITION: [13, 6, 0, 315, 160, 0],
            TYPE: "auto4gun",
        },
    ],
};
exports.banshee = {
    PARENT: ["genericTank"],
    LABEL: "Banshee",
    DANGER: 5,
    BODY: {
        SPEED: 0.8 * base.SPEED,
        FOV: 1.1 * base.FOV,
    },
    FACING_TYPE: "autospin",
    TURRETS: [
        {
            POSITION: [10, 8, 0, 0, 80, 0],
            TYPE: "bansheegun",
        },
        {
            POSITION: [10, 8, 0, 120, 80, 0],
            TYPE: "bansheegun",
        },
        {
            POSITION: [10, 8, 0, 240, 80, 0],
            TYPE: "bansheegun",
        },
    ],
    GUNS: [
        {
            POSITION: [6, 11, 1.2, 8, 0, 60, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over]),
                TYPE: "drone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                WAIT_TO_CYCLE: true,
                MAX_CHILDREN: 2,
            },
        },
        {
            POSITION: [6, 11, 1.2, 8, 0, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over]),
                TYPE: "drone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                WAIT_TO_CYCLE: true,
                MAX_CHILDREN: 2,
            },
        },
        {
            POSITION: [6, 11, 1.2, 8, 0, 300, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over]),
                TYPE: "drone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                WAIT_TO_CYCLE: true,
                MAX_CHILDREN: 2,
            },
        },
    ],
};

// DIRECTOR UPGRADES
exports.overseer = {
    PARENT: ["genericTank"],
    LABEL: "Overseer",
    DANGER: 5,
    STAT_NAMES: statnames.drone,
    BODY: {
        SPEED: 0.9 * base.SPEED,
        FOV: 1.1 * base.FOV,
    },
    MAX_CHILDREN: 8,
    GUNS: [
        {
            POSITION: [6, 12, 1.2, 8, 0, 90, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over]),
                TYPE: "drone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                WAIT_TO_CYCLE: true,
            },
        },
        {
            POSITION: [6, 12, 1.2, 8, 0, 270, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over]),
                TYPE: "drone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                WAIT_TO_CYCLE: true,
            },
        },
    ],
};
exports.overfutility = {
    PARENT: ["genericTank"],
    LABEL: "Overfutility",
    DANGER: 5,
    STAT_NAMES: statnames.drone,
    BODY: {
        SPEED: 0.9 * base.SPEED,
        FOV: 1.1 * base.FOV,
    },
    GUNS: [
        {
            POSITION: [6, 12, 1.2, 8, 0, 90, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over, g.infinity]),
                TYPE: "drone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                WAIT_TO_CYCLE: true,
            },
        },
        {
            POSITION: [6, 12, 1.2, 8, 0, 270, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over, g.infinity]),
                TYPE: "drone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                WAIT_TO_CYCLE: true,
            },
        },
    ],
	TURRETS: [
        {
            /** SIZE     X       Y     ANGLE    ARC */
            POSITION: [13, 0, 0, 0, 360, 1],
            TYPE: "infinitySymbol",
        },
    ],
};
exports.cruiser = {
    PARENT: ["genericTank"],
    LABEL: "Cruiser",
    DANGER: 5,
    FACING_TYPE: "locksFacing",
    STAT_NAMES: statnames.swarm,
    BODY: {
        FOV: 1.2 * base.FOV,
    },
    GUNS: [
        {
            POSITION: [7, 7.5, 0.6, 7, 4, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm]),
                TYPE: "swarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [7, 7.5, 0.6, 7, -4, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm]),
                TYPE: "swarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
    ],
};
exports.fishingnet = {
    PARENT: ["genericTank"],
    LABEL: "Fishing net",
    DANGER: 5,
    FACING_TYPE: "locksFacing",
    STAT_NAMES: statnames.swarm,
    BODY: {
        FOV: 1.2 * base.FOV,
    },
    GUNS: [
        {
            POSITION: [6.5, 4, 0.6, 7, 4, 10, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.healthtwin, g.damageweak]),
                TYPE: "swarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [6.5, 4, 0.6, 7, -4, -10, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.healthtwin, g.damageweak]),
                TYPE: "swarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
		{
            POSITION: [6.5, 4, 0.6, 7, 3, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.healthtwin, g.damageweak]),
                TYPE: "swarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
		{
            POSITION: [6.5, 4, 0.6, 7, -3, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.healthtwin, g.damageweak]),
                TYPE: "swarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
    ],
};
exports.fish = {
    PARENT: ["genericTank"],
    LABEL: "Fish",
    DANGER: 5,
    FACING_TYPE: "locksFacing",
    STAT_NAMES: statnames.swarm,
    BODY: {
        FOV: 1.2 * base.FOV,
    },
    GUNS: [
        {
            POSITION: [8, 8.5, 0.6, 7, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.damagex15, g.damageweakweak, g.morereload]),
                TYPE: "swarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
    ],
};
exports.cruiserdrive = {
    PARENT: ["genericTank"],
    LABEL: "Cruiserdrive",
    DANGER: 5,
    FACING_TYPE: "locksFacing",
    STAT_NAMES: statnames.swarm,
    BODY: {
        FOV: 1.2 * base.FOV,
    },
    GUNS: [
        {
            POSITION: [7, 7.5, 0.6, 7, 4, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.damage75]),
                TYPE: "turretedSwarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [7, 7.5, 0.6, 7, -4, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.damage75]),
                TYPE: "turretedSwarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
    ],
	TURRETS: [
        {
            /** SIZE     X       Y     ANGLE    ARC */
            POSITION: [9, 0, 0, 0, 360, 1],
            TYPE: "overdriveDeco",
        },
    ],
};
exports.underseer = {
    PARENT: ["genericTank"],
    LABEL: "Fallen Underseer",
    DANGER: 5,
    STAT_NAMES: statnames.drone,
    BODY: {
        SPEED: 0.9 * base.SPEED,
    },
    SHAPE: 4,
    MAX_CHILDREN: 14,
    GUNS: [
        {
            POSITION: [5.25, 12, 1.2, 8, 0, 90, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.sunchip, g.fallennecro]),
                TYPE: "sunchip",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.necro,
            },
        },
        {
            POSITION: [5.25, 12, 1.2, 8, 0, 270, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.sunchip, g.fallennecro]),
                TYPE: "sunchip",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.necro,
            },
        },
    ],
};
exports.spawner = {
    PARENT: ["genericTank"],
    LABEL: "Spawner",
    DANGER: 5,
    STAT_NAMES: statnames.drone,
    BODY: {
        SPEED: base.SPEED * 0.8,
        FOV: 1.1,
    },
    GUNS: [
        {
            /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [4.5, 10, 1, 10.5, 0, 0, 0],
        },
        {
            POSITION: [1, 12, 1, 15, 0, 0, 0],
            PROPERTIES: {
                MAX_CHILDREN: 4,
                SHOOT_SETTINGS: combineStats([g.factory, g.babyfactory]),
                TYPE: "minion",
                STAT_CALCULATOR: gunCalcNames.drone,
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
            },
        },
        {
            POSITION: [11.5, 12, 1, 0, 0, 0, 0],
        },
    ],
};
exports.manager = {
    PARENT: ["genericTank"],
    LABEL: "Manager",
    DANGER: 5,
    STAT_NAMES: statnames.drone,
    BODY: {
        SPEED: 0.85 * base.SPEED,
        FOV: 1.1 * base.FOV,
    },
    INVISIBLE: [0.08, 0.03],
    TOOLTIP: "Stay still to turn invisible.",
    MAX_CHILDREN: 8,
    GUNS: [
        {
            POSITION: [6, 12, 1.2, 8, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over, g.doublereload]),
                TYPE: "drone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
            },
        },
    ],
};
exports.coach = {
    PARENT: ["genericTank"],
    LABEL: "Coach",
    STAT_NAMES: statnames.drone,
    DANGER: 5,
    BODY: {
		SPEED: 0.90 * base.SPEED,
        FOV: base.FOV * 1.1,
    },
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [16, 16, 1.4, 0, 0, 0, 1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.bigdrone, g.lessreload]),
                TYPE: "drone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                MAX_CHILDREN: 2,
            },
        },
    ],
};
exports.castling = {
    PARENT: ["genericTank"],
    LABEL: "Castling",
    STAT_NAMES: statnames.drone,
    DANGER: 5,
    BODY: {
		SPEED: 0.90 * base.SPEED,
        FOV: base.FOV * 1.1,
    },
	TURRETS: [
        {
            /** SIZE     X       Y     ANGLE    ARC */
            POSITION: [9, 0, 0, 0, 360, 1],
            TYPE: "directordriveDeco",
        },
    ],
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [16, 16, 1.4, 0, 0, 0, 1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.bigdrone, g.lessreload, g.damage75]),
                TYPE: "droneCastling",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                WAIT_TO_CYCLE: true,
                MAX_CHILDREN: 1,
            },
        },
    ],
};
exports.greatcoach = {
    PARENT: ["genericTank"],
    LABEL: "Great Coach",
    STAT_NAMES: statnames.drone,
    DANGER: 5,
    BODY: {
		SPEED: 0.80 * base.SPEED,
        FOV: base.FOV * 1.1,
    },
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [18, 18, 1.4, 0, 0, 0, 1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.greatdrone, g.halfreload]),
                TYPE: "drone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                MAX_CHILDREN: 1,
            },
        },
    ],
};
exports.stony = {
    PARENT: ["genericTank"],
    LABEL: "Stony",
    STAT_NAMES: statnames.drone,
    DANGER: 5,
    BODY: {
		SPEED: 0.90 * base.SPEED,
        FOV: base.FOV * 1.1,
    },
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [14, 14, 1.4, 0, 0, 90, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.minibigdrone, g.one_third_reload]),
                TYPE: "drone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                MAX_CHILDREN: 2,
            },
        },
		{
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [14, 14, 1.4, 0, 0, 270, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.minibigdrone, g.one_third_reload]),
                TYPE: "drone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                MAX_CHILDREN: 2,
            },
        },
    ],
};
exports.badcoach = {
    PARENT: ["genericTank"],
    LABEL: "Bad Coach",
    STAT_NAMES: statnames.drone,
    DANGER: 5,
    BODY: {
		SPEED: 0.90 * base.SPEED,
        FOV: base.FOV * 1.1,
    },
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [16, 16, 1.4, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.bigdrone, g.finity]),
                TYPE: "emptydrone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                MAX_CHILDREN: 4,
            },
        },
		{
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [14, 13, 1.3, 0, 0, 0, 0],
			PROPERTIES: {
				COLOR: -1,
				ALPHA: 0.7,
				BORDERLESS: false
            },
        },
    ],
};
// OVERSEER UPGRADES
exports.overlord = {
    PARENT: ["genericTank"],
    LABEL: "Overlord",
    DANGER: 5,
    STAT_NAMES: statnames.drone,
    BODY: {
        SPEED: 0.8 * base.SPEED,
        FOV: 1.1 * base.FOV,
    },
    MAX_CHILDREN: 8,
    GUNS: [
        {
            POSITION: [6, 12, 1.2, 8, 0, 90, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over]),
                TYPE: "drone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                WAIT_TO_CYCLE: true,
            },
        },
        {
            POSITION: [6, 12, 1.2, 8, 0, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over]),
                TYPE: "drone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                WAIT_TO_CYCLE: true,
            },
        },
        {
            POSITION: [6, 12, 1.2, 8, 0, 270, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over]),
                TYPE: "drone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                WAIT_TO_CYCLE: true,
            },
        },
        {
            POSITION: [6, 12, 1.2, 8, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over]),
                TYPE: "drone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                WAIT_TO_CYCLE: true,
            },
        },
    ],
};
exports.autoOverseer = makeAuto(exports.overseer);
exports.turretedDrone = makeAuto(generics.drone);
exports.overdriveDeco = makeDeco(4);
exports.directordriveDeco = makeDeco(4);
exports.directorstormDeco = makeStormDeco(4);
exports.directordrive = {
    PARENT: ["genericTank"],
    LABEL: "Directordrive",
    DANGER: 5,
    STAT_NAMES: statnames.drone,
    BODY: {
        SPEED: 0.9 * base.SPEED,
        FOV: 1.1 * base.FOV,
    },
    TURRETS: [
        {
            POSITION: [9, 0, 0, 0, 360, 1],
            TYPE: "overdriveDeco",
        },
    ],
    GUNS: [
        {
            POSITION: [6, 12, 1.2, 8, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone]),
                TYPE: "turretedDrone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                WAIT_TO_CYCLE: true,
                MAX_CHILDREN: 8,
            },
        },
    ],
};
exports.overdrive = makeMulti({
    PARENT: "genericTank",
    DANGER: 5,
    STAT_NAMES: statnames.drone,
    BODY: {
        SPEED: 0.9 * base.SPEED,
        FOV: 1.1 * base.FOV,
    },
    TURRETS: [
        {
            POSITION: [9, 0, 0, 0, 360, 1],
            TYPE: "overdriveDeco",
        },
    ],
    GUNS: [
        {
            POSITION: [6, 12, 1.2, 8, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over]),
                TYPE: "turretedDrone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                WAIT_TO_CYCLE: true,
                MAX_CHILDREN: 4
            }
        }
    ]
}, 2, "Overdrive", 90)
exports.directorstorm = {
    PARENT: ["genericTank"],
    LABEL: "Directorstorm",
    DANGER: 5,
    STAT_NAMES: statnames.drone,
    BODY: {
        SPEED: 0.9 * base.SPEED,
        FOV: 1.1 * base.FOV,
    },
    TURRETS: [
        {
            POSITION: [9, 0, 0, 0, 360, 1],
            TYPE: "directorstormDeco",
        },
    ],
    GUNS: [
        {
            POSITION: [6, 12, 1.2, 8, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over]),
                TYPE: "dronestorm",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                WAIT_TO_CYCLE: true,
                MAX_CHILDREN: 6,
            },
        },
    ],
};
exports.commander = {
    PARENT: ["genericTank"],
    LABEL: "Commander",
    STAT_NAMES: statnames.drone,
    DANGER: 5,
    BODY: {
        FOV: base.FOV * 1.15,
    },
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [8, 11, 1.3, 6, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.commander]),
                TYPE: "drone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                MAX_CHILDREN: 2,
                STAT_CALCULATOR: gunCalcNames.drone,
            },
        },
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [8, 11, 1.3, 6, 0, 120, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.commander]),
                TYPE: "drone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                MAX_CHILDREN: 2,
                STAT_CALCULATOR: gunCalcNames.drone,
            },
        },
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [8, 11, 1.3, 6, 0, 240, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.commander]),
                TYPE: "drone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                MAX_CHILDREN: 2,
                STAT_CALCULATOR: gunCalcNames.drone,
            },
        },
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [7, 7.5, 0.6, 7, 0, 60, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm]),
                TYPE: "swarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [7, 7.5, 0.6, 7, 0, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm]),
                TYPE: "swarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [7, 7.5, 0.6, 7, 0, 300, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm]),
                TYPE: "swarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
    ],
};

// CRUISER UPGRADES
exports.carrier = {
    PARENT: ["genericTank"],
    LABEL: "Carrier",
    DANGER: 5,
    STAT_NAMES: statnames.swarm,
    FACING_TYPE: "locksFacing",
    BODY: {
        FOV: base.FOV * 1.2,
    },
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [7, 8, 0.6, 7, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier]),
                TYPE: "swarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [7, 8, 0.6, 7, 2, 30, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier]),
                TYPE: "swarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [7, 8, 0.6, 7, -2, -30, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier]),
                TYPE: "swarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
    ],
};
exports.battleship = {
    PARENT: ["genericTank"],
    LABEL: "Battleship",
    DANGER: 5,
    STAT_NAMES: statnames.swarm,
    FACING_TYPE: "locksFacing",
    BODY: {
        FOV: 1.2 * base.FOV,
    },
    GUNS: [
        {
            POSITION: [7, 7.5, 0.6, 7, 4, 90, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
                TYPE: "swarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
                LABEL: "Guided",
            },
        },
        {
            POSITION: [7, 7.5, 0.6, 7, -4, 90, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm]),
                TYPE: ["autoswarm"],
                STAT_CALCULATOR: gunCalcNames.swarm,
                LABEL: "Autonomous",
            },
        },
        {
            POSITION: [7, 7.5, 0.6, 7, 4, 270, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm]),
                TYPE: ["autoswarm"],
                STAT_CALCULATOR: gunCalcNames.swarm,
                LABEL: "Autonomous",
            },
        },
        {
            POSITION: [7, 7.5, 0.6, 7, -4, 270, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
                TYPE: "swarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
                LABEL: "Guided",
            },
        },
    ],
};
exports.fortress = {
    PARENT: ["genericTank"],
    LABEL: "Fortress",
    DANGER: 5,
    STAT_NAMES: statnames.mixed,
    BODY: {
        SPEED: 0.8 * base.SPEED,
        FOV: 1.2 * base.FOV,
    },
    GUNS: [
        {
            POSITION: [7, 7.5, 0.6, 7, 0, 60, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm]),
                TYPE: [
                    "swarm",
                    {
                        CONTROLLERS: ["canRepel"],
                    },
                ],
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [7, 7.5, 0.6, 7, 0, 180, 1 / 3],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm]),
                TYPE: [
                    "swarm",
                    {
                        CONTROLLERS: ["canRepel"],
                    },
                ],
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [7, 7.5, 0.6, 7, 0, 300, 2 / 3],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm]),
                TYPE: [
                    "swarm",
                    {
                        CONTROLLERS: ["canRepel"],
                    },
                ],
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [14, 9, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [4, 9, 1.5, 14, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.halfrange, g.slow]),
                TYPE: "trap",
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
        {
            POSITION: [14, 9, 1, 0, 0, 120, 0],
        },
        {
            POSITION: [4, 9, 1.5, 14, 0, 120, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.halfrange, g.slow]),
                TYPE: "trap",
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
        {
            POSITION: [14, 9, 1, 0, 0, 240, 0],
        },
        {
            POSITION: [4, 9, 1.5, 14, 0, 240, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.halfrange, g.slow]),
                TYPE: "trap",
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
    ],
};
exports.autoCruiser = makeAuto(exports.cruiser);

// UNDERSEER UPGRADES
exports.necromancer = {
    PARENT: ["genericTank"],
    LABEL: "Fallen Necromancer",
    DANGER: 5,
    STAT_NAMES: statnames.necro,
    BODY: {
        SPEED: 0.8 * base.SPEED,
    },
    SHAPE: 4,
    MAX_CHILDREN: 40,
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [5.25, 12, 1.2, 8, 0, 90, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.sunchip, g.fallennecro]),
                TYPE: "sunchip",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.necro,
            },
        },
        {
            POSITION: [5.25, 12, 1.2, 8, 0, 270, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.sunchip, g.fallennecro]),
                TYPE: "sunchip",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.necro,
            },
        },
        {
            POSITION: [5.25, 12, 1.2, 8, 0, 0, 0.25],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.sunchip, g.fallennecro]),
                TYPE: "sunchip",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                MAX_CHILDREN: 4,
                STAT_CALCULATOR: gunCalcNames.necro,
            },
        },
        {
            POSITION: [5.25, 12, 1.2, 8, 0, 180, 0.75],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.sunchip, g.fallennecro]),
                TYPE: "sunchip",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                MAX_CHILDREN: 4,
                STAT_CALCULATOR: gunCalcNames.necro,
            },
        },
    ],
};
exports.maleficitor = {
    PARENT: ["genericTank"],
    LABEL: "Fallen Maleficitor",
    DANGER: 5,
    TOOLTIP: "Press R and wait to turn your drones invisible.",
    STAT_NAMES: statnames.necro,
    BODY: {
        SPEED: base.SPEED * 0.85,
    },
    SHAPE: 4,
    MAX_CHILDREN: 60,
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [5.25, 12, 1.2, 8, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.sunchip, g.maleficitor, g.fallennecro]),
                TYPE: [
                    "sunchip",
                    {
                        INVISIBLE: [0.06, 0.03],
                    },
                ],
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.necro,
            },
        },
    ],
};
exports.infestor = {
    PARENT: ["genericTank"],
    LABEL: "Fallen Infestor",
    DANGER: 5,
    STAT_NAMES: statnames.drone,
    BODY: {
        SPEED: base.SPEED * 0.9,
    },
    MAX_CHILDREN: 60,
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [7.25, 6, 1.2, 6, -5, 90, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.sunchip, g.fallennecro]),
                TYPE: "eggchip",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.necro,
            },
        },
        {
            POSITION: [7.25, 6, 1.2, 6, 5, 90, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.sunchip, g.fallennecro]),
                TYPE: "eggchip",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.necro,
            },
        },
        {
            POSITION: [7.25, 6, 1.2, 6, -5, 270, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.sunchip, g.fallennecro]),
                TYPE: "eggchip",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.necro,
            },
        },
        {
            POSITION: [7.25, 6, 1.2, 6, 5, 270, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.sunchip, g.fallennecro]),
                TYPE: "eggchip",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.necro,
            },
        },
    ],
};

// SPAWNER UPGRADES
exports.factory = {
    PARENT: ["genericTank"],
    LABEL: "Factory",
    DANGER: 5,
    STAT_NAMES: statnames.drone,
    BODY: {
        SPEED: base.SPEED * 0.8,
        FOV: 1.1,
    },
    MAX_CHILDREN: 6,
    GUNS: [
        {
            /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [5, 11, 1, 10.5, 0, 0, 0],
        },
        {
            POSITION: [2, 14, 1, 15.5, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.factory]),
                TYPE: "minion",
                STAT_CALCULATOR: gunCalcNames.drone,
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
            },
        },
        {
            POSITION: [12, 14, 1, 0, 0, 0, 0],
        },
    ],
};
exports.autoSpawner = makeAuto(exports.spawner);

// POUNDER UPGRADES
exports.destroyer = {
    PARENT: ["genericTank"],
    LABEL: "Destroyer",
    DANGER: 5,
    GUNS: [
        {
            POSITION: [21, 14, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy]),
                TYPE: "bullet",
            },
        },
    ],
};
exports.artillery = {
    PARENT: ["genericTank"],
    DANGER: 5,
    LABEL: "Artillery",
    GUNS: [
        {
            POSITION: [17, 3, 1, 0, -6, -7, 0.25],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty]),
                TYPE: "bullet",
                LABEL: "Secondary",
            },
        },
        {
            POSITION: [17, 3, 1, 0, 6, 7, 0.75],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty]),
                TYPE: "bullet",
                LABEL: "Secondary",
            },
        },
        {
            POSITION: [19, 12, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty]),
                TYPE: "bullet",
                LABEL: "Heavy",
            },
        },
    ],
};
exports.launcher = {
    PARENT: ["genericTank"],
    LABEL: "Launcher",
    BODY: {
        FOV: base.FOV * 1.1,
    },
    DANGER: 5,
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [10, 9, 1, 9, 0, 0, 0],
        },
        {
            POSITION: [17, 13, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty, g.arty]),
                TYPE: "minimissile",
                STAT_CALCULATOR: gunCalcNames.sustained,
            },
        },
    ],
};
exports.shotgun = {
    PARENT: ["genericTank"],
    DANGER: 5,
    LABEL: "Shotgun",
    GUNS: [
        {
            POSITION: [4, 3, 1, 11, -3, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [4, 3, 1, 11, 3, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [4, 4, 1, 13, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
                TYPE: "casing",
            },
        },
        {
            POSITION: [1, 4, 1, 12, -1, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
                TYPE: "casing",
            },
        },
        {
            POSITION: [1, 4, 1, 11, 1, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
                TYPE: "casing",
            },
        },
        {
            POSITION: [1, 3, 1, 13, -1, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [1, 3, 1, 13, 1, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [1, 2, 1, 13, 2, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
                TYPE: "casing",
            },
        },
        {
            POSITION: [1, 2, 1, 13, -2, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
                TYPE: "casing",
            },
        },
        {
            POSITION: [15, 14, 1, 6, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.realfake]),
                TYPE: "casing",
            },
        },
        {
            POSITION: [8, 14, -1.3, 4, 0, 0, 0],
        },
    ],
};
exports.eagle = {
    PARENT: ["genericTank"],
    LABEL: "Eagle",
    DANGER: 5,
    TOOLTIP: "Right click to fire your main barrel.",
    GUNS: [
        {
            POSITION: [20, 12, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound]),
                TYPE: "bullet",
                LABEL: "Pounder",
                ALT_FIRE: true,
            },
        },
        {
            POSITION: [16, 8, 1, 0, 0, 150, 0.1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.flank,
                    g.tri,
                    g.thruster,
                    g.halfrecoil,
                ]),
                TYPE: "bullet",
                STAT_CALCULATOR: gunCalcNames.thruster,
            },
        },
        {
            POSITION: [16, 8, 1, 0, 0, 210, 0.1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.flank,
                    g.tri,
                    g.thruster,
                    g.halfrecoil,
                ]),
                TYPE: "bullet",
                STAT_CALCULATOR: gunCalcNames.thruster,
            },
        },
        {
            POSITION: [18, 8, 1, 0, 0, 180, 0.6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.flank,
                    g.tri,
                    g.thruster,
                    g.halfrecoil,
                ]),
                TYPE: "bullet",
                STAT_CALCULATOR: gunCalcNames.thruster,
            },
        },
    ],
};

// DESTROYER UPGRADES
exports.annihilator = {
    PARENT: ["genericTank"],
    LABEL: "Annihilator",
    DANGER: 5,
    GUNS: [
        {
            POSITION: [20.5, 19.5, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.anni]),
                TYPE: "bullet",
            },
        },
    ],
};
exports.drunk = {
    PARENT: ["genericTank"],
    LABEL: "Drunk",
    DANGER: 5,
	TURRETS: [
        {
            POSITION: [9, 0, 0, 0, 360, 1],
            TYPE: "bulletsmasherdeco",
        },
    ],
    GUNS: [
        {
            POSITION: [15.5, 12.0, 1.5, 0, 0, 0, 0],
        },
		{
            POSITION: [3, 20, 0.5, 15, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.anni, g.drunk]),
                TYPE: "bulletsmasher",
            },
        },
    ],
};
exports.poisonous = {
    PARENT: ["genericTank"],
    LABEL: "Poisonous",
    DANGER: 5,
	TURRETS: [
        {
            POSITION: [9, 0, 0, 0, 360, 1],
            TYPE: "bulletsmasherdeco",
        },
    ],
    GUNS: [
        {
            POSITION: [7.5, 4.0, 4.0, 8, 0, 0, 0],
        },
		{
            POSITION: [3, 18, 0.5, 15, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.anni, g.drunk, g.damage75]),
                TYPE: "bulletsmasherable",
            },
        },
    ],
};
exports.brewliner = {
    PARENT: ["genericTank"],
    LABEL: "Brewliner",
    DANGER: 5,
	TURRETS: [
        {
            POSITION: [9, 0, 0, 0, 360, 1],
            TYPE: "bulletsmasherdeco",
        },
    ],
    GUNS: [
        {
            POSITION: [15.5, 8.0, 1.5, 0, 0, 0, 0],
        },
		{
            POSITION: [3, 14, 0.5, 21, 0, 0, 0.33],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.anni, g.drunk, g.brew]),
                TYPE: "bulletsmasher",
            },
        },
		{
            POSITION: [3, 14, 0.5, 18, 0, 0, 0.66],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.anni, g.drunk, g.brew]),
                TYPE: "bulletsmasher",
            },
        },
		{
            POSITION: [3, 14, 0.5, 15, 0, 0, 1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.anni, g.drunk, g.brew]),
                TYPE: "bulletsmasher",
            },
        },
    ],
};
exports.strongihilator = {
    PARENT: ["genericTank"],
    LABEL: "Strongihilator",
    DANGER: 5,
	TURRETS: [
        {
            POSITION: [9, 0, 0, 0, 360, 1],
            TYPE: "bulletsmasherdeco",
        },
    ],
    GUNS: [
        {
            POSITION: [15.5, 19.5, 1.5, 0, 0, 0, 0],
        },
		{
            POSITION: [3, 31, 0.5, 15, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.anni, g.strongi]),
                TYPE: "bulletsmasher",
            },
        },
    ],
};
exports.hybrid = makeHybrid(exports.destroyer, "Hybrid");

// ARTILLERY UPGRADES
exports.mortar = {
    PARENT: ["genericTank"],
    LABEL: "Mortar",
    DANGER: 5,
    GUNS: [
        {
            POSITION: [13, 3, 1, 0, -8, -7, 0.6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin]),
                TYPE: "bullet",
                LABEL: "Secondary",
            },
        },
        {
            POSITION: [13, 3, 1, 0, 8, 7, 0.8],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin]),
                TYPE: "bullet",
                LABEL: "Secondary",
            },
        },
        {
            POSITION: [17, 3, 1, 0, -6, -7, 0.2],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin]),
                TYPE: "bullet",
                LABEL: "Secondary",
            },
        },
        {
            POSITION: [17, 3, 1, 0, 6, 7, 0.4],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin]),
                TYPE: "bullet",
                LABEL: "Secondary",
            },
        },
        {
            POSITION: [19, 12, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty]),
                TYPE: "bullet",
                LABEL: "Heavy",
            },
        },
    ],
};
exports.ordnance = {
    PARENT: ["genericTank"],
    LABEL: "Ordnance",
    DANGER: 5,
    BODY: {
        SPEED: base.SPEED * 0.9,
        FOV: base.FOV * 1.25,
    },
    CONTROLLERS: ["zoom"],
    TOOLTIP: "Hold right click to zoom.",
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [17, 3, 1, 0, -5.75, -6, 0.25],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty]),
                TYPE: "bullet",
                LABEL: "Secondary",
            },
        },
        {
            POSITION: [17, 3, 1, 0, 5.75, 6, 0.75],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty]),
                TYPE: "bullet",
                LABEL: "Secondary",
            },
        },
        {
            POSITION: [24, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunter2]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [21, 11, 1, 0, 0, 0, 0.25],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter]),
                TYPE: "bullet",
            },
        },
    ],
};
exports.beekeeper = {
    PARENT: ["genericTank"],
    DANGER: 5,
    LABEL: "Beekeeper",
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [14, 3, 1, 0, -6, -7, 0.25],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.bees]),
                TYPE: ["bee", { INDEPENDENT: true }],
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                WAIT_TO_CYCLE: true,
                LABEL: "Secondary",
            },
        },
        {
            POSITION: [14, 3, 1, 0, 6, 7, 0.75],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.bees]),
                TYPE: ["bee", { INDEPENDENT: true }],
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                WAIT_TO_CYCLE: true,
                LABEL: "Secondary",
            },
        },
        {
            POSITION: [19, 12, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty]),
                TYPE: "bullet",
                LABEL: "Heavy",
            },
        },
    ],
};
exports.dealership = {
    PARENT: ["genericTank"],
    DANGER: 5,
    LABEL: "Dealership",
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [14, 3, 0.7, 0, -4, -7, 0.75],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.bees, g.damageweak]),
                TYPE: ["bee", { INDEPENDENT: true }],
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                WAIT_TO_CYCLE: true,
                LABEL: "Secondary",
            },
        },
        {
            POSITION: [14, 3, 0.7, 0, 4, 7, 0.75],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.bees, g.damageweak]),
                TYPE: ["bee", { INDEPENDENT: true }],
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                WAIT_TO_CYCLE: true,
                LABEL: "Secondary",
            },
        },
		{
            POSITION: [16, 5, 0.7, 0, 0, 0, 0.25],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.bees, g.damageweak, g.damageweak]),
                TYPE: ["bee", { INDEPENDENT: true }],
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                WAIT_TO_CYCLE: true,
                LABEL: "Secondary",
            },
        },
    ],
};
exports.allergy = {
    PARENT: ["genericTank"],
    DANGER: 5,
    LABEL: "Allergy",
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [18, 3, 0.7, 0, -4, -7, 0.75],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.bees, g.controllablebee]),
                TYPE: ["controllablebee"],
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                WAIT_TO_CYCLE: true,
                LABEL: "Secondary",
            },
        },
        {
            POSITION: [18, 3, 0.7, 0, 4, 7, 0.75],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.bees, g.controllablebee]),
                TYPE: ["controllablebee"],
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                WAIT_TO_CYCLE: true,
                LABEL: "Secondary",
            },
        },
		{
            POSITION: [20, 5, 0.7, 0, 0, 0, 0.25],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.bees, g.controllablebee, g.damageweak, g.damageweak, g.damageweak]),
                TYPE: ["controllablebee"],
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                WAIT_TO_CYCLE: true,
                LABEL: "Secondary",
            },
        },
    ],
};
exports.beefarm = {
    PARENT: ["genericTank"],
    DANGER: 5,
    LABEL: "Bee Farm",
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [14, 3, 0.7, 0, -6, -7, 0.75],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.bees]),
                TYPE: ["bee", { INDEPENDENT: true }],
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                WAIT_TO_CYCLE: true,
                LABEL: "Secondary",
            },
        },
        {
            POSITION: [14, 3, 0.7, 0, 6, 7, 0.75],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.bees]),
                TYPE: ["bee", { INDEPENDENT: true }],
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                WAIT_TO_CYCLE: true,
                LABEL: "Secondary",
            },
        },
		{
            POSITION: [16, 3, 0.7, 0, 4, 0, 0.25],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.bees]),
                TYPE: ["bee", { INDEPENDENT: true }],
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                WAIT_TO_CYCLE: true,
                LABEL: "Secondary",
            },
        },
		{
            POSITION: [16, 3, 0.7, 0, -4, 0, 0.25],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.bees]),
                TYPE: ["bee", { INDEPENDENT: true }],
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                WAIT_TO_CYCLE: true,
                LABEL: "Secondary",
            },
        },
    ],
};
exports.fieldGun = {
    PARENT: ["genericTank"],
    LABEL: "Field Gun",
    BODY: {
        FOV: base.FOV * 1.1,
    },
    DANGER: 5,
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [15, 3, 1, 0, -6, -7, 0.25],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty]),
                TYPE: "bullet",
                LABEL: "Secondary",
            },
        },
        {
            POSITION: [15, 3, 1, 0, 6, 7, 0.75],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty]),
                TYPE: "bullet",
                LABEL: "Secondary",
            },
        },
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [10, 9, 1, 9, 0, 0, 0],
        },
        {
            POSITION: [17, 13, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty, g.arty]),
                TYPE: "minimissile",
                STAT_CALCULATOR: gunCalcNames.sustained,
            },
        },
    ],
};

// LAUNCHER UPGRADES
exports.skimmer = {
    PARENT: ["genericTank"],
    BODY: {
        FOV: 1.15 * base.FOV,
    },
    LABEL: "Skimmer",
    DANGER: 5,
    GUNS: [
        {
            POSITION: [10, 14, -0.5, 9, 0, 0, 0],
        },
        {
            POSITION: [17, 15, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.pound,
                    g.arty,
                    g.arty,
                    g.skim,
                ]),
                TYPE: "missile",
                STAT_CALCULATOR: gunCalcNames.sustained,
            },
        },
    ],
};
exports.twister = {
    PARENT: ["genericTank"],
    BODY: {
        FOV: 1.1 * base.FOV,
    },
    LABEL: "Twister",
    DANGER: 5,
    GUNS: [
        {
            POSITION: [10, 13, -0.5, 9, 0, 0, 0],
        },
        {
            POSITION: [17, 14, -1.4, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.pound,
                    g.arty,
                    g.arty,
                    g.skim,
                    g.morespeed,
                    g.one_third_reload,
                ]),
                TYPE: "spinmissile",
                STAT_CALCULATOR: gunCalcNames.sustained,
            },
        },
    ],
};
exports.swarmer = {
    PARENT: ["genericTank"],
    DANGER: 5,
    LABEL: "Swarmer",
    GUNS: [
        {
            POSITION: [14, 14, -1.2, 5, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.hive, g.doublereload]),
                TYPE: "hive",
            },
        },
        {
            POSITION: [15, 12, 1, 5, 0, 0, 0],
        },
    ],
};
exports.sidewinder = {
    PARENT: ["genericTank"],
    LABEL: "Sidewinder",
    DANGER: 5,
    BODY: {
        SPEED: 0.8 * base.SPEED,
        FOV: 1.3 * base.FOV,
    },
    GUNS: [
        {
            POSITION: [10, 11, -0.5, 14, 0, 0, 0],
        },
        {
            POSITION: [21, 12, -1.1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.sidewind]),
                TYPE: "snake",
                STAT_CALCULATOR: gunCalcNames.sustained,
            },
        },
    ],
};

// TRAPPER UPGRADES
exports.builder = {
    PARENT: ["genericTank"],
    DANGER: 5,
    LABEL: "Builder",
    STAT_NAMES: statnames.trap,
    BODY: {
        SPEED: 0.8 * base.SPEED,
        FOV: 1.15 * base.FOV,
    },
    GUNS: [
        {
            POSITION: [18, 12, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [2, 12, 1.1, 18, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.block]),
                TYPE: "setTrap",
            },
        },
    ],
};
exports.supplier = {
    PARENT: ["genericTank"],
    DANGER: 5,
    LABEL: "Supplier",
    STAT_NAMES: statnames.trap,
    BODY: {
        SPEED: 0.8 * base.SPEED,
        FOV: 1.15 * base.FOV,
    },
    GUNS: [
        {
            POSITION: [20, 12, 1.5, 0, 0, 0, 0],
        },
        {
            POSITION: [2, 19, 1.1, 20, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.machbuilter, g.block]),
                TYPE: "setTrap",
            },
        },
    ],
};
exports.triTrapper = {
    PARENT: ["genericTank"],
    LABEL: "Tri-Trapper",
    DANGER: 5,
    STAT_NAMES: statnames.trap,
    GUNS: [
        {
            POSITION: [15, 7, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [3, 7, 1.7, 15, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.flank]),
                TYPE: "trap",
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
        {
            POSITION: [15, 7, 1, 0, 0, 120, 0],
        },
        {
            POSITION: [3, 7, 1.7, 15, 0, 120, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.flank]),
                TYPE: "trap",
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
        {
            POSITION: [15, 7, 1, 0, 0, 240, 0],
        },
        {
            POSITION: [3, 7, 1.7, 15, 0, 240, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.flank]),
                TYPE: "trap",
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
    ],
};
exports.trapGuard = {
    PARENT: ["genericTank"],
    LABEL: "Trap Guard",
    STAT_NAMES: statnames.mixed,
    DANGER: 5,
    GUNS: [
        {
            POSITION: [20, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [13, 8, 1, 0, 0, 180, 0],
        },
        {
            POSITION: [4, 8, 1.7, 13, 0, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap]),
                TYPE: "trap",
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
    ],
};
exports.overtrapper = makeOver(exports.weirdTrapper);

// BUILDER UPGRADES
exports.construct = {
    PARENT: ["genericTank"],
    LABEL: "Constructor",
    STAT_NAMES: statnames.trap,
    DANGER: 5,
    BODY: {
        SPEED: 0.7 * base.SPEED,
        FOV: 1.15 * base.FOV,
    },
    GUNS: [
        {
            POSITION: [18, 18, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [2, 18, 1.2, 18, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.block, g.construct]),
                TYPE: "setTrap",
            },
        },
    ],
};
exports.autoBuilder = makeAuto(exports.builder);
exports.engineer = {
    PARENT: ["genericTank"],
    DANGER: 5,
    LABEL: "Engineer",
    STAT_NAMES: statnames.trap,
    BODY: {
        SPEED: 0.80 * base.SPEED,
        FOV: 1.15 * base.FOV,
    },
    GUNS: [
        {
            POSITION: [5, 11, 1, 10.5, 0, 0, 0],
        },
        {
            POSITION: [3, 14, 1, 15.5, 0, 0, 0],
        },
        {
            POSITION: [2, 14, 1.3, 18, 0, 0, 0],
            PROPERTIES: {
                MAX_CHILDREN: 7,
                SHOOT_SETTINGS: combineStats([g.trap, g.block, g.damage75, g.one_third_reload]),
                TYPE: "pillbox",
                SYNCS_SKILLS: true,
                DESTROY_OLDEST_CHILD: true,
            },
        },
        {
            POSITION: [4, 14, 1, 8, 0, 0, 0],
        },
    ],
};
exports.psychotherapist = {
    PARENT: ["genericTank"],
    DANGER: 5,
    LABEL: "Psychotherapist",
    STAT_NAMES: statnames.trap,
    BODY: {
        SPEED: 0.80 * base.SPEED,
        FOV: 1.15 * base.FOV,
    },
    GUNS: [
        {
            POSITION: [5, 11, 1, 10.5, 0, 0, 0],
        },
		{
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [5, 8, 1, 10.5, 0, 0, 0],
			PROPERTIES: {
				COLOR: -1,
				ALPHA: 0.7,
				BORDERLESS: false
            },
        },
        {
            POSITION: [3, 14, 1, 15.5, 0, 0, 0],
        },
		{
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [3, 10, 1, 15.5, 0, 0, 0],
			PROPERTIES: {
				COLOR: -1,
				ALPHA: 0.7,
				BORDERLESS: false
            },
        },
        {
            POSITION: [2, 14, 1.3, 18, 0, 0, 0],
            PROPERTIES: {
                MAX_CHILDREN: 13,
                SHOOT_SETTINGS: combineStats([g.trap, g.block, g.damage75, g.one_third_reload, g.one_third_reload, g.doublereload]),
                TYPE: "finitypillbox",
                SYNCS_SKILLS: true,
                DESTROY_OLDEST_CHILD: true,
            },
        },
        {
            POSITION: [4, 14, 1, 8, 0, 0, 0],
        },
		{
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [4, 10, 1, 8, 0, 0, 0],
			PROPERTIES: {
				COLOR: -1,
				ALPHA: 0.7,
				BORDERLESS: false
            },
        },
    ],
};
exports.boomer = {
    PARENT: ["genericTank"],
    DANGER: 5,
    LABEL: "Boomer",
    STAT_NAMES: statnames.trap,
    FACING_TYPE: "locksFacing",
    BODY: {
        SPEED: base.SPEED * 0.8,
        FOV: base.FOV * 1.15,
    },
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [5, 10, 1, 14, 0, 0, 0],
        },
        {
            POSITION: [6, 10, -1.5, 7, 0, 0, 0],
        },
        {
            POSITION: [2, 10, 1.3, 18, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.block, g.boomerang]),
                TYPE: "boomerang",
            },
        },
    ],
};
exports.assemblerEffect = {
    PARENT: ['bullet'],
    MOTION_TYPE: 'assembler',
    LABEL: '',
    BODY: {
        DAMAGE: 0,
        RANGE: 10
    },
    ALPHA: 0.8
};
exports.assemblerDot = {
    LABEL: '',
    SHAPE: -4,
    COLOR: 17
};
exports.assemblerTrap = {
    PARENT: ['setTrap'],
    LABEL: "Assembler Trap",
    BODY: {
        SPEED: 0.7,
        ACCEL: 0.75
    },
    TURRETS: [
        {
            /**        SIZE X  Y  ANGLE ARC */
            POSITION: [4, 0, 0, 0,    360, 1],
            TYPE: 'assemblerDot'
        }
    ],
    HITS_OWN_TYPE: 'assembler'
};
exports.assembler = {
    PARENT: ['genericTank'],
    DANGER: 5,
    LABEL: 'Assembler',
    STAT_NAMES: statnames.trap,
    BODY: {
        SPEED: 0.8 * base.SPEED,
        FOV: 1.15 * base.FOV,
    },
    GUNS: [
        {
            POSITION: [18, 12, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [2, 12, 1.1, 18, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.block]),
                TYPE: 'assemblerTrap',
                MAX_CHILDREN: 8
            }
        }
    ],
    TURRETS: [
        {
            /**        SIZE X   Y  ANGLE ARC */
            POSITION: [2.5, 14, 0, 0,    360, 1],
            TYPE: 'assemblerDot'
        }
    ]
};

// TRI-TRAPPER UPGRADES
exports.hexaTrapper = makeAuto({
        PARENT: ["genericTank"],
        DANGER: 5,
        BODY: {
            SPEED: 0.8 * base.SPEED,
        },
        STAT_NAMES: statnames.trap,
        HAS_NO_RECOIL: true,
        GUNS: [
            {
                POSITION: [15, 7, 1, 0, 0, 0, 0],
            },
            {
                POSITION: [3, 7, 1.7, 15, 0, 0, 0],
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
                    TYPE: "trap",
                    STAT_CALCULATOR: gunCalcNames.trap,
                },
            },
            {
                POSITION: [15, 7, 1, 0, 0, 60, 0.5],
            },
            {
                POSITION: [3, 7, 1.7, 15, 0, 60, 0.5],
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
                    TYPE: "trap",
                    STAT_CALCULATOR: gunCalcNames.trap,
                },
            },
            {
                POSITION: [15, 7, 1, 0, 0, 120, 0],
            },
            {
                POSITION: [3, 7, 1.7, 15, 0, 120, 0],
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
                    TYPE: "trap",
                    STAT_CALCULATOR: gunCalcNames.trap,
                },
            },
            {
                POSITION: [15, 7, 1, 0, 0, 180, 0.5],
            },
            {
                POSITION: [3, 7, 1.7, 15, 0, 180, 0.5],
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
                    TYPE: "trap",
                    STAT_CALCULATOR: gunCalcNames.trap,
                },
            },
            {
                POSITION: [15, 7, 1, 0, 0, 240, 0],
            },
            {
                POSITION: [3, 7, 1.7, 15, 0, 240, 0],
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
                    TYPE: "trap",
                    STAT_CALCULATOR: gunCalcNames.trap,
                },
            },
            {
                POSITION: [15, 7, 1, 0, 0, 300, 0.5],
            },
            {
                POSITION: [3, 7, 1.7, 15, 0, 300, 0.5],
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
                    TYPE: "trap",
                    STAT_CALCULATOR: gunCalcNames.trap,
                },
            },
        ],
    }, "Hexa-Trapper");
exports.septaTrapper = (() => {
    let a = 360 / 7,
        d = 1 / 7;
    return {
        PARENT: ["genericTank"],
        LABEL: "Septa-Trapper",
        DANGER: 5,
        BODY: {
            SPEED: base.SPEED * 0.8,
        },
        STAT_NAMES: statnames.trap,
        HAS_NO_RECOIL: true,
        GUNS: [
            {
                /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                POSITION: [15, 7, 1, 0, 0, 0, 0],
            },
            {
                POSITION: [3, 7, 1.7, 15, 0, 0, 0],
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
                    TYPE: "trap",
                    STAT_CALCULATOR: gunCalcNames.trap,
                },
            },
            {
                POSITION: [15, 7, 1, 0, 0, a, 4 * d],
            },
            {
                POSITION: [3, 7, 1.7, 15, 0, a, 4 * d],
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
                    TYPE: "trap",
                    STAT_CALCULATOR: gunCalcNames.trap,
                },
            },
            {
                POSITION: [15, 7, 1, 0, 0, 2 * a, 1 * d],
            },
            {
                POSITION: [3, 7, 1.7, 15, 0, 2 * a, 1 * d],
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
                    TYPE: "trap",
                    STAT_CALCULATOR: gunCalcNames.trap,
                },
            },
            {
                POSITION: [15, 7, 1, 0, 0, 3 * a, 5 * d],
            },
            {
                POSITION: [3, 7, 1.7, 15, 0, 3 * a, 5 * d],
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
                    TYPE: "trap",
                    STAT_CALCULATOR: gunCalcNames.trap,
                },
            },
            {
                POSITION: [15, 7, 1, 0, 0, 4 * a, 2 * d],
            },
            {
                POSITION: [3, 7, 1.7, 15, 0, 4 * a, 2 * d],
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
                    TYPE: "trap",
                    STAT_CALCULATOR: gunCalcNames.trap,
                },
            },
            {
                POSITION: [15, 7, 1, 0, 0, 5 * a, 6 * d],
            },
            {
                POSITION: [3, 7, 1.7, 15, 0, 5 * a, 6 * d],
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
                    TYPE: "trap",
                    STAT_CALCULATOR: gunCalcNames.trap,
                },
            },
            {
                POSITION: [15, 7, 1, 0, 0, 6 * a, 3 * d],
            },
            {
                POSITION: [3, 7, 1.7, 15, 0, 6 * a, 3 * d],
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
                    TYPE: "trap",
                    STAT_CALCULATOR: gunCalcNames.trap,
                },
            },
        ],
    };
})();
exports.architect = {
    LABEL: "Architect",
    BODY: {
        SPEED: 1.1 * base.SPEED,
    },
    PARENT: ["genericTank"],
    DANGER: 5,
    FACING_TYPE: "autospin",
    TURRETS: [
        {
            POSITION: [12, 8, 0, 0, 190, 0],
            TYPE: "architectGun",
        },
        {
            POSITION: [12, 8, 0, 120, 190, 0],
            TYPE: "architectGun",
        },
        {
            POSITION: [12, 8, 0, 240, 190, 0],
            TYPE: "architectGun",
        },
    ],
};

// TRAP GUARD UPGRADES
exports.bushwhacker = makeGuard(exports.sniper, "Bushwhacker");
exports.gunnerTrapper = {
    PARENT: ["genericTank"],
    LABEL: "Gunner Trapper",
    DANGER: 5,
    STAT_NAMES: statnames.mixed,
    BODY: {
        FOV: 1.25 * base.FOV,
    },
    GUNS: [
        {
            POSITION: [19, 2, 1, 0, -2.5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.gunner,
                    g.power,
                    g.twin,
                    g.tonsmorrecoil,
                    g.lotsmorrecoil,
                ]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [19, 2, 1, 0, 2.5, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.gunner,
                    g.power,
                    g.twin,
                    g.tonsmorrecoil,
                    g.lotsmorrecoil,
                ]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [12, 11, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [13, 11, 1, 0, 0, 180, 0],
        },
        {
            POSITION: [4, 11, 1.7, 13, 0, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.fast, g.halfrecoil]),
                TYPE: "trap",
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
    ],
};
exports.bomber = {
    PARENT: ["genericTank"],
    LABEL: "Bomber",
    BODY: {
        DENSITY: base.DENSITY * 0.6,
    },
    DANGER: 5,
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [20, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
                TYPE: "bullet",
                LABEL: "Front",
            },
        },
        {
            POSITION: [18, 8, 1, 0, 0, 130, 0.1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri]),
                TYPE: "bullet",
                LABEL: "Wing",
            },
        },
        {
            POSITION: [18, 8, 1, 0, 0, 230, 0.1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri]),
                TYPE: "bullet",
                LABEL: "Wing",
            },
        },
        {
            POSITION: [13, 8, 1, 0, 0, 180, 0],
        },
        {
            POSITION: [4, 8, 1.7, 13, 0, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap]),
                TYPE: "trap",
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
    ],
};
exports.conqueror = {
    PARENT: ["genericTank"],
    DANGER: 5,
    LABEL: "Conqueror",
    STAT_NAMES: statnames.mixed,
    BODY: {
        SPEED: 0.8 * base.SPEED,
    },
    GUNS: [
        {
            POSITION: [21, 14, 1, 0, 0, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [18, 12, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [2, 12, 1.1, 18, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.block]),
                TYPE: "setTrap",
            },
        },
    ],
};
exports.bulwark = {
    PARENT: ["genericTank"],
    LABEL: "Bulwark",
    STAT_NAMES: statnames.mixed,
    DANGER: 5,
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [20, 8, 1, 0, 5.5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.twin]),
                TYPE: "bullet",
            },
        },
        {
            /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [20, 8, 1, 0, -5.5, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.twin]),
                TYPE: "bullet",
            },
        },
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [13, 8, 1, 0, 5.5, 185, 0],
        },
        {
            POSITION: [3, 9, 1.5, 13, 5.5, 185, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.twin]),
                TYPE: "trap",
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
        {
            /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [13, 8, 1, 0, -5.5, 175, 0],
        },
        {
            POSITION: [3, 9, 1.5, 13, -5.5, 175, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.twin]),
                TYPE: "trap",
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
    ],
};

// SMASHER UPGRADES
exports.megaSmasher = {
    PARENT: ["genericTank"],
    LABEL: "Mega-Smasher",
    DANGER: 5,
    BODY: {
        SPEED: 1.05 * base.SPEED,
        FOV: 1.1 * base.FOV,
        DENSITY: 4 * base.DENSITY,
    },
    IS_SMASHER: true,
    SKILL_CAP: [smshskl, 0, 0, 0, 0, smshskl, smshskl, smshskl, smshskl, smshskl],
    STAT_NAMES: statnames.smasher,
    TURRETS: [
        {
            POSITION: [25, 0, 0, 0, 360, 0],
            TYPE: "smasherBody",
        },
    ],
};
exports.spike = {
    PARENT: ["genericTank"],
    LABEL: "Spike",
    DANGER: 5,
    BODY: {
        SPEED: base.SPEED * 0.9,
        DAMAGE: base.DAMAGE * 1.1,
        FOV: base.FOV * 1.05,
        DENSITY: base.DENSITY * 2,
    },
    IS_SMASHER: true,
    SKILL_CAP: [smshskl, 0, 0, 0, 0, smshskl, smshskl, smshskl, smshskl, smshskl],
    STAT_NAMES: statnames.smasher,
    TURRETS: [
        {
            /** SIZE     X       Y     ANGLE    ARC */
            POSITION: [18.5, 0, 0, 0, 360, 0],
            TYPE: "spikeBody",
        },
        {
            POSITION: [18.5, 0, 0, 90, 360, 0],
            TYPE: "spikeBody",
        },
        {
            POSITION: [18.5, 0, 0, 180, 360, 0],
            TYPE: "spikeBody",
        },
        {
            POSITION: [18.5, 0, 0, 270, 360, 0],
            TYPE: "spikeBody",
        },
    ],
};
exports.autoSmasher = makeAuto(exports.smasher, "Auto-Smasher", {
    type: "autoSmasherTurret",
    size: 11,
});
exports.autoSmasher.SKILL_CAP = [smshskl, smshskl, smshskl, smshskl, smshskl, smshskl, smshskl, smshskl, smshskl, smshskl];
exports.landmine = {
    PARENT: ["genericTank"],
    LABEL: "Landmine",
    INVISIBLE: [0.06, 0.01],
    TOOLTIP: "Stay still to turn invisible.",
    DANGER: 5,
    BODY: {
        SPEED: 1.1 * base.SPEED,
        FOV: 1.05 * base.FOV,
        DENSITY: 2 * base.DENSITY,
    },
    TURRETS: [
        {
            POSITION: [21.5, 0, 0, 0, 360, 0],
            TYPE: "smasherBody",
        },
        {
            POSITION: [21.5, 0, 0, 30, 360, 0],
            TYPE: "landmineBody",
        },
    ],
    IS_SMASHER: true,
    SKILL_CAP: [smshskl, 0, 0, 0, 0, smshskl, smshskl, smshskl, smshskl, smshskl],
    STAT_NAMES: statnames.smasher,
};

// HEALER UPGRADES
exports.medic = {
    PARENT: ["genericTank"],
    LABEL: "Medic",
    BODY: {
        FOV: base.FOV * 1.2,
    },
    TURRETS: [
        {
            /** SIZE     X       Y     ANGLE    ARC */
            POSITION: [13, 0, 0, 0, 360, 1],
            TYPE: "healerSymbol",
        },
    ],
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [8, 9, -0.5, 16.5, 0, 0, 0],
        },
        {
            POSITION: [22, 10, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.healer]),
                TYPE: "healerBullet",
            },
        },
    ],
    STAT_NAMES: statnames.heal,
};
exports.ambulance = {
    PARENT: ["genericTank"],
    LABEL: "Ambulance",
    BODY: {
        HEALTH: base.HEALTH * 0.8,
        SHIELD: base.SHIELD * 0.8,
        DENSITY: base.DENSITY * 0.6,
    },
    TURRETS: [
        {
            /** SIZE     X       Y     ANGLE    ARC */
            POSITION: [13, 0, 0, 0, 360, 1],
            TYPE: "healerSymbol",
        },
    ],
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [8, 9, -0.5, 12.5, 0, 0, 0],
        },
        {
            POSITION: [18, 10, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.flank,
                    g.tri,
                    g.trifront,
                    g.tonsmorrecoil,
                    g.healer,
                ]),
                TYPE: "healerBullet",
                LABEL: "Front",
            },
        },
        {
            POSITION: [16, 8, 1, 0, 0, 150, 0.1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
                TYPE: "bullet",
                LABEL: gunCalcNames.thruster,
            },
        },
        {
            POSITION: [16, 8, 1, 0, 0, 210, 0.1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
                TYPE: "bullet",
                LABEL: gunCalcNames.thruster,
            },
        },
    ],
    STAT_NAMES: statnames.heal,
};
exports.surgeon = {
    PARENT: ["genericTank"],
    LABEL: "Surgeon",
    STAT_NAMES: statnames.trap,
    BODY: {
        SPEED: base.SPEED * 0.75,
        FOV: base.FOV * 1.15,
    },
    TURRETS: [
        {
            /** SIZE     X       Y     ANGLE    ARC */
            POSITION: [13, 0, 0, 0, 360, 1],
            TYPE: "healerSymbol",
        },
    ],
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [5, 11, 1, 10.5, 0, 0, 0],
        },
        {
            POSITION: [3, 14, 1, 15.5, 0, 0, 0],
        },
        {
            POSITION: [2, 14, 1.3, 18, 0, 0, 0],
            PROPERTIES: {
                MAX_CHILDREN: 4,
                SHOOT_SETTINGS: combineStats([g.trap, g.block, g.slow]),
                TYPE: "surgeonPillbox",
                SYNCS_SKILLS: true,
				DESTROY_OLDEST_CHILD: true,
            },
        },
        {
            POSITION: [4, 14, 1, 8, 0, 0, 0],
        },
    ],
    STAT_NAMES: statnames.heal,
};
exports.paramedic = {
    PARENT: ["genericTank"],
    LABEL: "Paramedic",
    BODY: {
        SPEED: base.SPEED * 0.9,
    },
    TURRETS: [
        {
            /** SIZE     X       Y     ANGLE    ARC */
            POSITION: [13, 0, 0, 0, 360, 1],
            TYPE: "healerSymbol",
        },
    ],
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [8, 9, -0.5, 10, 0, -17.5, 0.5],
        },
        {
            POSITION: [15.5, 10, 1, 0, 0, -17.5, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.healer]),
                TYPE: "healerBullet",
            },
        },
        {
            POSITION: [8, 9, -0.5, 10, 0, 17.5, 0.5],
        },
        {
            POSITION: [15.5, 10, 1, 0, 0, 17.5, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.healer]),
                TYPE: "healerBullet",
            },
        },
        {
            POSITION: [8, 9, -0.5, 12.5, 0, 0, 0],
        },
        {
            POSITION: [18, 10, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.healer]),
                TYPE: "healerBullet",
            },
        },
    ],
    STAT_NAMES: statnames.heal,
};
exports.intruder = {
    PARENT: ["genericTank"],
    LABEL: "Intruder",
    BODY: {
        SPEED: base.SPEED * 0.9,
    },
    TURRETS: [
        {
            /** SIZE     X       Y     ANGLE    ARC */
            POSITION: [8, 2, 0, 0, 360, 1],
            TYPE: "notHealerSymbol",
        },
    ],
    GUNS: [
        {
            POSITION: [12, 8, 1, 0, 0, -17.5, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [12, 8, 1, 0, 0, 17.5, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [8, 9, -0.5, 12.5, 0, 0, 0],
        },
        {
            POSITION: [18, 10, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.healer]),
                TYPE: "healerBullet",
            },
        },
    ],
};
exports.swiss = {
    PARENT: ["genericTank"],
    LABEL: "Swiss",
	BODY: {
        SPEED: base.SPEED * 0.4,
        SHIELD: base.SHIELD * 1.1,
        REGEN: base.REGEN * 1.5,
        FOV: base.FOV * 1.2,
    },
    TURRETS: [
		{
            /** SIZE     X       Y     ANGLE    ARC */
            POSITION: [6, 0, 0, 0, 360, 1],
            TYPE: "SwissAura",
        },
        {
            /** SIZE     X       Y     ANGLE    ARC */
            POSITION: [14, 0, 0, 0, 360, 1],
            TYPE: "swissSymbol",
        },
		{
            /** SIZE     X       Y     ANGLE    ARC */
            POSITION: [3, -7.5, 0, 0, 360, 1],
            TYPE: "autoStormGun",
        },
		{
            /** SIZE     X       Y     ANGLE    ARC */
            POSITION: [3, 0, 7.5, 0, 360, 1],
            TYPE: "autoStormGun",
        },
		{
            /** SIZE     X       Y     ANGLE    ARC */
            POSITION: [3, 0, -7.5, 0, 360, 1],
            TYPE: "autoStormGun",
        },
    ],
    GUNS: [
		{
            POSITION: [5, 4, 1, 10.5, 0, 0, 0],
        },
        {
            POSITION: [3, 6, 1, 15.5, 0, 0, 0],
        },
        {
            POSITION: [2, 6, 1.3, 18, 0, 0, 0],
            PROPERTIES: {
                MAX_CHILDREN: 3,
                SHOOT_SETTINGS: combineStats([g.trap, g.block, g.damage75, g.damage75, g.damage75, g.one_third_reload]),
                TYPE: "pillbox",
                SYNCS_SKILLS: true,
                DESTROY_OLDEST_CHILD: true,
            },
        },
        {
            POSITION: [4, 6, 1, 8, 0, 0, 0],
        },
	    {
          /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
          POSITION: [5, 3, 1, 8, 0, 45, 0],
        },
	    {
          POSITION: [1, 4, 1, 13, 0, 45, 0],
          PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.factory, g.truebig]),
            TYPE: "miniontwintwin",
            STAT_CALCULATOR: gunCalcNames.drone,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            MAX_CHILDREN: 1,
          },
        },
	    {
          POSITION: [4, 4, 1, 6, 0, 45, 0],
        },
		{
          /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
          POSITION: [5, 3, 1, 8, 0, 135, 0],
        },
	    {
          POSITION: [1, 4, 1, 13, 0, 135, 0],
          PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.factory, g.truebig]),
            TYPE: "miniontwintwin",
            STAT_CALCULATOR: gunCalcNames.drone,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            MAX_CHILDREN: 1,
          },
        },
	    {
          POSITION: [4, 4, 1, 6, 0, 125, 0],
        },
		{
          /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
          POSITION: [5, 3, 1, 8, 0, 225, 0],
        },
	    {
          POSITION: [1, 4, 1, 13, 0, 225, 0],
          PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.factory, g.truebig]),
            TYPE: "miniontwintwin",
            STAT_CALCULATOR: gunCalcNames.drone,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            MAX_CHILDREN: 1,
          },
        },
	    {
          POSITION: [4, 4, 1, 6, 0, 225, 0],
        },
		{
          /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
          POSITION: [5, 3, 1, 8, 0, 315, 0],
        },
	    {
          POSITION: [1, 4, 1, 13, 0, 315, 0],
          PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.factory, g.truebig]),
            TYPE: "miniontwintwin",
            STAT_CALCULATOR: gunCalcNames.drone,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            MAX_CHILDREN: 1,
          },
        },
	    {
          POSITION: [4, 4, 1, 6, 0, 315, 0],
        },
        {
          POSITION: [8, 9, -0.5, 6.5, 0, 0, 0],
        },
        {
            POSITION: [12, 10, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.twin, g.twin, g.bent, g.healer]),
                TYPE: "healerBullet",
            },
        },
		{
            POSITION: [8, 9, -0.5, 6.5, 0, 90, 0],
        },
        {
            POSITION: [12, 10, 1, 0, 0, 90, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.twin, g.twin, g.bent, g.healer]),
                TYPE: "healerBullet",
            },
        },
		{
            POSITION: [8, 9, -0.5, 6.5, 0, 180, 0],
        },
        {
            POSITION: [12, 10, 1, 0, 0, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.twin, g.twin, g.bent, g.healer]),
                TYPE: "healerBullet",
            },
        },
		{
            POSITION: [8, 9, -0.5, 6.5, 0, 270, 0],
        },
        {
            POSITION: [12, 10, 1, 0, 0, 270, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.twin, g.twin, g.bent, g.healer]),
                TYPE: "healerBullet",
            },
        },
    ],
};
exports.connected = {
  PARENT: ["genericTank"],
  LABEL: "Connected",
  BODY: {
    SPEED: base.SPEED * 1.4,
    DAMAGE: base.DAMAGE * 0.9,
  },
  HAS_NO_RECOIL: true,
  STAT_NAMES: statnames.lancer,
  TURRETS: [
        {
            /** SIZE     X       Y     ANGLE    ARC */
            POSITION: [13, 0, 0, 0, 360, 1],
            TYPE: "healerSymbol",
        },
    ],
  GUNS: [
    {
      POSITION: [12, 5, -0.5, 10, 0, 0, 0.5],
    },
    {
      POSITION: [20, 15, 0.001, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.lancer, g.damagetwin, g.healer, g.damagetwin]),
        TYPE: ["healerBullet", { ALPHA: 0 }],
        AUTOFIRE: true,
      },
    },
    {
      POSITION: [25, 15, 0.001, 0, 0, 0, 0],
    },
  ],
};
exports.lancer = {
  PARENT: ["genericTank"],
  LABEL: "Lancer",
  BODY: {
    SPEED: base.SPEED * 1.4,
    DAMAGE: base.DAMAGE * 0.9,
  },
  HAS_NO_RECOIL: true,
  STAT_NAMES: statnames.lancer,
  GUNS: [
    {
      POSITION: [20, 15, 0.001, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.lancer]),
        TYPE: ["bulletLancer", { ALPHA: 0 }],
        AUTOFIRE: true,
      },
    },
    {
      POSITION: [25, 15, 0.001, 0, 0, 0, 0],
    },
  ],
};
exports.spincer = {
  PARENT: ["genericTank"],
  LABEL: "Spincer",
  BODY: {
    SPEED: base.SPEED * 1.3,
    DAMAGE: base.DAMAGE * 0.9,
  },
  HAS_NO_RECOIL: true,
  STAT_NAMES: statnames.lancer,
  TURRETS: [
        {
            POSITION: [19, 0, 0, 0, 360, 0],
            TYPE: "spinlancer",
        },
    ],
  GUNS: [
    {
      POSITION: [20, 15, 0.001, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.lancer, g.damageweakweak]),
        TYPE: ["bulletLancer", { ALPHA: 0 }],
        AUTOFIRE: true,
      },
    },
    {
      POSITION: [25, 15, 0.001, 0, 0, 0, 0],
    },
  ],
};
exports.spinner = {
  PARENT: ["genericTank"],
  LABEL: "Spinner",
  BODY: {
    SPEED: base.SPEED * 1.3,
    DAMAGE: base.DAMAGE * 0.9,
  },
  HAS_NO_RECOIL: true,
  STAT_NAMES: statnames.lancer,
  TURRETS: [
        {
            POSITION: [19, 0, 0, 0, 360, 0],
            TYPE: "spinnerlancer",
        },
    ],
  GUNS: [
  ],
};
exports.bayonet = {
  PARENT: ["genericTank"],
  LABEL: "Bayonet",
  BODY: {
    SPEED: base.SPEED * 1.4,
    DAMAGE: base.DAMAGE * 0.9,
  },
  HAS_NO_RECOIL: true,
  STAT_NAMES: statnames.lancer,
  GUNS: [
    {
      POSITION: [30, 15, 0.001, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.lancer]),
        TYPE: ["bullet", { ALPHA: 0 }],
        AUTOFIRE: true,
      },
    },
    {
      POSITION: [35, 15, 0.001, 0, 0, 0, 0],
    },
  ],
};
exports.fourhammer1 = {
  PARENT: ["genericTank"],
  LABEL: "Four-hammer (1)",
  BODY: {
    SPEED: base.SPEED * 1.1,
    DAMAGE: base.DAMAGE * 1.4,
  },
  HAS_NO_RECOIL: true,
  STAT_NAMES: statnames.lancer,
  GUNS: [
    {
	/*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [9, 8, 0.001, 10, -43, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.lancer]),
        TYPE: ["bullet", { ALPHA: 0 }],
        AUTOFIRE: true,
      },
    },
	{
	/*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [10, 8, 0.001, 10, -43, 90, 0],
    },
	{
	/*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [9, 8, 0.001, 10, -35, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.lancer]),
        TYPE: ["bullet", { ALPHA: 0 }],
        AUTOFIRE: true,
      },
    },
	{
	/*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [10, 8, 0.001, 10, -35, 90, 0],
    },
	{
	/*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [9, 8, 0.001, 10, 43, 270, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.lancer]),
        TYPE: ["bullet", { ALPHA: 0 }],
        AUTOFIRE: true,
      },
    },
	{
	/*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [10, 8, 0.001, 10, 43, 270, 0],
    },
	{
	/*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [9, 8, 0.001, 10, 35, 270, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.lancer]),
        TYPE: ["bullet", { ALPHA: 0 }],
        AUTOFIRE: true,
      },
    },
	{
	/*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [10, 8, 0.001, 10, 35, 270, 0],
    },
    {
      POSITION: [45, 7, 1, 0, 0, 0, 0],
    },
	{
      POSITION: [3, 7, 0.001, 45, 0, 0, 0],
    },
	{
      POSITION: [8, 2.5, 1, 35, 6, 0, 0],
    },
	{
      POSITION: [8, 2.5, 1, 35, -6, 0, 0],
    },
	{
      POSITION: [16, 2.5, 1, 31, 8, 0, 0],
    },
	{
      POSITION: [16, 2.5, 1, 31, -8, 0, 0],
    },
  ],
};
exports.fourhammer2 = {
  PARENT: ["genericTank"],
  LABEL: "Four-hammer (2)",
  BODY: {
    SPEED: base.SPEED * 1.1,
    DAMAGE: base.DAMAGE * 1.4,
  },
  HAS_NO_RECOIL: true,
  STAT_NAMES: statnames.lancer,
  GUNS: [
    {
	/*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [9, 8, 0.001, 10, -43, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.lancer]),
        TYPE: ["bullet", { ALPHA: 0 }],
        AUTOFIRE: true,
      },
    },
	{
	/*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [9, 8, 0.001, 10, -35, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.lancer]),
        TYPE: ["bullet", { ALPHA: 0 }],
        AUTOFIRE: true,
      },
    },
	{
	/*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [10, 16, 1.5, 10, -39, 90, 0],
    },
	{
	/*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [9, 8, 0.001, 10, 43, 270, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.lancer]),
        TYPE: ["bullet", { ALPHA: 0 }],
        AUTOFIRE: true,
      },
    },
	{
	/*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [9, 8, 0.001, 10, 35, 270, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.lancer]),
        TYPE: ["bullet", { ALPHA: 0 }],
        AUTOFIRE: true,
      },
    },
	{
	/*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [10, 16, 1.5, 10, 39, 270, 0],
    },
    {
      POSITION: [45, 7, 1, 0, 0, 0, 0],
    },
	{
      POSITION: [3, 7, 0.001, 45, 0, 0, 0],
    },
	{
      POSITION: [8, 2.5, 1, 35, 6, 0, 0],
    },
	{
      POSITION: [8, 2.5, 1, 35, -6, 0, 0],
    },
	{
      POSITION: [16, 2.5, 1, 31, 8, 0, 0],
    },
	{
      POSITION: [16, 2.5, 1, 31, -8, 0, 0],
    },
  ],
};
exports.spearman = {
  PARENT: ["genericTank"],
  LABEL: "Spearman",
  BODY: {
    SPEED: base.SPEED * 1.4,
    DAMAGE: base.DAMAGE * 0.9,
  },
  HAS_NO_RECOIL: true,
  STAT_NAMES: statnames.lancer,
  GUNS: [
    {
      POSITION: [40, 15, 0.001, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.lancer]),
        TYPE: ["bullet", { ALPHA: 0 }],
        AUTOFIRE: true,
      },
    },
    {
      POSITION: [45, 15, 0.001, 0, 0, 0, 0],
    },
	{
      POSITION: [15, 15, 0.75, 0, 0, 0, 0],
    },
  ],
};
exports.autolancer = {
  PARENT: ["genericTank"],
  LABEL: "Auto-Lancer (!?)",
  BODY: {
    SPEED: base.SPEED * 1.4,
    DAMAGE: base.DAMAGE * 0.9,
  },
  HAS_NO_RECOIL: true,
  STAT_NAMES: statnames.lancer,
  TURRETS: [
        {
            POSITION: [16, 8, 0, 0, 190, 0],
            TYPE: "autoLancerGun",
        },
    ],
};
exports.autotwinlancer = {
  PARENT: ["genericTank"],
  LABEL: "Auto-Twin-Lancer (!?)",
  BODY: {
    SPEED: base.SPEED * 1.4,
    DAMAGE: base.DAMAGE * 0.9,
  },
  HAS_NO_RECOIL: true,
  STAT_NAMES: statnames.lancer,
  TURRETS: [
        {
            POSITION: [16, 8, 0, -30, 190, 0],
            TYPE: "autoTwinLancerGun",
        },
		{
            POSITION: [16, 8, 0, 30, 190, 0],
            TYPE: "autoTwinLancerGun",
        },
    ],
};
exports.larsen = {
  PARENT: ["genericTank"],
  LABEL: "Larsen (!?)",
  BODY: {
    SPEED: base.SPEED * 1.3,
    DAMAGE: base.DAMAGE * 0.9,
  },
  HAS_NO_RECOIL: true,
  STAT_NAMES: statnames.lancer,
  TURRETS: [
        {
            POSITION: [11, 8, 0, 90, 190, 0],
            TYPE: "autoTankGun",
        },
		{
            POSITION: [11, 8, 0, 90, 190, 0],
            TYPE: "autoTankGun",
        },
    ],
  GUNS: [
	{
      POSITION: [30, 3, 1.00, -10, -12, 0, 0],
    },
	{
      POSITION: [6, 3, 0.001, 20, -12, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.lancer, g.damage75]),
        TYPE: ["bullet", { ALPHA: 0 }],
        AUTOFIRE: true,
      },
    },
    {
      POSITION: [7, 3, 0.001, 20, -12, 0, 0],
    },
  ],
};
exports.partisan = {
  PARENT: ["genericTank"],
  LABEL: "Partisan",
  BODY: {
    SPEED: base.SPEED * 1.2,
    DAMAGE: base.DAMAGE * 0.9,
  },
  HAS_NO_RECOIL: true,
  STAT_NAMES: statnames.lancer,
  GUNS: [
    {
		/*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 7, 1.0, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.lancerdebuff]),
        TYPE: ["bullet"],
      },
    },
    {
      POSITION: [20, 3, 1.00, 0, 0, 0, 0],
    },
	{
      POSITION: [6, 3, 0.001, 20, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.lancer, g.damage75]),
        TYPE: ["bullet", { ALPHA: 0 }],
        AUTOFIRE: true,
      },
    },
    {
      POSITION: [7, 3, 0.001, 20, 0, 0, 0],
    },
  ],
};
exports.secluded = {
  PARENT: ["genericTank"],
  LABEL: "Secluded",
  BODY: {
    SPEED: base.SPEED * 1.3,
    DAMAGE: base.DAMAGE * 0.9,
  },
  HAS_NO_RECOIL: true,
  STAT_NAMES: statnames.lancer,
  GUNS: [
    {
      POSITION: [20, 15, 0.001, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.lancer]),
        TYPE: ["bullet", { ALPHA: 0 }],
        AUTOFIRE: true,
      },
    },
    {
      POSITION: [25, 15, 0.001, 0, 0, 0, 0],
    },
	{
      POSITION: [15, 10, 0.001, 0, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.lancer, g.damagetwin]),
        TYPE: ["bullet", { ALPHA: 0 }],
        AUTOFIRE: true,
      },
    },
    {
      POSITION: [20, 10, 0.001, 0, 0, 90, 0],
    },
	{
      POSITION: [15, 10, 0.001, 0, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.lancer, g.damagetwin]),
        TYPE: ["bullet", { ALPHA: 0 }],
        AUTOFIRE: true,
      },
    },
    {
      POSITION: [20, 10, 0.001, 0, 0, 180, 0],
    },
	{
      POSITION: [15, 10, 0.001, 0, 0, 270, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.lancer, g.damagetwin]),
        TYPE: ["bullet", { ALPHA: 0 }],
        AUTOFIRE: true,
      },
    },
    {
      POSITION: [20, 10, 0.001, 0, 0, 270, 0],
    },
  ],
};
exports.isolated = {
  PARENT: ["genericTank"],
  LABEL: "Isolated",
  BODY: {
    SPEED: base.SPEED * 1.2,
    DAMAGE: base.DAMAGE * 0.9,
  },
  HAS_NO_RECOIL: true,
  STAT_NAMES: statnames.lancer,
  GUNS: [
    {
      POSITION: [20, 15, 0.001, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.lancer]),
        TYPE: ["bullet", { ALPHA: 0 }],
        AUTOFIRE: true,
      },
    },
    {
      POSITION: [25, 15, 0.001, 0, 0, 0, 0],
    },
	{
      POSITION: [15, 10, 0.001, 0, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.lancer, g.damagetwin]),
        TYPE: ["bullet", { ALPHA: 0 }],
        AUTOFIRE: true,
      },
    },
    {
      POSITION: [20, 10, 0.001, 0, 0, 90, 0],
    },
	{
      POSITION: [14, 10, 0.001, 0, 0, 135, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.lancer, g.damagetriple]),
        TYPE: ["bullet", { ALPHA: 0 }],
        AUTOFIRE: true,
      },
    },
    {
      POSITION: [15, 10, 0.001, 0, 0, 135, 0],
    },
	{
      POSITION: [15, 10, 0.001, 0, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.lancer, g.damagetwin]),
        TYPE: ["bullet", { ALPHA: 0 }],
        AUTOFIRE: true,
      },
    },
    {
      POSITION: [20, 10, 0.001, 0, 0, 180, 0],
    },
	{
      POSITION: [14, 10, 0.001, 0, 0, 225, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.lancer, g.damagetriple]),
        TYPE: ["bullet", { ALPHA: 0 }],
        AUTOFIRE: true,
      },
    },
    {
      POSITION: [15, 10, 0.001, 0, 0, 225, 0],
    },
	{
      POSITION: [15, 10, 0.001, 0, 0, 270, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.lancer, g.damagetwin]),
        TYPE: ["bullet", { ALPHA: 0 }],
        AUTOFIRE: true,
      },
    },
    {
      POSITION: [20, 10, 0.001, 0, 0, 270, 0],
    },
  ],
};
exports.fakebasic = {
    PARENT: ["genericTank"],
    LABEL: "Fake Basic",
    BODY: {
        SPEED: base.SPEED * 0.8,
    },
    GUNS: [
		{
            POSITION: [1, 8, 1, 0, 0, 45, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.newbasic, g.fake]),
                TYPE: "fakebullet",
                COLOR: 18,
				ALPHA: 0.5,
            },
        },
		{
            POSITION: [1, 8, 1, 0, 0, -45, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.newbasic, g.fake]),
                TYPE: "fakebullet",
                COLOR: 18,
				ALPHA: 0.5,
            },
        },
		{
            POSITION: [1, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.newbasic, g.fake]),
                TYPE: "fakebullet",
                COLOR: 18,
				ALPHA: 0.5,
            },
        },
		{
            POSITION: [1, 8, 1, 0, 0, 135, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.newbasic, g.fake]),
                TYPE: "fakebullet",
                COLOR: 18,
				ALPHA: 0.5,
            },
        },
		{
            POSITION: [1, 8, 1, 0, 0, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.newbasic, g.fake]),
                TYPE: "fakebullet",
                COLOR: 18,
				ALPHA: 0.5,
            },
        },
		{
            POSITION: [1, 8, 1, 0, 0, 225, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.newbasic, g.fake]),
                TYPE: "fakebullet",
                COLOR: 18,
				ALPHA: 0.5,
            },
        },
        {
            POSITION: [18, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.fakedebuff]),
                TYPE: "bullet",
				COLOR: 18,
            },
        },
    ],
};

////* DESMOS TREE *////

exports.desmos = {
    PARENT: "genericTank",
    LABEL: "Desmos",
    STAT_NAMES: statnames.desmos,
    GUNS: [
        {
            POSITION: [20, 10, 0.8, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.desmos]),
                TYPE: ["bullet", {MOTION_TYPE: "desmos"}]
            }
        },
        {
            POSITION: [3.75, 10, 2.125, 1.25, -6.25, 90, 0]
        },
        {
            POSITION: [3.75, 10, 2.125, 1.25, 6.25, -90, 0]
        }
    ]
}
exports.desgun = {
    PARENT: ["genericTank"],
    LABEL: "Desgun",
    DANGER: 5,
    GUNS: [
        {
            POSITION: [12, 3.5, 1, 0, 7.25, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.desmos, g.twin, g.puregunner, g.fast]),
                TYPE: ["bullet", {MOTION_TYPE: "desmos"}]
            },
        },
        {
            POSITION: [12, 3.5, 1, 0, -7.25, 0, 0.75],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.desmos, g.twin, g.puregunner, g.fast]),
                TYPE: ["bullet", {MOTION_TYPE: ["desmos", {invert: true}]}]
            },
        },
        {
            POSITION: [16, 3.5, 1, 0, 3.75, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.desmos, g.twin, g.puregunner, g.fast]),
                TYPE: ["bullet", {MOTION_TYPE: "desmos"}]
            },
        },
        {
            POSITION: [16, 3.5, 1, 0, -3.75, 0, 0.25],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.desmos, g.twin, g.puregunner, g.fast]),
                TYPE: ["bullet", {MOTION_TYPE: ["desmos", {invert: true}]}]
            },
        },
        {
            POSITION: [2, 8, 2.125, 4.50, -6.0, 90, 0]
        },
		{
            POSITION: [2, 4, 2.125, 8, -6.0, 90, 0]
        },
        {
            POSITION: [2, 8, 2.125, -3.00, 6.0, -90, 0]
        },
		{
            POSITION: [2, 8, 2.125, -3.00, -6.0, 90, 0]
        },
        {
            POSITION: [2, 8, 2.125, 4.50, 6.0, -90, 0]
        },
		{
            POSITION: [2, 4, 2.125, 8, 6.0, -90, 0]
        },
    ],
};
exports.volute = {
    PARENT: ["genericTank"],
    LABEL: "Volute",
    DANGER: 5,
    STAT_NAMES: statnames.desmos,
    GUNS: [
        {
            POSITION: [20, 13, 0.8, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.desmos, g.pound]),
                TYPE: ["bullet", {MOTION_TYPE: "desmos"}]
            },
        },
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [4.75, 10, 2.125, 1.25, -6.375, 90, 0],
        },
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [4.75, 10, 2.125, 1.25, 6.375, -90, 0],
        },
    ],
}
exports.helix = {
    PARENT: ["genericTank"],
    LABEL: "Helix",
    DANGER: 5,
    STAT_NAMES: statnames.desmos,
    GUNS: [
        {
            POSITION: [20, 8, 0.75, 0, -5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.desmos]),
                TYPE: ["bullet", {MOTION_TYPE: ["desmos", {invert: false}]}]
            },
        },
        {
            POSITION: [20, 8, 0.75, 0, 5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.desmos]),
                TYPE: ["bullet", {MOTION_TYPE: ["desmos", {invert: true}]}]
            },
        },
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [3.625, 7.5, 2.75, 5.75, -6.75, 90, 0],
        },
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [3.625, 7.5, 2.75, 5.75, 6.75, -90, 0],
        },
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [6, 8, 0.25, 10.5, 0, 0, 0],
        },
    ],
}
exports.oak = {
    PARENT: ["genericTank"],
    LABEL: "Oak",
    DANGER: 5,
    STAT_NAMES: statnames.desmos,
	TURRETS: [
        {
            POSITION: [14, 8, 0, 0, 190, 0],
            TYPE: "autoDesmosGun",
        },
    ],
}
exports.birch = {
    PARENT: ["genericTank"],
    LABEL: "Birch",
    DANGER: 5,
    STAT_NAMES: statnames.desmos,
	TURRETS: [
        {
            POSITION: [14, 8, 0, -50, 180, 0],
            TYPE: "autoTwinDesmosGun2",
        },
		{
            POSITION: [14, 8, 0, 50, 180, 0],
            TYPE: "autoTwinDesmosGun",
        },
    ],
}

// Volute upgrades

exports.sidewinder = {
    PARENT: ["genericTank"],
    LABEL: "Sidewinder",
    DANGER: 5,
    BODY: {
        SPEED: 0.8 * base.SPEED,
        FOV: 1.3 * base.FOV,
    },
    GUNS: [
        {
            POSITION: [10, 11, -0.5, 14, 0, 0, 0],
        },
        {
            POSITION: [21, 12, -1.1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.sidewind]),
                TYPE: "snake",
                STAT_CALCULATOR: gunCalcNames.sustained,
            },
        },
    ],
}

// Helix upgrades

exports.triplex = {
    PARENT: ["genericTank"],
    LABEL: "Triplex",
    DANGER: 5,
    STAT_NAMES: statnames.desmos,
    GUNS: [
        {
            POSITION: [18, 10, 0.7, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.twin, g.bent, g.desmos]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [18, 10, 0.7, 0, 0, 45, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.desmos]),
                TYPE: ["bullet", {MOTION_TYPE: "desmos"}]
            },
        },
        {
            POSITION: [18, 10, 0.7, 0, 0, -45, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.desmos]),
                TYPE: ["bullet", {MOTION_TYPE: ["desmos", {invert: true}]}]
            },
        },
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [3.75, 10, 2.125, 1, -4.25, 10, 0],
        },
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [3.75, 10, 2.125, 1, 4.25, -10, 0],
        },
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [5, 6, 0.5, 10.5, 0, 22.5, 0],
        },
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [5, 6, 0.5, 10.5, 0, -22.5, 0],
        },
    ],
}
exports.quadruplex = {
    PARENT: ["genericTank"],
    LABEL: "Quadruplex",
    DANGER: 5,
    STAT_NAMES: statnames.desmos,
    GUNS: [
        {
            POSITION: [20, 10, 0.8, 0, 0, 45, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.desmos]),
                TYPE: ["bullet", {MOTION_TYPE: ["desmos", {amplitude: 25}]}]
            }
        },
        {
            POSITION: [3.75, 10, 2.125, 1.25, -6.25, 135, 0]
        },
        {
            POSITION: [3.75, 10, 2.125, 1.25, 6.25, -45, 0]
        },
        {
            POSITION: [20, 10, 0.8, 0, 0, -45, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.desmos]),
                TYPE: ["bullet", {MOTION_TYPE: ["desmos", {amplitude: 25, invert: true}]}]
            }
        },
        {
            POSITION: [3.75, 10, 2.125, 1.25, -6.25, 45, 0]
        },
        {
            POSITION: [3.75, 10, 2.125, 1.25, 6.25, -135, 0]
        },
        {
            POSITION: [20, 10, 0.8, 0, 0, 135, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.desmos]),
                TYPE: ["bullet", {MOTION_TYPE: ["desmos", {period: 7, amplitude: 10}]}]
            }
        },
        {
            POSITION: [3.75, 10, 2.125, 1.25, -6.25, -135, 0]
        },
        {
            POSITION: [3.75, 10, 2.125, 1.25, 6.25, 45, 0]
        },
        {
            POSITION: [20, 10, 0.8, 0, 0, -135, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.desmos]),
                TYPE: ["bullet", {MOTION_TYPE: ["desmos", {period: 7, amplitude: 10, invert: true}]}]
            }
        },
        {
            POSITION: [3.75, 10, 2.125, 1.25, -6.25, -45, 0]
        },
        {
            POSITION: [3.75, 10, 2.125, 1.25, 6.25, 135, 0]
        },
    ],
}
exports.streamlined = {
    PARENT: ["genericSpeedTank"],
    LABEL: "Streamlined",
    BODY: {
        SPEED: base.SPEED * 1.3,
        HEALTH: base.HEALTH * 0.7,
        DAMAGE: base.DAMAGE * 0.8,
    },
    GUNS: [
        {
            POSITION: [20, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.streamlineddebuff]),
                TYPE: "bullet",
            },
        },
    ],
};
exports.athlete = {
    PARENT: ["genericSpeedTank"],
    LABEL: "Athlete",
    BODY: {
        SPEED: base.SPEED * 1.6,
        HEALTH: base.HEALTH * 0.7,
        DAMAGE: base.DAMAGE * 0.7,
    },
    GUNS: [
        {
      POSITION: [22, 15, 0.001, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.lancer, g.streamlineddebuff]),
        TYPE: ["bulletLancer", { ALPHA: 0 }],
        AUTOFIRE: true,
      },
    },
    {
      POSITION: [27, 15, 0.001, 0, 0, 0, 0],
    },
    ],
};
exports.offroader = {
    PARENT: ["genericSpeedTank"],
    LABEL: "Offroader",
    BODY: {
        SPEED: base.SPEED * 1.8,
        HEALTH: base.HEALTH * 0.5,
        DAMAGE: base.DAMAGE * 0.8,
    },
    GUNS: [
		{
            POSITION: [22, 16, 0.001, -1, -3, 115, 0],
        },
		{
            POSITION: [22, 16, 0.001, -1, 3, 245, 0],
        },
        {
            POSITION: [20, 12, 0.2, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.streamlineddebuff, g.streamlineddebuff, g.streamlineddebuff, g.celeslower, g.celeslower]),
                TYPE: "bullet",
            },
        },
		{
            POSITION: [3, 6, 1.8, 4.5, 7, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.overstreamlined, g.streamlineddebuff]),
                TYPE: "propellant",
            },
        },
		{
            POSITION: [3, 6, 1.8, 4.5, -7, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.overstreamlined, g.streamlineddebuff]),
                TYPE: "propellant",
            },
        },
		{
            POSITION: [2, 6, 1.8, 8, 7, 180, 0],
        },
		{
            POSITION: [2, 6, 1.8, 8, -7, 180, 0],
        },
		{
            POSITION: [4, 2, 0.001, 8, 7, 180, 0],
			PROPERTIES: {COLOR: 2},
        },
		{
            POSITION: [4, 2, 0.001, 8, -7, 180, 0],
			PROPERTIES: {COLOR: 2},
        },
    ],
};
exports.steroid = {
    PARENT: ["genericSpeedTank"],
    LABEL: "Steroid",
    BODY: {
        SPEED: base.SPEED * 1.9,
        HEALTH: base.HEALTH * 0.5,
        DAMAGE: base.DAMAGE * 0.7,
    },
    GUNS: [
		{
            POSITION: [22, 16, 0.001, -1, -3, 115, 0],
        },
		{
            POSITION: [22, 16, 0.001, -1, 3, 245, 0],
        },
		{
          POSITION: [22, 15, 0.001, 0, 0, 0, 0],
          PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.lancer, g.streamlineddebuff, g.streamlineddebuff]),
            TYPE: ["bulletLancer", { ALPHA: 0 }],
            AUTOFIRE: true,
          },
        },
        {
          POSITION: [27, 15, 0.001, 0, 0, 0, 0],
        },
		{
            POSITION: [3, 6, 1.8, 4.5, 7, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.overstreamlined, g.streamlineddebuff]),
                TYPE: "propellant",
            },
        },
		{
            POSITION: [3, 6, 1.8, 4.5, -7, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.overstreamlined, g.streamlineddebuff]),
                TYPE: "propellant",
            },
        },
		{
            POSITION: [2, 6, 1.8, 8, 7, 180, 0],
        },
		{
            POSITION: [2, 6, 1.8, 8, -7, 180, 0],
        },
		{
            POSITION: [4, 2, 0.001, 8, 7, 180, 0],
			PROPERTIES: {COLOR: 2},
        },
		{
            POSITION: [4, 2, 0.001, 8, -7, 180, 0],
			PROPERTIES: {COLOR: 2},
        },
    ],
};
exports.supersonicfighter = {
    PARENT: ["genericSpeedTank"],
    LABEL: "Supersonic fighter",
    BODY: {
        SPEED: base.SPEED * 2.0,
        HEALTH: base.HEALTH * 0.4,
        DAMAGE: base.DAMAGE * 0.8,
    },
    GUNS: [
		{
            POSITION: [25, 16, 0.001, -1, -3, 115, 0],
        },
		{
            POSITION: [25, 16, 0.001, -1, 3, 245, 0],
        },
        {
            POSITION: [20, 12, 0.15, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.streamlineddebuff, g.streamlineddebuff, g.streamlineddebuff, g.streamlineddebuff, g.celeslower, g.celeslower]),
                TYPE: "bullet",
            },
        },
		{
            POSITION: [3, 6, 1.8, 4.5, 7, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.overstreamlined, g.streamlineddebuff, g.overstream]),
                TYPE: "propellant",
            },
        },
		{
            POSITION: [3, 6, 1.8, 4.5, -7, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.overstreamlined, g.streamlineddebuff, g.overstream]),
                TYPE: "propellant",
            },
        },
		{
            POSITION: [3, 8, 1.8, 4.5, 0, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.overstreamlined, g.streamlineddebuff, g.overstream]),
                TYPE: "propellant",
            },
        },
		{
            POSITION: [3, 8, 1.8, 8, 0, 180, 0],
        },
		{
            POSITION: [2, 6, 1.8, 8, 7, 180, 0],
        },
		{
            POSITION: [2, 6, 1.8, 8, -7, 180, 0],
        },
		{
            POSITION: [4, 2, 0.001, 8, 7, 180, 0],
			PROPERTIES: {COLOR: 2},
        },
		{
            POSITION: [4, 2, 0.001, 8, -7, 180, 0],
			PROPERTIES: {COLOR: 2},
        },
		{
            POSITION: [5, 3, 0.001, 8, 0, 180, 0],
			PROPERTIES: {COLOR: 2},
        },
    ],
};
exports.spoiler = {
    PARENT: ["genericSpeedTank"],
    LABEL: "Spoiler",
    BODY: {
        SPEED: base.SPEED * 1.8,
        HEALTH: base.HEALTH * 0.5,
        DAMAGE: base.DAMAGE * 0.8,
    },
    GUNS: [
		{
            POSITION: [4, 2, 1.0, 4, 10, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.streamlineddebuff, g.streamlineddebuff, g.streamlineddebuff, g.damagetriple]),
                TYPE: "bullet",
            },
        },
		{
            POSITION: [4, 2, 1.0, 4, -10, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.streamlineddebuff, g.streamlineddebuff, g.streamlineddebuff, g.damagetriple]),
                TYPE: "bullet",
            },
        },
		{
            POSITION: [22, 16, 0.001, -1, -3, 115, 0],
        },
		{
            POSITION: [22, 16, 0.001, -1, 3, 245, 0],
        },
        {
            POSITION: [20, 12, 0.2, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.streamlineddebuff, g.streamlineddebuff, g.streamlineddebuff, g.healthtwin, g.celeslower, g.celeslower]),
                TYPE: "bullet",
            },
        },
		{
            POSITION: [3, 6, 1.8, 4.5, 7, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.overstreamlined, g.streamlineddebuff]),
                TYPE: "propellant",
            },
        },
		{
            POSITION: [3, 6, 1.8, 4.5, -7, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.overstreamlined, g.streamlineddebuff]),
                TYPE: "propellant",
            },
        },
		{
            POSITION: [2, 6, 1.8, 8, 7, 180, 0],
        },
		{
            POSITION: [2, 6, 1.8, 8, -7, 180, 0],
        },
		{
            POSITION: [4, 2, 0.001, 8, 7, 180, 0],
			PROPERTIES: {COLOR: 2},
        },
		{
            POSITION: [4, 2, 0.001, 8, -7, 180, 0],
			PROPERTIES: {COLOR: 2},
        },
    ],
};
exports.burning = {
    PARENT: ["genericTank"],
    LABEL: "Burning",
    BODY: {
        SPEED: base.SPEED * 0.7,
        HEALTH: base.HEALTH * 1.1,
    },
    GUNS: [
		{
            POSITION: [2, 10, 0.8, 21, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flamethrower]),
                TYPE: "propellant",
            },
        },
		{
            POSITION: [2, 10, 0.8, 21, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.hazeflamethrower]),
                TYPE: "rangehaze",
            },
        },
		{
            POSITION: [20, 7.5, 1.0, 0, 0, 0, 0],
        },
		{
            POSITION: [2, 7.5, 1.0, 13, 0, 0, 0],
			PROPERTIES: {COLOR: 2},
        },
		{
            POSITION: [1, 15, 0.8, 28, 0, 0, 0],
        },
		{
            POSITION: [5, 15, 1.0, 20, 0, 0, 0],
        },
		{
            POSITION: [8.5, 1, 1.0, 20, 7.5, 0, 0],
        },
		{
            POSITION: [8.5, 1, 1.0, 20, -7.5, 0, 0],
        },
    ],
};

exports.whirlwindDeco = makeDeco(6);
exports.whirlwindDeco.CONTROLLERS = [["spin", { independent: true, speed: 0.128 }]]
exports.whirlwind = {
    PARENT: "genericTank",
    LABEL: "Whirlwind",
    ANGLE: 10,
    CONTROLLERS: ["uncontrolledWhirlwind"],
    HAS_NO_RECOIL: true,
    STAT_NAMES: statnames.whirlwind,
    TURRETS: [
        {
            POSITION: [8, 0, 0, 0, 360, 1],
            TYPE: "whirlwindDeco"
        }
    ],
    AI: {
        SPEED: 2, 
    }, 
    GUNS: (() => { 
        let output = []
        for (let i = 0; i < 6; i++) { 
            output.push({ 
                POSITION: {WIDTH: 8, LENGTH: 0.55, DELAY: i * 0.25},
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.satellite]), 
                    TYPE: ["satellite", {ANGLE: i * 60}], 
                    MAX_CHILDREN: 1,   
                    AUTOFIRE: true,  
                    SYNCS_SKILLS: false,
                    WAIT_TO_CYCLE: true
                }
            }) 
        }
        return output
    })()
}
exports.brokenbullet = {
    PARENT: ["genericTank"],
    LABEL: "Broken Bullet",
    BODY: {
        FOV: 1.2 * base.FOV,
    },
    GUNS: [
		{
            POSITION: [20, 8.5, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [24, 6.5, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.brokensniper]),
                TYPE: "bullet",
            },
        },
    ],
};
exports.brokenaccelerator = {
    PARENT: ["genericTank"],
    LABEL: "Broken Accelerator",
    BODY: {
        FOV: 1.2 * base.FOV,
    },
    GUNS: [
		{
            POSITION: [26, 6.5, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [30, 4.5, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.brokensniper, g.brokensniper]),
                TYPE: "bullet",
            },
        },
    ],
};
exports.epidemic = {
    PARENT: ["genericTank"],
    LABEL: "Epidemic",
    BODY: {
        FOV: 1.1 * base.FOV,
    },
    GUNS: [
		{
            POSITION: [15, 7, 1, 0, 0, 0, 0],
        },
		{
            POSITION: [1, 7, 1.0, 12, 0, 0, 0],
			PROPERTIES: {COLOR: 14},
        },
        {
            POSITION: [3, 7, 1.7, 15, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.virus]),
                TYPE: "virusbasic",
                STAT_CALCULATOR: gunCalcNames.virus,
            },
        },
    ],
};
exports.corrosion = {
    PARENT: ["genericTank"],
    LABEL: "Corrosion",
    BODY: {
        FOV: 1.1 * base.FOV,
    },
	TURRETS: [
        {
            POSITION: [8, 0, 0, 0, 360, 1],
            TYPE: "overdriveDeco"
        }
    ],
    GUNS: [
		{
            POSITION: [15, 7, 1, 0, 0, 0, 0],
        },
		{
            POSITION: [1, 7, 1.0, 12, 0, 0, 0],
			PROPERTIES: {COLOR: 14},
        },
        {
            POSITION: [3, 7, 1.7, 15, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.virus, g.damagetwin]),
                TYPE: "autovirus",
                STAT_CALCULATOR: gunCalcNames.virus,
            },
        },
    ],
};
exports.banker = {
    PARENT: ["genericTank"],
    LABEL: "Banker",
    BODY: {
        FOV: 1.1 * base.FOV,
    },
    GUNS: [
		{
            POSITION: [15, 7, -2.2, 0, 0, 0, 0],
        },
		{
            POSITION: [6, 12, 1.0, 15, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.money]),
                TYPE: "money1s",
				ALPHA: 0,
            },
        },
		{
            POSITION: [6, 12, 1.0, 15, 0, 0, 0.2],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.money]),
                TYPE: "money1s",
				ALPHA: 0,
            },
        },
		{
            POSITION: [6, 12, 1.0, 15, 0, 0, 0.4],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.money]),
                TYPE: "money1s",
				ALPHA: 0,
            },
        },
        {
            POSITION: [3, 7, 1.7, 15, 0, 0, 0],
        },
		{
            POSITION: [3, 12, 1.0, 18, 0, 0, 0],
        },
		{
            POSITION: [1, 12, 1.0, 18, 0, 0, 0],
            PROPERTIES: {COLOR: 3},
        },
    ],
};
exports.bribetaker = {
    PARENT: ["genericTank"],
    LABEL: "Bribetaker",
    BODY: {
        FOV: 1.1 * base.FOV,
    },
    GUNS: [
		{
            POSITION: [15, 7, -2.2, 0, 0, 0, 0],
        },
		{
            POSITION: [6, 12, 1.0, 15, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.money, g.damagetwin, g.damageweak, g.damageweak, g.damageweak]),
                TYPE: "money1s",
				ALPHA: 0,
            },
        },
		{
            POSITION: [6, 12, 1.0, 15, 0, 0, 0.15],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.money, g.damagetwin, g.damageweak, g.damageweak, g.damageweak]),
                TYPE: "money1s",
				ALPHA: 0,
            },
        },
		{
            POSITION: [6, 12, 1.0, 15, 0, 0, 0.3],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.money, g.damagetwin, g.damageweak, g.damageweak, g.damageweak]),
                TYPE: "money1s",
				ALPHA: 0,
            },
        },
		{
            POSITION: [6, 12, 1.0, 15, 0, 0, 0.45],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.money, g.damagetwin, g.damageweak, g.damageweak, g.damageweak]),
                TYPE: "money1s",
				ALPHA: 0,
            },
        },
		{
            POSITION: [6, 12, 1.0, 15, 0, 0, 0.6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.money, g.damagetwin, g.damageweak, g.damageweak, g.damageweak]),
                TYPE: "money1s",
				ALPHA: 0,
            },
        },
        {
            POSITION: [3, 7, 1.7, 15, 0, 0, 0],
        },
		{
            POSITION: [6, 12, 1.0, 18, 0, 0, 0],
        },
		{
            POSITION: [1, 12, 1.0, 18, 0, 0, 0],
            PROPERTIES: {COLOR: 3},
        },
		{
            POSITION: [1, 12, 1.0, 21, 0, 0, 0],
            PROPERTIES: {COLOR: 3},
        },
    ],
};
exports.crimirrupt = {
    PARENT: ["genericTank"],
    LABEL: "Crimirrupt",
    BODY: {
        FOV: 1.1 * base.FOV,
    },
    GUNS: [
		{
            POSITION: [20, 7, -2.2, 0, 0, 0, 0],
        },
		{
            POSITION: [6, 12, 1.0, 15, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.money, g.damagetwin, g.damageweak, g.damageweak, g.damageweak, g.bigmoney]),
                TYPE: "money1s",
				ALPHA: 0,
            },
        },
		{
            POSITION: [6, 12, 1.0, 15, 0, 0, 0.10],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.money, g.damagetwin, g.damageweak, g.damageweak, g.damageweak, g.bigmoney]),
                TYPE: "money1s",
				ALPHA: 0,
            },
        },
		{
            POSITION: [6, 12, 1.0, 15, 0, 0, 0.2],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.money, g.damagetwin, g.damageweak, g.damageweak, g.damageweak, g.bigmoney]),
                TYPE: "money1s",
				ALPHA: 0,
            },
        },
		{
            POSITION: [6, 12, 1.0, 15, 0, 0, 0.3],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.money, g.damagetwin, g.damageweak, g.damageweak, g.damageweak, g.bigmoney]),
                TYPE: "money1s",
				ALPHA: 0,
            },
        },
		{
            POSITION: [6, 12, 1.0, 15, 0, 0, 0.4],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.money, g.damagetwin, g.damageweak, g.damageweak, g.damageweak, g.bigmoney]),
                TYPE: "money1s",
				ALPHA: 0,
            },
        },
        {
            POSITION: [3, 7, 1.7, 15, 0, 0, 0],
        },
		{
            POSITION: [6, 12, 1.0, 18, 0, 0, 0],
        },
		{
            POSITION: [1, 12, 1.0, 18, 0, 0, 0],
            PROPERTIES: {COLOR: 3},
        },
		{
            POSITION: [1, 12, 1.0, 21, 0, 0, 0],
            PROPERTIES: {COLOR: 3},
        },
    ],
};
exports.millionaire = {
    PARENT: ["genericTank"],
    LABEL: "Millionaire",
    BODY: {
        FOV: 1.1 * base.FOV,
    },
    GUNS: [
		{
            POSITION: [20, 7, -2.2, 0, 0, 0, 0],
        },
		{
            POSITION: [6, 12, 1.0, 15, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.money, g.bigmoney]),
                TYPE: "money2s",
				ALPHA: 0,
            },
        },
		{
            POSITION: [6, 12, 1.0, 15, 0, 0, 0.15],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.money, g.bigmoney]),
                TYPE: "money2s",
				ALPHA: 0,
            },
        },
		{
            POSITION: [6, 12, 1.0, 15, 0, 0, 0.3],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.money, g.bigmoney]),
                TYPE: "money2s",
				ALPHA: 0,
            },
        },
        {
            POSITION: [3, 7, 1.7, 15, 0, 0, 0],
        },
		{
            POSITION: [3, 12, 1.0, 18, 0, 0, 0],
        },
		{
            POSITION: [1, 12, 1.0, 18, 0, 0, 0],
            PROPERTIES: {COLOR: 3},
        },
    ],
};
exports.multimillionaire = {
    PARENT: ["genericTank"],
    LABEL: "Multimillionaire",
    BODY: {
        FOV: 1.1 * base.FOV,
    },
    GUNS: [
		{
            POSITION: [20, 9, -2.2, 0, 0, 0, 0],
        },
		{
            POSITION: [6, 12, 1.0, 15, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.money, g.bigmoney, g.bigmoney]),
                TYPE: "money2s",
				ALPHA: 0,
            },
        },
		{
            POSITION: [6, 12, 1.0, 15, 0, 0, 0.10],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.money, g.bigmoney, g.bigmoney]),
                TYPE: "money2s",
				ALPHA: 0,
            },
        },
		{
            POSITION: [6, 12, 1.0, 15, 0, 0, 0.2],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.money, g.bigmoney, g.bigmoney]),
                TYPE: "money2s",
				ALPHA: 0,
            },
        },
        {
            POSITION: [3, 10, 1.7, 15, 0, 0, 0],
        },
		{
            POSITION: [3, 17, 1.0, 18, 0, 0, 0],
        },
		{
            POSITION: [1, 17, 1.0, 18, 0, 0, 0],
            PROPERTIES: {COLOR: 3},
        },
    ],
};
exports.stampingpressing = {
    PARENT: ["genericTank"],
    LABEL: "Stamping-Pressing",
    BODY: {
        FOV: 1.1 * base.FOV,
    },
    GUNS: [
		{
            POSITION: [15, 7, -2.8, 0, 0, 0, 0],
        },
		{
            POSITION: [6, 6, 1.0, 15, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.money, g.damagetwin, g.not1d2recoil]),
                TYPE: "money1s",
				ALPHA: 0,
            },
        },
		{
            POSITION: [6, 6, 1.0, 15, 0, 0, 0.2],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.money, g.damagetwin, g.not1d2recoil]),
                TYPE: "money1s",
				ALPHA: 0,
            },
        },
		{
            POSITION: [6, 6, 1.0, 15, 0, 0, 0.4],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.money, g.damagetwin, g.not1d2recoil]),
                TYPE: "money1s",
				ALPHA: 0,
            },
        },
		{
            POSITION: [6, 6, 1.0, 17, -4, 20, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.money, g.damagetwin, g.not1d2recoil]),
                TYPE: "money1s",
				ALPHA: 0,
            },
        },
		{
            POSITION: [6, 6, 1.0, 17, -4, 20, 0.2],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.money, g.damagetwin, g.not1d2recoil]),
                TYPE: "money1s",
				ALPHA: 0,
            },
        },
		{
            POSITION: [6, 6, 1.0, 17, -4, 20, 0.4],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.money, g.damagetwin, g.not1d2recoil]),
                TYPE: "money1s",
				ALPHA: 0,
            },
        },
		{
            POSITION: [6, 6, 1.0, 17, 4, -20, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.money, g.damagetwin, g.not1d2recoil]),
                TYPE: "money1s",
				ALPHA: 0,
            },
        },
		{
            POSITION: [6, 6, 1.0, 17, 4, -20, 0.2],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.money, g.damagetwin, g.not1d2recoil]),
                TYPE: "money1s",
				ALPHA: 0,
            },
        },
		{
            POSITION: [6, 6, 1.0, 17, 4, -20, 0.4],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.money, g.damagetwin, g.not1d2recoil]),
                TYPE: "money1s",
				ALPHA: 0,
            },
        },
        {
            POSITION: [3, 7, 2.0, 15, 0, 0, 0],
        },
		{
            POSITION: [3, 14, 1.0, 18, 0, 0, 0],
        },
		{
            POSITION: [1, 14, 1.0, 18, 0, 0, 0],
            PROPERTIES: {COLOR: 3},
        },
    ],
};
exports.hypnotism = {
    PARENT: ["genericTank"],
    LABEL: "Hypnotism",
	TURRETS: [
        {
            POSITION: [23, 0, 0, 0, 360, 0],
            TYPE: ["hypnotismBody"],
        },
		{
            POSITION: [9, 0, 0, 0, 360, 1],
            TYPE: ["hypnotismDeco"],
        }
    ],
    GUNS: [
		{
            POSITION: [18, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.fakedebuff, g.damagetwin]),
                TYPE: "bullet",
            },
        },
		{
            POSITION: [18, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.fakedebuff, g.realfake]),
                TYPE: "bullet",
				COLOR: 18,
				ALPHA: 0.25
            },
        },
		{
            POSITION: [0.1, 20, 1, 0, 0, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.halfreload, g.halfreload, g.damagetwin]),
                TYPE: "hypnotismmini",
				MAX_CHILDREN: 2,
				AUTOFIRE: true,
            },
        },
    ],
};
exports.sleepparalysis = {
    PARENT: ["genericTank"],
    LABEL: "Sleep Paralysis",
	BODY: {
        FOV: base.FOV * 1.1,
    },
	TURRETS: [
        {
            POSITION: [23, 0, 0, 0, 360, 0],
            TYPE: ["hypnotismBody"],
        },
		{
            POSITION: [9, 0, 0, 0, 360, 1],
            TYPE: ["sleepparalysisDeco"],
        }
    ],
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [6, 11, 1.3, 7, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.fakedebuff, g.damagetwin, g.morereload]),
                TYPE: "drone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                MAX_CHILDREN: 6,
            },
        },
		{
            POSITION: [0.1, 20, 1, 0, 0, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.halfreload, g.halfreload, g.damagetwin]),
                TYPE: "sleepparalysismini",
				MAX_CHILDREN: 2,
				AUTOFIRE: true,
            },
        },
    ],
};
exports.opium = {
    PARENT: ["genericTank"],
    LABEL: "Opium",
	TURRETS: [
        {
            POSITION: [23, 0, 0, 0, 360, 0],
            TYPE: ["hypnotismBody"],
        },
		{
            POSITION: [9, 0, 0, 0, 360, 1],
            TYPE: ["hypnotismDeco"],
        }
    ],
    GUNS: [
		{
            POSITION: [0.1, 20, 1, 0, 0, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.halfreload, g.damagetwin]),
                TYPE: "hypnotismmini",
				MAX_CHILDREN: 4,
				AUTOFIRE: true,
            },
        },
    ],
};
exports.air = {
	PARENT: ["genericTank"],
    LABEL: "Air",
    DANGER: 5,
	SHAPE: 6,
    MOTION_TYPE: "motor",
    FACING_TYPE: "turnWithSpeed",
    SIZE: 25,
	ALPHA: 0.51,
	BORDERLESS: true,
    BODY: {
        ACCELERATION: base.ACCEL * 1,
        SPEED: base.SPEED * 1,
        HEALTH: base.HEALTH * 20,
        DAMAGE: base.DAMAGE * 0.4,
        PENETRATION: base.PENETRATION * 2,
        SHIELD: base.SHIELD * 3,
        REGEN: base.REGEN * 2,
        FOV: base.FOV * 0.5,
        DENSITY: base.DENSITY * 1,
        PUSHABILITY: 0,
        HETERO: 0,
    },
    GUNS: [],
    TURRETS: [
        {
            /** SIZE     X       Y     ANGLE    ARC */
            POSITION: [15, 0, 0, 0, 360, 1],
            TYPE: "hazesymbol",
        },
    ],
	SKILL_CAP: [0, 0, 0, 0, 0, rsmshrl, rsmshrl, rsmshrl, rsmshrl, rsmshrl],
    STAT_NAMES: statnames.air,
	HITS_OWN_TYPE: "hardOnlyHaze",
};
exports.pounplosion = {
    PARENT: ["genericTank"],
    LABEL: "Pounplosion",
    GUNS: [
		{
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [23, 6, 1, 0, 0, 0, 0],
            PROPERTIES: {COLOR: 12},
        },
		{
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [15, 12, -1.69, 0, 0, 0, 0],
        },
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [20.5, 12, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.damagetwin]),
                TYPE: "explosionbullet",
            },
        },
		{
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [3, 14, 1, 15, 0, 0, 0],
        },
    ],
};
exports.relatiplosion = {
    PARENT: ["genericTank"],
    LABEL: "Relatiplosion",
    GUNS: [
		{
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [23, 4, 1, 0, 5, 0, 0],
            PROPERTIES: {COLOR: 12},
        },
		{
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [15, 8, -1.50, 0, 5, 0, 0],
        },
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [20.5, 8, 1, 0, 5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.damagetwin, g.damagetwin, g.damageweak]),
                TYPE: "explosiontwinbullet",
            },
        },
		{
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [3, 9, 1, 15, 5, 0, 0],
        },
		{
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [23, 4, 1, 0, -5, 0, 0],
            PROPERTIES: {COLOR: 12},
        },
		{
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [15, 8, -1.50, 0, -5, 0, 0],
        },
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [20.5, 8, 1, 0, -5, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.damagetwin, g.damagetwin, g.damageweak]),
                TYPE: "explosiontwinbullet",
            },
        },
		{
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [3, 9, 1, 15, -5, 0, 0],
        },
    ],
};
exports.alphaplosion = {
    PARENT: ["genericTank"],
    LABEL: "Alphaplosion",
    GUNS: [
		{
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [33, 6, 1, 0, 0, 0, 0],
            PROPERTIES: {COLOR: 12},
        },
		{
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [15, 12, -1.69, 0, 0, 0, 0],
        },
		{
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [15, 12, -1.345, 15, 0, 0, 0],
        },
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [30.5, 12, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.damagetwin, g.alphaex]),
                TYPE: "alphaexplosionbullet",
            },
        },
		{
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [3, 14, 1, 15, 0, 0, 0],
        },
		{
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [3, 14, 1, 25, 0, 0, 0],
        },
    ],
};
exports.splinter = {
    PARENT: ["genericTank"],
    LABEL: "Splinter",
    GUNS: [
		{
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [23, 6, 1, 0, 0, 0, 0],
            PROPERTIES: {COLOR: 12},
        },
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [20.5, 12, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.damagetwin]),
                TYPE: "fragmentationbullet",
            },
        },
    ],
};
exports.mixpound = {
    PARENT: ["genericTank"],
    LABEL: "Mixpound",
    GUNS: [
		{
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [23, 6, 1, 0, 0, 0, 0],
            PROPERTIES: {COLOR: 12},
        },
		{
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [15, 12, -1.69, 0, 0, 0, 0],
        },
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [20.5, 12, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.damagetwin]),
                TYPE: "exmentationbullet",
            },
        },
		{
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [3, 14, 1, 15, 0, 0, 0],
        },
    ],
};
exports.poundiation = {
    PARENT: ["genericTank"],
    LABEL: "Poundiation",
    GUNS: [
		{
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [23, 3, 1, 0, 4, 0, 0],
            PROPERTIES: {COLOR: 11},
        },
		{
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [23, 3, 1, 0, -4, 0, 0],
            PROPERTIES: {COLOR: 11},
        },
		{
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [15, 12, -1.69, 0, 0, 0, 0],
        },
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [20.5, 12, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.damagetwin]),
                TYPE: "radiationbullet",
            },
        },
		{
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [3, 14, 1, 15, 0, 0, 0],
        },
    ],
};
exports.sinful = {
    PARENT: ["genericTank"],
    LABEL: "Sinful",
	TURRETS: [
        {
            POSITION: [5, 12, 0, 0, 360, 0],
            TYPE: ["whip1"],
        },
    ],
};
exports.ballonarope = {
    PARENT: ["genericTank"],
    LABEL: "Ball On A Rope",
	TURRETS: [
        {
            POSITION: [7.5, 12, 0, 0, 360, 0],
            TYPE: ["whip1"],
        },
    ],
};
exports.doubleful = {
    PARENT: ["genericTank"],
    LABEL: "Doubleful",
	TURRETS: [
        {
            POSITION: [5, 12, 0, 0, 360, 0],
            TYPE: ["whip1"],
        },
		{
            POSITION: [5, 12, 0, 180, 360, 0],
            TYPE: ["whip1"],
        },
    ],
};
exports.twinsinful = {
    PARENT: ["genericTank"],
    LABEL: "Twin Sinful",
	TURRETS: [
        {
            POSITION: [5, 12, -5, 0, 360, 0],
            TYPE: ["twinwhip1"],
        },
		{
            POSITION: [5, 12, 5, 0, 360, 0],
            TYPE: ["twinwhip1"],
        },
    ],
};

//OVER TANKS

exports.mobasic = {
    // For use with -gunner combos only.
    PARENT: ["genericTank"],
    LABEL: "Basic",
	GUNS: [
        {
            POSITION: [18, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
                TYPE: "bullet",
                COLOR: 16,
                LABEL: "",
                STAT_CALCULATOR: 0,
                WAIT_TO_CYCLE: false,
                AUTOFIRE: false,
                SYNCS_SKILLS: false,
                MAX_CHILDREN: 0,
                ALT_FIRE: false,
                NEGATIVE_RECOIL: false,
            },
        },
    ],
};
exports.overbasic = makeOver(exports.mobasic);

// VENTILATION TANKS

exports.ventilation = {
    PARENT: ["genericTank"],
    LABEL: "Ventilation",
    STAT_NAMES: statnames.drone,
    BODY: {
        FOV: base.FOV * 1.2,
    },
	TURRETS: [
        {
            /** SIZE     X       Y     ANGLE    ARC */
            POSITION: [12, 0, 0, 0, 360, 1],
            TYPE: "hazesymbol",
        },
    ],
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [5, 16, 1.1, 7, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.haze]),
                TYPE: ["haze"],
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                MAX_CHILDREN: 20,
            },
        },
		{
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [3, 13, 1.1, 7, 0, 0, 0],
			PROPERTIES: {
				COLOR: 17,
				ALPHA: 0.7,
				BORDERLESS: false
            },
        },
		{
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [6, 2, 0.8, 7, 5, 0, 0],
        },
		{
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [6, 2, 0.8, 7, -5, 0, 0],
        },
		{
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [5, 6, 0.9, 7, 0, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.hazemini]),
                TYPE: ["haze"],
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                MAX_CHILDREN: 20,
            },
        },
		{
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [6, 1, 0.8, 7, 0, 180, 0],
        },
    ],
};
exports.chainet = {
    // For use with -gunner combos only.
    PARENT: ["genericTank"],
    LABEL: "Atmosphere Chainet",
	TOOLTIP: "!IMPORTANT! Right-click to spray the chain (air)",
	TURRETS: [
        {
            /** SIZE     X       Y     ANGLE    ARC */
            POSITION: [12, 0, 0, 0, 360, 1],
            TYPE: "chainwhitesymbol",
        },
    ],
	GUNS: [
        {
            POSITION: [8, 16, 1.3, 7, 0, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pawn, g.doublereload]),
                TYPE: "chain",
				MAX_CHILDREN: 31,
				DESTROY_OLDEST_CHILD: true,
				ALT_FIRE: true
            },
        },
		{
            POSITION: [3, 5, 1, 15, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.damagetwin, g.damagetwin, g.damagetwin, g.damagetwin, g.damagetwin, g.damagetwin, g.damagetwin, g.healthtwin, g.healthtwin, g.healthtwin, g.healthtwin]),
                TYPE: "explosionchain",
            },
        },
		{
            POSITION: [15, 8, 1, 0, 0, 0, 0],
        },
		{
            POSITION: [1, 8, 1, 14, 0, 0, 0],
			PROPERTIES: {COLOR: 2},
        },
		{
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [6, 13, 1.1, 7, 0, 180, 0],
			PROPERTIES: {
				COLOR: 18,
				ALPHA: 0.7,
				BORDERLESS: false
            },
        },
		{
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [9, 2, 0.8, 7, 5, 180, 0],
        },
		{
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [9, 2, 0.8, 7, -5, 180, 0],
        },
    ],
};

// TANK UPGRADE PATHS
exports.basic.UPGRADES_TIER_1 = ["twin", "sniper", "machineGun", "flankGuard", "director", "pounder", "trapper", "single", "lancer", "fakebasic", "desmos", "streamlined", "whirlwind", "smasher", "healer", "banker", "air"];
        exports.smasher.UPGRADES_TIER_3 = ["megaSmasher", "spike", "autoSmasher", "landmine"];
        //exports.healer.UPGRADES_TIER_3 = ["medic", "ambulance", "surgeon", "paramedic", "connected", /*"swiss"*/]
		exports.paramedic.UPGRADES_TIER_3 = ["intruder"]

    exports.twin.UPGRADES_TIER_2 = ["doubleTwin", "tripleShot", "gunner", "hexaTank"];
        exports.twin.UPGRADES_TIER_3 = ["dual", "bulwark", "musket"];
        exports.doubleTwin.UPGRADES_TIER_3 = ["tripleTwin", "hewnDouble", "autoDouble", "bentDouble"];
        exports.tripleShot.UPGRADES_TIER_3 = ["pentaShot", "spreadshot", "bentHybrid", "bentDouble", "triplet"];

    exports.sniper.UPGRADES_TIER_2 = ["assassin", "hunter", "minigun", "rifle", "brokenbullet", "sunburn"];
        exports.sniper.UPGRADES_TIER_3 = ["bushwhacker"];
        exports.assassin.UPGRADES_TIER_3 = ["ranger", "falcon", "stalker", "autoAssassin", "single"];
			exports.ranger.UPGRADES_TIER_3 = ["caretaker"];
        exports.hunter.UPGRADES_TIER_3 = ["predator", "xHunter", "poacher", "ordnance", "dual"];
        exports.rifle.UPGRADES_TIER_3 = ["musket", "crossbow", "armsman"];
		exports.brokenbullet.UPGRADES_TIER_3 = ["brokenaccelerator"];
		exports.sunburn.UPGRADES_TIER_3 = ["blind", "lightspeed", "prism", "laserfield", "lanser", "overburned"];

    exports.machineGun.UPGRADES_TIER_2 = ["artillery", "minigun", "gunner", "sprayer", "machinefill"];
        exports.minigun.UPGRADES_TIER_3 = ["streamliner", "nailgun", "cropDuster", "barricade", "vulture"];
        exports.gunner.UPGRADES_TIER_3 = ["autoGunner", "nailgun", "auto4", "machineGunner", "gunnerTrapper", "cyclone", "overgunner", "journeygun"];
        exports.sprayer.UPGRADES_TIER_3 = ["redistributor", "phoenix", "atomizer", "focal"];
		exports.machinefill.UPGRADES_TIER_3 = ["tsunami"];

    exports.flankGuard.UPGRADES_TIER_2 = ["hexaTank", "triAngle", "auto3", "trapGuard", "triTrapper"];
        exports.flankGuard.UPGRADES_TIER_3 = ["tripleTwin"/*, "quadruplex"*/];
        exports.hexaTank.UPGRADES_TIER_3 = ["octoTank", "cyclone", "hexaTrapper"];
        exports.triAngle.UPGRADES_TIER_3 = ["fighter", "booster", "falcon", "bomber", "autoTriAngle", "surfer", "eagle", "phoenix", "vulture"];
        exports.auto3.UPGRADES_TIER_3 = ["auto5", "mega3", "auto4", "banshee"];

    exports.director.UPGRADES_TIER_2 = ["overseer", "cruiser", "underseer", "spawner", "psychologist", "manager", "coach", "directordrive", "dealership", "haste", "frontier", "overbasic", "ventilation"];
        exports.coach.UPGRADES_TIER_3 = ["greatcoach", "stony", "badcoach", "castling", "overburned"];
        exports.overseer.UPGRADES_TIER_3 = ["overlord", "overtrapper", "overgunner", "banshee", "autoOverseer", "overdrive", "commander", "overfutility", "stony"];
        exports.cruiser.UPGRADES_TIER_3 = ["carrier", "battleship", "fortress", "autoCruiser", "commander", "cruiserdrive", "fish", "fishingnet"];
        exports.underseer.UPGRADES_TIER_3 = ["necromancer", "maleficitor", "infestor"];
        exports.spawner.UPGRADES_TIER_3 = ["factory", "autoSpawner"];
		exports.psychologist.UPGRADES_TIER_3 = ["psychiatrist", "badcoach"];
		exports.directordrive.UPGRADES_TIER_3 = ["overdrive", "directorstorm", "castling", "cruiserdrive"];
		exports.dealership.UPGRADES_TIER_3 = ["allergy", "beefarm"];
		exports.haste.UPGRADES_TIER_3 = ["accelerator"];
		exports.ventilation.UPGRADES_TIER_3 = ["chainet"];

    exports.pounder.UPGRADES_TIER_2 = ["destroyer", "builder", "artillery", "launcher", "drunk", "pounplosion", "splinter"];
        exports.pounder.UPGRADES_TIER_3 = ["shotgun", "eagle"];
        exports.destroyer.UPGRADES_TIER_3 = ["conqueror", "annihilator", "hybrid", "construct", "burning", "strongihilator"];
        exports.artillery.UPGRADES_TIER_3 = ["mortar", "ordnance", "beekeeper", "fieldGun"];
        exports.launcher.UPGRADES_TIER_3 = ["skimmer", "twister", "swarmer", "sidewinder", "fieldGun"];
		exports.drunk.UPGRADES_TIER_3 = ["strongihilator", "brewliner", "poisonous"];
		exports.pounplosion.UPGRADES_TIER_3 = ["poundiation", "mixpound", "alphaplosion", "relatiplosion"];
		exports.splinter.UPGRADES_TIER_3 = ["mixpound"];

    exports.trapper.UPGRADES_TIER_2 = ["builder", "triTrapper", "trapGuard", "pawndefense", "machinetrapper", "trappergun", "trapperdrive", "barricade", "overtrapper", "epidemic"];
        exports.builder.UPGRADES_TIER_3 = ["construct", "autoBuilder", "engineer", "boomer", "assembler", "architect", "conqueror", "supplier", "psychotherapist", "blockade", "kremlin"];
        exports.triTrapper.UPGRADES_TIER_3 = ["fortress", "hexaTrapper", "septaTrapper", "architect"];
        exports.trapGuard.UPGRADES_TIER_3 = ["bushwhacker", "gunnerTrapper", "bomber", "conqueror", "bulwark"];
		exports.pawndefense.UPGRADES_TIER_3 = ["pawnassault", "trappawns", "twinpawns", "d4e4pawns"];
		exports.machinetrapper.UPGRADES_TIER_3 = ["machinetrench"];
		/*exports.epidemic.UPGRADES_TIER_3 = ["corrosion"];*/
		exports.trapperdrive.UPGRADES_TIER_3 = ["fieldworker", "d4e4pawns"];
		exports.barricade.UPGRADES_TIER_3 = ["fieldworker", "twofoldfenced", "blockade"];
		
	exports.single.UPGRADES_TIER_2 = ["solitary", "duo"];
		exports.solitary.UPGRADES_TIER_3 = ["distinctive"];
		exports.duo.UPGRADES_TIER_3 = ["doubleduo"];
		
	exports.lancer.UPGRADES_TIER_2 = ["secluded", "partisan", "bayonet", "autolancer", "larsen", "sinful", "spincer"];
		exports.secluded.UPGRADES_TIER_3 = ["isolated"];
		exports.bayonet.UPGRADES_TIER_3 = ["spearman", "fourhammer1", "fourhammer2"];
		exports.autolancer.UPGRADES_TIER_3 = ["autotwinlancer"];
		exports.sinful.UPGRADES_TIER_3 = ["twinsinful", "ballonarope", "doubleful"];
		exports.spincer.UPGRADES_TIER_3 = ["spinner"];
		
	exports.fakebasic.UPGRADES_TIER_2 = ["hypnotism"];
		exports.hypnotism.UPGRADES_TIER_3 = ["opium", "sleepparalysis"];

    exports.desmos.UPGRADES_TIER_2 = ["helix", "volute", "desgun", "oak"];
        exports.helix.UPGRADES_TIER_3 = ["triplex", "quadruplex"];
        exports.volute.UPGRADES_TIER_3 = ["sidewinder"];
		exports.oak.UPGRADES_TIER_3 = ["birch"];
		
	exports.streamlined.UPGRADES_TIER_2 = ["offroader", "athlete"];
	    exports.offroader.UPGRADES_TIER_3 = ["spoiler", "supersonicfighter", "steroid"];
		exports.athlete.UPGRADES_TIER_3 = ["steroid"];
		
	exports.banker.UPGRADES_TIER_2 = ["stampingpressing", "millionaire", "bribetaker"];
		exports.millionaire.UPGRADES_TIER_3 = ["multimillionaire", "crimirrupt"];
		exports.bribetaker.UPGRADES_TIER_3 = ["crimirrupt"];
	
