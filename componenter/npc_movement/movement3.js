/**@type {HTMLCanvasElement} */
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 500;
const CANVAS_HEIGHT = canvas.height = 1000;
const numberOfEnemies = 100;
let npcObjects = [];
let gameFrame = 2;


class Enemy {
  constructor() {
    this.image = new Image();
    this.image.src = './assets/enemy3.png'
    this.speed = Math.random() * 4 +1;
    this.spriteWidth = 218;
    this.spriteHeight = 177;
    this.height = this.spriteHeight / 2.5;
    this.width = this.spriteWidth / 2.5;
    this.x = Math.random() * (canvas.width - this.width);
    this.y = Math.random() * (canvas.height - this.height);
    this.frame = 0;
    this.flapSpeed = Math.floor(Math.random() * 5 + 2);
    this.angle = Math.random() * 2;
    this.angleSpeed = Math.random() * 2;
    this.curve = Math.random() * 200;


  }
  update() {
    this.x = (canvas.width - this.width) / 2 *  Math.sin(this.angle * Math.PI/48) + canvas.width/2 - this.width/2;
    this.y = (canvas.height - this.height) /2 * Math.cos(this.angle * Math.PI/90) + canvas.height/2 - this.height/2;
    this.angle += this.angleSpeed;

    if(this.x + this.width < 0) {this.x = canvas.width}

    if( gameFrame % this.flapSpeed === 0) {
      this.frame > 4 ? this.frame = 0 : this.frame++
    }
  }

  draw() {
    ctx.drawImage(this.image, this.frame * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height )
  }
}


for ( let i = 0; i < numberOfEnemies; i++) {
   npcObjects.push(new Enemy( ))
}


function animate () {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
  npcObjects.forEach((npc => {
    npc.update();
    npc.draw();
  }))
  gameFrame++
  requestAnimationFrame(animate);
}
animate();