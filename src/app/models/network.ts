export interface INetwork {
  id: number;
  name: string;
}
export class Network implements INetwork {
  public id: number;
  public name: string;

  constructor (network: Network) {
    this.id = network.id;
    this.name = network.name;
  }
}
