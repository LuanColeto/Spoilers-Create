import React from 'react';
import { Route, BrowserRouter} from 'react-router-dom';

//Pages
import Spoilers from './pages/Spoilers';
import CreateSpoilers from './pages/CreateSpoiler';
import DeleteSpoilers from './pages/DeleteSpoiler';
import UpdateSpoilers from './pages/UpdateSpoiler';

const Routes = () => {
  return (
      <BrowserRouter>
          <Route component={Spoilers} path="/" exact />
          <Route component={CreateSpoilers} path="/create" />
          <Route component={DeleteSpoilers} path="/delete" />
          <Route component={UpdateSpoilers} path="/update" />
      </BrowserRouter>
  )
};

export default Routes;
