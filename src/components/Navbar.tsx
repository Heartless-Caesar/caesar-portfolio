const Navbar = () =>
{

    return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="flex flex-row justify-end">
            <ul className="flex flex-row navbar-nav m-8">
                <li className="px-10 py-5 group flex-shrink-0 dark:text-gray-200 cursor-pointer hover:text-blue-600">
                    01. About me
                </li>
                <li className="px-10 py-5 group flex-shrink-0 dark:text-gray-200 cursor-pointer hover:text-blue-600">
                    02. Experience
                </li>
                <li className="px-10 py-5 group flex-shrink-0 dark:text-gray-200 cursor-pointer hover:text-blue-600">
                    03. Projects
                </li>
                <li className="px-10 py-5 group flex-shrink-0 dark:text-gray-200 cursor-pointer hover:text-blue-600">
                    04. Contact
                </li>
            </ul>
        </div>
    </nav>)
}

export default Navbar;