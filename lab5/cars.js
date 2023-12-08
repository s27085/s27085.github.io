let Car = {
    annal: 2010,
    mileage: 200000,
    initial_price: 10000,
    final_price:60000,
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
let cars1 = {
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
cars1.addCar(Car);
cars1.changeCarsAnnalByOneYear();
console.log(Car.getAnnal());
