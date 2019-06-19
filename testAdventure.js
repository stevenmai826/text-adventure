const readline = require('readline');

const readlineInterface = readline.createInterface(
{
    input: process.stdin,
    output: process.stdout
});

function ask(questionText) 
{
    return new Promise((resolve, reject) => 
    {
        readlineInterface.question(questionText, resolve);
    });
};

class characterClass
{
    constructor()
    {
        this._health = 0;
        this._strength = 0;
        this._speed = 0;
        this._intelligence = 0;
    }

    get health()
    {return this._health;}

    get strength()
    {return this._strength;}
    
    get speed()
    {return this._speed;}

    get intelligence()
    {return this._intelligence;}

    set health(health)
    {this._health = health;}

    set strength(strength)
    {this._strength = strength;}
    
    set speed(speed)
    {this._speed = speed;}

    set intelligence(intelligence)
    {this._intelligence = intelligence;}

}

class knight extends characterClass
{
    constructor()
    {
        this._health = 20;
        this._strength = 9;
        this._speed = 3;
        this._intelligence = 4;
    }
}

class archer extends characterClass
{
    constructor()
    {
        this._health = 15;
        this._strength = 5;
        this._speed = 9;
        this._intelligence = 6;
    }
}

class mage extends characterClass
{
    constructor()
    {
        this._health = 12;
        this._strength = 3;
        this._speed = 6;
        this._intelligence = 9;
    }
}

const player =
{
    name: null,
    inventory: [],
    moves: [],

}

class enemy
{
    constructor(health,strength,speed,intelligence)
    {
        this._health = health;
        this._strength = strength;
        this._speed = speed;
        this._intelligence = intelligence;
        this._moves = [];
    }

    get health()
    {return this._health;}

    get strength()
    {return this._strength;}
    
    get speed()
    {return this._speed;}

    get intelligence()
    {return this._intelligence;}

    get moves()
    {return this._moves;}

    set health(health)
    {this._health = health;}

    set strength(strength)
    {this._strength = strength;}
    
    set speed(speed)
    {this._speed = speed;}

    set intelligence(intelligence)
    {this._intelligence = intelligence;}

    set moves(move)
    {this._moves.push(move);}

}

class slime extends enemy
{
    constructor(health,strength,speed,intelligence)
    {
        super(health,strength,speed,intelligence);
        this._moves = [tackle()];
    }

    tackle()
    {

    }
}

class map
{
    constructor()
    {

    }
}

class item 
{
    constructor(durability)
    {
        this._durability = durability;
    }

    get durability()
    {return this._durability;}

    set durability(durability)
    {this._durability = durability;}
}

class weapon extends item
{
    constructor(durability,damage)
    {
        super(durability);
        this._damage = damage;
    }

    get damage()
    {return this._damage;}

    set damage(damage)
    {this._damage = damage;}
}

function battle()
{

}

function attack()
{

}

async function startGame() 
{
    player.name = null;
    let userName = await ask('Greetings adventurer! What is your name?\n>_ ');
    player.name = userName;
    let init = await ask(`Welcome ${player.name}!\nAre you ready to enter the Tower?\nType 'yes' or 'no'.>_ `);
    if(init.toLowerCase() === 'yes') 
    {
        console.log(`You enter the first floor of the Tower.\nBAM!\nThe doors slam behind you. Your only options are reaching the top of the Tower or...\ndying.\nGood luck, ${username}!`);
        play();
    }
    else 
    {
        console.log('Okay, some other time!');
        process.exit();
    }
}

async function play() 
{
    let input = await ask('>_');
    let realInput = input.toLowerCase();
  
    //exit
    if(realInput === 'exit') 
    {
        process.exit();
    }
}
  
startGame();