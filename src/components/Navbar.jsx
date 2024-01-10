import React from "react"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { logOut } from "../redux/slices/userSlice"
import { toast } from "react-toastify"

const Navbar = () => {
  const { isLoggedIn } = useSelector((state) => state.userDetails)

  const dispatch = useDispatch()

  return (
    <div className="flex max-h-36 justify-between w-5/6 mx-auto p-4 text-lg	font bg-sky-500 rounded-md">
      <div className="flex gap-6">
        <div className="  ">
          <Link to={"/"}> Create Link </Link>
        </div>
        <div>
          <Link to={"/analytics"}> Analytics Link</Link>
        </div>
      </div>

      <div className="flex gap-6">
        {/* <div>Create Link</div> */}
        {!isLoggedIn && (
          <div>
            <Link to={"/sign-in"}> Sign In</Link>
          </div>
        )}
        <div>
          {!isLoggedIn ? (
            <div>
              <Link to={"/sign-up"}> SignUp</Link>{" "}
            </div>
          ) : (
            <div>
              <Link
                to={"/"}
                onClick={() => {
                  toast.success("You logOut", {})

                  dispatch(logOut()).then(() => {})
                }}
              >
                {" "}
                SignOut
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar
