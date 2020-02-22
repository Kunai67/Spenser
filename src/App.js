import React from 'react';
import ExpenseForm from './components/expense/ExpenseForm';
import ExpenseList from './components/expense/ExpenseList';
import Container from './components/utils/Container';
import Nav from './components/utils/Nav';
// import Footer from './components/utils/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom";
import AddCategory from './components/category/AddCategory';
import ViewExpenseByCategory from './components/category/ViewExpenseByCategory';

function App() {
  return (
    <Router>
      <div className="flex">
        <Nav />
        <Container>
          <h1>Spenser</h1>
          <Switch>
            <Route path="/categories/:tagName">
              <ViewExpenseByCategoryPage />
            </Route>
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
      </div>
      {/* <Footer/> */}
    </Router>
  )
}

function Home() {
  return <div>
            <h2>Current Expenses</h2>
            <ExpenseList onMountURL='http://localhost:5000/expenses'/>
          </div>;
}

function CategoriesPage() {
  return <AddCategory />
}

function ExpensesPage() {
  return (
    <div>
      <h2>Add New Expense</h2>
      <ExpenseForm/>
    </div>
  );
}

function ViewExpenseByCategoryPage() {
  let { tagName } = useParams();
  return <ViewExpenseByCategory tagName={tagName}/>
}

export default App;