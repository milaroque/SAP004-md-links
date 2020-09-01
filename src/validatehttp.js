const axios = require('axios');

const checkLinks = (results) => {
  const validate = results.flat().map((el) => axios.get(el.href)
    .then((response) => ({
      href: el.href,
      text: el.text,
      status: response.status,
      statusText: response.statusText,
      file: el.file
    }))
    .catch(() => ({
      href: el.href, status: 404, statusText: 'Fail', text: el.text, file: el.file
    })));
  return Promise.all(validate);
};

module.exports = checkLinks;
