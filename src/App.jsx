import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/global";
import { defaultTheme } from "./styles/theme";
import { SignUp } from "./pages/SignUp";
import { SignIn } from "./pages/SignIn";
import { MoviePreview } from "./pages/MoviePreview";
import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Profile/>
    </ThemeProvider>
  )

}


