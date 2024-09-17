import {useState} from "react";
import { Dialog, DialogPanel, Input } from '@headlessui/react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

type SearchModalProps = {
    open: boolean;
    onClose: () => void;
}

const SearchModal = ({ open, onClose }: SearchModalProps) => {
    const [searchText, setSearchText] = useState(""); // search text value

    return (
        <Dialog
            open={open}
            onClose={() => onClose()}
            transition
            className="fixed inset-0 flex w-screen items-center justify-center bg-gray-300/50 dark:bg-black/50 p-4 backdrop-blur backdrop-filter transition duration-300 ease-out data-[closed]:opacity-0"
        >
            <DialogPanel className="w-full max-w-xl space-y-4 bg-white rounded-2xl">
                <div>
                    <div className="overflow-hidden rounded-2xl border border-gray-100 bg-gray-50 dark:border-gray-800 dark:bg-gray-900">
                        {/* Search Area */}
                        <div className="flex items-center space-x-4 p-4">
                            <span className="block w-5">
                                <MagnifyingGlassIcon className="text-gray-400 dark:text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" />
                            </span>
                            <Input autoFocus className="h-8 w-full bg-transparent text-gray-600 placeholder-gray-400 focus:outline-none dark:text-gray-200 dark:placeholder-gray-500" aria-expanded aria-controls="kbar-listbox" aria-activedescendant="kbar-listbox-item-1" 
                                placeholder="Type a command or search…" 
                                value={searchText} 
                                onChange={(e) => setSearchText(prevState => e.target.value)}/>
                            <kbd className="inline-block whitespace-nowrap rounded border px-1.5 align-middle font-medium leading-4 tracking-wide text-xs text-gray-400 border-gray-400">ESC</kbd>
                        </div>

                        <div className="max-h-[400px] relative overflow-auto">
                            <div role="listbox" id="kbar-listbox" className="h-[621px] w-full flex flex-col">
                                {/* Search Label */}
                                <div id="kbar-listbox-item-0" role="option" aria-selected="false" className="w-full">
                                    <div>
                                        <div className="pt-3">
                                            <div
                                                className="block border-t border-gray-100 px-4 pb-2 pt-6 text-xs font-semibold uppercase text-primary-600 dark:border-gray-800">
                                                Content</div>
                                        </div>
                                    </div>
                                </div>
                                {/* Search Results */}
                                <div id="kbar-listbox-item-1" role="option" aria-selected="false" className="w-full">
                                    <div>
                                        <div className="flex cursor-pointer justify-between px-4 py-2 text-gray-700 dark:text-gray-100 bg-transparent">
                                            <div className="flex space-x-2">
                                                <div className="block">
                                                    <div className="text-gray-400 text-xs">August 5, 2023</div>
                                                    <div>Release of Tailwind Nextjs Starter Blog v2.0</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </DialogPanel>
        </Dialog>
    )
}

export default SearchModal;