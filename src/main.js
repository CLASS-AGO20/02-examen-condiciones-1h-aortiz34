export default class App {

    convertir(pesos){
        let total;
        if (pesos < 2000){
            total = pesos / 20.5;
        }else if (pesos >= 2000){
            total = pesos / 22.7;
        }
        return total;
    }

    costoRenta(kilometros){
        let precio;
        if (kilometros < 50){
            precio = kilometros * 3;
        }else if (kilometros >= 50 && kilometros < 100){
            precio = kilometros * 5;
        }else if (kilometros >= 100 && kilometros < 200){
            precio = kilometros * 6;
        }else {
            precio = kilometros * 6.5;
        }
        return precio;
    }

}

let app = new App();

console.log(app.convertir(4000));
console.log(app.convertir(1999));
console.log(app.convertir(2000));

console.log(app.costoRenta(44));
console.log(app.costoRenta(50));
console.log(app.costoRenta(78));
console.log(app.costoRenta(100));
console.log(app.costoRenta(158));
console.log(app.costoRenta(199));
console.log(app.costoRenta(200));