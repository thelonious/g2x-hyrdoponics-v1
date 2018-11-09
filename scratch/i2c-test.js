#!/usr/bin/env node

const i2c = require('i2c-bus');
const { send_command } = require('../scripts/lib/i2c_commands');


function sleep(millis) {
    return new Promise(resolve => setTimeout(resolve, millis));
}


// main

const bus = i2c.openSync(1);

async function main() {
    const commands = [
        "LIGHT_ON",
        "LIGHT_OFF",
        "MOTOR_ON",
        "MOTOR_OFF",
        "READ_LIGHT",
        "READ_MOTOR",
        "READ_PH",
        "READ_TEMPERATURE",
        "READ_EC",
        "READ_ALL"
    ];

    for (var cmd of commands) {
        send_command(bus, cmd);
        await sleep(1000);
    }
}

main();
