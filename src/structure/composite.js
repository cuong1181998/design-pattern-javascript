class Directory {
  constructor(name, lastModified, size) {
    this.name = name;
    this.lastModified = lastModified;
    this.size = size;
  }
  
  getLastModified() { }
  getSize() { }
  getName() { }
}

class File extends Directory {
  constructor(name, lastModified, size) {
    super(name, lastModified, size)
  }

  getLastModified() {
    return this.lastModified;
  }

  getSize() {
    return this.size;
  }

  getName() {
    return this.name;
  }
}

class Folder extends Directory{
  constructor(name) {
    this.name = name;
    this.files = []
    this.lastModified = 0;
    this.size = 0;
  }

  getLastModified() {
    return this.lastModified;
  }

  getSize() {
    return this.size;
  }

  getName() {
    return this.name;
  }
  
  addFile() { }
  removeFile() {}

}