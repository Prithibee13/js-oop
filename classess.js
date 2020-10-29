//Using clasess

class lanyster
{
    constructor()
    {
        this.Member = ["Tywin Lanyster","Jamie Lanyster","Cersei Lanyster","Tiryan Lanyster"];
    }
    Debt()
    {
        for(var i=0;i<4;i++)
        {
            console.log(this.Member[i]);
        }
    }

}

class Stark
{
    constructor()
    {
        this.Member = ["Edderd Stark", "Catlyn Stark", "Robb Stark", "John Snow","Sansa Stark", "Rickon Stark", "Brandon Stark", "Arya Stark"];
    }

    north()
    {
        for(let i=0;i<this.Member.length;i++)
        {
            console.log(this.Member[i]);
        }
    }
}

let g = new lanyster();
g.Debt();
console.log("\n\n")

let w = new Stark();
w.north();