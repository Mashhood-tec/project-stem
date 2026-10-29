/* Family AI Game Day — static website. Open index.html. No build step. */
(function () {
  "use strict";

  var CONTENT = window.FAGD_CONTENT;
  if (!CONTENT) {
    document.getElementById("app").textContent = "Game content failed to load.";
    return;
  }

  var GAMES = [
    {
      id: "football", name: "Football Match", category: "Sports", quick: false,
      blurb: "A real family football match. The app runs the clock, shows AI-created match missions and records every goal the host confirms.",
      modes: ["team"], defaultMode: "team", duration: "10–30 min",
      limits: { team: { minPlayers: 2, maxPlayers: 22, minTeams: 2, maxTeams: 2, minPerTeam: 1, maxDiff: 1 } },
      times: [180, 300, 420, 600, 900], defaultTime: 300, timeLabel: "Period length",
      rounds: [1, 2], defaultRounds: 2, roundLabel: "Period", roundsLabel: "Periods",
      aiUse: "AI-created match missions change how teams play each period and earn mission stars.",
      objective: "Score more goals than the other team before the final whistle.",
      how: [
        "Play a friendly match in a safe space with two goals (cones, bags or chairs work well).",
        "The host presses Kick Off to start the clock and Pause for any stoppage.",
        "An AI-created mission card is shown during play. Either team can try to complete it.",
        "The host records each goal and marks which team completed the mission.",
        "At the end of each period, the host starts the next one or moves to full time."
      ],
      points: ["Every goal confirmed by the host counts as 1 goal.", "Completing a mission earns that team 1 mission star."],
      penalties: ["Fouls are handled by the host: award a free kick to the other team.", "A goal recorded by mistake can be undone after confirmation."],
      tie: "If goals are level, the team with more mission stars wins. If stars are level too, the host can award a sudden-death tie-break or record a draw.",
      host: "Only the host taps to record goals and missions. The app never detects goals by itself.",
      win: "The team with the most goals at full time wins, after the host confirms the final score."
    },
    {
      id: "heritageRiddleRelay", name: "UAE Heritage Riddle Relay", category: "Culture & Heritage", quick: false,
      blurb: "Teams take turns solving AI-created riddles about Emirati hospitality, crafts, architecture and traditions.",
      modes: ["team"], defaultMode: "team", duration: "10–20 min",
      limits: { team: { minPlayers: 2, maxPlayers: 16, minTeams: 2, maxTeams: 4, minPerTeam: 1 } },
      times: [30, 45, 60, 90], defaultTime: 45, timeLabel: "Answer time",
      rounds: [2, 3, 4, 5], defaultRounds: 3, roundLabel: "Round", roundsLabel: "Rounds",
      aiUse: "Every turn presents an AI-created riddle with a hint, answer and explanation.",
      objective: "Solve as many heritage riddles as possible for your team.",
      how: [
        "Each turn belongs to one team. The relay runner reads the riddle aloud.",
        "The host presses Start Turn. The team gives one final answer before time runs out.",
        "The team may ask for a hint, but it costs a point.",
        "The host reveals the answer and marks the response Correct or Incorrect.",
        "The baton passes to the next team. Every team plays once per round."
      ],
      points: ["Easy riddle: 2 points. Medium: 3 points. Hard: 4 points.", "Using the hint lowers the reward by 1 point (minimum 1)."],
      penalties: ["An incorrect answer or no answer scores 0 points.", "Answers given after time runs out do not count unless the host allows them."],
      tie: "If teams are level, they play one sudden-death riddle. The host awards the tie-break.",
      host: "The host decides whether each answer is close enough and taps Correct or Incorrect.",
      win: "The team with the most points after the final round wins."
    },
    {
      id: "desertExpedition", name: "Desert Expedition: Survival Challenge", category: "Teamwork & Story", quick: false,
      blurb: "A fictional desert journey. Teams make decisions, explain their thinking and earn points for strong reasoning.",
      modes: ["team"], defaultMode: "team", duration: "15–25 min",
      limits: { team: { minPlayers: 2, maxPlayers: 16, minTeams: 2, maxTeams: 4, minPerTeam: 1 } },
      times: [60, 90, 120, 180], defaultTime: 90, timeLabel: "Discussion time",
      rounds: [2, 3, 4], defaultRounds: 3, roundLabel: "Stage", roundsLabel: "Stages",
      aiUse: "AI-created story scenarios, choices, host guidance and follow-up challenges drive every stage.",
      objective: "Guide your expedition through the story by making wise, well-explained team decisions.",
      how: [
        "The host reads the AI-created story scenario and the challenge aloud.",
        "The host starts the discussion timer. The team chooses an option and explains why.",
        "The host selects the team's choice, then reveals the guidance.",
        "The host awards points for the quality of the team's reasoning.",
        "An optional follow-up challenge can earn a bonus point."
      ],
      points: ["Strong reasoning: 3 points.", "Good reasoning: 2 points.", "Some reasoning: 1 point.", "No clear decision: 0 points.", "Completed follow-up challenge: +1 bonus point."],
      penalties: ["No decision before time runs out scores 0 points."],
      tie: "If teams are level, they play one extra scenario. The host awards the tie-break.",
      host: "The host judges each explanation and taps the points earned.",
      win: "The team with the most expedition points after the final stage wins."
    },
    {
      id: "emiratiCharades", name: "Emirati Charades", category: "Acting & Fun", quick: true,
      blurb: "Act out AI-created prompts about heritage, sport and family life without saying a word.",
      modes: ["individual", "team"], defaultMode: "team", duration: "5–15 min",
      limits: {
        individual: { minPlayers: 3, maxPlayers: 12 },
        team: { minPlayers: 4, maxPlayers: 16, minTeams: 2, maxTeams: 4, minPerTeam: 2 }
      },
      times: [30, 45, 60, 90], defaultTime: 60, timeLabel: "Acting time",
      rounds: [1, 2, 3], defaultRounds: 2, roundLabel: "Round", roundsLabel: "Rounds",
      aiUse: "Each turn reveals a secret AI-created prompt and acting tip to the performer only.",
      objective: "Act out the secret prompt so others can guess it before time runs out.",
      how: [
        "The performer taps Show Prompt to Performer and reads the prompt privately.",
        "The host taps Start Acting. No talking, spelling or pointing at objects.",
        "In team mode, only the performer's team guesses. In individual mode, everyone else guesses.",
        "The performer may skip up to 2 prompts per turn. Skips score nothing.",
        "The host taps Correct when someone guesses, or Not Guessed when time runs out."
      ],
      points: ["Easy prompt: 1 point. Medium: 2 points. Hard: 3 points.", "In team mode the points go to the team. In individual mode they go to the performer."],
      penalties: ["Saying any word of the prompt aloud: −1 point and the turn ends.", "Skipped prompts never award points."],
      tie: "If scores are level, each tied side acts one more prompt. The host awards the tie-break.",
      host: "The host watches the acting and taps Correct, Not Guessed or the penalty.",
      win: "The highest score after the final round wins."
    },
    {
      id: "cultureSportsChallenge", name: "60-Second Culture & Sports Challenge", category: "Quick Fire", quick: true,
      blurb: "Answer as many AI-created quick-fire questions and creative tasks as you can before the clock runs out.",
      modes: ["individual", "team"], defaultMode: "individual", duration: "5–15 min",
      limits: {
        individual: { minPlayers: 2, maxPlayers: 10 },
        team: { minPlayers: 2, maxPlayers: 16, minTeams: 2, maxTeams: 4, minPerTeam: 1 }
      },
      times: [30, 45, 60, 90], defaultTime: 60, timeLabel: "Turn length",
      rounds: [1, 2, 3], defaultRounds: 2, roundLabel: "Round", roundsLabel: "Rounds",
      aiUse: "A rapid sequence of AI-created questions and creative tasks fills every timed turn.",
      objective: "Score the most points by answering as many challenges as possible in your timed turn.",
      how: [
        "The host starts the countdown. Challenges appear one after another.",
        "Answer out loud. The host taps Correct or Incorrect and the next challenge appears straight away.",
        "Say Pass to skip a challenge. It scores nothing.",
        "Some challenges have a hint. Using it lowers the reward.",
        "When time runs out, the host decides whether the last answer was in time."
      ],
      points: ["Easy challenge: 1 point. Medium: 2 points. Hard: 3 points.", "Using a hint lowers the reward by 1 point (minimum 1)."],
      penalties: ["Incorrect answers and passes score 0 points."],
      tie: "If scores are level, the tied sides answer one sudden-death challenge. The host awards the tie-break.",
      host: "The host judges every answer and creative task, then taps the result.",
      win: "The highest total score after all rounds wins."
    }
  ];

  function gameById(id) {
    for (var i = 0; i < GAMES.length; i++) if (GAMES[i].id === id) return GAMES[i];
    return null;
  }

  function esc(value) {
    return String(value == null ? "" : value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;")
      .replace(/`/g, "&#96;")
      .replace(/\$/g, "&#36;");
  }

  function uid(prefix) {
    return prefix + "-" + Math.random().toString(36).slice(2, 8);
  }

  function load(key, fallback) {
    try {
      var raw = localStorage.getItem(key);
      if (!raw) return fallback;
      var data = JSON.parse(raw);
      return data == null ? fallback : data;
    } catch (err) {
      return fallback;
    }
  }

  function save(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); } catch (err) { /* storage full or blocked */ }
  }

  function defaultRoster() {
    return {
      players: [
        { id: "p1", name: "P1" },
        { id: "p2", name: "P2" },
        { id: "p3", name: "P3" },
        { id: "p4", name: "P4" }
      ],
      teams: [
        { id: "team-a", name: "Team A", memberIds: ["p1", "p2"] },
        { id: "team-b", name: "Team B", memberIds: ["p3", "p4"] }
      ]
    };
  }

  function cleanRoster(data) {
    if (!data || !Array.isArray(data.players) || !data.players.length || !Array.isArray(data.teams)) return defaultRoster();
    return data;
  }

  var roster = cleanRoster(load("fagd2.roster", null));
  var history = load("fagd2.history", []);
  if (!Array.isArray(history)) history = [];
  history = history.filter(function (item) { return item && item.id && item.gameId && Array.isArray(item.events); });
  var draft = load("fagd2.draft", null);
  var session = load("fagd2.session", null);
  if (session && !gameById(session.gameId)) session = null;

  var ui = { filter: "all", modal: null, toast: null, performer: false, peek: false, sampleOpen: false, settings: false, choice: null };

  if (session && session.status === "playing") {
    if (session.timer && session.timer.endsAt) session.timer.remainingMs = Math.max(0, session.timer.endsAt - Date.now());
    session.timer.endsAt = null;
    session.status = session.timer.remainingMs <= 0 ? "timeUp" : "paused";
    ui.toast = "Your game was restored. The timer is paused — press Resume to continue.";
    save("fagd2.session", session);
  }

  function persistRoster() { save("fagd2.roster", roster); }
  function persistDraft() { save("fagd2.draft", draft); }
  function persistSession() { save("fagd2.session", session); }

  function formatMs(ms) {
    var total = Math.max(0, Math.ceil(ms / 1000));
    var m = Math.floor(total / 60);
    var s = total % 60;
    return (m < 10 ? "0" : "") + m + ":" + (s < 10 ? "0" : "") + s;
  }

  function formatDuration(sec) {
    if (sec < 60) return sec + " sec";
    var m = Math.floor(sec / 60);
    var r = sec % 60;
    return r ? m + " min " + r + " sec" : m + " min";
  }

  function plural(n, word) { return n + " " + word + (n === 1 ? "" : "s"); }

  function roundWord(game, n) {
    return n + " " + (n === 1 ? game.roundLabel : game.roundsLabel).toLowerCase();
  }

  function activeEvents() {
    return (session.events || []).filter(function (event) { return !event.reversed; });
  }

  function standings() {
    return session.participants.map(function (person) {
      var own = activeEvents().filter(function (event) { return event.participantId === person.id; });
      var count = function (kind) { return own.filter(function (event) { return event.kind === kind; }).length; };
      return {
        id: person.id,
        name: person.name,
        score: own.reduce(function (sum, event) { return sum + event.points; }, 0),
        missions: count("mission"),
        correct: count("correct"),
        incorrect: count("incorrect"),
        skipped: count("skip")
      };
    });
  }

  function leaders() {
    var rows = standings();
    var top = rows.reduce(function (max, row) { return Math.max(max, row.score); }, 0);
    return { top: top, rows: rows.filter(function (row) { return row.score === top; }) };
  }

  function footballDecided(rows) {
    if (rows.length < 2 || rows[0].score !== rows[1].score) return null;
    if (rows[0].missions === rows[1].missions) return null;
    return rows[0].missions > rows[1].missions ? rows[0] : rows[1];
  }

  function outcome() {
    var rows = standings().slice().sort(function (a, b) { return b.score - a.score || a.name.localeCompare(b.name); });
    if (!rows.length) return { type: "tie", text: "No scores" };
    if (session.acceptTie) return { type: "tie", text: "Recorded as a draw" };
    var tiebreak = activeEvents().filter(function (event) { return event.kind === "tiebreak"; }).pop();
    if (tiebreak) {
      var winner = rows.filter(function (row) { return row.id === tiebreak.participantId; })[0];
      return { type: "win", id: tiebreak.participantId, name: winner ? winner.name : "Winner", text: "Won the sudden-death tie-break" };
    }
    if (session.gameId === "football") {
      var byStars = footballDecided(rows);
      if (byStars) return { type: "win", id: byStars.id, name: byStars.name, text: "Won on mission stars" };
    }
    var tied = rows.filter(function (row) { return row.score === rows[0].score; });
    if (tied.length === 1) return { type: "win", id: rows[0].id, name: rows[0].name, text: session.gameId === "football" ? "More goals" : "Highest score" };
    return { type: "undecided", text: "Scores are level" };
  }

  function playerName(id) {
    var found = roster.players.filter(function (player) { return player.id === id; })[0];
    if (found) return found.name;
    if (!session) return "";
    var fromSession = (session.players || []).filter(function (player) { return player.id === id; })[0];
    return fromSession ? fromSession.name : "";
  }

  function currentParticipant() {
    if (!session) return null;
    return session.participants[session.turnIndex % session.participants.length];
  }

  function currentPlayer(person) {
    if (!person) return null;
    if (session.mode === "individual") return person;
    var members = person.memberIds || [];
    if (!members.length) return null;
    var id = members[(session.round - 1) % members.length];
    return { id: id, name: playerName(id) };
  }

  function poolLeft() {
    var pool = CONTENT[session.gameId] || [];
    if (session.allowRepeats) return pool.slice();
    var used = {};
    (session.usedIds || []).forEach(function (id) { used[id] = true; });
    return pool.filter(function (item) { return !used[item.id]; });
  }

  function draw(avoidId) {
    var left = poolLeft().filter(function (item) { return item.id !== avoidId; });
    if (!left.length) return null;
    return left[Math.floor(Math.random() * left.length)];
  }

  function takeContent(avoidId) {
    var item = draw(avoidId);
    if (!item) return null;
    session.usedIds.push(item.id);
    return item;
  }

  function freshTimer(seconds) {
    return { durationMs: seconds * 1000, remainingMs: seconds * 1000, endsAt: null };
  }

  function createSession(game, source) {
    var mode = source.mode;
    var players = source.players.map(function (player) { return { id: player.id, name: player.name }; });
    var teams = source.teams.map(function (team) { return { id: team.id, name: team.name, memberIds: team.memberIds.slice() }; });
    var participants = mode === "team"
      ? teams.filter(function (team) { return team.memberIds.length; }).map(function (team) { return { id: team.id, name: team.name, memberIds: team.memberIds.slice() }; })
      : players.map(function (player) { return { id: player.id, name: player.name, memberIds: [player.id] }; });
    session = {
      id: uid("session"),
      gameId: game.id,
      mode: mode,
      players: players,
      teams: teams,
      participants: participants,
      settings: { turnSeconds: source.turnSeconds, totalRounds: source.rounds },
      round: 1,
      turnIndex: 0,
      period: 1,
      status: "ready",
      events: [],
      usedIds: [],
      allowRepeats: false,
      hintUsed: false,
      skips: 0,
      reveal: {},
      choice: null,
      bonusGiven: false,
      acceptTie: false,
      goalLock: {},
      timer: freshTimer(source.turnSeconds),
      startedAt: Date.now()
    };
    session.content = takeContent(null);
    persistSession();
  }

  function limitsOf(game) {
    return game.limits[draft.mode] || game.limits.team || game.limits.individual;
  }

  function readSetupInputs() {
    document.querySelectorAll("[data-player-name]").forEach(function (input) {
      var player = roster.players.filter(function (item) { return item.id === input.getAttribute("data-player-name"); })[0];
      if (player) player.name = input.value;
    });
    document.querySelectorAll("[data-team-name]").forEach(function (input) {
      var team = roster.teams.filter(function (item) { return item.id === input.getAttribute("data-team-name"); })[0];
      if (team) team.name = input.value;
    });
  }

  function validateSetup(game) {
    readSetupInputs();
    var errors = [];
    var names = {};
    roster.players.forEach(function (player) {
      var name = player.name.trim();
      if (!name) errors.push("Every player needs a name.");
      else if (names[name.toLowerCase()]) errors.push('"' + name + '" is already playing. Choose a different name.');
      else names[name.toLowerCase()] = true;
      player.name = name;
    });
    var lim = limitsOf(game);
    if (roster.players.length < lim.minPlayers || roster.players.length > lim.maxPlayers) {
      errors.push(game.name + " needs " + lim.minPlayers + "–" + lim.maxPlayers + " players.");
    }
    if (draft.mode === "team") {
      if (roster.teams.length < lim.minTeams || roster.teams.length > lim.maxTeams) {
        errors.push("Use " + lim.minTeams + (lim.minTeams === lim.maxTeams ? "" : "–" + lim.maxTeams) + " teams.");
      }
      var sizes = roster.teams.map(function (team) { return team.memberIds.length; });
      if (sizes.some(function (size) { return size < (lim.minPerTeam || 1); })) errors.push("Every team needs at least " + (lim.minPerTeam || 1) + " player.");
      roster.players.forEach(function (player) {
        var placed = roster.teams.some(function (team) { return team.memberIds.indexOf(player.id) >= 0; });
        if (!placed) errors.push((player.name || "A player") + " still needs a team.");
      });
      if (lim.maxDiff != null && sizes.length) {
        var diff = Math.max.apply(null, sizes) - Math.min.apply(null, sizes);
        if (diff > lim.maxDiff) errors.push("Teams are unbalanced. " + game.name + " needs teams that differ by at most " + lim.maxDiff + " player.");
      }
    }
    var seen = {};
    return errors.filter(function (error) { if (seen[error]) return false; seen[error] = true; return true; });
  }

  function assignTeam(playerId, teamId) {
    roster.teams.forEach(function (team) {
      team.memberIds = team.memberIds.filter(function (id) { return id !== playerId; });
    });
    var team = roster.teams.filter(function (item) { return item.id === teamId; })[0];
    if (team) team.memberIds.push(playerId);
    persistRoster();
  }

  function startClock() {
    session.status = "playing";
    session.timer.endsAt = Date.now() + session.timer.remainingMs;
    persistSession();
    render();
  }

  function pauseClock() {
    session.timer.remainingMs = Math.max(0, session.timer.endsAt ? session.timer.endsAt - Date.now() : session.timer.remainingMs);
    session.timer.endsAt = null;
    session.status = "paused";
    persistSession();
    render();
  }

  function resumeClock() {
    session.status = "playing";
    session.timer.endsAt = Date.now() + session.timer.remainingMs;
    persistSession();
    render();
  }

  function onTimeUp() {
    if (!session || session.status !== "playing") return;
    session.timer.remainingMs = 0;
    session.timer.endsAt = null;
    session.status = session.gameId === "football" ? "periodEnd" : "timeUp";
    persistSession();
    render();
  }

  function pushEvent(partial) {
    var person = currentParticipant();
    session.events.push({
      id: uid("ev"),
      at: Date.now(),
      round: session.gameId === "football" ? session.period : session.round,
      participantId: partial.participantId != null ? partial.participantId : (person ? person.id : null),
      kind: partial.kind,
      points: partial.points,
      contentId: partial.contentId || (session.content && session.content.id),
      contentTitle: partial.contentTitle || (session.content && (session.content.title || session.content.prompt || "")),
      note: partial.note || "",
      reversed: false
    });
  }

  function endTurn() {
    session.status = "turnComplete";
    session.timer.endsAt = null;
    persistSession();
    render();
  }

  function nextTurn() {
    var count = session.participants.length;
    session.turnIndex += 1;
    session.hintUsed = false;
    session.skips = 0;
    session.reveal = {};
    session.choice = null;
    session.bonusGiven = false;
    ui.peek = false;
    ui.performer = false;
    var done = session.turnIndex;
    if (done >= count * session.settings.totalRounds) {
      session.status = "review";
    } else if (done % count === 0) {
      session.round += 1;
      session.status = "roundComplete";
    } else {
      session.status = "ready";
      session.content = takeContent(null);
      session.timer = freshTimer(session.settings.turnSeconds);
    }
    persistSession();
    render();
  }

  function pointsNow(item) {
    var base = item.points || 0;
    if (!session.hintUsed) return base;
    return Math.max(1, base - 1);
  }

  function route() {
    var parts = (location.hash || "#/").replace(/^#\/?/, "").split("/").filter(Boolean);
    return { name: parts[0] || "home", id: parts[1] || "" };
  }

  function go(hash) { location.hash = hash; }

  function toast(message) {
    ui.toast = message;
    render();
    clearTimeout(ui.toastTimer);
    ui.toastTimer = setTimeout(function () { ui.toast = null; render(); }, 4200);
  }

  function ask(title, body, okLabel, onOk) {
    ui.modal = { title: title, body: body, okLabel: okLabel, onOk: onOk };
    render();
  }

  function closeModal() {
    ui.modal = null;
    ui.settings = false;
    ui.performer = false;
    render();
  }

  function header(current) {
    var resume = "";
    if (session && current !== "play") {
      var g = gameById(session.gameId);
      resume = '<a class="chip accent" href="#/play">Resume ' + esc(g ? g.name : "game") + "</a>";
    }
    return '<header class="top"><div class="wrap"><a class="brand" href="#/"><span class="mark">F<span>.</span></span><span><small>FAMILY GAME NIGHT</small><strong>Family AI Game Day</strong></span></a><nav class="nav" aria-label="Main">' +
      resume +
      '<a href="#/"' + (current === "home" ? ' aria-current="page"' : "") + ">Home</a>" +
      '<a href="#/games"' + (current === "games" || current === "setup" || current === "rules" ? ' aria-current="page"' : "") + ">Games</a>" +
      '<a href="#/history"' + (current === "history" || current === "results" ? ' aria-current="page"' : "") + ">History</a>" +
      '<button type="button" class="ghost" data-action="settings">Settings</button></nav></div></header>';
  }

  function footer() {
    return '<footer class="footer"><div class="wrap"><span>Family AI Game Day · Static website for the Abu Dhabi University Cycle 2 challenge</span><span>AI-created challenges are prepared in the website. The host makes every call.</span></div></footer>';
  }

  function shell(current, inner) {
    return header(current) + '<main><div class="wrap" id="view" tabindex="-1">' + inner + "</div></main>" + footer();
  }

  function chipOrigin() {
    return '<span class="chip accent">AI-created · prepared set</span>';
  }

  function anotherButton() {
    var left = session ? poolLeft().length : 0;
    if (session && session.content && left <= 1 && !session.allowRepeats) {
      return '<button type="button" class="btn ghost sm" data-action="allow-repeats">Reuse prepared challenges</button>';
    }
    return '<button type="button" class="btn ghost sm" data-action="another">New prepared challenge</button>';
  }

  function homeScreen() {
    var sample = CONTENT.heritageRiddleRelay.filter(function (item) { return item.title === "The Famous Pot"; })[0] || CONTENT.heritageRiddleRelay[0];
    var cards = GAMES.map(function (game, index) {
      return '<a class="card" href="#/setup/' + game.id + '"><div class="icon-tile">' + (index + 1) + '</div><h3>' + esc(game.name) + '</h3><p class="faint">' + (game.modes.indexOf("individual") >= 0 ? "Team or Individual" : "Team") + " · " + esc(game.duration) + "</p></a>";
    }).join("");
    return '<section class="hero"><div><p class="pill"><i class="dot"></i> Culture · Heritage · Sport</p><h1 class="mt">Bring Everyone Together.</h1><p class="lead mt">Five games. One family. Endless ways to play.</p><div class="row mt"><a class="btn primary" href="#/games">Start Playing</a><button type="button" class="btn ghost" data-action="explore">Explore Games</button></div><p class="faint mt">A human host controls scoring and confirms every result.</p></div><article class="card sample"><div class="row" style="justify-content:space-between"><p class="eyebrow">UAE Heritage Riddle Relay</p>' + chipOrigin() + '</div><p class="kicker mt">Team A · P2\'s turn · Round 2</p><h2 class="mt">' + esc(sample.title) + '</h2><p class="mt">' + esc(sample.riddle) + '</p><details class="mt"><summary class="btn sm">Reveal answer</summary><p class="mt"><strong>' + esc(sample.answer) + '.</strong> ' + esc(sample.explanation) + "</p></details></article></section>" +
      '<section class="mt-lg" id="games-grid"><p class="eyebrow">The lineup</p><h2 class="page-title">The five games</h2><div class="grid-5 mt">' + cards + "</div></section>" +
      '<section class="mt-lg"><p class="eyebrow">How it works</p><h2 class="page-title">Three steps to game day</h2><div class="grid-2 mt"><article class="card"><p class="num">1</p><h3>Choose your game and players</h3><p>Pick one of five games, then set up players and teams.</p></article><article class="card"><p class="num">2</p><h3>Play the prepared challenges</h3><p>Riddles, missions, stories and prompts are already in the website.</p></article></div><article class="card mt"><p class="num">3</p><h3>The host confirms the result</h3><p>The website keeps time, turns and scores. It never judges an answer by itself.</p></article></section>';
  }

  function gamesScreen() {
    var list = GAMES.filter(function (game) {
      if (ui.filter === "team") return game.modes.indexOf("team") >= 0;
      if (ui.filter === "individual") return game.modes.indexOf("individual") >= 0;
      if (ui.filter === "quick") return game.quick;
      return true;
    });
    function filt(id, label, count) {
      return '<button type="button" class="btn sm" data-action="filter" data-id="' + id + '" aria-pressed="' + (ui.filter === id ? "true" : "false") + '">' + label + " " + count + "</button>";
    }
    var cards = list.map(function (game) {
      return '<article class="card"><p class="faint">' + esc(game.category) + '</p><h3>' + esc(game.name) + "</h3><p>" + esc(game.blurb) + '</p><p class="faint mt">' + esc(game.aiUse) + '</p><a class="btn primary sm mt" href="#/setup/' + game.id + '">Play</a></article>';
    }).join("");
    return '<p class="eyebrow">Step 1 · Choose a game</p><h1 class="page-title">Pick today\'s game</h1><p class="lead mt">Every game uses AI-created content that the family plays with. This website stores that content in the page, so it works with no server.</p><div class="filters mt">' +
      filt("all", "All Games", GAMES.length) +
      filt("team", "Team Games", GAMES.filter(function (g) { return g.modes.indexOf("team") >= 0; }).length) +
      filt("individual", "Individual Games", GAMES.filter(function (g) { return g.modes.indexOf("individual") >= 0; }).length) +
      filt("quick", "Quick Games", GAMES.filter(function (g) { return g.quick; }).length) +
      '</div><p class="faint mt">Showing ' + list.length + " of " + GAMES.length + ' games</p><div class="stack mt">' + cards + "</div>";
  }

  function setupScreen(game) {
    if (!draft || draft.gameId !== game.id) {
      draft = { gameId: game.id, mode: game.defaultMode, turnSeconds: game.defaultTime, rounds: game.defaultRounds, ready: false, errors: [] };
      persistDraft();
    }
    var lim = limitsOf(game);
    var modeToggle = game.modes.length > 1
      ? '<div class="option-row mt"><button type="button" class="btn sm" data-action="mode" data-id="individual" aria-pressed="' + (draft.mode === "individual" ? "true" : "false") + '">Individual players</button><button type="button" class="btn sm" data-action="mode" data-id="team" aria-pressed="' + (draft.mode === "team" ? "true" : "false") + '">Teams</button></div>'
      : "";
    var players = roster.players.map(function (player, index) {
      var teamSelect = "";
      if (draft.mode === "team") {
        var current = "";
        roster.teams.forEach(function (team) { if (team.memberIds.indexOf(player.id) >= 0) current = team.id; });
        teamSelect = '<select data-action="assign" data-id="' + esc(player.id) + '" aria-label="Team for ' + esc(player.name || "player") + '"><option value="" disabled' + (current ? "" : " selected") + ">Choose team</option>" +
          roster.teams.map(function (team) { return '<option value="' + esc(team.id) + '"' + (team.id === current ? " selected" : "") + ">" + esc(team.name) + "</option>"; }).join("") +
          "</select>";
      }
      return '<div class="player-line"><span class="faint">' + (index + 1) + '</span><input type="text" data-player-name="' + esc(player.id) + '" value="' + esc(player.name) + '" aria-label="Player ' + (index + 1) + ' name" maxlength="24">' +
        teamSelect +
        '<button type="button" class="btn sm ghost" data-action="remove-player" data-id="' + esc(player.id) + '" aria-label="Remove ' + esc(player.name || "player") + '">Remove</button></div>';
    }).join("");
    var teams = "";
    if (draft.mode === "team") {
      teams = '<section class="panel"><div class="row" style="justify-content:space-between"><h2>Teams</h2><span><button type="button" class="btn sm ghost" data-action="shuffle">Shuffle</button> <button type="button" class="btn sm ghost" data-action="add-team"' + (roster.teams.length >= lim.maxTeams ? " disabled" : "") + ">+ Add Team</button></span></div>" +
        roster.teams.map(function (team) {
          return '<div class="team-box"><input type="text" data-team-name="' + esc(team.id) + '" value="' + esc(team.name) + '" aria-label="Team name"><p class="faint">' + plural(team.memberIds.length, "player") + '</p><div class="members">' +
            (team.memberIds.map(function (id) { return "<span>" + esc(playerName(id) || "Unnamed") + "</span>"; }).join("") || '<span>Empty</span>') +
            '</div><button type="button" class="btn sm ghost" data-action="remove-team" data-id="' + esc(team.id) + '">Remove ' + esc(team.name) + "</button></div>";
        }).join("") +
        '<p class="faint mt">' + (lim.maxTeams === lim.minTeams ? "Exactly " + lim.minTeams + " teams" : lim.minTeams + "–" + lim.maxTeams + " teams") + " · at least " + (lim.minPerTeam || 1) + " per team" + (lim.maxDiff != null ? " · sizes may differ by " + lim.maxDiff + " at most" : "") + "</p></section>";
    }
    var errors = (draft.errors || []).length ? '<div class="error mt"><strong>This setup can\'t start yet</strong><ul class="mt">' + draft.errors.map(function (error) { return "<li>" + esc(error) + "</li>"; }).join("") + "</ul></div>" : "";
    return '<button type="button" class="back" data-action="back-games">← All games</button><p class="eyebrow">Step 2 · Players & teams</p><h1 class="page-title">' + esc(game.name) + "</h1>" + modeToggle +
      '<p class="limits">Limits: ' + lim.minPlayers + "–" + lim.maxPlayers + " players" + (draft.mode === "team" ? " · " + (lim.minTeams === lim.maxTeams ? "exactly " + lim.minTeams + " teams" : lim.minTeams + "–" + lim.maxTeams + " teams") : "") + "</p>" +
      '<div class="setup mt"><section class="panel"><div class="row" style="justify-content:space-between"><h2>Players</h2><span class="faint">' + roster.players.length + " of " + lim.minPlayers + "–" + lim.maxPlayers + "</span></div><div class=\"player-row\">" + players + "</div>" +
      '<div class="row mt"><input type="text" id="new-player" placeholder="New player name (e.g. P5)" aria-label="New player name" maxlength="24"><button type="button" class="btn" data-action="add-player"' + (roster.players.length >= lim.maxPlayers ? " disabled" : "") + ">Add Player</button></div></section>" + teams + "</div>" +
      errors +
      '<div class="row mt" style="justify-content:flex-end"><button type="button" class="btn ghost" data-action="save-roster">Save Players & Teams</button><button type="button" class="btn primary" data-action="to-rules">Continue to Rules →</button></div>';
  }

  function rulesScreen(game) {
    if (!draft || draft.gameId !== game.id) return '<p>Choose a game first.</p><a class="btn mt" href="#/games">All games</a>';
    var times = game.times.map(function (sec) {
      return '<button type="button" class="btn sm" data-action="time" data-id="' + sec + '" aria-pressed="' + (draft.turnSeconds === sec ? "true" : "false") + '">' + formatDuration(sec) + "</button>";
    }).join("");
    var rounds = game.rounds.map(function (n) {
      return '<button type="button" class="btn sm" data-action="rounds" data-id="' + n + '" aria-pressed="' + (draft.rounds === n ? "true" : "false") + '">' + n + "</button>";
    }).join("");
    var people = draft.mode === "team" ? roster.teams : roster.players;
    var order = people.map(function (person, index) {
      var extra = person.memberIds ? " — " + person.memberIds.map(playerName).join(", ") : "";
      return "<li><span class=\"num\">" + (index + 1) + "</span><span><strong>" + esc(person.name) + "</strong>" + esc(extra) + "</span></li>";
    }).join("");
    var summary = game.id === "football"
      ? roundWord(game, draft.rounds) + " of " + formatDuration(draft.turnSeconds) + "."
      : roundWord(game, draft.rounds) + " × " + people.length + " turns = " + (draft.rounds * people.length) + " turns of " + formatDuration(draft.turnSeconds) + ".";
    return '<button type="button" class="back" data-action="back-setup">← Back to Setup</button><p class="eyebrow">Step 3 · Rules & ready</p><h1 class="page-title">' + esc(game.name) + '</h1><p class="muted mt">' + esc(game.aiUse) + '</p><div class="rules mt"><article class="panel"><h2>How to play</h2><p class="mt"><strong>Objective.</strong> ' + esc(game.objective) + '</p><ol class="rule-list mt">' +
      game.how.map(function (step, index) { return '<li><span class="num">' + (index + 1) + "</span><span>" + esc(step) + "</span></li>"; }).join("") +
      '</ol><div class="split mt"><div><h3>Points</h3><ul class="mt">' + game.points.map(function (line) { return "<li>• " + esc(line) + "</li>"; }).join("") +
      '</ul></div><div><h3>Penalties</h3><ul class="mt">' + game.penalties.map(function (line) { return "<li>• " + esc(line) + "</li>"; }).join("") +
      '</ul></div></div><h3 class="mt">Tie-break</h3><p class="muted">' + esc(game.tie) + '</p><h3 class="mt">Host confirms</h3><p class="muted">' + esc(game.host) + "</p></article><div class=\"stack\"><section class=\"panel\"><h2>Game settings</h2><p class=\"faint mt\">" + esc(game.timeLabel) + '</p><div class="option-row mt">' + times + '</div><p class="faint mt">' + esc(game.roundsLabel) + '</p><div class="option-row mt">' + rounds + '</div><p class="faint mt">' + esc(summary) + '</p></section><section class="panel"><h2>' + (draft.mode === "team" ? "Teams" : "Players") + ' · turn order</h2><ol class="rule-list mt">' + order + '</ol></section><section class="panel ready"><h2>Everyone Ready?</h2><p class="muted mt">Read the rules aloud. The timer starts only when the host begins play.</p><button type="button" class="btn block mt' + (draft.ready ? " accent" : "") + '" data-action="ready" aria-pressed="' + (draft.ready ? "true" : "false") + '">' + (draft.ready ? "Everyone is ready — confirmed" : "Everyone Is Ready") + '</button><button type="button" class="btn primary block mt" data-action="start"' + (draft.ready ? "" : " disabled") + ">Start Game</button></section></div></div>";
  }

  function scoreboardHtml() {
    var rows = standings();
    var top = leaders();
    var sole = top.rows.length === 1 && top.top > 0 ? top.rows[0].id : "";
    var active = session.status === "ready" || session.status === "playing" || session.status === "paused" || session.status === "timeUp" ? (currentParticipant() || {}).id : "";
    return '<section class="panel"><h2>Scoreboard</h2>' + rows.map(function (row) {
      var tags = "";
      if (row.id === active) tags += ' <span class="tag">Now playing</span>';
      else if (row.id === sole) tags += ' <span class="tag">Leading</span>';
      var stars = session.gameId === "football" ? '<span class="faint">' + row.missions + " mission star" + (row.missions === 1 ? "" : "s") + "</span>" : "";
      return '<div class="score-row"><span><strong>' + esc(row.name) + "</strong>" + tags + "<br>" + stars + '</span><strong class="big" style="font-size:32px">' + row.score + "</strong></div>";
    }).join("") + '<p class="faint mt">Confirmed by the host</p></section>';
  }

  function logHtml() {
    var events = session.events.slice().reverse();
    if (!events.length) return '<section class="panel"><h2>Score history</h2><p class="muted mt">Nothing recorded yet.</p></section>';
    return '<section class="panel"><div class="row" style="justify-content:space-between"><h2>Score history</h2><span class="faint">' + events.length + '</span></div>' + events.slice(0, 8).map(function (event) {
      var who = session.participants.filter(function (person) { return person.id === event.participantId; })[0];
      return '<div class="log"><div class="' + (event.reversed ? "undone" : "") + '"><strong>' + (event.points > 0 ? "+" + event.points : event.points) + "</strong> " + esc(who ? who.name : "") + " · " + esc(event.kind) + (event.reversed ? " · Undone" : "") + '<br><span class="faint">' + esc(event.note || event.contentTitle || "") + '</span></div><button type="button" class="btn sm ghost" data-action="undo" data-id="' + esc(event.id) + '">Undo</button></div>';
    }).join("") + "</section>";
  }

  function statusLabel() {
    var map = { ready: "Ready", playing: "In play", paused: "Paused", timeUp: "Time's up", turnComplete: "Turn complete", roundComplete: "Round complete", periodEnd: "Period ended", review: "Confirm result", tiebreak: "Tie-break" };
    return map[session.status] || session.status;
  }

  function playHeader(game) {
    var person = currentParticipant();
    var runner = currentPlayer(person);
    var roundText = game.id === "football"
      ? "Period " + session.period + " of " + session.settings.totalRounds
      : "Round " + session.round + " of " + session.settings.totalRounds + " · Turn " + ((session.turnIndex % session.participants.length) + 1) + " of " + session.participants.length;
    var sub = game.id === "football" ? "" : (runner ? esc(runner.name) + "'s turn" : "");
    return '<div class="play-top"><div><h1 class="page-title" style="font-size:28px">' + esc(game.name) + '</h1><p class="mt"><span class="chip accent">' + esc(statusLabel()) + "</span> " + esc(roundText) + (sub ? " · <span class=\"kicker\">" + sub + "</span>" : "") + '</p></div><div class="row"><button type="button" class="btn ghost sm" data-action="end-game">End Game</button><button type="button" class="btn ghost sm" data-action="exit">Exit</button></div></div>';
  }

  function clockHtml(label) {
    var left = session.status === "playing" && session.timer.endsAt ? Math.max(0, session.timer.endsAt - Date.now()) : session.timer.remainingMs;
    var frac = session.timer.durationMs ? left / session.timer.durationMs : 0;
    return '<div class="clock-box"><p class="eyebrow">' + esc(label) + '</p><p class="clock" data-clock>' + formatMs(left) + '</p><div class="bar"><i data-bar style="transform:scaleX(' + frac + ')"></i></div><p class="faint">' + (session.status === "playing" ? "Running" : session.status === "paused" ? "Paused" : session.status === "ready" ? "Waiting" : "Stopped") + "</p></div>";
  }

  function footballScreen(game) {
    var item = session.content;
    var teams = session.participants;
      var locked = session.status !== "playing" && session.status !== "paused";
    var board = '<div class="scoreline">' + teams.map(function (team, index) {
      var row = standings().filter(function (itemRow) { return itemRow.id === team.id; })[0];
      var goalBtn = '<button type="button" class="btn block mt" data-action="goal" data-id="' + esc(team.id) + '"' + (locked || (session.goalLock[team.id] > Date.now()) ? " disabled" : "") + ">+ Goal</button>";
      var side = '<div><p class="eyebrow">' + esc(team.name) + "</p><p class=\"big\">" + (row ? row.score : 0) + '</p><p class="faint">' + (row ? row.missions : 0) + " mission stars</p>" + goalBtn + "</div>";
      return index === 0 ? side + clockHtml("Match clock") : side;
    }).join("") + "</div>";
    var mission = "";
    if (item) {
      mission = '<article class="panel mt"><div class="row" style="justify-content:space-between"><p class="eyebrow">Match mission</p><span>' + chipOrigin() + " " + esc(item.difficulty) + "</span></div><h2 class=\"mt\">" + esc(item.title) + "</h2><p class=\"chip mt\">" + esc(item.category) + "</p><p class=\"mt\">" + esc(item.instruction) + '</p><p class="faint mt">How the host decides: ' + esc(item.successCriteria) + '</p><div class="row mt">' +
        teams.map(function (team) {
          var done = activeEvents().some(function (event) { return event.kind === "mission" && event.contentId === item.id && event.participantId === team.id; });
          return '<button type="button" class="btn sm' + (done ? " accent" : "") + '" data-action="mission" data-id="' + esc(team.id) + '"' + (done || session.status === "ready" || session.status === "review" ? " disabled" : "") + ">" + esc(team.name) + (done ? " completed" : " completed it") + "</button>";
        }).join("") +
        '<button type="button" class="btn sm ghost" data-action="skip-mission">Next mission</button>' + anotherButton() + "</div></article>";
    }
    var controls = "";
    if (session.status === "ready") controls = '<button type="button" class="btn primary" data-action="kick">Kick Off</button>';
    else if (session.status === "playing") controls = '<button type="button" class="btn" data-action="pause">Pause</button>';
    else if (session.status === "paused") controls = '<button type="button" class="btn primary" data-action="resume">Resume</button>';
    else if (session.status === "periodEnd") {
      controls = session.period < session.settings.totalRounds
        ? '<button type="button" class="btn primary" data-action="next-period">Start next period</button>'
        : '<button type="button" class="btn primary" data-action="to-review">Full time</button>';
    }
    return playHeader(game) + '<div class="play-grid mt"><div><section class="panel">' + board + '</section><div class="row mt">' + controls + '<button type="button" class="btn ghost" data-action="undo-goal">Undo Last Goal</button></div>' + mission + "</div><div class=\"stack\">" + scoreboardHtml() + logHtml() + "</div></div>";
  }

  function turnDone(game, heading) {
    var person = session.participants[(session.turnIndex) % session.participants.length];
    var earned = activeEvents().filter(function (event) { return event.round === session.round && event.participantId === person.id; }).reduce(function (sum, event) { return sum + event.points; }, 0);
    return playHeader(game) + '<section class="success-box mt"><p class="eyebrow">Turn complete</p><h2 class="mt">' + esc(heading) + "</h2><p class=\"mt\">" + esc(person.name) + " earned +" + earned + " this turn.</p>" +
      '<div class="row mt"><button type="button" class="btn primary" data-action="next-turn">Next turn →</button><button type="button" class="btn ghost" data-action="change-result">Change result</button></div></section><div class="grid-2 mt">' + scoreboardHtml() + logHtml() + "</div>";
  }

  function riddleScreen(game) {
    var item = session.content;
    var person = currentParticipant();
    if (session.status === "turnComplete") {
      var last = activeEvents().filter(function (event) { return event.participantId === person.id; }).pop();
      var heading = last && last.kind === "correct" ? "Correct! Well solved, " + person.name + "." : "Recorded. " + person.name + " scored " + (last ? last.points : 0) + ".";
      return turnDone(game, heading);
    }
    if (session.status === "roundComplete") {
      return playHeader(game) + '<section class="panel mt"><h2>Round ' + (session.round - 1) + ' complete</h2><p class="muted mt">Pass the baton and start the next round when everyone is ready.</p><button type="button" class="btn primary mt" data-action="start-round">Start round ' + session.round + "</button></section>";
    }
    var shown = session.status !== "ready";
    var body = shown && item
      ? "<p>" + esc(item.riddle) + "</p>" + (session.hintUsed ? '<p class="mt"><strong>Hint:</strong> ' + esc(item.hint) + "</p>" : "") + (session.reveal.answer ? '<p class="mt"><strong>Answer:</strong> ' + esc(item.answer) + "</p><p>" + esc(item.explanation) + "</p>" : "")
      : "<p>The riddle appears when the host starts the turn. Worth " + (item ? item.points : "") + " points.</p>";
    var award = pointsNow(item || { points: 0 });
    var controls = session.status === "ready"
      ? '<button type="button" class="btn primary block" data-action="start-turn">Start Turn</button>' + anotherButton()
      : '<button type="button" class="btn block" data-action="hint"' + (session.hintUsed ? " disabled" : "") + ">Reveal Hint (−1)</button>" +
        '<button type="button" class="btn block" data-action="show-answer"' + (session.reveal.answer ? " disabled" : "") + ">Reveal Answer</button>" +
        '<button type="button" class="btn accent block" data-action="mark" data-id="correct" data-points="' + award + '">Correct +' + award + "</button>" +
        '<button type="button" class="btn block" data-action="mark" data-id="incorrect" data-points="0">Incorrect</button>' +
        (session.status === "playing" ? '<button type="button" class="btn block" data-action="pause">Pause</button>' : session.status === "paused" ? '<button type="button" class="btn block" data-action="resume">Resume</button>' : "") +
        (session.status === "timeUp" ? '<p class="banner">Time\'s up. The host can still accept a late answer.</p>' : "");
    return playHeader(game) + '<div class="play-grid mt"><article class="panel"><div class="row" style="justify-content:space-between"><p class="eyebrow">Heritage riddle</p>' + chipOrigin() + "</div><h2 class=\"mt\">" + esc(item ? item.title : "Riddle") + "</h2><p class=\"chip mt\">" + esc(item ? item.topic : "") + '</p><div class="mt">' + body + "</div></article><div class=\"stack\">" + clockHtml("Answer time") + '<div class="panel stack">' + controls + "</div></div></div><div class=\"grid-2 mt\">" + scoreboardHtml() + logHtml() + "</div>";
  }

  function expeditionScreen(game) {
    var item = session.content;
    var person = currentParticipant();
    if (session.status === "turnComplete") {
      return playHeader(game) + '<section class="success-box mt"><p class="eyebrow">Turn complete</p><h2>Decision recorded</h2>' +
        (item && item.followUp ? '<p class="mt"><strong>Follow-up:</strong> ' + esc(item.followUp) + "</p>" : "") +
        '<div class="row mt">' + (item && item.followUp && !session.bonusGiven ? '<button type="button" class="btn" data-action="bonus">Completed · award +1</button>' : "") +
        '<button type="button" class="btn primary" data-action="next-turn">Next turn →</button><button type="button" class="btn ghost" data-action="change-result">Change result</button></div></section><div class="grid-2 mt">' + scoreboardHtml() + logHtml() + "</div>";
    }
    if (session.status === "roundComplete") {
      return playHeader(game) + '<section class="panel mt"><h2>Stage complete</h2><button type="button" class="btn primary mt" data-action="start-round">Start stage ' + session.round + "</button></section>";
    }
    var open = session.status !== "ready";
    var choices = open && item ? item.choices.map(function (choice, index) {
      var letter = "ABCD"[index] || String(index + 1);
      var mark = session.reveal.guidance && index === item.suggestedChoice ? " · Suggested" : "";
      return '<label class="choice"><input type="radio" name="choice" data-action="choice" value="' + index + '"' + (session.choice === index ? " checked" : "") + "><span><strong>" + letter + ".</strong> " + esc(choice) + esc(mark) + "</span></label>";
    }).join("") : "<p>Read the story aloud, then start the discussion timer.</p>";
    var guidance = session.reveal.guidance && item ? '<div class="mt"><p><strong>Host guidance.</strong> ' + esc(item.hostGuidance) + "</p><ul class=\"mt\">" + (item.scoringCriteria || []).map(function (line) { return "<li>• " + esc(line) + "</li>"; }).join("") + "</ul></div>" : "";
    var controls = session.status === "ready"
      ? '<button type="button" class="btn primary block" data-action="start-turn">Start Discussion</button>' + anotherButton()
      : '<button type="button" class="btn block" data-action="guidance">Reveal host guidance</button>' +
        '<button type="button" class="btn accent block" data-action="reason" data-points="3">Strong reasoning +3</button>' +
        '<button type="button" class="btn block" data-action="reason" data-points="2">Good reasoning +2</button>' +
        '<button type="button" class="btn block" data-action="reason" data-points="1">Some reasoning +1</button>' +
        '<button type="button" class="btn block" data-action="reason" data-points="0">No clear decision +0</button>' +
        (session.status === "playing" ? '<button type="button" class="btn block" data-action="pause">Pause</button>' : session.status === "paused" ? '<button type="button" class="btn block" data-action="resume">Resume</button>' : "");
    return playHeader(game) + '<div class="play-grid mt"><article class="panel"><div class="row" style="justify-content:space-between"><p class="eyebrow">Story scenario</p>' + chipOrigin() + "</div><h2 class=\"mt\">" + esc(item ? item.title : "Scenario") + "</h2><p class=\"mt\">" + esc(item ? item.scenario : "") + "</p><p class=\"mt\"><strong>" + esc(item ? item.challenge : "") + '</strong></p><div class="stack mt">' + choices + "</div>" + guidance + "</article><div class=\"stack\">" + clockHtml("Discussion time") + '<div class="panel stack">' + controls + "</div></div></div><div class=\"grid-2 mt\">" + scoreboardHtml() + logHtml() + "</div>";
  }

  function charadesScreen(game) {
    var item = session.content;
    var person = currentParticipant();
    var performer = currentPlayer(person);
    if (session.status === "turnComplete") {
      return playHeader(game) + '<section class="panel mt"><p class="eyebrow">The prompt was</p><h2 class="mt">' + esc(item ? item.prompt : "") + '</h2><div class="row mt"><button type="button" class="btn primary" data-action="next-turn">Next turn →</button><button type="button" class="btn ghost" data-action="change-result">Change result</button></div></section><div class="grid-2 mt">' + scoreboardHtml() + logHtml() + "</div>";
    }
    if (session.status === "roundComplete") {
      return playHeader(game) + '<section class="panel mt"><h2>Round complete</h2><button type="button" class="btn primary mt" data-action="start-round">Start round ' + session.round + "</button></section>";
    }
    var inTurn = session.status === "playing" || session.status === "paused" || session.status === "timeUp";
    var visible = ui.peek && inTurn;
    var secret = visible && item
      ? '<div class="secret open"><p class="chip">' + esc(item.category) + "</p><h2>" + esc(item.prompt) + '</h2><p class="faint">' + esc(item.actingTip) + "</p></div>"
      : '<div class="secret"><p><strong>Prompt hidden</strong></p><p class="faint">Only ' + esc(performer ? performer.name : person.name) + " should see it.</p></div>";
    var skipsLeft = 2 - session.skips;
    var controls = session.status === "ready"
      ? '<button type="button" class="btn" data-action="performer">Show Prompt to Performer</button><button type="button" class="btn primary" data-action="start-turn">Start Acting</button>' + anotherButton()
      : '<button type="button" class="btn" data-action="performer">Show Prompt to Performer</button><button type="button" class="btn ghost sm" data-action="peek">' + (ui.peek ? "Hide prompt" : "Reveal prompt (host)") + "</button>" +
        '<button type="button" class="btn accent" data-action="mark" data-id="correct" data-points="' + (item ? item.points : 0) + '">Correct +' + (item ? item.points : 0) + "</button>" +
        '<button type="button" class="btn" data-action="mark" data-id="incorrect" data-points="0">' + (session.status === "timeUp" ? "Not Guessed" : "Mark Incorrect") + "</button>" +
        (session.status === "timeUp" ? "" : '<button type="button" class="btn" data-action="skip-charade"' + (skipsLeft <= 0 ? " disabled" : "") + ">Skip (" + skipsLeft + " left)</button>") +
        '<button type="button" class="btn danger" data-action="penalty">Said it aloud (−1)</button>' +
        (session.status === "playing" ? '<button type="button" class="btn" data-action="pause">Pause</button>' : session.status === "paused" ? '<button type="button" class="btn" data-action="resume">Resume</button>' : "");
    var banner = session.status === "timeUp" ? '<p class="banner mt">Time\'s up. Did anyone guess the prompt before the buzzer?</p>' : "";
    return playHeader(game) + '<div class="play-grid mt"><article class="panel"><div class="row" style="justify-content:space-between"><p class="eyebrow">Charades prompt</p>' + chipOrigin() + "</div><h2 class=\"mt\">" + esc(visible && item ? item.title : (item ? item.category + " prompt" : "Prompt")) + "</h2>" + secret + '<div class="row mt">' + controls + "</div>" + banner + "</article><div class=\"stack\">" + clockHtml("Acting time") + "</div></div><div class=\"grid-2 mt\">" + scoreboardHtml() + logHtml() + "</div>";
  }

  function cultureScreen(game) {
    var item = session.content;
    var person = currentParticipant();
    if (session.status === "turnComplete" || session.status === "roundComplete") {
      if (session.status === "roundComplete") {
        return playHeader(game) + '<section class="panel mt"><h2>Round complete</h2><button type="button" class="btn primary mt" data-action="start-round">Start round ' + session.round + "</button></section>";
      }
      return turnDone(game, person.name + " is done.");
    }
    if (session.status === "ready" || !item) {
      return playHeader(game) + '<section class="panel mt"><h2>Get ready…</h2><p class="mt">' + esc(person.name) + ", you have " + formatDuration(session.settings.turnSeconds) + '.</p><button type="button" class="btn primary mt" data-action="start-turn">Start ' + formatDuration(session.settings.turnSeconds) + "</button></section>";
    }
    var award = pointsNow(item);
    var own = activeEvents().filter(function (event) { return event.participantId === person.id && event.round === session.round; });
    var tally = '<p class="faint mt">Correct ' + own.filter(function (e) { return e.kind === "correct"; }).length + " · Incorrect " + own.filter(function (e) { return e.kind === "incorrect"; }).length + " · Passed " + own.filter(function (e) { return e.kind === "skip"; }).length + " · Points " + own.reduce(function (s, e) { return s + e.points; }, 0) + "</p>";
    var controls = (session.hintUsed || !item.hint ? "" : '<button type="button" class="btn" data-action="hint">Hint (−1)</button>') +
      '<button type="button" class="btn ghost sm" data-action="show-answer">' + (session.reveal.answer ? "Hide answer" : "Show answer (host)") + "</button>" +
      '<button type="button" class="btn accent" data-action="culture" data-id="correct" data-points="' + award + '">Correct +' + award + "</button>" +
      '<button type="button" class="btn" data-action="culture" data-id="incorrect" data-points="0">Incorrect</button>' +
      '<button type="button" class="btn" data-action="culture" data-id="skip" data-points="0">Pass</button>' +
      (session.status === "playing" ? '<button type="button" class="btn" data-action="pause">Pause</button>' : session.status === "paused" ? '<button type="button" class="btn" data-action="resume">Resume</button>' : "") +
      '<button type="button" class="btn ghost" data-action="end-turn-early">End Turn Early</button>' + anotherButton();
    return playHeader(game) + '<div class="play-grid mt"><article class="panel"><div class="row" style="justify-content:space-between"><p class="eyebrow">' + esc(item.kind === "task" ? "Creative task" : "Question") + "</p>" + chipOrigin() + "</div><h2 class=\"mt\">" + esc(item.title) + "</h2><p class=\"mt\">" + esc(item.prompt) + "</p>" +
      (session.hintUsed && item.hint ? "<p class=\"mt\"><strong>Hint:</strong> " + esc(item.hint) + "</p>" : "") +
      (session.reveal.answer ? "<p class=\"mt\"><strong>Answer:</strong> " + esc(item.answer) + "</p>" : "") +
      tally + (session.status === "timeUp" ? '<p class="banner mt">Time\'s up. Was the last answer in time? Record it, or end the turn.</p>' : "") +
      '<div class="row mt">' + controls + "</div></article><div class=\"stack\">" + clockHtml("Turn clock") + "</div></div><div class=\"grid-2 mt\">" + scoreboardHtml() + logHtml() + "</div>";
  }

  function reviewScreen(game) {
    var result = outcome();
    var rows = standings();
    var score = rows.map(function (row) { return esc(row.name) + " " + row.score; }).join("  –  ");
    var tieTools = "";
    if (result.type === "undecided") {
      var tied = leaders().rows;
      tieTools = '<div class="stack mt"><p>Scores are level. Choose a tie-break or record a draw.</p><button type="button" class="btn" data-action="start-tiebreak">Play a sudden-death challenge</button>' +
        tied.map(function (row) { return '<button type="button" class="btn" data-action="award-tie" data-id="' + esc(row.id) + '">Award win to ' + esc(row.name) + "</button>"; }).join("") +
        '<button type="button" class="btn ghost" data-action="accept-tie">Record a draw</button></div>';
    }
    if (session.status === "tiebreak" && session.content) {
      var item = session.content;
      var secret = game.id === "emiratiCharades" && !ui.peek;
      tieTools = '<article class="panel mt"><p class="eyebrow">Tie-break</p><h2>' + esc(secret ? item.category + " prompt" : (item.title || item.prompt)) + "</h2><p class=\"mt\">" + esc(secret ? "Show this only to the performers." : (item.riddle || item.prompt || item.scenario || item.instruction || "")) + '</p><div class="row mt">' +
        (game.id === "emiratiCharades" ? '<button type="button" class="btn sm" data-action="peek">' + (ui.peek ? "Hide" : "Reveal") + "</button>" : "") +
        leaders().rows.map(function (row) { return '<button type="button" class="btn" data-action="award-tie" data-id="' + esc(row.id) + '">' + esc(row.name) + " wins it</button>"; }).join("") +
        "</div></article>";
    }
    return playHeader(game) + '<section class="panel mt"><p class="eyebrow">Step 5 · Host confirms the result</p><h2 class="mt">Confirm the final result</h2><p class="result-score mt">' + score + '</p><p class="kicker mt">' + esc(result.type === "win" ? result.name + " wins" : result.text) + "</p><p class=\"faint\">" + esc(result.text) + "</p>" +
      tieTools +
      '<button type="button" class="btn primary mt" data-action="confirm"' + (result.type === "undecided" || session.status === "tiebreak" ? " disabled" : "") + ">Confirm Result</button></section><div class=\"grid-2 mt\">" + scoreboardHtml() + logHtml() + "</div>";
  }

  function playScreen() {
    if (!session) return '<h1 class="page-title">No game in progress</h1><a class="btn primary mt" href="#/games">Choose a game</a>';
    var game = gameById(session.gameId);
    if (session.status === "review" || session.status === "tiebreak") return reviewScreen(game);
    if (game.id === "football") return footballScreen(game);
    if (game.id === "heritageRiddleRelay") return riddleScreen(game);
    if (game.id === "desertExpedition") return expeditionScreen(game);
    if (game.id === "emiratiCharades") return charadesScreen(game);
    return cultureScreen(game);
  }

  function resultsScreen(id) {
    var record = history.filter(function (item) { return item.id === id; })[0];
    if (!record) return '<h1 class="page-title">Result not found</h1><a class="btn mt" href="#/history">History</a>';
    var game = gameById(record.gameId);
    var names = record.participants.map(function (person) { return esc(person.name) + " " + record.scores[person.id]; }).join("  –  ");
    return '<section class="center confetti"><p class="eyebrow">Step 6 · Final results · ' + esc(game ? game.name : "") + "</p><h1 class=\"mt\">" + esc(record.outcome.type === "win" ? record.outcome.name + " wins!" : "It's a draw") + '</h1><p class="muted mt">' + esc(record.outcome.text) + '</p><p class="result-score mt">' + names + '</p><div class="row mt" style="justify-content:center"><button type="button" class="btn primary" data-action="play-again" data-id="' + esc(record.id) + '">Play Again</button><a class="btn" href="#/games">Choose Another Game</a></div><p class="faint mt">' + esc(record.summary) + "</p></section>" +
      '<section class="panel mt"><h2>Score history</h2>' + record.events.filter(function (event) { return !event.reversed; }).slice().reverse().map(function (event) {
        var who = record.participants.filter(function (person) { return person.id === event.participantId; })[0];
        return '<p class="log">' + (event.points > 0 ? "+" + event.points : event.points) + " " + esc(who ? who.name : "") + " · " + esc(event.note || event.kind) + "</p>";
      }).join("") + "</section>";
  }

  function historyScreen() {
    if (!history.length) return '<h1 class="page-title">Session history</h1><p class="muted mt">Finished games appear here, on this device only.</p>';
    var items = history.map(function (record) {
      var game = gameById(record.gameId);
      return '<li class="card"><a href="#/results/' + esc(record.id) + '"><strong>' + esc(game ? game.name : record.gameId) + '</strong><br><span class="faint">' + new Date(record.finishedAt).toLocaleString() + " · " + esc(record.outcome.name || record.outcome.text) + "</span></a></li>";
    }).join("");
    return '<div class="row" style="justify-content:space-between"><h1 class="page-title">Session history</h1><button type="button" class="btn ghost" data-action="clear-history">Clear history</button></div><ul class="stack mt">' + items + "</ul>";
  }

  function overlays() {
    var html = "";
    if (ui.toast) html += '<div class="toasts"><div class="toast" role="status">' + esc(ui.toast) + "</div></div>";
    if (ui.settings) {
      html += '<div class="modal-back"><div class="dialog" role="dialog" aria-modal="true"><h2>Settings</h2><p class="muted mt">This is a static website. Challenges come from the prepared AI-created set saved in the page. There is no live AI key and no server.</p><div class="row mt"><button type="button" class="btn" data-action="reset-players">Reset players</button><button type="button" class="btn" data-action="clear-history">Clear history</button><button type="button" class="btn primary" data-action="close" data-autofocus>Close</button></div></div></div>';
    }
    if (ui.modal) {
      html += '<div class="modal-back"><div class="dialog" role="dialog" aria-modal="true" aria-labelledby="dlg-title"><h2 id="dlg-title">' + esc(ui.modal.title) + '</h2><p class="muted mt">' + esc(ui.modal.body) + '</p><div class="row mt"><button type="button" class="btn" data-action="cancel" data-autofocus>Cancel</button><button type="button" class="btn primary" data-action="modal-ok">' + esc(ui.modal.okLabel) + "</button></div></div></div>";
    }
    if (ui.performer && session && session.content) {
      var item = session.content;
      var person = currentPlayer(currentParticipant());
      html += '<div class="modal-back"><div class="dialog performer" role="dialog" aria-modal="true"><p class="eyebrow">For ' + esc(person ? person.name : "the performer") + '\'s eyes only</p>' + chipOrigin() + '<p class="mt">' + esc(item.category) + '</p><h2>' + esc(item.prompt) + '</h2><p><strong>Acting tip:</strong> ' + esc(item.actingTip) + '</p><p class="faint">No talking, no spelling, no pointing. Worth ' + item.points + '.</p><button type="button" class="btn primary block mt" data-action="hide-prompt" data-autofocus>Got it — Hide Prompt</button></div></div>';
    }
    document.body.classList.toggle("locked", !!(ui.modal || ui.settings || ui.performer));
    return html;
  }

  function render() {
    var current = route();
    var game = gameById(current.id) || (draft && gameById(draft.gameId)) || (session && gameById(session.gameId));
    var title = "Family AI Game Day";
    var inner = "";
    if (current.name === "home") { title = "Home"; inner = homeScreen(); }
    else if (current.name === "games") { title = "Choose a Game"; inner = gamesScreen(); }
    else if (current.name === "setup") { title = "Players & Teams"; inner = game ? setupScreen(game) : gamesScreen(); }
    else if (current.name === "rules") { title = "Rules & Ready"; inner = game ? rulesScreen(game) : gamesScreen(); }
    else if (current.name === "play") { title = "Game in Progress"; inner = playScreen(); }
    else if (current.name === "results") { title = "Final Results"; inner = resultsScreen(current.id); }
    else if (current.name === "history") { title = "Session History"; inner = historyScreen(); }
    else inner = homeScreen();
    document.title = title + " · Family AI Game Day";
    document.getElementById("app").innerHTML = shell(current.name, inner) + overlays();
    var focus = document.querySelector("[data-autofocus]");
    if (focus) focus.focus();
  }

  function replaceSession(next) {
    if (session && session.status !== "finished") {
      ask("Replace the game in progress?", "The current game is still open. Starting a new one clears it. Finished games stay in History.", "Start new game", next);
      return;
    }
    next();
  }

  document.addEventListener("click", function (event) {
    var button = event.target.closest("[data-action]");
    if (!button) return;
    var action = button.getAttribute("data-action");
    var id = button.getAttribute("data-id");
    var game = draft ? gameById(draft.gameId) : null;

    if (action === "settings") { ui.settings = true; render(); return; }
    if (action === "close" || action === "cancel") { closeModal(); return; }
    if (action === "modal-ok" && ui.modal) { var fn = ui.modal.onOk; ui.modal = null; fn(); return; }
    if (action === "explore") {
      var grid = document.getElementById("games-grid");
      if (grid) grid.scrollIntoView({ behavior: "smooth" });
      return;
    }
    if (action === "filter") { ui.filter = id; render(); return; }
    if (action === "back-games") { go("#/games"); return; }
    if (action === "back-setup") { go("#/setup/" + (draft ? draft.gameId : "")); return; }
    if (action === "mode") { readSetupInputs(); draft.mode = id; draft.ready = false; persistDraft(); render(); return; }
    if (action === "add-player") {
      readSetupInputs();
      var input = document.getElementById("new-player");
      var name = input ? input.value.trim() : "";
      if (!name) { toast("Enter a name first."); return; }
      if (roster.players.some(function (player) { return player.name.toLowerCase() === name.toLowerCase(); })) { toast('"' + name + '" is already playing.'); return; }
      var player = { id: uid("p"), name: name };
      roster.players.push(player);
      if (draft && draft.mode === "team" && roster.teams[0]) roster.teams[0].memberIds.push(player.id);
      persistRoster();
      render();
      return;
    }
    if (action === "remove-player") {
      readSetupInputs();
      if (roster.players.length <= 1) { toast("Keep at least one player."); return; }
      roster.players = roster.players.filter(function (player) { return player.id !== id; });
      roster.teams.forEach(function (team) { team.memberIds = team.memberIds.filter(function (pid) { return pid !== id; }); });
      persistRoster();
      render();
      return;
    }
    if (action === "add-team") {
      readSetupInputs();
      var n = roster.teams.length + 1;
      roster.teams.push({ id: uid("team"), name: "Team " + String.fromCharCode(64 + n), memberIds: [] });
      persistRoster();
      render();
      return;
    }
    if (action === "remove-team") {
      readSetupInputs();
      roster.teams = roster.teams.filter(function (team) { return team.id !== id; });
      persistRoster();
      render();
      return;
    }
    if (action === "shuffle") {
      readSetupInputs();
      var ids = roster.players.map(function (player) { return player.id; });
      for (var i = ids.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = ids[i]; ids[i] = ids[j]; ids[j] = tmp;
      }
      roster.teams.forEach(function (team) { team.memberIds = []; });
      ids.forEach(function (pid, index) { roster.teams[index % roster.teams.length].memberIds.push(pid); });
      persistRoster();
      render();
      return;
    }
    if (action === "save-roster") {
      readSetupInputs();
      persistRoster();
      toast("Players and teams saved on this device.");
      return;
    }
    if (action === "to-rules") {
      var errors = validateSetup(game);
      draft.errors = errors;
      persistRoster();
      persistDraft();
      if (errors.length) { render(); return; }
      go("#/rules");
      return;
    }
    if (action === "time") { draft.turnSeconds = Number(id); draft.ready = false; persistDraft(); render(); return; }
    if (action === "rounds") { draft.rounds = Number(id); draft.ready = false; persistDraft(); render(); return; }
    if (action === "ready") { draft.ready = !draft.ready; persistDraft(); render(); return; }
    if (action === "start") {
      if (!draft.ready) return;
      replaceSession(function () {
        createSession(gameById(draft.gameId), {
          mode: draft.mode,
          players: roster.players,
          teams: roster.teams,
          turnSeconds: draft.turnSeconds,
          rounds: draft.rounds
        });
        go("#/play");
      });
      return;
    }
    if (action === "exit") {
      ask("Leave this game?", "You can resume it from the header until you start another game.", "Leave", function () { go("#/games"); });
      return;
    }
    if (action === "end-game") {
      ask("End the game now?", "You will confirm the score next. Nothing is saved until you confirm.", "End game", function () {
        session.status = "review";
        session.timer.endsAt = null;
        persistSession();
        render();
      });
      return;
    }
    if (action === "kick" || action === "start-turn") { startClock(); return; }
    if (action === "pause") { pauseClock(); return; }
    if (action === "resume") { resumeClock(); return; }
    if (action === "goal") {
      if (session.goalLock[id] > Date.now()) return;
      var team = session.participants.filter(function (person) { return person.id === id; })[0];
      pushEvent({ participantId: id, kind: "goal", points: 1, contentTitle: "Goal", note: "Goal confirmed by host" });
      session.goalLock[id] = Date.now() + 1500;
      persistSession();
      toast("Goal for " + (team ? team.name : "team") + "!");
      return;
    }
    if (action === "undo-goal") {
      var lastGoal = session.events.filter(function (item) { return item.kind === "goal" && !item.reversed; }).pop();
      if (!lastGoal) { toast("No goal to undo."); return; }
      ask("Undo the last goal?", "The score will go back.", "Undo goal", function () {
        lastGoal.reversed = true;
        persistSession();
        render();
      });
      return;
    }
    if (action === "undo") {
      var target = session.events.filter(function (item) { return item.id === id; })[0];
      if (!target || target.reversed) return;
      ask("Undo this entry?", target.note || target.kind, "Undo", function () {
        target.reversed = true;
        persistSession();
        render();
      });
      return;
    }
    if (action === "mission") {
      var side = session.participants.filter(function (person) { return person.id === id; })[0];
      pushEvent({ participantId: id, kind: "mission", points: 0, note: "Mission star earned" });
      persistSession();
      toast((side ? side.name : "Team") + ' completed "' + session.content.title + '"!');
      return;
    }
    if (action === "skip-mission") {
      var nextMission = takeContent(session.content && session.content.id);
      if (!nextMission) { toast("No other prepared missions yet. You can reuse the set."); return; }
      session.content = nextMission;
      persistSession();
      toast("A different mission was drawn from the prepared AI-created set.");
      return;
    }
    if (action === "another") {
      var nextItem = takeContent(session.content && session.content.id);
      if (!nextItem) { toast("The prepared set is finished. Choose reuse to see them again."); render(); return; }
      session.content = nextItem;
      session.reveal = {};
      session.hintUsed = false;
      persistSession();
      toast("Drawn from the prepared AI-created set. This static website does not call a live AI service.");
      return;
    }
    if (action === "allow-repeats") { session.allowRepeats = true; persistSession(); toast("Prepared challenges can appear again."); return; }
    if (action === "hint") { session.hintUsed = true; persistSession(); render(); return; }
    if (action === "show-answer") { session.reveal.answer = !session.reveal.answer; persistSession(); render(); return; }
    if (action === "guidance") { session.reveal.guidance = true; persistSession(); render(); return; }
    if (action === "mark") {
      var pts = Number(button.getAttribute("data-points") || 0);
      pushEvent({ kind: id === "correct" ? "correct" : "incorrect", points: pts, note: id === "correct" ? (session.hintUsed ? "Solved with the hint" : "Correct") : "Not accepted" });
      endTurn();
      return;
    }
    if (action === "reason") {
      var reasonPoints = Number(button.getAttribute("data-points"));
      if (reasonPoints > 0 && session.choice == null) { toast("Select the team's choice first."); return; }
      var letter = session.choice == null ? "" : "Chose " + ("ABCD"[session.choice] || "");
      pushEvent({ kind: reasonPoints > 0 ? "correct" : "incorrect", points: reasonPoints, note: letter });
      endTurn();
      return;
    }
    if (action === "bonus") {
      if (session.bonusGiven) return;
      pushEvent({ kind: "bonus", points: 1, note: "Follow-up completed" });
      session.bonusGiven = true;
      persistSession();
      render();
      return;
    }
    if (action === "skip-charade") {
      if (session.skips >= 2) return;
      pushEvent({ kind: "skip", points: 0, note: "Prompt skipped — no points" });
      session.skips += 1;
      var skipped = takeContent(session.content && session.content.id);
      if (skipped) session.content = skipped;
      ui.performer = true;
      persistSession();
      render();
      return;
    }
    if (action === "penalty") {
      pushEvent({ kind: "penalty", points: -1, note: "Said the answer aloud" });
      endTurn();
      return;
    }
    if (action === "culture") {
      var culturePoints = Number(button.getAttribute("data-points") || 0);
      var kind = id === "correct" ? "correct" : id === "skip" ? "skip" : "incorrect";
      pushEvent({ kind: kind, points: culturePoints, contentTitle: session.content.prompt.slice(0, 48), note: id === "skip" ? "Passed" : id === "correct" ? "Correct" : "Incorrect" });
      if (session.status === "timeUp") { endTurn(); return; }
      session.hintUsed = false;
      session.reveal = {};
      var follow = takeContent(session.content.id);
      if (follow) session.content = follow;
      persistSession();
      render();
      return;
    }
    if (action === "end-turn-early") { endTurn(); return; }
    if (action === "next-turn") { nextTurn(); return; }
    if (action === "start-round") {
      session.status = "ready";
      session.content = takeContent(null);
      session.timer = freshTimer(session.settings.turnSeconds);
      session.hintUsed = false;
      session.reveal = {};
      persistSession();
      render();
      return;
    }
    if (action === "change-result") {
      var last = session.events.filter(function (item) { return !item.reversed && item.kind !== "skip"; }).pop();
      if (last) last.reversed = true;
      session.status = session.timer.remainingMs > 0 ? "paused" : "timeUp";
      persistSession();
      render();
      return;
    }
    if (action === "next-period") {
      session.period += 1;
      session.status = "ready";
      session.content = takeContent(session.content && session.content.id);
      session.timer = freshTimer(session.settings.turnSeconds);
      persistSession();
      render();
      return;
    }
    if (action === "to-review") { session.status = "review"; persistSession(); render(); return; }
    if (action === "start-tiebreak") {
      session.status = "tiebreak";
      session.content = takeContent(null);
      ui.peek = false;
      persistSession();
      render();
      return;
    }
    if (action === "award-tie") {
      pushEvent({ participantId: id, kind: "tiebreak", points: 0, note: "Tie-break awarded by host" });
      session.status = "review";
      persistSession();
      render();
      return;
    }
    if (action === "accept-tie") { session.acceptTie = true; session.status = "review"; persistSession(); render(); return; }
    if (action === "confirm") {
      var result = outcome();
      if (result.type === "undecided") return;
      var scores = {};
      standings().forEach(function (row) { scores[row.id] = row.score; });
      var record = {
        id: session.id,
        gameId: session.gameId,
        finishedAt: Date.now(),
        startedAt: session.startedAt,
        participants: session.participants,
        events: session.events,
        scores: scores,
        outcome: result,
        summary: plural(session.players.length, "player") + " · " + roundWord(gameById(session.gameId), session.settings.totalRounds) + " · " + formatDuration(session.settings.turnSeconds),
        replay: { mode: session.mode, players: session.players, teams: session.teams, turnSeconds: session.settings.turnSeconds, rounds: session.settings.totalRounds, gameId: session.gameId }
      };
      history.unshift(record);
      history = history.slice(0, 50);
      save("fagd2.history", history);
      session = null;
      save("fagd2.session", null);
      go("#/results/" + record.id);
      return;
    }
    if (action === "play-again") {
      var again = history.filter(function (item) { return item.id === id; })[0];
      if (!again) return;
      replaceSession(function () {
        roster = { players: again.replay.players, teams: again.replay.teams };
        persistRoster();
        createSession(gameById(again.replay.gameId), again.replay);
        go("#/play");
      });
      return;
    }
    if (action === "performer") { ui.performer = true; render(); return; }
    if (action === "hide-prompt") { ui.performer = false; session.reveal.prompt = true; persistSession(); render(); return; }
    if (action === "peek") { ui.peek = !ui.peek; render(); return; }
    if (action === "reset-players") {
      ask("Reset players?", "Names go back to P1–P4 and Team A / Team B.", "Reset", function () {
        roster = defaultRoster();
        persistRoster();
        ui.settings = false;
        render();
      });
      return;
    }
    if (action === "clear-history") {
      ask("Clear history?", "Finished games on this device will be removed.", "Clear", function () {
        history = [];
        save("fagd2.history", []);
        ui.settings = false;
        render();
      });
    }
  });

  document.addEventListener("change", function (event) {
    var target = event.target;
    if (target.getAttribute("data-action") === "assign") {
      readSetupInputs();
      assignTeam(target.getAttribute("data-id"), target.value);
      render();
    }
    if (target.getAttribute("data-action") === "choice") {
      session.choice = Number(target.value);
      persistSession();
    }
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && (ui.modal || ui.settings || ui.performer)) closeModal();
  });

  setInterval(function () {
    if (!session || session.status !== "playing" || !session.timer.endsAt) return;
    var left = Math.max(0, session.timer.endsAt - Date.now());
    session.timer.remainingMs = left;
    var clock = document.querySelector("[data-clock]");
    if (clock) clock.textContent = formatMs(left);
    var bar = document.querySelector("[data-bar]");
    if (bar) bar.style.transform = "scaleX(" + (session.timer.durationMs ? left / session.timer.durationMs : 0) + ")";
    if (left <= 0) onTimeUp();
  }, 200);

  window.addEventListener("hashchange", render);
  if (!location.hash) location.hash = "#/";
  render();
})();
