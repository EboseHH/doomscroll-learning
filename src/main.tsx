import React, { useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight,
  Bookmark,
  Check,
  ChevronDown,
  Compass,
  SlidersHorizontal,
  Sparkles,
  X,
  Leaf,
  BookOpen,
} from "lucide-react";
import { interests, topics, lessons, topicFor, interestFor } from "./data";
import "@fontsource/dm-sans/400.css";
import "@fontsource/dm-sans/500.css";
import "@fontsource/dm-sans/600.css";
import "@fontsource/dm-sans/700.css";
import "@fontsource/manrope/800.css";
import "./style.css";
function readIds(key: string, valid: string[]) {
  try {
    const value: unknown = JSON.parse(localStorage.getItem(key) ?? "[]");
    return Array.isArray(value)
      ? [
          ...new Set(
            value.filter(
              (id): id is string =>
                typeof id === "string" && valid.includes(id),
            ),
          ),
        ]
      : [];
  } catch {
    return [];
  }
}
function App() {
  const [selected, setSelected] = useState(() =>
    readIds(
      "doomscroll.interests",
      interests.map((i) => i.id),
    ),
  );
  const [saved, setSaved] = useState(() =>
    readIds(
      "doomscroll.saved",
      lessons.map((l) => l.id),
    ),
  );
  const [mode, setMode] = useState<"you" | "wildcard" | "saved">("you");
  const [interestFilter, setInterestFilter] = useState("");
  const [topicFilter, setTopicFilter] = useState("");
  const [editing, setEditing] = useState(false);
  const [storageError, setStorageError] = useState(false);
  const [notice, setNotice] = useState("");
  const interestOptions = useRef<HTMLDivElement>(null);
  useEffect(() => {
    try {
      localStorage.setItem("doomscroll.interests", JSON.stringify(selected));
      localStorage.setItem("doomscroll.saved", JSON.stringify(saved));
      setStorageError(false);
    } catch {
      setStorageError(true);
    }
  }, [selected, saved]);
  useEffect(() => {
    if (!editing) return;
    interestOptions.current?.querySelector("button")?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setEditing(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [editing]);
  const changeMode = (next: typeof mode) => {
    setMode(next);
    setInterestFilter("");
    setTopicFilter("");
  };
  const visible = lessons.filter((l) => {
    const interest = interestFor(l)?.id;
    return (
      (mode !== "saved" || saved.includes(l.id)) &&
      (mode !== "you" ||
        !selected.length ||
        selected.includes(interest ?? "")) &&
      (!interestFilter || interest === interestFilter) &&
      (!topicFilter || l.topic_id === topicFilter)
    );
  });
  const filterInterests = interests.filter(
    (i) => mode !== "you" || !selected.length || selected.includes(i.id),
  );
  const filterTopics = topics.filter(
    (t) =>
      (!interestFilter || t.interest_id === interestFilter) &&
      (mode !== "you" ||
        !selected.length ||
        selected.includes(t.interest_id ?? "")),
  );
  const toggleSave = (id: string) => {
    const exists = saved.includes(id);
    setSaved((prev) => (exists ? prev.filter((x) => x !== id) : [...prev, id]));
    setNotice(
      exists
        ? "Lesson removed from saved lessons."
        : storageError
          ? "Lesson saved for this visit only."
          : "Lesson saved in this browser.",
    );
  };
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to lessons
      </a>
      <header className="header">
        <a
          className="brand"
          href="#"
          onClick={(e) => {
            e.preventDefault();
            changeMode("you");
          }}
        >
          <span className="brand-icon">
            <BookOpen size={22} />
          </span>
          <span>
            doomscroll<span className="brand-sub">learning</span>
          </span>
        </a>
        <span className="header-note">
          A little wiser, one scroll at a time.
        </span>
        <button
          className={`saved-nav ${mode === "saved" ? "active" : ""}`}
          onClick={() => changeMode("saved")}
        >
          <Bookmark size={17} /> <span>Saved</span>
          <span className="count">{saved.length}</span>
        </button>
      </header>
      <div className="layout">
        <aside className="sidebar">
          <div className="sidebar-label">YOUR LITTLE CORNER</div>
          <button
            className={`side-link ${mode !== "saved" ? "chosen" : ""}`}
            onClick={() => changeMode("you")}
          >
            <Compass size={19} /> Discover <ArrowUpRight size={16} />
          </button>
          <button
            className={`side-link ${mode === "saved" ? "chosen" : ""}`}
            onClick={() => changeMode("saved")}
          >
            <Bookmark size={19} /> Saved lessons <span>{saved.length}</span>
          </button>
          <div className="interest-heading">
            <span>YOUR INTERESTS</span>
            <button
              onClick={() => setEditing(!editing)}
              aria-expanded={editing}
            >
              Edit
            </button>
          </div>
          <div className="sidebar-interests">
            {(selected.length
              ? interests.filter((i) => selected.includes(i.id))
              : interests
            ).map((i) => (
              <button
                key={i.id}
                onClick={() => {
                  changeMode("you");
                  setInterestFilter(i.id);
                }}
              >
                <span aria-hidden="true" className={`small-symbol ${i.color}`}>
                  {i.symbol}
                </span>
                {i.name}
              </button>
            ))}
          </div>
          <div className="sidebar-bottom">
            <Leaf size={23} />
            <p>
              Less mindless.
              <br />
              More meaningful.
            </p>
            <span>Small lessons. No finish line.</span>
          </div>
        </aside>
        <main id="main" tabIndex={-1}>
          <div className="intro">
            <div className="eyebrow">
              <span /> THE GOOD KIND OF SCROLLING
            </div>
            <h1>
              {mode === "saved"
                ? "Keep the good stuff."
                : mode === "wildcard"
                  ? "Follow your curiosity."
                  : "A little curiosity goes a long way."}
            </h1>
            <p>
              {mode === "saved"
                ? "Your collection of things worth coming back to."
                : "Small lessons. Fresh perspectives. Something worth taking with you."}
            </p>
          </div>
          <section
            className="interests-panel"
            aria-label="Personalise your feed"
          >
            <div className="panel-top">
              <div>
                <h2>
                  {editing ? "Make this feed yours" : "What catches your eye?"}
                </h2>
                <p>
                  {selected.length
                    ? `${selected.length} ${selected.length === 1 ? "interest" : "interests"} selected. You can always change your mind.`
                    : "Pick a few interests, or explore a little of everything."}
                </p>
              </div>
              <button
                className="edit-button"
                onClick={() => setEditing(!editing)}
                aria-expanded={editing}
                aria-controls="interest-options"
              >
                {editing ? <X size={16} /> : <SlidersHorizontal size={16} />}{" "}
                {editing ? "Done" : "Edit interests"}
              </button>
            </div>
            <div
              className="interest-chips"
              id="interest-options"
              ref={interestOptions}
            >
              {interests.map((i) => (
                <button
                  key={i.id}
                  className={`interest-chip ${selected.includes(i.id) ? "selected" : ""}`}
                  aria-pressed={selected.includes(i.id)}
                  onClick={() => {
                    setSelected((prev) =>
                      prev.includes(i.id)
                        ? prev.filter((x) => x !== i.id)
                        : [...prev, i.id],
                    );
                    setInterestFilter("");
                    setTopicFilter("");
                  }}
                >
                  <span aria-hidden="true" className={`chip-symbol ${i.color}`}>
                    {i.symbol}
                  </span>
                  {i.name}
                  {selected.includes(i.id) && <Check size={14} />}
                </button>
              ))}
            </div>
            <p className="browser-note">
              {storageError
                ? "Browser storage is unavailable. Your choices and saves will last for this visit only."
                : "No account needed. Your choices and saves stay in this browser."}
            </p>
          </section>
          <div className="feed-toolbar">
            <div className="tabs" aria-label="Lesson feed">
              {mode === "saved" ? (
                <span className="saved-title">
                  <Bookmark size={17} /> Saved lessons
                </span>
              ) : (
                <>
                  <button
                    className={mode === "you" ? "selected-tab" : ""}
                    aria-pressed={mode === "you"}
                    onClick={() => changeMode("you")}
                  >
                    <Compass size={17} /> For you
                  </button>
                  <button
                    className={mode === "wildcard" ? "selected-tab" : ""}
                    aria-pressed={mode === "wildcard"}
                    onClick={() => changeMode("wildcard")}
                  >
                    <Sparkles size={17} /> Wildcard
                  </button>
                </>
              )}
            </div>
            <span className="lesson-count">
              {visible.length} {visible.length === 1 ? "lesson" : "lessons"} to
              explore
            </span>
          </div>
          <div className="filters">
            <label>
              <span className="sr-only">Filter by interest</span>
              <select
                value={interestFilter}
                onChange={(e) => {
                  setInterestFilter(e.target.value);
                  setTopicFilter("");
                }}
              >
                <option value="">All interests</option>
                {filterInterests.map((i) => (
                  <option key={i.id} value={i.id}>
                    {i.name}
                  </option>
                ))}
              </select>
              <ChevronDown size={14} />
            </label>
            <label>
              <span className="sr-only">Filter by topic</span>
              <select
                value={topicFilter}
                onChange={(e) => setTopicFilter(e.target.value)}
              >
                <option value="">All topics</option>
                {filterTopics.map((t) => (
                  <option key={t.id} value={t.id}>
                    {t.name}
                  </option>
                ))}
              </select>
              <ChevronDown size={14} />
            </label>
            {(interestFilter || topicFilter) && (
              <button
                className="clear"
                onClick={() => {
                  setInterestFilter("");
                  setTopicFilter("");
                }}
              >
                Clear filters
              </button>
            )}
          </div>
          <div className="feed">
            {visible.map((lesson, index) => {
              const interest = interestFor(lesson);
              const isSaved = saved.includes(lesson.id);
              return (
                <article className="lesson-card" key={lesson.id}>
                  <div
                    className={`lesson-art ${interest?.color ?? "green"}`}
                    aria-hidden="true"
                  >
                    <span className="art-label">
                      A SMALL MOMENT OF DISCOVERY
                    </span>
                    <div className={`illustration ${interest?.id}`}>
                      <span />
                      <span />
                      <span />
                    </div>
                    <span className="art-number">
                      FIELD NOTES /{" "}
                      {String(lessons.indexOf(lesson) + 1).padStart(2, "0")}
                    </span>
                    <span className="art-symbol">{interest?.symbol}</span>
                  </div>
                  <div className="lesson-body">
                    <div className="lesson-meta">
                      <span className={`category ${interest?.color}`}>
                        {interest?.name ?? "Uncategorised"}
                      </span>
                      <span className="meta-dot">/</span>
                      <span>{topicFor(lesson).name}</span>
                      <span className="reading-time">1 min read</span>
                    </div>
                    <h2>{lesson.title}</h2>
                    <p className="explanation">{lesson.content}</p>
                    <div className="takeaway">
                      <span>THE LITTLE TAKEAWAY</span>
                      <p>{lesson.takeaway}</p>
                    </div>
                    <div className="card-footer">
                      <span>One scroll, one new idea.</span>
                      <button
                        className={`save-button ${isSaved ? "is-saved" : ""}`}
                        aria-label={`${isSaved ? "Unsave" : "Save"} lesson: ${lesson.title}`}
                        aria-pressed={isSaved}
                        onClick={() => toggleSave(lesson.id)}
                      >
                        <Bookmark
                          size={17}
                          fill={isSaved ? "currentColor" : "none"}
                        />
                        {isSaved ? "Saved" : "Save lesson"}
                      </button>
                    </div>
                  </div>
                  {index === 0 && mode === "wildcard" && (
                    <span className="sr-only">
                      Wildcard includes all interests.
                    </span>
                  )}
                </article>
              );
            })}
            {!visible.length && (
              <div className="empty">
                <Bookmark size={32} />
                <h2>
                  {mode === "saved" && !saved.length
                    ? "Your next favourite is out there."
                    : "No lessons in this little corner yet."}
                </h2>
                <p>
                  {mode === "saved" && !saved.length
                    ? "Save a lesson as you scroll. It will be waiting for you here."
                    : "Try another topic or clear your filters to keep exploring."}
                </p>
                <button
                  onClick={() => {
                    if (mode === "saved" && !saved.length) changeMode("you");
                    else {
                      setInterestFilter("");
                      setTopicFilter("");
                    }
                  }}
                >
                  {mode === "saved" && !saved.length
                    ? "Explore lessons"
                    : "Clear filters"}
                </button>
              </div>
            )}
          </div>
          <footer className="feed-end">
            {visible.length > 0 && (
              <>
                You’ve reached the end of this collection.{" "}
                <span>Let an idea sink in.</span>
              </>
            )}
          </footer>
        </main>
        <aside className="right-rail">
          <div className="curiosity-note">
            <Sparkles size={23} />
            <h2>
              Your scroll.
              <br />A better direction.
            </h2>
            <p>
              You don’t need hours to learn something new. Just a moment of
              curiosity.
            </p>
            <span>STAY CURIOUS ↗</span>
          </div>
          <div className="rail-tip">
            <span>HOW IT WORKS</span>
            <p>
              <strong>For you</strong> follows your interests.
            </p>
            <p>
              <strong>Wildcard</strong> takes the scenic route.
            </p>
            <p>
              <strong>Saved</strong> keeps the ideas you love.
            </p>
          </div>
          <p className="rail-foot">
            Prepared lessons. Human curiosity.
            <br />
            No algorithms to keep you here.
          </p>
        </aside>
      </div>
      <div className="sr-only" role="status" aria-live="polite">
        {notice}
      </div>
    </>
  );
}
createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
