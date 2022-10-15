import React from 'react'


class User extends React.Component {

    render() {
        const { user, toggle } = this.props
        let starIcon = user.isFavorite ? "star-filled.png" : "star-empty.png"

        return (
            <div className="group relative">
                <div className="flex flex-col justify-center items-center min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                    <img
                        src={user.picture.large}
                        alt=""
                        className="h-full w-full  object-cover object-center"
                    />
                </div>
                <img
                    src={require(`../images/${starIcon}`)}
                    className="h-8 w-auto"
                    onClick={toggle}
                    alt=""
                />
                <div className="mt-4 flex justify-between">
                    <div>
                        <h2 className="text-gray-700 text-lg dark:text-white">
                            { user.name.title } { user.name.first } { user.name.last }
                        </h2>
                        <p className="mt-1 text-sm text-gray-500 dark:text-white">{user.phone}</p>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">{user.email}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default User