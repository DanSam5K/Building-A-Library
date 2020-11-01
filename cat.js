// parent Class primary middle and High school

class School {
  constructor(name, level, numberOfStudents){
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }
  get name(){
    return this._name;
  }
  get level(){
    return this._level;
  }
  get numberOfStudents(){
    return this._numberOfStudents;
  }

  set numberOfStudents(numberOf){
    if(typeof numberOf === 'number'){
    return this._numberOfStudents = numberOf;
    } else{
      console.log('Invalid input: numberOfStudents must be set to a Number.')
    }
  }
  quickFacts (){
    console.log(`${this.name} educates ${this._numberOfStudents} students at the ${this.level} school level.`)
  }
   static pickSubstituteTeacher (substituteTeachers){
       const genRandom = Math.floor(Math.random()* substituteTeachers.length)
    return substituteTeachers[genRandom];
  }
}
// primary school class
class PrimarySchool extends School{
  constructor(name, numberOfStudents, pickUpPolicy){
    super(name, 'primary', numberOfStudents);
    this._pickUpPolicy = pickUpPolicy;
  }
  get pickUpPolicy (){
    return this._pickUpPolicy;
  }
}
//highschool class
class HighSchool extends School{
  constructor(name, numberOfStudents, sportsTeams){
    super(name, 'high', numberOfStudents);
    this._sportsTeams = sportsTeams;
  }
  get sportsTeams (){
    console.log(this._sportsTeams);
  }
}
//middle school class
class MiddleSchool extends School {
  constructor(name, averageTestScores, schoolOverview){
    super(name, 'middle', numberOfStudenst)
    this._averageTestScores = averageTestScores;
    this._schoolOverview = schoolOverview;
  }
  get averageTestScores(){
    return this._averageTestScores;
  }
  get schoolOverview (){
    return this._schoolOverview;
  }
}


const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.')

lorraineHansbury.quickFacts();
;
let substituteTeacher = ['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli'];
console.log(School.pickSubstituteTeacher(substituteTeacher));

const alSmith = new HighSchool('Al E. Smith', '415', ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);

alSmith.sportsTeams;
