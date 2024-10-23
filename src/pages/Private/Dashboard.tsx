import PrivateLayout from "../../layouts/PrivateLayout"

const Dashboard = () => {
    return (
        <>
            <PrivateLayout>
                <div className="mx-auto max-w-7xl mt-4 bg-gray-300 py-8 px-4 rounded-lg">
                    <h1>Dashboard</h1>
                </div>
            </PrivateLayout>
        </>
    )
}

export default Dashboard