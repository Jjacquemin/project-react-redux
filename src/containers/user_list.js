import React, { Component } from 'react'
import { connect } from 'react-redux'

class UserList extends Component {
  render () {
    return (
      <div>
        <ul className="col-md-4">
          {
// on souhaite afficher les users retournés par le user reducer
// la fonction connect de react-redux nous permet de réaliser un lien entre react et redux 
// on crée une fonction mapStateToProps pour transmettre le state de l'application (redux) dans les props du container (react)
// on connecte à l'export le User List avec le User reducer via mapStateToProps
            this.props.myUsers.map(user => {
              return (
                <li className="list-group-item" key={user.id}>
                  {user.name}
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    myUsers: state.users
  }
}

export default connect(mapStateToProps)(UserList)
