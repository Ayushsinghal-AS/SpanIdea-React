import React from 'react'

const ProductsPage = () => {
  return (
    <>
    <div className='row'>
        <div className='column'>
            <img src="https://spanidea.com/wp-content/uploads/2021/08/Spanidea-Website-V1-Images-6.jpg" style={{width:"75%",height:"80%",padding:"10%"}} />
            <div className='blog-title'>
                <h3><b>Product Engineering</b></h3>
            </div>
        </div>

        <div className='column'>
            <img src="https://spanidea.com/wp-content/uploads/2021/08/Spanidea-Website-V1-Images-5.jpg" style={{width:"75%",height:"80%",padding:"10%"}} />
            <div className='blog-title'>
                <h3><b>Technology Colsulting</b></h3>
            </div>
        </div>

        <div className='column'>
            <img src="https://spanidea.com/wp-content/uploads/2021/08/Spanidea-Website-V1-Images-4.jpg" style={{width:"75%",height:"80%",padding:"10%"}} />
            <div className='blog-title'>
                <h3><b>Digital Engineering</b></h3>
            </div>
        </div>

    </div>
    </>
  )
}

export default ProductsPage;