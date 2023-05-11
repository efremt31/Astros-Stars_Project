var quotes = [
    `You're probably going to feel a bit overwhelmed by one or more of the choices you need to make today, but that's okay. Just don't panic. - Aquarius`, 
    `This is a time to relish your personal freedom. Even if you're in a relationship, you need to foster your independence every once in a while. - Aries`,
    `Try to stay close to home right now. There could be something threatening your bliss there. - Cancer`,
    `It's a good idea for you to have some conversation starters ready today, because there could be a lot of awkward silences in store for you. - Capricorn`,
    `Even if you're not looking for a new romance, one could come along for you today. Of course, this love you feel might not be for a person. - Gemini`,
    `That foggy-headedness you've been feeling is about to clear up. The sun is coming out today in the form of a very interesting new person who makes you smile every time they say hello. - Leo`,
    `Your work life and private life have been out of balance for a while now, and it's been going okay. - Libra `, 
    `No one else sees things quite the way you see them right now. You have an eye for what is true and what is a bunch of baloney! - Pisces`,
    `Your sense of fairness will be out in full force today, and you'll want to speak up when you see some injustice. - Safittarius `,
    `Why settle on just one plan for the entire day? There's no reason to commit yourself to doing one thing in the morning, when so many other things will pop up as cool possibilities as the day moves forward! - Scorpio `,
    `Someone's flattering attention has increased to a point where you might be starting to feel suffocated. - Taurus`,
    `This isn't a good time to throw your money around indiscriminately. Avoid making any impulse purchases. - Virgo `,


] 
function newQuote () {
var randomNumber = Math.floor(Math.random() * (quotes.length));
document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
};

