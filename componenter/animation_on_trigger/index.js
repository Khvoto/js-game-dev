const canvas = document.getElementById('canvas1');
const context = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 500;
const CANVAS_HEIGHT = canvas.height = 700;
const explosions = [];
let canvasPosition = canvas.getBoundingClientRect();
console.log(canvasPosition)
const gameSpeed = 15;
let gameFrame = 0;

class Explosion {
  constructor(x, y) {
    this.spriteWidth = 200;
    this.spriteHeight = 179;
    this.width = this.spriteWidth / 2;
    this.height = this.spriteHeight / 2;
    this.x = x;
    this.y = y;
    this.image = new Image();
    this.image.src = './assets/boom.png';
    this.sound = new Audio();
    this.sound.src = './assets/boom.wav'
    this.frame = 0;
    this.angle = Math.random() * 6.2;
  }
  update() {
    if (this.frame === 0) this.sound.play();
    if (gameFrame % gameSpeed === 0) {
      this.frame++  
    }
    gameFrame++;
  }
  draw() {
    context.save();
    context.translate(this.x, this.y);
    context.rotate(this.angle);
    context.drawImage(
      this.image,
      this.spriteWidth * this.frame,
      0,
      this.spriteWidth,
      this.spriteHeight,
      0 - this.width / 2,
      0 - this.height / 2,
      this.width,
      this.height
    );
    context.restore();
  }
}


window.addEventListener('click', (e) => {
  createAnimation(e)
})

function createAnimation(e) {
  let posX = e.x - canvasPosition.left;
  let posY = e.y - canvasPosition.top;
  explosions.push(new Explosion(posX, posY));
  console.log(explosions)
}

function animate() {
  context.clearRect(0, 0, canvas.width, canvas.height);

  for ( let i = 0; i < explosions.length; i++) {
    explosions[i].update();
    explosions[i].draw();
    if (explosions[i].frame > 5) {
      explosions.splice(i, 1);
      i--;
    }
  }
  requestAnimationFrame(animate);
}
animate();