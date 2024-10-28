import PrivateLayout from "../../layouts/PrivateLayout"

const Dashboard = () => {
    return (
        <>
            <PrivateLayout>
                <div className="m-4 bg-white py-8 px-4 rounded-lg">
                    <h1>Dashboard</h1>
                </div>
            </PrivateLayout>
        </>
    )
}

export default Dashboard