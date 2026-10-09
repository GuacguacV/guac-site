
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
    name: "Kylee",
    nickname: "Nickname / Alias",
    about: "Also gay.",
    personality: "Business-minded.",
    favourites: "Money.",
    songTitle: "Song Title",
    artist: "Artist Name",
    songNote: "XY.",
  },
  {
    name: "Steph",
    nickname: "Nickname / Alias",
    about: "Lesbian.",
    personality: "Faggot.",
    favourites: "Wuh Luh Wuh.",
    songTitle: "October",
    artist: "Girl in Red",
    songNote: "Lesbian song because she is lesbian.",
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
    about: "Gay.",
    personality: "Gay asf.",
    favourites: "This dog is really gay.",
    songTitle: "Song Title",
    artist: "Artist Name",
    songNote: "XY.",
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
  },{
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
}
}