import type { AppProps } from 'next/app'
import { ChakraBaseProvider, extendBaseTheme } from '@chakra-ui/react'
import chakraTheme from '@chakra-ui/theme'
import "@fontsource/plus-jakarta-sans"
import "@fontsource/fira-code"


const theme = extendBaseTheme({
  // colors:{
  //   colorRed:{ 100: "#e63946"},
  //   colorBackground:{ 100: "#1d3557"},
  //   colorBackgroundLight:{ 100: "#457b9d"},
  //   colorSkyBlue:{ 100: "#a8dadc"},
  //   colorWhite:{ 100: "#f1faee"},
  // },
  fonts: { body: "Plus Jakarta Sans", heading: "Plus Jakarta Sans", mono: "Fira Code" },
  styles:{
    global:() => ({
      body:{ bg: "blue.900"}
    })
  }

})

export default function App({ Component, pageProps }: AppProps) {
  return <ChakraBaseProvider theme={theme}>
    <Component {...pageProps} />
  </ChakraBaseProvider>
  
}
