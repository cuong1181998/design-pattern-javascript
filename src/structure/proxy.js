class LibraryKiosk {
  open(app) {
      console.log(`Opening ${app}`)
  }    
  connectTo(website) { 
      console.log("Connecting to "+ website); 
  } 
}

class LibraryKioskProxy {
  constructor() {
    const libraryKiosk = new LibraryKiosk();
    this.libraryKiosk = libraryKiosk;
    this.blockApps = ["camera", "photos", "music", "settings"];
    this.blockSites = ["fb.com", "instagram.com", "snapchat.com", "gmail.com"];
  }
  
  open(app) {
    if (this.blockApps.includes(app)) {
      throw `You can't access the ${app}`
    }

    this.libraryKiosk.open(app)
  }   

  connectTo(website) { 
    if (this.blockSites.includes(website)) {
      throw `You can't access the ${website}`
    }

    this.libraryKiosk.connectTo(website)
  }

}

var libraryKiosk = new LibraryKioskProxy(); 
libraryKiosk.open("photos")
libraryKiosk.open("music")
libraryKiosk.open("Chrome")
libraryKiosk.connectTo("booksportal.com"); 
libraryKiosk.connectTo("google.com"); 
libraryKiosk.connectTo("fb.com"); 