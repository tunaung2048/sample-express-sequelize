exports.getHome = (req, res) => {
  res.render('home', {
    title: 'Home Title',
    body: 'Home'
  });
};