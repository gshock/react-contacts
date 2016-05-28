import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';

// Main component. Renders a SearchBar and a ContactList
class ContactsApp extends Component {
  constructor() {
    super();
    this.state = {
      filterText: ''
    };
  }
  render() {
    return (
      <div>
        <SearchBar />
        <ContactList contacts={this.props.contacts} />
      </div>
    )
  }
}
ContactsApp.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object)
}

//search bar
class SearchBar extends Component {
  render() {
    return <input type="search" placeholder="search" />
  }
}

//contacts list
class ContactList extends Component {
  render() {
    return (
      <ul>
        {this.props.contacts.map(
          (contact) => <ContactItem key={contact.email}
            name={contact.name}
            email={contact.email} />
        ) }
      </ul>
    )
  }
}
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object)
}

//contact item
class ContactItem extends Component {
  render() {
    return <li>{this.props.name} - {this.props.email}</li>
  }
}
ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
}

//contacts data
let contacts = [
  { name: "Cassio Zen", email: "cassiozen@gmail.com" },
  { name: "Dan Abramov", email: "gaearon@somewhere.com" },
  { name: "Pete Hunt", email: "floydophone@somewhere.com" },
  { name: "Paul O’Shannessy", email: "zpao@somewhere.com" },
  { name: "Ryan Florence", email: "rpflorence@somewhere.com" },
  { name: "Sebastian Markbage", email: "sebmarkbage@here.com" },
]

render(<ContactsApp contacts={contacts} />, document.getElementById('root'));