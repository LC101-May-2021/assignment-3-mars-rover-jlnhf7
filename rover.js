
class Rover {

//Jen Notes
//What happens if we create a new rover without passing in all of the required arguments? To avoid issues with missing arguments, we can set a default value for a parameter.
//message is a Message Object - returns two propreties - message - the name of the original message object - why we are caling the message class and putting it in a new variable
//results is an array - corresponds to one Command in message.commands - hence the for loop - setting it as an empty aray with the brackets
//for loop that cycles through any commands that are given - if and else statements to ensure the command type given 
//the Command class already has the if statement related to if there isn't a command given
//the push method is used with the response object and the results array, reminder: The arr.push method is used to push one or more values into the array. 
//This method changes the length of the array by the number of elements added to the array.
//response is an object with both a message and results key so by returning response you 
//are returning the original message in the Message Class and the results are an array 

    constructor(position, mode = 'NORMAL', generatorWatts = 110) {
        this.position = position;
        this.mode = mode;
        this.generatorWatts = generatorWatts;
    }
    receiveMessage(message) {
        let response = {
        message: message.name,
        results: []
    }

    
        for (let i = 0; i < message.commands.length; i++) {
        if (message.commands[i].commandType === 'MOVE') {
        if (this.mode === 'LOW_POWER') {
        response.results.push({complete: false})
        }
        else {response.results.push({complete: true});
        this.position = message.commands[i].value;
        };
        }  
        else if (message.commands[i].commandType === 'STATUS_CHECK') {
        response.results.push({complete: true, roverStatus: {mode: this.mode, generatorWatts: this.generatorWatts, position: this.position}});
        } 
        else if (message.commands[i].commandType === 'MODE_CHANGE') {
         response.results.push({complete: true});
        this.mode = message.commands[i].value;
        } 
        else {response.results.push({complete: false});
     }
        };
     return response;
   };
 
 
 }; 

 module.exports = Rover;