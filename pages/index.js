import { ThemeProvider } from "../context/theme";

import Home from "../components/pages/home/Home";

export default function App() {
  return (
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  );
}
