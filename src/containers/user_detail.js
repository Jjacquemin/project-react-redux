import React, { Component } from 'react'
import { connect } from 'react-redux'

class UserDetail extends Component {
  render(){
    const {myActiveUser} = this.props
    if (!myActiveUser) {
      return (
        <div>Sélectionnez un utilsateur pour démarrer !</div>
      )
    } else {
      return (
        <div>
          <h3>Détail de {myActiveUser.name}</h3>
          <ul>
            <li>Id : {myActiveUser.id}</li>
            <li>Role : {myActiveUser.role}</li>
            <li>Active : {myActiveUser.active}</li>
          </ul>      
        </div>
      )
    }
  }
}

function mapStateToProps(state) {
  return {
    myActiveUser: state.activeUser
  }
}

export default connect(mapStateToProps)(UserDetail)
