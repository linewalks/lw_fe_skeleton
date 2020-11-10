import React from 'react'
import styled from 'styled-components'
import Button from '@components/Button'
import Link from 'next/link'

const Title = styled.h1`
  font-size: 50px;
  color: #fff;
`

const Anchor = styled.a`
  display: flex;
  align-items: center;
  font-size: 24px;
  color: #4d5661;
  cursor: pointer;
  &:hover {
    color: white;
  }
`

function Home() {
  return (
    <>
      <Title>Linewalks</Title>
      <Link href="/about">
        <Anchor>
          About
          <img src="svg/icn_pathway_arrow_right_24.svg" width="24" height="24" alt="arrow right" />
        </Anchor>
      </Link>
      <Button onClick={() => alert('hello world')}>
        Hello
      </Button>
    </>
  )
}

export default Home
