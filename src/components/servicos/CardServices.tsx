import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import americano1 from '../../assets/img/servicos/americano1.jpg'
import dojaca from '../../assets/img/servicos/dojaca2.jpeg'
import moicano from '../../assets/img/servicos/moicano1.jpg'

function CardServices() {
  return (
    <>
      <div className='grid grid-flow-col space-x-20'>
        <Card sx={{ maxWidth: 345, maxHeight: 550, backgroundColor: 'rgb(34,34,34)', boxShadow: '0 20px 40px rgba(0,0,0,0.4)' }}>
          <CardActionArea>
            <CardMedia
              component="img"
              sx={{ height: 250, padding: 1 }}
              image={americano1}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" sx={{ color: '#977656' }}>
                Americano
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ color: '#ffff' }}>
                O corte americano é um visual masculino com inspiração militar e laterais em degradê Também conhecido como fade hair,
                é um modelo de cabelo masculino curto que é caracterizado por suas laterais curtas e graduadas..
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card sx={{ maxWidth: 345, maxHeight: 550, backgroundColor: 'rgb(34,34,34)', boxShadow: '0 20px 40px rgba(0,0,0,0.4)' }}>
          <CardActionArea>
            <CardMedia
              component="img"
              sx={{ height: 250, padding: 1 }}
              image={dojaca}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" sx={{ color: '#977656' }}>
                Do Jaca
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ color: '#ffff' }}>
                O Corte do Jaca tem como característica um sombreado mais denso e majoritariamente o Mid Fade.
                De acordo com a barbeira Giliane Coviack, o estilo foi criado na comunidade do Jacarezinho,
                no RJ, por isso o nome Corte do Jaca.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 345, maxHeight: 550, backgroundColor: 'rgb(34,34,34)', boxShadow: '0 20px 40px rgba(0,0,0,0.4)' }}>
          <CardActionArea>
            <CardMedia
              component="img"
              sx={{ height: 250, padding: 1 }}
              image={moicano}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" sx={{ color: '#977656' }}>
                Moicano
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ color: '#ffff' }}>
                Moicano é um corte de cabelo de origem indígena que era usado pelos povos moicanos.
                O estilo caracteriza-se por possuir uma "crista" no meio da cabeça
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </>
  )
}

export default CardServices