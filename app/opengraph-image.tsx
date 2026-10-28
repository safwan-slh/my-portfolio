import { ImageResponse } from "next/og"

import { siteConfig } from "@/config/site"

export const alt = `${siteConfig.name} — ${siteConfig.title}`
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

/** Colors mirror the design tokens in app/globals.css (oklch → hex). */
const colors = {
  background: "#0a0a0a",
  foreground: "#fafafa",
  muted: "#a1a1a1",
  subtle: "#737373",
  primary: "#3275b4",
  primaryLight: "#5194d5",
  border: "#262626",
}

const techStack = ["Next.js", "React", "TypeScript", "Tailwind CSS"]

export default function Image() {
  const initial = siteConfig.name.trim().charAt(0).toUpperCase()

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background:
            "linear-gradient(135deg, #0a0a0a 0%, #0a0a0a 42%, #10293c 100%)",
          color: colors.foreground,
          fontFamily: "sans-serif",
        }}
      >
        {/* top row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 64,
                height: 64,
                borderRadius: 18,
                background: `linear-gradient(135deg, ${colors.primary}, ${colors.primaryLight})`,
                fontSize: 34,
                fontWeight: 700,
                color: "#ffffff",
              }}
            >
              {initial}
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 18,
                fontWeight: 600,
                letterSpacing: 4,
                color: colors.muted,
              }}
            >
              PORTFOLIO
            </div>
          </div>

          <div
            style={{
              display: "flex",
              fontSize: 22,
              color: colors.subtle,
            }}
          >
            {siteConfig.url.replace(/^https?:\/\//, "").replace(/\/$/, "")}
          </div>
        </div>

        {/* main */}
        <div
          style={{
            display: "flex",
            flex: 1,
            flexDirection: "column",
            justifyContent: "center",
            gap: 22,
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 86,
              fontWeight: 700,
              letterSpacing: -2,
              lineHeight: 1.1,
            }}
          >
            {siteConfig.name}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 36,
              fontWeight: 500,
              color: colors.primaryLight,
            }}
          >
            {siteConfig.title}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 26,
              lineHeight: 1.5,
              color: colors.muted,
              maxWidth: 880,
            }}
          >
            {siteConfig.description}
          </div>
        </div>

        {/* footer */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            paddingTop: 28,
            borderTop: `1px solid ${colors.border}`,
          }}
        >
          <div
            style={{
              display: "flex",
              width: 56,
              height: 6,
              borderRadius: 3,
              background: colors.primary,
            }}
          />
          <div
            style={{
              display: "flex",
              fontSize: 20,
              color: colors.subtle,
            }}
          >
            {techStack.join("  ·  ")}
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}