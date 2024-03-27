module.exports = {
  config: {
    name: 'imgvt',
    version: '1.0.69',
    author: 'Siam the frog>🐸',
    countDown: 0,
    role: 0,
    category: 'media',
    shortDescription: 'img to text', 
    longDescription: 'Any lang image convert to same lang text',
    guide: {
      en: '{pn} ',
    },
  },
  onStart: async function ({ api, args, message, event }) {
    try {
      const link = encodeURIComponent(event.messageReply.attachments[0].url);
      const lado = await axios.get(`https://sandipapi.onrender.com/imgur?link=${link}`);
      const puti = lado.data.uploaded?.image;

      if (!puti) {
        throw new Error('img de machikney');
      }

      const apiUrl = `https://milanbhandari.onrender.com/ocr?imageUrl=${puti}`;

      axios.get(apiUrl)
        .then(response => {
          const text = response.data.responses[0].textAnnotations[0].description;
          message.reply({ body: `\n\n_______________\nLado: ${text}\n_______________` });
        })
        .catch(error => {
          message.reply(error.message);
        });
    } catch (error) {
      message.reply(error.message);
    }
  }
};
