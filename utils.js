function spawn_circle(){
    var theta = 0;
    for(let i = 0; i < 60; i++){
        theta += 6;
        let r = 200;
        planets.push(new Body(createVector(mouseX + r*sin(theta), mouseY + r*cos(theta)), createVector(0,0), 1));
    }
}

function spawn_proto(){
    var theta = 0;
    planets.push(new Body(createVector(mouseX,mouseY),createVector(0,0),10));
    for(let i = 0; i < 60; i++){
        
        theta += 6;
        let r = random(20, 300);
        let v = sqrt(r/50)*.5;
        planets.push(new Body(createVector(mouseX + r*sin(theta), mouseY + r*cos(theta)), createVector(v*sin(theta+90),v*cos(theta+90)), 1));
    }
}

function spawn_grid(){
    let cols = 12;
    let rows = cols;
    let div = window.innerHeight / rows;

    let startX = window.innerWidth/2 - 0.5*window.innerHeight;
    let startY = 0;

    for(let i = 0; i < cols; i++){
        for(let j = 0; j < rows; j++){
            planets.push(new Body(createVector(startX + i*div, startY + j*div), createVector(0,0), 1));
        }
    }
}

function calc_momentum_transfer(m1, m2, v1, v2){
    var new_vel = p5.Vector.add(v1.mult(m1), v2.mult(m2));
    new_vel.mult(1/(m1+m2));
    return new_vel;
}