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

}

let app = new App();

console.log(app.convertir(4000));
console.log(app.convertir(1999));
console.log(app.convertir(2000));