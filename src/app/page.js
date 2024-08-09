"use client"

import { Box, Flex, Tabs, TabList, TabPanels, Tab, TabPanel, Center, Heading, Table, Thead, Tbody, Tr, Th, Td, TableContainer } from "@chakra-ui/react";
import DateRangeForm from "./components/DateRangeForm";
import SurveyReportForm from "./components/SurveyReportForm";

export default function Home() {
  return (
    <Box w="full" minH="100vh" bg="gray.50" >
      <Flex
        as="nav"
        w="full"
        p={4}
        bg="white"
        boxShadow="md"
        justifyContent="center"
        alignItems="center"
      >
        <Center><Heading>Asset Management System</Heading></Center>
      </Flex>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        p={4}
        w="full"
      >
        <Tabs isFitted variant="enclosed" w="full" minW="400px" mx="auto">
          <TabList mb={4}>
            <Tab>Download Cleaning Report</Tab>
            <Tab>Download Survey Report</Tab>
          </TabList>
          <TabPanels w="full" minW="400px">
            <TabPanel>
              <DateRangeForm />
            </TabPanel>
            <TabPanel>
              <SurveyReportForm />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Box>
  );
}
