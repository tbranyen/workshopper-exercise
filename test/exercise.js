var test = require('tape')
  , Exercise = require('../exercise')

test('exercise is a constructor function', function (t) {
  t.plan(1)

  t.equal(typeof Exercise, 'function')
})

test('exercise does not require new keyword invocation', function (t) {
  t.plan(2)

  var exercise1 = Exercise()
  var exercise2 = new Exercise()

  t.ok(exercise1 instanceof Exercise)
  t.ok(exercise2 instanceof Exercise)
})

test('provides chainable methods', function (t) {
  t.plan(6)

  var exercise = new Exercise()

  t.equal(typeof exercise.filecheck, 'function')
  t.equal(typeof exercise.execute, 'function')
  t.equal(typeof exercise.comparestdout, 'function')

  t.equal(exercise.filecheck(), exercise)
  t.equal(exercise.execute(), exercise)
  t.equal(exercise.comparestdout(), exercise)
})
