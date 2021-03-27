let canvas = document.getElementById("game-canvas");
let ctx = canvas.getContext("2d");

class Actor {
  // constructor() { parametres x de base y, url, imgwidth
  
  // }
  crashWith(actor) {
    // true si collision avec actor en parametre, false autrement
    

  }
}

class Table extends Actor {
  constructor() {
    super()
    this.w = undefined;
    this.h = undefined;
    const img = new Image();
    this.img = img;
    img.addEventListener("load", () => {
      this.img = img;
      this.ratio = img.naturalWidth / img.naturalHeight;
      this.w = 200;
      this.h = this.w / this.ratio;
      this.draw();
    });
    img.src = "assets/table.png";
  }
  draw() {
    ctx.fillStyle = 'red'
    // ctx.fillRect(370, 120, this.w, this.h)
    // ctx.fillRect(100, 120 * 2, this.w, this.h)
    // ctx.fillRect(250, 30 * 13, this.w, this.h)
    ctx.drawImage(this.img, 370, 120, this.w, this.h);
  }
}
const tables = [new Table(), new Table(), new Table()];

class Norman extends Actor {
  constructor() {
    super()
    this.x = 105;
    this.y = 152;
    this.w = undefined;
    this.h = undefined;
    // this.isColliding = false;
    const img = new Image();
    this.img = img;
    img.addEventListener("load", () => {
      this.img = img;
      this.ratio = img.naturalWidth / img.naturalHeight;
      this.w = 50;
      this.h = this.w / this.ratio;
      this.draw();
    });
    img.src = "assets/norman.png";
  }
  moveUp() {
    this.y -= 25;
    if (this.y < 30) {
      this.y = 30;
    }
  }
  moveDown() {
    this.y += 25;
    if (this.y > 477) {
      this.y = 477;
    }
  }
  moveLeft() {
    this.x -= 20;
    if (this.x < 5) {
      this.x = 5;
    }
  }
  moveRight() {
    this.x += 20;
    if (this.x > 585) {
      this.x = 585;
    }
  }
  collisionDetection() {
    if(this.x === table.x && table.y) {
      this.x = 0;
    }
  }

  draw() {
    console.log("coucou")
    // ctx.fillStyle = 'red'
    // ctx.fillRect(this.x, this.y, this.w, this.h)
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  }
}
const norman = new Norman();

class Waiter {
  constructor() {
    this.x = this.x;
    this.y = this.y;
    this.w = undefined;
    this.h = undefined;
    const img = new Image();
    this.img = img;
    img.addEventListener("load", () => {
      this.img = img;
      this.ratio = img.naturalWidth / img.naturalHeight;
      this.w = 35;
      this.h = this.w / this.ratio;
      this.draw();
    });
    img.src = "assets/waiter.png";
  }
  draw() {
    ctx.drawImage(this.img, 500, 130, this.w, this.h);
    ctx.drawImage(this.img, 150, 300, this.w, this.h);
    
  }
}
const waiter = new Waiter();

class ChimkenLeg {
  constructor() {
    this.x = this.x;
    this.y = this.y;
    this.w = undefined;
    this.h = undefined;
    const img = new Image();
    this.img = img;
    img.addEventListener("load", () => {
      this.img = img;
      this.ratio = img.naturalWidth / img.naturalHeight;
      this.w = 30;
      this.h = this.w / this.ratio;
      this.draw();
    });
    img.src = "assets/chimken leg.png";
  }
  draw() {
    // ctx.drawImage(this.img, 50, 130, this.w, this.h);
    // ctx.drawImage(this.img, 200, 350, this.w, this.h);
    ctx.fillRect(200, 350, this.w, this.h);
    ctx.fillRect(50, 130, this.w, this.h)

    // let res = []
    // for (let i =0; i < 7; i++) {
    // ctx.fillRect(Math.random()*580, Math.random()*500, this.w, this.h)
    // ctx.drawImage(this.img, Math.random()*580, Math.random()*500, this.w, this.h);
    // ctx.drawImage(this.img, 30, 30, this.w, this.h);
    // ctx.drawImage(
    //   this.img,
    //   Math.random() * 580,
    //   Math.random() * 500,
    //   this.w,
    //   this.h
    // );
    // ctx.drawImage(
    //   this.img,
    //   Math.random() * 580,
    //   Math.random() * 500,
    //   this.w,
    //   this.h
    // );
  }
}
const chimkenLeg = new ChimkenLeg();

class MegaChimken {
  constructor() {
    this.x = this.x;
    this.y = this.y;
    this.w = undefined;
    this.h = undefined;
    const img = new Image();
    this.img = img;
    img.addEventListener("load", () => {
      this.img = img;
      this.ratio = img.naturalWidth / img.naturalHeight;
      this.w = 35;
      this.h = this.w / this.ratio;
      this.draw();
    });
    img.src = "assets/mega chimken.png";
  }
  draw() {
    // ctx.drawImage(this.img, 150, 230, this.w, this.h);
    ctx.fillRect(150, 230, this.w, this.h)
    // ctx.drawImage(this.img, 200, 350, this.w, this.h);
    // let res = []
    // for (let i =0; i < 7; i++) {
    // ctx.fillRect(Math.random()*580, Math.random()*500, this.w, this.h)
    // ctx.drawImage(this.img, Math.random()*580, Math.random()*500, this.w, this.h);
    // ctx.drawImage(this.img, 30, 30, this.w, this.h);
    // ctx.drawImage(
    //   this.img,
    //   Math.random() * 580,
    //   Math.random() * 500,
    //   this.w,
    //   this.h
    // );
    // ctx.drawImage(
    //   this.img,
    //   Math.random() * 580,
    //   Math.random() * 500,
    //   this.w,
    //   this.h
    // );
  }
}
const megaChimken = new MegaChimken();

class Plant {
  constructor(posy) {
    this.posy = posy
    this.w = undefined;
    this.h = undefined;
    const img = new Image();
    this.img = img;
    img.addEventListener("load", () => {
      this.img = img;
      this.ratio = img.naturalWidth / img.naturalHeight;
      this.w = 35;
      this.h = this.w / this.ratio;
      this.draw();
    });
    img.src = "assets/plants.png";
  }
  draw() {
    for (let i = 0; i < 16; i++) {
      ctx.drawImage(this.img, [i] * 40, this.posy, this.w, this.h);
    }
  }
}
const plantsDown = new Plant(485);
const plantsUp = new Plant(0);


// class PlantsDown {
//   constructor() {
//     this.x = this.x;
//     this.y = this.y;
//     this.w = undefined;
//     this.h = undefined;
//     const img = new Image();
//     this.img = img;
//     img.addEventListener("load", () => {
//       this.img = img;
//       this.ratio = img.naturalWidth / img.naturalHeight;
//       this.w = 35;
//       this.h = this.w / this.ratio;
//       this.draw();
//     });
//     img.src = "assets/plants.png";
//   }
//   draw() {
//     for (let i = 0; i < 16; i++) {
//       ctx.drawImage(this.img, [i] * 40, 485, this.w, this.h);
//     }
//   }
// }


// class PlantsUp {
//   constructor() {
//     this.x = this.x;
//     this.y = this.y;
//     this.w = undefined;
//     this.h = undefined;
//     const img = new Image();
//     this.img = img;
//     img.addEventListener("load", () => {
//       this.img = img;
//       this.ratio = img.naturalWidth / img.naturalHeight;
//       this.w = 35;
//       this.h = this.w / this.ratio;
//       this.draw();
//     });
//     img.src = "assets/plants.png";
//   }
//   draw() {
//     for (let i = 0; i < 16; i++) {
//       ctx.drawImage(this.img, [i] * 40, 0, this.w, this.h);
//     }
//   }
// }


document.addEventListener("keydown", (e) => {
  switch (e.keyCode) {
    case 38:
      norman.moveUp();
      console.log("Norman went up", norman);
      break;
    case 40:
      norman.moveDown();
      console.log("Norman went down", norman);
      break;
    case 37:
      norman.moveLeft();
      console.log("Norman went left", norman);
      break;
    case 39:
      norman.moveRight();
      console.log("Norman went right", norman);
      break;
  }
  // updateCanvas();
});


// pour n'importe quel acteur autre que norman, 
//tester si l'un d'eux est en collision avec norman 

function updateCanvas() { console.log("hi")
  ctx.clearRect(0, 0, 1500, 1700);
  plantsUp.draw();
  plantsDown.draw();
  tables.forEach(function (table) {
    table.draw()
  })
  norman.draw();
  waiter.draw();
  chimkenLeg.draw();
  megaChimken.draw();
  requestAnimationFrame(updateCanvas)
  // ctx.fillText("Doggo_x: " + ghost.x, 580,40);
  // ctx.fillText("Doggo_y: " + ghost.y, 580,60);
}
updateCanvas();




