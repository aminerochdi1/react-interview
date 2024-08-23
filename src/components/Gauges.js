import * as React from 'react';
import Stack from '@mui/material/Stack';
import { Gauge,gaugeClasses  } from '@mui/x-charts/Gauge';


export default function Gauges({likes,dislikes}) {


  return (
    <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 1, md: 3 }}>
      {/* Start[Likes] */}
      <Gauge width={100} height={100} value={likes}
      label="Likes"  sx={(theme) => ({
    [`& .${gaugeClasses.valueText}`]: {
      fontSize: 20,
      fontWeight: 'bold'
    },
    [`& .${gaugeClasses.valueArc}`]: {
      fill: '#52b202',
    },
    [`& .${gaugeClasses.referenceArc}`]: {
      fill: theme.palette.text.disabled,
    },
  })} />
    {/* End[Likes] */}

     {/* Start[Disikes] */}
      <Gauge width={100} height={100} value={dislikes}
      label="Dislikes" 
      sx={(theme) => ({
        [`& .${gaugeClasses.valueText}`]: {
          fontSize: 20,
          fontWeight: 'bold'
        },
        [`& .${gaugeClasses.valueArc}`]: {
          fill: '#FF0000',
        },
        [`& .${gaugeClasses.referenceArc}`]: {
          fill: theme.palette.text.disabled,
        },
      })}/>
      {/* End[Disikes] */}

    </Stack>
  );
}