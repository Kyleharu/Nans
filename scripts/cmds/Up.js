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
    
    
	const frogs = [
      "Hey hello🐸",
      "hello boss",
      "hey bokacoda how are you 🐸",
      "Hey xudanir fua kaiss ho 🐸",
      "Do you know your place baka",
      "yo wai mo",
      "Bitch",
      "Hello sauar beta welcome to back bc",
      "how are you nigga? ",
      "how can i fuck your wife boss"
    ];
    const randomfrogs = frogs[Math.floor(Math.random() * frogs.length)];
    

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
         

				const osInfo = {
						platform: os.platform(),
						architecture: os.arch()
				};
                
                const currentDate = new Date();
      const options = { year: "numeric", month: "numeric", day: "numeric" };
      const date = currentDate.toLocaleDateString("en-US", options);
      const time = currentDate.toLocaleTimeString("en-US", {
        timeZone: "Asia/Dhaka",
        hour12: true,
      });
                
     const Body = `Up: ${siam}\nRam: ${Math.round(os.totalmem() / (1024 * 1024 * 1024))} GB\nOperating System: ${osInfo.platform}\ncpu: ${osInfo.architecture}\nCores: ${os.cpus().length}\nDate: ${date}\nTime ${time}\n${randomfrogs}`


     message.reply({ body: Body, attachment: frog }, event.threadID);

     setTimeout(() => {

       api.unsendMessage(loadingMessage.messageID);

      }, 2000);

   },

};
