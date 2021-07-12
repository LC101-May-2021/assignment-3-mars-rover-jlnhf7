const Message = require('../message.js');
const Command = require('../command.js');
 
//these are also almost the exact same as the command spec - same items used just for different objects and variables other than test six testing for arrays
describe("Message class", function () {
//test four
  it("throws error if a name is NOT passed into the constructor as the first parameter", function () {
    expect(function () { new Message(); }).toThrow(new Error('Message name required.'));
  });
//test five
  it("constructor sets name", function () {
    let message = new Message('new message name');
    expect(message.name).toEqual('new message name');
  });
//test six
  it("contains a commands array passed into the constructor as 2nd argument", function () {
    let commands = [new Command('STATUS_CHECK'), new Command('MOVE', 13)];
    let message = new Message('showing two messages', commands);
    expect(message.commands).toEqual(commands);
  });

});

