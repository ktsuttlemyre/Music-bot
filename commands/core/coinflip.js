module.exports = {
    name: 'coinflip',
    aliases: [],
    category: 'core',
    utilisation: '{prefix}coinflip',

    execute(client, message) {
        var max=1
        var min=0
        var coin = (Math.floor(Math.random() * (max - min + 1) + min))?'heads':'tails';
        message.channel.send(`${client.emotes.success} - Coin : **${coin}ms** !`);
    },
};
