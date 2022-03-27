import Intro from "./scenes/Intro.js"
import Presentacion from "./scenes/Presentacion.js"
import Mina from "./scenes/Mina.js"
import Bosque from "./scenes/Bosque.js"
import Cementerio from "./scenes/Cementerio.js"
import Cementeriodos from "./scenes/Cementeriodos.js"
import Vida from "./scenes/Vida.js"

//import Final from "./scenes/Final.js"

const config = {
    title: "Proud Fighters",		    //Nombre del juego (opcional)
    url: "http://google.es",	    //Dirección de la página del juego (opcional)
    version: "0.0.1",		        //Versión alfanumérica (opcional)
    type: Phaser.AUTO,		        //Tipo de renderizado (WEBGL, CANVAS, AUTO)
                                    // AUTO: busca primero WEBGL y si no está disponible eligirá CANVAS
    width: 1300,			            //Ancho de pantalla del juego
    height: 640, 			        //Alto de pantalla del juego
    parent: "contenedor",		    //Nombre del id del elemento <div> en el index.html
                                    // se refiere a dónde se pondrá el canvas o lienzo
    pixelArt: true,		            //Diseño con pixeles definidos (no borrosos)
    backgroundColor: "#34495e", 	//Color de fondo del canvas ()
    scene: [Intro,Presentacion,Mina,Bosque,Cementerio,Cementeriodos, Vida/*,Final*/],    //Aquí irá la lista de scenas del juego
    banner:{
        hidePhaser: true,
        text: "#fff00f",
        background: [
            "#16a085",
            "#2ecc71",
            "#e74c3c", 
            "#000000"
        ]
    },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {
                x: 0,
                y:0
            },
            debug: false
        }
    }
};
    

const game = new Phaser.Game(config);
    let cursors;
    let peleador;
    let showDebug = false;