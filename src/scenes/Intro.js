class Intro extends Phaser.Scene{
    constructor(){
        super({
            key: "Intro"
        });
    }

    init() {
        console.log("Escena Intro de Proud Figthers");
    }
    
    preload() {
        this.load.path = "./assets/";
        this.load.image(['yoshif', 'yoshi','arbol','FondoTierra','contenedor','roca','pie','lapida','door','estaca','estala','arbusto','enemigo1','murci']);
        this.load.image("madera","madera.jpg");
        this.load.atlas('pl', 'PL_atlas/pl.png', 'PL_atlas/pl_atlas.json');
        this.load.animation('PLAnim', 'PL_atlas/pl_anim.json');
        this.load.audio("fondo_2","musica/pista3.mp3");
        this.load.audio("fondo_1","musica/pista1.mp3");
        this.load.image("fondo1","madera.jpg");
        this.load.image("fondo","fondolava.png");
        this.load.image("fondoAlt","fondo_T.jpg");
        this.load.audio('musicafondo', 'musicloop.mp3');
        this.load.atlas('me', 'ME_atlas/me.png', 'ME_atlas/me_atlas.json');
        this.load.animation('MEAnim', 'ME_atlas/me_anim.json');
        this.load.atlas('mm', 'MM_atlas/mm.png', 'MM_atlas/mm_atlas.json');
        this.load.animation('MMAnim', 'MM_atlas/mm_anim.json');
        this.load.atlas('monedas', 'moneda/monedas.png', 'moneda/monedas_atlas.json');
        this.load.animation('monedaAnim', 'moneda/monedas_anim.json' );
        this.load.image('flame','flame_atlas/flame_0.png');
        this.load.image("fondo_2","base_cementerio.png");
        this.load.image('corazones', 'monedas.png');
    }
    
    create() {
        this.fondo1=this.add.image(650,300,"fondo1");
        this.fondo1.setDisplaySize(1500,720);
        this.fondo1.setDepth(-1);
        let graphics= this.add.graphics();
        //const container=this.add.container(100,100);
        const container=this.add.container(0,-400);
        graphics.setVisible(false);
        this.cursor = this.input.keyboard.createCursorKeys();
        console.log(this.cursor);
        this.timeline = this.tweens.createTimeline();
        this.peleador = this.add.sprite(750, 200, 'pl').setScale(2.7);
        /*let MusicFondo=this.sound.add("fondo");
        MusicFondo.play();
        MusicFondo.setLoop(false);
        console.log("Musica de fondo reproduciendo");*/
        graphics.fillStyle(0xffffff,1);
        graphics.fillRect(50,50,100,100);
        graphics.fillRect(50,200,100,100);
        graphics.fillRect(50,350,100,100);
        graphics.fillRect(50,500,100,100);
        graphics.fillRect(200,500,100,100);
        graphics.fillRect(350,500,100,100);
        graphics.fillRect(500,500,100,100);
        graphics.fillRect(1150,500,100,100);
        graphics.fillRect(1150,50,100,100);
        graphics.fillRect(1150,200,100,100);
        graphics.fillRect(1150,350,100,100);
        graphics.fillRect(1000,50,100,100);
        graphics.fillRect(850,50,100,100);
        graphics.fillRect(700,50,100,100);
        this.nombre=this.add.text(100,100,"Proud\nFighters",{
            font: "94px Courier",
            fill:"#FFFFFF"
        });

        this.textEntrada=this.add.text(200,350,"Presione espacio para continuar",{
            font:"35px",
            fill:"#FFFFFF"
        });
        this.peleador.anims.play('pl_paradofrente');

        container.add([
            this.nombre,
            this.textEntrada,
            this.peleador
        ]);

        this.timeline=this.tweens.timeline({
            targets:[container],
            tweens:[
                {
                    x:100,
                    y:-400
                },
                {
                    ease:"Power1",
                    y:100
                }
            ],
            paused:true,
            totalDuration:1000,
            onComplete: () => {
                graphics.setVisible(true);
                console.log('Se completa el tween de entrada');
            }
        });
        this.timeline.play();
    }
    
    update(time, delta) {
        if(this.cursor.space.isDown){
           this.scene.start("Presentacion");
        }
    }
}

export default Intro;