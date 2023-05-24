

import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function App() {
let  districts =[
  {
    "id":1,
    "title":"THIRUVANANTHPURAM",
    "description": "",
   "image":"https://www.oyorooms.com/blog/wp-content/uploads/2019/06/Padmanabha-Swamy-Temple-Famous-8-places-to-visit-in-trivandrum-1.jpg" ,
   },
   {
   "id":2,
   "title":"KOTTAYAM",
   "description":"",
    
   "image":"https://irisholidays.com/keralatourism/wp-content/uploads/2021/05/Marmalade-Waterfalls.jpeg"
   },
    {
"id":3,
"title":"PATHANAMTHITTA",
"description":"",
"image":"https://static.javatpoint.com/tourist-places/images/tourist-places-in-pathanamthitta3.png"
},
{
  "id":4,
  "title":"KOLLAM",
  "description":"",
  "image":"https://t3.gstatic.com/licensed-image?q=tbn:ANd9GcS2cBIJf45tFcDuI_ledg6fZeGqePgw4E_6yA79iBEsdLgHdR0nV51USDWp6HjFoPkp"
  },

{
"id":5,
"title":"IDUKKI",
"description":"",
"image":"https://www.nativeplanet.com/img/2015/12/munnare-17-1450346343.jpg"
},
{
  "id":6,
  "title":"ERNAKULAM",
  "description":"",
  "image":"https://www.google.com/url?sa=i&url=http%3A%2F%2Ft0.gstatic.com%2Flicensed-image%3Fq%3Dtbn%3AANd9GcQa7c5bHvOduPB-A9ly6-ZtSBb3xw8wuSNS8Kfk4fVCgsZ9f75c5GMbFaEwcORG84c5&psig=AOvVaw1u6Ve8djFu0Z5CjAFM1zS1&ust=1684996181470000&source=images&cd=vfe&ved=0CA4QjRxqFwoTCLCG6p-qjf8CFQAAAAAdAAAAABAi"
  },
  {
    "id":7,
    "title":"ALAPPUZHA",
    "description":"",
    "image":"https://www.google.com/url?sa=i&url=http%3A%2F%2Ft1.gstatic.com%2Flicensed-image%3Fq%3Dtbn%3AANd9GcSUpkTmWPFBRgV6l7oixFmRq2RXrf7EyNyYffHDUcj3EZ2X-gJoYgB2CxUx0dWNnE2a&psig=AOvVaw1u6Ve8djFu0Z5CjAFM1zS1&ust=1684996181470000&source=images&cd=vfe&ved=0CA4QjRxqFwoTCLCG6p-qjf8CFQAAAAAdAAAAABAT"
    },

  {
  "id":8,
  "title":"WAYANAD",
  "description":"",
  "image":"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Blue%2C_Green_%26_White.jpg/1280px-Blue%2C_Green_%26_White.jpg"
  },
  {
    "id":9,
    "title":"MALAPPURAM",
    "description":"",
    "image":"https://www.google.com/url?sa=i&url=http%3A%2F%2Ft1.gstatic.com%2Flicensed-image%3Fq%3Dtbn%3AANd9GcQw7kD4qcls-aVNG8L7hGLf_kKlSDWExsRwhA1pwZuAaoXu9bzTm0pRPUB5hNVYVMtm&psig=AOvVaw1u6Ve8djFu0Z5CjAFM1zS1&ust=1684996181470000&source=images&cd=vfe&ved=0CA4QjRxqFwoTCLCG6p-qjf8CFQAAAAAdAAAAABAm"
    },
    {
      "id":10,
      "title":"KOZHIKODE",
      "description":"",
      "image":"https://www.google.com/url?sa=i&url=http%3A%2F%2Ft2.gstatic.com%2Flicensed-image%3Fq%3Dtbn%3AANd9GcSCNumJBcd9EedYzqkQwBZFBvP9oxgqyTdsA_WQ-cHuaL7u8xOtzide3G0tdiL3kZc4&psig=AOvVaw1u6Ve8djFu0Z5CjAFM1zS1&ust=1684996181470000&source=images&cd=vfe&ved=0CA4QjRxqFwoTCLCG6p-qjf8CFQAAAAAdAAAAABAL"
      },
      {
        "id":11,
        "title":"KANNUR",
        "description":"",
        "image":"https://assets-news.housing.com/news/wp-content/uploads/2022/09/02151040/Places-to-visit-in-Kannur-for-an-amazing-vacation10.png"
        },
        {
          "id":12,
          "title":"KASARAGOD",
          "description":"",
          "image":"https://www.google.com/url?sa=i&url=http%3A%2F%2Ft3.gstatic.com%2Flicensed-image%3Fq%3Dtbn%3AANd9GcQri-t-o3Mdc-3q3uMcpEPXfjwGOriMko59jQLAaRoIAbcPhfzhtJNuFIMAUG44eEWe&psig=AOvVaw1u6Ve8djFu0Z5CjAFM1zS1&ust=1684996181470000&source=images&cd=vfe&ved=0CA4QjRxqFwoTCLCG6p-qjf8CFQAAAAAdAAAAABAa"
          },

{
          "id":13,
          "title":"THRISSUR",
          "description":"",
          "image":"https://www.fabhotels.com/blog/wp-content/uploads/2019/05/Vadakkunnathan-Temple-Thrissur.jpg"
          },
          {
            "id":14,
            "title":"PALAKKAD",
            "description":"",
            "image":"https://www.google.com/url?sa=i&url=http%3A%2F%2Ft1.gstatic.com%2Flicensed-image%3Fq%3Dtbn%3AANd9GcQpz7zvkK-JHFjOjEmIXd1_jEHOY6dm1aRLaU8-2eIfnycj57YAWkZc07SSM_jeBKTy&psig=AOvVaw1u6Ve8djFu0Z5CjAFM1zS1&ust=1684996181470000&source=images&cd=vfe&ved=0CA4QjRxqFwoTCLCG6p-qjf8CFQAAAAAdAAAAABAe"
            },
]

  return (
    <div className = "bg-body-secondary">
    <Container className="bg-secondary" >
      <Card className="bg-dark text-white"></Card>
      <Row>
      <h1 className='text-center'> DISTRICTS IN KERALA</h1>
        {
          districts.map((item, index) => { 
            return (
        <Col sm={3} key={index} className='mt-5'>
    <Card style={{ width: '18rem', height:"350px" }} className="bg-dark text-white">
      <Card.Img variant="top" src={item.image} />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>
          {item.description}
        </Card.Text>
        <Button  variant="primary">Visit</Button>
      </Card.Body>
    </Card>
    </Col>
            )
          })
        }
    </Row>
    </Container>

  </div>
  )
      }
  

