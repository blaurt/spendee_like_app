import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Roster from './Roster'
import Schedule from './Schedule'

import {Links} from "../utils/routerLinks";

const Main = () => (
  <main>
    <Switch>
      <Route exact path={Links.home} component={()=><div>Home</div>}/>
      <Route path={Links.records} component={()=><div>recodrs</div>}/>
      <Route path={Links.categories} component={()=><div>categoruies</div>}/>
      <Route path={Links.details} component={()=><div>details</div>}/>
      <Route path={Links.about} component={()=><div>about</div>}/>
    </Switch>
  </main>
)

export default Main
