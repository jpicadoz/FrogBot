const Discord = require('discord.js');

/*The prefix that will be used to recognize commands for the bot. Example, sending <cute in a Discord server 
should trigger the cute commmand*/
const prefix = '<';

//Declaring the intentions of the bot. Works as a way to set the permissions a bot gets.
const { Client, GatewayIntentBits } = require('discord.js');
const client = new Discord.Client({ intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
] });

//It will send a message in CMD to let you know the bot has been turned on.
client.once('ready', () => {
    console.log('FrogBot has been deployed!!!');
    client.user.setActivity('Frogbot started', {type: "WATCHING"});
});

//Defining the commands for the bot. In this simple example is just an if that will send a message when triggered.
client.on('messageCreate', (message)=> {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    const messageArray = message.content.split(" ");
    const argument = messageArray[0];
    if (command === 'cute'){
        message.channel.send('you are super cute :3');
    }
    const urlGif = 'https://media.tenor.com/_7Fjti7kTzsAAAAd/raccoon-cute.gif';
    if (command === 'gif'){
        message.channel.send(urlGif);
    }
})

//The ultra secret token for authentication that we obtain from the Discord developer portal.
client.login("ultraSecretToken");