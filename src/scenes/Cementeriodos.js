import Vida from "../scenes/Vida.js"
class Cementeriodos extends Phaser.Scene{
    constructor(){
        super({
            key: "Cementeriodos"
        });
    }

    init() {
        console.log("Escena Cementeriodos");
    }
    
    preload() {
        this.puntos = 0;
        this.load.path = './assets/';
        this.load.image(['yoshif', 'yoshi', 'arbol', 'lapida', 'lapida_cruz', 'reja', 'ArbolSeco']);
        this.load.atlas('pl', 'PL_atlas/pl.png', 'PL_atlas/pl_atlas.json');
        this.load.animation('PLAnim', 'PL_atlas/pl_anim.json');
    }

    create() {
        this.cursors = this.input.keyboard.createCursorKeys();
        //this.scene.launch('Vida');
        //this.scene.setVisible(true, 'Vida');
        //this.scene.moveUp('Vida');
        this.input.on('pointerdown', () => {
            this.puntos++;
            this.registry.events.emit('puntosV', this.puntos);
        });
        this.cursor = this.input.keyboard.createCursorKeys();
        const keyCodes = Phaser.Input.Keyboard.KeyCodes;
        this.peleador = this.physics.add.sprite(100, 200, 'pl');
        this.peleador.anims.play('pl_paradofrente');
        this.peleador.setDepth(5);
        this.peleador.body.setSize(72, 20);
        this.peleador.body.setOffset(0, 86);
        this.physics.add.existing(this.peleador,false);
        this.peleador.body.setCollideWorldBounds(true);
        //this.timeline = this.tweens.createTimeline();
        this.fondo=this.add.image(650, 320,"fondo_2");
        this.fondo.setDepth(0);
        this.fondo.setDisplaySize(1300,640);

        /*LAPIDAS*/
        
        this.lapida = this.physics.add.image(850, 56, 'lapida').setScale(1.4);
        this.lapida.setDepth(1);
        this.physics.add.existing(this.lapida,true);
        this.lapida.body.setCollideWorldBounds(true);
        this.lapida.body.setImmovable(true);

        this.physics.add.collider(this.peleador, this.lapida, () => {
            this.peleador.setVelocity(0);
        });

        this.lapida = this.physics.add.image(940, 40, 'lapida_cruz').setScale(1.4);
        this.lapida.setDepth(1);
        this.physics.add.existing(this.lapida,true);
        this.lapida.body.setCollideWorldBounds(true);
        this.lapida.body.setImmovable(true);

        this.physics.add.collider(this.peleador, this.lapida, () => {
            this.peleador.setVelocity(0);
        });

        this.lapida = this.physics.add.image(1030, 40, 'lapida_cruz').setScale(1.4);
        this.lapida.setDepth(1);
        this.physics.add.existing(this.lapida,true);
        this.lapida.body.setCollideWorldBounds(true);
        this.lapida.body.setImmovable(true);

        this.physics.add.collider(this.peleador, this.lapida, () => {
            this.peleador.setVelocity(0);
        });

        this.lapida = this.physics.add.image(1120, 56, 'lapida').setScale(1.4);
        this.lapida.setDepth(1);
        this.physics.add.existing(this.lapida,true);
        this.lapida.body.setCollideWorldBounds(true);
        this.lapida.body.setImmovable(true);

        this.physics.add.collider(this.peleador, this.lapida, () => {
            this.peleador.setVelocity(0);
        });

        this.lapida = this.physics.add.image(1210, 40, 'lapida_cruz').setScale(1.4);
        this.lapida.setDepth(1);
        this.physics.add.existing(this.lapida,true);
        this.lapida.body.setCollideWorldBounds(true);
        this.lapida.body.setImmovable(true);

        this.physics.add.collider(this.peleador, this.lapida, () => {
            this.peleador.setVelocity(0);
        });

        /*REJAS*/

        /*this.reja = this.physics.add.image(39, 110, 'reja').setScale(1.4);
        this.reja.setDepth(2);
        this.physics.add.existing(this.reja,true);
        this.reja.body.setCollideWorldBounds(true);
        this.reja.body.setImmovable(true);

        this.physics.add.collider(this.peleador, this.reja, () => {
            this.peleador.setVelocity(0);
        });

        this.reja = this.physics.add.image(113, 110, 'reja').setScale(1.4);
        this.reja.setDepth(2);
        this.physics.add.existing(this.reja,true);
        this.reja.body.setCollideWorldBounds(true);
        this.reja.body.setImmovable(true);

        this.physics.add.collider(this.peleador, this.reja, () => {
            this.peleador.setVelocity(0);
        });

        this.reja = this.physics.add.image(187, 110, 'reja').setScale(1.4);
        this.reja.setDepth(2);
        this.physics.add.existing(this.reja,true);
        this.reja.body.setCollideWorldBounds(true);
        this.reja.body.setImmovable(true);

        this.physics.add.collider(this.peleador, this.reja, () => {
            this.peleador.setVelocity(0);
        });

        this.reja = this.physics.add.image(261, 110, 'reja').setScale(1.4);
        this.reja.setDepth(2);
        this.physics.add.existing(this.reja,true);
        this.reja.body.setCollideWorldBounds(true);
        this.reja.body.setImmovable(true);

        this.physics.add.collider(this.peleador, this.reja, () => {
            this.peleador.setVelocity(0);
        });

        this.reja = this.physics.add.image(335, 110, 'reja').setScale(1.4);
        this.reja.setDepth(2);
        this.physics.add.existing(this.reja,true);
        this.reja.body.setCollideWorldBounds(true);
        this.reja.body.setImmovable(true);

        this.physics.add.collider(this.peleador, this.reja, () => {
            this.peleador.setVelocity(0);
        });

        this.reja = this.physics.add.image(409, 110, 'reja').setScale(1.4);
        this.reja.setDepth(2);
        this.physics.add.existing(this.reja,true);
        this.reja.body.setCollideWorldBounds(true);
        this.reja.body.setImmovable(true);

        this.physics.add.collider(this.peleador, this.reja, () => {
            this.peleador.setVelocity(0);
        });

        this.reja = this.physics.add.image(483, 110, 'reja').setScale(1.4);
        this.reja.setDepth(2);
        this.physics.add.existing(this.reja,true);
        this.reja.body.setCollideWorldBounds(true);
        this.reja.body.setImmovable(true);

        this.physics.add.collider(this.peleador, this.reja, () => {
            this.peleador.setVelocity(0);
        });

        this.reja = this.physics.add.image(557, 110, 'reja').setScale(1.4);
        this.reja.setDepth(2);
        this.physics.add.existing(this.reja,true);
        this.reja.body.setCollideWorldBounds(true);
        this.reja.body.setImmovable(true);

        this.physics.add.collider(this.peleador, this.reja, () => {
            this.peleador.setVelocity(0);
        });

        this.reja = this.physics.add.image(631, 110, 'reja').setScale(1.4);
        this.reja.setDepth(2);
        this.physics.add.existing(this.reja,true);
        this.reja.body.setCollideWorldBounds(true);
        this.reja.body.setImmovable(true);

        this.physics.add.collider(this.peleador, this.reja, () => {
            this.peleador.setVelocity(0);
        });

        this.reja = this.physics.add.image(705, 110, 'reja').setScale(1.4);
        this.reja.setDepth(2);
        this.physics.add.existing(this.reja,true);
        this.reja.body.setCollideWorldBounds(true);
        this.reja.body.setImmovable(true);

        this.physics.add.collider(this.peleador, this.reja, () => {
            this.peleador.setVelocity(0);
        });

        this.reja = this.physics.add.image(779, 110, 'reja').setScale(1.4);
        this.reja.setDepth(2);
        this.physics.add.existing(this.reja,true);
        this.reja.body.setCollideWorldBounds(true);
        this.reja.body.setImmovable(true);

        this.physics.add.collider(this.peleador, this.reja, () => {
            this.peleador.setVelocity(0);
        });*/

        this.reja = this.physics.add.image(778, 110, 'reja').setScale(1.4);
        this.reja.setDepth(6);
        //this.reja.body.setSize(53, 15);
        //this.reja.body.setOffset(0, 47);
        this.physics.add.existing(this.reja,true);
        this.reja.body.setCollideWorldBounds(true);
        this.reja.body.setImmovable(true);

        this.physics.add.collider(this.peleador, this.reja, () => {
            this.peleador.setVelocity(0);
        });

        this.reja = this.physics.add.image(778, 30, 'reja').setScale(1.4);
        this.reja.setDepth(6);
        //this.reja.body.setSize(53, 50);
        //this.reja.body.setOffset(0, 15);
        this.physics.add.existing(this.reja,true);
        this.reja.body.setCollideWorldBounds(true);
        this.reja.body.setImmovable(true);

        this.physics.add.collider(this.peleador, this.reja, () => {
            this.peleador.setVelocity(0);
        });

        this.reja = this.physics.add.image(850, 110, 'reja').setScale(1.4);
        this.reja.setDepth(2);
        this.physics.add.existing(this.reja,true);
        this.reja.body.setCollideWorldBounds(true);
        this.reja.body.setImmovable(true);

        this.physics.add.collider(this.peleador, this.reja, () => {
            this.peleador.setVelocity(0);
        });

        this.reja = this.physics.add.image(925, 110, 'reja').setScale(1.4);
        this.reja.setDepth(2);
        this.physics.add.existing(this.reja,true);
        this.reja.body.setCollideWorldBounds(true);
        this.reja.body.setImmovable(true);

        this.physics.add.collider(this.peleador, this.reja, () => {
            this.peleador.setVelocity(0);
        });

        this.reja = this.physics.add.image(999, 110, 'reja').setScale(1.4);
        this.reja.setDepth(2);
        this.physics.add.existing(this.reja,true);
        this.reja.body.setCollideWorldBounds(true);
        this.reja.body.setImmovable(true);

        this.physics.add.collider(this.peleador, this.reja, () => {
            this.peleador.setVelocity(0);
        });

        this.reja = this.physics.add.image(1073, 110, 'reja').setScale(1.4);
        this.reja.setDepth(2);
        this.physics.add.existing(this.reja,true);
        this.reja.body.setCollideWorldBounds(true);
        this.reja.body.setImmovable(true);

        this.physics.add.collider(this.peleador, this.reja, () => {
            this.peleador.setVelocity(0);
        });

        this.reja = this.physics.add.image(1147, 110, 'reja').setScale(1.4);
        this.reja.setDepth(2);
        this.physics.add.existing(this.reja,true);
        this.reja.body.setCollideWorldBounds(true);
        this.reja.body.setImmovable(true);

        this.physics.add.collider(this.peleador, this.reja, () => {
            this.peleador.setVelocity(0);
        });

        this.reja = this.physics.add.image(1221, 110, 'reja').setScale(1.4);
        this.reja.setDepth(2);
        this.physics.add.existing(this.reja,true);
        this.reja.body.setCollideWorldBounds(true);
        this.reja.body.setImmovable(true);

        this.physics.add.collider(this.peleador, this.reja, () => {
            this.peleador.setVelocity(0);
        });

        this.reja = this.physics.add.image(1295, 110, 'reja').setScale(1.4);
        this.reja.setDepth(2);
        this.physics.add.existing(this.reja,true);
        this.reja.body.setCollideWorldBounds(true);
        this.reja.body.setImmovable(true);

        this.physics.add.collider(this.peleador, this.reja, () => {
            this.peleador.setVelocity(0);
        });

        /*REJAS 2*/

        /*this.reja = this.physics.add.image(39, 520, 'reja').setScale(1.4);
        this.reja.setDepth(6);
        this.reja.body.setSize(53, 15);
        this.reja.body.setOffset(0, 47);
        this.physics.add.existing(this.reja,true);
        this.reja.body.setCollideWorldBounds(true);
        this.reja.body.setImmovable(true);

        this.physics.add.collider(this.peleador, this.reja, () => {
            this.peleador.setVelocity(0);
        });

        this.reja = this.physics.add.image(113, 520, 'reja').setScale(1.4);
        this.reja.setDepth(6);
        this.reja.body.setSize(53, 15);
        this.reja.body.setOffset(0, 47);
        this.physics.add.existing(this.reja,true);
        this.reja.body.setCollideWorldBounds(true);
        this.reja.body.setImmovable(true);

        this.physics.add.collider(this.peleador, this.reja, () => {
            this.peleador.setVelocity(0);
        });

        this.reja = this.physics.add.image(187, 520, 'reja').setScale(1.4);
        this.reja.setDepth(6);
        this.reja.body.setSize(53, 15);
        this.reja.body.setOffset(0, 47);
        this.physics.add.existing(this.reja,true);
        this.reja.body.setCollideWorldBounds(true);
        this.reja.body.setImmovable(true);

        this.physics.add.collider(this.peleador, this.reja, () => {
            this.peleador.setVelocity(0);
        });

        this.reja = this.physics.add.image(261, 520, 'reja').setScale(1.4);
        this.reja.setDepth(6);
        this.reja.body.setSize(53, 15);
        this.reja.body.setOffset(0, 47);
        this.physics.add.existing(this.reja,true);
        this.reja.body.setCollideWorldBounds(true);
        this.reja.body.setImmovable(true);

        this.physics.add.collider(this.peleador, this.reja, () => {
            this.peleador.setVelocity(0);
        });

        this.reja = this.physics.add.image(335, 520, 'reja').setScale(1.4);
        this.reja.setDepth(6);
        this.reja.body.setSize(53, 15);
        this.reja.body.setOffset(0, 47);
        this.physics.add.existing(this.reja,true);
        this.reja.body.setCollideWorldBounds(true);
        this.reja.body.setImmovable(true);

        this.physics.add.collider(this.peleador, this.reja, () => {
            this.peleador.setVelocity(0);
        });

        this.reja = this.physics.add.image(409, 520, 'reja').setScale(1.4);
        this.reja.setDepth(6);
        this.reja.body.setSize(53, 15);
        this.reja.body.setOffset(0, 47);
        this.physics.add.existing(this.reja,true);
        this.reja.body.setCollideWorldBounds(true);
        this.reja.body.setImmovable(true);

        this.physics.add.collider(this.peleador, this.reja, () => {
            this.peleador.setVelocity(0);
        });

        this.reja = this.physics.add.image(483, 520, 'reja').setScale(1.4);
        this.reja.setDepth(6);
        this.reja.body.setSize(53, 15);
        this.reja.body.setOffset(0, 47);
        this.physics.add.existing(this.reja,true);
        this.reja.body.setCollideWorldBounds(true);
        this.reja.body.setImmovable(true);

        this.physics.add.collider(this.peleador, this.reja, () => {
            this.peleador.setVelocity(0);
        });

        this.reja = this.physics.add.image(557, 520, 'reja').setScale(1.4);
        this.reja.setDepth(6);
        this.reja.body.setSize(53, 15);
        this.reja.body.setOffset(0, 47);
        this.physics.add.existing(this.reja,true);
        this.reja.body.setCollideWorldBounds(true);
        this.reja.body.setImmovable(true);

        this.physics.add.collider(this.peleador, this.reja, () => {
            this.peleador.setVelocity(0);
        });

        this.reja = this.physics.add.image(631, 520, 'reja').setScale(1.4);
        this.reja.setDepth(6);
        this.reja.body.setSize(53, 15);
        this.reja.body.setOffset(0, 47);
        this.physics.add.existing(this.reja,true);
        this.reja.body.setCollideWorldBounds(true);
        this.reja.body.setImmovable(true);

        this.physics.add.collider(this.peleador, this.reja, () => {
            this.peleador.setVelocity(0);
        });

        this.reja = this.physics.add.image(705, 520, 'reja').setScale(1.4);
        this.reja.setDepth(6);
        this.reja.body.setSize(53, 15);
        this.reja.body.setOffset(0, 47);
        this.physics.add.existing(this.reja,true);
        this.reja.body.setCollideWorldBounds(true);
        this.reja.body.setImmovable(true);

        this.physics.add.collider(this.peleador, this.reja, () => {
            this.peleador.setVelocity(0);
        });

        this.reja = this.physics.add.image(779, 520, 'reja').setScale(1.4);
        this.reja.setDepth(6);
        this.reja.body.setSize(53, 15);
        this.reja.body.setOffset(0, 47);
        this.physics.add.existing(this.reja,true);
        this.reja.body.setCollideWorldBounds(true);
        this.reja.body.setImmovable(true);

        this.physics.add.collider(this.peleador, this.reja, () => {
            this.peleador.setVelocity(0);
        });*/
        this.reja = this.physics.add.image(778, 520, 'reja').setScale(1.4);
        this.reja.setDepth(6);
        this.reja.body.setSize(53, 15);
        this.reja.body.setOffset(0, 47);
        this.physics.add.existing(this.reja,true);
        this.reja.body.setCollideWorldBounds(true);
        this.reja.body.setImmovable(true);

        this.physics.add.collider(this.peleador, this.reja, () => {
            this.peleador.setVelocity(0);
        });

        this.reja = this.physics.add.image(778, 595, 'reja').setScale(1.4);
        this.reja.setDepth(6);
        this.reja.body.setSize(53, 50);
        this.reja.body.setOffset(0, 15);
        this.physics.add.existing(this.reja,true);
        this.reja.body.setCollideWorldBounds(true);
        this.reja.body.setImmovable(true);

        this.physics.add.collider(this.peleador, this.reja, () => {
            this.peleador.setVelocity(0);
        });

        this.reja = this.physics.add.image(851, 520, 'reja').setScale(1.4);
        this.reja.setDepth(6);
        this.reja.body.setSize(53, 15);
        this.reja.body.setOffset(0, 47);
        this.physics.add.existing(this.reja,true);
        this.reja.body.setCollideWorldBounds(true);
        this.reja.body.setImmovable(true);

        this.physics.add.collider(this.peleador, this.reja, () => {
            this.peleador.setVelocity(0);
        });

        this.reja = this.physics.add.image(925, 520, 'reja').setScale(1.4);
        this.reja.setDepth(6);
        this.reja.body.setSize(53, 15);
        this.reja.body.setOffset(0, 47);
        this.physics.add.existing(this.reja,true);
        this.reja.body.setCollideWorldBounds(true);
        this.reja.body.setImmovable(true);

        this.physics.add.collider(this.peleador, this.reja, () => {
            this.peleador.setVelocity(0);
        });

        this.reja = this.physics.add.image(999, 520, 'reja').setScale(1.4);
        this.reja.setDepth(6);
        this.reja.body.setSize(53, 15);
        this.reja.body.setOffset(0, 47);
        this.physics.add.existing(this.reja,true);
        this.reja.body.setCollideWorldBounds(true);
        this.reja.body.setImmovable(true);

        this.physics.add.collider(this.peleador, this.reja, () => {
            this.peleador.setVelocity(0);
        });

        this.reja = this.physics.add.image(1073, 520, 'reja').setScale(1.4);
        this.reja.setDepth(6);
        this.reja.body.setSize(53, 15);
        this.reja.body.setOffset(0, 47);
        this.physics.add.existing(this.reja,true);
        this.reja.body.setCollideWorldBounds(true);
        this.reja.body.setImmovable(true);

        this.physics.add.collider(this.peleador, this.reja, () => {
            this.peleador.setVelocity(0);
        });

        this.reja = this.physics.add.image(1147, 520, 'reja').setScale(1.4);
        this.reja.setDepth(6);
        this.reja.body.setSize(53, 15);
        this.reja.body.setOffset(0, 47);
        this.physics.add.existing(this.reja,true);
        this.reja.body.setCollideWorldBounds(true);
        this.reja.body.setImmovable(true);

        this.physics.add.collider(this.peleador, this.reja, () => {
            this.peleador.setVelocity(0);
        });

        this.reja = this.physics.add.image(1221, 520, 'reja').setScale(1.4);
        this.reja.setDepth(6);
        this.reja.body.setSize(53, 15);
        this.reja.body.setOffset(0, 47);
        this.physics.add.existing(this.reja,true);
        this.reja.body.setCollideWorldBounds(true);
        this.reja.body.setImmovable(true);

        this.physics.add.collider(this.peleador, this.reja, () => {
            this.peleador.setVelocity(0);
        });

        this.reja = this.physics.add.image(1295, 520, 'reja').setScale(1.4);
        this.reja.setDepth(6);
        this.reja.body.setSize(53, 15);
        this.reja.body.setOffset(0, 47);
        this.physics.add.existing(this.reja,true);
        this.reja.body.setCollideWorldBounds(true);
        this.reja.body.setImmovable(true);

        this.physics.add.collider(this.peleador, this.reja, () => {
            this.peleador.setVelocity(0);
        });
        

        /*LAPIDAS 2*/
        
        this.lapida = this.physics.add.image(850, 584, 'lapida').setScale(1.4);
        this.lapida.setDepth(7);
        this.physics.add.existing(this.lapida,true);
        this.lapida.body.setCollideWorldBounds(true);
        this.lapida.body.setImmovable(true);

        this.physics.add.collider(this.peleador, this.lapida, () => {
            this.peleador.setVelocity(0);
        });

        this.lapida = this.physics.add.image(940, 573, 'lapida_cruz').setScale(1.4);
        this.lapida.setDepth(7);
        /*this.physics.add.existing(this.lapida,true);
        this.lapida.body.setCollideWorldBounds(true);
        this.lapida.body.setImmovable(true);

        this.physics.add.collider(this.peleador, this.lapida, () => {
            this.peleador.setVelocity(0);
        });*/

        this.lapida = this.physics.add.image(1030, 584, 'lapida').setScale(1.4);
        this.lapida.setDepth(7);
        this.physics.add.existing(this.lapida,true);
        this.lapida.body.setCollideWorldBounds(true);
        this.lapida.body.setImmovable(true);

        this.physics.add.collider(this.peleador, this.lapida, () => {
            this.peleador.setVelocity(0);
        });

        this.lapida = this.physics.add.image(1120, 584, 'lapida').setScale(1.4);
        this.lapida.setDepth(1);
        this.physics.add.existing(this.lapida,true);
        this.lapida.body.setCollideWorldBounds(true);
        this.lapida.body.setImmovable(true);

        this.physics.add.collider(this.peleador, this.lapida, () => {
            this.peleador.setVelocity(0);
        });

        this.lapida = this.physics.add.image(1210, 573, 'lapida_cruz').setScale(1.4);
        this.lapida.setDepth(1);
        /*this.physics.add.existing(this.lapida,true);
        this.lapida.body.setCollideWorldBounds(true);
        this.lapida.body.setImmovable(true);

        this.physics.add.collider(this.peleador, this.lapida, () => {
            this.peleador.setVelocity(0);
        });*/
        
        this.arbol = this.physics.add.image(900, 265, 'ArbolSeco').setScale(2.8);
        this.arbol.setDepth(4);
        this.reja.body.setSize(60, 30);
        this.reja.body.setOffset(0, 47);
        this.physics.add.existing(this.arbol,true);
        this.arbol.body.setCollideWorldBounds(true);
        this.arbol.body.setImmovable(true);

        this.physics.add.collider(this.peleador, this.arbol, () => {
            this.peleador.setVelocity(0);
        });

        /*this.grupoCorazones = this.add.group({
            key: 'corazones',
            repeat: 2,
            setXY: {
                x: 320,
                y: 260,
                stepX: 70
            },
            setDepth: 1
        });*/

        /*this.grupoCorazones.children.iterate( (corazon) => {
            corazon.setScale(0.2);
        });

        this.add.tween({
            targets: this.grupoCorazones.getChildren(),
            y: 280,
            yoyo: true,
            duration: 500,
            repeat: -1,
            easy: 'Power1'
        });*/


        /*this.grupoEnemigos1 = this.physics.add.group({
            key: 'yoshi',
            repeat: 1,
            setXY: {
                x: 580,
                y: 260,
                stepX: 80
            },
            setDepth: 1,
            setCollideWorldBounds: true,
            setMass: 2
        });

        this.physics.add.collider(this.peleador, this.grupoEnemigos1, () => {
            this.peleador.setVelocity(0);
            this.grupoEnemigos1.setVelocity(0);
        });
        //this.grupoEnemigos1.body.setMass(20);

        this.grupoEnemigos2 = this.physics.add.group({
            key: 'yoshif',
            repeat: 1,
            setXY: {
                x: 1220,
                y: 60,
                stepY: 100
            },
            setDepth: 1
        });

        this.grupoEnemigos2.children.iterate( (yoshif) => {
            yoshif.flipX = 1;
        });*/
        this.flamas=this.physics.add.group({
            key:'flame',
            repeat:1,
            setXY:{
                x:50,
                y:90,
                stepY:25
            }
        });
        this.flamas.children.iterate((flama)=>{
            flama.setScale(0.3,0.3);
            flama.setDepth(1);
            flama.body.setImmovable(true);
            flama.body.setCollideWorldBounds(true);
        });
        this.physics.add.existing(this.flamas,true);
        this.flamas.body.setSize(25,60);
        this.flamas.body.setOffset(40,70);
        //llamas pilar inferior
        this.flamas1=this.physics.add.group({
            key:'flame',
            repeat:5,
            setXY:{
                x:280,
                y:300,
                stepY:35
            }
        });
        this.flamas1.children.iterate((flama1)=>{
            flama1.setScale(0.3,0.3);
            flama1.setDepth(1);
            flama1.body.setImmovable(true);
            flama1.body.setCollideWorldBounds(true);
        });
        this.physics.add.existing(this.flamas1,true);
        this.flamas1.body.setSize(25,100);
        this.flamas1.body.setOffset(270,290);
        //llamas de banqueta
        this.flamas2=this.physics.add.group({
            key:'flame',
            repeat:8,
            setXY:{
                x:300,
                y:270,
                stepX:30
            }
        });
        this.flamas2.children.iterate((flama2)=>{
            flama2.setScale(0.3,0.3);
            flama2.setDepth(1);
            flama2.body.setImmovable(true);
            flama2.body.setCollideWorldBounds(true);
        });
        this.physics.add.existing(this.flamas2,true);
        this.flamas2.body.setSize(180,28);
        this.flamas2.body.setOffset(290,260);
        //datos de cada sprite
        this.peleador.setData({
            name:'peleador',
            vidas:3,
            status:'vivo',
            ataques:0
        });
        this.physics.add.collider(this.peleador, this.flamas, () => {
            this.peleador.body.setBounce(0.7);
            this.peleador.body.setVelocityX(0);
            this.peleador.setTint(0xFF0000);
            this.peleador.setData({status:'quemandose'});
            console.log("Status del peleador:"+this.peleador.getData('status'));
            console.log("Vidas actuales del peleador:"+this.peleador.getData('vidas'));
        });
        this.physics.add.collider(this.peleador, this.flamas1, () => {
            this.peleador.body.setBounce(0.7);
            this.peleador.body.setVelocityX(0);
            this.peleador.setTint(0xFF0000);
            this.peleador.setData({status:'quemandose'});
            console.log("Status del peleador:"+this.peleador.getData('status'));
            this.peleador.data.list.vidas-=1;
            console.log("Vidas actuales del peleador:"+this.peleador.getData('vidas'));
        });
        this.physics.add.collider(this.peleador, this.flamas2, () => {
            this.peleador.body.setBounce(0.7);
            this.peleador.body.setVelocityX(0);
            this.peleador.setTint(0xFF0000);
            this.peleador.setData({status:'quemandose'});
            //this.peleador.getData('vidas')-1;
            console.log("Status del peleador:"+this.peleador.getData('status'));
            this.peleador.data.list.vidas-=1;
            console.log("Vidas actuales del peleador:"+this.peleador.getData('vidas'));
        });

    }
    
    update(time, delta) {
        const speed = 175;
        const prevVelocity = this.peleador.body.velocity.clone();
        this.peleador.body.setVelocity(0);
        if(this.peleador.data.list.vidas==0){
            this.scene.restart('Cementeriodos');
        }
        // Horizontal movement
        if (this.cursors.left.isDown) {
            this.peleador.body.setVelocityX(-100);
        } else if (this.cursors.right.isDown) {
            this.peleador.body.setVelocityX(100);
        }

        // Vertical movement
        if (this.cursors.up.isDown) {
            this.peleador.body.setVelocityY(-100);
        } else if (this.cursors.down.isDown) {
            this.peleador.body.setVelocityY(100);
        }

        // Normalize and scale the velocity so that player can't move faster along a diagonal
        this.peleador.body.velocity.normalize().scale(speed);

        if (this.cursors.left.isDown) {
            this.peleador.anims.play("pl_caminaizquierda", true);
          } else if (this.cursors.right.isDown) {
            this.peleador.anims.play("pl_caminaderecha", true);
          } else if (this.cursors.up.isDown) {
            this.peleador.anims.play("pl_caminaatras", true);
          } else if (this.cursors.down.isDown) {
            this.peleador.anims.play("pl_caminafrente", true);
          } else {
            this.peleador.anims.stop();
        
            // If we were moving, pick and idle frame to use
            if (prevVelocity.x < 0) this.peleador.anims.play("pl_paradoizquierda", true);
            else if (prevVelocity.x > 0) this.peleador.anims.play("pl_paradoderecha", true);
            else if (prevVelocity.y < 0) this.peleador.anims.play("pl_paradoatras", true);
            else if (prevVelocity.y > 0) this.peleador.anims.play("pl_paradofrente", true);
          }
    }
}

export default Cementeriodos;