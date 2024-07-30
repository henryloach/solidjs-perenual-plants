import { createSignal } from 'solid-js'
import { Router, Route, A } from "@solidjs/router"

import banner from './assets/banner.png'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Plant from './pages/Plant'

function App() {
  const [darkTheme, setDarkTheme] = createSignal(false)

  function toggleTheme() {
    setDarkTheme(!darkTheme())
  }

  return (
    <div class="container m-auto">
      <header
        class="my-4 p-2 text-xl flex items-center gap-4 justify-end"
        classList={{ "bg-neutral-900": darkTheme(), "text-white": darkTheme() }}
      >
        <span
          class="material-symbols-outlined cursor-pointer"
          onClick={toggleTheme}
        >
          light_mode
        </span>
        <h1 class="mr-auto">Plants</h1>
      </header>

      <a href="/">Home</a>
      <a href="/cart">Cart</a>

      <img class="rounded-md" src={banner} alt="site banner" />

      <Router>
        <Route path="/" component={Home}></Route>
        <Route path="/cart" component={Cart}></Route>
        <Route path="/plant/:id" component={Plant}></Route>
      </Router>

    </div>
  );
}

export default App;
