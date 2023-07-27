const JoinWaitingListInput = () => {
    return (
        <form className="w-30">
            <label htmlFor="search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div className="relative">
                <input type="search" id="search"
                       className="block w-full p-4 pl-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-transparent dark:text-white"
                       placeholder="Your Email" required/>
                <button type="submit"
                        className="text-white absolute right-1 bottom-2.5 bg-transparent border-2 text-xs rounded-full p-1.5">
                    Join Waiting List
                </button>
            </div>
        </form>

    )
};

export default JoinWaitingListInput