function Body(pos, vel, mass){

    const SIZE = 5;

    this.mass = mass;
    this.radius = SIZE*((this.mass)**.333333);

    this.position = pos;
    this.velocity = vel;
    this.acceleration = createVector(0,0);

    this.add_acc = function(acc){
        this.acceleration.add(acc);
    }

    this.set_vel = function(v){
        this.velocity = v;
    }

    this.add_mass = function(mass){
        this.mass += mass;
        this.radius = SIZE*((this.mass)**.333333);
    }

    this.update = function(){
        this.velocity.add(this.acceleration);
        this.position.add(this.velocity);
        this.acceleration.mult(0); //need to reset acceleration to zero every timestep, since we're calculating acc every call of draw()

        ellipse(this.position.x, this.position.y, this.radius*2);
    }
}