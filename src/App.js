import React from 'react';
import ExpenseForm from './components/expense/ExpenseForm';
import ExpenseList from './components/expense/ExpenseList';
import Container from './components/utils/Container';
import Nav from './components/utils/Nav';
import Footer from './components/utils/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <h1>Spenser</h1>
      <Nav />
      <Container>
        <Switch>
          <Route path="/categories">
            <CategoriesPage />
          </Route>
          <Route path="/expenses">
            <ExpensesPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Container>
      <Footer/>
    </Router>
  )
}

function Home() {
  return <div>
    <h2>Home</h2>
    <ExpenseList />
  </div>;
}

function CategoriesPage() {
  return <h2>About</h2>;
}

function ExpensesPage() {
  return (
    <div>
      <h2>Add New Expense</h2>
      <ExpenseForm />
    </div>
  );
}

export default App;