// QUnit.test('multiplying function test', function(assert) {
//    assert.strictEqual(multiply(4,3), 12, '4 * 3 is 12');
// });

function rollMany(times, pins) {
  for(var i=0; i < times; i++) {
    BowlingGame.roll(pins);
  }
}

function rollSpare() {
  BowlingGame.roll(5);
  BowlingGame.roll(5);
}

function rollStrike() {
  BowlingGame.roll(10);
}

QUnit.test('gutter game', function(assert) {
  BowlingGame.newGame();
  rollMany(20, 0);
  assert.strictEqual(BowlingGame.score(), 0, 'rolling all 0 equals 0');
});

QUnit.test('all ones', function(assert) {
  BowlingGame.newGame();
  rollMany(20, 1);
  assert.strictEqual(BowlingGame.score(), 20, 'rolling all 1 equals 20');
});

QUnit.test('one spare', function(assert) {
  BowlingGame.newGame();
  rollSpare();
  BowlingGame.roll(3);
  rollMany(17, 0);
  assert.strictEqual(BowlingGame.score(), 16, 'rolling a spare followed by a 3 equals 16');
});

QUnit.test('one strike', function(assert) {
  BowlingGame.newGame();
  rollStrike();
  BowlingGame.roll(3);
  BowlingGame.roll(4);
  rollMany(16, 0);
  assert.strictEqual(BowlingGame.score(), 24, 'rolling a strike, then a 3 and then a 4 gives you a score of 24');
});

QUnit.test('perfect game', function(assert) {
  BowlingGame.newGame();
  rollMany(12, 10);
  assert.strictEqual(BowlingGame.score(), 300, 'a perfect game has a score of 300');
});
