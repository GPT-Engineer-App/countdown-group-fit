import { Box, Button, Container, Flex, Heading, Image, Stack, Text, VStack, Input, useToast, List, ListItem, ListIcon, Badge } from "@chakra-ui/react";
import { FaPlus, FaTrophy, FaUsers, FaRunning } from "react-icons/fa";
import { useState } from "react";

const Index = () => {
  const [groups, setGroups] = useState([]);
  const [groupName, setGroupName] = useState("");
  const toast = useToast();

  const handleCreateGroup = () => {
    if (groupName === "") {
      toast({
        title: "Error",
        description: "Group name cannot be empty",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
      return;
    }
    setGroups([...groups, groupName]);
    setGroupName("");
    toast({
      title: "Group Created",
      description: `Group "${groupName}" has been created successfully!`,
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  const eventDate = new Date("August 19, 2023 00:00:00");
  const today = new Date();
  const timeLeft = Math.ceil((eventDate - today) / (1000 * 60 * 60 * 24));

  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={8}>
        <Heading as="h1" size="2xl">
          Middnatsloppet Training App
        </Heading>
        <Image src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxuaWdodCUyMHJ1bm5pbmclMjBldmVudHxlbnwwfHx8fDE3MTM3MzA3NTJ8MA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="md" />

        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <Heading as="h2" size="lg">
            Countdown to Event
          </Heading>
          <Text fontSize="2xl">{timeLeft} days left until the event!</Text>
        </Box>

        <Flex align="center" justify="space-between" w="full">
          <Box p={5} shadow="md" borderWidth="1px" borderRadius="md" flex="1" mr={2}>
            <Heading as="h2" size="lg">
              Create a Group
            </Heading>
            <Flex mt={4}>
              <Input placeholder="Enter group name" value={groupName} onChange={(e) => setGroupName(e.target.value)} />
              <Button leftIcon={<FaPlus />} colorScheme="blue" ml={4} onClick={handleCreateGroup}>
                Create
              </Button>
            </Flex>
          </Box>

          <Box p={5} shadow="md" borderWidth="1px" borderRadius="md" flex="1" ml={2}>
            <Heading as="h2" size="lg">
              Groups
            </Heading>
            <List spacing={3}>
              {groups.map((group, index) => (
                <ListItem key={index}>
                  <ListIcon as={FaUsers} color="green.500" />
                  {group}
                </ListItem>
              ))}
            </List>
          </Box>
        </Flex>

        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <Heading as="h2" size="lg">
            Achievements
          </Heading>
          <Stack mt={4} direction="row" spacing={4}>
            <Badge colorScheme="green" p={2} borderRadius="md">
              <FaTrophy /> 100 KM Run
            </Badge>
            <Badge colorScheme="blue" p={2} borderRadius="md">
              <FaTrophy /> 5K in 20 min
            </Badge>
          </Stack>
        </Box>

        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <Heading as="h2" size="lg">
            Leaderboard
          </Heading>
          <List spacing={3}>
            <ListItem>
              <ListIcon as={FaRunning} color="purple.500" />
              John Doe - 120 KM
            </ListItem>
            <ListItem>
              <ListIcon as={FaRunning} color="purple.500" />
              Jane Smith - 110 KM
            </ListItem>
          </List>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
