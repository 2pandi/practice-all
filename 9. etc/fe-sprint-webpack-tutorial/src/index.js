const _ = require('./underbar')

const shout = (...sentences) => console.log(...sentences);

const loremIpsum = "Aliqua esse voluptate pariatur incididunt sunt eiusmod."

const shoutOnce = _.once(shout);

shoutOnce(loremIpsum);
shoutOnce(loremIpsum);
shoutOnce(loremIpsum);
shoutOnce(loremIpsum);