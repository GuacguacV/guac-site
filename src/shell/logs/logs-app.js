
import { Application } from "../../system/application.js";
import { ICONS } from "../../config/icons.js";
import "./logs.css";

export class LogsApp extends Application {
  static config = {
    id: "logs",
    title: "Logs",
    description: "Personal logs and thoughts.",
    icon: ICONS.logs,
    width: 500,
    height: 400,
    resizable: true,
    isSingleton: true,
  };

  _createWindow() {
    this.window = new $Window({
      title: "Logs.txt - Notepad",
      icons: ICONS.logs,
      width: LogsApp.config.width,
      height: LogsApp.config.height,
    });

    this.window.$content.addClass("logs-app");

    this.window.$content.html(`
      <div class="logs-paper">
        <div class="logs-textarea">
Little thoughts &amp; future plans
- NOTE: If the site breaks, just refresh! Im 99% sure there shouldn't be any errors here..?
- i plan on making the songs interactable and playable
- song section on my own bio
- thinking of making these songs in 8-bit?
- this site lowkey a work in progress-- just like me!
- if you have any ideas, feel free to email me! check my bio for my email contact :D
        </div>
      </div>
    `);

    return this.window;
  }
}