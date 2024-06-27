const cars = [
    {rok: 2010, przebieg: 200000, cena_wyjsciowa: 10000, cena_koncowa: 3000},
    {rok: 2011, przebieg: 200000, cena_wyjsciowa: 1000, cena_koncowa: 2000},
    {rok: 2012, przebieg: 640000, cena_wyjsciowa: 3000, cena_koncowa: 40000},
    {rok: 2013, przebieg: 240000, cena_wyjsciowa: 10000, cena_koncowa: 6000},
]
const table = document.querySelector('table');
cars.forEach((car) => {
    // table.append("<tr><td>" +
    //     car.rok + "</td><td>" +
    //     car.przebieg + "</td><td>" +
    //     car.cena_wyjsciowa + "</td><td>" +
    //     car.cena_koncowa+ "</td></tr>"
    // );
    let row = document.createElement('tr');
    row.innerHTML = "<td>" +
        car.rok + "</td><td>" +
        car.przebieg + "</td><td>" +
        car.cena_wyjsciowa + "</td><td>" +
        car.cena_koncowa+ "</td>";
    table.appendChild(row);
});