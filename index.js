const express = require("express");

const app = express();

const _= require("lodash");

app.set("view engine", "hbs");

app.use(express.static('public'));

app.listen(4000, () => {
  console.log("running on port 4000 at warp speed captn!");
});

app.get("/:name", (req, res)=>{
    const comps = [ 
        " Your instructors love you. ", " High five = ^5 !!!!! ", " It's almost beer thirty. ", " The Force is strong with you Padawan. ", " Keep going I know you can do it. ", " Coding is hard, but you got this. ", " The first step to being awesome at something is being not good. ", " Lamborghini made tractors before he made cars. ", "Every flower blossoms at it's own rate", "You're good enough, you're smart enough, and doggone it .... people like you!", "All that you seek is already within you grasshopper.", "YOU CAN DO IT ! I know it , so go &  'Git r DUN' "
    ]
    const colors = [
        "#FFBF00", "#0080FF","#01DF3A","#FF0080","#ffffe6","#e6f2ff","#ffddcc", "#ffccff","#e6e6e6","#ffcccc","#b3e6ff","#99ffeb","#e6e6ff"
    ]

    const nameColors = [ "#ff99aa", "#ff66b3", "#cccccc","#b3b3ff","#ffff66","#f2f2f2", "#ffffff","#ffcc99"  ]

    const nameComp =[" You da best ! ", " You're cool ! ", " You're awesome ! ", " You rule ! ", " You're super ! ", " You are wonderful ! "]

    const randoColor = _.sample(colors);
    const randoComp = _.sample(comps);
    const randNameColor = _.sample(nameColors);
    const randNameComp = _.sample(nameComp);
    res.render("name", {compliment: randoComp, backgroundColor: randoColor, who: req.params.name, namecolor: randNameColor , nameComp: randNameComp});
});


app.get("/", (req, res)=>{
    const comps = [ 
        " Your instructors love you, whoever you are. ", " High five = ^5 !!!!! All for you stranger", " It's almost beer thirty partner hang in there. ", " The Force is strong with you Padawan. ", " Hey you ... Keep going I know you can do it. ", " Coding is hard, but you got this buddy. ", "Hey friend remember the first step to being awesome at something is being not good. You are just a small step away! ", " Lamborghini made tractors before he made cars. Buck up buttercup. ", " Hey you, yeah you there .... You're AWESOME!!!", " It'll be allright - the FBI agent on the otherside of you camera is watching your back", " Hey good looking ... Whatever you got cooking ... My sincere compliments to the chef!"
    ]
    const colors = [
        "#FFBF00", "#0080FF","#01DF3A","#FF0080","#00ffff","#00cccc","#b3d9ff","#ffffb3","#4d4dff","#ccccff","#d1d1e0"
    ]
    const randoColor = _.sample(colors);
    const randoComp = _.sample(comps);
    res.render("index", {compliment: randoComp, backgroundColor: randoColor});
});
