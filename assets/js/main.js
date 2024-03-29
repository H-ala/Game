function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

particlesJS.load('particles-js', 'assets/vendor/particles.js/particlesjs-config(3).json', function () {
    console.log('callback - particles-js config loaded');
});


// Game One
{
    let xCat;
    document.querySelector('#road').addEventListener('mousemove', function (e) {
        document.querySelector('#cat').style.left = e.x + 'px';
        if (e.x > window.innerWidth - 100) {
            document.querySelector('#cat').innerHTML = `<i class="fa fa-skull"></i>`
            document.querySelector('#cat').style.color = 'darkred';
        } else {
            document.querySelector('#cat').innerHTML = `<i class="fa fa-cat"></i>`
            document.querySelector('#cat').style.color = '';
        }
        if (e.x < xCat) {
            document.querySelector('#cat').style.transform = 'rotateY(180deg)';
        } else {
            document.querySelector('#cat').style.transform = '';
        }
        xCat = e.x;
    });
}
// End of Game One


<!--Game Two-->
{
    function table2DArray(selector) {
        let table = document.querySelector(selector);
        let result = [];
        let trs = table.querySelectorAll('tr');

        for (const tr of trs) {
            let tds = tr.querySelectorAll('td');
            result.push([]);
            for (const td of tds) {
                result[result.length - 1].push(td.innerText);
            }
        }
        return result;
    }

    function isWinner(game) {
        for (let i = 0; i < 3; i++) {
            if (game[i][0] === game[i][1] && game[i][1] === game[i][2]) {
                if (game[i][0] === 'X' || game[i][0] === 'O') {
                    return game[i][0];
                }
            }
        }

        for (let i = 0; i < 3; i++) {
            if (game[0][i] === game[1][i] && game[1][i] === game[2][i]) {
                if (game[0][i] === 'X' || game[0][i] === 'O') {
                    return game[0][i];
                }
            }
        }

        if (game[0][0] === game[1][1] && game[1][1] === game[2][2]) {
            if (game[0][0] === 'X' || game[0][0] === 'O') {
                return game[0][0];
            }
        }
        if (game[0][2] === game[1][1] && game[1][1] === game[2][0]) {
            if (game[0][2] === 'X' || game[0][2] === 'O') {
                return game[0][2];
            }
        }
        if (game.toString().length === 17) {
            return 'Draw';
        }
    }


    let turn = 'X';
    let isEnd = false;
    document.querySelectorAll('td').forEach(function (td) {
        td.addEventListener('click', function () {
            if (isEnd) {
                return;
            }

            if (this.innerText === 'X' || this.innerText === 'O') {
                return;

            }
            if (turn === 'X') {
                this.style.color = 'mediumvioletred';
            }
            if (turn === 'O') {
                this.style.color = 'cornflowerblue';
            }

            td.innerText = turn;

            if (turn === 'X') {
                turn = 'O';
            } else {
                turn = 'X';
            }

            document.querySelector('#turn span').innerText = turn;

            let game = table2DArray('#XO');
            let whoIsWinner = isWinner(game);

            if (whoIsWinner != null) {
                document.querySelector('#winner span').innerText = whoIsWinner;
                document.querySelector('#turn span').innerText = '-';
                isEnd = true;
            }
        });
    });
    document.querySelector('#again').addEventListener('click', function () {
        isEnd = false;
        document.querySelectorAll('td').forEach(function (td) {
            td.innerText = '';
        });
        document.querySelector('#turn span').innerText = '';
        document.querySelector('#winner span').innerText = '';
    });
}
<!--End of Game Two-->


<!--Game Three-->
{
    let c;
    document.querySelector("#colorful #square1").addEventListener('mouseenter', function () {
        c = setInterval(function () {
            document.querySelector('#colorful #square1').style.background = getRandomColor();
        }, 100);
    });
    document.querySelector('#colorful #square1').addEventListener(('mouseout'), function () {
        clearInterval(c);
    });
}
<!--End of Game Three-->


<!--Game Four-->
{
    document.querySelector('#Moving #square2').addEventListener('mouseenter', function () {
        this.style.background = getRandomColor();
        this.style.top = getRandomArbitrary(10, 90) + '%';
        this.style.left = getRandomArbitrary(0, 90) + '%';
    });
}
<!--End of Game Four-->
