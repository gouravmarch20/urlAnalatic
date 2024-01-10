import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { signIn } from "../../redux/asyncThunks"
import { useDispatch, useSelector } from "react-redux"

import { toast } from "react-toastify"

export default function SignIn() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const dispatch = useDispatch()
  const status = useSelector((state) => state?.userDetails?.status)
  const navigate = useNavigate()
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (e, type) => {
    e.preventDefault()
    if (type === "admin") {
      setFormData({
        email: "admin@gmail.com",
        password: "admin",
      })
      dispatch(signIn({ email: "admin@gmail.com", password: "admin" })).then(
        (res) => {
          if (res?.payload) {
            navigate("/")
            toast.success("login success", {
              autoClose: 2000,
            })
          }
        }
      )
    } else {
      dispatch(signIn(formData)).then((res) => {
        if (res?.payload) {
          navigate("/")
          toast.success("login success", {
            autoClose: 2000,
          })
        }
      })
    }
  }
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign In</h1>
      <form className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="Email"
          id="email"
          className="bg-slate-100 p-3 rounded-lg"
          onChange={handleChange}
          value={formData.email}
        />
        <input
          type="password"
          placeholder="Password"
          id="password"
          className="bg-slate-100 p-3 rounded-lg"
          onChange={handleChange}
          value={formData.password}
        />
        <button
          disabled={status === "loading"}
          className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
          onClick={handleSubmit}
        >
          {status === "loading" ? " ⌛ Loading..." : "Sign In"}
        </button>
        <button
          onClick={(e) => handleSubmit(e, "admin")}
          disabled={status === "loading"}
          className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
        >
          {status === "loading" ? " ⌛ Loading..." : "Admin Access"}
        </button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Dont Have an account?</p>
        <Link to="/sign-up">
          <span className="text-blue-500">Sign up</span>
        </Link>
      </div>

    </div>
  )
}
