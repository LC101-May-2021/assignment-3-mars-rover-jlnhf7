const Rover = require('../rover.js');
const Message = require('../message.js');
const Command = require('../command.js');


describe("Rover class", function() {
//test seven
  it('constructor sets position and default values for mode and generatorWatts', function() {
  let rover = new Rover(98382);
    expect(rover.mode).toEqual('NORMAL');  
    expect(rover.position).toEqual(98382);
    expect(rover.generatorWatts).toEqual(110);
});
//test eight
it('response returned by receiveMessage contains name of message', function() {
  let commands = new Command ('MOVE', 13131313);
  let message = new Message('Name of message test', commands);
  let rover = new Rover(message.commands.value);
  let response = rover.receiveMessage(message);
    expect (response.message).toEqual('Name of message test');
});
//test nine
it('response returned by receiveMessage includes two results if two commands are sent in the message', function() {
  let commands = [new Command ('MODE_CHANGE', 'LOW_POWER'), new Command ('STATUS_CHECK')];
  let message = new Message('Test message with two commands', commands);
  let rover = new Rover(98382);
  let response = rover.receiveMessage(message);
    expect (response.results.length).toEqual(2);
});
//test ten
it('respond correctly to status check command', function () {
  let commands =  [new Command ('STATUS_CHECK')];
  let message = new Message('Check the status', commands);
  let rover = new Rover(87382098);
  let response = rover.receiveMessage(message);
  let roverStatusCheck = {mode: (rover.mode), generatorWatts: (rover.generatorWatts), position: (rover.position)}; 
    expect(response.results[0].roverStatus).toEqual(roverStatusCheck);
});
//test eleven
it('responds correctly to mode change command', function() {
  let commands = [new Command ('MODE_CHANGE', 'LOW_POWER')];
  let message = new Message('Changing normal mode to low power', commands);
  let rover = new Rover(message.commands.value);
  let response = rover.receiveMessage(message);
    expect(rover.mode).toEqual('LOW_POWER');
});
//test twelve
it('responds with false completed value when attempting to move in LOW_POWER mode', function() {
  let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('MOVE', 1300)];
  let message = new Message('Caution: Low Power Mode', commands);
  let rover = new Rover(1300);
  let response = rover.receiveMessage(message);
    expect(response.results[1]).toEqual({complete: false});
});
//test thirteen
it('responds with position for move command', function () {
  let commands = [new Command ('MOVE', 309)];
  let message = new Message('Move the rover', commands);
  let rover = new Rover(message.commands.value);
  let response = rover.receiveMessage(message);
    expect(rover.position).toEqual(309);
});

});