class Box{
    constructor(x,y,wid,hei){
        
        this.body=bodies.rectangle(x,y,wid,hei);
        this.width=wid;
        this.height=hei;

        wor.add(myworld,this.body);
}
    display(){
        var pos=this.body.position;
        var ang=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(ang);
        rectMode(CENTER);
        fill("skyblue");
        stroke("grey");
        rect(0,0,this.width,this.height);
        pop();
    }
}