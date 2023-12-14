"use client";

import Image from "next/image";
import styled from "styled-components";
import { Lexend_Deca, Big_Shoulders_Display } from "next/font/google";

import iconSedans from "./icon-sedans.svg";
import iconSuvs from "./icon-suvs.svg";
import iconLuxury from "./icon-luxury.svg";

const lexendDecaFont = Lexend_Deca({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const bigShouldersDisplayFont = Big_Shoulders_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export default function PreviewCard() {
  return (
    <Wrapper className={lexendDecaFont.className}>
      <SedansColumn>
        <Icon src={iconSedans} alt="" />
        <Title className={bigShouldersDisplayFont.className}>Sedans</Title>
        <Text>
          Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your
          next road trip.
        </Text>
        <Button>Learn More</Button>
      </SedansColumn>
      <SuvsColumn>
        <Icon src={iconSuvs} alt="" />
        <Title className={bigShouldersDisplayFont.className}>Suvs</Title>
        <Text>
          Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and
          off-road adventures.
        </Text>
        <Button>Learn More</Button>
      </SuvsColumn>
      <LuxuryColumn>
        <Icon src={iconLuxury} alt="" />
        <Title className={bigShouldersDisplayFont.className}>Luxury</Title>
        <Text>
          Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and
          arrive in style.
        </Text>
        <Button>Learn More</Button>
      </LuxuryColumn>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  --bright-orange: hsl(31, 77%, 52%);
  --dark-cyan: hsl(184, 100%, 22%);
  --very-dark-cyan: hsl(179, 100%, 13%);
  display: grid;
  grid-template-columns: 1fr;

  @media (min-width: calc(600rem / 16)) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: calc(300rem / 16);
  min-height: calc(470rem / 16);
  padding: calc(50rem / 16);
`;

const SedansColumn = styled(Column)`
  background-color: var(--bright-orange);
  border-radius: 10px 10px 0 0;

  button {
    color: var(--bright-orange);
  }

  @media (min-width: calc(600rem / 16)) {
    border-radius: 10px 0 0 10px;
  }
`;

const SuvsColumn = styled(Column)`
  background-color: var(--dark-cyan);

  button {
    color: var(--dark-cyan);
  }
`;

const LuxuryColumn = styled(Column)`
  background-color: var(--very-dark-cyan);
  border-radius: 0 0 10px 10px;

  button {
    color: var(--very-dark-cyan);
  }

  @media (min-width: calc(600rem / 16)) {
    border-radius: 0 10px 10px 0;
  }
`;

const Icon = styled(Image)``;

const Title = styled.h1`
  text-transform: uppercase;
  font-size: calc(26rem / 16);
  font-weight: 700;
  margin: calc(30rem / 16) 0;
`;

const Text = styled.p`
  flex-grow: 1;
  font-size: calc(14rem / 16);
  font-weight: 400;
  opacity: 0.8;
`;

const Button = styled.button`
  align-self: flex-start;
  background-color: white;
  border: 2px solid white;
  border-radius: 25px;
  padding: calc(10rem / 16) calc(25rem / 16);
  font-size: calc(14rem / 16);
  font-weight: 700;

  &:hover {
    background-color: transparent;
    color: white;
    cursor: pointer;
  }
`;
