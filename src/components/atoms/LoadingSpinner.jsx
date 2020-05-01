import styled, { keyframes } from "styled-components";
import React from "react";

export const LoadingSpinner = ({
  width = 100, 
  strokeWidth = 3,
  displayText = true,
  primaryText = "Please Wait",
  secondaryText = "This shouldn't take long..."
}) => {
  const centerCoords = width / 2;
  const mainRadius = (centerCoords - 10) - strokeWidth / 2; 
  const mainCircumference = 2 * Math.PI * mainRadius;
  const smallerRadius = mainRadius / 2;
  return (
    <OuterWrapper width={width}>
      <SpinnerWrapper width={width}>
        <StyledCircle 
            cx={centerCoords}
            cy={centerCoords}
            r={mainRadius}
            circumfrence={mainCircumference}
            strokeWidth={strokeWidth}
          />
          <StyledInnerCircle 
            cx={centerCoords}
            cy={centerCoords}
            r={smallerRadius}
          />
      </SpinnerWrapper>
      {
        displayText &&
          <TextWrapper>
            <p>{primaryText}</p>
            <p variant={"smallText"}>{secondaryText}</p>
          </TextWrapper>
      }
    </OuterWrapper>
  );
};

const rotate = (dashOffset) => keyframes`
  from {
    stroke-dashoffset: ${dashOffset};
  }

  to {
    stroke-dashoffset: 0;
  }
`;

const pulse = keyframes`
   0% {
        transform: scale(0.90);
        opacity: 0.2;
    }

    70% {
        transform: scale(1);
        opacity: 0.3;
    }

    100% {
        transform: scale(0.90);
        opacity: 0.2;
    }
  }
`;

const OuterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width:  ${({width}) => width}px; 
`;

const SpinnerWrapper = styled.svg`
  height: ${({width}) => width}px;
  width:  ${({width}) => width}px; 
`;

const StyledCircle = styled.circle`
  stroke: ${({theme}) => theme.colors.contrast};
  fill: ${({theme}) => theme.colors.light};
  stroke-width: ${({strokeWidth}) => strokeWidth};
  stroke-dasharray: ${({circumfrence}) => circumfrence};
  animation: ${({circumfrence}) => rotate(circumfrence * 4)} 3s cubic-bezier(0.81, 0.1, 0.71, 0.79) infinite;
`;

const StyledInnerCircle = styled.circle`
  fill: ${({theme}) => theme.colors.background}; 
  animation: ${pulse} 3s cubic-bezier(0.81, 0.1, 0.71, 0.79) infinite;
  animation-fill-mode: forwards;
  transform-origin: center center;
`;

const TextWrapper = styled.div`
  text-align: center;
`;
