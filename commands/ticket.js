const TicketChannels = '838489626524123158'
const role_staff = "825679323692269608";

module.exports = {
    name: "ticket",
    aliases: [],
    permissions: [],
    description: "open a ticket!",
    async execute(message) {
      let haveChannel = false;
      message.guild.channels.cache.forEach(channel => { //Проверить создал ли уже тикет
        try{
          let userTag = message.author.tag.toLowerCase().split('#').join('')
          if (channel.name == userTag) {
            haveChannel = true;
          }
        } catch (err) {
          console.log("Error");
          throw err;
        }
      });
      if (haveChannel) {
        message
          .reply('You have already opened a ticket')
          .then((msg) => {
            setTimeout(() => msg.delete(), 7000);
            setTimeout(() => message.delete(), 3000);
          })
          .catch((err) => {
            throw err;
          });
        return;
      }
      const channel = await message.guild.channels.create(`${message.author.tag}`);
      
      

      channel.setParent(TicketChannels);
  
      channel.updateOverwrite(message.guild.id, {
        SEND_MESSAGE: false,
        VIEW_CHANNEL: false,
        ADD_REACTIONS: false,
      });
      channel.updateOverwrite(message.author, {
        SEND_MESSAGE: true,
        VIEW_CHANNEL: true,
        ADD_REACTIONS: false,
      });
      channel.updateOverwrite(role_staff, {
        SEND_MESSAGE: true,
        VIEW_CHANNEL: true,
        ADD_REACTIONS: true,
      });
  
      const reactionMessage = await channel.send(`${message.author} Thank you for contacting support!`);
  
      try {
        await reactionMessage.react("🔒");
        await reactionMessage.react("⛔");
      } catch (err) {
        channel.send("Error sending emojis!");
        throw err;
      }
  
      const collector = reactionMessage.createReactionCollector(
        (reaction, user) => message.guild.members.cache.find((member) => member.id === user.id).hasPermission("ADD_REACTIONS"),
        { dispose: true }
      );
  
      collector.on("collect", (reaction, user) => {
        switch (reaction.emoji.name) {
          case "🔒":
            channel.updateOverwrite(message.author, { SEND_MESSAGES: false });
            break;
          case "⛔":
            channel.send("Deleting this channel in 5 seconds!");
            setTimeout(() => channel.delete(), 5000);
            break;
        }
      });
  
      message.channel
        .send(`We will be right with you! ${channel}`)
        .then((msg) => {
          setTimeout(() => msg.delete(), 7000);
          setTimeout(() => message.delete(), 3000);
        })
        .catch((err) => {
          throw err;
        });
    },
  };