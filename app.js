

let bienvenido = "Bienvenido,"
let nombre = prompt("Ingrese su nombre y apellido para continuar o escriba SALIR para cancelar")
let salir = "SALIR"
let juego1 = 24.99
let juego2 = 29.99
let juego3 = 9.99
let juego4 = 9.99
let juego5 = 14.99

while(nombre !== salir){
    let bienvenida = bienvenido + " " + nombre

console.log(bienvenida)
alert(bienvenida)

let tarjeta = prompt("Ingrese una tarjeta de 8 digitos")


if(tarjeta >= 9999999 && tarjeta <= 99999999)
{
console.log("Su tarjeta fue tomada con exito")
alert("Su tarjeta fue tomada con exito")
}
else
{
alert("Recargue la pagina e intente nuevamente")
break

}


let game = prompt(`Elija una de las ofertas disponibles:
1.Cyberpunk 2077(24,99 USD$)
2.Assasins Creed Valhala(29,99 USD$)
3.God Of War 4(9,99 USD$)
4.Bloodborne(9,99 USD$)
5.Metro Exodus(14,99 USD$)

MONTO DISPONIBLE(100,00 USD$)`)

switch (game) {
    case "1":
        console.log("Gracias por su compra(Cyberpunk 2077)")
        for(let i = 100; i -= juego1; i--)
        {
        alert(`Gracias por comprar Cyberpunk
        Monto actual en el monedero ${i}`)
        break
        }
        break;
    case "2":
        console.log("Gracias por su compra(Assasins Creed Valhala)")
        for(let i = 100; i -= juego2; i--)
        {
        alert(`Gracias por comprar Assasins Creed Valhala 
        Monto actual en el monedero ${i}`)
        break
        }
        break
    case "3":
        console.log("Gracias por su compra(God Of War)")
        for(let i = 100; i -= juego3; i--)
        {
        alert(`Gracias por comprar God Of War 4
        Monto actual en el monedero ${i}`)
        break
        }
        break
    case "4":
        console.log("Gracias por su compra(Bloodborne)")
        for(let i = 100; i -= juego4; i--)
        {
        alert(`Gracias por comprar Bloodborne
        Monto actual en el monedero ${i}`)
        break
        }
        break
    case "5":
        console.log("Gracias por su compra(Metro Exodus)")
        for(let i = 100; i -= juego5; i--)
        {
        alert(`Gracias por comprar Metro Exodus
        Monto actual en el monedero ${i}`)
        break
        }
        break
    default:
        console.log("No se selecciono ninguna opcion valida, por favor recargue la pagina e intente nuevamente")
        alert("No se selecciono ninguna opcion valida, por favor recargue la pagina e intente nuevamente")
        break;
}
break
}
if(nombre === salir){
    alert("Recargue la pagina e intente nuevamente")
}

    








