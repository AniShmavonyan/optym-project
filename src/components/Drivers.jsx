// import { useState } from "react";
import '../App.css'
// import AddDriver from './components/AddDriver'
export default function Drivers({data}) {

    return (
        <div>
    <table>
            <thead>
                <tr>
                    <th>
                        Name
                    </th>
                    <th>
                        Email
                    </th>
                    <th>
                        Phone
                    </th>
                </tr>
            </thead>
            <tbody>
                {/* {data.forEach((d) => {
                    return (
                        <tr key={d.id}>
                            <td>{d.nameAdd}</td>
                            <td>{d.emailAdd}</td>
                            <td>{d.phoneAdd}</td>
                            </tr>
                    )
                })
            }
             */}
                {data => <tr key={data.id}>
                    <td>{data.nameAdd}</td>
                    <td>{data.emailAdd}</td>
                    <td>{data.phoneAdd}</td>
                </tr>}
            </tbody>
        </table>
        </div>
    )
}
