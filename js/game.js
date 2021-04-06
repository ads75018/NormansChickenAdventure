let canvas = document.getElementById("game-canvas");
let ctx = canvas.getContext("2d");
let innerWidth = 640;
let innerHeight = 576;
let score = document.getElementById("score-count");
let stage = document.querySelector("#level-box > p > span");
let lives = [...document.querySelectorAll("#life-box")];
let yumStamp = undefined;
canvas.width = innerWidth;
canvas.height = innerHeight;

class Actor {
  constructor(x, y, imgUrl, imgWidth) {
    this.x = x;
    this.y = y;
    this.w = imgWidth;
    this.h = undefined;
    const img = new Image();
    this.img = img;
    img.addEventListener("load", () => {
      this.ratio = img.naturalWidth / img.naturalHeight;
      this.h = this.w / this.ratio;
      this.draw();
    });
    img.src = imgUrl;
  }
  draw() {
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  }
}

class Table extends Actor {
  constructor(x, y, imgUrl, imgWidth) {
    super(x, y, imgUrl, imgWidth);
  }
}
const tables = [
  new Table(320, 120, "assets/table.png", 200),
  new Table(120, 370, "assets/table.png", 200),
];

class Norman extends Actor {
  constructor() {
    super(145, 127, "assets/norman.png", 50);
    this.dirX = undefined;
    this.dirY = undefined;
  }
  moveUp() {
    this.dirY = -1;
    this.dirX = undefined;
    this.y -= 25;
    if (this.y < 5) {
      this.y = 5;
    }
  }
  moveDown() {
    this.dirY = 1;
    this.dirX = undefined;
    this.y += 25;
    if (this.y > 500) {
      this.y = 500;
    }
  }
  moveLeft() {
    this.dirX = -1;
    this.dirY = undefined;
    this.img.src = "assets/norman copy.png";
    console.log("left", this.dirX);
    this.x -= 20;
    if (this.x < 5) {
      this.x = 5;
    }
  }
  moveRight() {
    this.dirX = 1;
    this.dirY = undefined;
    this.img.src = "assets/norman.png";
    this.x += 20;
    if (this.x > 585) {
      this.x = 585;
    }
  }
}
const norman = new Norman();

class Waiter extends Actor {
  constructor(x, y, imgUrl, imgWidth) {
    super(x, y, imgUrl, imgWidth);
  }
}
const waiters = [
  new Waiter(100, 0, "assets/waiter.png", 35),
  new Waiter(250, 450, "assets/waiter.png", 35),

  ,
];

const waiters2 = [new Waiter(500, 200, "assets/waiter.png", 35)];

const waiters3 = [];

class ChimkenLeg extends Actor {
  constructor(x, y, imgUrl, imgWidth) {
    super(x, y, imgUrl, imgWidth);
  }
}

const chimkenLegs = [
  new ChimkenLeg(
    Math.random() * 500,
    Math.random() * 500,
    "assets/chimken leg.png",
    30
  ),
  new ChimkenLeg(
    Math.random() * 500,
    Math.random() * 500,
    "assets/chimken leg.png",
    30
  ),
  new ChimkenLeg(
    Math.random() * 500,
    Math.random() * 500,
    "assets/chimken leg.png",
    30
  ),
  new ChimkenLeg(
    Math.random() * 500,
    Math.random() * 500,
    "assets/chimken leg.png",
    30
  ),
  new ChimkenLeg(
    Math.random() * 500,
    Math.random() * 500,
    "assets/chimken leg.png",
    30
  ),
];

class MegaChimken extends Actor {
  constructor() {
    super(
      Math.random() * 600,
      Math.random() * 600,
      "assets/mega chimken.png",
      35
    );
  }
}
const megaChimkens = [new MegaChimken()];

class Plant extends Actor {
  constructor(x, y, imgUrl, imgWidth) {
    super(x, y, imgUrl, imgWidth);
  }
}
const plantsDown = [
  new Plant(5, 485, "assets/plants.png", 35),
  new Plant(600, 485, "assets/plants.png", 35),
];
const plantsUp = [
  new Plant(600, 0, "assets/plants.png", 35),
  new Plant(5, 0, "assets/plants.png", 35),
];

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
});

function crashWith(a, b) {
  return (
    a.x < b.x + b.w && a.x + a.w > b.x && a.y < b.y + b.h && a.y + a.h > b.y
  );
}

function updateCanvas(timestamp) {
  ctx.clearRect(0, 0, 640, 576);

  tables.forEach(function (table) {
    table.draw();
    if (crashWith(norman, table)) {
      console.log("crash", norman.x < table.x + table.w, norman.dirX);

      if (norman.x < table.x + table.w && norman.dirX < 0) {
        norman.x = table.x + table.w;
      }

      if (norman.x + norman.w > table.x && norman.dirX > 0) {
        norman.x = table.x - norman.w;
      }

      if (norman.y < table.y + table.h && norman.dirY < 0) {
        norman.y = table.y + table.h;
      }

      if (norman.y + norman.h > table.y && norman.dirY > 0) {
        norman.y = table.y - table.h;
      }

      console.log("obstacle here");
    }
  });
  norman.draw();

  chimkenLegs.forEach(function (chimkenLeg, i) {
    chimkenLeg.draw();
    if (crashWith(norman, chimkenLeg)) {
      audioEat.play();
      chimkenLegs.splice(i, 1);
      score.innerHTML = Number(score.innerHTML) + 100;
    }
  });

  if (chimkenLegs.length <= 0) {
    stage.innerHTML = Number(stage.innerHTML) + 1;
    if (stage.innerHTML === "3") {
      waiters3.push(new Waiter(160, 200, "assets/waiter.png", 35));}
    
    
    for(let i = 0; i< 5; i ++) {
      chimkenLegs.push(
        new ChimkenLeg(
          Math.random() * 500,
          Math.random() * 500,
          "assets/chimken leg.png",
          30
        )
      );
    }


    console.log("chimken gone");
  }

  megaChimkens.forEach(function (megaChimken, i) {
    megaChimken.draw();
    megaChimken.x += 10;
    if (megaChimken.x > 600) {
      megaChimken.x -= 600;
      megaChimken.y += Math.random() * 600;
    }
    if (megaChimken.y > 530) {
      megaChimken.y -= Math.random() * 500;
    }
    if (crashWith(norman, megaChimken)) {
      audioEat.play();
      megaChimkens.splice(i, 1);
      score.innerHTML = Number(score.innerHTML) + 500;
    }
  });
  if (megaChimkens.length <= 0) {
    console.log("chimken gone");
    megaChimkens.push(new MegaChimken());
    console.log("mega yum");
    yumStamp = timestamp;
    console.log(yumStamp);
  }

  if (yumStamp) {
    if (timestamp - yumStamp < 13000) {
      document.body.style.backgroundColor = "#ff007f";
    } else {
      document.body.style.backgroundColor = "limegreen";
    }
    
    if (timestamp - yumStamp < 1000) {
      if (Math.random() < 0.7) {
        megaChimkens.push(new MegaChimken());
      }
    }
  }

  plantsUp.forEach(function (plant) {
    plant.draw();

    if (crashWith(norman, plant)) {
      if (norman.x < plant.x + plant.w && norman.dirX < 0) {
        norman.x = plant.x + plant.w;
      }

      if (norman.x + norman.w > plant.x && norman.dirX > 0) {
        norman.x = plant.x - norman.w;
      }

      if (norman.y < plant.y + plant.h && norman.dirY < 0) {
        norman.y = plant.y + plant.h;
      }

      if (norman.y + norman.h > plant.y && norman.dirY > 0) {
        norman.y = plant.y - plant.h;
      }
      console.log("obstacle here");
    }
  });

  waiters.forEach(function (waiter) {
    waiter.draw();
    waiter.x += 3.5;
    if (waiter.x > 600) {
      waiter.x -= 600;
    }
    if (crashWith(norman, waiter)) {
      if (norman.x < waiter.x + waiter.w && norman.dirX < 0) {
        norman.x = waiter.x + waiter.w + 50;
      }

      if (norman.x + norman.w > waiter.x && norman.dirX > 0) {
        norman.x = waiter.x - norman.w;
      }

      if (norman.y < waiter.y + waiter.h && norman.dirY < 0) {
        norman.y = waiter.y + waiter.h + 50;
      }

      if (norman.y + norman.h > waiter.y && norman.dirY > 0) {
        norman.y = waiter.y - waiter.h;
      }

      lives.forEach(function (life, i) {
        life.remove(i, 1);
        lives.splice(i, 1);
      });
      console.log("oh no");
    }
  });

  waiters2.forEach(function (waiter) {
    waiter.draw();
    waiter.x += 3;
    if (waiter.x > 640) {
      waiter.x -= 600;
    }
    if (crashWith(norman, waiter)) {
      if (norman.x < waiter.x + waiter.w && norman.dirX < 0) {
        norman.x = waiter.x + waiter.w + 50;
      }

      if (norman.x + norman.w > waiter.x && norman.dirX > 0) {
        norman.x = waiter.x - norman.w;
      }

      if (norman.y < waiter.y + waiter.h && norman.dirY < 0) {
        norman.y = waiter.y + waiter.h + 50;
      }

      if (norman.y + norman.h > waiter.y && norman.dirY > 0) {
        norman.y = waiter.y - waiter.h;
      }

      lives.forEach(function (life, i) {
        life.remove(i, 1);
        lives.splice(i, 1);
      });
      console.log("oh no");
    }
  });

  waiters3.forEach(function (waiter) {
    waiter.draw();
    waiter.x += 5;
    if (waiter.x > 640) {
      waiter.x -= 600;
    }
    if (crashWith(norman, waiter)) {
      if (norman.x < waiter.x + waiter.w && norman.dirX < 0) {
        norman.x = waiter.x + waiter.w + 50;
      }

      if (norman.x + norman.w > waiter.x && norman.dirX > 0) {
        norman.x = waiter.x - norman.w;
      }

      if (norman.y < waiter.y + waiter.h && norman.dirY < 0) {
        norman.y = waiter.y + waiter.h + 50;
      }

      if (norman.y + norman.h > waiter.y && norman.dirY > 0) {
        norman.y = waiter.y - waiter.h;
      }

      lives.forEach(function (life, i) {
        life.remove(i, 1);
        lives.splice(i, 1);
      });
      console.log("oh no");
    }
  });

  plantsDown.forEach(function (plant) {
    plant.draw();

    if (crashWith(norman, plant)) {
      if (norman.x < plant.x + plant.w && norman.dirX < 0) {
        norman.x = plant.x + plant.w;
      }

      if (norman.x + norman.w > plant.x && norman.dirX > 0) {
        norman.x = plant.x - norman.w;
      }

      if (norman.y < plant.y + plant.h && norman.dirY < 0) {
        norman.y = plant.y + plant.h;
      }

      if (norman.y + norman.h > plant.y && norman.dirY > 0) {
        norman.y = plant.y - plant.h;
      }
      console.log("obstacle here");
    }
  });

  requestAnimationFrame(updateCanvas);
}
updateCanvas();

let audioEat = new Audio("assets/demoChomp.wav");




// function randomCoordinates() {
//   const x = this.x
//   const y = this.y
//   return [x,y]
// }

// randomCoordinates()

// function isInsideATable(x, y) {
//   if(x)
//   return true
// }

// function randomCoordsButNotInATable() {

//   let coords = randomCoords();
//   while (isInsideATable(coords[0], coords[1])) {
//     coords = randomCoords()
//   }

//   return coords
// }




    // yumStamp = undefined;
    //     else {
    //       // document.body.style.backgroundColor = "limegreen"
    //       // il y a plus de 3 secondes
    //       const megaChimkens = [new MegaChimken()];
    //       yumStamp = undefined;
    //     }

    //     // on vient de manger le super poulet
    //     // document.body.style.backgroundColor = "#ff007f"