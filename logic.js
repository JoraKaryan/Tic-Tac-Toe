document.addEventListener("DOMContentLoaded", function() {

    var one = document.getElementById("one");
    var two = document.getElementById("two");
    var three = document.getElementById("three");
    var four = document.getElementById("four");
    var five = document.getElementById("five");
    var six = document.getElementById("six");
    var seven = document.getElementById("seven");
    var eight = document.getElementById("eight");
    var nine = document.getElementById("nine");

    var win = document.getElementsByTagName("h2");
    var btn = document.getElementById("btn1");

    var player_1 = prompt("Player 1 name")
    var player_2 = prompt("Player 2 name")

    function checkWin() {
        if (
            (one.textContent === 'X' && two.textContent === 'X' && three.textContent === 'X') ||
            (four.textContent === 'X' && five.textContent === 'X' && six.textContent === 'X') ||
            (seven.textContent === 'X' && eight.textContent === 'X' && nine.textContent === 'X') ||
            (one.textContent === 'X' && four.textContent === 'X' && seven.textContent === 'X') ||
            (two.textContent === 'X' && five.textContent === 'X' && eight.textContent === 'X') ||
            (three.textContent === 'X' && six.textContent === 'X' && nine.textContent === 'X') ||
            (one.textContent === 'X' && five.textContent === 'X' && nine.textContent === 'X') ||
            (three.textContent === 'X' && five.textContent === 'X' && seven.textContent === 'X')  
        
            ) {
            win[0].textContent = 'Congrats ' + player_1 + ' You win';
            console.log(win.textContent);
        }
    }

    function checkWin2() {
        if (
            (one.textContent === 'O' && two.textContent === 'O' && three.textContent === 'O') ||
            (four.textContent === 'O' && five.textContent === 'O' && six.textContent === 'O') ||
            (seven.textContent === 'O' && eight.textContent === 'O' && nine.textContent === 'O') ||
            (one.textContent === 'O' && four.textContent === 'O' && seven.textContent === 'O') ||
            (two.textContent === 'O' && five.textContent === 'O' && eight.textContent === 'O') ||
            (three.textContent === 'O' && six.textContent === 'O' && nine.textContent === 'O') ||
            (one.textContent === 'O' && five.textContent === 'O' && nine.textContent === 'O') ||
            (three.textContent === 'O' && five.textContent === 'O' && seven.textContent === 'O')  
        
            ) {
            win[0].textContent = 'Congrats ' + player_2 + ' You win';
            console.log(win.textContent);
        }
    }

    one.addEventListener("click", function(){
        one.textContent="X";
        checkWin();
    });
    two.addEventListener("click", function(){
        two.textContent="X";
        checkWin();
    });
    three.addEventListener("click", function(){
        three.textContent="X";
        checkWin();
    });

    four.addEventListener("click", function(){
        four.textContent="X";
        checkWin();
    });
    five.addEventListener("click", function(){
        five.textContent="X";
        checkWin();
    });
    six.addEventListener("click", function(){
        six.textContent="X";
        checkWin();
    });

    seven.addEventListener("click", function(){
        seven.textContent="X";
        checkWin();
    });
    eight.addEventListener("click", function(){
        eight.textContent="X";
        checkWin();
    });
    nine.addEventListener("click", function(){
        nine.textContent="X";
        checkWin();
    });


    one.addEventListener("dblclick", function(){
        one.textContent="O";
        checkWin2();
    });
    two.addEventListener("dblclick", function(){
        two.textContent="O";
        checkWin2();
    });
    three.addEventListener("dblclick", function(){
        three.textContent="O";
        checkWin2();
    });

    four.addEventListener("dblclick", function(){
        four.textContent="O";
        checkWin2();
    });
    five.addEventListener("dblclick", function(){
        five.textContent="O";
        checkWin2();
    });
    six.addEventListener("dblclick", function(){
        six.textContent="O";
        checkWin2();
    });

    seven.addEventListener("dblclick", function(){
        seven.textContent="O";
        checkWin2();
    });
    eight.addEventListener("dblclick", function(){
        eight.textContent="O";
        checkWin2();
    });
    nine.addEventListener("dblclick", function(){
        nine.textContent="O";
        checkWin2();
    });


    btn.addEventListener("click", function(){
        location.reload();
    });

});
