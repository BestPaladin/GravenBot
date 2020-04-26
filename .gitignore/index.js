const Discord = require('discord.js');
const client = new Discord.Client();
client.login(process.env.TOKEN);

client.on("ready", () => {
  console.log("Graven's Bot est allumé !");
  client.user.setActivity("développer !");
});

client.on("message", message => {

  if(!(message.member.permissions.has('ADMINISTRATOR'))) {
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
        ch.send("**II. Le déroulement.**\nLe tournoi se déroule en 5 rounds :\n\n:crossed_swords: Round 1. FFA (environ 5-10 min :clock1:)\nUn exercice de programmation vous seras livré.\nVous affrontrez un autre participant.\nLe 1er qui donneras la bonne réponse dans le canal #réponse gagneras la manche.\nA la fin de la manche **il resteras 64 participants**.\n\nRound 2. Challenge (environ 10-20 min :clock1:)\nUn probléme algorithme vous seras livré.\nVous affrontez un autre participant.\nLe 1er qui donneras la bonne réponse dans le canal #réponse gagneras la manche.\nA la fin de la manche **il resteras 32 participants**.\n\n:question: Round 3. Chaos (indeterminé :clock1:)\nMystère...\nA la fin de la manche **il resteras 16 participants**.\n\nRound 4. Inspiration (environ 45 min :clock1:)\nUn pack de ressources vous serez fournit.\nVous affrontez un autre participant.\nVous aurez 45 minutes pour réaliser le projet de votre choix avec ces ressources.\nLes spectateurs du live voteront pour le projet de leurs choix parmis les 2 participants.\nA la fin de la manche **il resteras 8 participants**.\n\nRound 5. Final (environ 45 min - 1H :clock1:)\nLes 8 derniers participants formeront des équipes de 2.\nUn pack de ressources leurs seras fournit.\nLe Jury du tournoi etabliras un classement des meilleurs projets réalisés.")
        ch.send("``` ```");
        ch.send("**III. Comment participer ?**\n- Vous devez avoir minimum 13 ans :boy:\n- Vous devez être disponible le **Samedi 18 avril 2020 à partir de 14H00**\n- Vous devrez avoir un micro et un casque :microphone2:\n- Vous devrez être inscrit dans le canal #inscription-tournoi avant le Vendredi 17 avril 23H30");
        ch.send("``` ```");
        ch.send("**IV. Quels sont les règles du tournoi ?**\n- Interdit de copier coller du code d'internet (le Jury pourras verifier votre code)\n- Interdit de s'envoyer du code par message discord\n- Les spectateurs et les membres du Jury n'auront pas le droit d'aider les participants");
        ch.send("``` ```");
        ch.send("Bonne chance à tous et à demain pour le live !\n**(PS: Attention le nombre maximum de participants est de 128)**");
        console.log(message.author.username + " à éxecuté la commande !rules !");
        break;
      case "!commandes":
        message.delete();
        var emb = new Discord.RichEmbed()
          .setColor('0x000000')
          .setTitle("Commandes du Graven's Bot")
          .setThumbnail('https://raw.githubusercontent.com/BestPaladin/GravenBot/master/.gitignore/cl%C3%A9.png')
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
          .addField("!rep 1", "Affiche l'aide pour le salon <#701978293154349156> !")
          .addField("!rep 2", "Affiche la description du salon <#701991595410587709> !")
          .addField("!rep 3", "Affiche la description du salon <#701991763627474964> !")
        message.channel.send(emb);
        console.log(message.author.username + " à éxecuté la commande !commandes !");
        break;
      case "!rep 1":
        message.delete();
        var emb = new Discord.RichEmbed()
          .setColor('0xffffff')
          .setTitle("Pour donner votre réponse :")
          .setThumbnail('https://cdn.discordapp.com/icons/701586656029048843/958545e0abfe914077754716bcd0fd90.png')
          .setDescription("Allez sur le site https://pastebin.com/")
          .addField("\u200b", "Collez votre code, choisissez votre language puis copiez le lien vers votre pastebin !")
          .addField("\u200b", "Envoyez votre code précédé de la commande `!reponse` !")
          .addField("Exemple : `!reponse https://pastebin.com/jLBC0JX3`", "\u200b")
          .addField("\u200b", "Tout message autre que la commande !reponse dans ce channel sera supprimé et sauvegardé !")
        message.channel.send(emb);
        console.log(message.author.username + " à éxecuté la commande !rep 1 !");
        break;
      case "!rep 2":
        message.delete();
        var emb = new Discord.RichEmbed()
          .setColor('0xffffff')
          .setTitle("Salon où sont envoyés les réponses des participants")
          .setThumbnail('https://cdn.discordapp.com/icons/701586656029048843/958545e0abfe914077754716bcd0fd90.png')
          .setDescription("Seul le staff a accès à ce salon !")
        message.channel.send(emb);
        console.log(message.author.username + " à éxecuté la commande !rep 2 !");
        break;
      case "!rep 3":
        message.delete();
        var emb = new Discord.RichEmbed()
          .setColor('0xffffff')
          .setTitle("Salon où sont envoyés les messages de #réponse qui ne sont pas des réponses")
          .setThumbnail('https://cdn.discordapp.com/icons/701586656029048843/958545e0abfe914077754716bcd0fd90.png')
          .setDescription("Seul le staff a accès à ce salon !")
        message.channel.send(emb);
        console.log(message.author.username + " à éxecuté la commande !rep 3 !");
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
        console.log(message.author.username + " à éxecuté la commande !inscriptions !");
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
        console.log(message.author.username + " à éxecuté la commande !inscriptions stop !");
        break;
      case "!round 0":
        client.user.setActivity("développer !");
        message.delete();
        console.log(message.author.username + " à éxecuté la commande !round 0 !");
        break;
      case "!round 1":
        client.user.setActivity("Round 1");
        message.delete();
        console.log(message.author.username + " à éxecuté la commande !round 1 !");
        break;
      case "!round 2":
        client.user.setActivity("Round 2");
        message.delete();
        console.log(message.author.username + " à éxecuté la commande !round 2 !");
        break;
      case "!round 3":
        client.user.setActivity("Round 3");
        message.delete();
        console.log(message.author.username + " à éxecuté la commande !round 3 !");
        break;
      case "!round 4":
        client.user.setActivity("Round 4");
        message.delete();
        console.log(message.author.username + " à éxecuté la commande !round 4 !");
        break;
      case "!round 5":
        client.user.setActivity("Round 5 - Finale");
        message.delete();
        console.log(message.author.username + " à éxecuté la commande !round 5 !");
        break;
      default:
        break;
    }

    if(message.channel.id === '701978293154349156') {
      if(message.author.id === '701589286331613214') { 
      } else if(message.content.startsWith("!reponse ")){
        message.delete();
        console.log(message.author.username + " à donné une réponse avec la commande !reponse link !");
        client.channels.get('701991595410587709').send("Réponse de `" + message.author.username + "#" + message.author.discriminator + "` : " + message.content.substring(9));
      } else {
        message.delete();
        client.channels.get('701991763627474964').send(message.author.username + "#" + message.author.discriminator +" à dit `" + message.content + "` !");
      }
    }
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
      .setDescription("Le tournoi se déroulera le 1 mai 2020 !\nInscris toi vite dans <#701587304959049768> avant le 30 avril !")
    bvn.send(emb);

});
