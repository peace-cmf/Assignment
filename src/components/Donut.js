import React,{useState,useEffect}  from 'react';
import HighchartsReact from "highcharts-react-official"
import Highcharts  from "highcharts"
import axios from 'axios'
const url = 'http://13.233.160.184:3001/';



function Donut(props){


const [arr,setArr]=useState([])
useEffect(() => {
  
  axios.get(url).then((response) => {
    setArr(response.data);
  
  });
  
}, []);

const twittercount=[]
  const twittercumcount=[]
  const twittereng=[]
  const twittercumeng=[]
  const instagramcount=[]
  const instagramcumcount=[]
  const instagrameng=[]
  const instagramcumeng=[]
let tottwitcount=0
let tottwiteng=0
let totinstacount=0
let totinstaeng=0


  for(let i=0;i<arr.length;i++){
     const times=Date.parse(arr[i].timestamp);
     const d=times
     const twitcount=arr[i].data[0].data.count
     const twiteng=arr[i].data[0].data.engagements
     const instacount=arr[i].data[1].data.count
     const instaeng=arr[i].data[1].data.engagements
     twittercount.push([d,twitcount])
     tottwitcount+=twitcount
     twittercumcount.push([d,tottwitcount])
     twittereng.push([d,twiteng])
     tottwiteng+=twiteng
     twittercumeng.push([d,tottwiteng])

     instagramcount.push([d,instacount])
     totinstacount+=instacount
     instagramcumcount.push([d,totinstacount])
     instagrameng.push([d,instaeng])
     totinstaeng+=instaeng
     instagramcumeng.push([d,totinstaeng])


  }

 
const noncumfortwit = {
  
  title: {
    text: 'Non cummulative graph for twitter'
  },
  credits: {
    enabled: false
  },
  xAxis: {
    type: 'datetime'
},

  tooltip: {
    shared: false,
    useHTML: true,
    headerFormat: '<table><tr><th colspan="2">{point.key}</th></tr>',
    pointFormat: '<tr><td style="color: {series.color}">{series.name} </td>' +
        '<td style="text-align: right"><b>{point.y} </b></td></tr>',
    footerFormat: '</table>',

},

  series: [{
     name:'counts',
      data: twittercount,
      color: '#6f2da8',
      
      pointIntervalUnit: 'month'
     

  },
  {
    name:'engagements',
    data:twittereng
  }
]
}
const cumfortwit = {
  title: {
    text: 'cummulative graph for twitter'
  },
  credits: {
    enabled: true
  },
  series: [{
     name:'counts',
      data: twittercumcount,

  },
  {
    name:'engagements',
    data:twittercumeng
  }
]
}
const noncumforinsta= {
  title: {
    text: 'Non cummulative graph for instagrame'
  },
  series: [{
    name:'counts',
      data: instagramcount
  },{
    name:'engagements',
    data:instagrameng
  }
]
}
const cumforinsta= {
  title: {
    text: ' cummulative graph for instagram'
  },
  series: [{
    name:'counts',
      data: instagramcumcount
  },{
    name:'engagements',
    data:instagramcumeng
  }
]
}


  if(props.st==='twitter' && props.type==='noncum'){
  
    return(
      
      <div>
        
         <HighchartsReact 
    highcharts={Highcharts} 
    options={noncumfortwit} 
  />
      </div>
    )
  }
   else if(props.st==='twitter' && props.type==='cum'){
    return(
    
      <div>
      <HighchartsReact 
 highcharts={Highcharts} 
 options={cumfortwit} 
/>
   </div>
    
    )
  }
   else if(props.st==='instagram' && props.type==='noncum'){
    return(
      <div>
      <HighchartsReact 
 highcharts={Highcharts} 
 options={noncumforinsta} 
/>
   </div>
    )
  }
  else{
    return(
      <div>
      <HighchartsReact 
 highcharts={Highcharts} 
 options={cumforinsta} 
/>
   </div>
    )
  }
}






export default Donut;