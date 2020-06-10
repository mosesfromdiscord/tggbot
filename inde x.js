const Discord + reqiure('discord.js)');
const bot = new Discord.Client();

const token = 'NzE5ODcxNzExMTI1NzAwNjI4.XuEtSA.0tne-T8hpP-NN5_jHlWd9NWichc';

bot.on('ready', () =>{
    console.log('Bot online');
})

bot.login(token);