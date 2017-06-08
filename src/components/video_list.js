import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) =>
{
    const VideoItems = props.video.map((video) => {
        return <VideoListItem video={video} />
    });

    return (
        <ul className="col-md-4 list-group">
            {VideoItems}
        </ul>
    );
};

export default VideoList;
