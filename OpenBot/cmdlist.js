let OpenBotCommandList = {
    "roll": {
        run: (input) => {
            // TODO: Reject input that is NaN
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