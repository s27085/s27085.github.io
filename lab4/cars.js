function zad1() {
    console.log("zadanie 1");

    let a = 3;
    let b = 4;
    let c = 5;

    if ((a*a + b*b === c*c) ||
        (c*c + b*b === a*a) ||
        (a*a + c*c === b*b)
    ) {
        console.log("jest to trójka pitagorejska");
    } else {
        console.log("nie jest to trójka pitagorejska");
    }
}
function zad2(a, b, c) {
    console.log("zadanie 2");

    do{
        if(b % c === 0){
            console.log(b)
        }
        b++;
    }while(a-b+1 !== 0);
}
function zad3(rozmiarBloku) {
    console.log("zadanie 3");
    let combinedString;
    for(let i = 1; i<=rozmiarBloku; i++){
        combinedString = "";
        for(let j = 1; j <= rozmiarBloku; j++){
            combinedString += (i*j) + " ";
        }
        console.log(combinedString);
    }
}

function fibonacci(dlugoscCiag){
    if(dlugoscCiag < 2) {
        return dlugoscCiag;
    }
    else{
        return fibonacci(dlugoscCiag - 1) + fibonacci(dlugoscCiag - 2);
    }
}

function zad4(dlugoscCiag) {
    console.log("zadanie 4");
    for(let i = 0; i <dlugoscCiag; i++){
        console.log(fibonacci(i));
    }
}
function zad5(wysokosc){
    console.log("zadanie 5");
    let row = "";
    for (let i = 1; i <= wysokosc; i++){
        row = "";
        for(let j = -wysokosc; j<=wysokosc; j++) {
            if (Math.abs(j) < i) {
                row += "*"
            } else {
                row += " "
            }
        }
        console.log(row);

    }
}
function zad6(wysokosc){
    console.log("zadanie 6");
    let row = "";
    for (let i = 0; i <= wysokosc+1; i++){
        row = "";
        for(let j = -wysokosc; j<=wysokosc; j++) {
            if(i === wysokosc+1 || i === 0){
                row+= "*";
            }
            else {
                if (Math.abs(j) < i) {
                    row += " "
                } else {
                    row += "*"
                }
            }
        }
        console.log(row);
    }
}

function zad7(figura, a, b, h){
    console.log("zadanie 7");
    switch (figura) {
        case 'prostokat':
            console.log("Pole prostokąta wynosi " + a*b);
            break;
        case 'trapez':
            console.log("Pole trapeza wynosi " + (a*b)*h/2);

            break;
        case 'równoległobok':
            console.log("Pole równoległoboku wynosi " + a*b);
            break;
        case 'trójkąt':
            console.log("Pole trójkąta wynosi " + a*b/2);
            break;
        default:
            throw new Error("Nie ma takiej figury");
    }
}
function zad8(callback, a, b, h){
    console.log("zadanie 8");
    console.log("Pole figury wynosi: " + callback(a, b, h));
}
const rectangleArea = (a, b) => (a*b);
const trapezeArea = (a, b, h) => (a*b*h/2);
const parallelogramArea = (a, h) => (a*h);
const triangleArea = (a, h) => (a*h/2);

function zad9(pascalTriangleHeight){
    console.log("zadanie 9");
    let triangle = [];
    for(let i = 0; i <pascalTriangleHeight; i++){
        triangle[i] = [];
        for (let j=0; j<i+1; j++){
            if(j === 0 || j === i){
                triangle[i][j] = 1;
            }
            else{
                //https://pl.wikipedia.org/wiki/Tr%C3%B3jk%C4%85t_Pascala
                //animacja obliczania kolejnych elementów trójkąta
                triangle[i][j] = triangle[i-1][j-1] + triangle[i-1][j];
            }
        }
        console.log(triangle[i].join(" "));
    }
}
function zad10(pattern, sentence){
    console.log("zadanie 10");

    let words = sentence.split(" ");
    words.forEach((word) => {
        if (pattern.indexOf(word) > -1) {
            words[words.indexOf(word)] = "*";
        }
    })
    console.log(words.join(" "));
}
zad1();
zad2(21, 4, 3);
zad3(4);
zad4(4);
zad5(3);
zad6(3);
zad7('trójkąt', 10, 5);
zad8(triangleArea, 10, 5)
zad9(5);
zad10(['lalki', 'azor'], 'Nasz azor zeżarł wszystkie lalki')