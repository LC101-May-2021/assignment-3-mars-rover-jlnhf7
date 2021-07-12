const Command = require('../command.js');

//At the top of the file this is you importing your Command Class
//Use describe, passing in the name of what we want to test along with an empty anonymous function. describe is a Jasmine function that is used to group related tests. 
//Related tests are placed within the anonymous function that it receives.
//The it function is part of the Jasmine framework as well. Calling it creates a specification, or spec, which is a description of expected behavior. 
//The first argument to it is a string describing the desired behavior. This string serves to document the test and is also used in reporting test results. 
//These strings will usually begin with "should", followed by a desired action.
//The second argument to it is yet another anonymous function. This function contains the test code itself, which takes the form of an expectation. 
//An expectation is a declaration of desired behavior in code. 
//How you test if an error is thrown when it should be. We use the toThrow matcher in our corresponding spec.

describe("Command class", function() {
  it("throws error if command type is NOT passed into constructor as the first parameter", function() {
    expect( function() { new Command();}).toThrow(new Error('Command type required.'));
  });
  it("constructor sets command type", function() {
    let command = new Command('MODE_CHANGE');
    expect(command.commandType).toEqual('MODE_CHANGE');
  });
  it("constructor sets a value passed in as the 2nd argument", function() {
    let command = new Command('MOVE', 20);
    expect(command.value).toEqual(20);
  });
});
//test one
//The function you’re creating is going through the Command class and making sure the if statement you have in Command Class will throw and error like it’s expected.
//test two
//this tests that command types are being processed correctly in the command class by creating a command variable that equals a new command object – in this case without the optional value.
//test three
//this test that the value is being processed correctly in the command class 
//as the 2nd argument by setting a new command object with a command type and value and then using the dot method to ensure the value equals what was entered. 
