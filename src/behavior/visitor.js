class RockMusicVisitor{
  visit(musicLibrary) {
      var rockPlayList=[]; 
      var index = 0;
      var songlist = musicLibrary.songsList.length 
      for(var i=0; i<songlist; i++){
          var song = musicLibrary.songsList[i]
          if(song.getGenre() == "Rock"){
              rockPlayList[index] = song.getName()
              index++
          }
      }
      return rockPlayList
  }
}

class Song{
  constructor(name,genre){
      this.name = name
      this.genre = genre
  }

  getName(){
      return this.name
  }
  getGenre(){
      return this.genre
  }
}

class MusicLibrary{
  constructor(){
      this.songsList = []
  }
  addSong(song){
      this.songsList.push(song)
  }
  accept(visitor){
      return visitor.visit(this)
  }
}