const Search = ({ searchWord, onSearchChange }) => {
    return (
        <div className="form-control">
            <input
                type="text"
                placeholder="오늘의 먹방은?"
                className="input input-bordered w-24 md:w-auto"
                value={searchWord}
                maxLength="10"
                onChange={(e) => onSearchChange(e.target.value)}
            />
        </div>
    );
};

export default Search;
