//teams info and events info
var team1 = { "Team_name" : "Go Corona",
        "member":[
            {name:"Layo",       matches:"3",points:"10",rank:"Captain"},
            {name:"Arjun",      matches:"3",points:"8",rank:"Vice Captain"},
            {name:"Arya",       matches:"2",points:"7",rank:"Vice Captain"},
            {name:"Jeffin",     matches:"3",points:"8",rank:"チーム"},
            {name:"Christeena", matches:"4",points:"13",rank:" ACE "},
            {name:"Suby",       matches:"2",points:"11",rank:"チーム"},
            {name:"Aswathy",    matches:"2",points:"7",rank:"チーム"},
            {name:"LOGO",       matches:"1",points:"20",rank:"チーム"},
            {name:"Crossword",  matches:"1",points:"10",rank:"チーム"},
            {name:"Negative point",matches:"1",points:"-2",rank:"チーム"}
            ]
            };
var team2 = { "Team_name" : "Annamma's Army",
        "member":[
            {name:"Sneha Anna",         matches:"4",points:"5",rank:"Captain"},
            {name:"Mishab",             matches:"2",points:"3",rank:"Vice Captain"},
            {name:"Navneet",            matches:"2",points:"6",rank:"チーム"},
            {name:"Likitha",            matches:"4",points:"9",rank:"チーム"},
            {name:"Abhinand",           matches:"3",points:"15",rank:" ACE "},
            {name:"Nimisha",            matches:"2",points:"7",rank:"チーム"},
            {name:"Sreedevi",           matches:"3",points:"11",rank:"チーム"},
            {name:"LOGO",               matches:"1",points:"20",rank:"チーム"},
            {name:"Crossword",          matches:"1",points:"15",rank:"チーム"},
            {name:"Negative point",     matches:"1",points:"0",rank:"チーム"}
                ]
};
var team3 = { "Team_name" : "Veetil Iri🦚",
        "member":[
            {name:"Nisha",          matches:"4",points:"7",rank:"Captain"},
            {name:"Melvin",         matches:"4",points:"11",rank:"Vice Captain"},
            {name:"Pavithra",       matches:"3",points:"0",rank:" ACE "},
            {name:"Shishir",        matches:"1",points:"7",rank:"チーム"},
            {name:"Sneha Sara",     matches:"3",points:"17",rank:" ACE "},
            {name:"Devika",         matches:"3",points:"8",rank:"チーム"},
            {name:"Bipin",          matches:"1",points:"5",rank:"チーム"},
            {name:"Renz",           matches:"1",points:"0",rank:"チーム"},
            {name:"LOGO",           matches:"1",points:"20",rank:"チーム"},
            {name:"Crossword",      matches:"1",points:"0",rank:"チーム"},
            {name:"Negative point", matches:"1",points:"0",rank:"チーム"}
                ]
};
var team4 = { "Team_name" : "Nammal Powlikyum",
        "member":[
            {name:"Shuhaib",         matches:"3",points:"6",rank:"Captain"},
            {name:"Ananthu",         matches:"2",points:"11",rank:"Vice Captain"},
            {name:"Revathy",         matches:"3",points:"5",rank:"チーム"},
            {name:"Reenu",           matches:"3",points:"19",rank:" ACE "},
            {name:"Sandra",          matches:"4",points:"20",rank:"チーム"},
            {name:"Aparna",          matches:"2",points:"1",rank:"チーム"},
            {name:"Minhaj",          matches:"3",points:"10",rank:"チーム"},
            {name:"LOGO",            matches:"1",points:"20",rank:"チーム"},
            {name:"Crossword",       matches:"1",points:"20",rank:"チーム"},
            {name:"Negative point",  matches:"1",points:"0",rank:"チーム"}
                ]
};            


var eventsx={"events":[
    {
        name:"Quiz",
        tier:"2",
        winner1:"",
        winner2:"",
        winner3:"",
        status:"incomplete",
        finished:""

    },
    {
        name:"Cartoon Drawing",
        tier:"2",
        winner1:"Abhinand(10)",
        winner2:"Suby(7)",
        winner3:"Revathy(4)",
        status:"",
        finished:"Completed"
    },
    {
        name:"Potrait Drawing",
        tier:"2",
        winner1:"Sandra(10)",
        winner2:"Shishir(7)",
        winner3:"Arjun(4)",
        status:"",
        finished:"Completed"
    },
    {
        name:"Story telling",
        tier:"2",
        winner1:"Ananthu(10)",
        winner2:"Arya(7)",
        winner3:"Nisha(4)",
        status:"",
        finished:"Completed"
    },
    {
        name:"Singing ",
        tier:"2",
        winner1:"Christeena(10)",
        winner2:"Sneha sara(7)",
        winner3:"Reenu(4)",
        status:"",
        finished:"completed"
    },
    {
        name:"Essay writing(Malayalam)",
        tier:"1",
        winner1:"Jeffin(5)",
        winner2:"Devika(3)",
        winner3:"Aparna(1)",
        status:"",
        finished:"Completed"
    },
    {
        name:"Essay writing(English)",
        tier:"1",
        winner1:"Reenu(5)",
        winner2:"Nisha(3)",
        winner3:"Navneet(1)",
        status:"",
        finished:"Completed"
    },
    {
        name:"Photo editing",
        tier:"1",
        winner1:"Navneet(5)",
        winner2:"Layo(3)",
        winner3:"Shuhaib(1) & Melvin(1)",
        status:"",
        finished:"Completed"
    },
    {
        name:"Prank call",
        tier:"1",
        winner1:"",
        winner2:"",
        winner3:"",
        status:"incomplete",
        finished:""
    },
    {
        name:"Imitate teacher",
        tier:"1",
        winner1:"Minhaj(5) & Bibin(5)",
        winner2:"Likitha(3) & Arjun(3)",
        winner3:"",
        status:"",
        finished:"Completed"
    },
    {
        name:"Product using waste materials",
        tier:"2",
        winner1:"Sandra(10)",
        winner2:"Sreedevi(7) & Nimisha(7)",
        winner3:"Shuhaib(4) & Suby(4)",
        status:"",
        finished:"Completed"
    },
    {
        name:"Dubbing ",
        tier:"2",
        winner1:"",
        winner2:"",
        winner3:"",
        status:"incomplete",
        finished:""
    },
    {
        name:"Ludo ",
        tier:"1",
        winner1:"Abhinand(5)",
        winner2:"Jeffin(3)",
        winner3:"Shuhaib(1)",
        status:"",
        finished:"completed"
    },
    {
        name:"Crossword (Team) ",
        tier:"3",
        winner1:"Nammal Pwolikkum(20)",
        winner2:"Annamma's Army(15)",
        winner3:"Go corona(10)",
        status:"",
        finished:"Completed"
    },
    {
        name:"Calligraphy ",
        tier:"2",
        winner1:"Reenu(10)",
        winner2:"Aswathy(7)",
        winner3:"Sneha Anna(4)",
        status:"",
        finished:"Completed"
    },
    {
        name:"8 - ball Pool",
        tier:"1",
        winner1:"Minhaj(5)",
        winner2:"Mishab(3)",
        winner3:"Arjun(1)",
        status:"",
        finished:"Completed"
    },
    {
        name:"Modelling ",
        tier:"2",
        winner1:"Melvin & Sneha Sara(10)",
        winner2:"Layo & Christeena(7)",
        winner3:"Mishab & Sreedevi(4)",
        status:"",
        finished:"Completed"
    },
    {
        name:"Dancing ",
        tier:"1",
        winner1:"Devika(5)",
        winner2:"Christeena(3)",
        winner3:"Sneha Anna (1) & Ananthu km(1)",
        status:"",
        finished:"Completed"
    },
    {
        name:"Sudoku (Team)",
        tier:"3",
        winner1:"",
        winner2:"",
        winner3:"",
        status:"incomplete",
        finished:""
    },
    {
        name:"Poem Writing ",
        tier:"1",
        winner1:"Sneha Sara(5)",
        winner2:"Likitha(3)",
        winner3:"Layo(1)",
        status:"",
        finished:"Completed"
    },
    {
        name:"Poem Recitation ",
        tier:"1",
        winner1:"Sneha Sara(5)",
        winner2:"Likitha(3)",
        winner3:"Revathi(1)",
        status:"",
        finished:"Completed"
    }
]};
