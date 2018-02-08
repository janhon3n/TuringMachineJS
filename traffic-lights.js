const TuringMachine = require('./TuringMachine').TuringMachine
const Tape = require('./TuringMachine').Tape

tapeLetters = ['s','.','1','.','.','.','.','.','.','2']
tape = new Tape(tapeLetters, 0)

transitions = []
transitions[['red', 's']] = ['red+yellow', 's', 'L']
transitions[['red+yellow', 's']] = ['green', 's', 'L']
transitions[['green', 's']] = ['yellow', 's', 'L']
transitions[['yellow', 's']] = ['red', 's', 'L']

transitions[['red', '.']] = ['red', 'x', 'L']
transitions[['red+yellow', '.']] = ['red+yellow', 'x', 'L']
transitions[['green', '.']] = ['green', 'x', 'L']
transitions[['yellow', '.']] = ['yellow', 'x', 'L']

transitions[['red', 'x']] = ['red', '.', 'R']
transitions[['red+yellow', 'x']] = ['red+yellow', '.', 'R']
transitions[['green', 'x']] = ['green', '.', 'R']
transitions[['yellow', 'x']] = ['yellow', '.', 'R']

transitions[['red', '1']] = ['red', 'X', 'L']
transitions[['red+yellow', '1']] = ['red+yellow', '1', 'R']
transitions[['green', '1']] = ['green', 'X', 'L']
transitions[['yellow', '1']] = ['yellow', '1', 'R']

transitions[['red', 'X']] = ['red', '1', 'R']
transitions[['green', 'X']] = ['green', '1', 'R']

transitions[['red', '2']] = ['red', '2', 'R']
transitions[['green', '2']] = ['green', '2', 'R']

turingMachine = new TuringMachine(tape, 'red', [], transitions)
turingMachine.draw()

var turingInterval = setInterval(() => {
    if (turingMachine.goalStateReached()) {
        clearInterval(turingInterval)
    } else {
        turingMachine.runIteration()
        turingMachine.draw()
    }
}, 700)