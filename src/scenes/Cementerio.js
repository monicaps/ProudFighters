class Cementerio extends Phaser.Scene{
    constructor(){
        super({
            key: "Cementerio"
        });
    }

    init() {
        console.log("Escena Cementerio");
    }
    
    preload() {
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

        //LAPIDAS/

        this.lapida = this.physics.add.image(40, 56, 'lapida').setScale(1.4);
        this.lapida.setDepth(1);
        this.physics.add.existing(this.lapida,true);
        this.lapida.body.setCollideWorldBounds(true);
        this.lapida.body.setImmovable(true);

        this.physics.add.collider(this.peleador, this.lapida, () => {
            this.peleador.setVelocity(0);
        });

        this.lapida = this.physics.add.image(130, 40, 'lapida_cruz').setScale(1.4);
        this.lapida.setDepth(1);
        this.physics.add.existing(this.lapida,true);
        this.lapida.body.setCollideWorldBounds(true);
        this.lapida.body.setImmovable(true);

        this.physics.add.collider(this.peleador, this.lapida, () => {
            this.peleador.setVelocity(0);
        });

        this.lapida = this.physics.add.image(220, 56, 'lapida').setScale(1.4);
        this.lapida.setDepth(1);
        this.physics.add.existing(this.lapida,true);
        this.lapida.body.setCollideWorldBounds(true);
        this.lapida.body.setImmovable(true);

        this.physics.add.collider(this.peleador, this.lapida, () => {
            this.peleador.setVelocity(0);
        });
        
        this.lapida = this.physics.add.image(310, 56, 'lapida').setScale(1.4);
        this.lapida.setDepth(1);
        this.physics.add.existing(this.lapida,true);
        this.lapida.body.setCollideWorldBounds(true);
        this.lapida.body.setImmovable(true);

        this.physics.add.collider(this.peleador, this.lapida, () => {
            this.peleador.setVelocity(0);
        });

        this.lapida = this.physics.add.image(400, 40, 'lapida_cruz').setScale(1.4);
        this.lapida.setDepth(1);
        this.physics.add.existing(this.lapida,true);
        this.lapida.body.setCollideWorldBounds(true);
        this.lapida.body.setImmovable(true);

        this.physics.add.collider(this.peleador, this.lapida, () => {
            this.peleador.setVelocity(0);
        });
        
        this.lapida = this.physics.add.image(490, 56, 'lapida').setScale(1.4);
        this.lapida.setDepth(1);
        this.physics.add.existing(this.lapida,true);
        this.lapida.body.setCollideWorldBounds(true);
        this.lapida.body.setImmovable(true);

        this.physics.add.collider(this.peleador, this.lapida, () => {
            this.peleador.setVelocity(0);
        });

        this.lapida = this.physics.add.image(580, 40, 'lapida_cruz').setScale(1.4);
        this.lapida.setDepth(1);
        this.physics.add.existing(this.lapida,true);
        this.lapida.body.setCollideWorldBounds(true);
        this.lapida.body.setImmovable(true);

        this.physics.add.collider(this.peleador, this.lapida, () => {
            this.peleador.setVelocity(0);
        });
        
        this.lapida = this.physics.add.image(670, 56, 'lapida').setScale(1.4);
        this.lapida.setDepth(1);
        this.physics.add.existing(this.lapida,true);
        this.lapida.body.setCollideWorldBounds(true);
        this.lapida.body.setImmovable(true);

        this.physics.add.collider(this.peleador, this.lapida, () => {
            this.peleador.setVelocity(0);
        });

        this.lapida = this.physics.add.image(760, 56, 'lapida').setScale(1.4);
        this.lapida.setDepth(1);
        this.physics.add.existing(this.lapida,true);
        this.lapida.body.setCollideWorldBounds(true);
        this.lapida.body.setImmovable(true);

        this.physics.add.collider(this.peleador, this.lapida, () => {
            this.peleador.setVelocity(0);
        });
        
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

        //REJAS/

        this.reja = this.physics.add.image(39, 110, 'reja').setScale(1.4);
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
        });
        this.reja = this.physics.add.image(853, 110, 'reja').setScale(1.4);
        this.reja.setDepth(2);
        this.physics.add.existing(this.reja,true);
        this.reja.body.setCollideWorldBounds(true);
        this.reja.body.setImmovable(true);

        this.physics.add.collider(this.peleador, this.reja, () => {
            this.peleador.setVelocity(0);
        });

        this.reja = this.physics.add.image(927, 110, 'reja').setScale(1.4);
        this.reja.setDepth(2);
        this.physics.add.existing(this.reja,true);
        this.reja.body.setCollideWorldBounds(true);
        this.reja.body.setImmovable(true);

        this.physics.add.collider(this.peleador, this.reja, () => {
            this.peleador.setVelocity(0);
        });

        this.reja = this.physics.add.image(1001, 110, 'reja').setScale(1.4);
        this.reja.setDepth(2);
        this.physics.add.existing(this.reja,true);
        this.reja.body.setCollideWorldBounds(true);
        this.reja.body.setImmovable(true);

        this.physics.add.collider(this.peleador, this.reja, () => {
            this.peleador.setVelocity(0);
        });

        this.reja = this.physics.add.image(1075, 110, 'reja').setScale(1.4);
        this.reja.setDepth(2);
        this.physics.add.existing(this.reja,true);
        this.reja.body.setCollideWorldBounds(true);
        this.reja.body.setImmovable(true);

        this.physics.add.collider(this.peleador, this.reja, () => {
            this.peleador.setVelocity(0);
        });

        this.reja = this.physics.add.image(1149, 110, 'reja').setScale(1.4);
        this.reja.setDepth(2);
        this.physics.add.existing(this.reja,true);
        this.reja.body.setCollideWorldBounds(true);
        this.reja.body.setImmovable(true);

        this.physics.add.collider(this.peleador, this.reja, () => {
            this.peleador.setVelocity(0);
        });

        this.reja = this.physics.add.image(1223, 110, 'reja').setScale(1.4);
        this.reja.setDepth(2);
        this.physics.add.existing(this.reja,true);
        this.reja.body.setCollideWorldBounds(true);
        this.reja.body.setImmovable(true);

        this.physics.add.collider(this.peleador, this.reja, () => {
            this.peleador.setVelocity(0);
        });

        this.reja = this.physics.add.image(1297, 110, 'reja').setScale(1.4);
        this.reja.setDepth(2);
        this.physics.add.existing(this.reja,true);
        this.reja.body.setCollideWorldBounds(true);
        this.reja.body.setImmovable(true);

        this.physics.add.collider(this.peleador, this.reja, () => {
            this.peleador.setVelocity(0);
        });

        //REJAS 2/

        this.reja = this.physics.add.image(39, 520, 'reja').setScale(1.4);
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
        });
        this.reja = this.physics.add.image(853, 520, 'reja').setScale(1.4);
        this.reja.setDepth(6);
        this.reja.body.setSize(53, 15);
        this.reja.body.setOffset(0, 47);
        this.physics.add.existing(this.reja,true);
        this.reja.body.setCollideWorldBounds(true);
        this.reja.body.setImmovable(true);

        this.physics.add.collider(this.peleador, this.reja, () => {
            this.peleador.setVelocity(0);
        });

        this.reja = this.physics.add.image(927, 520, 'reja').setScale(1.4);
        this.reja.setDepth(6);
        this.reja.body.setSize(53, 15);
        this.reja.body.setOffset(0, 47);
        this.physics.add.existing(this.reja,true);
        this.reja.body.setCollideWorldBounds(true);
        this.reja.body.setImmovable(true);

        this.physics.add.collider(this.peleador, this.reja, () => {
            this.peleador.setVelocity(0);
        });

        this.reja = this.physics.add.image(1001, 520, 'reja').setScale(1.4);
        this.reja.setDepth(6);
        this.reja.body.setSize(53, 15);
        this.reja.body.setOffset(0, 47);
        this.physics.add.existing(this.reja,true);
        this.reja.body.setCollideWorldBounds(true);
        this.reja.body.setImmovable(true);

        this.physics.add.collider(this.peleador, this.reja, () => {
            this.peleador.setVelocity(0);
        });

        this.reja = this.physics.add.image(1075, 520, 'reja').setScale(1.4);
        this.reja.setDepth(6);
        this.reja.body.setSize(53, 15);
        this.reja.body.setOffset(0, 47);
        this.physics.add.existing(this.reja,true);
        this.reja.body.setCollideWorldBounds(true);
        this.reja.body.setImmovable(true);

        this.physics.add.collider(this.peleador, this.reja, () => {
            this.peleador.setVelocity(0);
        });

        this.reja = this.physics.add.image(1149, 520, 'reja').setScale(1.4);
        this.reja.setDepth(6);
        this.reja.body.setSize(53, 15);
        this.reja.body.setOffset(0, 47);
        this.physics.add.existing(this.reja,true);
        this.reja.body.setCollideWorldBounds(true);
        this.reja.body.setImmovable(true);

        this.physics.add.collider(this.peleador, this.reja, () => {
            this.peleador.setVelocity(0);
        });

        this.reja = this.physics.add.image(1223, 520, 'reja').setScale(1.4);
        this.reja.setDepth(6);
        this.reja.body.setSize(53, 15);
        this.reja.body.setOffset(0, 47);
        this.physics.add.existing(this.reja,true);
        this.reja.body.setCollideWorldBounds(true);
        this.reja.body.setImmovable(true);

        this.physics.add.collider(this.peleador, this.reja, () => {
            this.peleador.setVelocity(0);
        });

        this.reja = this.physics.add.image(1297, 520, 'reja').setScale(1.4);
        this.reja.setDepth(6);
        this.reja.body.setSize(53, 15);
        this.reja.body.setOffset(0, 47);
        this.physics.add.existing(this.reja,true);
        this.reja.body.setCollideWorldBounds(true);
        this.reja.body.setImmovable(true);

        this.physics.add.collider(this.peleador, this.reja, () => {
            this.peleador.setVelocity(0);
        });

        /LAPIDAS 2/

        this.lapida = this.physics.add.image(40, 573, 'lapida_cruz').setScale(1.4);
        this.lapida.setDepth(7);
        /*this.physics.add.existing(this.lapida,true);
        this.lapida.body.setCollideWorldBounds(true);
        this.lapida.body.setImmovable(true);

        this.physics.add.collider(this.peleador, this.lapida, () => {
            this.peleador.setVelocity(0);
        });*/

        this.lapida = this.physics.add.image(130, 584, 'lapida').setScale(1.4);
        this.lapida.setDepth(7);
        this.physics.add.existing(this.lapida,true);
        this.lapida.body.setCollideWorldBounds(true);
        this.lapida.body.setImmovable(true);

        this.physics.add.collider(this.peleador, this.lapida, () => {
            this.peleador.setVelocity(0);
        });

        this.lapida = this.physics.add.image(220, 584, 'lapida').setScale(1.4);
        this.lapida.setDepth(7);
        this.physics.add.existing(this.lapida,true);
        this.lapida.body.setCollideWorldBounds(true);
        this.lapida.body.setImmovable(true);

        this.physics.add.collider(this.peleador, this.lapida, () => {
            this.peleador.setVelocity(0);
        });
        
        this.lapida = this.physics.add.image(310, 584, 'lapida').setScale(1.4);
        this.lapida.setDepth(7);
        this.physics.add.existing(this.lapida,true);
        this.lapida.body.setCollideWorldBounds(true);
        this.lapida.body.setImmovable(true);

        this.physics.add.collider(this.peleador, this.lapida, () => {
            this.peleador.setVelocity(0);
        });

        this.lapida = this.physics.add.image(400, 573, 'lapida_cruz').setScale(1.4);
        this.lapida.setDepth(7);
        /*this.physics.add.existing(this.lapida,true);
        this.lapida.body.setCollideWorldBounds(true);
        this.lapida.body.setImmovable(true);

        this.physics.add.collider(this.peleador, this.lapida, () => {
            this.peleador.setVelocity(0);
        });*/
        
        this.lapida = this.physics.add.image(490, 584, 'lapida').setScale(1.4);
        this.lapida.setDepth(7);
        this.physics.add.existing(this.lapida,true);
        this.lapida.body.setCollideWorldBounds(true);
        this.lapida.body.setImmovable(true);

        this.physics.add.collider(this.peleador, this.lapida, () => {
            this.peleador.setVelocity(0);
        });

        this.lapida = this.physics.add.image(580, 573, 'lapida_cruz').setScale(1.4);
        this.lapida.setDepth(7);
        /*this.physics.add.existing(this.lapida,true);
        this.lapida.body.setCollideWorldBounds(true);
        this.lapida.body.setImmovable(true);

        this.physics.add.collider(this.peleador, this.lapida, () => {
            this.peleador.setVelocity(0);
        });*/
        
        this.lapida = this.physics.add.image(670, 573, 'lapida_cruz').setScale(1.4);
        this.lapida.setDepth(7);
        /*9this.physics.add.existing(this.lapida,true);
        this.lapida.body.setCollideWorldBounds(true);
        this.lapida.body.setImmovable(true);

        this.physics.add.collider(this.peleador, this.lapida, () => {
            this.peleador.setVelocity(0);
        });*/

        this.lapida = this.physics.add.image(760, 573, 'lapida_cruz').setScale(1.4);
        this.lapida.setDepth(7);
        /*this.physics.add.existing(this.lapida,true);
        this.lapida.body.setCollideWorldBounds(true);
        this.lapida.body.setImmovable(true);

        this.physics.add.collider(this.peleador, this.lapida, () => {
            this.peleador.setVelocity(0);
        });*/
        
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

        this.pase=this.physics.add.image(1300,300,"roca").setScale(0.08,0.08).setDepth(1).setTint(0x0000FF);
        this.physics.add.existing(this.pase,true);
        this.pase.body.setCollideWorldBounds(true);
        this.pase.body.setSize(100,200);
        this.pase.setVisible(false);
        this.pase.body.setOffset(1190,290);

        this.physics.add.collider(this.peleador,this.pase,()=>{
            this.peleador.body.setAccelerationX(0);
            this.peleador.body.setAccelerationY(0);
            this.scene.sleep("Cementerio");
            //this.scene.launch("Cementerio");
            this.scene.start("Cementeriodos");
        });


    }
    
    update(time, delta) {
        const speed = 175;
        const prevVelocity = this.peleador.body.velocity.clone();
        this.peleador.body.setVelocity(0);

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

export default Cementerio;