export class Page {
  name: string;
  websiteId: string;
  title: string;

  constructor(name, websiteId, description) {
    this.name = name;
    this.websiteId = websiteId;
    this.title = description;
  }
}
