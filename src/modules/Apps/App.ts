export class App {
  public constructor(app: Partial<App>) {
    for (const [key, value] of Object.entries(app)) {
      this[key] = value;
    }
  }

  public id: string = "";

  public name: string = "";

  public description: string = "";

  // TODO: Add readme
  // public readme: string;

  // TODO: Add relationship to author type
  public author: string = "";
}
