module.exports = function (app) {
  require('./services/user.service.server')(app);
  require('./services/book.service.server')(app);
  require('./services/comment.service.server')(app);
};
