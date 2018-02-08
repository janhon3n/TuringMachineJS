const TuringMachine = require('./TuringMachine').TuringMachine
const Tape = require('./TuringMachine').Tape
const Transition = require('./TuringMachine').Transition

tapeLetters = [' ', 'x', 'x', 'x', ' ', 'x', 'x', 'x', 'x', 'x', 'x']
tape = new Tape(tapeLetters, 0)

transitions = []
transitions.push(
    new Transition('s0', ' ', 's0', ' ', 'L'),
    new Transition('s0', 'x', 's1', 'x', 'L'),
    new Transition('s1', ' ', 's2', 'x', 'L'),
    new Transition('s1', 'x', 's1', 'x', 'L'),
    new Transition('s2', ' ', 's3', ' ', 'R'),
    new Transition('s2', 'x', 's2', 'x', 'L'),
    new Transition('s3', ' ', 's3', ' ', 'R'),
    new Transition('s3', 'x', 's4', ' ', 'R'),
    new Transition('s4', ' ', 'GG', ' ', 'L'),
    new Transition('s4', 'x', 's4', 'x', 'R')
)

turingMachine = new TuringMachine(tape, 's0', ['GG'], transitions)
while (!turingMachine.goalStateReached()) {
    turingMachine.runIteration()
}