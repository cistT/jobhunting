import React from 'react'
import type { NextPage } from 'next'
import { css } from '@emotion/react'

const Home: NextPage = () => {
  return (
    <>
      <div css={styles.test}>Hello world!</div>
      TEST
    </>
  )
}

export default Home

const styles = {
  test: css`
    height: 1000px;
    color: red;
  `,
}
