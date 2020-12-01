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

    puedeCircular(dia, terminacion){
        let circular;
        if (dia === 1 || dia === 2 || dia === 3 || dia === 4 || dia === 5 || dia === 6 || dia === 7){
        switch (terminacion) {
            case 0:
                if (dia === 1){
                    circular = true;
                }else {
                    circular = false;
                }
                break;
            case 1:
                if (dia === 2){
                    circular = true;
                }else {
                    circular = false;
                }
                break;
            case 2:
                if (dia === 3 || dia === 4){
                    circular = true;
                }else {
                    circular = false;
                }
                break;
            default:
                circular = true;
                break;
        }
        }else {
            circular = false;
        }
        return circular;
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

console.log(app.puedeCircular(1,0));
console.log(app.puedeCircular(2,0));
console.log(app.puedeCircular(3,0));
console.log(app.puedeCircular(4,0));
console.log(app.puedeCircular(5,0));
console.log(app.puedeCircular(6,0));
console.log(app.puedeCircular(7,0));
console.log(app.puedeCircular(1,1));
console.log(app.puedeCircular(2,1));
console.log(app.puedeCircular(3,1));
console.log(app.puedeCircular(4,1));
console.log(app.puedeCircular(5,1));
console.log(app.puedeCircular(6,1));
console.log(app.puedeCircular(7,1));
console.log(app.puedeCircular(1,2));
console.log(app.puedeCircular(2,2));
console.log(app.puedeCircular(3,2));
console.log(app.puedeCircular(4,2));
console.log(app.puedeCircular(5,2));
console.log(app.puedeCircular(6,2));
console.log(app.puedeCircular(7,2));
console.log(app.puedeCircular(2,3));
console.log(app.puedeCircular(5,7));
console.log(app.puedeCircular(3,10));
console.log(app.puedeCircular(9,7));
console.log(app.puedeCircular(24,7));