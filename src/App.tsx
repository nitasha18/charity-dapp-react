import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home } from './components/Home/Home';
import { CreateCampaign } from './components/CreateCampaign/CreateCampaign';
import { CreateCampaignStep2 } from './components/CreateCampaignStep2/CreateCampaignStep2';
import { CreateCampaignStep3 } from './components/CreateCampaignStep3/CreateCampaignStep3';
import { CreateCampaignStep4 } from './components/CreateCampaignStep4/CreateCampaignStep4';
import { Profile } from './components/Profile/Profile';
import { ExploreCampaign } from './components/ExploreCampaign/ExploreCampaign';
import { CampaignDetails } from './components/CampaignDetails/CampaignDetails';



import './App.css';
import { NavbarMain } from './components/Navbar/';
import { Footer } from './components/Footer/';

function App() {
  return (
    <div className="App">
      <NavbarMain />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/CreateCampaign" exact component={CreateCampaign} />
          <Route path="/CreateCampaignStep2" exact component={CreateCampaignStep2} />
          <Route path="/CreateCampaignStep3" exact component={CreateCampaignStep3} />
          <Route path="/CreateCampaignStep4" exact component={CreateCampaignStep4} />
          <Route path="/Profile" exact component={Profile} />
          <Route path="/ExploreCampaign" exact component={ExploreCampaign} />
          <Route path="/CampaignDetails" exact component={CampaignDetails} />



        </Switch>
 
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;




    