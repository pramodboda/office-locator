import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import DevicesRoundedIcon from '@mui/icons-material/DevicesRounded';
import EdgesensorHighRoundedIcon from '@mui/icons-material/EdgesensorHighRounded';
import ViewQuiltRoundedIcon from '@mui/icons-material/ViewQuiltRounded';


const officeLocations = {
    'type': 'FeatureCollection',
    'features': [
      {
        'type': 'Feature',
        'geometry': {
          'type': 'Point',
          'coordinates': [-77.034084142948, 38.909671288923]
        },
        'properties': {
            "id":0,
          'phoneFormatted': '(202) 234-7336',
          'phone': '2022347336',
          'address': '1471 P St NW',
          'city': 'Hyderabad',
          'country': 'India',
          'crossStreet': 'at 15th St NW',
          'postalCode': '20005',
          'state': 'D.C.'
        }
      },
      {
        'type': 'Feature',
        'geometry': {
          'type': 'Point',
          'coordinates': [-77.049766, 38.900772]
        },
        'properties': {
            "id":1,
          'phoneFormatted': '(202) 507-8357',
          'phone': '2025078357',
          'address': '2221 I St NW',
          'city': 'Navi Mumbai',
          'country': 'India',
          'crossStreet': 'at 22nd St NW',
          'postalCode': '20037',
          'state': 'D.C.'
        }
      },
      {
        'type': 'Feature',
        'geometry': {
          'type': 'Point',
          'coordinates': [-77.043929, 38.910525]
        },
        'properties': {
            "id":2,
          'phoneFormatted': '(202) 387-9338',
          'phone': '2023879338',
          'address': '1512 Connecticut Ave NW',
          'city': 'Bengaluru',
          'country': 'India',
          'crossStreet': 'at Dupont Circle',
          'postalCode': '20036',
          'state': 'D.C.'
        }
      },
      {
        'type': 'Feature',
        'geometry': {
          'type': 'Point',
          'coordinates': [-77.0672, 38.90516896]
        },
        'properties': {
            "id":3,
          'phoneFormatted': '(202) 337-9338',
          'phone': '2023379338',
          'address': '3333 M St NW',
          'city': 'Pune',
          'country': 'India',
          'crossStreet': 'at 34th St NW',
          'postalCode': '20007',
          'state': 'D.C.'
        }
      },
      {
        'type': 'Feature',
        'geometry': {
          'type': 'Point',
          'coordinates': [-77.002583742142, 38.887041080933]
        },
        'properties': {
            "id":4,
          'phoneFormatted': '(202) 547-9338',
          'phone': '2025479338',
          'address': '221 Pennsylvania Ave SE',
          'city': 'Kolkata',
          'country': 'India',
          'crossStreet': 'btwn 2nd & 3rd Sts. SE',
          'postalCode': '20003',
          'state': 'D.C.'
        }
      },
      {
        'type': 'Feature',
        'geometry': {
          'type': 'Point',
          'coordinates': [-76.933492720127, 38.99225245786]
        },
        'properties': {
            "id":5,
          'address': '8204 Baltimore Ave',
          'city': 'Chennai',
          'country': 'India',
          'postalCode': '20740',
          'state': 'MD'
        }
      },
     


    ]
  };



const items = [
  {
    icon: <ViewQuiltRoundedIcon />,
    title: 'Dashboard',
    description:
      'This item could provide a snapshot of the most important metrics or data points related to the product.',
    imageLight: 'url("/static/images/templates/templates-images/dash-light.png")',
    imageDark: 'url("/static/images/templates/templates-images/dash-dark.png")',
  },
  {
    icon: <EdgesensorHighRoundedIcon />,
    title: 'Mobile integration',
    description:
      'This item could provide information about the mobile app version of the product.',
    imageLight: 'url("/static/images/templates/templates-images/mobile-light.png")',
    imageDark: 'url("/static/images/templates/templates-images/mobile-dark.png")',
  },
  {
    icon: <DevicesRoundedIcon />,
    title: 'Available on all platforms',
    description:
      'This item could let users know the product is available on all platforms, such as web, mobile, and desktop.',
    imageLight: 'url("/static/images/templates/templates-images/devices-light.png")',
    imageDark: 'url("/static/images/templates/templates-images/devices-dark.png")',
  },
];

export default function OfficeLocator() {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);

  const handleItemClick = (index) => {
    setSelectedItemIndex(index);
    console.log(selectedItemIndex)
  };

  const selectedFeature = items[selectedItemIndex];
  

  return (
    <Container id="features" sx={{ py: { xs: 8, sm: 16 } }}>
      <Grid container spacing={6}>
        
        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: { xs: 'none', sm: 'flex' }, width: '100%' }}
        >
          <Card
            variant="outlined"
            sx={{
              height: '100%',
              width: '100%',
              display: { xs: 'none', sm: 'flex' },
              pointerEvents: 'none',
            }}
          >
            <Box
              sx={{
                m: 'auto',
                width: 420,
                height: 500
              }}
            >{officeLocations.features[selectedItemIndex].properties.city}</Box>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <div>
            <Typography component="h2" variant="h4" color="text.primary">
              Our Locations
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ mb: { xs: 2, sm: 4 } }}
            >
              Here you can provide a brief overview of the key features of the
              product. For example, you could list the number of features, the types
              of features, add-ons, or the benefits of the features.
            </Typography>
          </div>

          {/* Mobile - start */}
          <Grid container item gap={1} sx={{ display: { xs: 'auto', sm: 'none' } }}>
            {officeLocations.features.map((location) => (
              <Chip
                key={location.properties.id}
                label={location.properties.city}
                onClick={() => handleItemClick(location.properties.id)}
                sx={{
                  borderColor: (theme) => {
                    if (theme.palette.mode === 'light') {
                      return selectedItemIndex === location.properties.id ? 'primary.light' : '';
                    }
                    return selectedItemIndex === location.properties.id ? 'primary.light' : '';
                  },
                  background: (theme) => {
                    if (theme.palette.mode === 'light') {
                      return selectedItemIndex === location.properties.id ? 'none' : '';
                    }
                    return selectedItemIndex === location.properties.id ? 'none' : '';
                  },
                  backgroundColor: selectedItemIndex === location.properties.id ? 'primary.main' : '',
                  '& .MuiChip-label': {
                    color: selectedItemIndex === location.properties.id ? '#fff' : '',
                  },
                }}
              />
            ))}
          </Grid>
          
          <Box
            component={Card}
            variant="outlined"
            sx={{
              display: { xs: 'auto', sm: 'none' },
              mt: 4,
            }}
          >
            <Box
              sx={{
                
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: 280,
              }}
            />
            <Box sx={{ px: 2, pb: 2 }}>
              <Typography color="text.primary" variant="body2" fontWeight="bold">
                {location.city}
              </Typography>
              <Typography color="text.secondary" variant="body2" sx={{ my: 0.5 }}>
                {location.address}
              </Typography>
              <Link
                color="primary"
                variant="body2"
                fontWeight="bold"
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  '& > svg': { transition: '0.2s' },
                  '&:hover > svg': { transform: 'translateX(2px)' },
                }}
              >
                <span>Learn more</span>
                <ChevronRightRoundedIcon
                  fontSize="small"
                  sx={{ mt: '1px', ml: '2px' }}
                />
              </Link>
            </Box>
          </Box>
          {/* Mobile - end */}
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="flex-start"
            spacing={2}
            useFlexGap
            sx={{ width: '100%', display: { xs: 'none', sm: 'flex' } }}
          >
            {officeLocations.features.map((location , index) => (
              <Card
                key={location.properties.id}
                variant="outlined"
                component={Button}
                onClick={() => handleItemClick(location.properties.id)}
                sx={{
                  p: 3,
                  height: 'fit-content',
                  width: '100%',
                  background: 'none',
                  backgroundColor:
                    selectedItemIndex === location.properties.id ? 'action.selected' : undefined,
                  borderColor: (theme) => {
                    if (theme.palette.mode === 'light') {
                      return selectedItemIndex === location.properties.id
                        ? 'primary.light'
                        : 'grey.200';
                    }
                    return selectedItemIndex === location.properties.id ? 'primary.dark' : 'grey.800';
                  },
                }}
              >
                <Box
                  sx={{
                    width: '100%',
                    display: 'flex',
                    textAlign: 'left',
                    flexDirection: { xs: 'column', md: 'row' },
                    alignItems: { md: 'center' },
                    gap: 2.5,
                  }}
                >
                  <Box
                    sx={{
                      color: (theme) => {
                        if (theme.palette.mode === 'light') {
                          return selectedItemIndex === index
                            ? 'primary.main'
                            : 'grey.300';
                        }
                        return selectedItemIndex === index
                          ? 'primary.main'
                          : 'grey.700';
                      },
                    }}
                  >
                    icon
                  </Box>
                  <Box sx={{ textTransform: 'none' }}>
                    <Typography
                      color="text.primary"
                      variant="body2"
                      fontWeight="bold"
                    >
                      {location.properties.city}
                      <br/>
                      {location.properties.address}
                    </Typography>
                    <Typography
                      color="text.secondary"
                      variant="body2"
                      sx={{ my: 0.5 }}
                    >
                      {/* {description} */}
                    </Typography>
              
                  </Box>
                </Box>
              </Card>
            ))}
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}