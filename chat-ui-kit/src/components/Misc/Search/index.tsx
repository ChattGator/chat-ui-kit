import React, { Dispatch, FC, SetStateAction } from "react";
import { SearchIcon } from "@heroicons/react/outline";

interface Props {
	search: string;
	setSearch: Dispatch<SetStateAction<string>>;
	className?: string;
}

const Search: FC<Props> = ({ search, setSearch, className = "" }) => {
	return (
		<div className={`relative ${className}`}>
			<span className="sr-only">Search</span>
			<span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2">
				<SearchIcon className="h-5 w-5 text-blue-600" />
			</span>
			<input
				className="w-full truncate rounded-lg py-3 pl-9 bg-white ring-blue-200 pr-3 text-sm placeholder-slate-400  ring-blue-600 transition-all focus:border-transparent focus:outline-none focus:ring-2 lg:text-base"
				id="search"
				type="search"
				placeholder="Search"
				onChange={(e) => setSearch(e.target.value)}
				value={search}
			/>
		</div>
	);
};

export default Search;
