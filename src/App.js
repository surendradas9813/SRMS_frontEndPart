import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './scss/style.scss';

import AdminForm from './views/base/forms/AdminForm';
import TeacherForm from './views/base/forms1/TeacherForm';
import StudentForm from './views/base/forms3/StudentForm';

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const TheLayout = React.lazy(() => import('./containers/TheLayout'));

// Pages
const Login = React.lazy(() => import('./components/Auth/Auth'));
const Register = React.lazy(() => import('./views/pages/register/Register'));
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'));
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'));

class App extends Component {

  render() {
    return (
      <BrowserRouter>
          <React.Suspense fallback={loading}>
            <Switch>
              <Route path="/" exact component={Login} />

             
             <Route path="/dashboard" exact component={TheLayout} />

             <Route path="/adminForm" exact component={AdminForm} /> 


             <Route path="/teacherForm" exact component={TeacherForm} />

             <Route path="/student/:id" exact component={StudentForm} />
            </Switch>
          </React.Suspense>
      </BrowserRouter>
    );
  }
}

export default App;
