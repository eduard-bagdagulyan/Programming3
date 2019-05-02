class Grass {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.col;
        this.index = 1;
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];

    }

    yntrelVandak(ch) {
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;

    }
    multiply() {
        var norVandak = random(this.yntrelVandak(0));
        if (norVandak) {
            var newGrass = new Grass(norVandak[0], norVandak[1]);
            grassArr.push(newGrass);
            matrix[norVandak[1]][norVandak[0]] = 1;

        }
    }

}

class Eater {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 8;
        this.directions = [];
        this.index = 2;
    }
    yntrelVandak(ch) {
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);

                }
            }
        }
        return found;

    }
    stanalNorKordinatner() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    move() {
        this.stanalNorKordinatner();
        var vandak = random(this.yntrelVandak(0));
        if (vandak != undefined) {
            matrix[this.y][this.x] = 0;
            matrix[vandak[1]][vandak[0]] = 2;
            this.x = vandak[0];
            this.y = vandak[1];
        }
    }
    eat() {
        this.stanalNorKordinatner();
        var vandak = random(this.yntrelVandak(1));
        matrix[this.y][this.x] = 0;
        if (vandak != undefined) {
            matrix[vandak[1]][vandak[0]] = 2;
            this.x = vandak[0];
            this.y = vandak[1];
            this.energy++;
        }
    }
    die() {
        if (this.energy == 0) {
            matrix[this.y][this.x] = 0;
            for (var i in eaterArr) {
                if (eaterArr[i].x == this.x && eaterArr[i].y == this.y) {
                    eaterArr.splice(i, 1);
                }
            }
        }
    }
    multiply() {
        var norVandak = random(this.yntrelVandak(0));
        if (norVandak) {
            var newEater = new Eater(norVandak[0], norVandak[1]);
            eaterArr.push(newEater);
            matrix[norVandak[1]][norVandak[0]] = 2;
            this.energy--;

        }

    }

}
class Predator {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 8;
        this.directions = [];
        this.index = 3;
    }
    yntrelVandak(ch) {
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);

                }
            }
        }
        return found;

    }
    stanalNorKordinatner() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    move() {
        this.stanalNorKordinatner();
        var vandak = random(this.yntrelVandak(0));
        if (vandak != undefined) {
            matrix[this.y][this.x] = 0;
            matrix[vandak[1]][vandak[0]] = 3;
            this.x = vandak[0];
            this.y = vandak[1];
        }
    }
    eat() {
        this.stanalNorKordinatner();
        var vandak = random(this.yntrelVandak(2));
        matrix[this.y][this.x] = 0;
        if (vandak != undefined) {
            matrix[vandak[1]][vandak[0]] = 3;
            this.x = vandak[0];
            this.y = vandak[1];
            this.energy++;
        }
    }

}
class AntiPredator {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 8;
        this.directions = [];
        this.index = 4;
    }
    yntrelVandak(ch) {
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);

                }
            }
        }
        return found;

    }
    stanalNorKordinatner() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    move() {
        this.stanalNorKordinatner();
        var vandak = random(this.yntrelVandak(0));
        if (vandak != undefined) {
            matrix[this.y][this.x] = 0;
            matrix[vandak[1]][vandak[0]] = 4;
            this.x = vandak[0];
            this.y = vandak[1];
        }
    }
    eat() {
        this.stanalNorKordinatner();
        var vandak = random(this.yntrelVandak(2,3));
        matrix[this.y][this.x] = 0;
        if (vandak != undefined) {
            matrix[vandak[1]][vandak[0]] = 4;
            this.x = vandak[0];
            this.y = vandak[1];
            this.energy++;
        }
    }
}

class AntiAll {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 8;
        this.directions = [];
        this.index = 5;
    }
    yntrelVandak(ch) {
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);

                }
            }
        }
        return found;

    }
    stanalNorKordinatner() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    move() {
        this.stanalNorKordinatner();
        var vandak = random(this.yntrelVandak(0));
        if (vandak != undefined) {
            matrix[this.y][this.x] = 0;
            matrix[vandak[1]][vandak[0]] = 5;
            this.x = vandak[0];
            this.y = vandak[1];
        }
    }
    eat() {
        this.stanalNorKordinatner();
        var vandak = random(this.yntrelVandak(2,3));
        matrix[this.y][this.x] = 0;
        if (vandak != undefined) {
            matrix[vandak[1]][vandak[0]] = 5;
            this.x = vandak[0];
            this.y = vandak[1];
            this.energy++;
        }
    }
}