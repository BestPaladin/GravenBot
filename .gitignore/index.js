const Discord = require('discord.js');

const client = new Discord.Client();

/*const express = require("express"); 
const wakeUpDyno = require("wokeDyno.js");
const PORT = 3000;
const DYNO_URL = "https://gravenbot.herokuapp.com";
const app = express();
app.listen(PORT, () => {
    wakeUpDyno(DYNO_URL);
})*/

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
      case "!rules":
        message.delete();
        const ch = message.channel;
        ch.send("**I. Qu'est-ce que c'est ?**\nIl s'agit d'un tournoi de programmation informatique, multi langages.\nIl auras lieu le **Vendredi 1 mai 2020** à partir de **14H00** et finiras vers **19h00 maximum** pour les derniers participants !");
        ch.send("``` ```");
        ch.send("**II. Le déroulement.**\nLe tournoi se déroule en 5 rounds :\n\n:crossed_swords: Round 1. FFA (environ 5-10 min :clock1:)\nUn exercice de programmation vous seras livré.\nVous affrontrez un autre participant.\nLe 1er qui donneras la bonne réponse dans le canal #réponse gagneras la manche.\nA la fin de la manche **il resteras 64 participants**.\n\nRound 2. Challenge (environ 10-20 min :clock1:)\nUn probléme algorithme vous seras livré.\nVous affrontez un autre participant.\nLe 1er qui donneras la bonne réponse dans le canal #réponse gagneras la manche.\nA la fin de la manche **il resteras 32 participants**.\n\n:question: Round 3. Chaos (indeterminé :clock1:)\nMystère...\nA la fin de la manche **il resteras 16 participants**.\n\nRound 4. Inspiration (environ 45 min :clock1:)\nUn pack de ressources vous serez fournit.\nVous affrontez un autre participant.\nVous aurez 45 minutes pour réaliser le projet de votre choix avec ces ressources.\nLes spectateurs du live voteront pour le projet de leurs choix parmis les 2 participants.\nA la fin de la manche **il resteras 8 participants**.\n\nRound 5. Final (environ 45 min - 1H :clock1:)\nLes 8 derniers participants formeront des équipes de 2.\nUn pack de ressources leurs seras fournit.\nLe @Jury du tournoi etabliras un classement des meilleurs projets réalisés.")
        ch.send("``` ```");
        ch.send("**III. Comment participer ?**\n- Vous devez avoir minimum 13 ans :boy:\n- Vous devez être disponible le **Samedi 18 avril 2020 à partir de 14H00**\n- Vous devrez avoir un micro et un casque :microphone2:\n- Vous devrez être inscrit dans le canal #inscription-tournoi avant le Vendredi 17 avril 23H30");
        ch.send("``` ```");
        ch.send("**IV. Quels sont les règles du tournoi ?**\n- Interdit de copier coller du code d'internet (le @Jury pourras verifier votre code)\n- Interdit de s'envoyer du code par message discord\n- Les spectateurs et les membres du @Jury n'auront pas le droit d'aider les participants");
        ch.send("``` ```");
        ch.send("Bonne chance à tous et à demain pour le live !\n**(PS: Attention le nombre maximum de participants est de 128)**");
        break;
      case "!commandes":
        message.delete();
        var emb = new Discord.RichEmbed()
          .setColor('0x000000')
          .setTitle("Commandes du Graven's Bot")
          .setThumbnail('https://image.freepik.com/icones-gratuites/cle-molette_318-538.jpg')
          .addField("!ping","Vérifie la connection du bot !")
          .addField("!rules", "Affiches les règles du tournoi !")
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
