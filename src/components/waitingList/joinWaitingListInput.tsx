const JoinWaitingListInput = () => {
    return (
        <form>
            <label for="search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div class="relative">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">

                </div>
                <input type="search" id="search"
                       class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                       placeholder="Your Email" required />
                    <button type="submit"
                            class="text-white absolute right-1 bottom-2.5 bg-transparent border-2 text-sm rounded-full p-1.5">
                        Join Waiting List
                    </button>
            </div>
        </form>

)
};

export default JoinWaitingListInput