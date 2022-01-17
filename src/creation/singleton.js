
class ConfigureValues {
  constructor({ xPoint = 0, yPoint = 0, shape = null }) {
    this.xPoint = xPoint;
    this.yPoint = yPoint;
    this.shape = shape;
  }
  
}

class ConfigureValuesSingleton {
  configure = null
  static getConfiguration(config) {
    if (!this.configure) {
      this.configure = new ConfigureValues(config);
    }

    return this.configure;
  }
}

const config = ConfigureValuesSingleton.getConfiguration({ xPoint: 10, yPoint: 10, shape: "rectangle" })

console.log(config)