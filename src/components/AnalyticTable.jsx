import React from "react"
import { Card, Typography } from "@material-tailwind/react"

const TABLE_HEAD = ["username", "email", "tinyUrl", "no of visit", "expire in"]

const AnalyticTable = ({ analyticData, handleGetAnalytic }) => {
  const getDate = (date) => {
    const expireDay = Math.abs(date)

    if (expireDay == 0) {
      return 2
    } else {
      return 1
    }
  }
  const TABLE_ROWS = analyticData
  return (
    <>
      <Card className="h-full w-full overflow-scroll">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TABLE_ROWS.map(
              (
                {
                  key,
                  username,
                  email,
                  redirectURL,
                  shortId,
                  visitHistory,
                  expireDate,
                },
                index
              ) => {
                const isLast = index === TABLE_ROWS.length - 1
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50"

                return (
                  <tr key={key}>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {username}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {email}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        <a
                          target="_blank"
                          href={`https://supplyn.up.railway.app/${shortId}`}
                          className="text-blue-800"
                          onClick={() => {
                            setTimeout(() => {
                              handleGetAnalytic()
                            }, 1000)
                          }}
                        >
                          {" "}
                          {shortId}{" "}
                        </a>
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        as="a"
                        href="#"
                        variant="small"
                        color="blue-gray"
                        className="font-medium"
                      >
                        {visitHistory ? visitHistory : 0}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {getDate(expireDate)} Day
                      </Typography>
                    </td>
                  </tr>
                )
              }
            )}
          </tbody>
        </table>
      </Card>
    </>
  )
}

export default AnalyticTable
