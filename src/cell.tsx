import React from 'react';

const Cell: React.FC<{ cellData: string[] }> = ({ cellData }) => {
	return Array.isArray(cellData) ? cellData.join(', ') : cellData;
};

export default Cell;
