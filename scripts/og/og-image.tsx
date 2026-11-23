import { logoDataUri } from "./logo.ts";

export interface OgImageProps {
  eyebrow?: string;
  title: string;
  description?: string;
}

export function OgImage({ eyebrow, title, description }: OgImageProps) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "rgb(12, 14, 24)",
        overflow: "hidden",
        position: "relative",
        fontFamily: "Geist",
      }}
    >
      <div
        style={{
          position: "absolute",
          right: -100,
          top: 20,
          width: 800,
          height: 800,
          background: "radial-gradient(circle, rgba(99, 102, 241, 0.22) 0%, transparent 64%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          bottom: 0,
          width: 320,
          background: "linear-gradient(to left, rgb(12, 14, 24) 0%, transparent 100%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 160,
          background: "linear-gradient(to bottom, rgb(12, 14, 24) 0%, transparent 100%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 160,
          background: "linear-gradient(to top, rgb(12, 14, 24) 0%, transparent 100%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          padding: "80px 96px",
          boxSizing: "border-box",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <img src={logoDataUri()} alt="NewLine Technosoft" style={{ width: 44, height: 44 }} />
          <span
            style={{
              fontSize: 26,
              fontWeight: 600,
              letterSpacing: "-0.02em",
              color: "rgba(255, 255, 255, 0.9)",
            }}
          >
            NewLine Technosoft
          </span>
          <span
            style={{
              fontSize: 14,
              fontWeight: 500,
              letterSpacing: "0.04em",
              color: "rgba(165, 180, 252, 0.8)",
              textTransform: "uppercase",
              paddingLeft: 8,
              borderLeft: "1px solid rgba(255, 255, 255, 0.15)",
            }}
          >
            Butwal, Nepal
          </span>
        </div>
        <div
          style={{
            marginTop: "auto",
            marginBottom: "auto",
            display: "flex",
            flexDirection: "column",
            gap: 0,
            maxWidth: 880,
          }}
        >
          {eyebrow ? (
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
              <div
                style={{
                  width: 3,
                  height: 18,
                  background: "#6366f1",
                  borderRadius: 2,
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontSize: 16,
                  fontWeight: 600,
                  letterSpacing: "0.06em",
                  color: "rgba(199, 210, 254, 0.9)",
                  textTransform: "uppercase",
                }}
              >
                {eyebrow}
              </span>
            </div>
          ) : null}
          <p
            style={{
              fontWeight: 800,
              fontSize: 58,
              letterSpacing: "-0.035em",
              margin: 0,
              lineHeight: 1.15,
              color: "#ffffff",
              lineClamp: 2,
              textOverflow: "ellipsis",
            }}
          >
            {title}
          </p>
          {description ? (
            <p
              style={{
                fontSize: 22,
                color: "rgba(255, 255, 255, 0.65)",
                letterSpacing: "-0.015em",
                margin: 0,
                marginTop: 18,
                fontWeight: 400,
                lineClamp: 2,
                textOverflow: "ellipsis",
                lineHeight: 1.45,
              }}
            >
              {description}
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}
