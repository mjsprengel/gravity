# gravity
This is the source code for a web-based Newtonian N-body gravity simulator with collision detection and momentum transfer (https://mjsprengel.github.io/gravity/). Each mouse click on the canvas spawns a simulated proto-sun, which includes 60 particles of equal mass, at random locations within a circle, all having velocities sufficient to keep them on the screen. The particles will merge when a collision is detected, and the surviving body has a resultant velocity/mass governed by simple inelastic momentum transfer physics. 

In Planet.js, the Planet object contains the position, velocity, and acceleration as vectors, as well as some other information. Each body is a new Planet object. The Planet objects are held in an array inside of sketch.js, and the newtonian physics are applied by summing the gravitational force contribution

![image](https://user-images.githubusercontent.com/18639528/36774909-890a11e4-1c25-11e8-88b5-c7877ecfed94.png)

from each body in the array, on to every other body in the array. These physics calculations are performed 60 times per second inside of draw(), and the timestep integration method used to calculate the resulting positions of the bodies on the next frame is the Euler-Cromer method, also known as the semi-implicit Euler method

![image](https://user-images.githubusercontent.com/18639528/36775137-6bba5c42-1c26-11e8-80ed-4c703f1b6840.png)

where g(t,x) is the Planet's calculated acceleration due to all other bodies, and f(t,v_n+1) is the velocity on the next frame. The Euler-Cromer method uses what the velocity would be during the next timestep, not the current timestep, to calculate what the position will be. This appears to have interesting properties, like conservation of energy for simulated oscillatory systems where the normal Euler method tends to blow up in energy over time due to cascading/accumulating error.


# Screenshot

![image](https://user-images.githubusercontent.com/18639528/36774209-aecf6cec-1c22-11e8-99c8-fd8203a5cbd5.png)


