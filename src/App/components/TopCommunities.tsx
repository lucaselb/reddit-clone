import { Heading, Stack, Text, Image, Divider, Button } from "@chakra-ui/react";
import React from "react";
import styles from "./TopCommunities.module.scss";
import { RiArrowUpSFill } from "react-icons/ri";

const TopCommunities: React.FC = () => {
  return (
    <Stack direction="column" className={styles.container}>
      <Heading as="h3" fontSize="md" padding={4}>
        Top Gaming Communities
      </Heading>
      <Divider />
      <Stack direction="column">
        <Stack
          direction="row"
          pl={4}
          pr={4}
          as="a"
          align="center"
          href="https://www.reddit.com/r/MLBTheShow/"
          target="_blank"
        >
          <Text>1</Text>
          <RiArrowUpSFill fill="#46d160" />
          <Image
            src="https://styles.redditmedia.com/t5_2tjde/styles/communityIcon_r5vjtqoi2zj41.png"
            borderRadius="full"
            boxSize="32px"
            borderColor="#D7DADC"
          ></Image>
          <Text>r/MLBTheShow</Text>
        </Stack>
        <Divider />
        <Stack
          direction="row"
          pl={4}
          pr={4}
          as="a"
          align="center"
          href="https://www.reddit.com/r/Overwatch/"
          target="_blank"
        >
          <Text>2</Text>
          <RiArrowUpSFill fill="#46d160" />
          <Image
            src="https://styles.redditmedia.com/t5_2u5kl/styles/communityIcon_6ygax782f5201.png"
            borderRadius="full"
            boxSize="32px"
            borderColor="#D7DADC"
          ></Image>
          <Text>r/Overwatch</Text>
        </Stack>
        <Divider />
        <Stack
          direction="row"
          pl={4}
          pr={4}
          as="a"
          align="center"
          href="https://www.reddit.com/r/MortalKombat/"
          target="_blank"
        >
          <Text>3</Text>
          <RiArrowUpSFill fill="#46d160" />
          <Image
            src="https://styles.redditmedia.com/t5_2robf/styles/communityIcon_g892rplh6k931.png"
            borderRadius="full"
            boxSize="32px"
            borderColor="#D7DADC"
          ></Image>
          <Text>r/MortalKombat</Text>
        </Stack>
        <Divider />
        <Stack
          direction="row"
          pl={4}
          pr={4}
          as="a"
          align="center"
          href="https://www.reddit.com/r/Stellaris/"
          target="_blank"
        >
          <Text>4</Text>
          <RiArrowUpSFill fill="#46d160" />
          <Image
            src="https://a.thumbs.redditmedia.com/wCva7t53224bPWSjDaDWLV_fh7zEOtEJMsRmye5Crx4.png"
            borderRadius="full"
            boxSize="32px"
            borderColor="#D7DADC"
          ></Image>
          <Text>r/Stellaris</Text>
        </Stack>
        <Divider />
        <Stack
          direction="row"
          pl={4}
          pr={4}
          pb={1}
          as="a"
          align="center"
          href="https://www.reddit.com/r/gaming/"
          target="_blank"
        >
          <Text>5</Text>
          <RiArrowUpSFill fill="#46d160" />
          <Image
            src="https://styles.redditmedia.com/t5_2qh03/styles/communityIcon_1isvxgkk7hw51.png?width=256&s=b2c4017083ea0176a3dd4837f6e009bbc8384f15"
            borderRadius="full"
            boxSize="32px"
            borderColor="#D7DADC"
          ></Image>
          <Text>r/Gaming</Text>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default TopCommunities;
