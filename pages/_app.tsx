import type { AppProps } from "next/app";
import { CacheProvider, EmotionCache, ThemeProvider } from "@emotion/react";
import createEmotionCache from "../utils/createEmotionCache";
import { CssBaseline } from "@mui/material";
import lightTheme from "../styles/theme/lightTheme";

const clientSideEmotionCache = createEmotionCache();

function MyApp(
  props: AppProps & {
    emotionCache: EmotionCache;
  }
) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}

export default MyApp;
