class QueenAttack {

    constructor(pos1, pos2) {
        this.pos1 = pos1;
        this.pos2 = pos2;
    }

    canAttack() {

        if (this.pos1[0] > 7 || this.pos1[0] < 0 || this.pos1[1] > 7 || this.pos1[1] < 0 || this.pos2[0] > 7 || this.pos2[0] < 0 || this.pos2[1] > 7 || this.pos2[1] < 0) {
            return "Invalid input";
        }

        if (this.pos1[0] == this.pos2[0] || this.pos1[1] == this.pos2[1]) {
            return true;
        }

        if (Math.abs(this.pos1[0] - this.pos2[0]) == Math.abs(this.pos1[1] - this.pos2[1])) {
            return true;
        }

        return false;
    }
}

const pos1 = [2, 3];
const pos2 = [4, 5];

const chess = new QueenAttack(pos1, pos2);
console.log(chess.canAttack());
