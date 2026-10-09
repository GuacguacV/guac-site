
import { Application } from "../../system/application.js";
import { ICONS } from "../../config/icons.js";

export class VisitorStatsApp extends Application {
  static config = {
    id: "visitor-stats",
    title: "Visitor Stats",
    description: "Website visitor statistics.",
    icon: ICONS.visitorStats,
    width: 420,
    height: 340,
    resizable: false,
    isSingleton: true,
  };

  constructor(config) {
    super(config);
  }

  _createWindow() {
    const win = new $Window({
      title: this.title,
      outerWidth: this.width,
      outerHeight: this.height,
      resizable: this.resizable,
      minimizeButton: true,
      maximizeButton: false,
      closable: true,
      icons: ICONS.windows,
    });

    win.$content.html(`
      <div style="padding: 20px; font-family: Arial, sans-serif;">
        <h2 style="margin-top: 0;">Visitor Statistics</h2>

        <p>
          Total visits:
          <strong id="visitor-total">Loading...</strong>
        </p>

        <p>
          Today's visits:
          <strong id="visitor-today">Loading...</strong>
        </p>

        <hr>

        <p style="font-size: 12px;">
          Statistics provided by GoatCounter.
        </p>

        <p style="font-size: 11px;">
          Note: Visitor statistics may be incomplete for visitors using
          ad blockers or privacy extensions that block analytics.
        </p>
      </div>
    `);

    fetch("https://guac-visitor-stats.joacquin-villar1.workers.dev/stats")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        const total = win.$content.find("#visitor-total");
        const today = win.$content.find("#visitor-today");

        total.text(data.total ?? "Unavailable");

        const todayDate = new Intl.DateTimeFormat("en-CA", {
          timeZone: "Europe/London",
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }).format(new Date());

        const todayStats = data.stats?.find(
          (day) => day.day === todayDate
        );

        today.text(todayStats ? todayStats.daily : 0);
      })
      .catch((error) => {
        console.error("Failed to load visitor statistics:", error);
        win.$content.find("#visitor-total").text("Unavailable");
        win.$content.find("#visitor-today").text("Unavailable");
      });

    win.center();
    win.focus();

    return win;
  }
}