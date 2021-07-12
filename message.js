class Message {
    constructor(name, commands) {
        this.name = name;
        if (!name) {
          throw Error('Message name required.');
        }
        this.commands = commands;
      }
 }
 //A Message object has a name and contains several Command objects. Message is responsible for bundling the commands from mission control and delivering them to the rover.
 //almost same exact logic as what was applied to the Command Class
module.exports = Message;