function $(selector){
    return document.querySelector(selector);
}
function random(from, to){
    return Math.floor(Math.random() * to) + from;
}
class Action{
    constructor(){
        this.withoutS = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','1','2','3','4','5','6','7','8','9','0'];;
        this.withS = this.withoutS;
        this.withS.push('$','@','&','_','-');
    }
} 

