import * as React from "react"
import { Flex } from "@chakra-ui/react"
import { Meta, StoryObj } from "@storybook/react"
import TableComponent from ".."
import {
  MdxDemoData,
  MdxEnergyConsumpData,
  MdxTypesOfBridgesData,
} from "./mockMdxData"

type TableType = typeof TableComponent

const meta: Meta<TableType> = {
  title: "Molecules / Display Content / Tables",
  component: TableComponent,
  decorators: [
    (Story) => (
      <Flex flexDir="column" gap={2} maxW="container.lg">
        <Story />
      </Flex>
    ),
  ],
}

export default meta

type Story = StoryObj<TableType>

export const Tables: Story = {
  args: {
    children: <MdxDemoData />,
  },
  render: (args) => (
    <>
      <TableComponent {...args} />
      <TableComponent {...args} variant="minimal" />
      <TableComponent {...args} variant="striped" />
    </>
  ),
}

export const MockDocContent: Story = {
  render: () => (
    <>
      <TableComponent children={<MdxEnergyConsumpData />} />
      <TableComponent children={<MdxTypesOfBridgesData />} />
    </>
  ),
}
