import React  from 'react';
import VideoListItems from './videoListitem';

const VideoList = (props) => {
const videoItems =  props.videos.map((video)=> {
      return <VideoListItems key={video.etag} video={video} />
    });

    return(
        <ul className="col-md-4 list-group">
         {videoItems}
        </ul>

    );

};

export default VideoList;