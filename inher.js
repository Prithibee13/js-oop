class Member
{
    constructor()
    {
        this.Name1 = ["Jaime","John","Theon","Tyrian","Bran","Sam"];
        this.Name2 = ["Cersei","Sansa","Margery","Yara","Arya","Miesandrei"];
    }
    jef()
    {
        for(let i = 0; i<this.Name1.length;i++)
        {
            console.log(this.Name1[i]);
        }
        for(let j = 0; j<this.Name2.length;j++)
        {
            console.log(this.Name2[j]);
        }
    }

}

class Gender extends Member
{
    constructor()
    {
        super();
        this.G1 = "Male";
        this.G2 = "Female";
    }
    kef()
    {
        console.log("("+this.Name1 + ")"+" "+this.G1);
        console.log("("+this.Name2 + ")"+ " "+this.G2);
    }

}
let Man = new Gender();
Man.kef();
