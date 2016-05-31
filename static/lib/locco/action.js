// Generated by CoffeeScript 1.9.2
(function() {
  var Action, _, _module;

  _ = require('../../general/chocodash');

  Action = _.prototype({
    constructor: function() {
      return this.actions = [];
    },
    "do": function(what, value, type) {
      this.actions.push({
        so: 'do',
        what: what,
        value: value
      });
      return this;
    },
    move: function(what, where, how) {
      this.actions.push({
        so: 'move',
        what: what,
        where: where,
        how: how
      });
      return this;
    },
    "eval": function(what, value) {
      this.actions.push({
        so: 'eval',
        what: what,
        value: value
      });
      return this;
    },
    go: function(what, where) {
      if (where == null) {
        where = Action.go.Where.Inside;
      }
      this.actions.push({
        so: 'go',
        what: what,
        where: where
      });
      return this;
    }
  });

  Action.prototype["do"].What = {
    New: 0,
    Set: 1,
    Delete: 2
  };

  Action.prototype.move.How = {
    Replace: 0,
    Append: 1,
    Prepend: 2,
    InsertBefore: 3,
    InsertAfter: 4
  };

  Action.prototype.go.Where = {
    Front: 0,
    Inside: 1,
    Through: 2
  };

  _module = typeof window !== "undefined" && window !== null ? window : module;

  if (_module.exports != null) {
    _module.exports = Action;
  } else {
    if (window.Locco == null) {
      window.Locco = {};
    }
    window.Locco.Action = Action;
  }

}).call(this);