import React from 'react';
import Home from './home.jsx';
import About from './about.jsx';
import MyDisplayInfo from './MyDisplayInfo.jsx';
import Employee from './Employee.jsx';
import Sum from './sum.jsx';
import MyInformation from './MyInformation.jsx';
import MyInfo from './MyInfo.jsx';
import MyInformationExample from './MyInformationExample.jsx';
import Information from './information.jsx';
import DynamicForm from './DynamicForm.jsx';
import DynamicTicketForm from './DynamicTicketForm.jsx';
import EmployeeList from './EmployeeList.jsx';
import ToDoList from './ToDoList.jsx';
import RealtimeExample from './RealtimeExample.jsx';
import MainData from './MainData.jsx';
import Layout from './Layout.jsx';
import MyExample from './MyExample.jsx';
import ErrorBoundry from './ErrorBoundry.jsx';
import MyAnothertExample from './MyAnothertExample.jsx';
// import { ErrorBoundry } from 'react-error-boundary';
import ErrorPage from './ErrorPage.jsx';


function App() {
  return (
    <>
    <ErrorBoundry FallbackComponent={ErrorPage}>
      {/* <Home />
      <MyInformation />
      <About />
      <Employee />
      <Sum />
      <MyInfo />
      <MyInformationExample />
      <Information />
      <DynamicForm />
      <DynamicTicketForm />
      <MyDisplayInfo />
      <EmployeeList />
      <ToDoList />
      <RealtimeExample /> 
      <MainData /> 
      <Layout /> 
      <MyExample /> */}
      

      {/* <Home />
      <MyInformation />
      <About />
      <Employee />
      <Sum />
      <MyInfo />
      <MyInformationExample />
      <Information />
      <DynamicForm />
      <DynamicTicketForm />
      <MyDisplayInfo /> */}
      <EmployeeList />
      {/* <ToDoList />
      <RealtimeExample /> 
      <MainData /> 
      <Layout /> 
      <MyExample /> */}
      <MyAnothertExample />
      </ErrorBoundry>
    </>
  );
}
export default App;
