function staircase(n) {
    let step = 1;

    while (step <= n) {
        let print = '';
        let num = 0;
        let spaces = n - step;


        while (num < step) {
            print = print + '#';
            num ++;
        }

        while (spaces > 0) {
            print = ' ' + print;
            spaces --;
        }

        console.log(print);
        step++;
    }

}
