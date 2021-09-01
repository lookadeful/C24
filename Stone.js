class Stone {
    constructor(x, y) {
        var options = {
            'restitution': 0.8,
            'friction': 0.9,
            'density': 12,
        }	
        this.body = Bodies.rectangle(x, y, 75, 75, options)
        this.width = 125
        this.height = 125
        World.add(world, this.body)
    }
    display() {
        var pos = this.body.position;
        push()
        translate(pos.x, pos.y)
        strokeWeight(4)
        stroke("black")
        fill("gray")
        rect(0, 0, this.width, this.height)
        pop()
    }
}
