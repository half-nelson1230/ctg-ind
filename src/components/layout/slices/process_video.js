import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import ReactPlayer from 'react-player'
import { graphql } from 'gatsby'
import { RichText } from 'prismic-reactjs';

const VideoBlock = styled.div`
width: 100%;
display: grid;
grid-template-columns: repeat(4, 1fr);
@media(max-width: 1200px){
  grid-template-columns: 120px 1fr 1fr 1fr;
}
@media(max-width: 900px){
  grid-template-columns: repeat(4, 1fr);
}

@media(max-width: 750px){
  grid-template-columns: 1fr;
}
`

const Text = styled.div`
grid-column: auto / span 2;
@media(min-width: 1201px){
  grid-column: auto / span 1;
}
outline: 2px solid;
padding: 30px;
font-family: eurostile;

h3{
  margin: 0;
  font-weight: 800;
  font-size: 28px;
  margin-bottom: 10px;
}
p{
  margin: 0;

}

@media(max-width: 750px){
  padding: 15px;

  h4{
    font-size: 22px;
  }
  p{
    margin-bottom: 15px;
  }
}
`

const Video = styled.div`
outline: 2px solid;
grid-column: auto / span 2;
overflow: hidden;
position: relative;
min-width: 100%;
height: 100;
background-color: #000;
@media(min-width: 1201px){
  grid-column: auto / span 3;
}
@media(max-width: 750px){
  height: 250px;
}
`

const Filler = styled.div`
position: absolute;
top: 0; right: 0; bottom: 0; left: 0;
z-index: 20;
`

const Filler2 = styled.div`
position: absolute;
top: 0; right: 0; bottom: 0; left: 0;
z-index: 20;
outline: 2px solid;
pointer-events: none;
`


export default function ProcessVideo({ slice }) {

  const [show, toggleShow] = React.useState(false);
  const [playin, clickplay] = React.useState(true);
  const thumb = slice.primary.placeholder_image.url;
  const vid = slice.primary.video_link.embed_url;
return(
  <VideoBlock>
  <Text>
    <RichText render={slice.primary.text.raw}/>
  </Text>
  <Video className={show && 'videxpand'} >
{/*
{show && <Filler onClick={() => clickplay(!playin)}/>}
*/}
<Filler2/>
  <ReactPlayer
className={'react-player'}
url={vid}
width='100%'
height='100%'
onPlay={() => toggleShow(true)}
playing={playin}
controls='true'
light={thumb}
config={{
  youtube: {
    playerVars: { modestbranding: 1, controls: 0, }
  },
  vimeo: {
        playerOptions:{
          width: 2000,
          autoplay: 'true',
        }
      }

}}/>
  </Video>
  </VideoBlock>
)
}
