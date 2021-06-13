import Categories from './components/Category/Categories';
import Areas from './components/Area/Areas';
import Detail from './components/Detail/Detail';
import Home from './components/Home';
import MoreDetail from './components/Detail/MoreDetail'
import './App.css';

import {
  Switch,
  Route,
  Link,
  BrowserRouter as Router,
} from "react-router-dom";



function App() {
  return (
    <Router>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h6 className="mb-1">Kategoriler</h6>
            <Categories />
          </div>
          <div className="col-md-3">
            <h6 className="mb-1">Bölgeler</h6>
            <Areas />
          </div>
          <div className="col-md-6">
            <Switch>
              
              <Route path={`/detail/:name/:link`}>
                <div className="row" style={{ overflow: 'auto', maxHeight: 700, }}>
                  <Detail />
                </div>
              </Route>
              
              <Route path={`/moredetail/:id`}>
                <MoreDetail />
              </Route>
              
              <Route path={`/`}>
                <Home />
              </Route>

            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
