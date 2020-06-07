import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectUser } from '../actions/index'
import { bindActionCreators } from 'redux'

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
// on souhaite également qu'une action dans react soit dispatcher sur les reducers de redux via mapDispatchToProps ajouté dans le connect entre react et redux
            this.props.myUsers.map(user => {
              return (
                <li className="list-group-item" key={user.id} onClick={ () => this.props.selectUser(user)}>
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({selectUser: selectUser}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList)
