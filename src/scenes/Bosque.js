class Bosque extends Phaser.Scene{
    constructor(){
        super({
            key: 'Bosque'
        });
    }

    init() {
        console.log('Escena Bosque');
    }
    
    preload() {

    }
    
    create(){
        /*this.scene.launch('Vida');
        this.scene.setVisible(true, 'Vida');
        //this.scene.moveUp('Vida');*/
        //this.input.on('pointerdown', () => {
         //   this.puntos++;
         //   this.registry.events.emit('puntosV', this.puntos);
         //   console.log(this.puntos);
        //});
        this.cursor = this.input.keyboard.createCursorKeys();
        this.fondo=this.add.image(550,271,"FondoTierra");
        this.fondo.setDepth(0);
        this.fondo.setDisplaySize(1550,735);
        this.peleador = this.physics.add.sprite(40,300,"pl").setScale(0.5);
        this.peleador.setDepth(2);
        this.physics.add.existing(this.peleador,false);
        this.peleador.body.setCollideWorldBounds(true);
        //vidas
        this.peleador.setData({
            name:'peleador',
            vidas:3,
            status:'vivo',
            ataques:0
        });
        //arboles de la parte de arriba
        this.grupoArboles = this.physics.add.group({
            key: 'arbol',
            repeat: 32,
            setXY: {
                x: 40,
                y: 40,
                stepX:40
            }
        });
        this.cursors = this.input.keyboard.createCursorKeys();
        this.grupoArboles.children.iterate( (arbol) => {
            arbol.setScale(0.1,0.1);
            arbol.setDepth(1);
            arbol.body.setMass(10000);
            arbol.body.setCollideWorldBounds(true);
        });
        this.physics.add.existing(this.grupoArboles,true);
        this.grupoArboles.body.setSize(1300,50);
        //arboles superior lateral izquierdo
        this.grupoArboles1 = this.physics.add.group({
            key: 'arbol',
            repeat: 5,
            setXY: {
                x: 40,
                y: 40,
                stepY:40
            }
        });
        this.grupoArboles1.children.iterate( (arbol1) => {
            arbol1.setScale(0.1,0.1);
            arbol1.setDepth(1);
            arbol1.body.setMass(10000);
            arbol1.body.setCollideWorldBounds(true);
        });
        this.physics.add.existing(this.grupoArboles1,true);
        this.grupoArboles1.body.setSize(70,250);
        //arbol de la parte de abajo
        this.grupoArboles2 = this.physics.add.group({
            key: 'arbol',
            repeat: 32,
            setXY: {
                x: 40,
                y: 600,
                stepX:40
            }
        });
        this.grupoArboles2.children.iterate( (arbol2) => {
            arbol2.setScale(0.1,0.1);
            arbol2.setDepth(1);
            arbol2.body.setMass(10000);
            arbol2.body.setCollideWorldBounds(true);
        });
        this.physics.add.existing(this.grupoArboles2,true);
        this.grupoArboles2.body.setSize(55,280);
        this.grupoArboles2.body.setOffset(10,350);
        //lateral izquierdo inferior 
        this.grupoArboles3 = this.physics.add.group({
            key: 'arbol',
            repeat: 5,
            setXY: {
                x: 40,
                y: 400,
                stepY:40
            }
        });
        this.grupoArboles3.children.iterate( (arbol3) => {
            arbol3.setScale(0.1,0.1);
            arbol3.setDepth(1);
            arbol3.body.setMass(10000);
            arbol3.body.setCollideWorldBounds(true);
        });
        this.physics.add.existing(this.grupoArboles3,true);
        this.grupoArboles3.body.setSize(1300,70);
        this.grupoArboles3.body.setOffset(10,570);
        //arboles centrales 1
        this.grupoArboles4 = this.physics.add.group({
            key: 'arbol',
            repeat: 4,
            setXY: {
                x: 400,
                y: 300,
                stepX:40
            },
            stepY:40
        });
        this.grupoArboles4.children.iterate( (arbol4) => {
            arbol4.setScale(0.1,0.1);
            arbol4.setDepth(1);
            arbol4.body.setMass(10000);
            arbol4.body.setCollideWorldBounds(true);
        });
        this.physics.add.existing(this.grupoArboles4,true);
        this.grupoArboles4.body.setSize(205,50);
        this.grupoArboles4.body.setOffset(375,265);
        //arboles centrales 2
        this.grupoArboles5 = this.physics.add.group({
            key: 'arbol',
            repeat: 4,
            setXY: {
                x: 900,
                y: 300,
                stepX:40
            },
            stepY:40
        });
        this.grupoArboles5.children.iterate( (arbol5) => {
            arbol5.setScale(0.1,0.1);
            arbol5.setDepth(1);
            arbol5.body.setMass(10000);
            arbol5.body.setCollideWorldBounds(true);
        });
        this.physics.add.existing(this.grupoArboles5,true);
        this.grupoArboles5.body.setSize(205,50);
        this.grupoArboles5.body.setOffset(885,265);
        //arboles cruzados 1
        this.grupoArboles6 = this.physics.add.group({
            key: 'arbol',
            repeat: 4,
            setXY: {
                x: 1000,
                y: 300,
                stepY:40
            }
        });
        this.grupoArboles6.children.iterate( (arbol6) => {
            arbol6.setScale(0.1,0.1);
            arbol6.setDepth(1);
            arbol6.body.setMass(10000);
            arbol6.body.setCollideWorldBounds(true);
        });
        this.physics.add.existing(this.grupoArboles6,true);
        this.grupoArboles6.body.setSize(50,140);
        this.grupoArboles6.body.setOffset(980,330);

        //arbustos
        this.grupoArbustos = this.physics.add.group({
            key: 'arbusto',
            repeat: 4,
            setXY: {
                x: 700,
                y: 200,
                stepX:25
            },
            stepY:40
        });
        this.grupoArbustos.children.iterate( (arbusto) => {
            arbusto.setScale(0.2,0.2);
            arbusto.setDepth(1);
            arbusto.body.setMass(10000);
            arbusto.body.setCollideWorldBounds(true);
        });
        this.physics.add.existing(this.grupoArbustos,true);
        this.grupoArbustos.body.setSize(150,40);
        this.grupoArbustos.body.setOffset(680,180);

        this.grupoArbusto1 = this.physics.add.group({
            key: 'arbusto',
            repeat: 4,
            setXY: {
                x: 200,
                y: 300,
                stepX:25
            }  
        });
        this.grupoArbusto1.children.iterate( (arbusto1) => {
            arbusto1.setScale(0.2,0.2);
            arbusto1.setDepth(1);
            arbusto1.body.setMass(10000);
            arbusto1.body.setCollideWorldBounds(true);
        });
        this.physics.add.existing(this.grupoArbusto1,true);
        this.grupoArbusto1.body.setSize(130,40);
        this.grupoArbusto1.body.setOffset(190,285);

        this.grupoArbusto2 = this.physics.add.group({
            key: 'arbusto',
            repeat: 5,
            setXY: {
                x: 650,
                y: 500,
                stepX:25
            }
        });
        this.grupoArbusto2.children.iterate( (arbusto2) => {
            arbusto2.setScale(0.2,0.2);
            arbusto2.setDepth(1);
            arbusto2.body.setMass(10000);
            arbusto2.body.setCollideWorldBounds(true);
        });
        this.physics.add.existing(this.grupoArbusto2,true);
        this.grupoArbusto2.body.setSize(155,30);
        this.grupoArbusto2.body.setOffset(640,485);
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
        this.physics.add.collider(this.peleador,this.grupoArboles,()=>{
            //this.peleador.body.setBounce(0.3);
            this.peleador.body.setAccelerationX(0);
            this.peleador.body.setAccelerationY(0);
        });
        this.physics.add.collider(this.peleador,this.grupoArboles1,()=>{
            //this.peleador.body.setBounce(0.3);
            this.peleador.body.setAccelerationX(0);
            this.peleador.body.setAccelerationY(0);
        });
        this.physics.add.collider(this.peleador,this.grupoArboles2,()=>{
            //this.peleador.body.setBounce(0.3);
            this.peleador.body.setAccelerationX(0);
            this.peleador.body.setAccelerationY(0);
        });
        this.physics.add.collider(this.peleador,this.grupoArboles3,()=>{
            //this.peleador.body.setBounce(0.3);
            this.peleador.body.setAccelerationX(0);
            this.peleador.body.setAccelerationY(0);
        });
        this.physics.add.collider(this.peleador,this.grupoArboles4,()=>{
           // this.peleador.body.setBounce(0.3);
            this.peleador.body.setAccelerationX(0);
            this.peleador.body.setAccelerationY(0);
        });
        this.physics.add.collider(this.peleador,this.grupoArboles5,()=>{
            //this.peleador.body.setBounce(0.3);
            this.peleador.body.setAccelerationX(0);
            this.peleador.body.setAccelerationY(0);
        });
        this.physics.add.collider(this.peleador,this.grupoArboles6,()=>{
            //this.peleador.body.setBounce(0.3);
            this.peleador.body.setAccelerationX(0);
            this.peleador.body.setAccelerationY(0);
        });

        this.physics.add.collider(this.peleador,this.grupoArbusto1,()=>{
            //this.peleador.body.setBounce(0.3);
            this.peleador.body.setAccelerationX(0);
            this.peleador.body.setAccelerationY(0);
        });
        this.physics.add.collider(this.peleador,this.grupoArbustos,()=>{
            //this.peleador.body.setBounce(0.3);
            this.peleador.body.setAccelerationX(0);
            this.peleador.body.setAccelerationY(0);
        });
        this.physics.add.collider(this.peleador,this.grupoArbusto2,()=>{
            //this.peleador.body.setBounce(0.7);
            this.peleador.body.setAccelerationX(0);
            this.peleador.body.setAccelerationY(0);
            this.scene.sleep("Bosque");
            this.scene.launch("Cementerio");
            //this.scene.start("Cementerio");
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

export default Bosque;