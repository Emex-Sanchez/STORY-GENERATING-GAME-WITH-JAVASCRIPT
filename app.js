const storyNodes = {
        start: {
                text: "You find yourself in a dark forest. Do you go left or right?",
                choices: {
                        left: "leftPath",
                        right: "rightPath"
                }
        },
        leftPath: {
                text: "You walk down the left path and find a mysterious cave. Do you enter?",
                choices: {
                        yes: "cave",
                        no: "backToStart"
                }
        },
        rightPath: {
                text: "You walk down the right path and encounter a river. Do you cross it?",
                choices: {
                        yes: "crossRiver",
                        no: "backToStart",

                }
        },
        cave: { text: "You entered the cave and found treasure! The End." },
        crossRiver: { text: "You crossed the river and found a village. The End." },
        backToStart: { text: "You decide to go back to the start." },

};

function updateStory(nodeKey) {
        const node = storyNodes[nodeKey];
        document.getElementById('story').innerText = node.text;
        const choicesDiv = document.getElementById('choices');
        choicesDiv.innerHTML = '';
        if (node.choices) {
                for (let choice in node.choices) {
                        const button = document.createElement('button');
                        button.innerText = choice;
                        button.onclick = () => updateStory(node.choices[choice]);
                        choicesDiv.appendChild(button);
                }
        }
}

updateStory('start');