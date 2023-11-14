type Logger = {
  title: "Info" | "Warning" | "Error" | "Noti";
  cssTitle?: string;
  content: string;
  cssContent?: string;
};

export default function logger(
  typeConsole = "log",
  { title, cssTitle = "color: #fff; font-size: 12px", content, cssContent = "color: #fff; font-size: 12px" }: Logger
) {
  if (typeConsole === "log") {
    console.log(`%c[${title}] %c${content}`, cssTitle, cssContent);
  }
  if (typeConsole === "warn") {
    console.warn(`%c[${title}] %c${content}`, cssTitle, cssContent);
  }
  if (typeConsole === "error") {
    console.error(`%c[${title}] %c${content}`, cssTitle, cssContent);
  }
}

export function NowPlaying(nameSong: string) {
  logger("log", {
    title: "Noti",
    cssTitle: "color: #38bdf8; font-size: 12px",
    content: `Now playing: ${nameSong}`,
  });
}
