import React from 'react';
import { useField, withCondition } from 'payload/components/forms';

import './TextArray.scss';

const TextArray: React.FC<{ label: string; name: string; path: string }> = ({ label, name, path }) => {
	const { value, setValue } = useField<string[]>({ path });

	const updateValue = (inputValue: string, index: number) => {
		const newValue = [...value];
		newValue[index] = inputValue;
		setValue(newValue);
	};

	const addItem = () => {
		const newValue = [...value];
		newValue.push('');
		setValue(newValue);
	};

	const removeItem = (index: number) => {
		const newValue = [...value];
		newValue.splice(index, 1);
		setValue(newValue);
	};

	return (
		<div className="payload-cms-text-array-field-type-text">
			<div className="payload-cms-text-array-field-header">{label}</div>
			{value?.map((item, index) => (
				<div>
					<div className="payload-cms-text-array-field-input-label">
						{label} {index + 1}
					</div>
					<div className="payload-cms-text-array-field-input-container">
						<input name={name} value={value[index]} onChange={e => updateValue(e.target.value, index)} />
						<div className="payload-cms-text-array-field-input-remove" onClick={() => removeItem(index)}>
							<svg
								width="25"
								height="25"
								className="clear-indicator__icon icon icon--x"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 25 25"
							>
								<line className="stroke" x1="8.74612" y1="16.347" x2="16.3973" y2="8.69584"></line>
								<line className="stroke" x1="8.6027" y1="8.69585" x2="16.2539" y2="16.3471"></line>
							</svg>
						</div>
					</div>
				</div>
			))}
			<button className="payload-cms-text-array-field-button" type="button" onClick={addItem}>
				Add {label}
			</button>
		</div>
	);
};

export default withCondition(TextArray);
