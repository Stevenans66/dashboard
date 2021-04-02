import React, { useCallback, useMemo } from "react"
import { useLocalStorage } from "react-use"
import News from "../../news"
import Item from "../item"
import Pill from "../pill"
import news from "./news.json"

const AgentNews = () => {
  const [value, setValue] = useLocalStorage("news_last_seen")

  const upToDate = useMemo(() => {
    if (!news.length) return true

    const lastItem = news[news.length - 1]
    const { date } = lastItem

    const latestEntry = new Date(date)
    const lastSeen = new Date(value)
    return lastSeen >= latestEntry
  }, [value])

  const onClose = useCallback(() => {
    const now = new Date()
    setValue(now)
  }, [setValue])

  return (
    <Item hasBorder>
      <News items={news} onCloseClick={onClose}>
        {toggle => (
          <Pill color="bright" background={upToDate ? "border" : "success"} onClick={toggle}>
            NEWS
          </Pill>
        )}
      </News>
    </Item>
  )
}
export default AgentNews
