import React from "react"
import { Flex, Icon, Text, TextSmall } from "@netdata/netdata-ui"
import Image from "./image"
import Anchor from "./anchor"

const Item = ({ title, date, url, description, imageSrc, buttonLabel }) => {
  return (
    <Flex column gap={2}>
      <Flex gap={4}>
        {imageSrc && <Image src={imageSrc} width="160px" />}
        <Flex column gap={2}>
          <Text strong>{title}</Text>
          <Text>{description}</Text>
        </Flex>
      </Flex>
      <Flex justifyContent="between" alignItems="center">
        <TextSmall>{date}</TextSmall>
        <Anchor href={url} target="_blank" gap={1} alignItems="center">
          <Text color="success" strong>
            {buttonLabel}
          </Text>
          <Icon color="success" rotate={2} name="arrow_left" />
        </Anchor>
      </Flex>
    </Flex>
  )
}

export default Item
