function Tape(letters, initialPosition) {
    this.left = letters.slice(0, initialPosition)
    this.right = letters.slice(initialPosition + 1)
    this.middleLetter = letters[initialPosition]
}
Tape.prototype.shiftLeft = function () {
    this.left.push(this.middleLetter)
    this.middleLetter = this.right.length !== 0 ? this.right.shift() : ' '
}
Tape.prototype.shiftRight = function () {
    this.right.unshift(this.middleLetter)
    this.middleLetter = this.left.length !== 0 ? this.left.pop() : ' '
}


function TuringMachine(tape, initialState, goalStates, transitions) {
    this.tape = tape
    this.currentState = initialState
    this.goalStates = goalStates
    this.transitions = transitions
}
TuringMachine.prototype.runIteration = function () {
    [newState, newLetter, moveDirection] =
        this.transitions[[this.currentState, this.tape.middleLetter]]

    this.currentState = newState
    this.tape.middleLetter = newLetter
    if(moveDirection === 'L') this.tape.shiftLeft()
    if(moveDirection === 'R') this.tape.shiftRight()
}
TuringMachine.prototype.goalStateReached = function() {
    if(this.goalStates.indexOf(this.currentState) !== -1) return true
    return false
}


exports.Tape = Tape
exports.TuringMachine = TuringMachine