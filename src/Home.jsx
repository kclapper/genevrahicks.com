import { StrictMode, useContext, createContext } from "react";
import { createRoot } from 'react-dom/client';

import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './Home.scss';

import Text from './components/Text';
import PageContent from './components/PageContent';

const ColorContext = createContext("white");

function Desc({ children }) {
  return <div className="d-flex">
           <div className="flex-grow-1"/>
           <Text bg='white'
                 text='dark'
                 className='border border-2 rounded p-3'
                 style={{ textAlign: "justify",
                          textIndent: "1.5em"}}>
             { children }
           </Text>
           <div className="flex-grow-1"/>
         </div>
}

function Category({ title, background, itemBackground, children }) {
  return <Col sm={4} >
           <Card className="h-100" style={{ backgroundColor: background}}>
             <Card.Body>
               <Card.Title className="text-center">
                 <h6 className="display-6">
                   { title }
                 </h6>
               </Card.Title>
               <Card.Text className="pt-2">
                 <ColorContext.Provider value={ itemBackground }>
                   { children }
                 </ColorContext.Provider>
               </Card.Text>
             </Card.Body>
           </Card>
         </Col>
}

function Item({name, background, children}) {
  const defaultBackground = useContext(ColorContext);

  let body = children;

  if (name && children) {
    body = <div className="p-1">
             <div className="lh-1">
               { name }
             </div>
             <small className="lh-1">
               { children }
             </small>
           </div>
  }

  return <div className="text-center align-middle w-100 border rounded-5 mb-1"
              style={{ backgroundColor: background || defaultBackground }}>
           { body }
         </div>
}

function Disclaimer({ title, background, children }) {
  const defaultColor = useContext(ColorContext);
  return <div>
           <p className="text-center mt-2 mb-0 pb-2">
             { title }
             <hr className="m-0" />
           </p>
           <ColorContext.Provider value={ background || defaultColor }>
             { children }
           </ColorContext.Provider>
         </div>
}

const green = "#76FF76";
const lightGreen = "#98FF98";

const yellow = "#FFFF38";
const lightYellow = "#FFFF87";

const red = "#FF8383";
const lightRed = "#FFADAD";

const blue = "blue";
const lightBlue = "lightBlue";

export default function Home() {
  return <StrictMode>
           <PageContent>
             <h1 className="display-1 text-center mb-4">
               No Buy Year
             </h1>

             <Desc>
               <p className="mb-1">
                 In 2024 I'll be doing a No-Buy-Year. This means I'll only
                 be spending money on necessities and the things that truly
                 bring me joy and fulfillment.
               </p>

               <p className="mb-0">
                 Below I've detail the things I'm allowed to buy this year. I've
                 split it up into "Green Light", "Yellow Light", and "Red Light"
                 categories. The "Green Light" section contains things I'm allowed to buy without
                 restriction. The "Yellow Light" section contains things I can buy
                 with certain restrictions. The "Red Light" section contains things
                 I'm not allowed to buy under any circumstances.
               </p>
             </Desc>

             <Container className="g-0">
               <Row className="g-0">
                 <Category title="Green Light"
                           background={ lightGreen }
                           itemBackground={ green }>
                   <Item>Healthcare</Item>
                   <Item>Pet Food</Item>
                   <Item>Spotify</Item>
                   <Item background={ lightYellow }>
                     Gym Membership
                   </Item>
                   <Item background={ lightYellow }>
                     Oportun
                   </Item>

                   <Disclaimer title="Replacements Only"
                               background={ lightYellow }>
                     <Item>Skincare</Item>
                     <Item>Cleaning Products</Item>
                     <Item>Personal Care</Item>
                     <Item>Sewing Supplies</Item>
                   </Disclaimer>
                 </Category>

                 <Category title="Yellow Light"
                           background={ lightYellow }
                           itemBackground={ yellow }>
                   <Item>Concerts</Item>
                   <Item>Yarn</Item>
                   <Item>Trips</Item>
                   <Item>New Phone</Item>
                   <Item background={ lightRed }>
                     Eating Out
                   </Item>
                   <Item background={ lightRed }>
                     KJs
                   </Item>

                   <Disclaimer title="For Moving Only" background={ lightBlue }>
                     <Item>Furniture</Item>
                     <Item>Lighting</Item>
                     <Item>Kitchen</Item>
                     <Item>Record Player</Item>
                   </Disclaimer>
                 </Category>

                 <Category title="Red Light"
                           background={ lightRed }
                           itemBackground={ red }>
                   <Item>Clothing</Item>
                   <Item>Jewelry</Item>
                   <Item>Perfume</Item>
                   <Item>Merch</Item>
                   <Item>Free Add-Ons</Item>
                   <Item>In-App Purchases</Item>
                   <Item>CD/DVD/VHS/Vinyl</Item>
                   <Item>Rocks</Item>
                   <Item>Impulse Purchases</Item>
                   <Item>Incense</Item>
                   <Item>New Subscriptions</Item>

                   <Item name="Decor" background={ lightBlue }>
                     For Moving Only
                   </Item>
                   <Item background={ lightYellow }>
                     Books
                   </Item>
                   <Item background={ lightYellow }>
                     New Supplements
                   </Item>
                 </Category>
               </Row>
             </Container>

             <div className="h-100" />

           </PageContent>
         </StrictMode>;
}

createRoot(document.getElementById('app')).render(<Home />);
