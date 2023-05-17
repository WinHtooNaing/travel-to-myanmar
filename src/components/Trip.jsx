import './trip.css';
const Trip = () => {
    return (
        <div className='trip'>
            <h1>Other Popular Destinations</h1>
            <p>you can discover unique
                destinations using Google Maps
            </p>
          
          <div className="tripcard">

          <div className="t-card">
            <div className="t-image">
                <img src="https://images.unsplash.com/photo-1634282101875-799666a0a40e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bXlhbm1hciUyMHRyYXZlbCUyMGthbGF3fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="kalaw" />
                    </div>
                <h4>Kalaw , Shan State</h4>
                <p>
                Kalaw is a hill town in the Shan State of Myanmar.
                 It is located in Kalaw Township in Taunggyi District. 
                 The town was popular with the British during colonial rule. 
                 Kalaw is the main setting of the novel Das Herzenhören by Jan-Philipp Sendker.
                 The hill station is located at an elevation of 1310 metres, 50 km from the Inle lake.
                </p>
           
          </div>

          <div className="t-card">
            <div className="t-image">
                <img src="https://th.bing.com/th/id/R.c649708e6cc5e6e5ed4bdc360dfd1007?rik=zePLOKSGYlPexw&pid=ImgRaw&r=0" alt="kalaw" />
            </div>
                <h4>Chaung Thar Beach</h4>
                <p>
                Chaungtha is a town and beach resort located in Shwethaungyan Subtownship, Pathein Township, Ayeyarwady Region, Myanmar. Chaungtha Beach, as it is more commonly known, is about 5 hours' drive away from Yangon, and is a popular resort with Yangonites from October to April. As it is relatively more affordable than the nearby Ngwesaung and Ngapali beaches.
                </p>
           
          </div>

          <div className="t-card">
            <div className="t-image">
                <img src="https://pbs.twimg.com/media/DBmawfkUIAA3CMD.jpg" alt="kalaw" />
            </div>
                <h4>Hkakabo Razi</h4>
                <p>
                Hkakabo Razi is believed to be Myanmar's highest mountain. The 5,881-meter (19,295 ft)-tall mountain is the highest mountain in Southeast Asia as well. It is located in the northern Myanmar state of Kachin in an outlying subrange of the Greater Himalayan mountain system near the border tripoint with
                India and China. 
                </p>
            
          </div>

          </div>
          

        </div>
    )
}



export default Trip;