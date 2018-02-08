const TuringMachine = require('./TuringMachine').TuringMachine
const Tape = require('./TuringMachine').Tape

tapeLetters = ['a','b','c','d','e']
tape = new Tape(tapeLetters, 4)

transitions = []
transitions[['s0', 'a']] = ['s0', 'a', 'R']
transitions[['s0', 'b']] = ['s0', 'b', 'R']
transitions[['s0', 'c']] = ['s0', 'c', 'R']
transitions[['s0', 'd']] = ['s0', 'd', 'R']
transitions[['s0', 'e']] = ['s0', 'e', 'R']

turingMachine = new TuringMachine(tape, 's0', ['GG'], transitions)
while (!turingMachine.goalStateReached()) {
    turingMachine.draw()
    turingMachine.runIteration()
    turingMachine.draw()
}