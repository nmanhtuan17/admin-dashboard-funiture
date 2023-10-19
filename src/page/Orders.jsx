import { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { AiOutlineDelete } from 'react-icons/ai'
import axios from 'axios';
const Products = () => {
    const [orders, setOrders] = useState(null)
    const [isFetching, setIsFetching] = useState(true)
    useEffect(() => {
        if (isFetching) {
            getOrders()
            setIsFetching(false)
        }
    }, [isFetching])
    const getOrders = async () => {

        try {
            const res = await axios.get('http://localhost:8080/order')
            if (res.status === 200) {
                setOrders(res.data)
            }
        } catch (error) {
            console.log(error);
        }
    }

    
    return (
        <Table striped bordered hover className='container'>
            <thead>
                <tr>
                    <th>STT</th>
                    <th>Tên sản phẩm</th>
                    <th>Khách hàng</th>
                    <th>Số lượng</th>
                    <th>Giá</th>
                    <th>Địa chỉ giao hàng</th>
                    <th>Trạng thái</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {orders && orders.map((order, index) => {
                    return (
                        <tr key={order._id}>
                            <td> {index + 1} </td>
                            <td>{order.productId.title}</td>
                            <td>{order.userId}</td>
                            <td>{order.qty}</td>
                            <td>{order.total}</td>
                            <td>{order.address}</td>
                            <td>{order.delivery_status}</td>
                            <td>
                                <div style={{ color: 'red', cursor: 'pointer' }} >
                                    <AiOutlineDelete />
                                </div>
                            </td>
                        </tr>
                    )
                })}

            </tbody>
        </Table>
    );
}

export default Products;
