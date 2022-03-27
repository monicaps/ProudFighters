class Vida extends Phaser.Scene{
    constructor(){
        super({
            key: 'Vida'
        });
    }

    init(dato) {
        console.log('Gestor de Vida',dato);
        this.vida=dato;
    }
    preload() {

    }

    create(){
        this.contenedor = this.add.image(0, 0, 'contenedor');

        this.texto = this.add.text(-120,-15,"Vida:", { fontSize: 30 });
        this.textoVida=this.add.text(-20,-15,this.vida,{fontSize:30});
        this.yoshi = this.add.image(100, 0, 'pl') .setDepth(2) .setScale(0.7);
        const container = this.add.container(1000,75);

        container.add([ 
            this.contenedor, 
            this.yoshi, 
            this.texto,
            this.textoVida
        ]);
        container.setScale(0.7,0.5);
        container.setAlpha(0.5);

    }

    update(time, delta) {

    }
}

export default Vida;