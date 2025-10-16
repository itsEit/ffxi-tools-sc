const WEAPONS = {
    1: "Hand-to-Hand",
    2: "Dagger",
    3: "Sword",
    4: "Great Sword",
    5: "Axe",
    6: "Great Axe",
    7: "Scythe",
    8: "Polearm",
    9: "Katana",
    10: "Great Katana",
    11: "Club",
    12: "Staff",
    25: "Archery",
    26: "Marksmanship"
}

const WEAPONSKILLS = {
    1: {
        "en": "Combo",
        "skill": 1,
        "element": 6,
        "skillchain_a": "Impaction",
        "skillchain_b": "",
        "skillchain_c": ""
    },
    2: {
        "en": "Shoulder Tackle",
        "skill": 1,
        "element": 4,
        "skillchain_a": "Impaction",
        "skillchain_b": "Reverberation",
        "skillchain_c": ""
    },
    3: {
        "en": "One Inch Punch",
        "skill": 1,
        "element": 6,
        "skillchain_a": "Compression",
        "skillchain_b": "",
        "skillchain_c": ""
    },
    4: {
        "en": "Backhand Blow",
        "skill": 1,
        "element": 6,
        "skillchain_a": "Detonation",
        "skillchain_b": "",
        "skillchain_c": ""
    },
    5: {
        "en": "Raging Fists",
        "skill": 1,
        "element": 6,
        "skillchain_a": "Impaction",
        "skillchain_b": "",
        "skillchain_c": ""
    },
    6: {
        "en": "Spinning Attack",
        "skill": 1,
        "element": 6,
        "skillchain_a": "Liquefaction",
        "skillchain_b": "Impaction",
        "skillchain_c": ""
    },
    7: {
        "en": "Howling Fist",
        "skill": 1,
        "element": 6,
        "skillchain_a": "Transfixion",
        "skillchain_b": "Impaction",
        "skillchain_c": ""
    },
    8: {
        "en": "Dragon Kick",
        "skill": 1,
        "element": 6,
        "skillchain_a": "Fragmentation",
        "skillchain_b": "",
        "skillchain_c": ""
    },
    9: {
        "en": "Asuran Fists",
        "skill": 1,
        "element": 6,
        "skillchain_a": "Gravitation",
        "skillchain_b": "Liquefaction",
        "skillchain_c": ""
    },
    10: {
        "en": "Final Heaven",
        "skill": 1,
        "element": 6,
        "skillchain_a": "Light",
        "skillchain_b": "Fusion",
        "skillchain_c": ""
    },
    11: {
        "en": "Ascetic's Fury",
        "skill": 1,
        "element": 6,
        "skillchain_a": "Fusion",
        "skillchain_b": "Transfixion",
        "skillchain_c": ""
    },
    12: {
        "en": "Stringing Pummel",
        "skill": 1,
        "element": 6,
        "skillchain_a": "Gravitation",
        "skillchain_b": "Liquefaction",
        "skillchain_c": ""
    },
    13: {
        "en": "Tornado Kick",
        "skill": 1,
        "element": 6,
        "skillchain_a": "Induration",
        "skillchain_b": "Impaction",
        "skillchain_c": "Detonation"
    },
    14: {
        "en": "Victory Smite",
        "skill": 1,
        "element": 6,
        "skillchain_a": "Light",
        "skillchain_b": "Fragmentation",
        "skillchain_c": ""
    },
    15: {
        "en": "Shijin Spiral",
        "skill": 1,
        "element": 0,
        "skillchain_a": "Fusion",
        "skillchain_b": "Reverberation",
        "skillchain_c": ""
    },
    16: {
        "en": "Wasp Sting",
        "skill": 2,
        "element": 5,
        "skillchain_a": "Scission",
        "skillchain_b": "",
        "skillchain_c": ""
    },
    17: {
        "en": "Viper Bite",
        "skill": 2,
        "element": 5,
        "skillchain_a": "Scission",
        "skillchain_b": "",
        "skillchain_c": ""
    },
    18: {
        "en": "Shadowstitch",
        "skill": 2,
        "element": 1,
        "skillchain_a": "Reverberation",
        "skillchain_b": "",
        "skillchain_c": ""
    },
    19: {
        "en": "Gust Slash",
        "skill": 2,
        "element": 2,
        "skillchain_a": "Detonation",
        "skillchain_b": "",
        "skillchain_c": ""
    },
    20: {
        "en": "Cyclone",
        "skill": 2,
        "element": 2,
        "skillchain_a": "Detonation",
        "skillchain_b": "Impaction",
        "skillchain_c": ""
    },
    23: {
        "en": "Dancing Edge",
        "skill": 2,
        "element": 6,
        "skillchain_a": "Scission",
        "skillchain_b": "Detonation",
        "skillchain_c": ""
    },
    24: {
        "en": "Shark Bite",
        "skill": 2,
        "element": 6,
        "skillchain_a": "Fragmentation",
        "skillchain_b": "",
        "skillchain_c": ""
    },
    25: {
        "en": "Evisceration",
        "skill": 2,
        "element": 6,
        "skillchain_a": "Gravitation",
        "skillchain_b": "Transfixion",
        "skillchain_c": ""
    },
    26: {
        "en": "Mercy Stroke",
        "skill": 2,
        "element": 6,
        "skillchain_a": "Darkness",
        "skillchain_b": "Gravitation",
        "skillchain_c": ""
    },
    27: {
        "en": "Mandalic Stab",
        "skill": 2,
        "element": 6,
        "skillchain_a": "Fusion",
        "skillchain_b": "Compression",
        "skillchain_c": ""
    },
    28: {
        "en": "Mordant Rime",
        "skill": 2,
        "element": 2,
        "skillchain_a": "Fragmentation",
        "skillchain_b": "Distortion",
        "skillchain_c": ""
    },
    29: {
        "en": "Pyrrhic Kleos",
        "skill": 2,
        "element": 1,
        "skillchain_a": "Distortion",
        "skillchain_b": "Scission",
        "skillchain_c": ""
    },
    30: {
        "en": "Aeolian Edge",
        "skill": 2,
        "element": 2,
        "skillchain_a": "Scission",
        "skillchain_b": "Detonation",
        "skillchain_c": "Impaction"
    },
    31: {
        "en": "Rudra's Storm",
        "skill": 2,
        "element": 2,
        "skillchain_a": "Darkness",
        "skillchain_b": "Distortion",
        "skillchain_c": ""
    },
    32: {
        "en": "Fast Blade",
        "skill": 3,
        "element": 6,
        "skillchain_a": "Scission",
        "skillchain_b": "",
        "skillchain_c": ""
    },
    33: {
        "en": "Burning Blade",
        "skill": 3,
        "element": 0,
        "skillchain_a": "Liquefaction",
        "skillchain_b": "",
        "skillchain_c": ""
    },
    34: {
        "en": "Red Lotus Blade",
        "skill": 3,
        "element": 0,
        "skillchain_a": "Liquefaction",
        "skillchain_b": "Detonation",
        "skillchain_c": ""
    },
    35: {
        "en": "Flat Blade",
        "skill": 3,
        "element": 4,
        "skillchain_a": "Impaction",
        "skillchain_b": "",
        "skillchain_c": ""
    },
    36: {
        "en": "Shining Blade",
        "skill": 3,
        "element": 6,
        "skillchain_a": "Scission",
        "skillchain_b": "",
        "skillchain_c": ""
    },
    37: {
        "en": "Seraph Blade",
        "skill": 3,
        "element": 6,
        "skillchain_a": "Scission",
        "skillchain_b": "",
        "skillchain_c": ""
    },
    38: {
        "en": "Circle Blade",
        "skill": 3,
        "element": 6,
        "skillchain_a": "Reverberation",
        "skillchain_b": "Impaction",
        "skillchain_c": ""
    },
    40: {
        "en": "Vorpal Blade",
        "skill": 3,
        "element": 6,
        "skillchain_a": "Scission",
        "skillchain_b": "Impaction",
        "skillchain_c": ""
    },
    41: {
        "en": "Swift Blade",
        "skill": 3,
        "element": 6,
        "skillchain_a": "Gravitation",
        "skillchain_b": "",
        "skillchain_c": ""
    },
    42: {
        "en": "Savage Blade",
        "skill": 3,
        "element": 6,
        "skillchain_a": "Fragmentation",
        "skillchain_b": "Scission",
        "skillchain_c": ""
    },
    43: {
        "en": "Knights of Round",
        "skill": 3,
        "element": 6,
        "skillchain_a": "Light",
        "skillchain_b": "Fusion",
        "skillchain_c": ""
    },
    44: {
        "en": "Death Blossom",
        "skill": 3,
        "element": 4,
        "skillchain_a": "Fragmentation",
        "skillchain_b": "Distortion",
        "skillchain_c": ""
    },
    45: {
        "en": "Atonement",
        "skill": 3,
        "element": 15,
        "skillchain_a": "Fusion",
        "skillchain_b": "Reverberation",
        "skillchain_c": ""
    },
    46: {
        "en": "Expiacion",
        "skill": 3,
        "element": 6,
        "skillchain_a": "Distortion",
        "skillchain_b": "Scission",
        "skillchain_c": ""
    },
    48: {
        "en": "Hard Slash",
        "skill": 4,
        "element": 6,
        "skillchain_a": "Scission",
        "skillchain_b": "",
        "skillchain_c": ""
    },
    49: {
        "en": "Power Slash",
        "skill": 4,
        "element": 6,
        "skillchain_a": "Transfixion",
        "skillchain_b": "",
        "skillchain_c": ""
    },
    50: {
        "en": "Frostbite",
        "skill": 4,
        "element": 1,
        "skillchain_a": "Induration",
        "skillchain_b": "",
        "skillchain_c": ""
    },
    51: {
        "en": "Freezebite",
        "skill": 4,
        "element": 1,
        "skillchain_a": "Induration",
        "skillchain_b": "Detonation",
        "skillchain_c": ""
    },
    52: {
        "en": "Shockwave",
        "skill": 4,
        "element": 7,
        "skillchain_a": "Reverberation",
        "skillchain_b": "",
        "skillchain_c": ""
    },
    53: {
        "en": "Crescent Moon",
        "skill": 4,
        "element": 6,
        "skillchain_a": "Scission",
        "skillchain_b": "",
        "skillchain_c": ""
    },
    54: {
        "en": "Sickle Moon",
        "skill": 4,
        "element": 6,
        "skillchain_a": "Scission",
        "skillchain_b": "Impaction",
        "skillchain_c": ""
    },
    55: {
        "en": "Spinning Slash",
        "skill": 4,
        "element": 6,
        "skillchain_a": "Fragmentation",
        "skillchain_b": "",
        "skillchain_c": ""
    },
    56: {
        "en": "Ground Strike",
        "skill": 4,
        "element": 6,
        "skillchain_a": "Fragmentation",
        "skillchain_b": "Distortion",
        "skillchain_c": ""
    },
    57: {
        "en": "Scourge",
        "skill": 4,
        "element": 6,
        "skillchain_a": "Light",
        "skillchain_b": "Fusion",
        "skillchain_c": ""
    },
    58: {
        "en": "Herculean Slash",
        "skill": 4,
        "element": 1,
        "skillchain_a": "Induration",
        "skillchain_b": "Impaction",
        "skillchain_c": "Detonation"
    },
    59: {
        "en": "Torcleaver",
        "skill": 4,
        "element": 6,
        "skillchain_a": "Light",
        "skillchain_b": "Distortion",
        "skillchain_c": ""
    },
    60: {
        "en": "Resolution",
        "skill": 4,
        "element": 6,
        "skillchain_a": "Fragmentation",
        "skillchain_b": "Scission",
        "skillchain_c": ""
    },
    61: {
        "en": "Dimidiation",
        "skill": 4,
        "element": 6,
        "skillchain_a": "Light",
        "skillchain_b": "Fragmentation",
        "skillchain_c": ""
    },
    62: {
        "en": "Fimbulvetr",
        "skill": 4,
        "element": 6,
        "skillchain_a": "Detonation",
        "skillchain_b": "Compression",
        "skillchain_c": "Distortion"
    },
    64: {
        "en": "Raging Axe",
        "skill": 5,
        "element": 6,
        "skillchain_a": "Detonation",
        "skillchain_b": "Impaction",
        "skillchain_c": ""
    },
    65: {
        "en": "Smash Axe",
        "skill": 5,
        "element": 4,
        "skillchain_a": "Impaction",
        "skillchain_b": "Reverberation",
        "skillchain_c": ""
    },
    66: {
        "en": "Gale Axe",
        "skill": 5,
        "element": 2,
        "skillchain_a": "Detonation",
        "skillchain_b": "",
        "skillchain_c": ""
    },
    67: {
        "en": "Avalanche Axe",
        "skill": 5,
        "element": 6,
        "skillchain_a": "Scission",
        "skillchain_b": "Impaction",
        "skillchain_c": ""
    },
    68: {
        "en": "Spinning Axe",
        "skill": 5,
        "element": 6,
        "skillchain_a": "Liquefaction",
        "skillchain_b": "Scission",
        "skillchain_c": "Impaction"
    },
    69: {
        "en": "Rampage",
        "skill": 5,
        "element": 6,
        "skillchain_a": "Scission",
        "skillchain_b": "",
        "skillchain_c": ""
    },
    70: {
        "en": "Calamity",
        "skill": 5,
        "element": 6,
        "skillchain_a": "Scission",
        "skillchain_b": "Impaction",
        "skillchain_c": ""
    },
    71: {
        "en": "Mistral Axe",
        "skill": 5,
        "element": 6,
        "skillchain_a": "Fusion",
        "skillchain_b": "",
        "skillchain_c": ""
    },
    72: {
        "en": "Decimation",
        "skill": 5,
        "element": 6,
        "skillchain_a": "Fusion",
        "skillchain_b": "Reverberation",
        "skillchain_c": ""
    },
    73: {
        "en": "Onslaught",
        "skill": 5,
        "element": 6,
        "skillchain_a": "Darkness",
        "skillchain_b": "Gravitation",
        "skillchain_c": ""
    },
    74: {
        "en": "Primal Rend",
        "skill": 5,
        "element": 6,
        "skillchain_a": "Gravitation",
        "skillchain_b": "Reverberation",
        "skillchain_c": ""
    },
    75: {
        "en": "Bora Axe",
        "skill": 5,
        "element": 1,
        "skillchain_a": "Scission",
        "skillchain_b": "Detonation",
        "skillchain_c": ""
    },
    76: {
        "en": "Cloudsplitter",
        "skill": 5,
        "element": 4,
        "skillchain_a": "Darkness",
        "skillchain_b": "Fragmentation",
        "skillchain_c": ""
    },
    77: {
        "en": "Ruinator",
        "skill": 5,
        "element": 6,
        "skillchain_a": "Distortion",
        "skillchain_b": "Detonation",
        "skillchain_c": ""
    },
    78: {
        "en": "Blitz",
        "skill": 5,
        "element": 6,
        "skillchain_a": "Liquefaction",
        "skillchain_b": "Impaction",
        "skillchain_c": "Fragmentation"
    },
    80: {
        "en": "Shield Break",
        "skill": 6,
        "element": 6,
        "skillchain_a": "Impaction",
        "skillchain_b": "",
        "skillchain_c": ""
    },
    81: {
        "en": "Iron Tempest",
        "skill": 6,
        "element": 6,
        "skillchain_a": "Scission",
        "skillchain_b": "",
        "skillchain_c": ""
    },
    82: {
        "en": "Sturmwind",
        "skill": 6,
        "element": 6,
        "skillchain_a": "Reverberation",
        "skillchain_b": "Scission",
        "skillchain_c": ""
    },
    83: {
        "en": "Armor Break",
        "skill": 6,
        "element": 6,
        "skillchain_a": "Impaction",
        "skillchain_b": "",
        "skillchain_c": ""
    },
    84: {
        "en": "Keen Edge",
        "skill": 6,
        "element": 6,
        "skillchain_a": "Compression",
        "skillchain_b": "",
        "skillchain_c": ""
    },
    85: {
        "en": "Weapon Break",
        "skill": 6,
        "element": 6,
        "skillchain_a": "Impaction",
        "skillchain_b": "",
        "skillchain_c": ""
    },
    86: {
        "en": "Raging Rush",
        "skill": 6,
        "element": 6,
        "skillchain_a": "Induration",
        "skillchain_b": "Reverberation",
        "skillchain_c": ""
    },
    87: {
        "en": "Full Break",
        "skill": 6,
        "element": 6,
        "skillchain_a": "Distortion",
        "skillchain_b": "",
        "skillchain_c": ""
    },
    88: {
        "en": "Steel Cyclone",
        "skill": 6,
        "element": 6,
        "skillchain_a": "Distortion",
        "skillchain_b": "Detonation",
        "skillchain_c": ""
    },
    89: {
        "en": "Metatron Torment",
        "skill": 6,
        "element": 6,
        "skillchain_a": "Light",
        "skillchain_b": "Fusion",
        "skillchain_c": ""
    },
    90: {
        "en": "King's Justice",
        "skill": 6,
        "element": 6,
        "skillchain_a": "Fragmentation",
        "skillchain_b": "Scission",
        "skillchain_c": ""
    },
    91: {
        "en": "Fell Cleave",
        "skill": 6,
        "element": 6,
        "skillchain_a": "Scission",
        "skillchain_b": "Detonation",
        "skillchain_c": ""
    },
    92: {
        "en": "Ukko's Fury",
        "skill": 6,
        "element": 3,
        "skillchain_a": "Light",
        "skillchain_b": "Fragmentation",
        "skillchain_c": ""
    },
    93: {
        "en": "Upheaval",
        "skill": 6,
        "element": 6,
        "skillchain_a": "Fusion",
        "skillchain_b": "Compression",
        "skillchain_c": ""
    },
    94: {
        "en": "Disaster",
        "skill": 6,
        "element": 6,
        "skillchain_a": "Transfixion",
        "skillchain_b": "Scission",
        "skillchain_c": "Gravitation"
    },
    96: {
        "en": "Slice",
        "skill": 7,
        "element": 6,
        "skillchain_a": "Scission",
        "skillchain_b": "",
        "skillchain_c": ""
    },
    97: {
        "en": "Dark Harvest",
        "skill": 7,
        "element": 7,
        "skillchain_a": "Reverberation",
        "skillchain_b": "",
        "skillchain_c": ""
    },
    98: {
        "en": "Shadow of Death",
        "skill": 7,
        "element": 7,
        "skillchain_a": "Induration",
        "skillchain_b": "Reverberation",
        "skillchain_c": ""
    },
    99: {
        "en": "Nightmare Scythe",
        "skill": 7,
        "element": 7,
        "skillchain_a": "Compression",
        "skillchain_b": "Scission",
        "skillchain_c": ""
    },
    100: {
        "en": "Spinning Scythe",
        "skill": 7,
        "element": 6,
        "skillchain_a": "Reverberation",
        "skillchain_b": "Scission",
        "skillchain_c": ""
    },
    101: {
        "en": "Vorpal Scythe",
        "skill": 7,
        "element": 6,
        "skillchain_a": "Transfixion",
        "skillchain_b": "Scission",
        "skillchain_c": ""
    },
    102: {
        "en": "Guillotine",
        "skill": 7,
        "element": 2,
        "skillchain_a": "Induration",
        "skillchain_b": "",
        "skillchain_c": ""
    },
    103: {
        "en": "Cross Reaper",
        "skill": 7,
        "element": 6,
        "skillchain_a": "Distortion",
        "skillchain_b": "",
        "skillchain_c": ""
    },
    104: {
        "en": "Spiral Hell",
        "skill": 7,
        "element": 6,
        "skillchain_a": "Distortion",
        "skillchain_b": "Scission",
        "skillchain_c": ""
    },
    105: {
        "en": "Catastrophe",
        "skill": 7,
        "element": 6,
        "skillchain_a": "Darkness",
        "skillchain_b": "Gravitation",
        "skillchain_c": ""
    },
    106: {
        "en": "Insurgency",
        "skill": 7,
        "element": 6,
        "skillchain_a": "Fusion",
        "skillchain_b": "Compression",
        "skillchain_c": ""
    },
    107: {
        "en": "Infernal Scythe",
        "skill": 7,
        "element": 7,
        "skillchain_a": "Compression",
        "skillchain_b": "Reverberation",
        "skillchain_c": ""
    },
    108: {
        "en": "Quietus",
        "skill": 7,
        "element": 7,
        "skillchain_a": "Darkness",
        "skillchain_b": "Distortion",
        "skillchain_c": ""
    },
    109: {
        "en": "Entropy",
        "skill": 7,
        "element": 7,
        "skillchain_a": "Gravitation",
        "skillchain_b": "Reverberation",
        "skillchain_c": ""
    },
    110: {
        "en": "Origin",
        "skill": 7,
        "element": 6,
        "skillchain_a": "Induration",
        "skillchain_b": "Reverberation",
        "skillchain_c": "Fusion"
    },
    112: {
        "en": "Double Thrust",
        "skill": 8,
        "element": 6,
        "skillchain_a": "Transfixion",
        "skillchain_b": "",
        "skillchain_c": ""
    },
    113: {
        "en": "Thunder Thrust",
        "skill": 8,
        "element": 4,
        "skillchain_a": "Transfixion",
        "skillchain_b": "Impaction",
        "skillchain_c": ""
    },
    114: {
        "en": "Raiden Thrust",
        "skill": 8,
        "element": 4,
        "skillchain_a": "Transfixion",
        "skillchain_b": "Impaction",
        "skillchain_c": ""
    },
    115: {
        "en": "Leg Sweep",
        "skill": 8,
        "element": 4,
        "skillchain_a": "Impaction",
        "skillchain_b": "",
        "skillchain_c": ""
    },
    116: {
        "en": "Penta Thrust",
        "skill": 8,
        "element": 6,
        "skillchain_a": "Compression",
        "skillchain_b": "",
        "skillchain_c": ""
    },
    117: {
        "en": "Vorpal Thrust",
        "skill": 8,
        "element": 6,
        "skillchain_a": "Reverberation",
        "skillchain_b": "Transfixion",
        "skillchain_c": ""
    },
    118: {
        "en": "Skewer",
        "skill": 8,
        "element": 6,
        "skillchain_a": "Transfixion",
        "skillchain_b": "Impaction",
        "skillchain_c": ""
    },
    119: {
        "en": "Wheeling Thrust",
        "skill": 8,
        "element": 6,
        "skillchain_a": "Fusion",
        "skillchain_b": "",
        "skillchain_c": ""
    },
    120: {
        "en": "Impulse Drive",
        "skill": 8,
        "element": 6,
        "skillchain_a": "Gravitation",
        "skillchain_b": "Induration",
        "skillchain_c": ""
    },
    121: {
        "en": "Geirskogul",
        "skill": 8,
        "element": 6,
        "skillchain_a": "Light",
        "skillchain_b": "Distortion",
        "skillchain_c": ""
    },
    122: {
        "en": "Drakesbane",
        "skill": 8,
        "element": 6,
        "skillchain_a": "Fusion",
        "skillchain_b": "Transfixion",
        "skillchain_c": ""
    },
    123: {
        "en": "Sonic Thrust",
        "skill": 8,
        "element": 6,
        "skillchain_a": "Transfixion",
        "skillchain_b": "Scission",
        "skillchain_c": ""
    },
    124: {
        "en": "Camlann's Torment",
        "skill": 8,
        "element": 6,
        "skillchain_a": "Light",
        "skillchain_b": "Fragmentation",
        "skillchain_c": ""
    },
    125: {
        "en": "Stardiver",
        "skill": 8,
        "element": 3,
        "skillchain_a": "Gravitation",
        "skillchain_b": "Transfixion",
        "skillchain_c": ""
    },
    126: {
        "en": "Diarmuid",
        "skill": 8,
        "element": 6,
        "skillchain_a": "Transfixion",
        "skillchain_b": "Scission",
        "skillchain_c": "Gravitation"
    },
    128: {
        "en": "Blade: Rin",
        "skill": 9,
        "element": 6,
        "skillchain_a": "Transfixion",
        "skillchain_b": "",
        "skillchain_c": ""
    },
    129: {
        "en": "Blade: Retsu",
        "skill": 9,
        "element": 1,
        "skillchain_a": "Scission",
        "skillchain_b": "",
        "skillchain_c": ""
    },
    130: {
        "en": "Blade: Teki",
        "skill": 9,
        "element": 5,
        "skillchain_a": "Reverberation",
        "skillchain_b": "",
        "skillchain_c": ""
    },
    131: {
        "en": "Blade: To",
        "skill": 9,
        "element": 1,
        "skillchain_a": "Induration",
        "skillchain_b": "Detonation",
        "skillchain_c": ""
    },
    132: {
        "en": "Blade: Chi",
        "skill": 9,
        "element": 3,
        "skillchain_a": "Impaction",
        "skillchain_b": "Transfixion",
        "skillchain_c": ""
    },
    133: {
        "en": "Blade: Ei",
        "skill": 9,
        "element": 7,
        "skillchain_a": "Compression",
        "skillchain_b": "",
        "skillchain_c": ""
    },
    134: {
        "en": "Blade: Jin",
        "skill": 9,
        "element": 6,
        "skillchain_a": "Impaction",
        "skillchain_b": "Detonation",
        "skillchain_c": ""
    },
    135: {
        "en": "Blade: Ten",
        "skill": 9,
        "element": 6,
        "skillchain_a": "Gravitation",
        "skillchain_b": "",
        "skillchain_c": ""
    },
    136: {
        "en": "Blade: Ku",
        "skill": 9,
        "element": 6,
        "skillchain_a": "Gravitation",
        "skillchain_b": "Transfixion",
        "skillchain_c": ""
    },
    137: {
        "en": "Blade: Metsu",
        "skill": 9,
        "element": 6,
        "skillchain_a": "Darkness",
        "skillchain_b": "Fragmentation",
        "skillchain_c": ""
    },
    138: {
        "en": "Blade: Kamu",
        "skill": 9,
        "element": 3,
        "skillchain_a": "Fragmentation",
        "skillchain_b": "Compression",
        "skillchain_c": ""
    },
    139: {
        "en": "Blade: Yu",
        "skill": 9,
        "element": 5,
        "skillchain_a": "Reverberation",
        "skillchain_b": "Scission",
        "skillchain_c": ""
    },
    140: {
        "en": "Blade: Hi",
        "skill": 9,
        "element": 6,
        "skillchain_a": "Darkness",
        "skillchain_b": "Gravitation",
        "skillchain_c": ""
    },
    141: {
        "en": "Blade: Shun",
        "skill": 9,
        "element": 6,
        "skillchain_a": "Fusion",
        "skillchain_b": "Impaction",
        "skillchain_c": ""
    },
    142: {
        "en": "Zesho Meppo",
        "skill": 9,
        "element": 6,
        "skillchain_a": "Induration",
        "skillchain_b": "Reverberation",
        "skillchain_c": "Fusion"
    },
    144: {
        "en": "Tachi: Enpi",
        "skill": 10,
        "element": 6,
        "skillchain_a": "Transfixion",
        "skillchain_b": "Scission",
        "skillchain_c": ""
    },
    145: {
        "en": "Tachi: Hobaku",
        "skill": 10,
        "element": 4,
        "skillchain_a": "Induration",
        "skillchain_b": "",
        "skillchain_c": ""
    },
    146: {
        "en": "Tachi: Goten",
        "skill": 10,
        "element": 4,
        "skillchain_a": "Transfixion",
        "skillchain_b": "Impaction",
        "skillchain_c": ""
    },
    147: {
        "en": "Tachi: Kagero",
        "skill": 10,
        "element": 0,
        "skillchain_a": "Liquefaction",
        "skillchain_b": "",
        "skillchain_c": ""
    },
    148: {
        "en": "Tachi: Jinpu",
        "skill": 10,
        "element": 2,
        "skillchain_a": "Scission",
        "skillchain_b": "Detonation",
        "skillchain_c": ""
    },
    149: {
        "en": "Tachi: Koki",
        "skill": 10,
        "element": 6,
        "skillchain_a": "Reverberation",
        "skillchain_b": "Impaction",
        "skillchain_c": ""
    },
    150: {
        "en": "Tachi: Yukikaze",
        "skill": 10,
        "element": 7,
        "skillchain_a": "Induration",
        "skillchain_b": "Detonation",
        "skillchain_c": ""
    },
    151: {
        "en": "Tachi: Gekko",
        "skill": 10,
        "element": 2,
        "skillchain_a": "Distortion",
        "skillchain_b": "Reverberation",
        "skillchain_c": ""
    },
    152: {
        "en": "Tachi: Kasha",
        "skill": 10,
        "element": 1,
        "skillchain_a": "Fusion",
        "skillchain_b": "Compression",
        "skillchain_c": ""
    },
    153: {
        "en": "Tachi: Kaiten",
        "skill": 10,
        "element": 6,
        "skillchain_a": "Light",
        "skillchain_b": "Fragmentation",
        "skillchain_c": ""
    },
    154: {
        "en": "Tachi: Rana",
        "skill": 10,
        "element": 6,
        "skillchain_a": "Gravitation",
        "skillchain_b": "Induration",
        "skillchain_c": ""
    },
    155: {
        "en": "Tachi: Ageha",
        "skill": 10,
        "element": 2,
        "skillchain_a": "Compression",
        "skillchain_b": "Scission",
        "skillchain_c": ""
    },
    156: {
        "en": "Tachi: Fudo",
        "skill": 10,
        "element": 6,
        "skillchain_a": "Light",
        "skillchain_b": "Distortion",
        "skillchain_c": ""
    },
    157: {
        "en": "Tachi: Shoha",
        "skill": 10,
        "element": 6,
        "skillchain_a": "Fragmentation",
        "skillchain_b": "Compression",
        "skillchain_c": ""
    },
    158: {
        "en": "Tachi: Suikawari",
        "skill": 0,
        "element": 6,
        "skillchain_a": "Fusion",
        "skillchain_b": "",
        "skillchain_c": ""
    },
    159: {
        "en": "Tachi: Mumei",
        "skill": 10,
        "element": 6,
        "skillchain_a": "Detonation",
        "skillchain_b": "Compression",
        "skillchain_c": "Distortion"
    },
    160: {
        "en": "Shining Strike",
        "skill": 11,
        "element": 6,
        "skillchain_a": "Impaction",
        "skillchain_b": "",
        "skillchain_c": ""
    },
    161: {
        "en": "Seraph Strike",
        "skill": 11,
        "element": 6,
        "skillchain_a": "Impaction",
        "skillchain_b": "",
        "skillchain_c": ""
    },
    162: {
        "en": "Brainshaker",
        "skill": 11,
        "element": 4,
        "skillchain_a": "Reverberation",
        "skillchain_b": "",
        "skillchain_c": ""
    },
    165: {
        "en": "Skullbreaker",
        "skill": 11,
        "element": 0,
        "skillchain_a": "Induration",
        "skillchain_b": "Reverberation",
        "skillchain_c": ""
    },
    166: {
        "en": "True Strike",
        "skill": 11,
        "element": 6,
        "skillchain_a": "Detonation",
        "skillchain_b": "Impaction",
        "skillchain_c": ""
    },
    167: {
        "en": "Judgment",
        "skill": 11,
        "element": 6,
        "skillchain_a": "Impaction",
        "skillchain_b": "",
        "skillchain_c": ""
    },
    168: {
        "en": "Hexa Strike",
        "skill": 11,
        "element": 6,
        "skillchain_a": "Fusion",
        "skillchain_b": "",
        "skillchain_c": ""
    },
    169: {
        "en": "Black Halo",
        "skill": 11,
        "element": 6,
        "skillchain_a": "Fragmentation",
        "skillchain_b": "Compression",
        "skillchain_c": ""
    },
    170: {
        "en": "Randgrith",
        "skill": 11,
        "element": 6,
        "skillchain_a": "Light",
        "skillchain_b": "Fragmentation",
        "skillchain_c": ""
    },
    172: {
        "en": "Flash Nova",
        "skill": 11,
        "element": 6,
        "skillchain_a": "Induration",
        "skillchain_b": "Reverberation",
        "skillchain_c": ""
    },
    174: {
        "en": "Realmrazer",
        "skill": 11,
        "element": 6,
        "skillchain_a": "Fusion",
        "skillchain_b": "Impaction",
        "skillchain_c": ""
    },
    175: {
        "en": "Exudation",
        "skill": 11,
        "element": 6,
        "skillchain_a": "Darkness",
        "skillchain_b": "Fragmentation",
        "skillchain_c": ""
    },
    176: {
        "en": "Heavy Swing",
        "skill": 12,
        "element": 6,
        "skillchain_a": "Impaction",
        "skillchain_b": "",
        "skillchain_c": ""
    },
    177: {
        "en": "Rock Crusher",
        "skill": 12,
        "element": 3,
        "skillchain_a": "Impaction",
        "skillchain_b": "",
        "skillchain_c": ""
    },
    178: {
        "en": "Earth Crusher",
        "skill": 12,
        "element": 3,
        "skillchain_a": "Detonation",
        "skillchain_b": "Impaction",
        "skillchain_c": ""
    },
    179: {
        "en": "Starburst",
        "skill": 12,
        "element": 6,
        "skillchain_a": "Compression",
        "skillchain_b": "Reverberation",
        "skillchain_c": ""
    },
    180: {
        "en": "Sunburst",
        "skill": 12,
        "element": 6,
        "skillchain_a": "Compression",
        "skillchain_b": "Reverberation",
        "skillchain_c": ""
    },
    181: {
        "en": "Shell Crusher",
        "skill": 12,
        "element": 6,
        "skillchain_a": "Detonation",
        "skillchain_b": "",
        "skillchain_c": ""
    },
    182: {
        "en": "Full Swing",
        "skill": 12,
        "element": 6,
        "skillchain_a": "Liquefaction",
        "skillchain_b": "Impaction",
        "skillchain_c": ""
    },
    184: {
        "en": "Retribution",
        "skill": 12,
        "element": 6,
        "skillchain_a": "Gravitation",
        "skillchain_b": "Reverberation",
        "skillchain_c": ""
    },
    185: {
        "en": "Gate of Tartarus",
        "skill": 12,
        "element": 6,
        "skillchain_a": "Darkness",
        "skillchain_b": "Distortion",
        "skillchain_c": ""
    },
    186: {
        "en": "Vidohunir",
        "skill": 12,
        "element": 7,
        "skillchain_a": "Fragmentation",
        "skillchain_b": "Distortion",
        "skillchain_c": ""
    },
    187: {
        "en": "Garland of Bliss",
        "skill": 12,
        "element": 6,
        "skillchain_a": "Fusion",
        "skillchain_b": "Reverberation",
        "skillchain_c": ""
    },
    188: {
        "en": "Omniscience",
        "skill": 12,
        "element": 7,
        "skillchain_a": "Gravitation",
        "skillchain_b": "Transfixion",
        "skillchain_c": ""
    },
    189: {
        "en": "Cataclysm",
        "skill": 12,
        "element": 7,
        "skillchain_a": "Compression",
        "skillchain_b": "Reverberation",
        "skillchain_c": ""
    },
    191: {
        "en": "Shattersoul",
        "skill": 12,
        "element": 4,
        "skillchain_a": "Gravitation",
        "skillchain_b": "Induration",
        "skillchain_c": ""
    },
    192: {
        "en": "Flaming Arrow",
        "skill": 25,
        "element": 0,
        "skillchain_a": "Liquefaction",
        "skillchain_b": "Transfixion",
        "skillchain_c": ""
    },
    193: {
        "en": "Piercing Arrow",
        "skill": 25,
        "element": 2,
        "skillchain_a": "Reverberation",
        "skillchain_b": "Transfixion",
        "skillchain_c": ""
    },
    194: {
        "en": "Dulling Arrow",
        "skill": 25,
        "element": 0,
        "skillchain_a": "Liquefaction",
        "skillchain_b": "Transfixion",
        "skillchain_c": ""
    },
    196: {
        "en": "Sidewinder",
        "skill": 25,
        "element": 6,
        "skillchain_a": "Reverberation",
        "skillchain_b": "Transfixion",
        "skillchain_c": "Detonation"
    },
    197: {
        "en": "Blast Arrow",
        "skill": 25,
        "element": 6,
        "skillchain_a": "Induration",
        "skillchain_b": "Transfixion",
        "skillchain_c": ""
    },
    198: {
        "en": "Arching Arrow",
        "skill": 25,
        "element": 6,
        "skillchain_a": "Fusion",
        "skillchain_b": "",
        "skillchain_c": ""
    },
    199: {
        "en": "Empyreal Arrow",
        "skill": 25,
        "element": 6,
        "skillchain_a": "Fusion",
        "skillchain_b": "Transfixion",
        "skillchain_c": ""
    },
    200: {
        "en": "Namas Arrow",
        "skill": 25,
        "element": 6,
        "skillchain_a": "Light",
        "skillchain_b": "Distortion",
        "skillchain_c": ""
    },
    201: {
        "en": "Refulgent Arrow",
        "skill": 25,
        "element": 6,
        "skillchain_a": "Reverberation",
        "skillchain_b": "Transfixion",
        "skillchain_c": ""
    },
    202: {
        "en": "Jishnu's Radiance",
        "skill": 25,
        "element": 6,
        "skillchain_a": "Light",
        "skillchain_b": "Fusion",
        "skillchain_c": ""
    },
    203: {
        "en": "Apex Arrow",
        "skill": 25,
        "element": 6,
        "skillchain_a": "Fragmentation",
        "skillchain_b": "Transfixion",
        "skillchain_c": ""
    },
    204: {
        "en": "Sarv",
        "skill": 25,
        "element": 6,
        "skillchain_a": "Transfixion",
        "skillchain_b": "Scission",
        "skillchain_c": "Gravitation"
    },
    208: {
        "en": "Hot Shot",
        "skill": 26,
        "element": 0,
        "skillchain_a": "Reverberation",
        "skillchain_b": "Transfixion",
        "skillchain_c": ""
    },
    209: {
        "en": "Split Shot",
        "skill": 26,
        "element": 2,
        "skillchain_a": "Reverberation",
        "skillchain_b": "Transfixion",
        "skillchain_c": ""
    },
    210: {
        "en": "Sniper Shot",
        "skill": 26,
        "element": 0,
        "skillchain_a": "Liquefaction",
        "skillchain_b": "Transfixion",
        "skillchain_c": ""
    },
    212: {
        "en": "Slug Shot",
        "skill": 26,
        "element": 6,
        "skillchain_a": "Reverberation",
        "skillchain_b": "Transfixion",
        "skillchain_c": "Detonation"
    },
    213: {
        "en": "Blast Shot",
        "skill": 26,
        "element": 6,
        "skillchain_a": "Induration",
        "skillchain_b": "Transfixion",
        "skillchain_c": ""
    },
    214: {
        "en": "Heavy Shot",
        "skill": 26,
        "element": 6,
        "skillchain_a": "Fusion",
        "skillchain_b": "",
        "skillchain_c": ""
    },
    215: {
        "en": "Detonator",
        "skill": 26,
        "element": 6,
        "skillchain_a": "Fusion",
        "skillchain_b": "Transfixion",
        "skillchain_c": ""
    },
    216: {
        "en": "Coronach",
        "skill": 26,
        "element": 6,
        "skillchain_a": "Darkness",
        "skillchain_b": "Fragmentation",
        "skillchain_c": ""
    },
    217: {
        "en": "Trueflight",
        "skill": 26,
        "element": 6,
        "skillchain_a": "Fragmentation",
        "skillchain_b": "Scission",
        "skillchain_c": ""
    },
    218: {
        "en": "Leaden Salute",
        "skill": 26,
        "element": 7,
        "skillchain_a": "Gravitation",
        "skillchain_b": "Transfixion",
        "skillchain_c": ""
    },
    219: {
        "en": "Numbing Shot",
        "skill": 26,
        "element": 1,
        "skillchain_a": "Induration",
        "skillchain_b": "Impaction",
        "skillchain_c": "Detonation"
    },
    220: {
        "en": "Wildfire",
        "skill": 26,
        "element": 0,
        "skillchain_a": "Darkness",
        "skillchain_b": "Gravitation",
        "skillchain_c": ""
    },
    221: {
        "en": "Last Stand",
        "skill": 26,
        "element": 6,
        "skillchain_a": "Fusion",
        "skillchain_b": "Reverberation",
        "skillchain_c": ""
    },
    222: {
        "en": "Terminus",
        "skill": 26,
        "element": 6,
        "skillchain_a": "Induration",
        "skillchain_b": "Reverberation",
        "skillchain_c": "Fusion"
    },
    224: {
        "en": "Exenterator",
        "skill": 2,
        "element": 3,
        "skillchain_a": "Fragmentation",
        "skillchain_b": "Scission",
        "skillchain_c": ""
    },
    225: {
        "en": "Chant du Cygne",
        "skill": 3,
        "element": 6,
        "skillchain_a": "Light",
        "skillchain_b": "Distortion",
        "skillchain_c": ""
    },
    226: {
        "en": "Requiescat",
        "skill": 3,
        "element": 6,
        "skillchain_a": "Gravitation",
        "skillchain_b": "Scission",
        "skillchain_c": ""
    },
    227: {
        "en": "Knights of Rotund",
        "skill": 3,
        "element": 6,
        "skillchain_a": "Light",
        "skillchain_b": "",
        "skillchain_c": ""
    },
    228: {
        "en": "Final Paradise",
        "skill": 1,
        "element": 6,
        "skillchain_a": "Light",
        "skillchain_b": "",
        "skillchain_c": ""
    },
    229: {
        "en": "Fast Blade II",
        "skill": 3,
        "element": 6,
        "skillchain_a": "Fusion",
        "skillchain_b": "",
        "skillchain_c": ""
    },
    230: {
        "en": "Dragon Blow",
        "skill": 1,
        "element": 6,
        "skillchain_a": "Distortion",
        "skillchain_b": "",
        "skillchain_c": ""
    },
    231: {
        "en": "Maru Kala",
        "skill": 1,
        "element": 6,
        "skillchain_a": "Detonation",
        "skillchain_b": "Compression",
        "skillchain_c": "Distortion"
    },
    232: {
        "en": "Ruthless Stroke",
        "skill": 2,
        "element": 6,
        "skillchain_a": "Liquefaction",
        "skillchain_b": "Impaction",
        "skillchain_c": "Fragmentation"
    },
    233: {
        "en": "Imperator",
        "skill": 3,
        "element": 6,
        "skillchain_a": "Detonation",
        "skillchain_b": "Compression",
        "skillchain_c": "Distortion"
    },
    234: {
        "en": "Dagda",
        "skill": 11,
        "element": 6,
        "skillchain_a": "Transfixion",
        "skillchain_b": "Scission",
        "skillchain_c": "Gravitation"
    },
    235: {
        "en": "Oshala",
        "skill": 12,
        "element": 6,
        "skillchain_a": "Induration",
        "skillchain_b": "Reverberation",
        "skillchain_c": "Fusion"
    },
    238: {
        "en": "Uriel Blade",
        "skill": 3,
        "element": 6,
        "skillchain_a": "Light",
        "skillchain_b": "Fragmentation",
        "skillchain_c": ""
    },
    239: {
        "en": "Glory Slash",
        "skill": 3,
        "element": 4,
        "skillchain_a": "Light",
        "skillchain_b": "Fusion",
        "skillchain_c": ""
    }
}

const TRANSFIXION = 'Transfixion'
const COMPRESSION = 'Compression'
const LIQUEFACTION = 'Liquefaction'
const SCISSION = 'Scission'
const REVERBERATION = 'Reverberation'
const DETONATION = 'Detonation'
const INDURATION = 'Induration'
const IMPACTION = 'Impaction'
const GRAVITATION = 'Gravitation'
const DISTORTION = 'Distortion'
const FUSION = 'Fusion'
const FRAGMENTATION = 'Fragmentation'
const LIGHT = 'Light'
const DARKNESS = 'Darkness'

const SKILLCHAINS = {
    Transfixion: {
        Compression: COMPRESSION, Scission: DISTORTION, Reverberation: REVERBERATION
    },
    Compression: {
        Transfixion: TRANSFIXION, Detonation: DETONATION
    },
    Liquefaction: {
        Scission: SCISSION, Impaction: FUSION
    },
    Scission: {
        Liquefaction: LIQUEFACTION, Reverberation: REVERBERATION, Detonation: DETONATION
    },
    Reverberation: {
        Induration: INDURATION, Impaction: IMPACTION
    },
    Detonation: {
        Compression: GRAVITATION, Scission: SCISSION
    },
    Induration: {
        Compression: COMPRESSION, Reverberation: FRAGMENTATION, Impaction: IMPACTION
    },
    Impaction: {
        Liquefaction: LIQUEFACTION, Detonation: DETONATION
    },
    Gravitation: {
        Distortion: DARKNESS, Fragmentation: FRAGMENTATION
    },
    Distortion: {
        Gravitation: DARKNESS, Fusion: FUSION
    },
    Fusion: {
        Gravitation: GRAVITATION, Fragmentation: LIGHT
    },
    Fragmentation: {
        Distortion: DISTORTION, Fusion: LIGHT
    },
    Light: {
        Light: "Light [lvl.4]"
    },
    Darkness: {
        Darkness: "Darkness [lvl.4]"
    }
}

const SKILLCHAIN_RANKS = {
    // Level 1
    'Transfixion': 1,
    'Compression': 1,
    'Liquefaction': 1,
    'Scission': 1,
    'Reverberation': 1,
    'Detonation': 1,
    'Induration': 1,
    'Impaction': 1,
    // Level 2
    'Gravitation': 2,
    'Distortion': 2,
    'Fusion': 2,
    'Fragmentation': 2,
    // Level 3
    'Light': 3,
    'Darkness': 3,
    // Level 4
    'Light [lvl.4]': 4,
    'Darkness [lvl.4]': 4
};

document.addEventListener('DOMContentLoaded', () => {
    const dropdownSets = document.querySelectorAll('.dropdown-set');

    dropdownSets.forEach(set => {
        const weaponSelect = set.querySelector('.weapon-select');
        const weaponskillSelect = set.querySelector('.weaponskill-select');

        // Populate weapon select
        for (const weaponId in WEAPONS) {
            const option = document.createElement('option');
            option.value = weaponId;
            option.textContent = WEAPONS[weaponId];
            weaponSelect.appendChild(option);
        }

        // Add event listener to weapon select
        weaponSelect.addEventListener('change', () => {
            const selectedWeaponId = parseInt(weaponSelect.value);

            // Clear existing weaponskill options
            weaponskillSelect.innerHTML = '<option value="">Select Weapon Skill</option>';

            if (selectedWeaponId) {
                // Add "All" option
                const allOption = document.createElement('option');
                allOption.value = 'all';
                allOption.textContent = 'All';
                weaponskillSelect.appendChild(allOption);

                // Filter and populate weaponskills
                for (const wsId in WEAPONSKILLS) {
                    if (WEAPONSKILLS[wsId].skill === selectedWeaponId) {
                        const option = document.createElement('option');
                        option.value = wsId;
                        option.textContent = WEAPONSKILLS[wsId].en;
                        weaponskillSelect.appendChild(option);
                    }
                }
            }
        });
    });

    const applyButton = document.getElementById('apply-button');
    applyButton.addEventListener('click', calculateSkillchains);
});

let allFoundPaths = []; // Store all results for filtering

document.addEventListener('DOMContentLoaded', () => {
    const searchBox = document.getElementById('search-box');
    searchBox.addEventListener('input', () => {
        displayResults(allFoundPaths);
    });
});

function getSkillchain(prop1, prop2) {
    if (SKILLCHAINS[prop1] && SKILLCHAINS[prop1][prop2]) {
        return SKILLCHAINS[prop1][prop2];
    }
    return null;
}

function getPermutations(array) {
    if (array.length <= 1) return [array];
    const perms = [];
    for (let i = 0; i < array.length; i++) {
        const current = array[i];
        const remaining = [...array.slice(0, i), ...array.slice(i + 1)];
        const remainingPerms = getPermutations(remaining);
        for (let j = 0; j < remainingPerms.length; j++) {
            const perm = [current, ...remainingPerms[j]];
            perms.push(perm);
        }
    }
    return perms;
}


function findSkillchains(path) {
    if (path.length < 2) return [];

    let currentSc = null;
    const results = [];

    // Find initial skillchain between first two skills
    const ws1Props = [path[0].skillchain_a, path[0].skillchain_b, path[0].skillchain_c].filter(Boolean);
    const ws2Props = [path[1].skillchain_a, path[1].skillchain_b, path[1].skillchain_c].filter(Boolean);

    for (const p1 of ws1Props) {
        for (const p2 of ws2Props) {
            currentSc = getSkillchain(p1, p2);
            if (currentSc) break;
        }
        if (currentSc) break;
    }

    if (!currentSc) return []; // No SC between first two
    results.push(currentSc);

    // Continue for the rest of the path
    for (let i = 2; i < path.length; i++) {
        // A skillchain can only be closed by the *first* property of the next WS.
        const closingProp = path[i].skillchain_a;
        let nextSc = null;

        if (closingProp) {
            nextSc = getSkillchain(currentSc, closingProp);
        }

        if (nextSc) {
            currentSc = nextSc;
            results.push(currentSc);
        } else {
            return []; // Chain broken
        }
    }

    return results;
}

function displayResults(paths) {
    const resultsContainer = document.getElementById('results-container');
    const searchBox = document.getElementById('search-box');
    const searchTerm = searchBox.value.toLowerCase();
    resultsContainer.innerHTML = '';

    const filteredPaths = searchTerm
        ? paths.filter(p => p.pathString.toLowerCase().includes(searchTerm) || p.scString.toLowerCase().includes(searchTerm))
        : paths;

    const pathsToDisplay = filteredPaths.slice(0, 20);

    if (pathsToDisplay.length === 0) {
        resultsContainer.innerHTML = '<p>No matching skillchains found.</p>';
        return;
    }

    pathsToDisplay.forEach(p => {
        const resultDiv = document.createElement('div');
        resultDiv.className = 'bg-gray-800 p-3 rounded mb-2';
        resultDiv.innerHTML = `<p class="font-semibold">${p.pathString}</p><p class="text-blue-400">Result: ${p.scString}</p>`;
        resultsContainer.appendChild(resultDiv);
    });

    if (filteredPaths.length > 20) {
        resultsContainer.innerHTML += `<p class="text-gray-400 mt-2">Showing 20 of ${filteredPaths.length} results. Refine your search to see more.</p>`;
    }
}

async function calculateSkillchains() {
    const resultsArea = document.getElementById('results-area');
    const resultsContainer = document.getElementById('results-container');

    const dropdownSets = document.querySelectorAll('.dropdown-set');
    const skillGroups = [];
    dropdownSets.forEach(set => {
        const weaponSelect = set.querySelector('.weapon-select');
        const weaponskillSelect = set.querySelector('.weaponskill-select');
        const selectedWsId = weaponskillSelect.value;
        const selectedWeaponId = parseInt(weaponSelect.value);

        if (!selectedWeaponId || !selectedWsId) return;

        const group = [];
        if (selectedWsId === 'all') {
            for (const wsId in WEAPONSKILLS) {
                if (WEAPONSKILLS[wsId].skill === selectedWeaponId) {
                    group.push({ ...WEAPONSKILLS[wsId], id: wsId });
                }
            }
        } else {
            group.push({ ...WEAPONSKILLS[selectedWsId], id: selectedWsId });
        }
        if (group.length > 0) {
            skillGroups.push(group);
        }
    });

    if (skillGroups.length < 2) {
        resultsArea.classList.remove('hidden');
        resultsContainer.innerHTML = '<p>Please select at least two weapon skills to calculate a skillchain.</p>';
        document.getElementById('search-box').classList.add('hidden'); // Hide search if not enough skills
        return;
    }

    allFoundPaths = [];

    const skillGroupPermutations = getPermutations(skillGroups);

    skillGroupPermutations.forEach(permutedGroup => {
        function findPaths(index, currentPath) {
            if (index === permutedGroup.length) {
                const scPath = findSkillchains(currentPath);
                if (scPath.length > 0) {
                    const finalSc = scPath[scPath.length - 1];
                    allFoundPaths.push({
                        pathString: currentPath.map(ws => ws.en).join(' -> '),
                        scString: scPath.join(' -> '),
                        rank: SKILLCHAIN_RANKS[finalSc] || 0
                    });
                }
                return;
            }
            permutedGroup[index].forEach(skill => findPaths(index + 1, [...currentPath, skill]));
        }

        findPaths(0, []);
    });

    // Sort paths by rank in descending order
    allFoundPaths.sort((a, b) => b.rank - a.rank);


    resultsArea.classList.remove('hidden');
    document.getElementById('search-box').classList.remove('hidden');
    displayResults(allFoundPaths);
}