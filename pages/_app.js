import "tailwindcss/tailwind.css";
import "../styles/global.css";
import ProgressBar from "@badrap/bar-of-progress";
import Router from "next/router";
import { Provider as AuthProvider } from "next-auth/client";

const progress = new ProgressBar({
  size: 4,
  color: "#FE595E",
  className: "z-50",
  delay: 100,
});

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider session={pageProps.session}>
      <Component {...pageProps} />;
    </AuthProvider>
  );
}

export default MyApp;
