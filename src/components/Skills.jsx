import React, { Component, Fragment } from 'react'

export default class Skills extends Component {
  render() {
    return (
      <Fragment >
        <section id='skill-link'>
          <div id='skills' className='parent'>
            <section></section>
            <div id='skills-header'>
              <h1>These are <span>some skills</span> I've collected.</h1>
            </div>

            <div className='child1'>

              <table align="center">
                <tbody>
                  <img src="./images/logos/html-5.svg" alt="HTML 5" />
                  <p>HTML5</p>
                  <img src="./images/logos/css-3.svg" alt="CSS 3" />
                  <p>CSS3</p>
                  <img src="./images/logos/sass.svg" alt="SASS" />
                  <p>SASS</p>
                </tbody>

                {/* <tbody>
                  <tr><img src="./images/logos/html-5.svg" alt="HTML 5" /></tr>
                  <tr> <p>HTML5</p> </tr>
                  <tr><img src="./images/logos/css-3.svg" alt="CSS 3" /></tr>
                  <tr><p>CSS3</p></tr>
                  <tr><img src="./images/logos/sass.svg" alt="SASS" /></tr>
                  <tr><p>SASS</p></tr>
                </tbody> */}

              </table>

            </div>

            <div className='child2'>

              <table align="center">
                <tbody>
                  <img src="./images/logos/jquery.svg" alt="jquery" />
                  <p>HTML5</p>
                  <img src="./images/logos/bootstrap.svg" alt="Bootstrap" />
                  <p>CSS3</p>
                  <img src="./images/logos/react.svg" alt="React" />
                  <p>SASS</p>
                </tbody>

                {/* <tbody>
                  <tr><img src="./images/logos/jquery.svg" alt="jquery" /></tr>
                  <tr> <p>HTML5</p> </tr>
                  <tr><img src="./images/logos/bootstrap.svg" alt="Bootstrap" /></tr>
                  <tr><p>CSS3</p></tr>
                  <tr><img src="./images/logos/react.svg" alt="React" /></tr>
                  <tr><p>SASS</p></tr>
                </tbody> */}

              </table>

            </div>

            <div className='child3'>


              <table align="center">
                <img src="./images/logos/javascript.svg" alt="Javascript" />
                <p>Javascript</p>
                <img src="./images/logos/nodejs.svg" alt="Nodejs" />
                <p>Node.js</p>
                <img src="./images/logos/express.svg" alt="express" />
                <p>Express.js</p>
              </table>

              {/* <table align="center">
                <tr><img src="./images/logos/javascript.svg" alt="Javascript" /></tr>
                <tr> <p>Javascript</p> </tr>
                <tr><img src="./images/logos/nodejs.svg" alt="Nodejs" /></tr>
                <tr><p>Node.js</p></tr>
                <tr><img src="./images/logos/express.svg" alt="express" /></tr>
                <tr><p>Express.js</p></tr>
              </table> */}

            </div>

            <div className='child4'>

              <table align="center">
                <img src="./images/logos/mongodb.svg" alt="mongodb" />
                <p>MongoDB</p>
                <img src="./images/logos/mongoose.svg" alt="mongoose" />
                <p>Mongoose</p>
                <img src="./images/logos/ajax.svg" alt="ajax" />
                <p>AJAX</p>
              </table>


              {/* <table align="center">
                <tr><img src="./images/logos/mongodb.svg" alt="mongodb" /></tr>
                <tr> <p>MongoDB</p> </tr>
                <tr><img src="./images/logos/mongoose.svg" alt="mongoose" /></tr>
                <tr><p>Mongoose</p></tr>
                <tr><img src="./images/logos/ajax.svg" alt="ajax" /></tr>
                <tr><p>AJAX</p></tr>
              </table> */}


            </div>



          </div>
        </section>
      </Fragment >
    )
  }
}