
import { Application } from "../../system/application.js";
import { ICONS } from "../../config/icons.js";

export class VisitorStatsApp extends Application {
  static config = {
    id: "visitor-stats",
    title: "Visitor Stats",
    description: "Website visitor statistics.",
    icon: ICONS.visitorStats,
    width: 420,
    height: 400,
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
      <style>
        .visitor-page {
          box-sizing: border-box;
          width: 100%;
          min-height: 100%;
          padding: 20px;
          font-family: "Pixelify Sans", sans-serif;
          color: #040504;
          background: #866696;
        }

        .visitor-heading {
          margin: 0 0 22px;
          font-size: 24px;
          font-weight: 700;
          letter-spacing: 1px;
        }

        .visitor-stat {
          margin: 16px 0;
          padding: 12px 14px;
          background: #a982b7;
          border: 2px solid #040504;
          box-shadow: 3px 3px 0 #040504;
          font-size: 16px;
        }

        .visitor-number {
          font-family: Arial, sans-serif;
          font-size: 25px;
          font-weight: 700;
          margin-left: 5px;
        }

        .visitor-divider {
          border: 0;
          border-top: 2px solid #040504;
          margin: 24px 0 16px;
        }

        .visitor-note {
          font-size: 13px;
          line-height: 1.6;
        }

        .visitor-disclaimer {
          font-size: 11px;
          line-height: 1.6;
          opacity: 0.85;
        }
      </style>

      <div class="visitor-page">
        <h2 class="visitor-heading">VISITOR STATISTICS</h2>

        <div class="visitor-stat">
          Total visits:
          <strong class="visitor-number" id="visitor-total">
            Loading...
          </strong>
        </div>

        <div class="visitor-stat">
          Today's visits:
          <strong class="visitor-number" id="visitor-today">
            Loading...
          </strong>
        </div>

        <hr class="visitor-divider">

        <p class="visitor-note">
          Statistics provided by GoatCounter.
        </p>

        <p class="visitor-disclaimer">
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