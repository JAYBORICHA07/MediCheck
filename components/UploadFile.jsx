import { Button, Card, CardContent, CardHeader, Stack, Typography } from '@mui/material'

const UploadFile = () => {
    return ( 
        <Card
          sx={{
            width: '40%'
          }}
        >
          <CardHeader title='Medi-Check' />
          <CardContent>
            <Stack direction={'column'}>
              <Typography typography='h6' sx={{ mx: 'auto', my: 2 }}>
                Upload Your Blood Report
              </Typography>
              <Button
                variant="contained"
                component="label"
                startIcon={
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m3 6.2l5 3.19l5-3.19L8 3L3 6.2m10 0l5 3.19l5-3.19L18 3l-5 3.2M3 12.55l5 3.19l5-3.19l-5-3.2l-5 3.2m15-3.2l-5 3.2l5 3.19l5-3.19l-5-3.2M8.03 16.8l5.01 3.2l5-3.2l-5-3.19l-5.01 3.19Z"/></svg>
                }
                sx={{ mx: 20 }}
                >
                Upload File
                <input
                  type="file"
                  hidden
                />
              </Button>
              <Stack direction={'column'} sx={{ m: 'auto', my: 4 }}>
                <Typography>
                  Drop Your Blood report PDF here...
                </Typography>
                <Typography sx={{ mt: 5 }}>
                  Your Health insights: Analyze, UnderStand, Thrive.
                </Typography>
              </Stack>
            </Stack>
          </CardContent>
        </Card>
     );
}
 
export default UploadFile;