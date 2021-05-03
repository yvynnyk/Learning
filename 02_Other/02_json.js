"use strict";

let user = {
    name: "Василий Иванович",
    age: 35
};

function formatToJSON (user) {
    const json = JSON.stringify(user);
    return json;
}

function formatFromJSON () {
    const json = JSON.parse(formatToJSON(user));
}

formatToJSON(user);
formatFromJSON();
