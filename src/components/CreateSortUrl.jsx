import React, { useState } from "react"
import { ToastContainer, toast } from "react-toastify"
import { useDispatch, useSelector } from "react-redux"
import { createUrl } from "../redux/asyncThunks"
import { closeUrlModal } from "../redux/slices/urlSlice"
import Modal from "./Modal"
import "react-toastify/dist/ReactToastify.css"
const CreateSortUrl = () => {
  const [newUrl, setNewUrl] = useState("")
  const dispatch = useDispatch()
  const { isUrlModalOpen, status, sortUrl } = useSelector((state) => state.url)
  const { email, username } = useSelector((state) => state?.userDetails?.user)

  const handleSubmit = async () => {
    function validURL(str) {
      var pattern = new RegExp(
        "^(https?:\\/\\/)?" + // protocol
          "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
          "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
          "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
          "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
          "(\\#[-a-z\\d_]*)?$",
        "i"
      ) // fragment locator
      return !!pattern.test(str)
    }

    console.log(newUrl === "" , validURL());
    

    if (newUrl === "" || validURL()) {
      toast.error(`not a valid link`, {})
    } else {
      dispatch(createUrl({ url: newUrl, email, username }))
    }
  }
  return (
    <div className="w-8/12 mx-auto border my-4 flex flex-col ">
      <h1 className="text-3xl text-center font-semibold my-7">My Sort Url</h1>
      <div className="mt-6">
        <div className="flex flex-col w-[400px] mx-auto">
          <label htmlFor="sortUrlCreate" className="py-2">
            Shorten a long URL
          </label>
          <input
            type="text"
            placeholder="enter long url "
            id="sortUrlCreate"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            value={newUrl}
            onChange={(e) => {
              setNewUrl(e.target.value)
            }}
          />
        </div>
        <div className="flex justify-center">
          <button
            class={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-6  ${
              status === "loading" ? "opacity-75" : ""
            } `}
            onClick={() => handleSubmit()}
            disabled={status === "loading"}
          >
            {status === "loading" ? "⌛ Loading..." : "  Sort Url"}
          </button>
        </div>

        <Modal
          showModal={isUrlModalOpen}
          sortUrl={sortUrl}
          setShowModal={() => dispatch(closeUrlModal())}
        />
        <ToastContainer />
      </div>
    </div>
  )
}

export default CreateSortUrl
