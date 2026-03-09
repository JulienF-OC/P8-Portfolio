import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const timelineData = [
  { id: 1, direction: "l", titleKey: "timeline.items.0.title", date: "2025 — En cours", descKey: "timeline.items.0.desc", type: "formation" },
  { id: 2, direction: "r", titleKey: "timeline.items.1.title", date: "06/2024", descKey: "timeline.items.1.desc", type: "emploi" },
  { id: 3, direction: "l", titleKey: "timeline.items.3.title", date: "09/2022 — 07/2023", descKey: "timeline.items.3.desc", type: "emploi" },
  { id: 4, direction: "r", titleKey: "timeline.items.4.title", date: "01/2021 — 07/2021", descKey: "timeline.items.4.desc", type: "emploi" },
  { id: 5, direction: "l", titleKey: "timeline.items.5.title", date: "2020", descKey: "timeline.items.5.desc", type: "formation" },
];

const TYPE_BADGE = {
  formation: "badge-warning",
  emploi:    "badge-info",
  projet:    "badge-success",
};

const TYPE_DOT_COLOR = {
  formation: "#f59e0b",
  emploi:    "#38bdf8",
  projet:    "#4ade80",
};

const TYPE_DATE = {
  formation: "text-warning",
  emploi:    "text-info",
  projet:    "text-success",
};

function TimelineItem({ item, index }) {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);
  const isLeft = item.direction === "l";

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), index * 150);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <li
      style={{
        display: "flex",
        justifyContent: isLeft ? "flex-start" : "flex-end",
        padding: "1em 0",
        listStyle: "none",
        position: "relative",
      }}
    >
      <span
        style={{
          position: "absolute",
          left: "50%",
          top: "1.75rem",
          transform: "translateX(-50%)",
          width: 14,
          height: 14,
          borderRadius: "50%",
          background: "var(--fallback-b1,oklch(var(--b1)))",
          border: `4px solid ${TYPE_DOT_COLOR[item.type]}`,
          boxShadow: `0 0 8px ${TYPE_DOT_COLOR[item.type]}88`,
          zIndex: 10,
          display: "block",
          flexShrink: 0,
        }}
      />

      <div
        style={{
          width: "calc(50% - 32px)",
          textAlign: isLeft ? "right" : "left",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : `translateX(${isLeft ? "-20px" : "20px"})`,
          transition: "opacity 0.5s ease, transform 0.5s ease",
        }}
      >
        <div
          style={{
            display: "inline-block",
            borderRadius: 8,
            padding: "6px 12px",
            position: "relative",
            maxWidth: "100%",
            background: "var(--fallback-b2,oklch(var(--b2)))",
            boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
          }}
        >
          <h3 style={{ fontWeight: 700, fontSize: "0.85em", margin: 0, lineHeight: 1.4 }}>
            {t(item.titleKey)}
          </h3>
          <span
            style={{
              position: "absolute",
              top: "0.6rem",
              [isLeft ? "right" : "left"]: "100%",
              width: 0,
              height: 0,
              borderTop: "7px solid transparent",
              borderBottom: "7px solid transparent",
              [isLeft ? "borderLeft" : "borderRight"]: `7px solid var(--fallback-b2,oklch(var(--b2)))`,
            }}
          />
        </div>

        <p
          className={TYPE_DATE[item.type]}
          style={{ fontFamily: "monospace", fontSize: "0.7em", marginTop: 4, letterSpacing: 1 }}
        >
          {item.date}
        </p>

        <div style={{ marginTop: 2 }}>
          <span className={`badge badge-outline badge-xs ${TYPE_BADGE[item.type]}`}>
            {t(`timeline.types.${item.type}`)}
          </span>
        </div>

        <p
          style={{
            marginTop: "0.5em",
            fontSize: "0.8em",
            fontStyle: "italic",
            opacity: 0.6,
            lineHeight: 1.5,
          }}
        >
          {t(item.descKey)}
        </p>
      </div>
    </li>
  );
}

function Timeline() {
  const { t } = useTranslation();

  return (
    <section id="Career">
    <div className="my-10 md:my-32 px-4">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-2">
        {t("timeline.title")}
      </h2>
      <div className="w-10 h-1 bg-accent mx-auto mb-12 rounded-full" />

      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: 720,
          margin: "0 auto",
          padding: "1em 0",
        }}
      >
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            left: "50%",
            top: 0,
            bottom: 0,
            width: 2,
            transform: "translateX(-50%)",
            zIndex: 0,
            background:
              "linear-gradient(to bottom, transparent 0%, rgba(128,128,128,0.35) 8%, rgba(128,128,128,0.35) 92%, transparent 100%)",
          }}
        />

        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {timelineData.map((item, i) => (
            <TimelineItem key={item.id} item={item} index={i} />
          ))}
        </ul>
      </div>

      <div className="flex justify-center gap-6 mt-10 flex-wrap">
        {Object.keys(TYPE_BADGE)
          .filter((type) => type !== "projet")
          .map((type) => (
            <div key={type} className="flex items-center gap-2">
              <span className={`badge badge-outline badge-sm ${TYPE_BADGE[type]}`}>
                {t(`timeline.types.${type}`)}
              </span>
            </div>
          ))}
      </div>
    </div>
    </section>
  );
}

export default Timeline;