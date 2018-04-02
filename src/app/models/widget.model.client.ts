export class Widget {
  name: string;
  widgetType: string;
  pageId: string;
  size: number;
  text: string;
  url: string;
  width: string;
  rows: number;
  placeholder: string;
  formatted: boolean;

  constructor(name: string, type: string, pageId: string, size: number, text: string, width: string,
      url: string, rows: number, placeholder: string, fomatted: boolean) {
    this.name = name;
    this.widgetType = type;
    this.pageId = pageId;
    this.size = size;
    this.width = width;
    this.text = text;
    this.url = url;
    this.rows = rows;
    this.placeholder = placeholder;
    this.formatted = false;
  }
}

