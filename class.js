
class motherDev {
    constructor(slary) {
        this.slary = slary
    }
    project = "wfm"
    frontEnd(name) {
       return "I'm frontEnd my name's " + name + " start at " + this.project + " slary is " + this.slary
    }
    backEnd(name) {
        return "I'm BackEnd my name's " + name + " start at " + this.project + " slary is " + this.slary
    }
}

console.log(new motherDev(222222).frontEnd('anuluck niyom'))
console.log(new motherDev(222222).backEnd('anuluck niyom'))