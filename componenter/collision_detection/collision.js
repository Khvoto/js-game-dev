/**
 * Square Collision
 */
let rect1 = {x: 5, y: 5, width: 50, height: 50}
let rect2 = {x: 20, y: 10, width: 10, height: 10 }

if ( rect1.x > rect2.x + rect2.width ||
  rect1.x + rect1.width < rect2.x ||
  rect1.y > rect2.y + rect2.height ||
  rect1.y + rect1.height < rect12.y ) {
    //No Collision
} else {
  //Collision detected
}


/**
 * Circle Collision
 */
let circle1 = {x: 5, y:5, radius: 300};
let circle2 = {x: 10, y:10, radius: 150};

let dx = circle2.x - circle1.x;
let dy = circle2.y - circle1.y;

let distance = Math.sqrt(Math.pow(dx)+Math.pow(dy))

if( distance < circle1.radius + circle2.radius) {
  // Collision
} else {
  // no collision
}
