// classes of library with
//parent class

class Media {
    constructor(title){
        this._title = title;
        this._isCheckedOut = false;
        this._ratings = [];
    }
    
    get title(){
      return this._title;
    }
  
    get isCheckedOut(){
      return this._isCheckedOut;
    }
    set isCheckedOut(isCheckedOut){
      this._isCheckedOut = isCheckedOut;
    }
  
    get ratings(){
      return this._ratings;
    }
  
    toggleCheckOutStatus (){
      if(this._isCheckedOut===true){
        return this._isCheckedOut = false;
      } else {
        return this._isCheckedOut = true;
      }
    }
     getAverageRating () {
       let ratingsSum =this._ratings.reduce((currentSum, rating) => currentSum + rating, 0); 
       return ratingsSum/this._ratings.length;
     }
     addRating (ratings) {
       this._ratings.push(ratings);
     }
  }
  // sub class 1
  class Book extends Media {
    constructor(author, title, pages){
        super(title);
          this._author = author;
          this._pages = pages;
     }
     get author(){
       return this._author;
    }
    get pages(){
      return this._pages;
    }
  }
  
  // sub class 2
  class Movie extends Media {
    constructor(director, title, runTime){
        super(title);
          this._director = director;
          this._runTime = runTime;
    }
    get director(){
     return this._director;
    }
    get runTime(){
     return this._runTime;
    }
  }
  
  //sub class 3s
  class CD extends Media {
    constructor(artist, title, songs){
      super(title);
      this._artist = artist;
      this._songs = songs;
    }
    get artist(){
      return this._artist;
    }
    get songs(){
      return this._songs;
    }
  
    shuffle(){
      const randomSong = Math.floor(Math.random() * this.songs.length);
      return songs[randomSong];
    }
  }
  
  const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);
  const danBook = historyOfEverything.toggleCheckOutStatus();
  console.log(danBook);
  const danRate1 = historyOfEverything.addRating(4);
  const danRate2 = historyOfEverything.addRating(5);
  const danRate3 = historyOfEverything.addRating(5);
  
  const danAve = historyOfEverything.getAverageRating();
  
  console.log(danAve);
  console.log(historyOfEverything);
  const speed = new Movie('Jan de Bont', 'Speed', 116);
   
  const danSpeed = speed.toggleCheckOutStatus();
  console.log(danSpeed);
  
  const danSpdRate1 = speed.addRating(1);
  const danSpdRate2 = speed.addRating(1);
  const danSpdRate3 = speed.addRating(5);
  const danAveSpeed = speed.getAverageRating();
  console.log(danAveSpeed);
  