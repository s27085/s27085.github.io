// 11. Dany jest Obiekt:
//     auto{rok, przebieg, cena_wyjsciowa, cena_koncowa}.
let Car = {
    annal: 2010,
    mileage: 200000,
    initial_price: 10000,
    final_price: 60000,
    // 11.1 Napisz następujące metody w obiekcie:
    //      a) Metoda, która powiększa cenę wyjściową o 1000.
    //      b) Metoda, która obniża cenę końcową o 1000 za każdy rok wieku
    //      auta (względem ceny wyjściowej).
    //      c) Metoda, która obniża cenę końcową o 10000 za każde
    //      100000km przebiegu auta.
    //      d) Metoda, która dopisuje do auta podany przebieg i rok
    //      (automatycznie przeliczając cenę wg powyższych funkcji).
    getAnnal(){
        return this.annal;
    },
    getFinalPrice(){
        return this.final_price;
    },
    increaseInitialPrice(){
        this.initial_price += 1000;
    },
    decreaseFinalPriceByYears(){
        this.final_price -= 1000 * this.getDifferenceOfYears();
    },
    getDifferenceOfYears(){
        return new Date().getFullYear() - this.annal;
    },
    subtractPriceByMileage(){
        this.final_price -= 10000 * Math.floor(this.mileage / 100000);
    },
    changeAnnalAndMileage(annal, mileage){
        this.annal = annal;
        this.mileage = mileage;
        this.decreaseFinalPriceByYears();
        this.subtractPriceByMileage();
    }
}
    // 11.2   Stwórz tablicę obiektów typu auto oraz funkcje do niej:
    // e) Funkcja, która dopisze auto do tablicy samochodow, jesli jego
    // cena jest wieksza niz 10000.
    // f) Funkcja, ktora dla wszystkich aut z tablicy zwieksza rok o 1.
let cars = {
    cars: [],
    addCar(car){
        if(this.isPriceHigherThanTenThousand(car.getFinalPrice())){
            this.cars.push(car);
        }
    },
    isPriceHigherThanTenThousand(price){
        return price > 10000;
    },
    changeCarsAnnalByOneYear(){
        this.cars.forEach(car => {
            car.annal++;
        });
    }

}
Car.changeAnnalAndMileage(2020, 200000);
console.log(Car.getFinalPrice());
cars.addCar(Car);
cars.changeCarsAnnalByOneYear();
console.log(Car.getAnnal());
