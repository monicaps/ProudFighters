class Presentacion extends Phaser.Scene{
    constructor(){
        super({
            key: "Presentacion"
        });
    }

    init() {
        console.log("Escena Presentacion");
    }
    
    preload() {
        this.load.path = "./assets/";
        this.load.atlas('pl', 'PL_atlas/pl.png', 'PL_atlas/pl_atlas.json');
        this.load.animation('PLAnim', 'PL_atlas/pl_anim.json');
        this.load.image("madera","madera.jpg");
        this.registry.events.on('vidas', (dato) => {
            console.log('Las vida que hay son:', dato);
        });
    }
    
    create() {
        this.fondo1=this.add.image(650,300,"fondo1");
        this.fondo1.setDisplaySize(1500,720);
        this.fondo1.setDepth(-1);
        //const keyCodes= Phaser.Input.Keyboard.KeyCodes;
        this.peleador = this.add.sprite(100, 300, 'pl').setScale(2.7);
        this.cursor = this.input.keyboard.createCursorKeys();
        this.text1=this.add.text(220,110,"En esta breve aventura conoceras un poco\nmi mundo. Defiendelo conmigo\n",{
            font:"40px Courier",
            fill:"#FFFFFF",
            align:"justify"
        });

        this.text1=this.add.text(220,220,"Vamos a cruzar juntos en esta aventura.\nEl peleador legendario es un gran aliado",{
            font:"40px Courier",
            fill:"#FFFFFF",
            align:"justify"
        });

        this.text3=this.add.text(220,300,"\n¡Bienvenido al juego!\nAhora que estas adentro presiona tecla\nizquierda para continuar\n",{
            font: "40px Courier",
            fill:"#FFFFFF",
            align:"justify"
        });

        this.text4=this.add.text(220,540,"\t¡Mucha suerte valiente peleador!",{
            font:"40px Courier",
            fill:"#FFFFFF",
            align:"center"
        });
        this.peleador.anims.play('pl_celebra');

    }
    
    update(time, delta) {
        if(this.cursor.right.isDown){
            this.scene.start("Mina");
        }
        if(this.cursor.left.isDown){
            this.scene.start("Intro");
        }
    }
}

export default Presentacion;