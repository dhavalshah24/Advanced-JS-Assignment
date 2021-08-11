const battles = require("./battles.json");
// console.log(battles);

let result =
{
    'most_active': {
        'attacker_king': "",
        'defender_king': "",
        'region': "",
        'name': ""
    },
    'attacker_outcome': {
        'win': 0, // total win
        'loss': 0 // total loss
    },
    'battle_type': [], // unique battle types
    'defender_size': {
        'average': "",
        'min': Number.MAX_VALUE,
        'max': Number.MIN_VALUE
    }
}

let attackerKings = {};
let defenderKings = {};
let regions = {};
let names = {};
let sum = 0;

function getCount(x) {
    if (x) {
        x += 1;
    } else {
        x = 1;
    }
    return x;
}

battles.forEach((battle) => {

    attackerKings[battle["attacker_king"]] = getCount(attackerKings[battle["attacker_king"]]);
    defenderKings[battle["defender_king"]] = getCount(defenderKings[battle["defender_king"]]);
    regions[battle["region"]] = getCount(regions[battle["region"]]);
    names[battle["name"]] = getCount(names[battle["name"]]);

    if (battle.attacker_outcome === "win") {
        result.attacker_outcome.win += 1;
    }
    if (battle.attacker_outcome === "loss") {
        result.attacker_outcome.loss += 1;
    }

    if (!result.battle_type.includes(battle.battle_type)) {
        result.battle_type.push(battle.battle_type);
    }

    if (battle.defender_size) {

        sum += battle.defender_size;

        if (result.defender_size.min > battle.defender_size) {
            result.defender_size.min = battle.defender_size
        }

        if (result.defender_size.max < battle.defender_size) {
            result.defender_size.max = battle.defender_size
        }
    }

});

function getMaxValue(obj) {
    let max = 0;
    let maxValue = "";

    for (let value in obj) {
        if (obj[value] > max) {
            max = obj[value];
            maxValue = value;
        }
    }
    if (max === 1) {
        return "All the names occur only once";
    }
    return maxValue;
}

result.defender_size.average = sum / battles.length;

result.most_active.attacker_king = getMaxValue(attackerKings)
result.most_active.defender_king = getMaxValue(defenderKings)
result.most_active.region = getMaxValue(regions)
result.most_active.name = getMaxValue(names)


console.log(result);