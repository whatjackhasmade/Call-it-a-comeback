import styled from "styled-components"
import device from "../components/particles/MediaQueries"

export const VideoGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  margin: 0 -30px -32px;

  background-color: #744ba8;

  @media ${device.sm} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${device.md} {
    grid-template-columns: repeat(3, 1fr);
  }

  @media ${device.lg} {
    grid-template-columns: repeat(4, 1fr);
  }

  video {
    display: block;
  }
`

export default VideoGrid
