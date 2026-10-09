
import { Application } from "../../system/application.js";
import { ICONS } from "../../config/icons.js";

export class DergApp extends Application {
  static config = {
    id: "derg",
    title: "Derg",
    description: "A memorial for Derg.",
    icon: ICONS.derg,
    width: 440,
    height: 480,
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
        .derg-page {
          box-sizing: border-box;
          width: 100%;
          height: 100%;
          min-height: 100%;
          padding: 22px 20px;
          overflow-y: auto;
          font-family: "Pixelify Sans", sans-serif;
          color: #fff7ff;
          text-align: center;
          background-image:
            linear-gradient(
              rgba(22, 12, 37, 0.28),
              rgba(22, 12, 37, 0.48)
            ),
            url("/guac-site/icons/purple-sky-pixel.jpg");
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }

        .derg-card {
          box-sizing: border-box;
          width: 100%;
          padding: 22px 16px;
          background: rgba(30, 18, 43, 0.72);
          border: 2px solid #e1c9f0;
          box-shadow: 5px 5px 0 rgba(18, 10, 28, 0.7);
        }

        .derg-profile {
          width: 132px;
          height: 132px;
          object-fit: contain;
          image-rendering: auto;
          border: 3px solid #e1c9f0;
          background: #17101f;
          box-shadow: 4px 4px 0 #100a18;
        }

        .derg-heading {
          margin: 18px 0 8px;
          font-size: 30px;
          line-height: 1.2;
          font-weight: 700;
          letter-spacing: 2px;
          text-shadow: 2px 2px 0 #241331;
        }

        .derg-subtitle {
          margin: 0 0 18px;
          font-size: 13px;
          letter-spacing: 1px;
          color: #e6d2f4;
        }

        .derg-message {
          font-size: 16px;
          line-height: 1.65;
          margin: 12px 0;
        }

        .derg-divider {
          border: 0;
          border-top: 2px solid #c8a6df;
          margin: 20px 0;
        }

        .derg-button {
          font-family: "Pixelify Sans", sans-serif;
          font-size: 15px;
          font-weight: 700;
          padding: 9px 12px;
          color: #241331;
          background: #e1c9f0;
          border: 2px solid #fff0ff;
          box-shadow: 3px 3px 0 #100a18;
          cursor: pointer;
        }

        .derg-button:hover {
          background: #f0ddff;
        }

        .derg-button:active {
          position: relative;
          top: 2px;
          left: 2px;
          box-shadow: 1px 1px 0 #100a18;
        }

        .derg-footer {
          margin: 20px 0 0;
          font-size: 12px;
          letter-spacing: 1px;
          color: #e6d2f4;
        }
      </style>

      <div class="derg-page">
        <div class="derg-card">
          <img
            class="derg-profile"
            src="/guac-site/icons/derg.png"
            alt="Derg"
          >

          <h2 class="derg-heading">Derg</h2>

          <p class="derg-subtitle">IN LOVING MEMORY</p>

          <p class="derg-message">
            Remembering a friend.
          </p>

          <p class="derg-message">
            This little corner of my website is dedicated to my friend Derg.
          </p>

          <hr class="derg-divider">

          <button
            class="derg-button"
            id="derg-memorial-link"
          >
            Visit Derg's memorial
          </button>

          <p class="derg-footer">
            Ad Astra.
          </p>
        </div>
      </div>
    `);

    win.$content.find("#derg-memorial-link").on("click", () => {
      window.open(
        "https://dergology.carrd.co",
        "_blank",
        "noopener,noreferrer"
      );
    });

    win.center();
    win.focus();

    return win;
  }
}