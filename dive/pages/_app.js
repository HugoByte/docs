// These styles apply to every route in the application
import "../globals.css";
import "tailwindcss/tailwind.css";
import "../components/background.module.css";
import { ThemeProvider } from "next-themes";

export default function App({ Component, pageProps }) {
  return (
      <Component {...pageProps} />
  );
}
