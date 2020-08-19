const axios = require('axios');

const checkLinks = (results) => {
  const validate = results.map((el) => axios.get(el.href)
    .then((response) => ({
      href: el.href,
      text: el.text,
      status: response.status,
      statusText: response.statusText,
    }))
    .catch(() => ({
      href: el.href, status: 404, statusText: 'Fail', text: el.text,
    })));
  return validate;
};

module.exports = checkLinks;
