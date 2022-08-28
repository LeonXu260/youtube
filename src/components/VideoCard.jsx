import { Link } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia} from "@mui/material";
import { CheckCircle } from '@mui/icons-material';

const VideoCard = ({ video: { id: { videoId }, snippet } }) => {
    return (
        <Card sx={{ width: { xs: '100%', sm: '358px', md: '320px' }, boxShadow: 'none', borderRadius: 0 }}>
            <Link to={ videoId ? `/video/${videoId}` : `URL not found` }>
                <CardMedia
                    image={snippet?.thumbnails?.high?.url || `Thunbnail not found`}
                    alt={snippet?.title}
                    sx={{ width: { xs: '100%', sm: '358px', md: '320px'}, height: 180}}
                />
            </Link>
            <CardContent sx={{ backgroundColor: '#1E1E1E', height: '106px' }}>
                <Link to={ videoId ? `/video/${videoId}` : `` }>
                    <Typography variant={"subtitle1"} fontWeight={"bold"} color={"#FFF"}>
                        {snippet?.title.slice(0, 60) || `No title`}
                    </Typography>
                </Link>
                <Link to={ snippet?.channelId ? `/channel/${snippet?.channelId}` : `` }>
                    <Typography variant={"subtitle1"} fontWeight={"bold"} color={"gray"}>
                        {snippet?.channelTitle.slice(0, 60) || `No channel title`}
                        <CheckCircle sx={ { fontSize: 12, color: 'gray', ml: '5px'}} />
                    </Typography>
                </Link>
            </CardContent>
        </Card>
    )
}

export default VideoCard;