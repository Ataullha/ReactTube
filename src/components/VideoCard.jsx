import { Link } from 'react-router-dom'
import { Typography, Card, CardContent, CardMedia } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'

import { demoThumbnailUrl, demoVideoUrl, demoChannelUrl, demoChannelTitle } from '../utils/constants'



const VideoCard = ({ video: { id: { videoId }, snippet } }) => (
    // console.log(videoId, snippet);
    <Card>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
            <CardMedia
                image={snippet?.thumbnails?.high?.url}
                alt={snippet?.title}
                sx={{
                    height: 180,
                    width: 358
                }}
            />
        </Link>
    </Card>
)

export default VideoCard