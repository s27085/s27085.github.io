class Car{
    constructor(annal, mileage, initial_price, final_price){
        this.annal = annal;
        this.mileage = mileage;
        this.initial_price = initial_price;
        this.final_price = final_price;
    }
    getAnnal(){
        return this.annal;
    }
    getFinalPrice(){
        return this.final_price;
    }
    increaseInitialPrice(){
        this.initial_price += 1000;
    }
    decreaseFinalPriceByYears(){
        this.final_price -= 1000 * this.getDifferenceOfYears();
    }
    getDifferenceOfYears(){
        return new Date().getFullYear() - this.annal;
    }
    subtractPriceByMileage(){
        this.final_price -= 10000 * Math.floor(this.mileage / 100000);
    }
    changeAnnalAndMileage(annal, mileage){
        this.annal = annal;
        this.mileage = mileage;
        this.decreaseFinalPriceByYears();
        this.subtractPriceByMileage();
    }
}
class CarDatabase{
    constructor(){
        this.cars = [];
    }
    addCar(car){
        if(this.isPriceHigherThanTenThousand(car.getFinalPrice())){
            this.cars.push(car);
        }
    }
    isPriceHigherThanTenThousand(price){
        return price > 10000;
    }
    changeCarsAnnalByOneYear(){
        this.cars.forEach(car => {
            car.annal++;
        });
    }

}
let auto1 = new Car(2010, 120000, 10000, 60000);
auto1.changeAnnalAndMileage(2020, 200000);
console.log(auto1.getFinalPrice());
let cars1 = new CarDatabase();
cars1.addCar(auto1);
cars1.changeCarsAnnalByOneYear();
console.log(auto1.getAnnal());

