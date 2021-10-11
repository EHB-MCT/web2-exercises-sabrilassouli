class Team{
    constructor(teamname){
        this.teamname = 'kanto';
        this.trainername = 'Ash';
        this.pokemonTeam =[];
    }

describe(){
    return`${this.teamname} with trainer ${this.trainername} has these pokemon: ${[...this.pokemonTeam]}`;
}
}
export default Team;
