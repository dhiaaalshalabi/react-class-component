import React from "react"
import axios from "axios";
import User from "./User";

class Users extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            usersList: [],
            isLoaded: false
        }
    }

    componentDidMount() {
        this.getUserData().then(response => {
            const users = response.data.results.map(user => {
                return {
                    ...user,
                    isFavorite: false
                }
            })
            this.setState({ isLoaded: true, usersList: users })
        })
    }

    getUserData = async () => {
        return await axios.get("https://randomuser.me/api/?results=12&gender=male")
    }

    toggleFavorite = (uuid) => {
        this.setState({
            usersList: this.state.usersList.map(user => {
                return user.login.uuid === uuid ? { ...user, isFavorite: !user.isFavorite } : user
            })
        })
    }

    render() {

        const { isLoaded, usersList } = this.state;
        return (
            isLoaded ? (
                <div className="bg-white dark:bg-slate-800">
                    <div className="lg:text-center">
                        <p className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">List of random users generated from API</p>
                    </div>
                    <div className="mx-auto max-w-2xl py-4 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                            {usersList.map(user => {
                                return (
                                    <User key={user.login.uuid} user={user} toggle={() => this.toggleFavorite(user.login.uuid)} />
                                )
                            })}
                        </div>
                    </div>
                </div>
            ) : <div className="grid h-screen place-items-center">
                <img
                    className="h-20 w-20 object-cover object-center"
                    src="https://raw.githubusercontent.com/nickbruun/svg-loaders/master/ios-spinner.svg"
                    alt=""
                />
            </div>
        )
    }
}

export default Users
