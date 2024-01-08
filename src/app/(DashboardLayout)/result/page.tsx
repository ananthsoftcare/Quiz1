"use client"
import { GetServerSideProps, NextPage } from 'next'
import { useState } from 'react'
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material'
import Loader from '../quiz/Loader'
import { IResultPageProps } from '../types'
import { useRouter } from 'next/navigation'
import prize from './prize.png'
import Image from 'next/image'
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });


const ResultPage: NextPage= () => {

  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const handleNewGame = () => {
    setLoading(true)
    router.push('/')
  }
  const optionscolumnchart: any = {
    chart: {
        height: 380,
        type: "radialBar",
    },
    series: [67],
    colors: ["#713593"],
    plotOptions: {
        radialBar: {
            startAngle: -135,
            endAngle: 135,
            track: {
                background: '#333',
                startAngle: -135,
                endAngle: 135,
            },
            dataLabels: {
                name: {
                    show: false,
                },
                value: {
                    fontSize: "25px",
                    show: true
                }
            }
        }
    },
    fill: {
        type: "gradient",
        gradient: {
            shade: "dark",
            type: "horizontal",
            gradientToColors: ["#faa917"],
            stops: [0, 100]
        }
    },
    stroke: {
        lineCap: "butt"
    },
    labels: ["Progress"]
};
const seriescolumnchart: any = [
    90
];

  return (
    <>
      <Card sx={{ textAlign: 'center', p: 3, maxWidth: '100%', backgroundColor: 'rgb(230 217 255)' }}>
        {/* <div style={{ textAlign: 'center', borderRadius: '20px', }}>
          <Image src={prize} alt="logo" height={235} width={983} style={{ borderRadius: '20px' }} />
        </div> */}
        <CardContent>
          <Typography sx={{ fontSize: 14, fontWeight: 'bold', }} color="text.secondary" gutterBottom>
            Congradulations, Krishna!
          </Typography>
          {/* <Typography variant="h6" component="h1">
            Your Score is 9 / 10 */}
          {/* Your Score is {result.replace('/', ' / ')} */}
          {/* </Typography> */}
        </CardContent>
        <Box className="rounded-bars">
          <Chart
            options={optionscolumnchart}
            series={seriescolumnchart}
            type="radialBar"
            width={"100%"}
            height="300px" />
        </Box>
        <CardActions sx={{ display: 'block' }}>
          <Button
            size="large"
            variant="contained"
            sx={{ fontWeight: 'bold', backgroundColor: '#faa917' }}
            onClick={handleNewGame}
          >
            Back to home
          </Button>
        </CardActions>
      </Card>

      <Loader loading={loading} />
    </>
  )
}

// export const getServerSideProps: GetServerSideProps = async ctx => {
//   const { result } = ctx.query

//   // if we don't received the params => redirect to home page
//   if (!Boolean(result)) {
//     return {
//       redirect: {
//         destination: '/',
//         permanent: false,
//       },
//     }
//   }

//   return {
//     props: { result },
//   }
// }

export default ResultPage
