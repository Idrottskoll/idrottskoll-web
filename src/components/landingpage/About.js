import React, { Component } from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';

export default class About extends Component {
  render() {
    return (
      <div className="bg-light-grey tm-40">
        <Grid>
          <Row className="bm-20 tm-20">
            <Col md={5}>
              <Image className="about-image" src={require("../../images/joakim-monterar.png")} />
            </Col>
            <Col md={7} className="tp-20 bp-10 about-info">
              <h2>Om Idrottskoll</h2>
              <p>
                Idrottskoll grundades 2014, med idé om att alla skall kunna utvecka sin idrott med hjälp av video. Idag använder elitspelare och top klubbar dagligen video analysering för att förbättra deras prestationer. Både genom hitta vad man kan förbättra i sitt spel, men även plocka ut de positiva sekvenserna ur en matchen eller träning.
                <br></br><br></br>
                Idrottskoll skapades för alla, med grund idén om att även kalle 5 år skall både ha råd och möjlighet att analysera sina match och träningar. Tänk om alla som sattsar på sin idrott kan ha tillgång till material som annars bara elitspelare har tillgång till. Tänk på hur mycket fortare man kan utvecklas.
                <br></br><br></br>
                I systemet kan man på ett snabbt och enkelt sätt spela in sina matcher och träningar för att efteråt analysera dem. Man kan antingen streama matchen från hemsidan eller ladda ner den som en fil för att lägga in i externa analys program. Idrottskoll erbjuder även live streamning från utvalda event och turneringar.
              </p>
            </Col>
          </Row>
        </Grid>
      </div>

    );
  }
}
