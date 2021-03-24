import React from "react"
import styled from "styled-components"
import { Flex } from "@netdata/netdata-ui"
import Logo from "./logo"
import Node from "./node"
import Options from "./options"
import Version from "./version"
import DateTimePicker from "./dateTimePicker"
import Alarms from "./alarms"
import Status from "./status"

const Wrapper = styled(Flex).attrs({
  as: "header",
  position: "relative",
  justifyContent: "between",
  background: "disabled",
  elevation: 20,
  width: "100%",
  padding: [2, 0, 2, 4],
})`
  pointer-events: all;
`

const Header = () => (
  <Wrapper>
    <Flex alignItems="center" gap={3}>
      <Node />
      <Options />
      <Version />
    </Flex>
    <Flex justifyContent="end" alignItems="center" gap={3}>
      <Logo />
      <DateTimePicker />
      <Alarms />
      <Status />
    </Flex>
  </Wrapper>
)

export default Header