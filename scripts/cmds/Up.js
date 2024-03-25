const moment = require('moment-timezone');
moment.tz.setDefault('Asia/Dhaka');
const os = require('os');

module.exports = {
  config: {
    name: 'uptime',
    version: '1.0.0',
    author: 'Siam the frog>🐸',
    countDown: 0,
    role: 0,
    category: 'uptime',
    shortDescription: 'up ck bot', 
    longDescription: 'Bot uptime cheak',
    guide: {
      en: '{pn} ',
    },
  },
  
onStart: async function ({ message, event, usersData, threadsData }) {
     const uptime = process.uptime();
     const startTime = Date.now();
     const hours = Math.floor(uptime / 3600);
     const munites = Math.floor((uptime % 3600) / 60);
     const second = Math.floor(uptime % 60);
     
     const uptime = `${hours} hours ${munites} munites ${second} second`;
     
     const url = await global.utils.getStreamFromURL("https://tinyurl.com/2c6fp9ar");
   
     const now = moment();
     const date = now.format('DD-MMMM-Y/hh.mm.ss A');
     
     const round = `${Math.round(os.totalmem() / (1024 * 1024 * 1024))} GB`;
     const lado = await usersData.getAll();
     const data = await threadsData.getAll(); 
     const cpus = `${os.type()} ${os.release()}`;
     const model = `${os.cpus()[0].model} (${os.cpus().length} cores)`
     
     const endTime = Date.now();
     const ping = endTime - startTime;
     
     const frog = `Bot ping: ${ping}\n━━━━━━━━━━━\nUptime: ${uptime}\n━━━━━━━━━━━\nTotal User: ${lado.length}\n━━━━━━━━━━━\nTotal Group: ${data.length}\n━━━━━━━━━━━\nMemory: ${round}\nOS: ${cpus}\n━━━━━━━━━━━\nCPU: ${model}\n━━━━━━━━━━━\n\nDate: ${date}\n━━━━━━━━━━`

     message.reply("Wait boss🐸", event.messageID);
     message.reply({ body: frog, attachment: url }, event.threadID);
  },
 };
