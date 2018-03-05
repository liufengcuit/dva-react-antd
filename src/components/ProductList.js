import React from 'react';
import PropTypes from 'prop-types';
import { Table, Popconfirm, Button } from 'antd';

const ProductList = ({ onDelete, products }) => {
	const columns = [{
		title: 'ID',
		dataIndex: 'id',
		key: 'id'
	},{
		title: 'Name',
		dataIndex: 'name',
		key: 'name',
	},
	
	{
		title: 'Actions',
		key: 'actions',
		render: (text, record) => {
			return (
				<Popconfirm title="删除？" onConfirm={ () => onDelete(record.id) } cancelText="取消" okText="确定">
					<Button>删除</Button>
				</Popconfirm>
			);
		},
	}];

	return (
		<Table
			dataSource = {products}
			columns = {columns}
		/>
	);
}

ProductList.propTypes = {
	onDelete: PropTypes.func.isRequired,
	products: PropTypes.array.isRequired,
};


export default ProductList;