/*
    name: Example Module
    description: Example script with custom library
    author: Marcell Purham
    tags: polypad,script,library
*/

const { camelCase } = require('@polypad/myModule');

function main(input) {
    input.text = camelCase(input.text);
}
