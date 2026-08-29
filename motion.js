(function () {
  "use strict";

  var root = document.documentElement;
  var prefersReduce = window.matchMedia("(prefers-reduced-motion: reduce)");
  var motionOn = !prefersReduce.matches;

  function makeQueue() {
    var ids = [];
    return {
      add: function (fn, ms) {
        var id = setTimeout(function () {
          ids = ids.filter(function (x) { return x !== id; });
          fn();
        }, ms);
        ids.push(id);
        return id;
      },
      clear: function () {
        ids.forEach(clearTimeout);
        ids = [];
      }
    };
  }

  var chipQueue = makeQueue();

  function applyMotion() {
    root.setAttribute("data-motion", motionOn ? "on" : "off");
    var label = document.getElementById("motionLabel");
    var toggle = document.getElementById("motionToggle");
    if (label) label.textContent = motionOn ? "Motion on" : "Motion off";
    if (toggle) toggle.setAttribute("aria-pressed", motionOn ? "true" : "false");
  }

  var toggle = document.getElementById("motionToggle");
  if (toggle) {
    toggle.addEventListener("click", function () {
      motionOn = !motionOn;
      applyMotion();
    });
  }
  applyMotion();

  /* ---------------- scroll reveal ---------------- */
  var reveals = Array.prototype.slice.call(document.querySelectorAll(".reveal"));
  if ("IntersectionObserver" in window) {
    var ro = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          var el = entry.target;
          var siblings = Array.prototype.slice.call(el.parentNode.children).filter(function (n) {
            return n.classList && n.classList.contains("reveal");
          });
          var idx = siblings.indexOf(el);
          el.style.transitionDelay = Math.min(idx, 3) * 70 + "ms";
          el.classList.add("in");
          ro.unobserve(el);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );
    reveals.forEach(function (el) { ro.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("in"); });
  }

  /* ---------------- streaming helper ---------------- */
  function streamText(el, text, speed, isCancelled) {
    var queue = makeQueue();
    return new Promise(function (resolve) {
      var words = text.split(" ");
      var i = 0;

      function finish() {
        el.textContent = text;
        resolve("done");
      }

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

  /* ---------------- 01 loader ---------------- */
  var grid = document.getElementById("pixelGrid");
  if (grid) {
    for (var p = 0; p < 27; p++) {
      var cell = document.createElement("i");
      cell.style.setProperty("--i", String(p));
      grid.appendChild(cell);
    }
  }

  var verbEl = document.getElementById("loaderVerb");
  var timeEl = document.getElementById("loaderTime");
  if (verbEl && timeEl) {
    var verbs = ["Churning", "Reading 3 sources", "Ranking flavours", "Drafting answer"];
    var CYCLE = 2400;
    var start = performance.now();
    (function tick(now) {
      var elapsed = now - start;
      var idx = Math.floor(elapsed / CYCLE) % verbs.length;
      verbEl.textContent = verbs[idx];
      timeEl.textContent = (((elapsed % CYCLE) / 1000).toFixed(1)) + "s";
      requestAnimationFrame(tick);
    })(start);
  }

  /* ---------------- 02 thinking trace ---------------- */
  var traceToggle = document.getElementById("traceToggle");
  var traceList = document.getElementById("traceList");
  var traceLabel = document.getElementById("traceLabel");
  if (traceToggle && traceList) {
    Array.prototype.forEach.call(traceList.children, function (li, n) {
      li.style.setProperty("--n", String(n));
    });
    traceToggle.addEventListener("click", function () {
      var open = traceToggle.getAttribute("aria-expanded") === "true";
      traceToggle.setAttribute("aria-expanded", open ? "false" : "true");
      traceList.hidden = open;
      if (traceLabel) traceLabel.textContent = open ? "Thinking" : "Thought for 2.4s";
    });
  }

  /* ---------------- 03 streaming answer ---------------- */
  var STREAM_TEXT =
    "Pistachio is the one to keep — sales are up 23% this quarter and it carries the highest margin on the menu. " +
    "Mint chip is down 4.4% and lemon sorbet has not cleared its supplier minimum in six weeks. I would cut both " +
    "and move the shelf space to brown butter, which is already trending in your two highest-volume stores.";

  var streamBody = document.getElementById("streamBody");
  var streamSources = document.getElementById("streamSources");
  var streamFollowups = document.getElementById("streamFollowups");
  var streamStatus = document.getElementById("streamStatus");
  var streamCard = document.getElementById("card-stream");
  var streamCtl = { cancelled: false };

  function runStream() {
    if (!streamBody) return;
    streamCtl.cancelled = true;
    streamCtl = { cancelled: false };
    var ctl = streamCtl;

    streamBody.textContent = "";
    streamBody.classList.remove("done");
    if (streamSources) streamSources.hidden = true;
    if (streamFollowups) streamFollowups.hidden = true;
    if (streamStatus) streamStatus.textContent = "streaming…";

    var t0 = performance.now();
    streamText(streamBody, STREAM_TEXT, 28, function () { return ctl.cancelled; }).then(function (result) {
      if (result === "cancelled") return;
      streamBody.classList.add("done");
      if (streamSources) streamSources.hidden = false;
      if (streamFollowups) streamFollowups.hidden = false;
      if (streamStatus) streamStatus.textContent = "done in " + ((performance.now() - t0) / 1000).toFixed(1) + "s";
    });
  }

  var stopBtn = document.getElementById("streamStop");
  var replayBtn = document.getElementById("streamReplay");
  if (stopBtn) {
    stopBtn.addEventListener("click", function () {
      streamCtl.cancelled = true;
      if (streamStatus) streamStatus.textContent = "stopped · partial output kept";
    });
  }
  if (replayBtn) replayBtn.addEventListener("click", runStream);
  if (streamCard && "IntersectionObserver" in window) {
    var so = new IntersectionObserver(
      function (entries) {
        if (entries[0].isIntersecting) {
          runStream();
          so.disconnect();
        }
      },
      { threshold: 0.35 }
    );
    so.observe(streamCard);
  }

  /* ---------------- 04 tool chips ---------------- */
  var chipRow = document.getElementById("chipRow");
  var chipCount = document.getElementById("chipCount");
  var chips = chipRow ? Array.prototype.slice.call(chipRow.querySelectorAll(".chip")) : [];

  function runChips() {
    chipQueue.clear();
    chips.forEach(function (c) { c.classList.remove("on"); });
    if (chipCount) chipCount.textContent = "0 of " + chips.length + " tool calls";
    chips.forEach(function (c, i) {
      chipQueue.add(function () {
        c.classList.add("on");
        if (chipCount) chipCount.textContent = (i + 1) + " of " + chips.length + " tool calls";
      }, motionOn ? 240 + i * 420 : 0);
    });
  }
  var chipReplay = document.getElementById("chipReplay");
  if (chipReplay) chipReplay.addEventListener("click", runChips);
  if (chipRow && "IntersectionObserver" in window) {
    var co = new IntersectionObserver(
      function (entries) {
        if (entries[0].isIntersecting) { runChips(); co.disconnect(); }
      },
      { threshold: 0.4 }
    );
    co.observe(chipRow);
  }

  /* ---------------- 05 approval card ---------------- */
  var opts = Array.prototype.slice.call(document.querySelectorAll("#approveOpts .opt"));
  var approveCard = document.getElementById("approveCard");
  var approveDone = document.getElementById("approveDone");
  var approveGo = document.getElementById("approveGo");
  var approveSkip = document.getElementById("approveSkip");

  opts.forEach(function (o) {
    o.addEventListener("click", function () {
      opts.forEach(function (x) { x.classList.remove("picked"); });
      o.classList.add("picked");
    });
  });
  if (opts[0]) opts[0].classList.add("picked");

  function lockApproval(skipped) {
    if (!approveCard) return;
    approveCard.hidden = true;
    if (!approveDone) return;
    approveDone.hidden = false;
    approveDone.textContent = skipped
      ? "Skipped — the agent will use the core line default."
      : "Locked: three flavours for the core line.";
  }
  if (approveGo) approveGo.addEventListener("click", function () { lockApproval(false); });
  if (approveSkip) approveSkip.addEventListener("click", function () { lockApproval(true); });

  /* ---------------- 06 confidence meter ---------------- */
  var confRows = Array.prototype.slice.call(document.querySelectorAll("#confRows .conf-row"));
  var confBadge = document.getElementById("confBadge");
  var confNote = document.getElementById("confNote");
  var THRESHOLD = 60;

  function paintConfidence() {
    confRows.forEach(function (row) {
      var p = parseInt(row.getAttribute("data-p"), 10);
      var bar = row.querySelector(".conf-track i");
      if (bar) bar.style.width = p + "%";
    });
  }

  function selectConfidence(row) {
    confRows.forEach(function (r) { r.classList.remove("is-on"); });
    row.classList.add("is-on");
    var p = parseInt(row.getAttribute("data-p"), 10);
    var over = p >= THRESHOLD;
    if (confBadge) {
      confBadge.textContent = over ? "High confidence" : "Below threshold";
      confBadge.classList.toggle("low", !over);
    }
    if (confNote) {
      confNote.textContent = over
        ? "Above threshold — the agent acts."
        : "Below threshold — the UI asks instead of acting.";
    }
  }

  confRows.forEach(function (row) {
    row.addEventListener("click", function () { selectConfidence(row); });
  });
  if (confRows[0]) selectConfidence(confRows[0]);
  if ("IntersectionObserver" in window && confRows.length) {
    var cfo = new IntersectionObserver(
      function (entries) {
        if (entries[0].isIntersecting) { paintConfidence(); cfo.disconnect(); }
      },
      { threshold: 0.4 }
    );
    cfo.observe(confRows[0]);
  } else {
    paintConfidence();
  }

  /* ---------------- 07 diff table ---------------- */
  var diffTable = document.getElementById("diffTable");
  var diffCount = document.getElementById("diffCount");
  var diffApply = document.getElementById("diffApply");
  var diffRows = diffTable
    ? Array.prototype.slice.call(diffTable.querySelectorAll("tbody tr")).filter(function (r) {
        return r.getAttribute("data-op") !== "keep";
      })
    : [];

  function updateDiffCount() {
    if (!diffCount) return;
    var active = diffRows.filter(function (r) { return !r.classList.contains("off"); });
    var removed = active.filter(function (r) { return r.getAttribute("data-op") === "remove"; }).length;
    var added = active.filter(function (r) { return r.getAttribute("data-op") === "add"; }).length;
    var parts = [];
    if (removed) parts.push(removed + (removed === 1 ? " removal" : " removals"));
    if (added) parts.push(added + (added === 1 ? " addition" : " additions"));
    diffCount.textContent = parts.length ? parts.join(" · ") : "no changes selected";
    if (diffApply) {
      diffApply.disabled = active.length === 0;
      diffApply.textContent = active.length ? "Apply " + active.length + " changes" : "Nothing to apply";
    }
  }

  diffRows.forEach(function (row) {
    row.addEventListener("click", function () {
      if (diffTable.classList.contains("applied")) return;
      row.classList.toggle("off");
      updateDiffCount();
    });
  });
  updateDiffCount();

  if (diffApply) {
    diffApply.addEventListener("click", function () {
      diffTable.classList.add("applied");
      diffRows.forEach(function (r) { if (r.classList.contains("off")) r.hidden = true; });
      diffApply.textContent = "Applied";
      diffApply.disabled = true;
      if (diffCount) diffCount.textContent = "changes applied · undo available for 30s";
    });
  }

  /* ---------------- 08 selection actions ---------------- */
  var selCopy = document.getElementById("selCopy");
  var selBar = document.getElementById("selBar");
  var selResult = document.getElementById("selResult");
  var ACTIONS = {
    Explain: "This clause overrides the standard 15% restocking fee. It applies only when damage is confirmed at delivery, not when the customer changes their mind.",
    Improve: "Items damaged in transit are exempt from the restocking fee, provided the damage is reported within 48 hours of delivery.",
    Shorten: "Damaged-in-transit items are exempt from the restocking fee.",
    Tone: "Good news — if your item arrived damaged, you won't pay a restocking fee. Just send us a photo and we'll sort it out."
  };

  if (selCopy && selBar) {
    document.addEventListener("mouseup", function (e) {
      var sel = window.getSelection();
      if (!sel || sel.isCollapsed || !sel.toString().trim()) return;
      if (!selCopy.contains(sel.anchorNode) && !selCopy.contains(e.target)) return;
      selBar.hidden = false;
    });

    Array.prototype.forEach.call(selBar.querySelectorAll(".sel-btn"), function (btn) {
      btn.addEventListener("click", function () {
        var sel = window.getSelection();
        var picked = sel && sel.toString().trim() ? sel.toString().trim() : "Damaged items are exempt.";
        if (picked.length > 90) picked = picked.slice(0, 90) + "…";
        if (!selResult) return;
        selResult.hidden = false;
        selResult.innerHTML = "<span>" + btn.textContent + " · " + picked.length + " characters selected</span>";
        selResult.appendChild(document.createTextNode(ACTIONS[btn.textContent] || ACTIONS.Explain));
        if (sel && sel.removeAllRanges) sel.removeAllRanges();
      });
    });
  }

  /* ---------------- 09 correction loop ---------------- */
  var corrSpan = document.getElementById("corrSpan");
  var corrTags = document.getElementById("corrTags");
  if (corrSpan) {
    var editCancelled = false;

    function beginEdit() {
      if (corrSpan.isContentEditable) return;
      editCancelled = false;
      corrSpan.setAttribute("contenteditable", "true");
      corrSpan.focus();
      var range = document.createRange();
      range.selectNodeContents(corrSpan);
      var sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
    }
    function endEdit() {
      if (!corrSpan.isContentEditable) return;
      corrSpan.removeAttribute("contenteditable");
      if (editCancelled) return;
      corrSpan.classList.add("edited");
      if (corrTags) corrTags.hidden = false;
    }
    corrSpan.addEventListener("click", beginEdit);
    corrSpan.addEventListener("keydown", function (e) {
      if (e.key === "Enter") { e.preventDefault(); corrSpan.blur(); }
      if (e.key === "Escape") {
        e.preventDefault();
        editCancelled = true;
        corrSpan.textContent = "refund $42.00";
        corrSpan.blur();
      }
    });
    corrSpan.addEventListener("blur", endEdit);
  }

  /* ---------------- autonomy dial ---------------- */
  var LEVELS = {
    1: {
      name: "Suggest",
      desc: "The model proposes, a person applies. Nothing in the product changes until someone clicks. Slowest path to value, but the blast radius is zero — which is the right default for anything touching money.",
      control: 95, speed: 22, risk: 6,
      surface:
        '<div class="surf-label">Composer · untouched</div>' +
        '<div class="surf-box empty">Write a reply to Priya…</div>' +
        '<div class="suggest">' +
        '<div class="suggest-head"><span class="chip-ai">Relay suggests</span></div>' +
        "<p>Hi Priya — I've issued a full refund for the damaged tumbler. It should land in 3–5 days.</p>" +
        '<div class="surf-actions"><button class="btn-mini">Insert</button><button class="btn-mini ghost">Dismiss</button></div>' +
        "</div>"
    },
    2: {
      name: "Draft in place",
      desc: "The model writes where the human writes. It feels fast because there is nothing to copy, but the human still owns the send. This is where most teams should start.",
      control: 80, speed: 55, risk: 22,
      surface:
        '<div class="surf-label">Composer · drafted in place</div>' +
        '<div class="surf-banner">Drafted by Relay · review before sending</div>' +
        '<div class="surf-box filled">Hi Priya — I\'ve issued a full refund for the damaged tumbler. It should land in 3–5 days.</div>' +
        '<div class="surf-actions"><button class="btn-mini primary">Send</button><button class="btn-mini ghost">Edit</button></div>'
    },
    3: {
      name: "Act on approval",
      desc: "The model prepares the full action and stops. One click to approve, one to reject. The human is a gate, not an author — review time drops sharply because the decision is pre-structured.",
      control: 58, speed: 72, risk: 48,
      surface:
        '<div class="surf-label">Pending action</div>' +
        '<div class="action">' +
        '<div class="action-title">Refund $42.00</div>' +
        '<div class="action-meta">Order #1183 · reason: arrived damaged · policy v4.2</div>' +
        "</div>" +
        '<div class="surf-actions"><button class="btn-mini primary">Approve</button><button class="btn-mini ghost">Edit amount</button><button class="btn-mini ghost">Reject</button></div>'
    },
    4: {
      name: "Act, with an interrupt window",
      desc: "The model acts immediately and a short reversal window opens. Throughput is high; recovery depends on the human noticing in time. Only safe when the action is reversible.",
      control: 34, speed: 88, risk: 72,
      surface:
        '<div class="surf-label">Acted · interrupt window</div>' +
        '<div class="action done">' +
        '<div class="action-title">Refund $42.00 sent</div>' +
        '<div class="action-meta">Order #1183 · confirmation emailed</div>' +
        "</div>" +
        '<div class="undo-row"><span class="undo-bar"><i></i></span><span>Undo available</span></div>' +
        '<div class="surf-actions"><button class="btn-mini">Undo</button><button class="btn-mini ghost">Keep</button></div>'
    },
    5: {
      name: "Autonomous, with a guardrail",
      desc: "The model acts and the human audits after. The design work moves entirely to the guardrail — the limit that decides what the agent may never do alone. That limit is the actual product decision.",
      control: 14, speed: 97, risk: 92,
      surface:
        '<div class="surf-label">Autonomous · audit log</div>' +
        '<ul class="audit">' +
        '<li><span class="tick"></span> Refund $42.00 · #1183 <span class="ok">auto</span></li>' +
        '<li><span class="tick"></span> Refund $18.50 · #1179 <span class="ok">auto</span></li>' +
        '<li><span class="tick flag"></span> Refund $96.00 · #1188 <span class="warn">held · over $50 limit</span></li>' +
        "</ul>" +
        '<div class="surf-foot">3 actions this hour · 1 held for human review</div>'
    }
  };

  var autoRange = document.getElementById("autoRange");
  var autoTitle = document.getElementById("autoTitle");
  var autoDesc = document.getElementById("autoDesc");
  var autoSurface = document.getElementById("autoSurface");
  var meters = [
    { bar: "mControl", val: "vControl", hot: false },
    { bar: "mSpeed", val: "vSpeed", hot: false },
    { bar: "mRisk", val: "vRisk", hot: true }
  ];

  function renderAutonomy(level) {
    var data = LEVELS[level];
    if (!data) return;
    if (autoTitle) autoTitle.textContent = level + " · " + data.name;
    if (autoDesc) autoDesc.textContent = data.desc;
    if (autoSurface) autoSurface.innerHTML = '<div class="surf">' + data.surface + "</div>";

    var values = [data.control, data.speed, data.risk];
    meters.forEach(function (m, i) {
      var bar = document.getElementById(m.bar);
      var out = document.getElementById(m.val);
      var v = values[i];
      if (bar) {
        bar.style.width = v + "%";
        bar.classList.toggle("hot", m.hot && v >= 60);
      }
      if (out) out.textContent = v;
    });
  }

  if (autoRange) {
    autoRange.addEventListener("input", function () {
      renderAutonomy(parseInt(autoRange.value, 10));
    });
    renderAutonomy(parseInt(autoRange.value, 10));
  }

  /* ---------------- hero lede ---------------- */
  var lede = document.querySelector(".lede[data-stream]");
  if (lede) {
    var text = lede.getAttribute("data-stream");
    streamText(lede, text, 24).then(function () {
      lede.classList.add("done");
    });
  }
})();
