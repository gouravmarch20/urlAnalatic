import React, { useState, useEffect } from "react"



import axios from "axios"

import "react-toastify/dist/ReactToastify.css"
import AnalyticTable from "./AnalyticTable"
const AnalyticLink = () => {
  const [statusLoading, setStatusLoading] = useState("")
  const [analyticData, setAnalyticData] = useState([])
  const handleGetAnalytic = async () => {

    
    setStatusLoading("loading")
    const {
      data: { response },
    } = await axios.get(
      `https://supplyn.up.railway.app/url/analytics/detail/all`
    )
    setStatusLoading("")

    setAnalyticData(response)
  }
  useEffect(() => {
    handleGetAnalytic()
  }, [])



  return (
    <div className="   my-4 flex  flex-col ">
      <div>
        {statusLoading === "loading" ? (
          <>
            <h1 className="text-3xl text-center font-semibold my-7">⌛ Loading..</h1>
          </>
        ) : (
          <>
            <h1 className="text-3xl text-center font-semibold my-7">
              Url Analytic
            </h1>
            <AnalyticTable analyticData={analyticData} handleGetAnalytic={handleGetAnalytic} />
          </>
        )}
      </div>
    </div>
  )
}

export default AnalyticLink
