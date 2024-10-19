// Classy JS

// new operator 
// creates a nes instance of a givem object type e.g new Date()
// new calls a constructor function that creates an object of the given type.

// Constructors

// Constructors use this to assign object properties

function Meme(img,text){
    this.img = img;
    this.text = text;
}

const poch = new Meme("regularPooh.jpg","using functions");
// {
//     img:"regularPooh.jpg",
//     text:"using functions"
// }

poch.fancy // undefined
// class 
// fancy syntac for declaring custom object types (classses)
class ClassyMeme {
    // property declarations
    fancy = true;
    img;
    text;
    constructor(img,text){
        this.img = img;
        this.text = text
    }
    // method
    begPardon(){
        console.log("Do you have Grey Poupop")
    }
}
const ooh = new ClassyMeme("fancyOoh.png","function meme");
ooh.begPardon();
ooh.fancy;

// override methods 
class Meme{
    constructor(img,text){
        this.img = img;
        this.text = text
    }
    toString(){
        return `Meme ${this.text}`
    }
}
// Properties,Getters and Setters
class Meme{
    constructor(img,text){
        this.img = img;
        this.text = text;
    }
    get imgType(){
        const [name,ext] = this.img.split(".")
        return ext;
    }
    set imgType(newExt){
        const [name] = this.img.split(".")
        this.img = [name,n]
    }
}

// private properties/methods

class Meme{
    #img;
    constructor(img,text){
        this.#img = img;
        this.text = text;
        this.#whishper();
    }

    get image(){
        return this.#img
    }

    set image(newImage){
        this.#img = newImage;
    }
    #whishper(){
        console.log("my secret img is ",this.#img);
    }
    yell(){
        console.log("MY TEXT IS",this.text.toUpperCase())
    }
}
const fancyPooh = new Meme("pooh.jpg","so fancy");

// Inheritance

class GifMeme extends Meme{
    constructor(img,text){
        if(!img.endsWith(".gif")){
            throw new Error("Not a gif")
        }
        super(img,text);
    }
}
const failPooh = new GifMeme("pooh.jpg");
const gifPooh = new GifMeme("pooh.gif");