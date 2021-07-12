class Command {
   constructor(commandType, value) {
     this.commandType = commandType;
     if (!commandType) {
       throw Error("Command type required.");
     }
     this.value = value;
   }
 
 }
   //Notes from assignment
  //Command: A type of object containing a commandType property. commandType is one of the given strings in the table below. 
  //Some commandTypes are coupled with a value property, but not all. 
  //Every Command object is a single instruction to be delivered to the rover.
  //This class builds an object with two properties commandtType & value.
  //commandType is a string that represents the type of command, one of the following: 'MODE_CHANGE', 'MOVE', 'STATUS_CHECK'.
  //Value is a value related to the type of command.

  //Jen Notes
  //this file holds a module containing a class for Command with two parameters - commandType & value
  //The throw statement lets you create custom errors
  //we are telling it to throw and error if the commandtype entered doesn't match one of the commandtypes given - MOVE, STATUS_CHECK, 
  //It is supposed to have an error if the command type is not one that is given.
 module.exports = Command;