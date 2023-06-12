import React, { useState } from 'react'
import Head from './header/Header'
import { AppShell, Header, MediaQuery, Burger } from '@mantine/core'
import Rout from './router/Router'

function App() {

  const [opened, setOpened] = useState(false);
  return (
    <div>
      <AppShell navbarOffsetBreakpoint="sm"
        asideOffsetBreakpoint="sm"
        header={<Header height={60} p="0">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              height: "100%",
              backgroundColor: "rgb(88, 81, 216)",
            }}
          >
            <MediaQuery largerThan="sm" styles={{ display: "none" }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size={20}
                color={"white"}
              />
            </MediaQuery>
            <Head />
          </div>
        </Header>}>
          <Rout/>
      </AppShell>
    </div>
  )
}

export default App