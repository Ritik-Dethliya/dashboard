function Sorting({ setSortOption }) {
    return (  
        <div className="sorting">
            <select 
                onChange={(e) => setSortOption(e.target.value)}
            >
                <option value="">Sort By</option>
                <option value="nameAsc">Name (A-Z)</option>
                <option value="nameDesc">Name (Z-A)</option>
                <option value="dateDesc">Submission Recent</option>
                <option value="dateAsc">Submission Oldest</option>
                <option value="scoreDesc">Learning Score</option>
            </select>
        </div>
    );
}

export default Sorting;