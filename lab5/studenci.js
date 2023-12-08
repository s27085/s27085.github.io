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
class Student{
    averageMark = 0;
    marks=[];
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    addMark(x){
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
    getMarks(){
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
let s1 = new Student('adam', 'kubica');
s1.addMark(mark1);
s1.addMark(mark2);
s1.addMark(mark3);
console.log(s1.hello());
console.log(s1.getMarks());