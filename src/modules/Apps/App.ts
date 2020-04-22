export class App {
  public constructor(app: Partial<App>) {
    for (const [key, value] of Object.entries(app)) {
      this[key] = value;
    }
  }

  public id: string = "";
  public name: string = "";
  public description: string = "";
  public version: string = "";
  public iconURL?: string;
  public url?: string;
  public readmeURL?: string;
  public author?: string;
}
