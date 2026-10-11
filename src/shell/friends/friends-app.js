
import { Application } from "../../system/application.js";
import { ICONS } from "../../config/icons.js";
import "./friends.css";

/*
 * ============================================================
 * FRIENDS
 * ============================================================
 * Add, remove, or edit friends in this list.
 * The profile updates automatically when you select a friend.
 */

const FRIENDS = [
  {
    name: "Lumiere",
    nickname: "Nickname / Alias",
    about: "Faggot.",
    personality: "Gay.",
    favourites: "Cock.",
    songTitle: "Man",
    artist: "Adela",
    songNote: "Because he likes men. He is gay.",
  },
  {
    name: "Klee",
    nickname: "Nickname / Alias",
    about: "Awesome.",
    personality: "Business-minded.",
    favourites: "Money.",
    songTitle: "失眠飞行 (Insomnia Flight)",
    artist: "接个吻，开一枪, 沈以诚, 薛黛霏",
    songNote: "XY.",
    image: "/guac-site/pfps/klee-pfp.png"
  },
  {
    name: "Stephanie",
    nickname: "Nickname / Alias",
    about: "An aspiring future wife, dedicating my strength, hard work, and resilience to my future family. Interested in business, finance, and compliance law which I look forward to applying in my practice internationally. Heavily into wasians and arm workouts.",
    personality: "Good mixture of nonchalant and funny. Into wasians. Ambivert. Loves calm sports and hobbies. Loves hanging out with girls and talking about anything life or fun. Down for anything, and wants to life max.",
    favourites: "•  Wasians, Reading, Football and equestrian, Piano, Gym, pokemon, Newjeans and Blackpink, Religious Christian/Catholic, Fashion (high luxury brands - Bape, Supreme, LV, etc)",
    songTitle: "Steeeam",
    artist: "Shelly",
    songNote: "XY.",
    image: "/guac-site/pfps/steph-pfp.png"
  },
  {
    name: "Audrey",
    nickname: "Nickname / Alias",
    about: "Not gay.",
    personality: "Admirable.",
    favourites: "Baking.",
    songTitle: "Song Title",
    artist: "Artist Name",
    songNote: "XY.",
  },
  {
    name: "Nico",
    nickname: "Nickname / Alias",
    about: "Fuckin' gay and awesome.",
    personality: "Raccoon.",
    favourites: "Trash.",
    songTitle: "Song Title",
    artist: "Artist Name",
    songNote: "XY.",
    image: "/guac-site/pfps/Nico-pfp.png",
  },
  {
    name: "Foxwarde",
    nickname: "Wardy",
    about: "He's a bit of a loner, but he's nice. --- (he told me to write this for him, and VS code autosuggested that description)",
    personality: "Reclusive prick but lowkey kinda chill.",
    favourites: "Halo Reach.",
    songTitle: "In the air tonight",
    artist: "Phil Collins",
    songNote: "\"I like him. He's a hot man.\"",
    image: "/guac-site/pfps/fuckwarde.png",
  },
   {
    name: "Spadree",
    nickname: "Nickname / Alias",
    about: "Gay.",
    personality: "Fuckin' faggot.",
    favourites: "Bingo.",
    songTitle: "Song Title",
    artist: "Artist Name",
    songNote: "XY.",
  },
   {
    name: "Jay",
    nickname: "Nickname / Alias",
    about: "Science guy in oncology/hematology, full time dumbass and part time dog.",
    personality: "Gay asf.",
    favourites: "This dog is really gay.",
    songTitle: "Hello Rocks - (From 'Hoa' Video Game Soundtrack)",
    artist: "Johannes Johansson",
    songNote: "XY.",
    image: "/guac-site/pfps/jaydog.png",
    socials: [
    { name: "Discord", url: "https://discord.com/users/189223468212944906" },
],
  },
   {
    name: "Exquisite",
    nickname: "Nickname / Alias",
    about: "XY.",
    personality: "ENTJ-A.",
    favourites: "Trading, Driving, Gaming.",
    songTitle: "Feel Good Inc.",
    artist: "Gorillaz",
    songNote: "XY.",
    image: "/guac-site/pfps/exquisite-pfp.png",
    socials: [
    { name: "X", url: "https://x.com/dossiervrp?s=11&t=3yvw_aNiWeugJikyqQrcPg" },
    { name: "Instagram", url: "https://www.instagram.com/exquisite_ow?utm_source=ig_web_button_share_sheet&vrfl=ZDNlZDc0MzIxNw=="},
  ],
  },
   {
    name: "ArchonFox",
    nickname: "Nickname / Alias",
    about: "Gay",
    personality: "Fag.",
    favourites: "Echo.",
    songTitle: "Song Title",
    artist: "Artist Name",
    songNote: "XY.",
  },
  {
    name: "Friend 6 or 7",
    nickname: "Nickname / Alias",
    about: "XY.",
    personality: "XY.",
    favourites: "XY.",
    songTitle: "Song Title",
    artist: "Artist Name",
    songNote: "XY.",
  },
];

export class FriendsApp extends Application {
  static config = {
    id: "friends",
    title: "FriendS",
    description: "A little directory of my friends.",
    icon: ICONS.friends,
    width: 760,
    height: 560,
    resizable: true,
    isSingleton: true,
  };

  constructor(config) {
    super(config);
    this.currentFriend = 0;
  }

  _createWindow() {
    const win = new $Window({
      title: this.title,
      outerWidth: this.width,
      outerHeight: this.height,
      resizable: true,
      minimizeButton: true,
      maximizeButton: true,
      closable: true,
      icons: ICONS.windows,
    });

    win.$content.html(`
      <div class="friends-page">
        <div class="friends-heading">
          <div class="friends-heading-title">My Friends</div>
          <div class="friends-heading-subtitle">
            A little corner of the internet for the people in my life.
          </div>
        </div>

        <div class="friends-layout">
          <aside class="friends-sidebar">
            <div class="friends-sidebar-title">FRIENDS LIST</div>
            <div class="friends-list"></div>
            <div class="friends-count"></div>
          </aside>

          <main class="friends-profile">
            <div class="friends-profile-scroll">
              <div class="friends-profile-header">
                <div class="friends-avatar"></div>
                <div class="friends-name-block">
                  <div class="friends-name"></div>
                  <div class="friends-nickname"></div>
                </div>
              </div>

              <div class="friends-divider"></div>

              <section class="friends-section">
                <div class="friends-section-title">ABOUT ME</div>
                <div class="friends-about"></div>
              </section>

              <section class="friends-section">
                <div class="friends-section-title">THEIR SOUNDTRACK ♪</div>
                <div class="friends-music">
                  <div class="friends-album-art">♫</div>
                  <div class="friends-track-info">
                    <div class="friends-song-title"></div>
                    <div class="friends-artist"></div>
                    <div class="friends-song-note"></div>
                  </div>
                  <div class="friends-play-placeholder" title="Music player coming soon">▶</div>
                </div>
                <div class="friends-music-note">
                  Music playback coming soon!
                </div>
              </section>

              <section class="friends-section">
                <div class="friends-section-title">PERSONALITY</div>
                <div class="friends-personality"></div>
              </section>

              
<section class="friends-section">
  <div class="friends-section-title">FAVOURITES &amp; HOBBIES</div>
  <div class="friends-favourites"></div>
</section>

<section class="friends-section">
  <div class="friends-section-title">Socials ↗</div>
  <div class="friends-socials"></div>
</section>

            </div>
          </main>
        </div>
      </div>
    `);

    this.window = win;
    this._renderFriends();

    win.$content.on("click", ".friends-list-item", (event) => {
      const index = Number(
        $(event.currentTarget).attr("data-friend-index")
      );

      this.currentFriend = index;
      this._renderFriends();
    });

    win.center();
    win.focus();

    return win;
  }

  _renderFriends() {
    if (!this.window) return;

    const content = this.window.$content;

    const listHTML = FRIENDS.map((friend, index) => `
      <button
        type="button"
        class="friends-list-item ${index === this.currentFriend ? "is-selected" : ""}"
        data-friend-index="${index}"
      >
        <span class="friends-list-icon">☺</span>
        <span class="friends-list-name">${friend.name}</span>
      </button>
    `).join("");
content.find(".friends-list").html(listHTML);
content.find(".friends-count").text(
  `${FRIENDS.length} friends in directory`
);

const friend = FRIENDS[this.currentFriend];
if (!friend) return;

const avatar = content.find(".friends-avatar");

if (friend.image) {
  const img = $("<img>")
    .attr("src", friend.image)
    .attr("alt", friend.name + "'s profile picture");

  avatar.empty().append(img);
} else {
  avatar.text("☺");
}

content.find(".friends-name").text(friend.name);
content.find(".friends-nickname").text(friend.nickname || "");
content.find(".friends-about").text(friend.about || "");
content.find(".friends-personality").text(friend.personality || "");
content.find(".friends-favourites").text(friend.favourites || "");
content.find(".friends-song-title").text(friend.songTitle || "");
content.find(".friends-artist").text(friend.artist || "");
content.find(".friends-song-note").text(friend.songNote || "");

const socialsContainer = content.find(".friends-socials");
socialsContainer.empty();

if (friend.socials && friend.socials.length) {
  friend.socials.forEach((social) => {
    const link = $("<a>")
      .attr("href", social.url)
      .attr("target", "_blank")
      .attr("rel", "noopener noreferrer")
      .text(social.name);

    socialsContainer.append(link);
  });
}
}
}