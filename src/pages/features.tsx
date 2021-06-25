/** @jsx jsx */
import styled from "@emotion/styled"
import { jsx, css } from "@emotion/react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import { Feature } from "../components/Feature"
import { IStaticImageProps } from "gatsby-plugin-image/dist/src/components/static-image.server"
import { mediaQuery } from "../style/mediaQueries"

const imageProps: Partial<IStaticImageProps> = {
  width: 1265,
  height: 800,
  layout: "fixed",
  placeholder: "none",
}

const imageCss = css`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
`

export default () => (
  <Layout>
    <SEO title="Features" />
    <Features>
      <Feature
        title="Check in daily"
        image={
          <StaticImage
            src="../images/features/today.png"
            alt="Tickdays app on the Today screen"
            css={imageCss}
            {...imageProps}
          />
        }
      >
        <p>
          Open Tickdays when you're on-the-move or at the end of the day. Rate
          your day and tick off your <strong>habits</strong>.
        </p>
        <p>Write a journal entry and send your future self a message.</p>
      </Feature>

      <Feature
        flip
        title="Track your progress"
        image={
          <StaticImage
            src="../images/features/insights.png"
            alt="Tickdays app on the Insights screen"
            css={imageCss}
            {...imageProps}
          />
        }
      >
        <p>
          Track your mood over time, and see how well you're getting on with
          Tickdays in the <strong>Insights tab</strong>. A chart shows your good
          days, while also highlighting your average day rating over the
          previous week.
        </p>
      </Feature>

      <Feature
        title="Insights for your habits"
        image={
          <StaticImage
            src="../images/features/habit-insights.png"
            alt="Tickdays app on the Insights screen"
            css={imageCss}
            {...imageProps}
          />
        }
      >
        <p>
          Your <strong>habits</strong> are what make Tickdays personal to you.
        </p>
        <p>
          Check how you're getting on with each of your habits. You can also
          compare how you felt on days when you achieved your habits to how you
          felt on days when you didn't.
        </p>
      </Feature>

      <Feature
        flip
        title="See your history"
        image={
          <StaticImage
            src="../images/features-log-shadow.png"
            alt="Tickdays app on the Log screen"
            css={imageCss}
            {...imageProps}
          />
        }
      >
        <p>
          Scroll through every day you've entered into Tickdays proudly - you
          can see your entries like a journal with your mood for that day, a
          list of <strong>habits</strong> you ticked off and your notes.
        </p>
        <p>Click onto a day to view it in full detail and make any changes.</p>
      </Feature>

      <Feature
        title="Your habits"
        image={
          <StaticImage
            src="../images/features/add-habit.png"
            alt="Tickdays app on the add habit screen"
            css={imageCss}
            {...imageProps}
          />
        }
      >
        <p>
          Add your habits to Tickdays so you can tick them off when you
          check-in. You can assign days when you won't be working on your habits
          and they won't show on your checklist on those days.
        </p>
        <p>
          You can reorder your habits to match your priorities by dragging your
          habit to the place you want it.
        </p>
      </Feature>

      <Feature
        flip
        title="Daily reminders"
        image={
          <StaticImage
            src="../images/features-reminder-shadow.png"
            alt="iPhone notification from Tickdays"
            css={imageCss}
            {...imageProps}
          />
        }
      >
        <p>
          Tickdays can send you a morning message with a list of your planned
          habits for the day.
        </p>
        <p>Life can be overwhelming so we just show you 3 at a time!</p>
      </Feature>
      <Feature
        title="Message your future self"
        image={
          <StaticImage
            src="../images/features-yesterday-shadow.png"
            alt="iPhone notification from Tickdays"
            css={imageCss}
            {...imageProps}
          />
        }
      >
        <p>
          When you're feeling motivated, write a message from you to your future
          self!
        </p>
        <p>
          You'll get this message sometime the following day - to give you that
          extra push to get stuck-in to your habits.
        </p>
      </Feature>
    </Features>
  </Layout>
)

const Features = styled.div`
  padding-top: 2rem;
  overflow: hidden;

  ${mediaQuery.desktop} {
    padding-top: 5rem;
    padding-bottom: 8rem;
  }
`
