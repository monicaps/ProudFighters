class Mina extends Phaser.Scene{
    constructor(){
        super({
            key: "Mina"
        });
    }

    init() {
        console.log("Escena Mina");
    }
    
    preload() {
        
    }

    create(){
        this.fondo=this.add.image(640,320,"fondoAlt");
        this.fondo.setDepth(0);
        this.fondo.setDisplaySize(1500,640);       
        this.peleador=this.add.sprite(30,315,"pl").setScale(0.5);
        this.peleador.setDepth(2);
        this.physics.add.existing(this.peleador,false);
        this.peleador.body.setCollideWorldBounds(true);
        //this.peleador.body.setSize(70,100);
        this.peleador.body.setSize(72, 20);
        this.peleador.body.setOffset(0, 86);
        this.pase=this.physics.add.image(1300,300,"roca").setScale(0.08,0.08).setDepth(1).setTint(0x0000FF);
        this.physics.add.existing(this.pase,true);
        this.pase.body.setCollideWorldBounds(true);
        this.pase.body.setSize(100,200);
        this.pase.setVisible(false);
        this.pase.body.setOffset(1190,290);
        this.cursors = this.input.keyboard.createCursorKeys();
        
        this.grupoArboles = this.physics.add.group({
            key: 'estaca',
            repeat: 3,
            setXY: {
                x: 20,
                y: 40,
                stepX:350
            }
        });
        this.grupoArboles.children.iterate( (estaca) => {
            estaca.setScale(0.5,0.5);
            estaca.setDepth(1);
            estaca.body.setMass(10000);
            estaca.body.setCollideWorldBounds(true);
        });
        this.physics.add.existing(this.grupoArboles,true);
        this.grupoArboles.body.setSize(1300,70);

        this.grupoArboles2 = this.physics.add.group({
            key: 'estala',
            repeat: 3,
            setXY: {
                x: 40,
                y: 600,
                stepX:350
            }
        });
        this.grupoArboles2.children.iterate( (estala2) => {
            estala2.setScale(0.5,0.5);
            estala2.setDepth(1);
            estala2.body.setMass(10000);
            estala2.body.setCollideWorldBounds(true);
        });
        this.physics.add.existing(this.grupoArboles2,true);
        this.grupoArboles2.body.setSize(25,230);
        this.grupoArboles2.body.setOffset(10,350);

        this.grupoArboles3 = this.physics.add.group({
            key: 'roca',
            repeat: 13,
            setXY: {
                x: 25,
                y: 370,
                stepY:15
            }
        });
        this.grupoArboles3.children.iterate( (roca3) => {
            roca3.setScale(0.1,0.1);
            roca3.setDepth(1);
            roca3.setTint(0xFFFF00);
            roca3.body.setMass(10000);
            roca3.body.setCollideWorldBounds(true);
        });
        this.physics.add.existing(this.grupoArboles3,true);
        this.grupoArboles3.body.setSize(1300,70);
        this.grupoArboles3.body.setOffset(10,570);

        this.grupoRocas5 = this.physics.add.group({
            key: 'roca',
            repeat: 9,
            setXY: {
                x: 900,
                y: 300,
                stepX:20
            },
            stepY:40
        });
        this.grupoRocas5.children.iterate( (roca5) => {
            roca5.setScale(0.1,0.1);
            roca5.setDepth(1);
            roca5.body.setMass(10000);
            roca5.body.setCollideWorldBounds(true);
        });
        this.physics.add.existing(this.grupoRocas5,true);
        this.grupoRocas5.body.setSize(200,30);
        this.grupoRocas5.body.setOffset(885,280);

        this.grupoRocas6 = this.physics.add.group({
            key: 'roca',
            repeat: 12,
            setXY: {
                x: 890,
                y: 300,
                stepY:15
            }
        });
        this.grupoRocas6.children.iterate( (roca6) => {
            roca6.setScale(0.08,0.08);
            roca6.setDepth(1);
            roca6.body.setMass(10000);
            roca6.body.setCollideWorldBounds(true);
        });
        this.physics.add.existing(this.grupoRocas6,true);
        this.grupoRocas6.body.setSize(20,200);
        this.grupoRocas6.body.setOffset(880,290);

        this.grupoRocas = this.physics.add.group({
            key: 'roca',
            repeat: 7,
            setXY: {
                x: 200,
                y: 300,
                stepX:15
            }  
        });
        this.grupoRocas.children.iterate( (roca) => {
            roca.setScale(0.08,0.08);
            roca.setDepth(1);
            roca.setTint(0x4b3621);
            roca.body.setMass(10000);
            roca.body.setCollideWorldBounds(true);
        });
        this.physics.add.existing(this.grupoRocas,true);
        this.grupoRocas.body.setSize(130,25);
        this.grupoRocas.body.setOffset(190,285);

        this.grupoRocasA = this.physics.add.group({
            key: 'roca',
            repeat: 54,
            setXY: {
                x: 50,
                y: 150,
                stepX:15
            }  
        });
        this.grupoRocasA.children.iterate( (rocaA) => {
            rocaA.setScale(0.08,0.08);
            rocaA.setDepth(1);
            rocaA.setTint(0xFFFF00);
            rocaA.body.setMass(10000);
            rocaA.body.setCollideWorldBounds(true);
        });
        this.physics.add.existing(this.grupoRocasA,true);
        this.grupoRocasA.body.setSize(830,22);
        this.grupoRocasA.body.setOffset(40,140);

        this.grupoRocasA1 = this.physics.add.group({
            key: 'roca',
            repeat: 7,
            setXY: {
                x: 200,
                y: 450,
                stepX:15
            }  
        });
        this.grupoRocasA1.children.iterate( (rocaA1) => {
            rocaA1.setScale(0.08,0.08);
            rocaA1.setDepth(1);
            rocaA1.setTint(0xFFFF00);
            rocaA1.body.setMass(10000);
            rocaA1.body.setCollideWorldBounds(true);
        });
        this.physics.add.existing(this.grupoRocasA1,true);
        this.grupoRocasA1.body.setSize(130,25);
        this.grupoRocasA1.body.setOffset(190,440);

        this.grupoRocas1 = this.physics.add.group({
            key: 'roca',
            repeat: 26,
            setXY: {
                x: 500,
                y: 500,
                stepX:15
            }
        });
        this.grupoRocas1.children.iterate( (roca1) => {
            roca1.setScale(0.08,0.08);
            roca1.setDepth(1);
            roca1.body.setMass(10000);
            roca1.body.setCollideWorldBounds(true);
        });
        this.physics.add.existing(this.grupoRocas1,true);
        this.grupoRocas1.body.setSize(400,20);
        this.grupoRocas1.body.setOffset(490,490);

        this.grupoRocas2 = this.physics.add.group({
            key: 'roca',
            repeat: 12,
            setXY: {
                x: 1300,
                y: 80,
                stepY:15
            }
        });
        this.grupoRocas2.children.iterate( (roca2) => {
            roca2.setScale(0.1,0.1);
            roca2.setDepth(1);
            roca2.body.setMass(10000);
            roca2.body.setCollideWorldBounds(true);
        });
        this.physics.add.existing(this.grupoRocas2,true);
        this.grupoRocas2.body.setSize(25,200);
        this.grupoRocas2.body.setOffset(1270,70);

        this.grupoRocas7 = this.physics.add.group({
            key: 'roca',
            repeat: 12,
            setXY: {
                x: 1300,
                y: 350,
                stepY:15
            }
        });
        this.grupoRocas7.children.iterate( (roca7) => {
            roca7.setScale(0.1,0.1);
            roca7.setDepth(1);
            roca7.body.setMass(10000);
            roca7.body.setCollideWorldBounds(true);
        });
        this.physics.add.existing(this.grupoRocas7,true);
        this.grupoRocas7.body.setSize(25,200);
        this.grupoRocas7.body.setOffset(1270,340);

        this.grupoRocas3 = this.physics.add.group({
            key: 'roca',
            repeat: 24,
            setXY: {
                x: 1100,
                y: 200,
                stepY:15
            }
        });
        this.grupoRocas3.children.iterate( (roca3) => {
            roca3.setScale(0.08,0.08);
            roca3.setDepth(1);
            roca3.body.setMass(10000);
            roca3.body.setCollideWorldBounds(true);
        });
        this.physics.add.existing(this.grupoRocas3,true);
        this.grupoRocas3.body.setSize(22,380);
        this.grupoRocas3.body.setOffset(1090,190);

        this.grupoRocasLargas = this.physics.add.group({
            key: 'roca',
            repeat: 17,
            setXY: {
                x: 450,
                y: 350,
                stepX:15
            }
        });
        this.grupoRocasLargas.children.iterate( (rocaL) => {
            rocaL.setScale(0.08,0.08);
            rocaL.setDepth(1);
            rocaL.body.setMass(10000);
            rocaL.body.setCollideWorldBounds(true);
        });
        this.physics.add.existing(this.grupoRocasLargas,true);
        this.grupoRocasLargas.body.setSize(265,25);
        this.grupoRocasLargas.body.setOffset(440,340);

        this.grupoRocasLargas1 = this.physics.add.group({
            key: 'roca',
            repeat: 17,
            setXY: {
                x: 450,
                y: 250,
                stepX:15
            }
        });
        this.grupoRocasLargas1.children.iterate( (rocaL1) => {
            rocaL1.setScale(0.08,0.08);
            rocaL1.setDepth(1);
            rocaL1.body.setMass(10000);
            rocaL1.body.setCollideWorldBounds(true);
        });
        this.physics.add.existing(this.grupoRocasLargas1,true);
        this.grupoRocasLargas1.body.setSize(265,25);
        this.grupoRocasLargas1.body.setOffset(440,240);

        this.grupoRocasCalientes = this.physics.add.group({
            key: 'roca',
            repeat: 5,
            setXY: {
                x: 450,
                y: 350,
                stepY:15
            }
        });
        this.grupoRocasCalientes.children.iterate( (rocaC) => {
            rocaC.setScale(0.08,0.08);
            rocaC.setDepth(1);
            rocaC.setTint(0x4b3621);
            rocaC.body.setMass(10000);
            rocaC.body.setCollideWorldBounds(true);
        });
        this.physics.add.existing(this.grupoRocasCalientes,true);
        this.grupoRocasCalientes.body.setSize(25,90);
        this.grupoRocasCalientes.body.setOffset(440,340);

        this.grupoRocasCalientes1 = this.physics.add.group({
            key: 'roca',
            repeat: 6,
            setXY: {
                x: 450,
                y: 150,
                stepY:15
            }
        });
        this.grupoRocasCalientes1.children.iterate( (rocaC1) => {
            rocaC1.setScale(0.08,0.08);
            rocaC1.setDepth(1);
            rocaC1.setTint(0x4b3621);
            rocaC1.body.setMass(10000);
            rocaC1.body.setCollideWorldBounds(true);
        });
        this.physics.add.existing(this.grupoRocasCalientes1,true);
        this.grupoRocasCalientes1.body.setSize(25,90);
        this.grupoRocasCalientes1.body.setOffset(440,140);
        //nuevos grupos de rocas
        this.grupoRocasA2 = this.physics.add.group({
            key: 'roca',
            repeat: 13,
            setXY: {
                x: 25,
                y: 70,
                stepY:15
            }
        });
        this.grupoRocasA2.children.iterate( (rocaA2) => {
            rocaA2.setScale(0.1,0.1);
            rocaA2.setDepth(1);
            rocaA2.setTint(0xFFFF00);
            rocaA2.body.setMass(10000);
            rocaA2.body.setCollideWorldBounds(true);
        });
        this.physics.add.existing(this.grupoRocasA2,true);
        this.grupoRocasA2.body.setSize(25,220);
        this.grupoRocasA2.body.setOffset(10,60);

        this.grupoRocasCalientes2=this.physics.add.group({
            key:'roca',
            repeat:8,
            setXY:{
                x:250,
                y:320,
                stepY:15
            }
        });
        this.grupoRocasCalientes2.children.iterate((rocaC2)=>{
            rocaC2.setScale(0.08,0.08);
            rocaC2.setDepth(1);
            rocaC2.setTint(0x4b3621);
            rocaC2.body.setMass(10000);
            rocaC2.body.setCollideWorldBounds(true);
        });
        this.physics.add.existing(this.grupoRocasCalientes2,true);
        this.grupoRocasCalientes2.body.setSize(25,145);
        this.grupoRocasCalientes2.body.setOffset(238,310);

        //Animaciones de fuego
        //flamas arriba
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
            repeat:2,
            setXY:{
                x:280,
                y:330,
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
        this.flamas1.body.setSize(25,80);
        this.flamas1.body.setOffset(270,320);
        //llamas de banqueta
        this.flamas2=this.physics.add.group({
            key:'flame',
            repeat:5,
            setXY:{
                x:900,
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
        this.flamas2.body.setOffset(890,260);
        //datos de cada sprite
        this.peleador.setData({
            name:'peleador',
            vidas:3,
            status:'vivo',
            ataques:0
        });
        //this.scene.launch('Vida',this.peleador.data.list.vidas);
        //this.scene.setVisible(true,'Vida');

        //Corazones
        this.grupoCorazones = this.physics.add.group({
            key: 'corazones',
            repeat: 2,
            setXY: {
                x: 280,
                y: 200,
                stepX: 70
            },
            setDepth: 1
        });

        this.grupoCorazones.children.iterate( (corazon) => {
            corazon.setScale(0.1);
            corazon.body.setImmovable(true);
        });

        this.add.tween({
            targets: this.grupoCorazones.getChildren(),
            y: 200,
            yoyo: true,
            duration: 500,
            repeat: -1,
            easy: 'Power1'
        });

        this.grupoCorazones1 = this.physics.add.group({
            key: 'corazones',
            repeat: 3,
            setXY: {
                x: 100,
                y: 500,
                stepX: 100
            },
            setDepth: 1
        });

        this.grupoCorazones1.children.iterate( (corazon1) => {
            corazon1.setScale(0.1);
            corazon1.body.setImmovable(true);
        });

        this.grupoCorazones2 = this.physics.add.group({
            key: 'corazones',
            repeat: 1,
            setXY: {
                x: 1200,
                y: 300,
                stepY:90
            },
            setDepth: 1
        });

        this.grupoCorazones2.children.iterate( (corazon2) => {
            corazon2.setScale(0.1);
            corazon2.body.setImmovable(true);
        });
        
        //Fisicas por grupo con el peleador

        this.physics.add.collider(this.peleador,this.grupoCorazones,()=>{
            this.grupoCorazones.getChildren()[0].destroy();
            this.peleador.data.list.vidas+=1;
            this.peleador.clearTint();
            this.peleador.data.list.status="Vivo nuevamente";
            console.log("El peleador ha recogido un corazon");
            console.log("Nuevo Status del peleador:"+this.peleador.getData('status'));
        });
        this.physics.add.collider(this.peleador,this.grupoCorazones1,()=>{
            this.grupoCorazones1.getChildren()[0].destroy();
            this.peleador.clearTint();
            this.peleador.data.list.vidas+=1;
            this.peleador.data.list.status="Vivo nuevamente";
            console.log("El peleador ha recogido un corazon");
            console.log("Nuevo Status del peleador:"+this.peleador.getData('status'));
        });
        this.physics.add.collider(this.peleador,this.grupoCorazones2,()=>{
            this.grupoCorazones2.getChildren()[0].destroy();
            this.peleador.clearTint();
            this.peleador.data.list.vidas+=1;
            this.peleador.data.list.status="Vivo nuevamente";
            console.log("El peleador ha recogido un corazon");
            console.log("Nuevo Status del peleador:"+this.peleador.getData('status'));
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
        this.physics.add.collider(this.peleador,this.grupoArboles,()=>{
            this.peleador.body.setBounce(0.07);
            this.peleador.body.setVelocityX(0);
            this.peleador.body.setVelocityY(0);
        });
        this.physics.add.collider(this.peleador,this.grupoArboles2,()=>{
            this.peleador.body.setBounce(0.07);
            this.peleador.body.setVelocityX(0);
            this.peleador.body.setVelocityY(0);
        });
        this.physics.add.collider(this.peleador,this.grupoArboles3,()=>{
            this.peleador.body.setBounce(0.07);
            this.peleador.body.setVelocityX(0);
            this.peleador.body.setVelocityY(0);
        });
        this.physics.add.collider(this.peleador,this.grupoRocas5,()=>{
            this.peleador.body.setBounce(0.07);
            this.peleador.body.setVelocityX(0);
            this.peleador.body.setVelocityY(0);
        });
        this.physics.add.collider(this.peleador,this.grupoRocas6,()=>{
            this.peleador.body.setBounce(0.07);
            this.peleador.body.setVelocityX(0);
            this.peleador.body.setVelocityY(0);
        });
        this.physics.add.collider(this.peleador,this.grupoRocas,()=>{
            this.peleador.body.setBounce(0.07);
            this.peleador.body.setAccelerationX(0);
            this.peleador.body.setAccelerationY(0);
        });
        this.physics.add.collider(this.peleador,this.grupoRocasA,()=>{
            this.peleador.body.setBounce(0.07);
            this.peleador.body.setAccelerationX(0);
            this.peleador.body.setAccelerationY(0);
        });
        this.physics.add.collider(this.peleador,this.grupoRocasA1,()=>{
            this.peleador.body.setBounce(0.07);
            this.peleador.body.setAccelerationX(0);
            this.peleador.body.setAccelerationY(0);
        });
        this.physics.add.collider(this.peleador,this.grupoRocasA2,()=>{
            this.peleador.body.setBounce(0.07);
            this.peleador.body.setAccelerationX(0);
            this.peleador.body.setAccelerationY(0);
        });
        this.physics.add.collider(this.peleador,this.grupoRocas1,()=>{
            this.peleador.body.setBounce(0.07);
            this.peleador.body.setAccelerationX(0);
            this.peleador.body.setAccelerationY(0);
        });
        this.physics.add.collider(this.peleador,this.grupoRocas3,()=>{
            this.peleador.body.setBounce(0.07);
            this.peleador.body.setAccelerationX(0);
            this.peleador.body.setAccelerationY(0);
        });
        this.physics.add.collider(this.peleador,this.grupoRocasLargas,()=>{
            this.peleador.body.setBounce(0.07);
            this.peleador.body.setAccelerationX(0);
            this.peleador.body.setAccelerationY(0);
        });
        this.physics.add.collider(this.peleador,this.grupoRocasLargas1,()=>{
            this.peleador.body.setBounce(0.07);
            this.peleador.body.setAccelerationX(0);
            this.peleador.body.setAccelerationY(0);
        });
        this.physics.add.collider(this.peleador,this.grupoRocasCalientes,()=>{
            this.peleador.body.setBounce(0.07);
            this.peleador.body.setAccelerationX(0);
            this.peleador.body.setAccelerationY(0);
        });
        this.physics.add.collider(this.peleador,this.grupoRocasCalientes1,()=>{
            this.peleador.body.setBounce(0.07);
            this.peleador.body.setAccelerationX(0);
            this.peleador.body.setAccelerationY(0);
        });
        this.physics.add.collider(this.peleador,this.grupoRocasCalientes2,()=>{
            this.peleador.body.setBounce(0.07);
            this.peleador.body.setAccelerationX(0);
            this.peleador.body.setAccelerationY(0);
        });
        this.physics.add.collider(this.peleador,this.grupoRocas2,()=>{
            this.peleador.body.setBounce(0.07);
            this.peleador.body.setAccelerationX(0);
            this.peleador.body.setAccelerationY(0);
        });
        this.physics.add.collider(this.peleador,this.grupoRocas7,()=>{
            this.peleador.body.setBounce(0.07);
            this.peleador.body.setAccelerationX(0);
            this.peleador.body.setAccelerationY(0);
        });
        this.physics.add.collider(this.peleador,this.pase,()=>{
            this.peleador.body.setAccelerationX(0);
            this.peleador.body.setAccelerationY(0);
            this.scene.sleep("Mina");
            //this.scene.launch("Cementerio");
            this.scene.start("Bosque");
        });
    }
    
    update(time, delta) {
        const speed = 175;
        const prevVelocity = this.peleador.body.velocity.clone();
        this.peleador.body.setVelocity(0);
        //Manejo de vidas del peleador
        if(this.peleador.data.list.vidas==0){
            this.scene.restart('Mina');
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

export default Mina;