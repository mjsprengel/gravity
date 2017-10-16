var planets = [];
var G = 5;

function setup(){
    createCanvas(window.innerWidth, window.innerHeight);
    document.documentElement.style.overflow = 'hidden';
    angleMode(DEGREES);
}

// the draw() function is called 60 times per second. Physics calcs are done inside of draw() for simplicity's sake.
function draw(){
    background(0);
    stroke(255);
    
    // for each body, sum the acceleration vector from every other body
    for(let i = 0; i < planets.length; i++){
        for(let j = 0; j < planets.length; j++){
            if (j != i){
                let d = p5.Vector.dist(planets[i].position, planets[j].position);
                planets[i].add_acc(p5.Vector.mult((p5.Vector.sub(planets[j].position, planets[i].position).normalize()),(planets[j].mass*G)/(d*d)));
            }
        }
    }

    // for each body, detect if it is colliding with another body, and if so, add mass and transfer momentum 
    for(let i = 0; i < planets.length; i++){
        for(let j = 0; j < planets.length; j++){
            if(j!=i){
                if(p5.Vector.dist(planets[i].position, planets[j].position) < (planets[i].radius + planets[j].radius)){
                    if(planets[i].radius > planets[j].radius){

                        planets[i].set_vel(calc_momentum_transfer(planets[i].mass, planets[j].mass, planets[i].velocity, planets[j].velocity));  
                        planets[i].add_mass(planets[j].mass);  
                        planets.splice(j,1); // delete the smaller body from the array of bodies
                        break; //break out of inner for loop, this body is colliding with another body and was deleted

                    } else {

                        planets[j].set_vel(calc_momentum_transfer(planets[i].mass, planets[j].mass, planets[i].velocity, planets[j].velocity));
                        planets[j].add_mass(planets[i].mass);
                        planets.splice(i,1);
                        break; //break out of inner for loop - otherwise program will crash at seemingly random times with multiple collisions
                    }
                }
            }
        }
    }

    // loop through the array of planet objects and update their positions on the screen
    for(let i = 0; i < planets.length; i++){
        planets[i].update();        
    }

}

function mouseClicked(){
    //spawn_grid();
    spawn_proto();
    //spawn_circle();
}
