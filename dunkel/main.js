/* ==========================================================
   INHALTE – hier pflegst du Hörproben, Videos und Kunden.
   ========================================================== */

// Hörproben: Datei in den Ordner "audio" legen und hier eintragen.
// tags = Filter-Kategorien (frei wählbar, erscheinen automatisch als Buttons)
// gain = Lautstärke-Ausgleich in dB (optional), damit alle Hörproben gleich laut klingen.
//        Gemessen am 11.11.2026, Ziel ca. -12 LUFS: gain = -12 minus gemessener Wert
//        (bei Anhebung höchstens so viel, dass die Spitze 0 dB nicht überschreitet).
const DEMOS = [
  { title: "HD+ Free (FOREAL)",       meta: "Werbung",                file: "audio/hd-plus-free-werbung.mp3",            tags: ["Werbung"], gain: -3.8 },
  { title: "Amazon Music (Eleven Audio)", meta: "Werbung",                file: "audio/amazon-music-werbung.mp3",            tags: ["Werbung"], gain: -6.3 },
  { title: "Sky Cinema",              meta: "Trailer",                file: "audio/sky-cinema-trailer.mp3",              tags: ["Trailer & Voice-Over"], gain: -4.7 },
  { title: "Iperceramica (Just GmbH)", meta: "Werbung",               file: "audio/iperceramica-werbung.mp3",            tags: ["Werbung"], gain: 0.4 },
  { title: "Bilgro Getränke",         meta: "Werbung · Gesang & Off", file: "audio/bilgro-getraenke-werbung.mp3",        tags: ["Werbung", "Gesang"], gain: -4.4 },
  { title: "Sushi Bike (Radioproduktion)", meta: "Imagespot",              file: "audio/sushi-bike-image.mp3",                tags: ["Werbung"], gain: -5.7 },
  { title: "Laserland Dresden",       meta: "Imagespot",              file: "audio/laserland-dresden-image.mp3",         tags: ["Werbung"], gain: -5.9 },
  { title: "Sky True Crime",          meta: "Voice-Over",             file: "audio/sky-crime-voice-over.mp3",            tags: ["Trailer & Voice-Over"], gain: -1.4 },
  { title: "LMU München",             meta: "Voice-Over · Biologische Fakultät", file: "audio/lmu-muenchen-voice-over.mp3",   tags: ["Trailer & Voice-Over"], gain: -1.7 },
  { title: "Opti-Wohnwelt",           meta: "Werbung · Gesang & Off", file: "audio/opti-wohnwelt-gesang-off.mp3",        tags: ["Werbung", "Gesang"], gain: -6.1 },
  { title: "Heizungsbau Gottlöber",   meta: "Werbung · Stellenanzeige", file: "audio/heizungsbau-gottloeber-stellenanzeige.mp3", tags: ["Werbung"], gain: -5.5 },
  { title: "Hochschulinfotag",        meta: "Werbung",                file: "audio/hochschulinfotag-werbung.mp3",        tags: ["Werbung"], gain: -6.8 },
  { title: "Klimahaus Bremerhaven",   meta: "Recruiting-Kampagne",    file: "audio/klimahaus-bremerhaven-recruiting.mp3", tags: ["Werbung"], gain: -2.8 },
  { title: "Synchron",              meta: "Film & Serie",           file: "audio/synchron.mp3",                        tags: ["Synchron"], gain: 3.0 },
];

// Videos: bei "youtube" einfach den kompletten YouTube-Link einfügen
// (z. B. https://www.youtube.com/watch?v=XXXXXXXXXXX oder https://youtu.be/XXXXXXXXXXX).
// Standbild: wird automatisch aus bilder/videos/<YouTube-ID>.jpg geladen
// (Datei z. B. von https://i.ytimg.com/vi/<ID>/maxresdefault.jpg speichern).
// Optional "poster": eigenes Vorschaubild aus dem Ordner "bilder" (hat Vorrang).
const VIDEOS = [
  { title: "HD+ Free",               meta: "TV-Spot",    youtube: "https://www.youtube.com/watch?v=zNbMN_zkOIw" },
  { title: "ASSA ABLOY – eCLIQ",     meta: "Imagefilm · Sprecher",        youtube: "https://www.youtube.com/watch?v=hrdEwYSdkNA" },
  { title: "Sky Cinema Animation",   meta: "Trailer · Sprecher",          youtube: "https://www.youtube.com/watch?v=QRuGbI67Fac" },
  { title: "21RUN.com",              meta: "Werbespot · Sprecher",        youtube: "https://www.youtube.com/watch?v=IL9P4JR3rhQ" },
  { title: "Landesstelle Glücksspielsucht Bayern", meta: "Rote Karte für Sportwetten · Spot", youtube: "https://www.youtube.com/watch?v=QzAjMqu0N0A" },
];

// Voice-Over: Dokus & Reportagen (eigene Rubrik unter "Spots mit meiner Stimme")
// Das erste Video wird groß hervorgehoben (Video breit, Titel daneben). Optional "label": kleine orange Zeile über dem Titel.
const VOICEOVER_VIDEOS = [
  // Eigenes Video: "file" statt "youtube", dazu "poster" und optional "duration"
  { title: "LMU München",            meta: "Biologische Fakultät", file: "video/lmu-biologische-fakultaet.mp4",
    poster: "bilder/videos/lmu-biologische-fakultaet.jpg", duration: "2:46", label: "Voice-Over" },
  { title: "National Geographic",    meta: "Wolves Up Close · Trailer · Voice-Over", youtube: "https://www.youtube.com/watch?v=3hCMUaREGL8",
    note: "Zu hören auf Disney+ (Deutsche Synchronfassung)" },
  { title: "National Geographic",    meta: "Dolphins Up Close · Doku · Voice-Over", youtube: "https://www.youtube.com/watch?v=c-1HF1LiY6o",
    note: "Zu hören auf Disney+ (Deutsche Synchronfassung)" },
  { title: "National Geographic",    meta: "Secrets of the Bees · Trailer · Voice-Over", youtube: "https://www.youtube.com/watch?v=Mej2usrRCl0",
    note: "Zu hören auf Disney+ (Deutsche Synchronfassung)" },
];

// Music for Commercials: Spots, für die Tobias die Musik gemacht hat
const COMMERCIAL_VIDEOS = [
  { title: "Therme Erding",          meta: "Dein Urlaub. Ohne Boardingpass. · Werbespot", youtube: "https://www.youtube.com/watch?v=YACKAGjgR-w&t=6s" },
  { title: "Opti-Wohnwelt",          meta: "45 Jahre „Optiläum“ · TV-Spot", youtube: "https://www.youtube.com/watch?v=ib2kWCAg1bA" },
  { title: "Landesstelle Glücksspielsucht Bayern", meta: "Der ultimative Kick · Kampagnenspot", youtube: "https://www.youtube.com/watch?v=dnzln-BOjko",
    poster: "bilder/videos/dnzln-BOjko-motorrad.jpg" },
];

const BAND_VIDEOS = [
  { title: "Hoffnung",               meta: "EINSHOCH6 · Live",            youtube: "https://www.youtube.com/watch?v=rsvSo3lRwCA", poster: "bilder/videos/rsvSo3lRwCA-totale.jpg" },
  { title: "Solang die Erde sich dreht", meta: "EINSHOCH6 · Bandtagebuch (DW)", youtube: "https://www.youtube.com/watch?v=ZhyiKUAW2bA" },
  { title: "Die Stadt springt Tour", meta: "EINSHOCH6 · Live",            youtube: "https://www.youtube.com/watch?v=RmuirsIySFM" },
  { title: "Lass uns reden",         meta: "EINSHOCH6 · Bandtagebuch (DW)", youtube: "https://www.youtube.com/watch?v=DYoBsGxUB_s" },
];

const CLIENTS = [
  "Netflix", "Amazon Prime Video", "Apple TV", "Disney+", "DAZN Station Voice", "Sky Deutschland", "National Geographic",
  "ARTE", "ARD", "ZDF", "ProSieben", "Amazon Music", "MediaMarkt", "Saturn", "C&A", "Dehner", "Lotto",
  "BMW", "Audi", "Hyundai", "Möbel Höffner", "Möbel Kraft", "Opti-Wohnwelt",
];

/* ==========================================================
   Ab hier Technik – normalerweise nichts zu ändern.
   ========================================================== */

const $ = (s, el = document) => el.querySelector(s);
const fmt = (t) => {
  if (!isFinite(t)) return "–:––";
  const m = Math.floor(t / 60), s = Math.floor(t % 60);
  return `${m}:${String(s).padStart(2, "0")}`;
};
const ICON_PLAY = '<svg class="i-play" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 4l13 8-13 8z"/></svg>';
const ICON_PAUSE = '<svg class="i-pause" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 4h4v16H6zM14 4h4v16h-4z"/></svg>';

document.getElementById("year").textContent = new Date().getFullYear();

/* ---------- Navigation (mobil) ---------- */
const toggle = $(".nav__toggle"), menu = $("#menu");
toggle.addEventListener("click", () => {
  const open = toggle.getAttribute("aria-expanded") !== "true";
  toggle.setAttribute("aria-expanded", open);
  toggle.setAttribute("aria-label", open ? "Menü schließen" : "Menü öffnen");
  menu.classList.toggle("is-open", open);
});
menu.addEventListener("click", (e) => {
  if (e.target.closest("a")) { toggle.setAttribute("aria-expanded", "false"); menu.classList.remove("is-open"); }
});

/* ---------- Kunden-Laufband ---------- */
const track = $("#clientTrack");
const clientHtml = CLIENTS.map((c) => `<span>${c}</span>`).join("");
track.innerHTML = clientHtml + clientHtml.replace(/<span>/g, '<span aria-hidden="true">');

/* ---------- Wellenform (dekorativ, aus dem Dateinamen erzeugt) ---------- */
function makePeaks(seed, n) {
  let h = 2166136261;
  for (const ch of seed) h = Math.imul(h ^ ch.charCodeAt(0), 16777619);
  const rnd = () => ((h = Math.imul(h ^ (h >>> 15), 2246822507) ^ Math.imul(h ^ (h >>> 13), 3266489909)) >>> 0) / 4294967296;
  const peaks = [];
  let v = 0.5;
  for (let i = 0; i < n; i++) {
    v += (rnd() - 0.5) * 0.5;
    v = Math.min(1, Math.max(0.15, v));
    const phrase = 0.55 + 0.45 * Math.abs(Math.sin(i / (6 + rnd() * 3)));
    const edge = Math.min(1, i / 6, (n - i) / 6);
    peaks.push(Math.max(0.08, v * phrase * edge));
  }
  return peaks;
}

// Akzentfarbe aus der CSS-Variable --accent (damit die Wellenform jede Farbvariante mitmacht)
const ACCENT = () => getComputedStyle(document.documentElement).getPropertyValue("--accent").trim() || "#FF6A2B";

function drawWave(canvas, peaks, progress, dark = true) {
  const dpr = window.devicePixelRatio || 1;
  const w = canvas.clientWidth, h = canvas.clientHeight;
  if (!w) return;
  if (canvas.width !== w * dpr) { canvas.width = w * dpr; canvas.height = h * dpr; }
  const ctx = canvas.getContext("2d");
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.clearRect(0, 0, w, h);
  const bar = 3, gap = 2, count = Math.floor(w / (bar + gap));
  for (let i = 0; i < count; i++) {
    const p = peaks[Math.floor((i / count) * peaks.length)];
    const bh = Math.max(2, p * h);
    ctx.fillStyle = i / count < progress ? ACCENT() : "rgba(241,239,234,.26)"; // Fortschritt in Akzentfarbe, Rest hell
    ctx.beginPath();
    ctx.roundRect ? ctx.roundRect(i * (bar + gap), (h - bh) / 2, bar, bh, 1.5) : ctx.rect(i * (bar + gap), (h - bh) / 2, bar, bh);
    ctx.fill();
  }
}

/* ---------- Hörproben-Player ---------- */
const list = $("#demoList");
const audio = new Audio();
audio.preload = "none";
let current = null; // aktuelles Demo-Objekt

// Lautstärke-Ausgleich: Ton läuft über einen Verstärker (Web Audio), damit auch
// angehoben werden kann und es auf dem iPhone wirkt (dort wird audio.volume ignoriert).
let audioCtx = null, gainNode = null;
function applyGain(db = 0) {
  const lin = Math.pow(10, db / 20);
  if (!audioCtx) {
    const AC = window.AudioContext || window.webkitAudioContext;
    if (AC) {
      try {
        audioCtx = new AC();
        gainNode = audioCtx.createGain();
        audioCtx.createMediaElementSource(audio).connect(gainNode).connect(audioCtx.destination);
      } catch (e) { audioCtx = null; gainNode = null; }
    }
  }
  if (gainNode) { gainNode.gain.value = lin; audio.volume = 1; }
  else audio.volume = Math.min(1, lin); // Notlösung ohne Web Audio: nur leiser möglich
  if (audioCtx && audioCtx.state === "suspended") audioCtx.resume();
}

const items = DEMOS.map((d, i) => {
  const li = document.createElement("li");
  li.className = "demo";
  li.dataset.tags = d.tags.join("|");
  li.innerHTML = `
    <button class="demo__play" aria-label="${d.title} abspielen">${ICON_PLAY}${ICON_PAUSE}</button>
    <div>
      <div class="demo__title">${d.title}</div>
      <div class="demo__meta">${d.meta}</div>
    </div>
    <div class="demo__wave" role="slider" tabindex="0" aria-label="Position in ${d.title}" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0"><canvas></canvas></div>
    <div class="demo__time">–:––</div>`;
  list.appendChild(li);

  const item = { ...d, i, li, canvas: $("canvas", li), time: $(".demo__time", li), wave: $(".demo__wave", li), peaks: makePeaks(d.file, 160), duration: NaN, progress: 0 };

  // Dauer vorab laden (nur Metadaten)
  const probe = new Audio();
  probe.preload = "metadata";
  probe.src = d.file;
  probe.addEventListener("loadedmetadata", () => { item.duration = probe.duration; if (current !== item) item.time.textContent = fmt(probe.duration); });
  probe.addEventListener("error", () => { li.classList.add("is-error"); item.time.textContent = "Datei fehlt"; });

  $(".demo__play", li).addEventListener("click", () => playItem(item));
  const seek = (clientX) => {
    const r = item.wave.getBoundingClientRect();
    const ratio = Math.min(1, Math.max(0, (clientX - r.left) / r.width));
    if (current !== item) playItem(item, ratio); else if (isFinite(audio.duration)) audio.currentTime = ratio * audio.duration;
  };
  item.wave.addEventListener("click", (e) => seek(e.clientX));
  item.wave.addEventListener("keydown", (e) => {
    if (current !== item || !isFinite(audio.duration)) return;
    if (e.key === "ArrowRight") { audio.currentTime = Math.min(audio.duration, audio.currentTime + 5); e.preventDefault(); }
    if (e.key === "ArrowLeft") { audio.currentTime = Math.max(0, audio.currentTime - 5); e.preventDefault(); }
  });
  return item;
});

const redrawAll = () => items.forEach((it) => drawWave(it.canvas, it.peaks, it.progress));
new ResizeObserver(redrawAll).observe(list);
redrawAll();

function playItem(item, startRatio) {
  if (current === item) {
    audio.paused ? audio.play() : audio.pause();
    return;
  }
  if (current) { current.li.classList.remove("is-playing"); current.progress = 0; drawWave(current.canvas, current.peaks, 0); current.time.textContent = fmt(current.duration); }
  current = item;
  applyGain(item.gain);
  audio.src = item.file;
  if (startRatio) audio.addEventListener("loadedmetadata", () => { audio.currentTime = startRatio * audio.duration; }, { once: true });
  audio.play().catch(() => {});
  $("#miniTitle").textContent = `${item.title} – ${item.meta}`;
  mini.hidden = false;
}

const mini = $("#mini"), miniBtn = $("#miniBtn"), miniProg = $("#miniProg"), miniTime = $("#miniTime");

audio.addEventListener("play", () => {
  if (audioCtx && audioCtx.state === "suspended") audioCtx.resume();
  current.li.classList.add("is-playing");
  $(".demo__play", current.li).setAttribute("aria-label", `${current.title} pausieren`);
  mini.classList.remove("is-paused"); miniBtn.setAttribute("aria-label", "Pause");
});
audio.addEventListener("pause", () => {
  if (!current) return;
  current.li.classList.remove("is-playing");
  $(".demo__play", current.li).setAttribute("aria-label", `${current.title} abspielen`);
  mini.classList.add("is-paused"); miniBtn.setAttribute("aria-label", "Abspielen");
});
audio.addEventListener("timeupdate", () => {
  if (!current) return;
  const p = audio.duration ? audio.currentTime / audio.duration : 0;
  current.progress = p;
  drawWave(current.canvas, current.peaks, p);
  current.wave.setAttribute("aria-valuenow", Math.round(p * 100));
  current.time.textContent = fmt(audio.currentTime);
  miniProg.style.width = `${p * 100}%`;
  miniTime.textContent = `${fmt(audio.currentTime)} / ${fmt(audio.duration)}`;
});
audio.addEventListener("ended", () => {
  // nächste sichtbare Hörprobe automatisch abspielen
  const visible = items.filter((it) => !it.li.hidden && !it.li.classList.contains("is-error"));
  const next = visible[visible.indexOf(current) + 1];
  if (next) playItem(next); else { current.progress = 0; drawWave(current.canvas, current.peaks, 0); }
});
audio.addEventListener("error", () => { if (current) { current.li.classList.add("is-error"); current.time.textContent = "Datei fehlt"; } });

miniBtn.addEventListener("click", () => current && (audio.paused ? audio.play() : audio.pause()));
$("#miniClose").addEventListener("click", () => { audio.pause(); mini.hidden = true; });

document.querySelector("[data-play-first]").addEventListener("click", () => {
  const first = items.find((it) => !it.li.hidden && !it.li.classList.contains("is-error"));
  if (first) playItem(first);
});


// Timecode im Kamera-Sucher des Startbereichs
const heroTc = $("#heroTc");
if (heroTc && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const t0 = performance.now(), two = (n) => String(n).padStart(2, "0");
  setInterval(() => {
    const f = Math.floor((performance.now() - t0) / 40);
    heroTc.textContent = `${two(Math.floor(f / 90000) % 24)}:${two(Math.floor(f / 1500) % 60)}:${two(Math.floor(f / 25) % 60)}:${two(f % 25)}`;
  }, 40);
}

/* ---------- Filter ---------- */
const filterEl = $("#demoFilter");
const tags = ["Alle", ...new Set(DEMOS.flatMap((d) => d.tags))];
tags.forEach((t, i) => {
  const b = document.createElement("button");
  b.className = "chip"; b.textContent = t; b.setAttribute("role", "tab");
  b.setAttribute("aria-selected", i === 0);
  b.addEventListener("click", () => {
    filterEl.querySelectorAll(".chip").forEach((c) => c.setAttribute("aria-selected", c === b));
    items.forEach((it) => { it.li.hidden = t !== "Alle" && !it.tags.includes(t); });
    requestAnimationFrame(redrawAll);
  });
  filterEl.appendChild(b);
});

/* ---------- YouTube (2-Klick, datensparsam über youtube-nocookie.com) ---------- */
function youtubeId(v) {
  if (!v) return "";
  const m = v.match(/(?:youtu\.be\/|v=|embed\/|shorts\/|live\/)([\w-]{11})/);
  return m ? m[1] : /^[\w-]{11}$/.test(v.trim()) ? v.trim() : "";
}

const ICON_NOTE = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 18V5l11-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="17" cy="16" r="3"/></svg>';

// opts.noPlay: kein Play-Button im Standbild (z. B. National Geographic – Bilder haben eigene Schrift)
// opts.music: Musik-Kennzeichnung (Track-Nummer + Hinweis "Musik: Tobias Baum" im Standbild)
function renderVideos(target, videos, opts = {}) {
  const grid = document.getElementById(target);
  videos.forEach((v, i) => {
    const id = youtubeId(v.youtube);
    const file = v.file; // eigenes Video (MP4 im Ordner "video"), wird erst beim Klick geladen
    const playable = Boolean(id || file);
    // Standbild: eigenes "poster" oder automatisch bilder/videos/<YouTube-ID>.jpg (lokal, kein YouTube-Aufruf vor dem Klick)
    const poster = v.poster || (id ? `bilder/videos/${id}.jpg` : "");
    const hint = file ? (v.duration ? `Video · ${v.duration}` : "Video abspielen") : id ? "Klick lädt das Video von YouTube" : "YouTube-Link folgt";
    const fig = document.createElement("figure");
    fig.className = "video";
    fig.innerHTML = `
      <div class="video__frame">
        <button class="video__poster" ${playable ? `aria-label="Video ${v.title} abspielen"` : "disabled aria-label='Video folgt'"}>
          ${poster ? `<img src="${poster}" alt="" loading="lazy" onerror="this.remove()">` : ""}
          ${opts.music ? `<span class="music-badge">${ICON_NOTE}Musik: Tobias Baum</span>` : ""}
          ${(file || (id && !opts.noPlay)) ? `<span class="play">${ICON_PLAY}</span>` : ""}
          <span class="hint">${hint}</span>
        </button>
      </div>
      <figcaption>
        ${opts.music ? `<div class="video__track">Track ${String(i + 1).padStart(2, "0")}</div>` : v.label ? `<div class="video__track">${v.label}</div>` : ""}
        <div class="video__title">${v.title}</div>
        <div class="video__meta">${v.meta}</div>
        ${v.note ? `<div class="video__note">${v.note}</div>` : ""}
      </figcaption>`;
    if (file) {
      $(".video__poster", fig).addEventListener("click", (e) => {
        audio.pause();
        const vid = document.createElement("video");
        vid.src = file; vid.controls = true; vid.autoplay = true; vid.playsInline = true;
        if (poster) vid.poster = poster;
        vid.setAttribute("aria-label", v.title);
        e.currentTarget.replaceWith(vid);
        vid.play().catch(() => {});
      });
    } else if (id) {
      $(".video__poster", fig).addEventListener("click", (e) => {
        audio.pause();
        const iframe = document.createElement("iframe");
        iframe.src = `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1`;
        iframe.title = v.title;
        iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen";
        iframe.allowFullscreen = true;
        iframe.referrerPolicy = "strict-origin-when-cross-origin";
        e.currentTarget.replaceWith(iframe);
      });
    }
    grid.appendChild(fig);
  });
  // opts.compact: Raster ohne Lücke – bei 3 Spalten werden die ersten Videos breiter, damit jede Reihe voll ist
  if (opts.compact) {
    grid.classList.add("video-grid--compact");
    const figs = [...grid.children], n = figs.length;
    const wide = n % 3 === 2 ? 2 : n % 3 === 1 && n > 1 ? 4 : 0; // Anzahl Videos in halber Breite
    figs.forEach((f, i) => { if (i < wide) f.classList.add("is-half"); });
    if (n % 2 === 1) figs[0].classList.add("is-full-tablet");
  }
}
renderVideos("videoGrid", VIDEOS, { compact: true });
renderVideos("voiceoverGrid", VOICEOVER_VIDEOS, { noPlay: true });
document.querySelector("#voiceoverGrid > .video")?.classList.add("video--featured"); // erstes Video groß
renderVideos("commercialGrid", COMMERCIAL_VIDEOS, { music: true });

// Laufender Timecode (25 Bilder/Sek.) in der Rubrik Videoproduktion – rein dekorativ
const timecode = document.getElementById("timecode");
if (timecode && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const t0 = performance.now();
  const two = (n) => String(n).padStart(2, "0");
  setInterval(() => {
    const f = Math.floor((performance.now() - t0) / 40);
    timecode.textContent = `${two(Math.floor(f / 90000) % 24)}:${two(Math.floor(f / 1500) % 60)}:${two(Math.floor(f / 25) % 60)}:${two(f % 25)}`;
  }, 40);
}

// Dekorative Wellenform über "Music for Commercials"
const mfcWave = document.getElementById("mfcWave");
if (mfcWave) {
  const mfcPeaks = makePeaks("music-for-commercials", 240);
  const paintMfc = () => drawWave(mfcWave, mfcPeaks, 0.38, false);
  paintMfc();
  window.addEventListener("resize", paintMfc);
}
renderVideos("bandGrid", BAND_VIDEOS);

// Eigene Videos (z. B. Einfach-Zack-Clip): Standbild-Knopf wird beim Klick durch den Video-Player ersetzt
document.querySelectorAll("[data-local-video]").forEach((btn) => {
  btn.addEventListener("click", () => {
    const v = document.createElement("video");
    v.src = btn.dataset.localVideo;
    v.controls = true; v.autoplay = true; v.playsInline = true;
    v.poster = btn.querySelector("img")?.src || "";
    v.setAttribute("aria-label", btn.getAttribute("aria-label").replace(/ abspielen$/, ""));
    audio.pause(); // laufende Hörprobe stoppen
    btn.replaceWith(v);
    v.play().catch(() => {});
  });
});
