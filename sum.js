const TuringMachine = require('./TuringMachine').TuringMachine
const Tape = require('./TuringMachine').Tape

tapeLetters = [' ', 'x', 'x', 'x', ' ', 'x', 'x', 'x', 'x', 'x', 'x']
tape = new Tape(tapeLetters, 0)

transitions = []
transitions[['s0', ' ']] = ['s0', ' ', 'L']
transitions[['s0', 'x']] = ['s1', 'x', 'L']
transitions[['s1', ' ']] = ['s2', 'x', 'L']
transitions[['s1', 'x']] = ['s1', 'x', 'L']
transitions[['s2', ' ']] = ['s3', ' ', 'R']
transitions[['s2', 'x']] = ['s2', 'x', 'L']
transitions[['s3', ' ']] = ['s3', ' ', 'R']
transitions[['s3', 'x']] = ['s4', ' ', 'R']
transitions[['s4', ' ']] = ['GG', ' ', 'L']
transitions[['s4', 'x']] = ['s4', 'x', 'R']

turingMachine = new TuringMachine(tape, 's0', ['GG'], transitions)
turingMachine.draw()
while (!turingMachine.goalStateReached()) {
    turingMachine.runIteration()
    turingMachine.draw()
}