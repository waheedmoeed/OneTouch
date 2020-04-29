import React from 'react';
import Media from './InstaMedia'
;
const MediaList = (props) => {

    const Pictures = props.images.map((image) => {
        console.log(image);
          return <img width='400px' src={image.media_url} alt="Not founded"/>
          
      })

      const Videos = props.state.videos.map((video) => {
        console.log(video);
          return <video  width="400" controls src={video.media_url} />
          
      })

// const PicItems=props.pictures.map((pic,index)=>{
//      return (
//      <PicListItem
//      pic={pic}
//      key={index}/>
//      );
//    });


    return(
      <div>
      { Pictures }
      { Videos }
    </div>
    )
  
}

export default MediaList;