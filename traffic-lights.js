const TuringMachine = require('./TuringMachine').TuringMachine
const Tape = require('./TuringMachine').Tape
const Transition = require('./TuringMachine').Transition

tapeLetters = ['s','.','1','.','.','.','.','.','.','2']
tape = new Tape(tapeLetters, 0)


transitions = []
transitions.push(
    new Transition('red', 's', 'red+yellow', 's', 'L'),
    new Transition('red+yellow', 's', 'green', 's', 'L'),
    new Transition('green', 's', 'yellow', 's', 'L'),
    new Transition('yellow', 's', 'red', 's', 'L'),

    new Transition('red', '.', 'red', 'x', 'L'),
    new Transition('red+yellow', '.', 'red+yellow', 'x', 'L'),
    new Transition('green', '.', 'green', 'x', 'L'),
    new Transition('yellow', '.', 'yellow', 'x', 'L'),

    new Transition('red', 'x', 'red', '.', 'R'),
    new Transition('red+yellow', 'x', 'red+yellow', '.', 'R'),
    new Transition('green', 'x', 'green', '.', 'R'),
    new Transition('yellow', 'x', 'yellow', '.', 'R'),

    new Transition('red', '1', 'red', 'X', 'L'),
    new Transition('red+yellow', '1', 'red+yellow', '1', 'R'),
    new Transition('green', '1', 'green', 'X', 'L'),
    new Transition('yellow', '1', 'yellow', '1', 'R'),

    new Transition('red', 'X', 'red', '1', 'R'),
    new Transition('green', 'X', 'green', '1', 'R'),

    new Transition('red', '2', 'red', '2', 'R'),
    new Transition('green', '2', 'green', '2', 'R')
)

turingMachine = new TuringMachine(tape, 'red', [], transitions)

var turingInterval = setInterval(() => {
    if (turingMachine.goalStateReached()) {
        clearInterval(turingInterval)
    } else {
        turingMachine.runIteration()
    }
}, 700)