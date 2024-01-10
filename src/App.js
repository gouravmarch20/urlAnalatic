import React, { useState, useEffect } from "react"
import Home from "./Home"
import AnalyticLink from "./components/AnalyticLink"

import Login from "./components/auth/Login"
import SignUp from "./components/auth/SignUp"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import PrivateRoute from "./components/PrivateRoute"

import "react-toastify/dist/ReactToastify.css"
import Navbar from "./components/Navbar"

const App = () => {

  const handleApi = async () => {
    try {
      const res = await fetch("https://supplyn.up.railway.app/", {
        method: "GET",
      }).then((res) => res.json())


    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    handleApi()
  }, [])

  return (
    <BrowserRouter>
      {/* header */}
      <Navbar />

      <Routes>
        <Route path="/sign-in" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Home />} />

          <Route path="/analytics" element={<AnalyticLink />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
