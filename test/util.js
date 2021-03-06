var assert = require('assert');

function throwsWithMessage(f, message) {
  assert.throws(f, function (err) {
    assert.strictEqual(err instanceof Error, true);
    assert.strictEqual(err.message, message);
    return true;
  });
}

function production(f) {
  return function () {
    process.env.NODE_ENV = 'production';
    f();
    process.env.NODE_ENV = 'development';
  };
}

module.exports = {
  throwsWithMessage: throwsWithMessage,
  production: production
};
