import type { AppProps } from "next/app";
import { ChakraBaseProvider, extendBaseTheme } from "@chakra-ui/react";
import Layout from "@/components/layout/Layout";
import "@fontsource/plus-jakarta-sans";
import "@fontsource/fira-code";

const theme = extendBaseTheme({
  fonts: {
    body: "Plus Jakarta Sans",
    heading: "Plus Jakarta Sans",
    mono: "Fira Code",
  },
  styles: {
    global: () => ({
      body: { bg: "blue.200" },
    }),
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraBaseProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraBaseProvider>
  );
}
