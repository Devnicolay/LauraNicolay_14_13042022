import React, {useState, useEffect} from 'react';
interface PropsData {
	dataList: string []
}

const DataTable = (props: PropsData) => {

	console.log(props.dataList)

	// const [userList, setUserList] = useState([])

	// useEffect(() => {
	// 	setUserList(props.dataList)
	// }, [])

	// userList && Object.keys(userList[0]).map((key) => 
	// 	console.log(key)
	// )

	console.log(props.dataList)

    return (
            <table id="data-table">
				<thead>
					<tr>
						{/* Return keys of value for columns table */}
						{props.dataList && Object.keys(props.dataList[0]).map((key, index) => {
							return (<th key={index}>{key}</th>)
						})}
					</tr>
				</thead>
				<tbody>
					{
						props.dataList.map((user, index) => {
							return (
							<tr>
								<td key="1">{user.firstName}</td>
								<td key="2">{user.lastName}</td>
								<td key="3">{user.dateOfBirth}</td>
								<td key="4">{user.startDate}</td>
								<td key="5">{user.street}</td>
								<td key="6">{user.city}</td>
								<td key="7">{user.state}</td>
								<td key="8">{user.zipCode}</td>
								<td key="9">{user.department}</td>
							</tr>
							)
						})
					}
                </tbody>
            </table>
    );
};

export default DataTable;