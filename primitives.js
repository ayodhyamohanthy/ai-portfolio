(function () {
  "use strict";

  var root = document.documentElement;
  var prefersReduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)");
  var motionOn = !(prefersReduce && prefersReduce.matches);
  var $ = function (id) { return document.getElementById(id); };

  /* ---------- motion ---------- */
  function applyMotion() {
    root.setAttribute("data-motion", motionOn ? "on" : "off");
    if ($("motionLabel")) $("motionLabel").textContent = motionOn ? "Motion on" : "Motion off";
    if ($("motionToggle")) $("motionToggle").setAttribute("aria-pressed", motionOn ? "true" : "false");
  }
  if ($("motionToggle")) {
    $("motionToggle").addEventListener("click", function () { motionOn = !motionOn; applyMotion(); });
  }
  applyMotion();

  /* ---------- timers ---------- */
  function makeQueue() {
    var ids = [];
    return {
      add: function (fn, ms) {
        var id = setTimeout(function () { ids = ids.filter(function (x) { return x !== id; }); fn(); }, ms);
        ids.push(id);
        return id;
      },
      clear: function () { ids.forEach(clearTimeout); ids = []; }
    };
  }

  /* ---------- reveal ---------- */
  var reveals = Array.prototype.slice.call(document.querySelectorAll(".reveal"));
  if ("IntersectionObserver" in window) {
    var ro = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        var el = e.target;
        el.classList.add("in");
        ro.unobserve(el);
      });
    }, { rootMargin: "0px 0px -6% 0px", threshold: 0.05 });
    reveals.forEach(function (el) { ro.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("in"); });
  }

  /* ---------- streaming ---------- */
  function streamText(el, text, speed, isCancelled) {
    var queue = makeQueue();
    return new Promise(function (resolve) {
      var words = text.split(" ");
      var i = 0;
      function finish() { el.textContent = text; resolve("done"); }
      function step() {
        if (!motionOn) { finish(); return; }
        if (isCancelled && isCancelled()) { resolve("cancelled"); return; }
        if (i >= words.length) { resolve("done"); return; }
        el.textContent += (i ? " " : "") + words[i];
        i++;
        var w = words[i - 1] || "";
        var d = speed + Math.random() * speed * 0.8;
        if (/[.,;:!?]$/.test(w)) d += 190;
        queue.add(step, d);
      }
      step();
    });
  }

  var lede = document.querySelector(".lede[data-stream]");
  if (lede) {
    streamText(lede, lede.getAttribute("data-stream"), 22).then(function () { lede.classList.add("done"); });
  }

  /* ---------- glider ---------- */
  function setupGlider(nav, glider) {
    if (!nav || !glider) return function () {};
    var links = Array.prototype.slice.call(nav.querySelectorAll("a"));
    function moveTo(el) {
      glider.style.transform = "translateY(" + el.offsetTop + "px)";
      glider.classList.add("on");
    }
    links.forEach(function (a) { a.addEventListener("mouseenter", function () { moveTo(a); }); });
    nav.addEventListener("mouseleave", function () {
      var active = nav.querySelector("a.on");
      if (active) moveTo(active); else glider.classList.remove("on");
    });
    return moveTo;
  }
  var moveSideGlider = setupGlider($("sideNav"), $("glider"));

  function setupMiniNav(navId, gliderId) {
    var nav = $(navId), glider = $(gliderId);
    if (!nav) return;
    var move = setupGlider(nav, glider);
    var links = Array.prototype.slice.call(nav.querySelectorAll("a"));
    links.forEach(function (a) {
      a.addEventListener("click", function (e) {
        e.preventDefault();
        links.forEach(function (x) { x.classList.remove("on"); });
        a.classList.add("on");
        move(a);
      });
    });
    var first = links[0];
    if (first) { first.classList.add("on"); move(first); }
  }
  setupMiniNav("miniNav", "miniGlider");

  /* ---------- sidebar ---------- */
  var sidebar = $("sidebar");
  if ($("sideCollapse")) {
    $("sideCollapse").addEventListener("click", function () {
      sidebar.classList.toggle("collapsed");
      setTimeout(function () { moveSideGlider($("sideNav").querySelector("a.on") || $("sideNav").querySelector("a")); }, 300);
    });
  }
  if ($("sideOpen")) {
    $("sideOpen").addEventListener("click", function () { sidebar.classList.toggle("open"); });
  }
  document.addEventListener("click", function (e) {
    if (window.innerWidth > 960) return;
    if (!sidebar || !sidebar.classList.contains("open")) return;
    if (sidebar.contains(e.target) || e.target.closest("#sideOpen")) return;
    sidebar.classList.remove("open");
  });

  /* ---------- scroll spy ---------- */
  var navLinks = Array.prototype.slice.call(document.querySelectorAll("#sideNav a"));
  var cards = Array.prototype.slice.call(document.querySelectorAll(".card"));
  if ("IntersectionObserver" in window && cards.length) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        var id = "#" + e.target.id;
        navLinks.forEach(function (a) {
          var on = a.getAttribute("href") === id;
          a.classList.toggle("on", on);
          if (on) moveSideGlider(a);
        });
      });
    }, { rootMargin: "-20% 0px -70% 0px", threshold: 0 });
    cards.forEach(function (c) { spy.observe(c); });
  }

  /* ---------- 01 loader ---------- */
  var grid = $("pixelGrid");
  if (grid) {
    for (var p = 0; p < 27; p++) {
      var cell = document.createElement("i");
      cell.style.setProperty("--i", String(p));
      grid.appendChild(cell);
    }
  }
  if ($("loaderVerb") && $("loaderTime")) {
    var verbs = ["Churning", "Reading 3 sources", "Ranking flavours", "Drafting answer"];
    var CYCLE = 2400, start = performance.now();
    (function tick(now) {
      var el = now - start;
      $("loaderVerb").textContent = verbs[Math.floor(el / CYCLE) % verbs.length];
      $("loaderTime").textContent = (((el % CYCLE) / 1000).toFixed(1)) + "s";
      requestAnimationFrame(tick);
    })(start);
  }

  /* ---------- 02 thinking trace ---------- */
  var TRACE = {
    Steps: [["Classify intent", "inventory.reorder · 0.94"], ["Retrieve context", "stock levels, lead times, 6-week sales"], ["Check threshold", "pistachio below reorder point by 4.2 kg"], ["Draft action", "order 12 kg from C Cone King"]],
    Reasoning: [["Why reorder now", "current cover is 3.5 days against a 4-day lead time"], ["Why this supplier", "lowest landed cost at 10 kg minimum"], ["What I rejected", "splitting the order adds 2 days and no savings"], ["Confidence", "0.78 — above the 0.60 bar for acting"]],
    Search: [["query", "pistachio supplier lead time"], ["results", "6 documents, 3 within threshold"], ["query", "restocking fee schedule 2026"], ["results", "2 documents · C Cone King terms"]],
    Code: [["read", "inventory.reorderPoint(sku)"], ["compute", "daily = units / 26 / 7"], ["compare", "cover < leadDays → reorder"], ["write", "draft_purchase_order(12kg)"]]
  };
  var traceList = $("traceList");
  var traceOpen = false;

  function renderTrace(kind) {
    if (!traceList) return;
    traceList.innerHTML = "";
    TRACE[kind].forEach(function (row, n) {
      var li = document.createElement("li");
      li.style.setProperty("--n", String(n));
      var b = document.createElement("b"); b.textContent = row[0];
      var em = document.createElement("em"); em.textContent = row[1];
      li.appendChild(b); li.appendChild(em);
      traceList.appendChild(li);
    });
  }
  renderTrace("Steps");

  if ($("traceToggle")) {
    $("traceToggle").addEventListener("click", function () {
      traceOpen = !traceOpen;
      $("traceToggle").setAttribute("aria-expanded", traceOpen ? "true" : "false");
      traceList.hidden = !traceOpen;
      $("traceLabel").textContent = traceOpen ? "Thought for 2.4s" : "Thinking";
    });
  }
  function wireTabs(wrap, fn) {
    if (!wrap) return;
    var tabs = Array.prototype.slice.call(wrap.querySelectorAll(".tab"));
    tabs.forEach(function (t, i) {
      t.addEventListener("click", function () {
        tabs.forEach(function (x) { x.classList.remove("on"); });
        t.classList.add("on");
        fn(t.textContent.trim(), i);
      });
    });
  }
  wireTabs($("traceTabs"), function (label) { renderTrace(label); });

  /* ---------- 03 streaming ---------- */
  var STREAM_TEXT = "Pistachio is the one to keep — sales are up 23% this quarter and it carries the highest margin on the menu. " +
    "Mint chip is down 4.4% and lemon sorbet has not cleared its supplier minimum in six weeks. I would cut both " +
    "and move the shelf space to brown butter, which is already trending in your two highest-volume stores.";
  var streamCtl = { cancelled: false };

  function runStream() {
    if (!$("streamBody")) return;
    streamCtl.cancelled = true;
    streamCtl = { cancelled: false };
    var ctl = streamCtl;
    $("streamBody").textContent = "";
    $("streamBody").classList.remove("done");
    $("streamSources").hidden = true;
    $("streamFollowups").hidden = true;
    $("streamStatus").textContent = "streaming…";
    var t0 = performance.now();
    streamText($("streamBody"), STREAM_TEXT, 28, function () { return ctl.cancelled; }).then(function (r) {
      if (r === "cancelled") return;
      $("streamBody").classList.add("done");
      $("streamSources").hidden = false;
      $("streamFollowups").hidden = false;
      $("streamStatus").textContent = "done in " + ((performance.now() - t0) / 1000).toFixed(1) + "s";
    });
  }
  if ($("streamStop")) {
    $("streamStop").addEventListener("click", function () {
      streamCtl.cancelled = true;
      $("streamStatus").textContent = "stopped · partial output kept";
    });
  }
  if ($("streamReplay")) $("streamReplay").addEventListener("click", runStream);
  if ($("p03") && "IntersectionObserver" in window) {
    var so = new IntersectionObserver(function (e) { if (e[0].isIntersecting) { runStream(); so.disconnect(); } }, { threshold: 0.35 });
    so.observe($("p03"));
  }

  /* ---------- 04 approval ---------- */
  var QUESTIONS = [
    { q: "How many flavours should we launch?", opts: [["Three", "core line only"], ["Five", "full case"], ["One", "hero flavour"]] },
    { q: "Should I reorder waffle cones today?", opts: [["Yes, 400 units", "covers 3 weeks"], ["Yes, 800 units", "better unit price"], ["No, wait", "revisit Friday"]] },
    { q: "Who approves supplier changes?", opts: [["Just you", "single approver"], ["You and Priya", "two-up rule"], ["Anyone on ops", "team wide"]] }
  ];
  var qIndex = 0;
  var answers = [];

  function renderQuestion() {
    var item = QUESTIONS[qIndex];
    $("approveQ").textContent = item.q;
    $("approvePager").textContent = (qIndex + 1) + " / " + QUESTIONS.length;
    var wrap = $("approveOpts");
    wrap.innerHTML = "";
    item.opts.forEach(function (o, i) {
      var b = document.createElement("button");
      b.className = "opt" + (i === 0 ? " picked" : "");
      var strong = document.createElement("b"); strong.textContent = o[0];
      var span = document.createElement("span"); span.textContent = o[1];
      b.appendChild(strong); b.appendChild(span);
      b.addEventListener("click", function () {
        Array.prototype.forEach.call(wrap.children, function (x) { x.classList.remove("picked"); });
        b.classList.add("picked");
      });
      wrap.appendChild(b);
    });
  }
  if ($("approveOpts")) renderQuestion();

  function advance(skipped) {
    var picked = $("approveOpts").querySelector(".opt.picked b");
    if (!skipped && picked) answers.push(picked.textContent);
    else answers.push("skipped");
    qIndex++;
    if (qIndex >= QUESTIONS.length) {
      $("approveCard").hidden = true;
      $("approveDone").hidden = false;
      $("approveDoneTxt").textContent = "Locked " + answers.filter(function (a) { return a !== "skipped"; }).length +
        " of " + QUESTIONS.length + " decisions · " + answers.join(" · ");
      return;
    }
    renderQuestion();
  }
  if ($("approveGo")) $("approveGo").addEventListener("click", function () { advance(false); });
  if ($("approveSkip")) $("approveSkip").addEventListener("click", function () { advance(true); });

  /* ---------- 05 tool chips ---------- */
  var chipQueue = makeQueue();
  var chips = $("chipRow") ? Array.prototype.slice.call($("chipRow").querySelectorAll(".chip")) : [];
  function runChips() {
    chipQueue.clear();
    chips.forEach(function (c) { c.classList.remove("on"); });
    $("chipCount").textContent = "0 of " + chips.length + " tool calls";
    chips.forEach(function (c, i) {
      chipQueue.add(function () {
        c.classList.add("on");
        $("chipCount").textContent = (i + 1) + " of " + chips.length + " tool calls";
      }, motionOn ? 240 + i * 420 : 0);
    });
  }
  if ($("chipReplay")) $("chipReplay").addEventListener("click", runChips);
  if ($("chipRow") && "IntersectionObserver" in window) {
    var co = new IntersectionObserver(function (e) { if (e[0].isIntersecting) { runChips(); co.disconnect(); } }, { threshold: 0.4 });
    co.observe($("chipRow"));
  }

  /* ---------- 06 task rows ---------- */
  var tasks = $("tasks");
  function refreshTasks() {
    if (!tasks) return;
    var rows = Array.prototype.slice.call(tasks.querySelectorAll(".task"));
    var running = rows.filter(function (r) { return r.classList.contains("running"); }).length;
    var failed = rows.filter(function (r) { return r.classList.contains("fail"); }).length;
    $("taskSummary").textContent = running + " running · " + failed + " failed · 68% stockout risk";
  }
  refreshTasks();
  wireTabs($("taskTabs"), function (label) {
    tasks.classList.toggle("capsules", label === "Capsules");
    tasks.classList.toggle("list", label !== "Capsules");
  });
  if (tasks) tasks.classList.add("list");
  if ($("taskRetry")) {
    $("taskRetry").addEventListener("click", function () {
      var fail = tasks.querySelector(".task.fail");
      if (!fail) return;
      fail.classList.remove("fail");
      fail.classList.add("running");
      fail.querySelector(".t-meta").textContent = "retrying…";
      fail.querySelector(".t-prog i").style.width = "70%";
      setTimeout(function () {
        fail.classList.remove("running");
        fail.classList.add("done");
        fail.querySelector(".t-meta").textContent = "recovered";
        fail.querySelector(".t-prog i").style.width = "100%";
        refreshTasks();
      }, motionOn ? 1600 : 0);
    });
  }

  /* ---------- 07 chat ---------- */
  var THREADS = [
    [{ who: "you", text: "Which suppliers are risky right now?" }, { who: "ai" }],
    [{ who: "you", text: "Who has the shortest lead time on cones?" }, { who: "ai" }]
  ];
  var REPLIES = [
    "Aurora Scoops is the risk: 31 days since last contact, delivery variance up 18%, and they hold two of your dairy SKUs. " +
    "C Cone King is stable at four-day lead times. I would open a second dairy supplier before winter.",
    "C Cone King, at four business days. Bramble & Fig is faster on fruit at two days, but their minimum is 15 kg " +
    "against your 6 kg weekly usage, so you would be holding stock you cannot move."
  ];
  var chatTab = 0;

  function chatMsg(who, text) {
    var d = document.createElement("div");
    d.className = "msg " + who;
    if (who === "you") { d.textContent = text; return d; }
    var btn = document.createElement("button");
    btn.className = "reason";
    btn.id = "chatReason";
    btn.innerHTML = '<span class="trace-dot"></span>Compared 2 sources for 3s<span class="chev"></span>';
    var body = document.createElement("div");
    body.className = "reason-body";
    body.hidden = true;
    body.textContent = "Lead-time history · Delivery variance · Contract terms";
    btn.addEventListener("click", function () {
      var open = body.hidden;
      body.hidden = !open;
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
    var p = document.createElement("p");
    p.className = "msg-p";
    d.appendChild(btn); d.appendChild(body); d.appendChild(p);
    d._target = p;
    return d;
  }

  function renderChat() {
    var chat = $("chat");
    if (!chat) return;
    chat.innerHTML = "";
    THREADS[chatTab].forEach(function (m) {
      if (m.who === "you") { chat.appendChild(chatMsg("you", m.text)); return; }
      var ai = chatMsg("ai");
      ai._target.textContent = REPLIES[chatTab];
      chat.appendChild(ai);
    });
  }
  renderChat();

  wireTabs($("chatTabs"), function (label, i) {
    chatTab = i;
    if ($("chatInput")) $("chatInput").placeholder = i === 0 ? "Ask about suppliers…" : "Ask about lead times…";
    renderChat();
  });

  function sendChat() {
    var input = $("chatInput");
    if (!input || !input.value.trim()) return;
    var text = input.value.trim();
    input.value = "";
    var chat = $("chat");
    chat.appendChild(chatMsg("you", text));
    var ai = chatMsg("ai");
    chat.appendChild(ai);
    streamText(ai._target, REPLIES[chatTab], 26).then(function () { ai._target.classList.add("done"); });
    chat.scrollTop = chat.scrollHeight;
  }
  if ($("chatSend")) $("chatSend").addEventListener("click", sendChat);
  if ($("chatInput")) $("chatInput").addEventListener("keydown", function (e) { if (e.key === "Enter") sendChat(); });

  /* ---------- 08 prompt bar ---------- */
  if ($("pbSlash")) {
    $("pbSlash").addEventListener("click", function () {
      var menu = $("pbMenu");
      menu.hidden = !menu.hidden;
    });
    Array.prototype.forEach.call($("pbMenu").querySelectorAll(".pb-item"), function (item) {
      item.addEventListener("click", function () {
        var cmd = item.querySelector("b").textContent;
        var input = $("pbInput");
        input.value = input.value.replace(/\/\w*$/, "") + cmd + " ";
        input.focus();
        $("pbMenu").hidden = true;
      });
    });
  }
  if ($("pbAt")) {
    $("pbAt").addEventListener("click", function () {
      var input = $("pbInput");
      input.value = input.value + "@sales-velocity ";
      input.focus();
    });
  }
  if ($("pbMic")) {
    $("pbMic").addEventListener("click", function () {
      this.classList.toggle("rec");
      if (!this.classList.contains("rec")) return;
      var self = this;
      setTimeout(function () { self.classList.remove("rec"); }, motionOn ? 2200 : 0);
    });
  }
  if ($("pbShape")) {
    $("pbShape").addEventListener("click", function () {
      var bar = $("promptBar");
      var pill = bar.classList.toggle("pill");
      this.textContent = "Shape: " + (pill ? "pill" : "rounded");
    });
  }

  /* ---------- 09 recommendation ---------- */
  var confRows = Array.prototype.slice.call(document.querySelectorAll("#confRows .conf-row"));
  function selectConfidence(row) {
    confRows.forEach(function (r) { r.classList.remove("is-on"); });
    row.classList.add("is-on");
    var p = parseInt(row.getAttribute("data-p"), 10);
    var over = p >= 60;
    var badge = $("recBadge");
    if (badge) {
      badge.textContent = over ? "High confidence" : "Below threshold";
      badge.classList.toggle("low", !over);
    }
  }
  confRows.forEach(function (row) { row.addEventListener("click", function () { selectConfidence(row); }); });
  if (confRows[0]) selectConfidence(confRows[0]);
  function paintConf() {
    confRows.forEach(function (row) {
      var bar = row.querySelector(".conf-track i");
      if (bar) bar.style.width = row.getAttribute("data-p") + "%";
    });
  }
  if (confRows.length && "IntersectionObserver" in window) {
    var cfo = new IntersectionObserver(function (e) { if (e[0].isIntersecting) { paintConf(); cfo.disconnect(); } }, { threshold: 0.4 });
    cfo.observe(confRows[0]);
  } else { paintConf(); }
  if ($("recAccept")) {
    $("recAccept").addEventListener("click", function () {
      this.textContent = "Order placed";
      this.disabled = true;
    });
  }

  /* ---------- 10 context cards ---------- */
  if ($("ctxToggle")) {
    $("ctxToggle").addEventListener("click", function () {
      var ctx = $("ctx");
      var open = ctx.classList.toggle("expanded");
      this.textContent = open ? "Collapse" : "Expand";
    });
  }

  /* ---------- 11 diff table ---------- */
  var diffTable = $("diffTable");
  var diffRows = diffTable ? Array.prototype.slice.call(diffTable.querySelectorAll("tbody tr")).filter(function (r) {
    return r.getAttribute("data-op") !== "keep";
  }) : [];
  function updateDiff() {
    var active = diffRows.filter(function (r) { return !r.classList.contains("off"); });
    var removed = active.filter(function (r) { return r.getAttribute("data-op") === "remove"; }).length;
    var added = active.filter(function (r) { return r.getAttribute("data-op") === "add"; }).length;
    var parts = [];
    if (removed) parts.push(removed + (removed === 1 ? " removal" : " removals"));
    if (added) parts.push(added + (added === 1 ? " addition" : " additions"));
    $("diffCount").textContent = parts.length ? parts.join(" · ") : "no changes selected";
    $("diffApply").disabled = active.length === 0;
    $("diffApply").textContent = active.length ? "Apply " + active.length + " changes" : "Nothing to apply";
  }
  diffRows.forEach(function (row) {
    row.addEventListener("click", function () {
      if (diffTable.classList.contains("applied")) return;
      row.classList.toggle("off");
      updateDiff();
    });
  });
  updateDiff();
  if ($("diffApply")) {
    $("diffApply").addEventListener("click", function () {
      diffTable.classList.add("applied");
      diffRows.forEach(function (r) { if (r.classList.contains("off")) r.hidden = true; });
      this.textContent = "Applied";
      this.disabled = true;
      $("diffCount").textContent = "changes applied · undo available for 30s";
    });
  }

  /* ---------- 12 records table ---------- */
  var recTable = $("recTable");
  if (recTable) {
    var recBody = recTable.querySelector("tbody");
    var recRows = Array.prototype.slice.call(recBody.querySelectorAll("tr"));
    var sortKey = null, sortAsc = false;
    var LABELS = { name: "name", cat: "category", last: "last contact", str: "strength" };
    function sortRec(key) {
      sortAsc = (key === sortKey) ? !sortAsc : false;
      sortKey = key;
      recRows.sort(function (a, b) {
        var av = a.getAttribute("data-" + key), bv = b.getAttribute("data-" + key);
        var an = parseFloat(av), bn = parseFloat(bv);
        var cmp = (!isNaN(an) && !isNaN(bn)) ? an - bn : av.localeCompare(bv);
        return sortAsc ? cmp : -cmp;
      });
      recRows.forEach(function (r) { recBody.appendChild(r); });
      Array.prototype.forEach.call(recTable.querySelectorAll("th"), function (th) {
        th.classList.remove("sorted", "asc");
        if (th.getAttribute("data-sort") === key) {
          th.classList.add("sorted");
          if (sortAsc) th.classList.add("asc");
        }
      });
      $("recNote").textContent = "Sorted by " + LABELS[key] + ", " + (sortAsc ? "ascending" : "descending");
    }
    Array.prototype.forEach.call(recTable.querySelectorAll("th"), function (th) {
      th.addEventListener("click", function () { sortRec(th.getAttribute("data-sort")); });
    });
    sortRec("str");
  }

  /* ---------- 13 filter table ---------- */
  var ftable = $("ftable");
  if (ftable) {
    var frows = Array.prototype.slice.call(ftable.querySelectorAll("tbody tr"));
    Array.prototype.forEach.call($("filters").querySelectorAll(".fchip"), function (chipBtn) {
      chipBtn.addEventListener("click", function () {
        Array.prototype.forEach.call($("filters").children, function (x) { x.classList.remove("on"); });
        chipBtn.classList.add("on");
        var f = chipBtn.getAttribute("data-f");
        var shown = 0;
        frows.forEach(function (r) {
          var match = f === "all" || r.getAttribute("data-f") === f;
          r.classList.toggle("hide", !match);
          if (match) shown++;
        });
        $("fCount").textContent = shown + (shown === 1 ? " task shown" : " tasks shown");
      });
    });
  }

  /* ---------- 15 command palette ---------- */
  var ITEMS = [
    { n: "01", name: "Loading state", id: "p01" }, { n: "02", name: "Thinking trace", id: "p02" },
    { n: "03", name: "Streaming text", id: "p03" }, { n: "04", name: "Approval card", id: "p04" },
    { n: "05", name: "Tool chips", id: "p05" }, { n: "06", name: "Task rows", id: "p06" },
    { n: "07", name: "Chat", id: "p07" }, { n: "08", name: "Prompt bar", id: "p08" },
    { n: "09", name: "Recommendation", id: "p09" }, { n: "10", name: "Context cards", id: "p10" },
    { n: "11", name: "Diff table", id: "p11" }, { n: "12", name: "Records table", id: "p12" },
    { n: "13", name: "Filter table", id: "p13" }, { n: "14", name: "Sidebar nav", id: "p14" },
    { n: "15", name: "Command search", id: "p15" }, { n: "16", name: "Flowchart", id: "p16" },
    { n: "17", name: "Insight cards", id: "p17" }, { n: "18", name: "Code block", id: "p18" },
    { n: "19", name: "Fine-tune card", id: "p19" }, { n: "20", name: "Selection actions", id: "p20" },
    { n: "◆", name: "Autonomy dial", id: "autonomy" }, { n: "—", name: "How this stays free", id: "notes" }
  ];

  function jump(id) {
    var el = $(id);
    if (el) el.scrollIntoView({ behavior: motionOn ? "smooth" : "auto", block: "start" });
    closePalette();
  }

  function renderResults(q) {
    var box = $("paletteResults");
    box.innerHTML = "";
    var term = q.trim().toLowerCase();
    var hits = ITEMS.filter(function (it) { return !term || it.name.toLowerCase().indexOf(term) > -1 || it.n.indexOf(term) > -1; });

    if (!hits.length) {
      var empty = document.createElement("div");
      empty.className = "pr-empty";
      var p = document.createElement("p");
      p.textContent = 'No component matches "' + q.trim() + '".';
      empty.appendChild(p);
      var sug = document.createElement("div");
      sug.className = "mini-results";
      ["Streaming text", "Confidence", "Evals"].forEach(function (label, i) {
        var s = document.createElement("button");
        s.className = "mr";
        s.textContent = label;
        s.style.animationDelay = (i * 60) + "ms";
        s.addEventListener("click", function () {
          var target = label === "Confidence" ? "p09" : label === "Evals" ? "notes" : "p03";
          jump(target);
        });
        sug.appendChild(s);
      });
      empty.appendChild(sug);
      box.appendChild(empty);
      return;
    }
    hits.forEach(function (it) {
      var b = document.createElement("button");
      b.className = "pr";
      var num = document.createElement("b"); num.textContent = it.n;
      var name = document.createElement("span"); name.textContent = it.name;
      var em = document.createElement("em"); em.textContent = "jump";
      b.appendChild(num); b.appendChild(name); b.appendChild(em);
      b.addEventListener("click", function () { jump(it.id); });
      box.appendChild(b);
    });
  }

  function openPalette() {
    if (!$("paletteWrap")) return;
    $("paletteWrap").hidden = false;
    $("paletteInput").value = "";
    renderResults("");
    $("paletteInput").focus();
  }
  function closePalette() { if ($("paletteWrap")) $("paletteWrap").hidden = true; }

  ["searchOpen", "searchOpen2", "searchOpen3"].forEach(function (id) {
    if ($(id)) $(id).addEventListener("click", openPalette);
  });
  if ($("paletteInput")) {
    $("paletteInput").addEventListener("input", function () { renderResults(this.value); });
    $("paletteInput").addEventListener("keydown", function (e) {
      if (e.key === "Enter") {
        var first = $("paletteResults").querySelector(".pr");
        if (first) first.click();
      }
    });
  }
  if ($("paletteWrap")) {
    $("paletteWrap").addEventListener("click", function (e) { if (e.target === this) closePalette(); });
  }
  document.addEventListener("keydown", function (e) {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") { e.preventDefault(); openPalette(); }
    if (e.key === "Escape") closePalette();
  });

  var mini = $("miniResults");
  if (mini) {
    ["Streaming text", "Confidence", "Evals"].forEach(function (label, i) {
      var s = document.createElement("button");
      s.className = "mr";
      s.textContent = label;
      s.style.animationDelay = (i * 60) + "ms";
      s.addEventListener("click", openPalette);
      mini.appendChild(s);
    });
  }

  /* ---------- 17 insight cards ---------- */
  function series(base, slope, wobble, n) {
    var out = [];
    for (var i = 0; i < n; i++) out.push(Math.max(4, base + slope * i + Math.sin(i * 0.55) * wobble));
    return out;
  }
  var INSIGHTS = [
    { title: "Mint chip is dragging the menu down", val: "−$2,377.66", delta: "−4.41%", neg: true, data: series(70, -1.6, 6, 26) },
    { title: "Pistachio is carrying the quarter", val: "+$617.22", delta: "+1.15%", neg: false, data: series(30, 1.9, 7, 26) },
    { title: "Waffle cones are about to stock out", val: "3 days cover", delta: "−68%", neg: true, data: series(80, -2.4, 4, 26) }
  ];
  var insIndex = 0;
  var spark = $("spark");

  function renderInsight() {
    var it = INSIGHTS[insIndex];
    $("insPager").textContent = (insIndex + 1) + " / " + INSIGHTS.length;
    $("insTitle").textContent = it.title;
    $("insVal").textContent = it.val;
    $("insVal").className = "ins-val " + (it.neg ? "neg" : "pos");
    $("insDelta").textContent = it.delta;
    $("insDelta").className = "ins-delta " + (it.neg ? "neg" : "pos");

    var max = Math.max.apply(null, it.data), min = Math.min.apply(null, it.data);
    var pts = it.data.map(function (v, i) {
      var x = (i / (it.data.length - 1)) * 300;
      var y = 60 - ((v - min) / (max - min || 1)) * 56;
      return x.toFixed(1) + "," + y.toFixed(1);
    });
    var line = $("sparkLine");
    line.setAttribute("points", pts.join(" "));
    line.setAttribute("stroke", it.neg ? "#B3341F" : "#0F7B4F");
    $("sparkDot").setAttribute("fill", it.neg ? "#B3341F" : "#0F7B4F");
    line._pts = pts;
    $("sparkRead").textContent = "";
    $("sparkGuide").setAttribute("opacity", "0");
    $("sparkDot").setAttribute("opacity", "0");
  }
  renderInsight();

  if ($("insPrev")) $("insPrev").addEventListener("click", function () { insIndex = (insIndex + 2) % 3; renderInsight(); });
  if ($("insNext")) $("insNext").addEventListener("click", function () { insIndex = (insIndex + 1) % 3; renderInsight(); });

  if (spark && $("sparkLine")) {
    spark.addEventListener("mousemove", function (e) {
      var rect = spark.getBoundingClientRect();
      var ratio = (e.clientX - rect.left) / rect.width;
      var pts = $("sparkLine")._pts || [];
      var idx = Math.max(0, Math.min(pts.length - 1, Math.round(ratio * (pts.length - 1))));
      var xy = pts[idx].split(",");
      $("sparkGuide").setAttribute("x1", xy[0]);
      $("sparkGuide").setAttribute("x2", xy[0]);
      $("sparkGuide").setAttribute("opacity", "0.35");
      $("sparkDot").setAttribute("cx", xy[0]);
      $("sparkDot").setAttribute("cy", xy[1]);
      $("sparkDot").setAttribute("opacity", "1");
      $("sparkRead").textContent = "week " + (idx + 1) + " · " + Math.round(INSIGHTS[insIndex].data[idx]) + " units";
    });
    spark.addEventListener("mouseleave", function () {
      $("sparkGuide").setAttribute("opacity", "0");
      $("sparkDot").setAttribute("opacity", "0");
      $("sparkRead").textContent = "";
    });
  }

  /* ---------- 18 code block ---------- */
  wireTabs($("codeTabs"), function (label) {
    var src = label === "Source";
    $("codeSrc").hidden = !src;
    $("codeDiff").hidden = src;
    $("codeNote").textContent = src ? "5 lines · TypeScript" : "2 additions · 1 deletion";
  });
  if ($("codeCopy")) {
    $("codeCopy").addEventListener("click", function () {
      var text = $("codeSrc").hidden ? $("codeDiff").textContent : $("codeSrc").textContent;
      if (navigator.clipboard) navigator.clipboard.writeText(text).catch(function () {});
      this.textContent = "Copied";
      var self = this;
      setTimeout(function () { self.textContent = "Copy"; }, 1400);
    });
  }

  /* ---------- 19 fine-tune ---------- */
  function applyFineTune() {
    var preview = $("ftPreview");
    if (!preview) return;
    preview.style.borderRadius = $("ftRadius").value + "px";
    preview.style.padding = $("ftPad").value + "px 14px";
    preview.style.fontWeight = $("ftWeight").value;
    $("ftRadiusV").textContent = $("ftRadius").value;
    $("ftPadV").textContent = $("ftPad").value;
    $("ftWeightV").textContent = $("ftWeight").value;
  }
  ["ftRadius", "ftPad", "ftWeight"].forEach(function (id) {
    if ($(id)) $(id).addEventListener("input", applyFineTune);
  });
  applyFineTune();

  if ($("ftAgent")) {
    $("ftAgent").addEventListener("click", function () {
      var target = { ftRadius: 18, ftPad: 26, ftWeight: 700 };
      var from = {};
      Object.keys(target).forEach(function (k) { from[k] = parseInt($(k).value, 10); });
      var steps = motionOn ? 24 : 1;
      var i = 0;
      (function tween() {
        i++;
        var t = i / steps;
        Object.keys(target).forEach(function (k) {
          $(k).value = Math.round(from[k] + (target[k] - from[k]) * t);
        });
        applyFineTune();
        if (i < steps) requestAnimationFrame(tween);
      })();
      this.querySelector("span").textContent = "Applied";
    });
  }

  /* ---------- 20 selection actions ---------- */
  var selCopy = $("selCopy");
  var ACTIONS = {
    Explain: "This clause overrides the standard 15% restocking fee. It applies only when damage is confirmed at delivery, not when a customer changes their mind.",
    Improve: "Items damaged in transit are exempt from the restocking fee, provided the damage is reported within 48 hours of delivery.",
    Shorten: "Damaged-in-transit items are exempt from the restocking fee.",
    Tone: "Good news — if your item arrived damaged, you won't pay a restocking fee. Just send us a photo and we'll sort it out."
  };
  if (selCopy && $("selBar")) {
    document.addEventListener("mouseup", function (e) {
      var sel = window.getSelection();
      if (!sel || sel.isCollapsed || !sel.toString().trim()) return;
      if (!selCopy.contains(sel.anchorNode) && !selCopy.contains(e.target)) return;
      $("selBar").hidden = false;
    });
    Array.prototype.forEach.call($("selBar").querySelectorAll(".sel-btn"), function (btn) {
      btn.addEventListener("click", function () {
        var sel = window.getSelection();
        var picked = sel && sel.toString().trim() ? sel.toString().trim() : "Damaged items are exempt.";
        if (picked.length > 80) picked = picked.slice(0, 80) + "…";
        var res = $("selResult");
        res.hidden = false;
        res.innerHTML = "<span>" + btn.textContent + " · " + picked.length + " characters selected</span>";
        res.appendChild(document.createTextNode(ACTIONS[btn.textContent] || ACTIONS.Explain));
        if (sel && sel.removeAllRanges) sel.removeAllRanges();
      });
    });
  }

  /* ---------- autonomy dial ---------- */
  var LEVELS = {
    1: { name: "Suggest", desc: "The model proposes, a person applies. Nothing changes until someone clicks. Slowest path to value, but the blast radius is zero — the right default for anything touching money.", control: 95, speed: 22, risk: 6,
      surface: '<div class="surf-label">Composer · untouched</div><div class="surf-box empty">Write a reply to Priya…</div>' +
        '<div class="suggest"><div class="suggest-head"><span class="chip-ai">Relay suggests</span></div>' +
        "<p>Hi Priya — I've issued a full refund for the damaged tumbler. It should land in 3–5 days.</p>" +
        '<div class="surf-actions"><button class="btn-mini">Insert</button><button class="btn-mini ghost">Dismiss</button></div></div>' },
    2: { name: "Draft in place", desc: "The model writes where the human writes. It feels fast because there is nothing to copy, but the human still owns the send. This is where most teams should start.", control: 80, speed: 55, risk: 22,
      surface: '<div class="surf-label">Composer · drafted in place</div><div class="surf-banner">Drafted by Relay · review before sending</div>' +
        '<div class="surf-box filled">Hi Priya — I\'ve issued a full refund for the damaged tumbler. It should land in 3–5 days.</div>' +
        '<div class="surf-actions"><button class="btn-mini primary">Send</button><button class="btn-mini ghost">Edit</button></div>' },
    3: { name: "Act on approval", desc: "The model prepares the full action and stops. One click to approve. The human is a gate, not an author — review time drops sharply because the decision is pre-structured.", control: 58, speed: 72, risk: 48,
      surface: '<div class="surf-label">Pending action</div><div class="action"><div class="action-title">Refund $42.00</div>' +
        '<div class="action-meta">Order #1183 · reason: arrived damaged · policy v4.2</div></div>' +
        '<div class="surf-actions"><button class="btn-mini primary">Approve</button><button class="btn-mini ghost">Edit amount</button><button class="btn-mini ghost">Reject</button></div>' },
    4: { name: "Act, with an interrupt window", desc: "The model acts immediately and a short reversal window opens. Throughput is high; recovery depends on someone noticing in time. Only safe when the action is reversible.", control: 34, speed: 88, risk: 72,
      surface: '<div class="surf-label">Acted · interrupt window</div><div class="action done"><div class="action-title">Refund $42.00 sent</div>' +
        '<div class="action-meta">Order #1183 · confirmation emailed</div></div>' +
        '<div class="undo-row"><span class="undo-bar"><i></i></span><span>Undo available</span></div>' +
        '<div class="surf-actions"><button class="btn-mini">Undo</button><button class="btn-mini ghost">Keep</button></div>' },
    5: { name: "Autonomous, with a guardrail", desc: "The model acts and the human audits after. The design work moves entirely to the guardrail — the limit that decides what the agent may never do alone. That limit is the actual product decision.", control: 14, speed: 97, risk: 92,
      surface: '<div class="surf-label">Autonomous · audit log</div><ul class="audit">' +
        '<li><span class="tick"></span> Refund $42.00 · #1183 <span class="ok">auto</span></li>' +
        '<li><span class="tick"></span> Refund $18.50 · #1179 <span class="ok">auto</span></li>' +
        '<li><span class="tick flag"></span> Refund $96.00 · #1188 <span class="warn">held · over $50 limit</span></li>' +
        '</ul><div class="surf-foot">3 actions this hour · 1 held for human review</div>' }
  };
  var meters = [["mControl", "vControl", false], ["mSpeed", "vSpeed", false], ["mRisk", "vRisk", true]];
  function renderAutonomy(level) {
    var d = LEVELS[level];
    if (!d) return;
    $("autoTitle").textContent = level + " · " + d.name;
    $("autoDesc").textContent = d.desc;
    $("autoSurface").innerHTML = '<div class="surf">' + d.surface + "</div>";
    var values = [d.control, d.speed, d.risk];
    meters.forEach(function (m, i) {
      var bar = $(m[0]);
      bar.style.width = values[i] + "%";
      bar.classList.toggle("hot", m[2] && values[i] >= 60);
      $(m[1]).textContent = values[i];
    });
  }
  if ($("autoRange")) {
    $("autoRange").addEventListener("input", function () { renderAutonomy(parseInt(this.value, 10)); });
    renderAutonomy(parseInt($("autoRange").value, 10));
  }
})();
