/**@type {HTMLCanvasElement} */
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 500;
const CANVAS_HEIGHT = canvas.height = 1000;
const numberOfEnemies = 100;
let npcObjects = [];
let gameFrame = 5;


class Enemy {
  constructor() {
    this.image = new Image();
    this.image.src = './assets/enemy1.png'
    this.spriteWidth = 293;
    this.spriteHeight = 155;
    this.height = this.spriteHeight / 2.5;
    this.width = this.spriteWidth / 2.5;
    this.x = Math.random() * (canvas.width - this.width);
    this.y = Math.random() * (canvas.height - this.height);
    this.frame = 0;
    this.flapSpeed = Math.floor(Math.random() * 5 + 2);
  }
  update() {
    this.x += Math.random() *3 - 1.5
    this.y += Math.random() * 3 - 1.5;

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