import React from 'react'
import "./App.css";
import ShopPage from "./pages/ShopPage";
import AccountPage from "./pages/CartPage";
import CartPage from "./pages/CartPage";
import SubscribePage from "./pages/SubscribePage";
import {Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Layout from './pages/Layout';
import './index.css'

// Auto generates routes from files under ./pages
// https://vitejs.dev/guide/features.html#glob-import
// const pages = import.meta.glob('./pages/*.jsx', { eager: true })

// const routes = Object.keys(pages).map((path) => {
//   const name = path.match(/\.\/pages\/(.*)\.jsx$/)[1]
//   return {
//     name,
//     path: name === 'Home' ? '/' : `/${name.toLowerCase()}`,
//     component: pages[path].default,
//   }
// })

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* <Route path="/account" element={<AccountPage />} /> */}
          {/* <Route path="/cart" element={<CartPage />} /> */}
          {/* <Route path="/shop" element={<ShopPage />} /> */}
          {/* <Route path="/subscribe" element={<SubscribePage />} /> */}
        </Route>
      </Routes>
    </>
  );
}

