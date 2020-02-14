(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
class OpenBot{
    constructor(commandList){
        this.commandList = commandList;
        this.commandListStrings = Object.keys(commandList).map(command => {
            return {
                name: command,
                description: this.commandList[command].description
            }
        })
    }

    runCommand(inputText){
        let userCommand;
        let userInput;

        try {
            userCommand = inputText.match(/[^\/]\w+/g)[0];
            userInput = inputText.match(/[^\/\w+].+/g)[0].trim()

            return this.commandList[userCommand].run(userInput)
        } catch (error) {
            return "Incorrect Input! Check again!"
        }
    }
}

module.exports = OpenBot
},{}],2:[function(require,module,exports){
let OpenBotCommandList = {
    "roll": {
        run: (input) => {
            return Math.floor(Math.random() * Number(input)) + 1
        },

        description: "Roll a dice!"
    },

    "uwuify": {
        run: (input) => {
            return input.toLowerCase().split("").map(l => {
                if(l == "l" || l == "r"){
                    return "w"
                }

                return l;
            }).join("")
        },

        description: "Uwuify Texts!"

    },

    "crankify": {
        run: (input) => {
            return input.toLowerCase().split("").map((l, i) => {
                if(i % 2 != 0){
                    return l.toUpperCase()
                }

                return l;
            }).join("")
        },

        description: "Spongebob Style Text!"
    },
}

module.exports = OpenBotCommandList
},{}],3:[function(require,module,exports){
let OpenBotCommandList = require("./OpenBot/cmdlist")
let OpenBot = require("./OpenBot/OpenBot")
let inputText = document.getElementById("inputText")
let outputText = document.getElementById("outputText")
let submitButton = document.getElementById("submitButton")
let commands = document.getElementById("commands")
const _OpenBot_ = new OpenBot(OpenBotCommandList)

submitButton.addEventListener("click", _ => {
    outputText.innerText = _OpenBot_.runCommand(inputText.value)
})

_OpenBot_.commandListStrings.forEach(cmd => {
    let { name, description } = cmd;
    commands.innerHTML += `<button class="command" id="${name}" disabled>${name}</button>`
})
},{"./OpenBot/OpenBot":1,"./OpenBot/cmdlist":2}]},{},[3]);
