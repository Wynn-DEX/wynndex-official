import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import OrderlyProvider from "@/components/orderlyProvider";
import { HttpsRequiredWarning } from "@/components/HttpsRequiredWarning";
import { withBasePath } from "./utils/base-path";
import { getSEOConfig, getUserLanguage } from "./utils/seo";

export default function App() {
  const seoConfig = getSEOConfig();
  const defaultLanguage = getUserLanguage();

  return (
    <>
      <Helmet>
        <html lang={seoConfig.language || defaultLanguage} />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          type="image/webp"
          href={withBasePath("/favicon.webp")}
        />
      </Helmet>

      {/* Main cinematic background */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          backgroundImage: `
            linear-gradient(
              rgba(0, 0, 0, 0.72),
              rgba(0, 0, 0, 0.78)
            ),
            url('/dex-wynn-background.png')
          `,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          zIndex: -2,
        }}
      />

      {/* Atmospheric blur/glow layer */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          backdropFilter: "blur(2px)",
          WebkitBackdropFilter: "blur(2px)",
          background:
            "radial-gradient(circle at center, rgba(0,255,65,0.03), transparent 70%)",
          pointerEvents: "none",
          zIndex: -1,
        }}
      />

      <HttpsRequiredWarning />

      <OrderlyProvider>
        <Outlet />
      </OrderlyProvider>
    </>
  );
}
