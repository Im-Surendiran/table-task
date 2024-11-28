import React, {useState} from 'react'
import Search from './Search';

const Table = ({ users, setUsersData }) => {

    const [sortOrder, setSortOrder] = useState('none');
    const sortData = () => {
        const sortedData = [...users];
        if (sortOrder === 'ascending') {
            console.log('ass');
            sortedData.sort((a, b) => a.name.localeCompare(b.name)); // Ascending
            setSortOrder('descending');
        } else if (sortOrder === 'descending') {
            sortedData.sort((a, b) => b.name.localeCompare(a.name)); // Descending
            setSortOrder('none');
            console.log('ass');
        } else {
            setSortOrder('ascending'); // Reset to default (unsorted)
            console.log('ff');
        }
        setUsersData(sortedData);
    };
    return (
        <div>
            <table class="w-full mt-4 text-left table-auto min-w-max">
                <thead>
                    <tr>
                        <th
                            class="p-4 transition-colors cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 hover:bg-blue-gray-50">
                            <p
                                class="flex items-center justify-between gap-2 font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                                ID
                            </p>
                        </th>
                        <th onClick={sortData}
                            class="p-4 transition-colors cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 hover:bg-blue-gray-50">
                            <p
                                class="flex items-center justify-between gap-2 font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                                Name
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                    stroke="currentColor" aria-hidden="true" class="w-4 h-4">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"></path>
                                </svg>
                            </p>
                        </th>
                        <th
                            class="p-4 transition-colors cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 hover:bg-blue-gray-50">
                            <p
                                class="flex items-center justify-between gap-2 font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                                Username
                            </p>
                        </th>
                        <th
                            class="p-4 transition-colors cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 hover:bg-blue-gray-50">
                            <p
                                class="flex items-center justify-between gap-2 font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                                City
                            </p>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {users?.map((item, index) => {
                        console.log(index);
                        return (
                            <tr key={index}>
                                <td class="p-4 border-b border-blue-gray-50">
                                    <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                        {item.id}
                                    </p>
                                </td>
                                <td class="p-4 border-b border-blue-gray-50">
                                    <div class="flex items-center gap-3">
                                        <div class="flex flex-col">
                                            <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                                {item.name}
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <td class="p-4 border-b border-blue-gray-50">
                                    <div class="flex flex-col">
                                        <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                            {item.username}
                                        </p>
                                    </div>
                                </td>
                                <td class="p-4 border-b border-blue-gray-50">
                                    <div class="flex flex-col">
                                        <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                            {item.address.city}
                                        </p>
                                    </div>
                                </td>
                            </tr>
                        );
                    })}

                </tbody>
            </table>
        </div>
    )
}

export default Table