import styled from 'styled-components';

export const ComponentWave = () => {
  return (
    <Wrap>
      <div className="ocean">
        <div className="wave"/>
        <div className="wave"/>
      </div>
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 100%;
  .ocean {
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    opacity: 0.5;
  }

  .wave {
    background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/85486/wave.svg) repeat-x;
    position: absolute;
    top: -19.8rem;
    width: 640rem;
    height: 19.8rem;
    opacity: 0.6;
    animation: wave 7s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite;
    transform: translate3d(0, 0, 0);
  }

  .wave:nth-of-type(2) {
    top: -16rem;
    animation: wave 7s cubic-bezier(0.36, 0.45, 0.63, 0.53) -0.125s infinite, swell 7s ease -1.25s infinite;
    opacity: 0.7;
  }

  @keyframes wave {
    0% {
      margin-left: 0;
    }
    100% {
      margin-left: -160rem;
    }
  }

  @keyframes swell {
    0%,
    100% {
      transform: translate3d(0, -2.5rem, 0);
    }
    50% {
      transform: translate3d(0, 1rem, 0);
    }
  }
`;
