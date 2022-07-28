export class Morpion {

    constructor(grid) {
        this.grid = grid;
        this.grid.addEventListener('click', this.click.bind(this));
        document.querySelector('#replay').addEventListener('click', this.reset.bind(this));
        this.turn = 1;
        this.moves = 0;
        this.winner = null;
        this.points1 = 0;
        this.points2 = 0;
    }

    click(event) {
        let cell = event.target;
        
        if(cell.classList.contains('cell') && this.turn == 1 && cell.innerHTML == '') {
            this.moves++;
            cell.innerHTML = 'X';
            document.querySelector('#currentPlayer').innerHTML = 'Joueur O';
            this.check();
            this.turn = 3 - this.turn;
        }
        else if (cell.classList.contains('cell') && this.turn == 2 && cell.innerHTML == '') 
        {
            this.moves++;
            cell.innerHTML = 'O';
            document.querySelector('#currentPlayer').innerHTML = 'Joueur X';
            this.check();
            this.turn = 3 - this.turn;
        }
        else
        {
            alert('This cell is already taken');
        }
    }

    check() {
        let cells = this.grid.querySelectorAll('.cell');
        let cell1 = cells[0].innerHTML;
        let cell2 = cells[1].innerHTML;
        let cell3 = cells[2].innerHTML;
        let cell4 = cells[3].innerHTML;
        let cell5 = cells[4].innerHTML;
        let cell6 = cells[5].innerHTML;
        let cell7 = cells[6].innerHTML;
        let cell8 = cells[7].innerHTML;
        let cell9 = cells[8].innerHTML;
        if (cell1 == cell2 && cell2 == cell3 && cell1 == cell3) {
            this.winner = cell1;
            this.display();
        }
        else if (cell3 == cell6 && cell6 == cell9 && cell3 == cell9) {
            this.winner = cell3;
            this.display();
        }
        else if (cell4 == cell5 && cell5 == cell6 && cell4 == cell6) {
            this.winner = cell4;
            this.display();
        }
        else if (cell7 == cell8 && cell8 == cell9 && cell7 == cell9) {
            this.winner = cell7;
            this.display();
        }
        else if (cell1 == cell4 && cell4 == cell7 && cell1 == cell7) {
            this.winner = cell1;
            this.display();
        }
        else if (cell2 == cell5 && cell5 == cell8 && cell2 == cell8) {
            this.winner = cell2;
            this.display();
        }
        else if (cell1 == cell5 && cell5 == cell9 && cell1 == cell9) {
            this.winner = cell1;
            this.display();
        }
        else if (cell3 == cell5 && cell5 == cell7 && cell3 == cell7) {
            this.winner = cell3;
            this.display();
        }
        else if (this.moves == 9) {
            this.winner = 'draw';
            this.display();
        }
        else {
            this.winner = null;
        }
    }

    display() {
        if (this.winner == 'X') {
            alert('X wins');
            this.points1++;
            document.querySelector('#playerOne').innerHTML = this.points1;
            this.replay();
        }
        else if (this.winner == 'O') {
            alert('O wins');
            this.points2++;
            document.querySelector('#playerTwo').innerHTML = this.points2;
            this.replay();
        }
        else if (this.winner == 'draw') {
            alert('Draw');
            this.replay();
        }
    }

    replay() {
        let cells = this.grid.querySelectorAll('.cell');
        for (let i = 0; i < cells.length; i++) {
            cells[i].innerHTML = '';
        }
        this.turn = 1;
        this.moves = 0;
        this.winner = null;
    }

    reset() {
        console.log('reset');
        this.points1 = 0;
        this.points2 = 0;
        document.querySelector('#playerOne').innerHTML = this.points1;
        document.querySelector('#playerTwo').innerHTML = this.points2;
        this.replay();
    }
}