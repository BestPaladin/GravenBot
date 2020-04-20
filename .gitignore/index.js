const Discord = require('discord.js');

const client = new Discord.Client();

const express = require("express"); 
const wakeUpDyno = require("wokeDyno.js");
const PORT = 3000;
const DYNO_URL = "https://gravenbot.herokuapp.com";
const app = express();
app.listen(PORT, () => {
    wakeUpDyno(DYNO_URL);
})

client.login(process.env.TOKEN);

client.on("ready", () => {
  console.log("Graven's Bot est allumé !");
  client.user.setActivity("développer !");
});

client.on("message", message => {

  if(false) {
    message.channel.send("Vous n'avez pas la permission d'effectuer cette action !");
  } else {
    switch(message.content) {
      case "!ping":
        message.channel.send("Pong !");
        console.log("J'ai confirmé à " + message.author.username + " que je suis bien en ligne !");
        break;
      case "!commandes":
        message.delete();
        var emb = new Discord.RichEmbed()
          .setColor('0x000000')
          .setTitle("Commandes du Graven's Bot")
          .setThumbnail('https://image.freepik.com/icones-gratuites/cle-molette_318-538.jpg')
          .addField("!ping","Vérifie la connection du bot !")
          .addField("!commandes", "Affiche ce menu !")
          .addField("!inscriptions", "Affiche le lien d'inscription au tournoi !")
          .addField("!inscriptions stop", "Affiche un message pour annoncer la fermeture des inscriptions !")
          .addField("!round 0","Mets le jeu du bot à 'développer' !")
          .addField("!round 1","Mets le jeu du bot à 'Round 1' !")
          .addField("!round 2","Mets le jeu du bot à 'Round 2' !")
          .addField("!round 3","Mets le jeu du bot à 'Round 3' !")
          .addField("!round 4","Mets le jeu du bot à 'Round 4' !")
          .addField("!round 5","Mets le jeu du bot à 'Round 5 - Finale' !")
        message.channel.send(emb);
        break;
      case "!inscriptions":
        message.delete();
        message.channel.bulkDelete(1);
        var emb = new Discord.RichEmbed()
          .setColor('0x069118')
          .setTitle("Insciptions au tournoi :")
          .setThumbnail('https://cdn.discordapp.com/icons/701586656029048843/958545e0abfe914077754716bcd0fd90.png')
          .setDescription("https://challonge.com/fr/tournaments/signup/SxLxUkCZOy")
        message.channel.send(emb);
        break;
      case "!inscriptions stop":
        message.delete();
        message.channel.bulkDelete(1);
        var emb = new Discord.RichEmbed()
          .setColor('0x069118')
          .setTitle("Insciptions au tournoi terminées")
          .setThumbnail('https://cdn.discordapp.com/icons/701586656029048843/958545e0abfe914077754716bcd0fd90.png')
          .setDescription("Bonne chance à tous les inscrits !")
        message.channel.send(emb);
        break;
      case "!round 0":
        client.user.setActivity("développer !");
        break;
      case "!round 1":
        client.user.setActivity("Round 1");
        break;
      case "!round 2":
        client.user.setActivity("Round 2");
        break;
      case "!round 3":
        client.user.setActivity("Round 3");
        break;
      case "!round 4":
        client.user.setActivity("Round 4");
        break;
      case "!round 5":
        client.user.setActivity("Round 5 - Finale");
        break;
      default:
        break;
    }

    if(message.content.startsWith("!round ")) {
      message.delete();
    };
  }

})

client.on("guildMemberAdd", member => {

  console.log(member.user.username + " a rejoins le serveur !");
  let bvn = client.channels.get('701587256762433616');

  const ROLE = '701588875046289559';

  member.addRole(ROLE);

  var emb = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setTitle("Bienvenue "+member.user.username)
      .setThumbnail(member.user.avatarURL)
      .setDescription("Le tournoi se déroulera le 1 mai 2020 !\nInscris toi vite dans #inscription-tournoi avant le 30 avril !")
    bvn.send(emb);

});
