function Component() {}

Component.prototype.view = __dirname;

Component.prototype.init = function () {
  // do nothing
};

Component.prototype.create = function (model, dom) {
  var self = this;

  dom.on('click', function (e) {
    self.close(e);
  });

  dom.on('keydown', function (e) {
    if (e.keyCode === 27) self.close(e);
  });
};

Component.prototype.open = function (e) {
  e.preventDefault();
  e.stopPropagation();
  var open = this.model.set('open', true);
  if (!open) this.emit('open');
};

Component.prototype.close = function (e) {
  e.preventDefault();
  e.stopPropagation();
  this.model.del('open');
  this.emit('close');
};

module.exports = Component;
