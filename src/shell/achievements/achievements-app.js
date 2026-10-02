import { Application } from "../../system/application.js";
import { ICONS } from "../../config/icons.js";
import "./achievements.css";

/*
 * ============================================================
 * ACHIEVEMENTS
 * ============================================================
 * Add, remove, or edit achievements here.
 *
 * type can be:
 * "real"   = genuine achievement
 * "funny"  = joke achievement
 */

const ACHIEVEMENTS = [
  {
    type: "real",
    title: "LAW STUDENT",
    description:
      "Studying Law and somehow still voluntarily signing up for more work.",
  },
  {
    type: "real",
    title: "BAIL CHALLENGE",
    description:
      "Scored high in a Bail Challenge, competing against other law students and nearly making it to the semi-finals.",
  },
  {
    type: "real",
    title: "MOOTER",
    description:
      "So close yet so far; Participated and reached semi-finalist status in various mooting and advocacy competitions.",
  },
  {
    type: "real",
    title: "NEGOTIATOR",
    description:
      "Took part in a Negotiations Challenge and bargained like his life depended on it.",
  },
  {
    type: "real",
    title: "FORVIS MAZARS",
    description:
      "Gained experience in tax advisory, legal research, and professional work through Forvis Mazars.",
  },
  {
    type: "real",
    title: "PRO BONO",
    description:
      "Worked on the Sequentus Pro Bono scheme. Ensured that progress was being made weekly.",
  },
  {
    type: "real",
    title: "SPACE LAWYER?",
    description:
      "Works with the SSI, combining an interest in astronomy with a questionably low amount of legal knowledge.",
  },
  {
    type: "funny",
    title: "CHRONICALLY AMBITIOUS",
    description:
      "Has somehow developed the habit of applying for opportunities before deciding whether there is enough time to actually do them.",
  },
  {
    type: "funny",
    title: "ONE MORE APPLICATION",
    description:
      "Opened another application form despite already having several deadlines approaching.",
  },
  {
    type: "funny",
    title: "SLEEP IS OPTIONAL",
    description:
      "Successfully demonstrated that productivity can, in fact, be achieved through increasingly questionable sleep schedules (potentially suffering from a sleeping disorder).",
  },
  {
    type: "funny",
    title: "OVERQUALIFIED",
    description:
      "Currently attempting to become increasingly overqualified for problems that have not yet occurred.",
  },
  {
    type: "funny",
    title: "WEBSITE DEVELOPER",
    description:
      "Started building a Windows 98 website despite having very little idea what most of the code does.",
  },
];

export class AchievementsApp extends Application {
  static config = {
    id: "achievements",
    title: "Achievements",
    description: "A collection of Alivent's achievements and experience.",
    icon: ICONS.achievements,
    width: 620,
    height: 560,
    resizable: true,
    isSingleton: true,
  };

  constructor(config) {
    super(config);
    this.currentAchievement = 0;
  }

  _createWindow() {
    const win = new $Window({
      title: this.title,
      outerWidth: this.width,
      outerHeight: this.height,
      resizable: this.resizable,
      minimizeButton: true,
      maximizeButton: true,
      closable: true,
      icons: ICONS.windows,
    });

    win.$content.html(`
      <div class="achievements-page">

        <div class="achievements-topbar">
          <span>ACHIEVEMENT SYSTEM</span>
          <span class="achievements-version">ALIVENT.EXE</span>
        </div>

        <div class="achievements-divider"></div>

        <div class="achievement-viewer">

          <div class="achievement-unlocked">
            ACHIEVEMENT UNLOCKED
          </div>

          <div class="achievement-icon">
            ★
          </div>

          <div class="achievement-type"></div>

          <h1 class="achievement-title"></h1>

          <p class="achievement-description"></p>

          <div class="achievement-progress"></div>

          <div class="achievement-navigation">
            <button class="achievement-button achievement-back">
              ← BACK
            </button>

            <button class="achievement-button achievement-next">
              NEXT →
            </button>
          </div>

        </div>

      </div>
    `);

    this.window = win;

    this._updateAchievement();

    win.$content.on("click", ".achievement-next", () => {
      this._nextAchievement();
    });

    win.$content.on("click", ".achievement-back", () => {
      this._previousAchievement();
    });

    win.center();
    win.focus();

    return win;
  }

  _updateAchievement() {
    if (!this.window) return;

    const content = this.window.$content;

    const isFinal =
      this.currentAchievement >= ACHIEVEMENTS.length;

    if (isFinal) {
      content.find(".achievement-unlocked").text("YOU FOUND THE END");
      content.find(".achievement-icon").text("★");
      content.find(".achievement-type").text("FINAL SCREEN");
      content.find(".achievement-title").text("THAT'S ALL, FOLKS.");
     content
  .find(".achievement-description")
  .html(
    "Congratulations.<br><br>" +
    "There was absolutely no reason for this to be this elaborate."
  );
      content
        .find(".achievement-progress")
        .text(`${ACHIEVEMENTS.length} / ${ACHIEVEMENTS.length}`);

      content.find(".achievement-back").show();
      content.find(".achievement-next").hide();

      return;
    }

    const achievement = ACHIEVEMENTS[this.currentAchievement];

    content.find(".achievement-unlocked").text("ACHIEVEMENT UNLOCKED");

    content.find(".achievement-icon").text("★");

    content
      .find(".achievement-type")
      .text(achievement.type === "real" ? "PERSONAL RECORD" : "BONUS ACHIEVEMENT");

    content.find(".achievement-title").text(achievement.title);

    content.find(".achievement-description").text(achievement.description);

    content
      .find(".achievement-progress")
      .text(
        `${String(this.currentAchievement + 1).padStart(2, "0")} / ${String(
          ACHIEVEMENTS.length,
        ).padStart(2, "0")}`,
      );

    if (this.currentAchievement === 0) {
  content.find(".achievement-back").hide();
} else {
  content.find(".achievement-back").show();
}

content.find(".achievement-next").show();
content.find(".achievement-next").text("NEXT →");
  }

  _nextAchievement() {
    if (this.currentAchievement < ACHIEVEMENTS.length) {
      this.currentAchievement++;
      this._updateAchievement();
    } else {
      window.open("mailto:yes.iexist0@gmail.com", "_blank");
    }
  }

  _previousAchievement() {
    if (this.currentAchievement > 0) {
      this.currentAchievement--;
      this._updateAchievement();
    }
  }
}