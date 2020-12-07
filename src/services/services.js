export default class Service {

  getResource = async (url) => {
    const res = await fetch(`http://localhost:3001${url}`);
    if(!res.ok){
      throw new Error(`Cound not fetch ${url}, status: ${res.status}`);
    }
    return await res.json();
  }
  getFirst = async () => {
    return await this.getResource('/first');
  };
  getSecond = async () => {
    return await this.getResource('/second');
  };
  getScore = async () => {
    return await this.getResource('/score');
  };
}