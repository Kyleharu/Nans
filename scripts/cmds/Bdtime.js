const moment = require('moment-timezone');

moment.tz.setDefault('Asia/Dhaka');

const os = require('os');


module.exports = {

  config: {

    name: 'bdtime',

    version: '1.0.0',

    author: 'Siam the frog>🐸',

    countDown: 0,

    role: 0,

    category: 'date-system',

    shortDescription: 'display the current date and time Bangladesh', 

    longDescription: 'Check the current time and date of Bangladesh',

    guide: {

      en: '{pn} ',

    },

  },

  

onStart: async function ({ api, event, message }) {

    const senderID = event.senderID;

    

    const loadingMessage = await message.reply({

      body: "Please wait🐸",

    });

    

     const frog = await global.utils.getStreamFromURL( "https://tinyurl.com/2ylys3a8");

     

     const now = moment();

     const d = now.format('DD-MMMM');

     const time = now.format('hh.mm.ss A');

     const formattedDate = now.format('Y');

	 const BangladeshDate = moment.tz("Asia/Dhaka").format("dddd, DD MMMM ");
     

     const Body = `Bangladesh Time: ${time}\nYear ${formattedDate}\nDate: ${BangladeshDate}`


     message.reply({ body: Body, attachment: frog }, event.threadID);

     setTimeout(() => {

       api.unsendMessage(loadingMessage.messageID);

      }, 2000);

   },

};
