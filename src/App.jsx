import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/global";
import { defaultTheme } from "./styles/theme";
import { SignUp } from "./pages/SignUp";
import { SignIn } from "./pages/SignIn";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <SignUp/>
    </ThemeProvider>
  )

}


