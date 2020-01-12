import React from 'react';
import { API_ROOT, HEADERS } from './constants/index'
import DisplayCanvases from './containers/DisplayCanvases'

class UserShow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user: {}
        }
    }

    componentDidMount() {
        fetch(`${API_ROOT}/users/${localStorage["id"]}`)
            .then(resp => resp.json())
            .then(json => {
                this.setState({
                    user: json
                })
            })
    }

    render() {
        const {name, email, bookmarks, pictures} = this.state.user
        return (
            <div className="user-show" >
                <h2>
                    Welcome {name}
                </h2>
                <h3>
                    Email: {email}
                </h3>
                <DisplayCanvases title="Created Canvases" canvases={pictures} />
                <DisplayCanvases title="Bookmarked Canvases" canvases={bookmarks} />
            </div>
        )
    }
}

export default UserShow