import { Box, Card, CardMedia, Table, TableBody, TableCell, TableContainer, TableRow, Typography, createTheme, makeStyles, useMediaQuery, useTheme } from '@mui/material';
import { useInView } from 'react-intersection-observer';
import Item from '../../app/components/BoxItem';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Carousel from 'react-material-ui-carousel';
import './HomePage.css'

function createData(
  name: string,
  details: string
) {
  return { name, details };
}

const rows1 = [
  createData('მანქანის ზომა', '4006*1765*1550'),
  createData('წონა', '1348 კგ'),
  createData('საბარგულის ტევადობა', '295 ლ'),
  createData('ძრავის სიმძლავრე', '60 კვტ'),
  createData('Motor Peak Torque', '130 ნ·მ'),
  createData('საბურავის ზომა', '205/60 R16'),
  createData('საჭის სისტემა', 'ელექტრო'),
];

const rows2 = [
  createData('WLTP მანძილი', '401 კმ'),
  createData('აჩქარება', '7.7 წმ 0-100 კმ/სთ'),
  createData('მაქს. სიჩქარე', '102 კმ/სთ'),
  createData('კარები', '4/5'),
  createData('წამყვანი თვლები', 'წინა'),
  createData('ძრავის ტიპი', 'ელექტრო'),
  createData('ბატარეის ტევადობა', '39.4 კვტ·სთ'),
];

const rows3 = [
  createData('ABS + EBD სისტემა', ''),
  createData('Cruise Control', ''),
  createData('ESC Electronic Stability Control', ''),
  createData('Reserving radar', ''),
  createData('უკანა ხედვის კამერა', ''),
  createData('ჭკვიანი გასაღები', ''),
  createData('საბურავის წნევის მონიტორინგის სისტემა', ''),
];

export default function HomePage() {

  const { ref, inView, entry } = useInView({
  });

  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 425,
        sm: 768,
        md: 1024,
        lg: 1440,
        xl: 1920
      },
    },
  });
  
  const isMatchLG = useMediaQuery(theme.breakpoints.down('lg'))

  const isMatchMD = useMediaQuery(theme.breakpoints.down('md'))

  const isMatchSM = useMediaQuery(theme.breakpoints.down('sm'))

  const isMatchXS = useMediaQuery(theme.breakpoints.down('xs'))
  
  // Subset of props, to illustrate the idea.
  const config1 = isMatchSM ? {fontSize: '2.5rem', margin: 0} : (isMatchMD ? {fontSize: '3.5rem', margin: 0} : {fontSize: '6rem', margin: 0});

  const config1_2 = isMatchSM ? {fontSize: '2.5rem', margin: '0 0 0 2rem'} : (isMatchMD ? {fontSize: '3.5rem', margin: 0} : {fontSize: '6rem', margin: 0});

  const config2 = isMatchSM ? {fontSize: '1rem', margin: '1.7rem 0 0 8px'} : (isMatchMD ? {fontSize: '1.5rem', margin: '2.5rem 0 0 8px'} : {fontSize: '2rem', margin: '4rem 0 0 1rem'});

  const config3 = isMatchSM ? {fontSize: '1rem', margin: '4.8rem 0 0 -6rem'} : (isMatchMD ? {fontSize: '1.2rem', margin: '4.8rem 0 0 -8rem'} : {fontSize: '1.2rem', margin: '7rem 0 0 -10rem'});

  const config3_2 = isMatchSM ? {fontSize: '1rem', margin: '4.8rem 0 0 -8rem'} : (isMatchMD ? {fontSize: '1.2rem', margin: '4.8rem 0 0 -8rem'} : {fontSize: '1.2rem', margin: '7rem 0 0 -10rem'});

  const config4 = isMatchSM ? {padding: "10% 1rem 0 1rem", fontSize: "1.3rem", textAlign: 'center'} : {padding: "10% 0 0 3rem", fontSize: "1.3rem", textAlign: 'center'};

  const config5 = isMatchXS ? {padding: "0", fontSize: "1.3rem", textAlign: "center", position: 'absolute', top: '55%', minWidth: '40%'} : (isMatchSM ? {padding: "0", fontSize: "1.3rem", textAlign: "center", position: 'absolute', top: '75%', minWidth: '40%'} : {padding: "6% 2rem 0 1rem", fontSize: "1.3rem", textAlign: "center", position: 'static', top: '0', minWidth: '40%'});
  
  const config6 = isMatchSM ? {width: '90%', display: 'flex', flexDirection: 'column', marginTop: '7rem'} : {width: '90%', display: 'flex', flexDirection: 'row', marginTop: '7rem'};

  const config7 = isMatchSM ? {width: '90%', display: 'flex', flexDirection: 'column', margin: '7rem auto 14rem auto', position: 'relative', top: '5rem'} : {width: '90%', display: 'flex', flexDirection: 'row', margin: '7rem 0 0 0', position: 'static', top: 0};

  const carSpecsBreafBox = isMatchSM ? {display: 'flex', justifyContent: 'space-evenly', flexDirection: 'column', p: 1, m: 1, position: 'relative', top: '15rem', margin: 0, alignItems: 'center'} : (isMatchMD ? { display: 'flex', justifyContent: 'space-evenly', flexDirection: 'row', p: 1, m: 1, position: 'relative', top: '30rem', margin: 0, alignItems: 'none'} : {display: 'flex', justifyContent: 'space-evenly', flexDirection: 'row', p: 1, m: 1, position: 'relative', top: '75vh', margin: 0, alignItems: 'none'});
  
  const carSpecsBreafCard = isMatchSM ? {backgroundColor: 'rgb(38, 38, 38);', minHeight: '42rem', width: '100%'} : (isMatchMD ? {backgroundColor: 'rgb(38, 38, 38);', minHeight: '650px', width: '100%'} : {backgroundColor: 'rgb(38, 38, 38);', minHeight: '100vh', width: '100%'});

  const carSpecsBreafCardMedia = isMatchSM ? {width: '100%', minHeight: '10rem', height: '15rem'} : (isMatchMD ? {width: '100%', minHeight: '30rem'} : {width: '100%', minHeight: '75vh'});

  const specsText1 = isMatchXS ? {fontSize: '1.5rem', margin: '3rem 0 2rem 0'} : (isMatchSM ? {fontSize: '2rem', margin: '3rem 0 2rem 0'} : {fontSize: '1.8rem', margin: '3rem 0 2rem 0'});

  const mainParametersBox = isMatchMD ? {width: '100%', display: 'flex', flexDirection:'column', justifyContent: 'space-evenly'} : {width: '100%', display: 'flex', flexDirection:'row', justifyContent: 'space-evenly'};

  const mainParametersTable = isMatchMD ? {width: '100%'} : {width: '30%'};

  return(
        <>
            <div style={{backgroundColor:"#262626", color: 'white'}}>
                <Card
                  className="Card1"
                  >
                  <CardMedia
                  image='/images/ge1.webp'
                  className="CardMedia1"
                  >
                  <Box
                    sx={{
                      display: 'flex',
                      p: 1,
                      m: 1,
                      paddingTop: '5%',
                      margin: 0
                    }}
                  >
                    <Item sx={{
                      display: 'flex',
                      flexDirection: 'row'
                    }}>
                    <p
                      className='GeText'
                    >GEOMETRY | E</p>
                    </Item>
                    </Box>
                  </CardMedia>
                </Card>
                <div className='rangeDiv'>
                  <div
                  ref={ref}
                  style={{
                    opacity: inView ? 1 : 0,
                    translate: inView ? "none" : "0 5rem",
                    transition: "600ms ease-in-out",
                  }}>
                    <p className='rangeText1'>მანძილი</p>
                    <p className='rangeText2'>წამყვანი სამი სიმძლავრის ტექნოლოგიით GEOMETRY E ადვილად უმკლავდება მანქანის სხვადასხვა სცენარს, ქმნის არაჩვეულებრივ ხანგრძლივ ბატარეას და მართვის დიაპაზონს.</p>
                  </div>
                </div>
                <Card
                  sx={carSpecsBreafCard}
                >
                  <CardMedia
                    image='/images/ge2.webp'
                    sx={carSpecsBreafCardMedia}
                  >
                  <Box
                    sx={carSpecsBreafBox}
                  >
                    <Item sx={{
                      display: 'flex',
                      flexDirection: 'row',
                    }}>
                      <Typography
                        sx={config1}
                      >7.7</Typography>
                      <Typography
                        sx={config2}>წამი</Typography>
                      <Typography
                        sx={config3}
                      >0-100 კმ/სთ</Typography>
                    </Item>
                    <Item
                    sx={{
                      display: 'flex',
                      flexDirection: 'row'
                    }}>
                      <Typography
                        sx={config1}
                      >401</Typography>
                      <Typography
                      sx={config2}
                      >კმ</Typography>
                      <Typography
                      sx={config3}
                      >WLTP მანძილი</Typography>
                    </Item>
                    <Item
                    sx={{
                      display: 'flex',
                      flexDirection: 'row'
                    }}>
                      <Typography
                        sx={config1_2}
                      >39</Typography>
                      <Typography
                      sx={config2}
                      >კვტ·სთ</Typography>
                      <Typography
                      sx={config3_2}
                      >ბატარეის ტევადობა</Typography>
                    </Item>
                  </Box>
                  </CardMedia>
                </Card>
                <Box
                  margin='auto'
                  sx={config6}
                >
                  <img src='/images/ge13.jpg' className='carDetails1'/>
                  <Typography
                    sx={config4}
                  >
                    პლატინუმის Super Fast დამტენით, ბატარეის 80%-ის(320 კმ) დატენვას მხოლოდ 42 წუთი სჭირდება.
                  </Typography>
                </Box>
                <Box
                  margin='auto'
                  sx={config7}
                >
                  <Typography
                    sx={config5}
                  >
                    მაღალი ეფექტურობის სამი-ერთში ელექტრული წამყვანი სისტემა მნიშვნელოვნად ამცირებს ნაწილების მოცულობას და რაოდენობას.
                  </Typography>
                  <img src='/images/ge10.jpg' className='carDetails2'/>
                </Box>
                <Box
                  margin='auto'
                  sx={config6}
                >
                  <img src='/images/ge11.jpg' className='carDetails1'/>
                  <Typography
                    sx={config4}
                  >
                    მაღალი სიმკვრივის და დიდი ტევადობის ბატარეა სრულ ენერგიას აწვდის GEOMETRY E-ს.
                  </Typography>
                </Box>
                <Typography 
                  sx={{
                    fontSize: '3rem',
                    margin: '7rem 0 1rem 0'
                  }}
                  align='center'
                >ინტერიერი</Typography>
                <Carousel
                  navButtonsAlwaysVisible
                  interval={7000}
                  animation={"slide"}
                  duration={1000}
                  sx={{
                    maxWidth: '90%',
                    margin: 'auto'
                  }}
                >
                  <div>
                    <img src='/images/ge8.webp' style={{display: 'block', width: '100%', maxHeight: 850}}/>
                  </div>
                  <div>
                    <img src='/images/ge9.webp' style={{display: 'block', width: '100%', maxHeight: 850}}/>
                  </div>
                  <div>
                    <img src='/images/ge6.webp' style={{display: 'block', width: '100%', maxHeight: 850}}/>
                  </div>
                  <div>
                    <img src='/images/ge7.webp' style={{display: 'block', width: '100%', maxHeight: 850}}/>
                  </div>
                  <div>
                    <img src='/images/ge5.webp' style={{display: 'block', width: '100%', maxHeight: 850}}/>
                  </div>
                </Carousel>
                <img src='/images/ge3.webp' style={{display: 'block', width: '90%', margin:'auto', marginTop:'7rem'}}/>
                <Box
                  sx={mainParametersBox}
                >
                <TableContainer 
                  sx={mainParametersTable}
                >
                <Typography 
                  sx={specsText1}
                  align='center'
                >ძირითადი პარამეტრები</Typography>
                  <Table aria-label="simple table">
                    <TableBody>
                      {rows1.map((row) => (
                        <TableRow
                          key={row.name}
                          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                          <TableCell component="th" scope="row" sx={{color: 'white', fontSize: '1.2rem'}}>
                            {row.name}
                          </TableCell>
                          <TableCell align="right"  sx={{color: 'white', fontSize: '1.1rem'}}>{row.details}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
                <TableContainer 
                  sx={mainParametersTable}
                >
                <Typography 
                  sx={specsText1}
                  align='center'
                >მოტორული სისტემა</Typography>
                  <Table aria-label="simple table">
                    <TableBody>
                      {rows2.map((row) => (
                        <TableRow
                          key={row.name}
                          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                          <TableCell component="th" scope="row" sx={{color: 'white', fontSize: '1.2rem'}}>
                            {row.name}
                          </TableCell>
                          <TableCell align="right"  sx={{color: 'white', fontSize: '1.1rem'}}>{row.details}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
                <TableContainer 
                  sx={mainParametersTable}
                >
                <Typography 
                  sx={specsText1}
                  align='center'
                >ჭკვიანი კომპონენტები</Typography>
                  <Table aria-label="simple table">
                    <TableBody>
                      {rows3.map((row) => (
                        <TableRow
                          key={row.name}
                          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                          <TableCell component="th" scope="row" sx={{color: 'white', fontSize: '1.2rem'}}>
                            {row.name}
                          </TableCell>
                          <TableCell align="right"  sx={{color: 'white', fontSize: '1.1rem'}}>{row.details}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
                </Box>
            </div>
        </>
    )
}
