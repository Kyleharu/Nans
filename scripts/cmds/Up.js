module.exports = {

  config: {

    name: 'up',

    version: '1.0.0',

    author: 'Siam the frog>🐸',

    countDown: 0,

    role: 0,

    category: 'display see the current uptime',

    shortDescription: 'display the current Bot uptime', 

    longDescription: 'Check the current uptime',

    guide: {

      en: '{pn} ',

    },

  },

  

onStart: async function ({ api, event, message }) {

    const senderID = event.senderID;

    

    const loadingMessage = await message.reply({

      body: "Please wait🐸",

    });

    

     const frog = await global.utils.getStreamFromURL( "https://drive.google.com/uc?export=download&id=1i7WHd9KePv61NLESwqMV3zP6Vuq8Gehb");

     const os = require("os");

	     const uptime = process.uptime();
         const seconds = Math.floor(uptime % 60);
 	    const minutes = Math.floor((uptime / 60) % 60);
  	   const hours = Math.floor((uptime / (60 * 60)) % 24);
  	   const days = Math.floor(uptime / (60 * 60 * 24));
  	   const siam = `${days} days ${hours} hours ${minutes} minutes ${seconds} second`;
         
         const totalMemory = `Total Memory: ${Math.round(os.totalmem() / (1024 * 1024 * 1024))} GB`;
     

     const Body = `Up: ${siam}\nRam: ${Math.round(os.totalmem() / (1024 * 1024 * 1024))} GB`


     message.reply({ body: Body, attachment: frog }, event.threadID);

     setTimeout(() => {

       api.unsendMessage(loadingMessage.messageID);

      }, 2000);

   },

};
