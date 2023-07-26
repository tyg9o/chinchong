import { Box, Button, Card, CardMedia, List, ListItem, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { useInView } from 'react-intersection-observer';
import Item from '../../app/components/BoxItem';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Carousel from 'react-material-ui-carousel';

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

    return(
        <>
            <div style={{backgroundColor:"#262626", color: 'white'}}>
                <Card>
                  <CardMedia
                    image='/images/ge1.webp'
                    sx={{
                      display: 'block',
                      width: '100%',
                      minHeight: 900,
                    }}
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
                      <Typography
                      sx={{
                        fontSize: '5rem',
                        margin: 0,
                        color: 'black'
                      }}
                      >GEOMETRY | E</Typography>
                    </Item>
                    </Box>
                  </CardMedia>
                </Card>
                <Box
                    margin="auto"
                    sx={{
                      maxWidth: "65%"
                    }}
                >
                  <div
                  ref={ref}
                  style={{
                    opacity: inView ? 1 : 0,
                    translate: inView ? "none" : "0 5rem",
                    transition: "600ms ease-in-out",
                  }}>
                    <p style={{fontSize:'2.5rem', textAlign: 'center', margin:"2rem 0 2rem 0", fontFamily:'Garamond, serif'}}>მანძილი</p>
                    <p style={{textAlign:'center', fontSize:'1.2rem', margin: "0 0 2rem 0"}}>წამყვანი სამი სიმძლავრის ტექნოლოგიით GEOMETRY E ადვილად უმკლავდება მანქანის სხვადასხვა სცენარს, ქმნის არაჩვეულებრივ ხანგრძლივ ბატარეას და მართვის დიაპაზონს.</p>
                  </div>
                </Box>
                <Card 
                  sx={{
                    minHeight: 200,
                    width: '100%'
                  }}
                >
                  <CardMedia
                    image='/images/ge2.webp'
                    sx={{
                      width: '100%'
                    }}
                  >
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-evenly',
                      p: 1,
                      m: 1,
                      paddingTop: '45%',
                      margin: 0,
                    }}
                  >
                    <Item sx={{
                      display: 'flex',
                      flexDirection: 'row',
                    }}>
                      <Typography
                      sx={{
                        fontSize: '6rem',
                         margin: 0
                      }}
                      >7.7</Typography>
                      <Typography
                      sx={{
                        fontSize: '2rem',
                         margin: '4rem 0 0 1rem'
                      }}>წამი</Typography>
                      <Typography
                      sx={{
                        fontSize: '1.2rem',
                        margin: '7rem 0 0 -10rem'
                      }}>0-100 კმ/სთ</Typography>
                    </Item>
                    <Item
                    sx={{
                      display: 'flex',
                      flexDirection: 'row'
                    }}>
                      <Typography
                      sx={{
                        fontSize: '6rem',
                         margin: 0
                      }}
                      >401</Typography>
                      <Typography
                      sx={{
                        fontSize: '2.5rem',
                         margin: '3.3rem 0 0 5px'
                      }}>კმ</Typography>
                      <Typography
                      sx={{
                        fontSize: '1.2rem',
                        margin: '7rem 0 0 -10rem'
                      }}>WLTP მანძილი</Typography>
                    </Item>
                    <Item
                    sx={{
                      display: 'flex',
                      flexDirection: 'row'
                    }}>
                      <Typography
                      sx={{
                        fontSize: '6rem',
                         margin: 0
                      }}
                      >39</Typography>
                      <Typography
                      sx={{
                        fontSize: '2rem',
                         margin: '4rem 0 0 1rem'
                      }}>კვტ·სთ</Typography>
                      <Typography
                      sx={{
                        fontSize: '1.2rem',
                        margin: '7rem 0 0 -12rem'
                      }}>ბატარეის ტევადობა</Typography>
                    </Item>
                  </Box>
                  </CardMedia>
                </Card>
                <Box
                  margin='auto'
                  sx={{
                    width: '80%',
                    display: 'flex',
                    flexDirection: 'row',
                    marginTop: '7rem'
                  }}
                >
                  <img src='/images/ge13.jpg' style={{maxWidth: '65%'}}/>
                  <Typography
                    sx={{
                      padding: "11rem 0 0 3rem",
                      fontSize: "1.3rem",
                      textAlign: 'center'
                    }}
                  >
                    პლატინუმის Super Fast დამტენით, ბატარეის 80%-ის(320 კმ) დატენვას მხოლოდ 42 წუთი სჭირდება.
                  </Typography>
                </Box>
                <Box
                  margin='auto'
                  sx={{
                    width: '80%',
                    display: 'flex',
                    flexDirection: 'row',
                    marginTop: '5rem'
                  }}
                >
                  <Typography
                    sx={{
                      padding: "10rem 3rem 0 0",
                      fontSize: "1.3rem",
                      textAlign: 'center'
                    }}
                  >
                    მაღალი ეფექტურობის სამი-ერთში ელექტრული წამყვანი სისტემა მნიშვნელოვნად ამცირებს ნაწილების მოცულობას და რაოდენობას.
                  </Typography>
                  <img src='/images/ge10.jpg' style={{maxWidth: '65%'}}/>
                </Box>
                <Box
                  margin='auto'
                  sx={{
                    width: '80%',
                    display: 'flex',
                    flexDirection: 'row',
                    marginTop: '5rem'
                  }}
                >
                  <img src='/images/ge11.jpg' style={{maxWidth: '65%'}}/>
                  <Typography
                    sx={{
                      padding: "10rem 0 0 3rem",
                      fontSize: "1.3rem",
                      textAlign: "center"
                    }}
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
                <Typography 
                  sx={{
                    fontSize: '3rem',
                    margin: '3rem 0 2rem 0'
                  }}
                  align='center'
                >ძირითადი პარამეტრები</Typography>
                <Box
                  sx={{
                    width: '100%',
                    display: 'flex',
                    flexDirection:'row',
                    justifyContent: 'space-evenly'
                  }}
                >
                <TableContainer 
                  sx={{
                    width: '30%'
                  }}
                >
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
                  sx={{
                    width: '30%'
                  }}
                >
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
                  sx={{
                    width: '30%'
                  }}
                >
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
