class Auto{
    constructor(rok, przebieg, cena_wyjsciowa, cena_koncowa) {
        this.rok = rok;
        this.przebieg = przebieg;
        this.cena_wyjsciowa = cena_wyjsciowa;
        this.cena_koncowa = cena_koncowa;
    }
    increaseByThousandCena_Wyjsciowa(){
        this.cena_wyjsciowa += 1000;
    }
    
}