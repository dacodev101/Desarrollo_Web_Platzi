/* 
Requerimientos del reto:

1. El usuario debe poder ingresar su usuario y contraseña
2. El sistema debe ser capaz de validar si el usaurio y contraseña ingresados por el usuario existen en la base de datos
3. Si el usuario y contraseña son correctos, el sistema debe mostrar un mensaje de bienvenida y mostrar el timeline del usuario.
4. Si el usuario y contraseña son incorrectos, el sistema debe mostrar un mensaje de error y no mostrar ningun timeline
*/

const usersDatabase = [
    { username: "andres", password: "123" },
    { username: "caro", password: "456" },
    { username: "mariana", password: "789" },
];

const usersTimeline = [
    { username: "estefany", timeline: "Me encata Javascript!" },
    { username: "oscar", timeline: "Bebeloper es lo mejor!" },
    { username: "mariana", timeline: "A mi me gusta más el café que el té" },
    { username: "andres", timeline: "Yo hoy no quiero trabajar" },
];

const username = prompt("Ingresa tu usuario: ");
const password = prompt("Ingresa tu contraseña: ");

function singIn(nameUser) {
    usersTimeline.find((timelinePosition) => {
        if (timelinePosition.username === nameUser) {
            console.log("Bienvenido al sistema");
            console.log(
                `El timeline de ${nameUser} es -- ${timelinePosition.timeline} -- `
            );
        }
    });
}

function validateUser(name, pass) {
    const user = usersDatabase.find(
        (user) => user.username === name && user.password === pass
    );
    if (user) {
        singIn(name);
        return true;
    }
    alert("El usuario o contraseña son incorrectos");
    return false;
}

validateUser(username, password);
