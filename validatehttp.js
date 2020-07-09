const axios = require('axios');

const checkLinks = (link) => {
  return axios.get(link)
    .then((response) => ({
      link,
      status: response.status,
      statusText: response.statusText,
    }))
    .catch(() => {
     return { link, status: 404, statusText: 'Fail' };
    })
}



module.exports = checkLinks; 
