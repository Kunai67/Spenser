import React from 'react';

// Import Category Components
import { ViewExpenseByCategory } from "./components/category/category.export";

// Import Utility Components
import { Nav } from "./components/utils/utils.export";

// Import from React Router
import { BrowserRouter as Router, Switch, Route, useParams } from "react-router-dom";

// Import Pages
import { CategoryPage, ExpensePage, GraphPage, HomePage } from "./pages/pages.export";


function App() {
  return (
    <Router>
      <div>
        <Nav />
          <Switch>
            <Route path="/categories/:tagName">
              <ViewExpenseByCategoryPage />
            </Route>
            <Route path="/categories">
              <CategoryPage />
            </Route>
            <Route path="/graph">
              <GraphPage />
            </Route>
            <Route path="/expenses">
              <ExpensePage />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
      </div>
    </Router>
  )
}

function ViewExpenseByCategoryPage() {
  let { tagName } = useParams();
  return <ViewExpenseByCategory tagName={tagName}/>
}

export default App;