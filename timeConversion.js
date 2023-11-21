function timeConversion(s) {
    let hh = s.split(':')[0];
    let mm = s.split(':')[1];
    let ss = s.split(':')[2].slice(0,2);
    const period = s.split(':')[2].slice(2,4);

    if (period === 'AM') {
        if (parseInt(hh) === 12) hh = '00';
        return `${hh}:${mm}:${ss}`;
    }

    if (period === 'PM') {
        if (parseInt(hh) < 12) hh = parseInt(hh) + 12;
        return `${hh}:${mm}:${ss}`;
    }
}
