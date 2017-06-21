import React from 'react';

const VideoListItem = (props) =>
{
    var urlYoutube = 'https://www.youtube.com/watch?v=' + props.video.id.videoId;
    return (
        <li>
            <a href={urlYoutube} alt={props.video.snippet.title}> {props.video.snippet.title} </a>
        </li>
    );
};

export default VideoListItem;
