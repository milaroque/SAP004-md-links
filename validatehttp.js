const axios = require('axios');

const checkLinks = (results) => {
    const socorro = results.map((el) => {
      return axios.get(el.href)
        .then((response) => ({
          href: el.href,
          text: el.text,
          status: response.status,
          statusText: response.statusText,
        }))
        .catch(() => {
          return ({ href: el.href, status: 404, statusText: 'Fail' });
        })
    })
    return socorro
  }

module.exports = checkLinks; 
