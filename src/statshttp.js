const statsLink = (array) => {
  const allLinks = array.flat().map((el) => el.href);
  const uniqueLinks = new Set(allLinks);
  const brokenLinks = array.filter((el) => el.status > 400 && el.status < 500);
  return (`Total: ${(allLinks.length)} \nUnique: ${(uniqueLinks.size)} \nBroken: ${(brokenLinks.length)}`
  );
};

module.exports = statsLink;
