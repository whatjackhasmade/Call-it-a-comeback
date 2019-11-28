import React, { useEffect, useState } from "react"

import Base from "../components/templates/Base"

import Hero from "../components/organisms/hero/Hero"

import TweetsContainer from "./twitterStyles"

const Twitter = () => {
  const [tweets, setTweets] = useState([])

  useEffect(() => {
    fetch("https://wjhm-node-twitter-feed.herokuapp.com/")
      .then(res => {
        return res.json()
      })
      .then(tweets => {
        setTweets(tweets)
      })
  }, [])

  const heartGenerator = count => {
    let hearts = []
    for (var i = 0; i < count; i++) {
      hearts.push("❤")
    }
    return hearts
  }

  return (
    <Base cta={false}>
      <Hero>
        <h1>Tweets</h1>
        <h3>Some of my social media ramblings</h3>
      </Hero>
      <TweetsContainer>
        {tweets.map(tweet => (
          <div className="tweet" key={tweet.id}>
            {tweet.text}
            <div className="tweet__favourites">
              {heartGenerator(tweet.favorite_count)}
            </div>
          </div>
        ))}
      </TweetsContainer>
    </Base>
  )
}
