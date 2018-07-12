const expect = require('expect');
var {generateMessage, generateLocationMessage} = require("./message")

describe ("generateMessage", () =>{
  it("shoudl generate correct message object", () =>{
    var from = "Jen";
    var text = "Some message";
    var message = generateMessage(from, text);

    expect(typeof message.createAt).toBe("number");
    //compureba que tenga las propiuedades
    expect(message).toMatchObject({from,text})

  })
})
describe ("generateLocationMessage", () =>{
  it("shoudl generate correct location object", () =>{
    var from = "Jen";
    var latitude = 15;
    var longitude = 19;
    var url = "https://www.google.com/maps?q=15,19"
    var message = generateLocationMessage(from, latitude, longitude);

    expect(typeof message.createAt).toBe("number");
    //compureba que tenga las propiuedades
    expect(message).toMatchObject({from,url})

  })
})
