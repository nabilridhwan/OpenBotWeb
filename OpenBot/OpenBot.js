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