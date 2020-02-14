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