import { Application } from "../../system/application.js";
import { ICONS } from "../../config/icons.js";
import "./bio.css";

export class BioApp extends Application {
  static config = {
    id: "bio",
    title: "Bio",
    description: "A little bit about Alivent.",
    icon: ICONS.about,
    width: 620,
    height: 560,
    resizable: true,
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
      maximizeButton: true,
      closable: false,
      icons: ICONS.windows,
    });

    win.$content.html(`
      <div class="bio-page">

        <div class="bio-header">
          <div class="bio-name">ALIVENT.EXE</div>
          <div class="bio-title">Law student · CONTACT: yes.iexist0@gmail.com</div>
        </div>

        <div class="bio-divider"></div>

        <div class="bio-main">

          <div class="bio-profile">
            <div class="bio-pfp-placeholder">
  <img
    src="/guac-site/icons/ME-ezgif.com-resize.gif"
    alt="Alivent"
    class="bio-pfp"
  />
</div>

            <div class="bio-profile-name">Alivent/Guac</div>
            <div class="bio-profile-title">Fuckass law student</div>
          </div>

          <div class="bio-lists">

            <section class="bio-section">
              <h2>Interests</h2>
              <ul>
                <li>Astronomy</li>
                <li>Law</li>
                <li>Philosophy</li>
                <li>Psychology</li>
                <li>Traveling</li>
                <li>Life-maxxing</li>
              </ul>
            </section>

            <section class="bio-section">
              <h2>Loved Games</h2>
              <ul>
                <li>Roblox</li>
                <li>Balatro</li>
                <li>Bloons TD 6</li>
                <li>Hades</li>
                <li>CRK</li>
              </ul>
            </section>

          </div>

        </div>

        <div class="bio-about">
          <div class="bio-about-label">Something About Me</div>

          <p>
            "An overachieving/compensating perfectionist who loves applying
            for competitions and roles that challenge my current abilities--
            I do my best!"
          </p>
        </div>

      </div>
    `);

    win.center();
    win.focus();

    return win;
  }
}

