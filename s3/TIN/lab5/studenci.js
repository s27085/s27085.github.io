// 12. Student i Ocena: klasy w ECMA6.
// 12.1 Stwórz klasę Ocena z konstruktorem. Ma mieć 2 pola:
//     - przedmiot – nazwa przedmiotu,
//     - wartosc – wartość liczbowa oceny
class Mark{
    constructor(subject, value) {
        this.subject = subject;
        this.value = value;
    }
    getValue(){
        return Number(this.value);
    }
    getSubject(){
        return this.subject;
    }
}
// 12.2 Stwórz klasę Student, zawierającą:
// - tablicę ocen,
//     - pole na średnią ocen,
//     - konstruktor (parametry, imię i nazwisko),
// - metodę hello, zwracającą komunikat powitalny z imieniem,
//     nazwiskiem i aktualną średnią ocen.

class Student{
    averageMark = 0;
    marks=[];
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    // 12.3 Do klasy Student dodaj setter oceny(x). Jeśli x jest
    // obiektem klasy Ocena, ma zostać dopisany do tablicy ocen.
    // Równocześnie ma zostać przeliczona średnia ocen.
    set mark(x){
        if(x instanceof Mark) {
            this.marks.push(x);
            this.calculateAverageMark();
        }
    }
    calculateAverageMark(){
        let sum = 0;
        this.marks.forEach(mark => {
            sum += mark.getValue();
        });
        this.averageMark =  sum/this.marks.length;
    }
    // 12.4 Do klasy Student dodaj getter oceny(). Powinien zwrócić
    // aktualne oceny studenta, dodane przy pomocy settera, w
    // komunikacie tekstowym, w formacie jak powyżej.
    get mark(){
        let string = '';
        this.marks.forEach(mark => (
            string += 'Przedmiot: '+mark.getSubject()+' - ocena '+mark.getValue()+'. ')
        )
        return string;
    }
    hello(){
        return 'Witaj ' + this.name +' ' + this.surname+', Twoja średnia ocen to: ' + this.averageMark+'.'
    }

}
let mark1 = new Mark('przyroda', '3')
let mark2 = new Mark('przyroda', '3')
let mark3 = new Mark('przyroda', '3')
let mark4 = 4;
let s1 = new Student('adam', 'kubica');
s1.mark = mark1;
s1.mark = mark2;
s1.mark = mark3;
s1.mark = mark4;
console.log(s1.hello());
console.log(s1.mark);