const _ = require('./underbar')
require('./style.css');

const shout = (...sentences) => console.log(...sentences);
const shoutToHTML = (...sentences) => {
    const app = document.querySelector('#app');
    app.append(...sentences.map(sentence =>{
        const shoutHere = document.createElement('div');
        shoutHere.className = 'shout';
        shoutHere.textContent = sentence;
        return shoutHere;
    }))
    return;
};

const loremIpsum = "Aliqua esse voluptate pariatur incididunt sunt eiusmod."

const shoutOnce = _.once(shout);
const shoutToHTMLOnce = _.once(shoutToHTML);

shoutOnce(loremIpsum);
shoutOnce(loremIpsum);
shoutOnce(loremIpsum);
shoutOnce(loremIpsum);

shoutToHTMLOnce(loremIpsum);
shoutToHTMLOnce(loremIpsum);
shoutToHTMLOnce(loremIpsum);
shoutToHTMLOnce(loremIpsum);