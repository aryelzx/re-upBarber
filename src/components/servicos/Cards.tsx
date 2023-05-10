import { Card, CardActionArea, CardContent, CardMedia, Typography, useMediaQuery, useTheme } from '@mui/material'
import americano1 from '../../assets/img/servicos/americano1.jpg'
import dojaca from '../../assets/img/servicos/dojaca2.jpeg'
import moicano from '../../assets/img/servicos/moicano1.jpg'

function Cards(): JSX.Element {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      <Card sx={{ maxWidth: 345, maxHeight: 442, backgroundColor: 'rgb(34,34,34)', boxShadow: '0 20px 40px rgba(0,0,0,0.4)', transition: 'all 1s ease 0s', ":hover": { transform: 'scale(1.1);' } }}>
        <CardActionArea>
          <CardMedia
            component="img"
            sx={{ height: 250, opacity: 0.8 }}
            image={americano1}
            alt="Corte de Cabelo"
          />
          <CardContent>
            <Typography gutterBottom sx={{ color: '#ECB365', fontFamily: 'Karantina', fontSize: '2.5rem', marginTop: -2 }}>
              Americano - Fade Hair
            </Typography>
            <Typography sx={{ color: '#ffff', marginTop: -2.5, fontSize: '.9rem' }}>
              O corte americano é um visual masculino com inspiração militar e laterais em degradê Também conhecido como fade hair,
              é um modelo de cabelo masculino curto que é caracterizado por suas laterais curtas e graduadas..
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card >

      <Card sx={{ maxWidth: 345, maxHeight: 442, backgroundColor: 'rgb(34,34,34)', boxShadow: '0 20px 40px rgba(0,0,0,0.4)', transition: 'all 1s ease 0s', ":hover": { transform: 'scale(1.1);' } }}>
        <CardActionArea>
          <CardMedia
            component="img"
            sx={{ height: 250, opacity: 0.8, }}
            image={dojaca}
            alt="Corte de Cabelo"
          />
          <CardContent>
            <Typography gutterBottom sx={{ color: '#ECB365', fontFamily: 'Karantina', fontSize: '2.5rem', marginTop: -2 }}>
              Do Jaca -  Mid Fade
            </Typography>
            <Typography sx={{ color: '#ffff', marginTop: -2.5, fontSize: '.9rem' }}>
              O Corte do Jaca tem como característica um sombreado mais denso e majoritariamente o Mid Fade.
              De acordo com a barbeira Giliane Coviack, o estilo foi criado na comunidade do Jacarezinho,
              no RJ, por isso o nome Corte do Jaca.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card sx={{ maxWidth: 345, height: (smDown ? 560 : 442), backgroundColor: 'rgb(34,34,34)', boxShadow: '0 20px 40px rgba(0,0,0,0.4)', transition: 'all 1s ease 0s', ":hover": { transform: 'scale(1.1);' } }}>
        <CardActionArea>
          <CardMedia
            component="img"
            sx={{ height: 250, opacity: 0.8, }}
            image={moicano}
            alt="Corte de Cabelo"
          />
          <CardContent>
            <Typography gutterBottom sx={{ color: '#ECB365', fontFamily: 'Karantina', fontSize: '2.5rem', marginTop: -2 }}>
              Moicano - Undercut
            </Typography>
            <Typography sx={{ color: '#ffff', marginTop: -2, fontSize: '1rem' }}>
              Moicano é um corte de cabelo de origem indígena que era usado pelos povos moicanos.
              O estilo caracteriza-se por possuir uma "crista" no meio da cabeça
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  )
}

export default Cards