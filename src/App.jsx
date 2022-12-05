import React from 'react';
import './App.css';
import logo from './logo.svg';

import { getUsers } from './getUsers';
import { List } from './List';
import { ListItem } from './ListItem';
import { User } from './User';
import { EmptyUsersList } from './EmptyUsersList';
import { SearchInput } from './SearchInput';
import { useDebounce } from './useDebounce';

/**
 * Live coding challenge at realworld-one
 *
 * Rules:
 * - You are only allowed to change this file (App.jsx)
 * - You have 40 minutes to complete as much of this exercise as possible
 * - Focus on the core functionality and if you have time make sure UX, A11y, SEO etc are good
 *
 * Acceptance criteria:
 * - Display a list of users returned from `getUsers`
 * - The list should be sortable by the `user.lastLogin` property
 * - the list can be filtered in real time using the search input (`getUsers` accepts a "query" parameter)
 * - If there are no users to list we should render the EmptyUsersList with a custom message saying:
 *      `We cannot find ${query} on our user list.`
 * - Keep performance in mind and avoid unneccesary network traffic
 *
 * Discussion:
 * - Do you see any edge cases or areas of improvement if this code was used in a real world app?
 * - How would you make sure that the search query persists after a page refresh
 */

function App() {
  /**
   * Add your code here
   */

  return (
    <div className='App'>
      <header className='App-header'>
        <img className='App-logo' src={logo} alt='realworldone' />
        <h2>Contact list</h2>
        <p>
          The instructions are commented at the top of these file, please open the project in your
          preferred IDE and check it out
        </p>
      </header>

      {/* <SearchInput value={...} /> */}

      {/* <div className='Sort'>
        <label>Sort by:</label>
        <select name='sort'>
          <option>--Please choose an option--</option>
          <option>Date &#8593;</option>
          <option>Date &#8595;</option>
        </select>
      </div> */}

      {/* <EmptyUsersList /> */}

      {/* <List isLoading={...}>
        <ListItem><User {...user} /></ListItem>
      </List> */}
    </div>
  );
}

export default App;
