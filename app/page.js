import Image from "next/image";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

export default function Home() {
  return (
    <div style={{backgroundColor: '#F2F2F2'}} className="background min-h-screen min-w-screen text-black flex flex-col items-center justify-center">
      <p className="text-3xl mb-5">Online Driving Assessment<br />and Licensing System</p> <br /> <br /> By <a href="http://github.com/mehulambastha">Mehul Ambastha</a><br /><br />
      <p>
        <Button variant="contained" color="success">
          Take me in!
        </Button>
      </p>
    </div>
  );
}
