import css from './SearchBox.module.css';

const SearchBox = ({ value, onSearch }) => {
	return (
		<div>
			<p className={css.label}>Search by name</p>
			<input
				className={css.search}
				type='text'
				value={value}
				onChange={e => onSearch(e.target.value)}
			/>
		</div>
	);
};

export default SearchBox;
