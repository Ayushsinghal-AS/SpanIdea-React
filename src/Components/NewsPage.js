import React from 'react'

const NewsPage = () => {
    return (
        <>
            <div className="Cream"><h3><b>SpanIdea Focus Area</b></h3>
                <div className='w-100 row2'>
                    <div className='w-75 h-25'>
                        <div className='row1'>
                            <div className='column1'>
                                <img src="https://spanidea.com/wp-content/uploads/2021/08/11.jpg" style={{ width: "75%", height: "80%" }} />
                                <div className='blog-title'>
                                    <h4><b>Automotive</b></h4>
                                </div>
                            </div>
                            <div className='column1'>
                                <img src="https://spanidea.com/wp-content/uploads/2021/08/9.jpg" style={{ width: "75%", height: "80%" }} />
                                <div className='blog-title'>
                                    <h4><b>Cloud Engineering</b></h4>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='w-75 h-25'>
                        <div className='row1'>
                            <div className='column1'>
                                <img src="https://spanidea.com/wp-content/uploads/2021/08/Spanidea-Website-V1-Images-3.jpg" style={{ width: "75%", height: "80%" }} />
                                <div className='blog-title'>
                                    <h4><b>5G</b></h4>
                                </div>
                            </div>
                            <div className='column1'>
                                <img src="https://spanidea.com/wp-content/uploads/2021/08/6.jpg" style={{ width: "75%", height: "80%" }} />
                                <div className='blog-title'>
                                    <h4><b>Embedded Engineering</b></h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className='column2'>
                        <img src="https://spanidea.com/wp-content/uploads/2021/08/Focus-area1.jpg" style={{ width: "25%", height: "75%" }} />
                        <div className='blog-title'>
                            <h4><b>AI & ML</b></h4>
                        </div>
                    </div> */}
                </div>
            </div>
        </>
    )
}

export default NewsPage