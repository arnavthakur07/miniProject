import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import "./InfoBox.css";


export default function InfoBox({info}) {
    const INIT_URL = "https://images.unsplash.com/photo-1580049904360-a9c3b79f86ff?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGR1c3R5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";

   const HOT_URL="https://images.unsplash.com/photo-1447601932606-2b63e2e64331?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGhvdHxlbnwwfHwwfHx8MA%3D%3D";
   const COLD_URL="https://images.unsplash.com/photo-1477468572316-36979010099d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZHxlbnwwfHwwfHx8MA%3D%3D";
   const RAIN_URL="https://images.unsplash.com/photo-1686307118114-9d17bc765270?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHJhaW5peXxlbnwwfHwwfHx8MA%3D%3D";

    return(
        
    <div className="InfoBox">
        
        <div className='cardContainer'>
         <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80 ? RAIN_URL : (info.temp>15) ? HOT_URL: COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
        </Typography>
        <Typography variant="body2" color="textSecondary" component={"span"}>
        <p>Temperature = {info.temp}&deg;c</p>
         <p>Humidty = {info.humidity}</p>
         <p>Min Temp={info.tempMin}&deg;c</p>
         <p>Max Temp={info.tempMax}&deg;c</p>
          <p>The Weather can be described as {info.feelsLike} feels like {info.feelsLike}&deg;c</p>
        </Typography>
      </CardContent>
      
    </Card>

        
</div>
</div>
)
}