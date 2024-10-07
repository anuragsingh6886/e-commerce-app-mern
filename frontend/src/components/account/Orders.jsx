import React from 'react';
import { Link } from 'react-router-dom';
import EmptyIcon from '../../assetes/images/EmptyState.svg';
import RightArrow from '../../assetes/icons/ArrowRight.svg';

const Orders = () => {

    // useEffect(() => {
    //     fetch('http://localhost:3001/orders')
    //         .then(response => response.json())
    //         .then(data => setOrders(data));
    // }, []);

    return (
        <div className='order-history-container'>
            <div>
               {/* { orders.length = 0 ? ( */}
                   <div className='d-flex flex-column gap-3 justify-content-center align-items-center'>
                        <div className='order-history-icon d-flex justify-content-center align-items-center'>
                            <img src={EmptyIcon} alt="" />
                        </div>
                        <div className='order-history d-flex flex-column gap-3 justify-content-center align-items-center'>
                            <p>Your order history is waiting to be filled.</p>
                            <Link to="/products"><button className='order-history-btn'>Start Shopping <img src={RightArrow} alt="arrow right" className='arrow' /> </button></Link>
                        </div>
                   </div>
               {/* ) : (
                   orders.map(order => (
                    <li key={order.id}>{order.id}</li>
                ))
               )} */}
            </div>
        </div>
    );
}

export default Orders;