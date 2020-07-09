const statsLink = (array) => {
  const allLinks = array.map(el => el.href)
  const uniqueLinks = new Set(allLinks);
  const brokenLinks = array.filter(el => el.status > 400 && el.status < 500);
  console.log(allLinks, uniqueLinks, brokenLinks)
  return {
    Total: allLinks.length,
    Unique: uniqueLinks.size,
    Broken: brokenLinks.length
  };
}

module.exports = statsLink; 
