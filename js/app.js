function $(selector){
    return document.querySelector(selector);
}
function random(from, to){
    return Math.floor(Math.random() * to) + from;
}
class Action{
    constructor(){
        this.withoutS = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','1','2','3','4','5','6','7','8','9','0'];
        this.s = ['$','@','_','-','&'];
        this.withS = this.withoutS.concat(this.s);
        this.rand = 0;
        this.generateString = '';
    }
    static setOutput(pass){
        $('.main__output').style.display="block";
        $('#generate').textContent = pass;
    }
    static generate(list){
        for(let i = 0;i < 20;i++){
            this.rand = random(0, list.length);
             this.generateString+=  list[this.rand];
            }
            Action.setOutput(this.generateString);
            this.generateString = '';
    }
     withs(){
        Action.generate(this.withS);
    }
     withouts(){
        Action.generate(this.withoutS);
    }
} 
const act = new Action();
$('#with').addEventListener('click',e => {
    act.withs();
    e.preventDefault();
});
$('#without').addEventListener('click',e => {
    act.withouts();
    e.preventDefault();
});